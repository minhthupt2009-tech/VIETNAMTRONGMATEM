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
      <div className="bg-white rounded-3xl max-w-lg w-full relative shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden flex flex-col max-h-[90vh]">
        <div className="relative h-48 sm:h-64 shrink-0">
          <img 
            src={attraction.image || `https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=800&auto=format&fit=crop`} 
            alt={attraction.name} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-black/20 rounded-full transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="absolute bottom-4 left-6 right-6 text-3xl font-bold text-white drop-shadow-md">{attraction.name}</h2>
        </div>
        
        <div className="p-6 sm:p-8 overflow-y-auto">
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
            <p className="text-slate-600 leading-relaxed">{attraction.description || attraction.highlights}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
