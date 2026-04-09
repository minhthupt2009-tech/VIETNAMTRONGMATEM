import React from 'react';
import { X, MapPin, Info, ShoppingBag } from 'lucide-react';
import { FoodItem } from '../data/provinces';

interface FoodModalProps {
  isOpen: boolean;
  onClose: () => void;
  food: FoodItem | null;
  provinceName: string;
}

export default function FoodModal({ isOpen, onClose, food, provinceName }: FoodModalProps) {
  if (!isOpen || !food) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 rounded-full backdrop-blur-sm transition-colors z-10 shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-full h-64 sm:h-80 relative bg-slate-100">
          <img 
            src={food.image} 
            alt={food.name} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end p-6 sm:p-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/90 text-white text-sm font-medium mb-3 backdrop-blur-md">
                <UtensilsIcon className="w-4 h-4" />
                Đặc sản {provinceName}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 leading-tight">
                {food.name}
              </h2>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="mb-8">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-3">
              <Info className="w-5 h-5 text-blue-500" />
              Giới thiệu
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {food.description || `${food.name} là một món ăn đặc sản trứ danh của ${provinceName}, mang đậm hương vị truyền thống và văn hóa ẩm thực địa phương. Món ăn được chế biến tỉ mỉ từ những nguyên liệu tươi ngon nhất, mang đến trải nghiệm ẩm thực khó quên cho du khách.`}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-4">
              <ShoppingBag className="w-5 h-5 text-emerald-500" />
              Gợi ý địa điểm thưởng thức / Mua sắm
            </h3>
            
            {food.placesToBuy && food.placesToBuy.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {food.placesToBuy.map((place, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100/80 transition-colors">
                    <h4 className="font-semibold text-slate-800 mb-1">{place.name}</h4>
                    <div className="flex items-start gap-1.5 text-sm text-slate-500">
                      <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-slate-400" />
                      <span>{place.address}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100/80 transition-colors">
                  <h4 className="font-semibold text-slate-800 mb-1">Chợ trung tâm {provinceName}</h4>
                  <div className="flex items-start gap-1.5 text-sm text-slate-500">
                    <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-slate-400" />
                    <span>Khu vực chợ truyền thống, trung tâm TP</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100/80 transition-colors">
                  <h4 className="font-semibold text-slate-800 mb-1">Cửa hàng đặc sản địa phương</h4>
                  <div className="flex items-start gap-1.5 text-sm text-slate-500">
                    <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-slate-400" />
                    <span>Các tuyến đường du lịch chính</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function UtensilsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  );
}
