import React, { useState, useEffect } from 'react';
import { MapPin, Maximize, Users, BookOpen, Utensils, Camera, Trophy, Image as ImageIcon, TrendingUp, CloudSun, Volume2, VolumeX } from 'lucide-react';
import { Province, Attraction } from '../data/provinces';
import AttractionModal from './AttractionModal';
import AttractionCard from './AttractionCard';

interface ProvinceInfoProps {
  province: Province;
  userLoc: { lat: number; lng: number } | null;
  onStartGameshow: () => void;
}

export default function ProvinceInfo({ province, userLoc, onStartGameshow }: ProvinceInfoProps) {
  const [expanded, setExpanded] = useState(false);
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Reset state when province changes
  useEffect(() => {
    setExpanded(false);
    setSelectedAttraction(null);
    stopSpeaking();
  }, [province.name]);

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
        Vị trí: ${province.location}. 
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
        // Ưu tiên các giọng có lang vi-VN
        let viVoice = voices.find(v => v.lang === 'vi-VN' || v.lang === 'vi_VN');
        
        if (!viVoice) {
          // Tìm theo tên
          viVoice = voices.find(v => 
            v.name.toLowerCase().includes('vietnamese') ||
            v.name.toLowerCase().includes('tiếng việt') ||
            v.name.toLowerCase().includes('huyen') ||
            v.name.toLowerCase().includes('an') ||
            v.name.toLowerCase().includes('linh')
          );
        }
        
        return viVoice;
      };

      const viVoice = getViVoice();
      if (viVoice) {
        utterance.voice = viVoice;
      } else {
        console.warn('Không tìm thấy giọng đọc tiếng Việt, sử dụng giọng mặc định.');
        // Nếu không có giọng Việt, vẫn để lang là vi-VN để trình duyệt cố gắng giả lập hoặc dùng giọng phù hợp nhất
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
          <h1 className="text-4xl font-bold text-slate-800">{province.name}</h1>
          <button 
            onClick={toggleSpeech}
            className={`p-2 rounded-full transition-colors ${isSpeaking ? 'bg-blue-100 text-blue-600 animate-pulse' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
            title={isSpeaking ? "Dừng đọc" : "Nghe thông tin"}
          >
            {isSpeaking ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </button>
        </div>
        <button
          onClick={onStartGameshow}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 font-bold rounded-xl hover:bg-amber-200 transition-colors border border-amber-300"
        >
          <Trophy className="w-5 h-5" />
          Gameshow {province.name}
        </button>
      </div>

      {/* Hero Image */}
      <div className="w-full h-48 sm:h-64 rounded-2xl overflow-hidden mb-6 relative shadow-md">
        <img 
          src={province.image || `https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=800&auto=format&fit=crop`} 
          alt={`Phong cảnh ${province.name}`} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-4">
          <span className="text-white font-medium text-lg">Khám phá vẻ đẹp {province.name}</span>
        </div>
      </div>
      
      <p className="text-lg text-slate-600 mb-8 leading-relaxed">{province.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
          <MapPin className="text-blue-500 mt-1" />
          <div>
            <p className="text-sm text-slate-500 font-medium">Vị trí</p>
            <p className="text-slate-800 font-semibold">{province.location}</p>
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
            <div className="space-y-2 bg-blue-50/50 p-5 rounded-2xl border border-blue-100">
              {province.culture.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 shrink-0" />
                  <p className="text-slate-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-800">
              <TrendingUp className="text-purple-500" /> Kinh tế
            </h2>
            <div className="space-y-2 bg-purple-50/50 p-5 rounded-2xl border border-purple-100">
              {province.economy.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2.5 shrink-0" />
                  <p className="text-slate-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-800">
              <CloudSun className="text-sky-500" /> Khí hậu
            </h2>
            <p className="text-slate-700 leading-relaxed bg-sky-50/50 p-5 rounded-2xl border border-sky-100">
              {province.climate}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-800">
              <Utensils className="text-orange-500" /> Ẩm thực đặc trưng
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {province.food.length > 0 ? (
                province.food.map((f, i) => (
                  <div key={i} className="group relative overflow-hidden rounded-2xl aspect-square shadow-sm border border-orange-100">
                    <img 
                      src={f.image} 
                      alt={f.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 via-orange-900/30 to-transparent flex items-end p-3">
                      <span className="text-white font-bold text-sm drop-shadow-md">{f.name}</span>
                    </div>
                  </div>
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
    </div>
  );
}
