import React from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';

// TopoJSON từ Highcharts (đã được kiểm chứng hoạt động tốt)
const geoUrl = "https://code.highcharts.com/mapdata/countries/vn/vn-all.topo.json";

// Mapping từ hc-key của bản đồ sang 34 tỉnh thành (theo địa lý hành chính mới giả định)
const provinceMap: Record<string, string> = {
  "vn-318": "Hà Nội",
  "vn-ho": "Hà Nội",
  "vn-vc": "Phú Thọ",
  "vn-pt": "Phú Thọ",
  "vn-bn": "Bắc Ninh",
  "vn-bg": "Bắc Ninh",
  "vn-qn": "Quảng Ninh",
  "vn-3623": "Hải Phòng",
  "vn-hd": "Hải Phòng",
  "vn-317": "Hải Phòng",
  "vn-tb": "Hải Phòng",
  "vn-nd": "Hải Phòng",
  "vn-hm": "Ninh Bình",
  "vn-nb": "Ninh Bình",
  "vn-hg": "Hà Giang",
  "vn-tq": "Tuyên Quang",
  "vn-cb": "Cao Bằng",
  "vn-307": "Thái Nguyên",
  "vn-ty": "Thái Nguyên",
  "vn-ls": "Lạng Sơn",
  "vn-lo": "Lào Cai",
  "vn-yb": "Lào Cai",
  "vn-db": "Điện Biên",
  "vn-li": "Lai Châu",
  "vn-311": "Sơn La",
  "vn-th": "Thanh Hóa",
  "vn-na": "Nghệ An",
  "vn-328": "Hà Tĩnh",
  "vn-qb": "Quảng Trị",
  "vn-qt": "Quảng Trị",
  "vn-tt": "TP. Huế",
  "vn-da": "TP. Đà Nẵng",
  "vn-300": "TP. Đà Nẵng",
  "vn-qg": "Quảng Ngãi",
  "vn-299": "Gia Lai",
  "vn-724": "Gia Lai",
  "vn-723": "Đắk Lắk",
  "vn-6365": "Đắk Lắk",
  "vn-ld": "Lâm Đồng",
  "vn-bd": "Khánh Hòa",
  "vn-py": "Khánh Hòa",
  "vn-kh": "Khánh Hòa",
  "vn-nt": "Khánh Hòa",
  "vn-bu": "Đồng Nai",
  "vn-bv": "Đồng Nai",
  "vn-331": "Đồng Nai",
  "vn-bp": "Tây Ninh",
  "vn-tn": "Tây Ninh",
  "vn-bi": "TP. Hồ Chí Minh",
  "vn-hc": "TP. Hồ Chí Minh",
  "vn-la": "Long An",
  "vn-tg": "Đồng Tháp mới",
  "vn-dt": "Đồng Tháp mới",
  "vn-ag": "An Giang",
  "vn-br": "TP. Cần Thơ",
  "vn-vl": "TP. Cần Thơ",
  "vn-tv": "TP. Cần Thơ",
  "vn-333": "TP. Cần Thơ",
  "vn-337": "TP. Cần Thơ",
  "vn-st": "TP. Cần Thơ",
  "vn-kg": "Cà Mau",
  "vn-cm": "Cà Mau",
  "vn-bl": "Cà Mau"
};

// Bảng màu cho 34 tỉnh thành để hiển thị ranh giới rõ ràng
const provinceColors: Record<string, string> = {
  "Lai Châu": "#ffcc00", // Yellow
  "Điện Biên": "#ff7b00", // Orange
  "Sơn La": "#2563eb", // Blue
  "Lào Cai": "#06b6d4", // Cyan
  "Hà Giang": "#ff7b00", // Orange
  "Tuyên Quang": "#ff7b00", // Orange
  "Cao Bằng": "#ffcc00", // Yellow
  "Lạng Sơn": "#2563eb", // Blue
  "Thái Nguyên": "#10b981", // Green
  "Bắc Ninh": "#ff7b00", // Orange
  "Quảng Ninh": "#06b6d4", // Cyan
  "Phú Thọ": "#ffcc00", // Yellow
  "Hà Nội": "#2563eb", // Blue
  "Hải Phòng": "#10b981", // Green
  "Ninh Bình": "#ff7b00", // Orange
  "Thanh Hóa": "#06b6d4", // Cyan
  "Nghệ An": "#ffcc00", // Yellow
  "Hà Tĩnh": "#ff7b00", // Orange
  "Quảng Trị": "#ffcc00", // Yellow
  "TP. Huế": "#06b6d4", // Cyan
  "TP. Đà Nẵng": "#ff7b00", // Orange
  "Quảng Ngãi": "#06b6d4", // Cyan
  "Gia Lai": "#2563eb", // Blue
  "Đắk Lắk": "#06b6d4", // Cyan
  "Lâm Đồng": "#ffcc00", // Yellow
  "Khánh Hòa": "#ff7b00", // Orange
  "Đồng Nai": "#10b981", // Green
  "Tây Ninh": "#ffcc00", // Yellow
  "TP. Hồ Chí Minh": "#2563eb", // Blue
  "Long An": "#2563eb", // Blue
  "Đồng Tháp mới": "#ff7b00", // Orange
  "An Giang": "#2563eb", // Blue
  "TP. Cần Thơ": "#ffcc00", // Yellow
  "Cà Mau": "#ff7b00", // Orange
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
