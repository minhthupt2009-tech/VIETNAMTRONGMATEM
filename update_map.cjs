const fs = require('fs');

const provinceMap = {
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

const colors = [
  "#ffcc00", "#ff7b00", "#2563eb", "#06b6d4", "#10b981"
];

const provinceColors = {};
let colorIndex = 0;
const uniqueProvinces = [...new Set(Object.values(provinceMap))];
uniqueProvinces.forEach(p => {
  provinceColors[p] = colors[colorIndex % colors.length];
  colorIndex++;
});

let mapContent = fs.readFileSync('src/components/VietnamMap.tsx', 'utf-8');

const mapRegex = /const provinceMap: Record<string, string> = \{[\s\S]*?\};/;
mapContent = mapContent.replace(mapRegex, `const provinceMap: Record<string, string> = ${JSON.stringify(provinceMap, null, 2)};`);

const colorRegex = /const provinceColors: Record<string, string> = \{[\s\S]*?\};/;
mapContent = mapContent.replace(colorRegex, `const provinceColors: Record<string, string> = ${JSON.stringify(provinceColors, null, 2)};`);

fs.writeFileSync('src/components/VietnamMap.tsx', mapContent);
console.log("Updated VietnamMap.tsx");
