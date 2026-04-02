import React, { useState, useEffect } from 'react';
import { MapPin, Maximize, Users, BookOpen, Utensils, Camera, Trophy } from 'lucide-react';
import { Province, Attraction } from '../data/provinces';
import AttractionModal from './AttractionModal';

interface ProvinceInfoProps {
  province: Province;
  userLoc: { lat: number; lng: number } | null;
  onStartGameshow: () => void;
}

export default function ProvinceInfo({ province, userLoc, onStartGameshow }: ProvinceInfoProps) {
  const [expanded, setExpanded] = useState(false);
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);

  // Reset state when province changes
  useEffect(() => {
    setExpanded(false);
    setSelectedAttraction(null);
  }, [province.name]);

  return (
    <div className="p-6 lg:p-10 h-full overflow-y-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <h1 className="text-4xl font-bold text-slate-800">{province.name}</h1>
        <button
          onClick={onStartGameshow}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 font-bold rounded-xl hover:bg-amber-200 transition-colors border border-amber-300"
        >
          <Trophy className="w-5 h-5" />
          Gameshow {province.name}
        </button>
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
            <p className="text-slate-700 leading-relaxed bg-blue-50/50 p-5 rounded-2xl border border-blue-100">
              {province.culture}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-800">
              <Utensils className="text-orange-500" /> Ẩm thực đặc trưng
            </h2>
            <div className="flex flex-wrap gap-2">
              {province.food.length > 0 ? (
                province.food.map((f, i) => (
                  <span key={i} className="px-4 py-2 bg-orange-100 text-orange-800 font-medium rounded-full text-sm border border-orange-200">
                    {f}
                  </span>
                ))
              ) : (
                <p className="text-slate-500 italic">Đang cập nhật dữ liệu ẩm thực.</p>
              )}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-800">
              <Camera className="text-emerald-500" /> Địa điểm du lịch
            </h2>
            <div className="grid gap-4">
              {province.attractions.length > 0 ? (
                province.attractions.map((attr, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedAttraction(attr)}
                    className="p-5 bg-white border border-slate-200 rounded-2xl hover:border-emerald-400 hover:shadow-md cursor-pointer transition-all group"
                  >
                    <h3 className="font-bold text-lg text-slate-800 group-hover:text-emerald-600 transition-colors">{attr.name}</h3>
                    <p className="text-sm text-slate-500 mt-2 line-clamp-2">{attr.highlights}</p>
                  </div>
                ))
              ) : (
                <p className="text-slate-500 italic">Đang cập nhật địa điểm du lịch.</p>
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
