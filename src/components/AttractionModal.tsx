import React, { useState } from 'react';
import { X, Navigation, MapPinOff, Loader2, Sparkles, Key, Map } from 'lucide-react';
import { Attraction } from '../data/provinces';
import { calculateDistance } from '../utils/distance';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';

declare global {
  interface Window {
    aistudio: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

interface AttractionModalProps {
  attraction: Attraction;
  userLoc: { lat: number; lng: number } | null;
  onClose: () => void;
}

export default function AttractionModal({ attraction, userLoc, onClose }: AttractionModalProps) {
  const [isGeneratingItinerary, setIsGeneratingItinerary] = useState(false);
  const [generatedItinerary, setGeneratedItinerary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const distance = userLoc ? calculateDistance(userLoc.lat, userLoc.lng, attraction.lat, attraction.lng) : null;

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      return url.replace('watch?v=', 'embed/').split('&')[0];
    }
    if (url.includes('youtu.be/')) {
      return url.replace('youtu.be/', 'youtube.com/embed/').split('?')[0];
    }
    return url;
  };

  const handleGenerateItinerary = async () => {
    setIsGeneratingItinerary(true);
    setError(null);
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      
      if (!apiKey) {
        setError("Thiếu API Key. Vui lòng thiết lập GEMINI_API_KEY trong file .env");
        setIsGeneratingItinerary(false);
        return;
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Đóng vai là một hướng dẫn viên du lịch địa phương, hãy tạo một lịch trình tham quan chi tiết trong 1 ngày tại địa điểm "${attraction.name}" (Việt Nam). Lịch trình cần bao gồm thời gian cụ thể, các hoạt động trải nghiệm, và gợi ý ăn uống. Trình bày bằng tiếng Việt, định dạng Markdown rõ ràng, thân thiện và hấp dẫn.`,
      });

      if (response.text) {
        setGeneratedItinerary(response.text);
      } else {
        setError("Không thể tạo lịch trình lúc này. Vui lòng thử lại sau.");
      }
    } catch (err: any) {
      console.error("Error generating itinerary:", err);
      setError("Có lỗi xảy ra khi gọi AI. Vui lòng kiểm tra lại API Key hoặc kết nối mạng.");
    } finally {
      setIsGeneratingItinerary(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 sm:p-4 animate-in fade-in duration-200">
      <div className={`bg-white w-full relative shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden flex flex-col ${
        generatedItinerary 
          ? 'h-[100dvh] sm:h-[95vh] max-w-5xl rounded-none sm:rounded-3xl' 
          : 'max-h-[100dvh] sm:max-h-[95vh] max-w-4xl rounded-none sm:rounded-3xl'
      }`}>
        <div className={`relative shrink-0 transition-all duration-500 ${generatedItinerary ? 'h-32 sm:h-64' : 'h-48 sm:h-80'}`}>
          {attraction.videoUrl ? (
            <div className="w-full h-full">
              <iframe
                src={getEmbedUrl(attraction.videoUrl)}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <>
              <img 
                src={attraction.image || `https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop`} 
                alt={attraction.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </>
          )}
          
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-black/20 rounded-full transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>
          
          {!attraction.videoUrl && (
            <h2 className="absolute bottom-4 left-6 right-6 text-3xl font-bold text-white drop-shadow-md">{attraction.name}</h2>
          )}
        </div>
        
        <div className="p-4 sm:p-8 overflow-y-auto flex-1">
          {attraction.videoUrl && (
            <h2 className="text-2xl font-bold text-slate-800 mb-4">{attraction.name}</h2>
          )}

          <div className="flex flex-wrap gap-3 mb-6">
            {distance !== null ? (
              <div className="flex items-center gap-2 text-blue-700 bg-blue-50 border border-blue-100 px-4 py-2 rounded-xl w-fit">
                <Navigation className="w-4 h-4" />
                <span className="font-semibold text-sm">Cách bạn {distance} km</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-amber-700 bg-amber-50 border border-amber-100 px-4 py-2 rounded-xl w-fit text-xs">
                <MapPinOff className="w-4 h-4" />
                <span className="font-medium">Cấp quyền vị trí để xem khoảng cách</span>
              </div>
            )}

            {!generatedItinerary && (
              <button
                onClick={handleGenerateItinerary}
                disabled={isGeneratingItinerary}
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl transition-colors disabled:opacity-50 shadow-md shadow-emerald-200"
              >
                {isGeneratingItinerary ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm font-medium">Đang tạo lịch trình AI...</span>
                  </>
                ) : (
                  <>
                    <Map className="w-4 h-4" />
                    <span className="text-sm font-medium">Tạo lịch trình tham quan AI</span>
                  </>
                )}
              </button>
            )}
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm border border-red-100 flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <span className="shrink-0">⚠️</span>
                <p>{error}</p>
              </div>
            </div>
          )}

          <div className="prose prose-slate prose-lg max-w-none">
            {generatedItinerary ? (
              <div className="bg-emerald-50/50 border border-emerald-100 p-4 sm:p-6 rounded-2xl markdown-body prose-emerald">
                <h3 className="text-emerald-800 flex items-center gap-2 mt-0 text-xl sm:text-2xl">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                  Lịch trình gợi ý bởi AI
                </h3>
                <Markdown>{generatedItinerary}</Markdown>
              </div>
            ) : (
              <p className="text-slate-600 leading-relaxed">{attraction.description || attraction.highlights}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
