import React, { useState, useEffect } from 'react';
import { MapPin, Maximize, Users, BookOpen, Utensils, Camera, Trophy, Image as ImageIcon, TrendingUp, CloudSun, Volume2, VolumeX, Map, Search, Loader2 } from 'lucide-react';
import { Province, Attraction, FoodItem } from '../data/provinces';
import { getClimateDataByRegion } from '../data/climateData';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import AttractionModal from './AttractionModal';
import AttractionCard from './AttractionCard';
import FoodCard from './FoodCard';
import ProvinceItineraryModal from './ProvinceItineraryModal';
import FoodModal from './FoodModal';

interface ProvinceInfoProps {
  province: Province;
  userLoc: { lat: number; lng: number } | null;
  onStartGameshow: () => void;
}

export default function ProvinceInfo({ province, userLoc, onStartGameshow }: ProvinceInfoProps) {
  const [expanded, setExpanded] = useState(false);
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showItinerary, setShowItinerary] = useState(false);
  
  // Custom image state
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Reset state when province changes
  useEffect(() => {
    setExpanded(false);
    setSelectedAttraction(null);
    setSelectedFood(null);
    setShowItinerary(false);
    setCustomImage(null);
    setSearchKeyword("");
    stopSpeaking();
  }, [province.name]);

  const handleSearchImage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchKeyword.trim()) return;
    
    setIsSearching(true);
    try {
      // Search Wikipedia for articles matching the keyword
      const res = await fetch(`https://vi.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(searchKeyword)}&gsrlimit=5&prop=pageimages&piprop=original&format=json&origin=*`);
      const data = await res.json();
      let foundUrl = null;
      
      if (data.query && data.query.pages) {
        const pages = Object.values(data.query.pages) as any[];
        const pageWithImage = pages.find(p => p.original && p.original.source);
        if (pageWithImage) {
          foundUrl = pageWithImage.original.source;
        }
      }
      
      if (foundUrl) {
        setCustomImage(foundUrl);
      } else {
        alert("Không tìm thấy ảnh thực tế cho từ khóa này trên Wikipedia. Đang tạo ảnh minh họa bằng AI...");
        setCustomImage(`https://image.pollinations.ai/prompt/${encodeURIComponent(searchKeyword + ' Vietnam beautiful landscape realistic')}?width=800&height=600&nologo=true`);
      }
    } catch (error) {
      console.error("Error fetching image:", error);
      alert("Có lỗi xảy ra khi tìm kiếm ảnh. Đang dùng ảnh AI thay thế...");
      setCustomImage(`https://image.pollinations.ai/prompt/${encodeURIComponent(searchKeyword + ' Vietnam beautiful landscape realistic')}?width=800&height=600&nologo=true`);
    } finally {
      setIsSearching(false);
    }
  };

  // Cleanup speech synthesis on unmount
  useEffect(() => {
    // Kích hoạt tải danh sách giọng đọc ngay khi component mount (để tránh lỗi mảng rỗng ở lần click đầu tiên trên Chrome)
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }

    return () => {
      stopSpeaking();
    };
  }, []);

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const toggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert('Trình duyệt của bạn không hỗ trợ tính năng đọc văn bản.');
      return;
    }

    if (isSpeaking) {
      stopSpeaking();
    } else {
      const cultureText = province.culture.join('. ');
      const economyText = province.economy.join('. ');
      
      const textToRead = `
        Tỉnh ${province.name}. 
        Khu vực: ${province.region}.
        Diện tích: ${province.area}. 
        Dân số: ${province.population}. 
        Mô tả: ${province.description}.
        Về văn hóa: ${cultureText}.
        Về kinh tế: ${economyText}.
        Khí hậu: ${province.climate}.
      `;
      
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = 'vi-VN';
      utterance.rate = 0.95; // Tăng tốc độ một chút cho tự nhiên hơn
      utterance.pitch = 1;
      
      // Hàm tìm giọng đọc tiếng Việt tối ưu
      const getViVoice = () => {
        const voices = window.speechSynthesis.getVoices();
        
        // 1. Ưu tiên Google Tiếng Việt (thường có trên Chrome/Android)
        let viVoice = voices.find(v => v.name.includes('Google') && v.lang.includes('vi'));
        
        // 2. Ưu tiên Microsoft An (thường có trên Windows Edge)
        if (!viVoice) {
          viVoice = voices.find(v => v.name.includes('Microsoft') && v.name.includes('An') && v.lang.includes('vi'));
        }
        
        // 3. Tìm các giọng có lang vi-VN (không phân biệt hoa thường)
        if (!viVoice) {
          viVoice = voices.find(v => 
            v.lang.toLowerCase() === 'vi-vn' || 
            v.lang.toLowerCase() === 'vi_vn' || 
            v.lang.toLowerCase() === 'vi'
          );
        }
        
        if (!viVoice) {
          // 4. Tìm theo tên hoặc bắt đầu bằng 'vi'
          viVoice = voices.find(v => 
            v.name.toLowerCase().includes('vietnamese') ||
            v.name.toLowerCase().includes('tiếng việt') ||
            v.name.toLowerCase().includes('huyen') ||
            v.name.toLowerCase().includes('an') ||
            v.name.toLowerCase().includes('linh') ||
            v.lang.toLowerCase().startsWith('vi')
          );
        }
        
        return viVoice;
      };

      const viVoice = getViVoice();
      if (viVoice) {
        utterance.voice = viVoice;
      } else {
        const voices = window.speechSynthesis.getVoices();
        console.warn('Không tìm thấy giọng đọc tiếng Việt, sử dụng giọng mặc định.');
        if (voices.length > 0) {
          alert('Trình duyệt hoặc máy tính của bạn chưa được cài đặt giọng đọc Tiếng Việt. Hệ thống sẽ đọc bằng giọng mặc định (có thể lơ lớ tiếng Anh).\n\nMẹo: Hãy sử dụng trình duyệt Google Chrome hoặc cài đặt thêm gói ngôn ngữ Tiếng Việt cho hệ điều hành để nghe rõ nhất.');
        }
      }
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = (event) => {
        console.error('SpeechSynthesis error:', event);
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="p-6 lg:p-10 h-full overflow-y-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-4xl font-bold text-slate-800">{province.name}</h1>
            <p className="text-sm font-medium text-blue-600 uppercase tracking-wider mt-1">{province.region}</p>
          </div>
          <button 
            onClick={toggleSpeech}
            className={`p-2 rounded-full transition-colors ${isSpeaking ? 'bg-blue-100 text-blue-600 animate-pulse' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
            title={isSpeaking ? "Dừng đọc" : "Nghe thông tin"}
          >
            {isSpeaking ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setShowItinerary(true)}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 font-bold rounded-xl hover:bg-blue-200 transition-colors border border-blue-300"
          >
            <Map className="w-5 h-5" />
            Lịch trình AI
          </button>
          <button
            onClick={onStartGameshow}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 font-bold rounded-xl hover:bg-amber-200 transition-colors border border-amber-300"
          >
            <Trophy className="w-5 h-5" />
            Gameshow
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-48 sm:h-64 rounded-2xl overflow-hidden mb-6 relative shadow-md group">
        <img 
          src={customImage || province.image || `https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop`} 
          alt={`Phong cảnh ${province.name}`} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop"; // Generic Vietnam landscape (Hoi An)
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-black/20 flex items-end p-4">
          <span className="text-white font-medium text-lg drop-shadow-md">Khám phá vẻ đẹp {province.name}</span>
        </div>
        
        {/* Custom Image Search UI */}
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black/40 backdrop-blur-md p-2 rounded-xl border border-white/20 shadow-lg">
            <form onSubmit={handleSearchImage} className="flex gap-2">
              <input 
                type="text" 
                value={searchKeyword} 
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="Nhập từ khóa đổi ảnh..." 
                className="px-3 py-1.5 text-sm bg-white/90 border-none rounded-lg focus:ring-2 focus:ring-blue-500 outline-none w-40 sm:w-56 placeholder:text-slate-500"
              />
              <button 
                type="submit"
                disabled={isSearching || !searchKeyword.trim()}
                className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors flex items-center gap-1.5 font-medium"
              >
                {isSearching ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Search className="w-4 h-4" />
                )}
                <span className="hidden sm:inline">Tìm ảnh</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <p className="text-lg text-slate-600 mb-8 leading-relaxed">{province.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
          <MapPin className="text-blue-500 mt-1" />
          <div>
            <p className="text-sm text-slate-500 font-medium">Khu vực</p>
            <p className="text-slate-800 font-semibold">{province.region}</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
          <Maximize className="text-emerald-500 mt-1" />
          <div>
            <p className="text-sm text-slate-500 font-medium">Diện tích</p>
            <p className="text-slate-800 font-semibold">{province.area}</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 sm:col-span-2">
          <Users className="text-amber-500 mt-1" />
          <div>
            <p className="text-sm text-slate-500 font-medium">Dân số</p>
            <p className="text-slate-800 font-semibold">{province.population}</p>
          </div>
        </div>
      </div>

      {!expanded ? (
        <button
          onClick={() => setExpanded(true)}
          className="w-full py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
        >
          Khám phá thêm về {province.name}
        </button>
      ) : (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-800">
              <BookOpen className="text-blue-500" /> Văn hóa
            </h2>
            <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100">
              <ul className="list-disc pl-5 space-y-2">
                {province.culture.map((item, idx) => (
                  <li key={idx} className="text-slate-700 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-800">
              <TrendingUp className="text-purple-500" /> Kinh tế
            </h2>
            <div className="bg-purple-50/50 p-5 rounded-2xl border border-purple-100">
              <ul className="list-disc pl-5 space-y-2">
                {province.economy.map((item, idx) => (
                  <li key={idx} className="text-slate-700 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-800">
              <CloudSun className="text-sky-500" /> Khí hậu
            </h2>
            <div className="bg-sky-50/50 p-5 rounded-2xl border border-sky-100 mb-4">
              <p className="text-slate-700 leading-relaxed">
                {province.climate}
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-slate-700 text-center">Biểu đồ Nhiệt độ và Lượng mưa trung bình</h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    data={getClimateDataByRegion(province.region)}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                  >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="month" scale="band" />
                    <YAxis yAxisId="left" orientation="left" stroke="#ff7300" label={{ value: 'Nhiệt độ (°C)', angle: -90, position: 'insideLeft', offset: -10 }} />
                    <YAxis yAxisId="right" orientation="right" stroke="#387908" label={{ value: 'Lượng mưa (mm)', angle: 90, position: 'insideRight', offset: 10 }} />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="right" dataKey="rain" name="Lượng mưa (mm)" barSize={20} fill="#413ea0" />
                    <Line yAxisId="left" type="monotone" dataKey="temp" name="Nhiệt độ (°C)" stroke="#ff7300" strokeWidth={3} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-800">
              <Utensils className="text-orange-500" /> Ẩm thực đặc trưng
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {province.food.length > 0 ? (
                province.food.map((f, i) => (
                  <FoodCard key={i} food={f} onClick={() => setSelectedFood(f)} />
                ))
              ) : (
                <p className="text-slate-500 italic col-span-full">Đang cập nhật dữ liệu ẩm thực.</p>
              )}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-800">
              <Camera className="text-emerald-500" /> Địa điểm du lịch
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {province.attractions.length > 0 ? (
                province.attractions.map((attr, i) => (
                  <AttractionCard
                    key={i}
                    attraction={attr}
                    onClick={() => setSelectedAttraction(attr)}
                  />
                ))
              ) : (
                <p className="text-slate-500 italic col-span-full">Đang cập nhật địa điểm du lịch.</p>
              )}
            </div>
          </section>
        </div>
      )}

      {selectedAttraction && (
        <AttractionModal
          attraction={selectedAttraction}
          userLoc={userLoc}
          onClose={() => setSelectedAttraction(null)}
        />
      )}

      {showItinerary && (
        <ProvinceItineraryModal
          province={province}
          onClose={() => setShowItinerary(false)}
        />
      )}

      <FoodModal
        isOpen={!!selectedFood}
        onClose={() => setSelectedFood(null)}
        food={selectedFood}
        provinceName={province.name}
      />
    </div>
  );
}
