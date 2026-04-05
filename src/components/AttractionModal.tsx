import React, { useState } from 'react';
import { X, Navigation, MapPinOff, Loader2, Sparkles, Key } from 'lucide-react';
import { Attraction } from '../data/provinces';
import { calculateDistance } from '../utils/distance';
import { GoogleGenAI } from '@google/genai';

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
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false);
  const [generatedVideoUrl, setGeneratedVideoUrl] = useState<string | null>(null);
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

  const handleGenerateVideo = async () => {
    setIsGeneratingVideo(true);
    setError(null);
    try {
      // Check if API key is selected for Veo models
      const hasKey = await window.aistudio.hasSelectedApiKey();
      if (!hasKey) {
        await window.aistudio.openSelectKey();
        // After opening, we assume success or user will try again
      }

      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      let operation;
      
      try {
        operation = await ai.models.generateVideos({
          model: 'veo-3.1-lite-generate-preview',
          prompt: `A cinematic travel video of ${attraction.name}, Vietnam. High quality, scenic views, smooth camera movement.`,
          config: {
            numberOfVideos: 1,
            resolution: '720p',
            aspectRatio: '16:9'
          }
        });
      } catch (err: any) {
        if (err?.message?.includes('Requested entity was not found')) {
          setError("Vui lòng chọn lại API Key có hỗ trợ Video.");
          await window.aistudio.openSelectKey();
          return;
        }
        throw err;
      }

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        const response = await fetch(downloadLink, {
          method: 'GET',
          headers: {
            'x-goog-api-key': process.env.GEMINI_API_KEY || '',
          },
        });
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setGeneratedVideoUrl(url);
      }
    } catch (err: any) {
      console.error("Error generating video:", err);
      if (err?.message?.includes('permission') || err?.message?.includes('403')) {
        setError("Bạn chưa có quyền tạo video. Vui lòng thiết lập API Key trả phí.");
      } else {
        setError("Không thể tạo video lúc này. Vui lòng thử lại sau.");
      }
    } finally {
      setIsGeneratingVideo(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full relative shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden flex flex-col max-h-[95vh]">
        <div className="relative h-48 sm:h-80 shrink-0">
          {attraction.videoUrl || generatedVideoUrl ? (
            <div className="w-full h-full">
              {attraction.videoUrl ? (
                <iframe
                  src={getEmbedUrl(attraction.videoUrl)}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video
                  src={generatedVideoUrl!}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                ></video>
              )}
            </div>
          ) : (
            <>
              <img 
                src={attraction.image || `https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=800&auto=format&fit=crop`} 
                alt={attraction.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
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
          
          {!attraction.videoUrl && !generatedVideoUrl && (
            <h2 className="absolute bottom-4 left-6 right-6 text-3xl font-bold text-white drop-shadow-md">{attraction.name}</h2>
          )}
        </div>
        
        <div className="p-6 sm:p-8 overflow-y-auto">
          {(attraction.videoUrl || generatedVideoUrl) && (
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

            {!attraction.videoUrl && !generatedVideoUrl && (
              <button
                onClick={handleGenerateVideo}
                disabled={isGeneratingVideo}
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl transition-colors disabled:opacity-50 shadow-md shadow-emerald-200"
              >
                {isGeneratingVideo ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm font-medium">Đang tạo video AI...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-medium">Tạo video bằng AI</span>
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
              {error.includes("API Key") || error.includes("quyền") ? (
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => window.aistudio.openSelectKey()}
                    className="flex items-center justify-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-900 transition-colors w-fit text-xs font-medium"
                  >
                    <Key className="w-3 h-3" />
                    Chọn API Key
                  </button>
                  <a 
                    href="https://ai.google.dev/gemini-api/docs/billing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-[10px]"
                  >
                    Tìm hiểu về thanh toán và API Key trả phí
                  </a>
                </div>
              ) : null}
            </div>
          )}

          <div className="prose prose-slate prose-lg">
            <p className="text-slate-600 leading-relaxed">{attraction.description || attraction.highlights}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
