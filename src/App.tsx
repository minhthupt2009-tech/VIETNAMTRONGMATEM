import React, { useState, useEffect } from 'react';
import { Map as MapIcon, Compass, Trophy } from 'lucide-react';
import VietnamMap from './components/VietnamMap';
import ProvinceInfo from './components/ProvinceInfo';
import Gameshow from './components/Gameshow';
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
    setSelectedProvinceName(name);
  };

  const handleProvinceLeave = () => {
    setHoverTooltip(null);
  };

  const handleProvinceClick = (name: string, e: React.MouseEvent) => {
    setSelectedProvinceName(name);
  };

  const selectedProvince: Province | null = selectedProvinceName ? getProvinceData(selectedProvinceName) : null;

  return (
    <div className="flex flex-col md:flex-row h-screen bg-slate-50 overflow-hidden font-sans relative">
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
      <div className="w-full md:w-1/2 lg:w-[55%] h-[50vh] md:h-full relative border-b md:border-b-0 md:border-r border-slate-200 shadow-sm z-0">
        <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur px-5 py-3 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3 pointer-events-none">
          <div className="bg-blue-600 p-2 rounded-xl">
            <MapIcon className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bold text-slate-800 text-lg leading-tight">Vietnam GeoExplorer</h1>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Bản đồ 34 Tỉnh Thành</p>
          </div>
        </div>

        {/* Gameshow Button (General) */}
        <button
          onClick={() => setGameshowMode('general')}
          className="absolute top-6 right-6 z-20 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2.5 rounded-xl shadow-lg font-bold flex items-center gap-2 hover:scale-105 transition-transform border border-amber-400"
        >
          <Trophy className="w-5 h-5" />
          <span className="hidden sm:inline">Gameshow Tổng Quát</span>
        </button>

        <VietnamMap 
          onSelectProvince={handleProvinceClick} 
          onHoverProvince={handleProvinceHover}
          onLeaveProvince={handleProvinceLeave}
          selectedProvinceName={selectedProvinceName} 
        />
      </div>

      {/* Right Panel: Info */}
      <div className="w-full md:w-1/2 lg:w-[45%] h-[50vh] md:h-full overflow-y-auto bg-white z-10 shadow-[-10px_0_20px_-10px_rgba(0,0,0,0.05)]">
        {selectedProvince ? (
          <ProvinceInfo 
            province={selectedProvince} 
            userLoc={userLoc} 
            onStartGameshow={() => setGameshowMode('province')} 
          />
        ) : (
          <div className="h-full flex flex-col items-center justify-center p-10 text-center">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <Compass className="w-12 h-12 text-blue-500 animate-pulse" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Khám phá Việt Nam</h2>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              Rê chuột vào một tỉnh thành trên bản đồ để xem thông tin chi tiết về địa lý, văn hóa, ẩm thực và các địa điểm du lịch nổi bật.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
