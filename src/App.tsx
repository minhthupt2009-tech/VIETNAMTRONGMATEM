import React, { useState, useEffect } from 'react';
import { Map as MapIcon, Compass, Trophy } from 'lucide-react';
import VietnamMap from './components/VietnamMap';
import ProvinceInfo from './components/ProvinceInfo';
import Gameshow from './components/Gameshow';
import AIAssistant from './components/AIAssistant';
import { getProvinceData, Province } from './data/provinces';

export default function App() {
  const [selectedProvinceName, setSelectedProvinceName] = useState<string | null>(null);
  const [userLoc, setUserLoc] = useState<{ lat: number; lng: number } | null>(null);
  
  // Hover Tooltip State
  const [hoverTooltip, setHoverTooltip] = useState<{ name: string; x: number; y: number } | null>(null);

  // Gameshow State
  const [gameshowMode, setGameshowMode] = useState<'general' | 'province' | null>(null);

  // Get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setUserLoc({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        (err) => console.warn("Geolocation error:", err)
      );
    }
  }, []);

  const handleProvinceHover = (name: string, e: React.MouseEvent) => {
    setHoverTooltip({ 
      name, 
      x: e.clientX, 
      y: e.clientY 
    });
  };

  const handleProvinceLeave = () => {
    setHoverTooltip(null);
  };

  const handleProvinceClick = (name: string, e: React.MouseEvent) => {
    setSelectedProvinceName(name);
  };

  const selectedProvince: Province | null = selectedProvinceName ? getProvinceData(selectedProvinceName) : null;

  return (
    <div className="flex flex-col md:flex-row h-[100dvh] bg-slate-50 overflow-hidden font-sans relative">
      {/* Gameshow Overlay */}
      {gameshowMode && (
        <Gameshow 
          mode={gameshowMode} 
          province={gameshowMode === 'province' ? selectedProvince : null} 
          onClose={() => setGameshowMode(null)} 
        />
      )}

      {/* Hover Tooltip at Mouse Position */}
      {hoverTooltip && (
        <div 
          className="fixed z-50 bg-slate-800 text-white px-3 py-2 rounded-lg shadow-xl text-sm font-medium pointer-events-none"
          style={{ 
            top: Math.min(hoverTooltip.y + 15, window.innerHeight - 40), 
            left: Math.min(hoverTooltip.x + 15, window.innerWidth - 100) 
          }}
        >
          {hoverTooltip.name}
        </div>
      )}

      {/* Left Panel: Map */}
      <div className="w-full md:w-1/2 lg:w-[55%] h-[50dvh] md:h-full flex flex-col relative border-b md:border-b-0 md:border-r border-slate-200 shadow-sm z-0 bg-blue-50/30">
        
        {/* Header (Normal flow on mobile, Absolute on desktop) */}
        <div className="flex justify-between items-start p-3 md:absolute md:top-6 md:left-6 md:right-6 md:p-0 z-20 pointer-events-none">
          <div className="bg-white/90 backdrop-blur px-3 py-2 md:px-5 md:py-3 rounded-xl md:rounded-2xl shadow-sm md:shadow-lg border border-slate-100 flex items-center gap-2 md:gap-3 pointer-events-auto">
            <div className="bg-blue-600 p-1.5 md:p-2 rounded-lg md:rounded-xl">
              <MapIcon className="text-white w-4 h-4 md:w-6 md:h-6" />
            </div>
            <div>
              <h1 className="font-bold text-slate-800 text-sm md:text-lg leading-tight">Vietnam GeoExplorer</h1>
              <p className="text-[10px] md:text-xs font-medium text-slate-500 uppercase tracking-wider">Bản đồ 34 Tỉnh Thành</p>
            </div>
          </div>

          {/* Gameshow Button (General) */}
          <button
            onClick={() => setGameshowMode('general')}
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-2 md:px-4 md:py-2.5 rounded-lg md:rounded-xl shadow-sm md:shadow-lg font-bold flex items-center gap-2 hover:scale-105 transition-transform border border-amber-400 pointer-events-auto"
          >
            <Trophy className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">Gameshow Tổng Quát</span>
          </button>
        </div>

        {/* Application Info & Author (Bottom Right) - Hidden on mobile */}
        <div className="hidden md:block absolute bottom-6 right-6 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-md text-sm text-slate-600 pointer-events-none max-w-[320px] text-right border border-slate-200">
          <p className="font-medium text-blue-600 leading-tight">Sản phẩm tham gia cuộc thi Sáng tạo thanh thiếu niên nhi đồng tỉnh Đồng Tháp</p>
          <p className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">Tác giả: Hồ Minh Tỷ - 7A1 - TRƯỜNG THCS PHÚ ĐỨC</p>
        </div>

        {/* Map Container */}
        <div className="flex-1 relative w-full h-full min-h-0">
          <VietnamMap 
            onSelectProvince={handleProvinceClick} 
            onHoverProvince={handleProvinceHover}
            onLeaveProvince={handleProvinceLeave}
            selectedProvinceName={selectedProvinceName} 
          />
        </div>
      </div>

      {/* Right Panel: Info */}
      <div className="w-full md:w-1/2 lg:w-[45%] h-[50dvh] md:h-full overflow-y-auto bg-white z-10 shadow-[-10px_0_20px_-10px_rgba(0,0,0,0.05)]">
        {selectedProvince ? (
          <ProvinceInfo 
            province={selectedProvince} 
            userLoc={userLoc} 
            onStartGameshow={() => setGameshowMode('province')} 
          />
        ) : (
          <div className="h-full flex flex-col items-center justify-center p-6 md:p-10 text-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-50 rounded-full flex items-center justify-center mb-4 md:mb-6">
              <Compass className="w-10 h-10 md:w-12 md:h-12 text-blue-500 animate-pulse" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 md:mb-3">Khám phá Việt Nam</h2>
            <p className="text-sm md:text-base text-slate-500 max-w-sm leading-relaxed mb-8">
              Chạm hoặc rê chuột vào một tỉnh thành trên bản đồ để xem thông tin chi tiết về địa lý, văn hóa, ẩm thực và các địa điểm du lịch nổi bật.
            </p>
            
            {/* Show Author Info on mobile in the right panel instead */}
            <div className="md:hidden bg-slate-50 p-4 rounded-xl border border-slate-100 max-w-sm w-full">
              <p className="text-sm font-medium text-blue-600 leading-tight mb-2">Ứng dụng bản đồ số tương tác "Việt Nam trong tầm tay" tích hợp trí tuệ nhân tạo hỗ trợ học tập Địa lý</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">TÁC GIẢ: Hồ Minh Tỷ</p>
            </div>
          </div>
        )}
      </div>

      {/* AI Assistant */}
      <AIAssistant />
    </div>
  );
}
