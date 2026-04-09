import React, { useState, useEffect } from 'react';
import { Attraction } from '../data/provinces';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, Image as ImageIcon, Loader2, Search } from 'lucide-react';

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
    setImage(attraction.image || `https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=400&auto=format&fit=crop`);
  }, [attraction]);

  const generateDescription = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsGeneratingDesc(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Viết một đoạn mô tả chi tiết, hấp dẫn về địa điểm du lịch "${attraction.name}" (khoảng 3-4 câu).`,
      });
      if (response.text) {
        setDescription(response.text);
        attraction.description = response.text;
      }
    } catch (error) {
      console.error("Error generating description:", error);
    } finally {
      setIsGeneratingDesc(false);
    }
  };

  const searchExactImage = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsGeneratingImage(true);
    try {
      // 1. Try to find exact image on Wikipedia using keyword
      const searchRes = await fetch(`https://vi.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(attraction.name)}&utf8=&format=json&origin=*`);
      const searchData = await searchRes.json();
      
      if (searchData.query?.search?.length > 0) {
        const title = searchData.query.search[0].title;
        const imageRes = await fetch(`https://vi.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=800&origin=*`);
        const imageData = await imageRes.json();
        const pages = imageData.query.pages;
        const pageId = Object.keys(pages)[0];
        
        if (pages[pageId]?.thumbnail?.source) {
          const newImage = pages[pageId].thumbnail.source;
          setImage(newImage);
          attraction.image = newImage;
          setIsGeneratingImage(false);
          return;
        }
      }

      // 2. Fallback to AI Generation if Wikipedia fails
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
      console.error("Error searching/generating image:", error);
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
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=400&auto=format&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
        
        <button
          onClick={searchExactImage}
          disabled={isGeneratingImage}
          className="absolute top-2 right-2 bg-white/90 hover:bg-white text-emerald-600 p-2 rounded-full shadow-md transition-opacity disabled:opacity-50"
          title="Tìm/Tạo ảnh chính xác"
        >
          {isGeneratingImage ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
        </button>
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
