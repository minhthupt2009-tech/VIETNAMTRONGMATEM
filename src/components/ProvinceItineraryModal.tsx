import React, { useState, useEffect } from 'react';
import { X, Map, Loader2, Sparkles, Navigation, Clock, Car } from 'lucide-react';
import { Province } from '../data/provinces';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';

interface ProvinceItineraryModalProps {
  province: Province;
  onClose: () => void;
}

export default function ProvinceItineraryModal({ province, onClose }: ProvinceItineraryModalProps) {
  const [itinerary, setItinerary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    generateItinerary();
  }, [province]);

  const generateItinerary = async () => {
    setLoading(true);
    setError(null);
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('Vui lòng cấu hình VITE_GEMINI_API_KEY trong file .env');
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const attractionsList = province.attractions.map(a => a.name).join(', ');
      
      const prompt = `
        Tôi đang lên kế hoạch du lịch tại tỉnh/thành phố ${province.name}. 
        Các địa điểm nổi bật tại đây bao gồm: ${attractionsList}.
        
        Hãy tạo một lịch trình di chuyển hợp lý nhất kết nối các địa điểm này (có thể chia thành 1-3 ngày tùy số lượng địa điểm).
        Yêu cầu bắt buộc:
        1. Gợi ý phương tiện di chuyển phổ biến và phù hợp nhất giữa các điểm (ví dụ: xe máy, taxi, xe buýt, đi bộ...).
        2. Cung cấp thời gian di chuyển ước tính giữa các địa điểm.
        3. Sắp xếp thứ tự tham quan hợp lý theo tuyến đường để tiết kiệm thời gian di chuyển nhất.
        4. Trình bày bằng tiếng Việt, định dạng Markdown rõ ràng, đẹp mắt, sử dụng emoji phù hợp.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      if (response.text) {
        setItinerary(response.text);
      } else {
        throw new Error('Không nhận được phản hồi từ AI');
      }
    } catch (err: any) {
      console.error('Error generating itinerary:', err);
      setError(err.message || 'Đã có lỗi xảy ra khi tạo lịch trình. Vui lòng thử lại sau.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full relative shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden flex flex-col h-[100dvh] sm:h-[95vh] max-w-5xl rounded-none sm:rounded-3xl">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-100 bg-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <Map className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">Lịch trình di chuyển</h2>
              <p className="text-sm text-slate-500">{province.name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-8 overflow-y-auto flex-1 bg-slate-50/50">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-full space-y-4 text-blue-600">
              <Loader2 className="w-10 h-10 animate-spin" />
              <p className="font-medium animate-pulse">AI đang phân tích tuyến đường và phương tiện...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 flex flex-col items-center justify-center h-full text-center">
              <p className="mb-4">{error}</p>
              <button 
                onClick={generateItinerary}
                className="px-4 py-2 bg-red-100 hover:bg-red-200 rounded-lg font-medium transition-colors"
              >
                Thử lại
              </button>
            </div>
          ) : itinerary ? (
            <div className="bg-white border border-blue-100 p-4 sm:p-8 rounded-2xl shadow-sm">
              <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg">
                  <Navigation className="w-4 h-4 text-blue-500" />
                  Tối ưu tuyến đường
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg">
                  <Car className="w-4 h-4 text-emerald-500" />
                  Gợi ý phương tiện
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg">
                  <Clock className="w-4 h-4 text-amber-500" />
                  Ước tính thời gian
                </div>
              </div>
              
              <div className="prose prose-slate prose-lg max-w-none markdown-body prose-blue">
                <h3 className="text-blue-800 flex items-center gap-2 mt-0 text-xl sm:text-2xl mb-6">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                  Gợi ý lịch trình từ AI
                </h3>
                <Markdown>{itinerary}</Markdown>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
