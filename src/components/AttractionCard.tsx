import React, { useState, useEffect } from 'react';
import { Attraction } from '../data/provinces';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, Image as ImageIcon, Loader2 } from 'lucide-react';

interface AttractionCardProps {
  attraction: Attraction;
  onClick: () => void;
}

export default function AttractionCard({ attraction, onClick }: AttractionCardProps) {
  const [description, setDescription] = useState<string>(attraction.description || attraction.highlights);
  const [image, setImage] = useState<string>(attraction.image || `https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=400&auto=format&fit=crop`);
  const [isGeneratingDesc, setIsGeneratingDesc] = useState(false);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);

  useEffect(() => {
    setDescription(attraction.description || attraction.highlights);
    setImage(attraction.image || `https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=400&auto=format&fit=crop`);
  }, [attraction]);

  const isPlaceholderImage = image.includes('picsum.photos') || image.includes('unsplash.com');

  const generateDescription = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsGeneratingDesc(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Viết một đoạn mô tả chi tiết, hấp dẫn về địa điểm du lịch "${attraction.name}" (khoảng 3-4 câu).`,
      });
      if (response.text) {
        setDescription(response.text);
        // Optionally update the attraction object so it persists during the session
        attraction.description = response.text;
      }
    } catch (error) {
      console.error("Error generating description:", error);
    } finally {
      setIsGeneratingDesc(false);
    }
  };

  const generateImage = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsGeneratingImage(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            { text: `A beautiful, high-quality photograph of ${attraction.name}, Vietnam. Scenic, travel photography, highly detailed.` }
          ]
        }
      });
      
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          const base64EncodeString = part.inlineData.data;
          const newImage = `data:image/png;base64,${base64EncodeString}`;
          setImage(newImage);
          attraction.image = newImage;
          break;
        }
      }
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setIsGeneratingImage(false);
    }
  };

  return (
    <div
      onClick={onClick}
      className="bg-white border border-slate-200 rounded-2xl hover:border-emerald-400 hover:shadow-lg cursor-pointer transition-all group overflow-hidden flex flex-col"
    >
      <div className="w-full h-40 shrink-0 overflow-hidden relative group/image">
        <img 
          src={image} 
          alt={attraction.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
        
        {isPlaceholderImage && (
          <button
            onClick={generateImage}
            disabled={isGeneratingImage}
            className="absolute top-2 right-2 bg-white/90 hover:bg-white text-emerald-600 p-2 rounded-full shadow-md transition-opacity disabled:opacity-50"
            title="Tạo ảnh AI"
          >
            {isGeneratingImage ? <Loader2 className="w-4 h-4 animate-spin" /> : <ImageIcon className="w-4 h-4" />}
          </button>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-bold text-lg text-slate-800 group-hover:text-emerald-600 transition-colors line-clamp-1">{attraction.name}</h3>
        
        <div className="mt-2 relative flex-1">
          <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed pr-8">{description}</p>
          <button
            onClick={generateDescription}
            disabled={isGeneratingDesc}
            className="absolute -bottom-2 right-0 bg-white text-blue-500 p-1.5 rounded-full shadow-sm border border-slate-100 transition-opacity hover:bg-blue-50 disabled:opacity-50"
            title="Tạo mô tả chi tiết bằng AI"
          >
            {isGeneratingDesc ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
          </button>
        </div>

        <div className="mt-4 text-emerald-600 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          Xem chi tiết <span className="text-lg leading-none">&rarr;</span>
        </div>
      </div>
    </div>
  );
}
