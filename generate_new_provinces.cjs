const fs = require('fs');

const oldDataContent = fs.readFileSync('src/data/provinces.ts', 'utf-8');

// Extract the provincesData object
const match = oldDataContent.match(/export const provincesData: Record<string, Province> = (\{[\s\S]*?\});\n/);
let oldProvinces = {};
if (match) {
  // We need to parse it. It's a JS object, not JSON.
  // We can use eval or Function to parse it.
  // Since it's trusted code, we can use eval.
  const code = `(${match[1]})`;
  oldProvinces = eval(code);
}

const newProvincesList = [
  "An Giang", "Bắc Ninh", "Cà Mau", "Cao Bằng", "Đắk Lắk", "Điện Biên", "Đồng Nai", "Đồng Tháp",
  "Gia Lai", "Hà Tĩnh", "Hưng Yên", "Khánh Hoà", "Lai Châu", "Lâm Đồng", "Lạng Sơn", "Lào Cai",
  "Nghệ An", "Ninh Bình", "Phú Thọ", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị", "Sơn La", "Tây Ninh",
  "Thái Nguyên", "Thanh Hóa", "TP. Cần Thơ", "TP. Đà Nẵng", "TP. Hà Nội", "TP. Hải Phòng",
  "TP. Hồ Chí Minh", "TP. Huế", "Tuyên Quang", "Vĩnh Long"
];

const mappingToOld = {
  "An Giang": "An Giang - Kiên Giang",
  "Bắc Ninh": "Bắc Ninh - Bắc Giang",
  "Cà Mau": "Bạc Liêu - Cà Mau",
  "Cao Bằng": "Cao Bằng",
  "Đắk Lắk": "Đắk Lắk - Đắk Nông", // Phú Yên + Đắk Lắk
  "Điện Biên": "Điện Biên",
  "Đồng Nai": "Bình Phước - Bình Dương - Đồng Nai",
  "Đồng Tháp": "Đồng Tháp - Tiền Giang",
  "Gia Lai": "Gia Lai - Kon Tum - Bình Định",
  "Hà Tĩnh": "Hà Tĩnh",
  "Hưng Yên": "Hải Dương - Hưng Yên - Thái Bình",
  "Khánh Hoà": "Phú Yên - Khánh Hòa - Ninh Thuận",
  "Lai Châu": "Lai Châu",
  "Lâm Đồng": "Lâm Đồng - Bình Thuận",
  "Lạng Sơn": "Lạng Sơn",
  "Lào Cai": "Lào Cai - Yên Bái",
  "Nghệ An": "Nghệ An",
  "Ninh Bình": "Hà Nam - Nam Định - Ninh Bình",
  "Phú Thọ": "Phú Thọ - Vĩnh Phúc - Hòa Bình",
  "Quảng Ngãi": "Quảng Ngãi",
  "Quảng Ninh": "Quảng Ninh",
  "Quảng Trị": "Quảng Bình - Quảng Trị",
  "Sơn La": "Sơn La",
  "Tây Ninh": "Tây Ninh",
  "Thái Nguyên": "Bắc Kạn - Thái Nguyên",
  "Thanh Hóa": "Thanh Hóa",
  "TP. Cần Thơ": "TP. Cần Thơ - Hậu Giang - Sóc Trăng",
  "TP. Đà Nẵng": "Đà Nẵng - Quảng Nam",
  "TP. Hà Nội": "Hà Nội",
  "TP. Hải Phòng": "Hải Phòng",
  "TP. Hồ Chí Minh": "TP. Hồ Chí Minh - Long An - Bà Rịa Vũng Tàu",
  "TP. Huế": "TP. Huế",
  "Tuyên Quang": "Hà Giang - Tuyên Quang",
  "Vĩnh Long": "Vĩnh Long - Bến Tre - Trà Vinh"
};

const wikiImages = JSON.parse(fs.readFileSync('wiki_images.json', 'utf-8'));

const newProvincesData = {};

for (const newName of newProvincesList) {
  const oldName = mappingToOld[newName];
  const oldData = oldProvinces[oldName] || {};
  
  newProvincesData[newName] = {
    ...oldData,
    name: newName,
    image: wikiImages[oldName] || oldData.image || "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=800&auto=format&fit=crop"
  };
}

// Custom images for specific provinces based on user request
newProvincesData["TP. Hà Nội"].image = "https://upload.wikimedia.org/wikipedia/commons/1/10/Hanoi_Skyline_-_NKS.jpg"; // Or Lăng Bác
newProvincesData["TP. Hồ Chí Minh"].image = "https://upload.wikimedia.org/wikipedia/commons/e/e6/Ho_Chi_Minh_City_Skyline_%28Night%29.jpg";
newProvincesData["TP. Huế"].image = "https://upload.wikimedia.org/wikipedia/commons/1/17/Hue_Imperial_City.jpg";

let output = `export interface Attraction {
  name: string;
  lat: number;
  lng: number;
  highlights: string;
  description?: string;
  image?: string;
  videoUrl?: string;
}

export interface FoodItem {
  name: string;
  image: string;
}

export interface Province {
  name: string;
  location: string;
  region: string;
  area: string;
  population: string;
  description: string;
  culture: string[];
  economy: string[];
  climate: string;
  food: FoodItem[];
  attractions: Attraction[];
  lat: number;
  lng: number;
  image?: string;
}

export const provincesData: Record<string, Province> = ${JSON.stringify(newProvincesData, null, 2)};

export function getProvinceData(name: string): Province | null {
  return provincesData[name] || null;
}

export function getAllProvinces(): Province[] {
  return Object.values(provincesData);
}
`;

fs.writeFileSync('src/data/provinces.ts', output);
console.log("Updated provinces.ts");
