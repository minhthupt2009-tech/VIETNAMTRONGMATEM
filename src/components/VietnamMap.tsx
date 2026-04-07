import React from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from 'react-simple-maps';

// TopoJSON từ Highcharts (đã được tải về local để tránh lỗi CORS)
const geoUrl = "/vn-all.topo.json";

// Mapping từ hc-key của bản đồ sang 34 tỉnh thành (theo địa lý hành chính mới giả định)
const provinceMap: Record<string, string> = {
  "vn-qn": "Quảng Ninh",
  "vn-kh": "Khánh Hoà",
  "vn-tg": "Đồng Tháp",
  "vn-bv": "TP. Hồ Chí Minh",
  "vn-bu": "Lâm Đồng",
  "vn-hc": "TP. Hồ Chí Minh",
  "vn-br": "Vĩnh Long",
  "vn-st": "TP. Cần Thơ",
  "vn-pt": "Phú Thọ",
  "vn-yb": "Lào Cai",
  "vn-hd": "TP. Hải Phòng",
  "vn-bn": "Bắc Ninh",
  "vn-317": "Hưng Yên",
  "vn-nb": "Ninh Bình",
  "vn-hm": "Ninh Bình",
  "vn-ho": "Phú Thọ",
  "vn-vc": "Phú Thọ",
  "vn-318": "TP. Hà Nội",
  "vn-bg": "Bắc Ninh",
  "vn-tb": "Hưng Yên",
  "vn-ld": "Lâm Đồng",
  "vn-bp": "Đồng Nai",
  "vn-py": "Đắk Lắk",
  "vn-bd": "Gia Lai",
  "vn-724": "Quảng Ngãi",
  "vn-qg": "Quảng Ngãi",
  "vn-331": "Đồng Nai",
  "vn-dt": "Đồng Tháp",
  "vn-la": "Tây Ninh",
  "vn-3623": "TP. Hải Phòng",
  "vn-337": "TP. Cần Thơ",
  "vn-bl": "Cà Mau",
  "vn-vl": "Vĩnh Long",
  "vn-tn": "Tây Ninh",
  "vn-ty": "Thái Nguyên",
  "vn-li": "Lai Châu",
  "vn-311": "Sơn La",
  "vn-hg": "Tuyên Quang",
  "vn-nd": "Ninh Bình",
  "vn-328": "Hà Tĩnh",
  "vn-na": "Nghệ An",
  "vn-qb": "Quảng Trị",
  "vn-723": "Lâm Đồng",
  "vn-nt": "Khánh Hoà",
  "vn-6365": "Đắk Lắk",
  "vn-299": "Gia Lai",
  "vn-300": "TP. Đà Nẵng",
  "vn-qt": "Quảng Trị",
  "vn-tt": "TP. Huế",
  "vn-da": "TP. Đà Nẵng",
  "vn-ag": "An Giang",
  "vn-cm": "Cà Mau",
  "vn-tv": "Vĩnh Long",
  "vn-cb": "Cao Bằng",
  "vn-kg": "An Giang",
  "vn-lo": "Lào Cai",
  "vn-db": "Điện Biên",
  "vn-ls": "Lạng Sơn",
  "vn-th": "Thanh Hóa",
  "vn-307": "Thái Nguyên",
  "vn-tq": "Tuyên Quang",
  "vn-bi": "TP. Hồ Chí Minh",
  "vn-333": "TP. Cần Thơ"
};

// Bảng màu cho 34 tỉnh thành để hiển thị ranh giới rõ ràng
const provinceColors: Record<string, string> = {
  "Quảng Ninh": "#ffcc00",
  "Khánh Hoà": "#ff7b00",
  "Đồng Tháp": "#2563eb",
  "TP. Hồ Chí Minh": "#06b6d4",
  "Lâm Đồng": "#10b981",
  "Vĩnh Long": "#ffcc00",
  "TP. Cần Thơ": "#ff7b00",
  "Phú Thọ": "#2563eb",
  "Lào Cai": "#06b6d4",
  "TP. Hải Phòng": "#10b981",
  "Bắc Ninh": "#ffcc00",
  "Hưng Yên": "#ff7b00",
  "Ninh Bình": "#2563eb",
  "TP. Hà Nội": "#06b6d4",
  "Đồng Nai": "#10b981",
  "Đắk Lắk": "#ffcc00",
  "Gia Lai": "#ff7b00",
  "Quảng Ngãi": "#2563eb",
  "Tây Ninh": "#06b6d4",
  "Cà Mau": "#10b981",
  "Thái Nguyên": "#ffcc00",
  "Lai Châu": "#ff7b00",
  "Sơn La": "#2563eb",
  "Tuyên Quang": "#06b6d4",
  "Hà Tĩnh": "#10b981",
  "Nghệ An": "#ffcc00",
  "Quảng Trị": "#ff7b00",
  "TP. Đà Nẵng": "#2563eb",
  "TP. Huế": "#06b6d4",
  "An Giang": "#10b981",
  "Cao Bằng": "#ffcc00",
  "Điện Biên": "#ff7b00",
  "Lạng Sơn": "#2563eb",
  "Thanh Hóa": "#06b6d4"
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
          scale: 1200,
          center: [108, 15] // Tọa độ trung tâm Việt Nam bao gồm cả quần đảo
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

          {/* Quần đảo Hoàng Sa (Đà Nẵng) */}
          <Marker coordinates={[111.9, 16.5]} onClick={(e) => onSelectProvince("TP. Đà Nẵng", e)} style={{ cursor: "pointer" }}>
            <circle r={4} fill="#ff7b00" stroke="#fff" strokeWidth={1} />
            <text
              textAnchor="middle"
              y={-10}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: "10px", fontWeight: "bold" }}
            >
              QĐ. Hoàng Sa
            </text>
            <text
              textAnchor="middle"
              y={12}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: "8px" }}
            >
              (TP. Đà Nẵng)
            </text>
          </Marker>

          {/* Quần đảo Trường Sa (Khánh Hòa) */}
          <Marker coordinates={[114.2, 10.0]} onClick={(e) => onSelectProvince("Khánh Hoà", e)} style={{ cursor: "pointer" }}>
            <circle r={4} fill="#06b6d4" stroke="#fff" strokeWidth={1} />
            <text
              textAnchor="middle"
              y={-10}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: "10px", fontWeight: "bold" }}
            >
              QĐ. Trường Sa
            </text>
            <text
              textAnchor="middle"
              y={12}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: "8px" }}
            >
              (Khánh Hòa)
            </text>
          </Marker>

        </ZoomableGroup>
      </ComposableMap>
      
      <div className="hidden md:block absolute bottom-4 left-4 bg-white/80 backdrop-blur px-4 py-2 rounded-lg shadow-sm text-sm text-slate-600 pointer-events-none">
        <p>Bản đồ 34 tỉnh thành Việt Nam (Hành chính mới)</p>
        <p className="text-xs text-slate-400 mt-1">Sử dụng chuột để cuộn và thu phóng</p>
      </div>
    </div>
  );
}
