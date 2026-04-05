import React from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';

// TopoJSON từ Highcharts (đã được kiểm chứng hoạt động tốt)
const geoUrl = "https://code.highcharts.com/mapdata/countries/vn/vn-all.topo.json";

// Mapping từ hc-key của bản đồ sang 34 tỉnh thành (theo địa lý hành chính mới giả định)
const provinceMap: Record<string, string> = {
  "vn-li": "Lai Châu",
  "vn-db": "Điện Biên",
  "vn-311": "Sơn La",
  "vn-lo": "Lào Cai - Yên Bái",
  "vn-yb": "Lào Cai - Yên Bái",
  "vn-hg": "Hà Giang - Tuyên Quang",
  "vn-tq": "Hà Giang - Tuyên Quang",
  "vn-cb": "Cao Bằng",
  "vn-307": "Bắc Kạn - Thái Nguyên",
  "vn-ty": "Bắc Kạn - Thái Nguyên",
  "vn-ls": "Lạng Sơn",
  "vn-qn": "Quảng Ninh",
  "vn-ho": "Phú Thọ - Vĩnh Phúc - Hòa Bình",
  "vn-pt": "Phú Thọ - Vĩnh Phúc - Hòa Bình",
  "vn-vc": "Phú Thọ - Vĩnh Phúc - Hòa Bình",
  "vn-318": "Hà Nội",
  "vn-bn": "Bắc Ninh - Bắc Giang",
  "vn-bg": "Bắc Ninh - Bắc Giang",
  "vn-3623": "Hải Phòng",
  "vn-hd": "Hải Dương - Hưng Yên - Thái Bình",
  "vn-317": "Hải Dương - Hưng Yên - Thái Bình",
  "vn-tb": "Hải Dương - Hưng Yên - Thái Bình",
  "vn-nd": "Hà Nam - Nam Định - Ninh Bình",
  "vn-nb": "Hà Nam - Nam Định - Ninh Bình",
  "vn-hm": "Hà Nam - Nam Định - Ninh Bình",
  "vn-th": "Thanh Hóa",
  "vn-na": "Nghệ An",
  "vn-328": "Hà Tĩnh",
  "vn-qb": "Quảng Bình - Quảng Trị",
  "vn-qt": "Quảng Bình - Quảng Trị",
  "vn-tt": "TP. Huế",
  "vn-da": "Đà Nẵng - Quảng Nam",
  "vn-300": "Đà Nẵng - Quảng Nam",
  "vn-qg": "Quảng Ngãi",
  "vn-724": "Gia Lai - Kon Tum - Bình Định",
  "vn-299": "Gia Lai - Kon Tum - Bình Định",
  "vn-bd": "Gia Lai - Kon Tum - Bình Định",
  "vn-723": "Đắk Lắk - Đắk Nông",
  "vn-6365": "Đắk Lắk - Đắk Nông",
  "vn-py": "Phú Yên - Khánh Hòa - Ninh Thuận",
  "vn-kh": "Phú Yên - Khánh Hòa - Ninh Thuận",
  "vn-nt": "Phú Yên - Khánh Hòa - Ninh Thuận",
  "vn-ld": "Lâm Đồng - Bình Thuận",
  "vn-bu": "Lâm Đồng - Bình Thuận",
  "vn-bp": "Bình Phước - Bình Dương - Đồng Nai",
  "vn-bi": "Bình Phước - Bình Dương - Đồng Nai",
  "vn-331": "Bình Phước - Bình Dương - Đồng Nai",
  "vn-tn": "Tây Ninh",
  "vn-hc": "TP. Hồ Chí Minh - Long An - Bà Rịa Vũng Tàu",
  "vn-la": "TP. Hồ Chí Minh - Long An - Bà Rịa Vũng Tàu",
  "vn-bv": "TP. Hồ Chí Minh - Long An - Bà Rịa Vũng Tàu",
  "vn-dt": "Đồng Tháp - Tiền Giang",
  "vn-tg": "Đồng Tháp - Tiền Giang",
  "vn-vl": "Vĩnh Long - Bến Tre - Trà Vinh",
  "vn-br": "Vĩnh Long - Bến Tre - Trà Vinh",
  "vn-tv": "Vĩnh Long - Bến Tre - Trà Vinh",
  "vn-333": "TP. Cần Thơ - Hậu Giang - Sóc Trăng",
  "vn-337": "TP. Cần Thơ - Hậu Giang - Sóc Trăng",
  "vn-st": "TP. Cần Thơ - Hậu Giang - Sóc Trăng",
  "vn-ag": "An Giang - Kiên Giang",
  "vn-kg": "An Giang - Kiên Giang",
  "vn-bl": "Bạc Liêu - Cà Mau",
  "vn-cm": "Bạc Liêu - Cà Mau"
};

