import React from 'react';
import { X, Navigation, MapPinOff } from 'lucide-react';
import { Attraction } from '../data/provinces';
import { calculateDistance } from '../utils/distance';

interface AttractionModalProps {
  attraction: Attraction;
  userLoc: { lat: number; lng: number } | null;
  onClose: () => void;
}

export default function AttractionModal({ attraction, userLoc, onClose }: AttractionModalProps) {
  const distance = userLoc ? calculateDistance(userLoc.lat, userLoc.lng, attraction.lat, attraction.lng) : null;

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-8 relative shadow-2xl animate-in zoom-in-95 duration-200">
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h2 className="text-3xl font-bold text-slate-800 mb-4 pr-8">{attraction.name}</h2>

        {distance !== null ? (
          <div className="flex items-center gap-2 text-blue-700 bg-blue-50 border border-blue-100 px-4 py-3 rounded-xl mb-6 w-fit">
            <Navigation className="w-5 h-5" />
            <span className="font-semibold">Cách bạn khoảng {distance} km</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-amber-700 bg-amber-50 border border-amber-100 px-4 py-3 rounded-xl mb-6 w-fit text-sm">
            <MapPinOff className="w-5 h-5" />
            <span className="font-medium">Vui lòng cấp quyền vị trí để xem khoảng cách</span>
          </div>
        )}

        <div className="prose prose-slate prose-lg">
          <p className="text-slate-600 leading-relaxed">{attraction.highlights}</p>
        </div>
      </div>
    </div>
  );
}
