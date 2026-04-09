import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface Food {
  name: string;
  image: string;
  description: string;
  placesToBuy: { name: string; address: string }[];
}

interface FoodCardProps {
  food: Food;
  onClick: () => void;
}

export default function FoodCard({ food, onClick }: FoodCardProps) {
  const [image, setImage] = useState(food.image);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);

  const searchExactImage = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsGeneratingImage(true);
    try {
      // 1. Try to find exact image on Wikipedia using keyword
      const searchRes = await fetch(`https://vi.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(food.name)}&utf8=&format=json&origin=*`);
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
          food.image = newImage;
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
            { text: `A beautiful, high-quality, appetizing photograph of the Vietnamese dish "${food.name}". Food photography, highly detailed, realistic.` }
          ]
        }
      });
      
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          const base64EncodeString = part.inlineData.data;
          const newImage = `data:image/png;base64,${base64EncodeString}`;
          setImage(newImage);
          food.image = newImage;
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
      className="group relative overflow-hidden rounded-2xl aspect-square shadow-sm border border-orange-100 cursor-pointer"
    >
      <img 
        src={image} 
        alt={food.name} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        referrerPolicy="no-referrer" 
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop"; // Generic food
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 via-orange-900/30 to-transparent flex items-end p-3">
        <span className="text-white font-bold text-sm drop-shadow-md">{food.name}</span>
      </div>
      
      <button
        onClick={searchExactImage}
        disabled={isGeneratingImage}
        className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-orange-50 disabled:opacity-50"
        title="Tìm ảnh chính xác"
      >
        {isGeneratingImage ? (
          <Loader2 className="w-3.5 h-3.5 text-orange-600 animate-spin" />
        ) : (
          <Search className="w-3.5 h-3.5 text-orange-600" />
        )}
      </button>
    </div>
  );
}