// Bảng màu cho 34 tỉnh thành để hiển thị ranh giới rõ ràng
const provinceColors: Record<string, string> = {
  "Lai Châu": "#ffcc00",
  "Điện Biên": "#ff7b00",
  "Sơn La": "#2563eb",
  "Lào Cai - Yên Bái": "#06b6d4",
  "Hà Giang - Tuyên Quang": "#10b981",
  "Cao Bằng": "#ff7b00",
  "Bắc Kạn - Thái Nguyên": "#06b6d4",
  "Lạng Sơn": "#2563eb",
  "Quảng Ninh": "#ffcc00",
  "Phú Thọ - Vĩnh Phúc - Hòa Bình": "#ff7b00",
  "Hà Nội": "#2563eb",
  "Bắc Ninh - Bắc Giang": "#10b981",
  "Hải Phòng": "#06b6d4",
  "Hải Dương - Hưng Yên - Thái Bình": "#ffcc00",
  "Hà Nam - Nam Định - Ninh Bình": "#10b981",
  "Thanh Hóa": "#ffcc00",
  "Nghệ An": "#ff7b00",
  "Hà Tĩnh": "#2563eb",
  "Quảng Bình - Quảng Trị": "#06b6d4",
  "TP. Huế": "#10b981",
  "Đà Nẵng - Quảng Nam": "#ff7b00",
  "Quảng Ngãi": "#2563eb",
  "Gia Lai - Kon Tum - Bình Định": "#06b6d4",
  "Đắk Lắk - Đắk Nông": "#10b981",
  "Phú Yên - Khánh Hòa - Ninh Thuận": "#ffcc00",
  "Lâm Đồng - Bình Thuận": "#ff7b00",
  "Bình Phước - Bình Dương - Đồng Nai": "#2563eb",
  "Tây Ninh": "#06b6d4",
  "TP. Hồ Chí Minh - Long An - Bà Rịa Vũng Tàu": "#10b981",
  "Đồng Tháp - Tiền Giang": "#ffcc00",
  "Vĩnh Long - Bến Tre - Trà Vinh": "#ff7b00",
  "TP. Cần Thơ - Hậu Giang - Sóc Trăng": "#06b6d4",
  "An Giang - Kiên Giang": "#2563eb",
  "Bạc Liêu - Cà Mau": "#10b981"
};

interface VietnamMapProps {
  onSelectProvince: (name: string, e: React.MouseEvent) => void;
  onHoverProvince: (name: string, e: React.MouseEvent) => void;
  onLeaveProvince: () => void;
  selectedProvinceName: string | null;
}

export default function VietnamMap({ onSelectProvince, onHoverProvince, onLeaveProvince, selectedProvinceName }: VietnamMapProps) {
  return (
    <div className="w-full h-full relative bg-blue-50/30">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 2000,
          center: [106, 16] // Tọa độ trung tâm Việt Nam
        }}
        className="w-full h-full outline-none"
      >
        <ZoomableGroup center={[106, 16]} zoom={1} maxZoom={5}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const hcKey = geo.properties["hc-key"];
                const provinceName = provinceMap[hcKey] || geo.properties.name || "Không rõ";
                const isSelected = selectedProvinceName === provinceName;
                
                // Lấy màu mặc định từ bảng màu, nếu không có thì dùng màu xám nhạt
                const defaultColor = provinceColors[provinceName] || "#e2e8f0";
                
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={(e) => onSelectProvince(provinceName, e)}
                    onMouseEnter={(e) => onHoverProvince(provinceName, e)}
                    onMouseMove={(e) => onHoverProvince(provinceName, e)}
                    onMouseLeave={onLeaveProvince}
                    style={{
                      default: {
                        fill: isSelected ? "#ef4444" : defaultColor, // Màu đỏ khi được chọn
                        stroke: "#ffffff", // Viền trắng để phân cách rõ ràng
                        strokeWidth: 0.5,
                        outline: "none",
                        transition: "all 250ms"
                      },
                      hover: {
                        fill: isSelected ? "#ef4444" : "#f87171", // Màu đỏ nhạt khi hover
                        stroke: "#ffffff",
                        strokeWidth: 1,
                        outline: "none",
                        cursor: "pointer",
                        transition: "all 250ms"
                      },
                      pressed: {
                        fill: "#dc2626",
                        stroke: "#ffffff",
                        strokeWidth: 1,
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>


        </ZoomableGroup>
      </ComposableMap>
      
      <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur px-4 py-2 rounded-lg shadow-sm text-sm text-slate-600 pointer-events-none">
        <p>Bản đồ 34 tỉnh thành Việt Nam (Hành chính mới)</p>
        <p className="text-xs text-slate-400 mt-1">Sử dụng chuột để cuộn và thu phóng</p>
      </div>
    </div>
  );
}
