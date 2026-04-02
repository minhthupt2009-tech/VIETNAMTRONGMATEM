const fs = require('fs');

const provinces = [
  { name: "Lai Châu", area: "9.068 km²", population: "460.196 người", location: "Vùng Tây Bắc Bộ" },
  { name: "Điện Biên", area: "9.541 km²", population: "598.856 người", location: "Vùng Tây Bắc Bộ" },
  { name: "Sơn La", area: "14.123 km²", population: "1.248.415 người", location: "Vùng Tây Bắc Bộ" },
  { name: "Lào Cai", area: "13.248 km²", population: "1.558.000 người", location: "Vùng Tây Bắc Bộ (Bao gồm Lào Cai, Yên Bái)" },
  { name: "Hà Giang", area: "7.929 km²", population: "854.679 người", location: "Vùng Đông Bắc Bộ" },
  { name: "Tuyên Quang", area: "5.867 km²", population: "784.811 người", location: "Vùng Đông Bắc Bộ" },
  { name: "Cao Bằng", area: "6.700 km²", population: "530.341 người", location: "Vùng Đông Bắc Bộ" },
  { name: "Lạng Sơn", area: "8.310 km²", population: "781.655 người", location: "Vùng Đông Bắc Bộ" },
  { name: "Thái Nguyên", area: "8.394 km²", population: "1.600.000 người", location: "Vùng Đông Bắc Bộ (Bao gồm Thái Nguyên, Bắc Kạn)" },
  { name: "Bắc Ninh", area: "4.723 km²", population: "3.200.000 người", location: "Vùng Đồng bằng sông Hồng (Bao gồm Bắc Ninh, Bắc Giang)" },
  { name: "Quảng Ninh", area: "6.178 km²", population: "1.320.324 người", location: "Vùng Đông Bắc Bộ" },
  { name: "Phú Thọ", area: "4.771 km²", population: "2.600.000 người", location: "Vùng Đông Bắc Bộ (Bao gồm Phú Thọ, Vĩnh Phúc)" },
  { name: "Hà Nội", area: "7.966 km²", population: "9.300.000 người", location: "Vùng Đồng bằng sông Hồng (Bao gồm Hà Nội, Hòa Bình)" },
  { name: "Hải Phòng", area: "6.830 km²", population: "6.500.000 người", location: "Vùng Đồng bằng sông Hồng (Bao gồm Hải Phòng, Hải Dương, Hưng Yên, Thái Bình, Nam Định)" },
  { name: "Ninh Bình", area: "2.242 km²", population: "1.850.000 người", location: "Vùng Đồng bằng sông Hồng (Bao gồm Ninh Bình, Hà Nam)" },
  { name: "Thanh Hóa", area: "11.120 km²", population: "3.640.128 người", location: "Vùng Bắc Trung Bộ" },
  { name: "Nghệ An", area: "16.490 km²", population: "3.327.791 người", location: "Vùng Bắc Trung Bộ" },
  { name: "Hà Tĩnh", area: "5.990 km²", population: "1.288.866 người", location: "Vùng Bắc Trung Bộ" },
  { name: "Quảng Trị", area: "12.796 km²", population: "1.550.000 người", location: "Vùng Bắc Trung Bộ (Bao gồm Quảng Bình, Quảng Trị)" },
  { name: "TP. Huế", area: "5.048 km²", population: "1.128.120 người", location: "Vùng Bắc Trung Bộ (Thừa Thiên Huế)" },
  { name: "TP. Đà Nẵng", area: "11.711 km²", population: "2.700.000 người", location: "Vùng Nam Trung Bộ (Bao gồm Đà Nẵng, Quảng Nam)" },
  { name: "Quảng Ngãi", area: "5.155 km²", population: "1.231.697 người", location: "Vùng Nam Trung Bộ" },
  { name: "Gia Lai", area: "25.216 km²", population: "2.100.000 người", location: "Vùng Tây Nguyên (Bao gồm Gia Lai, Kon Tum)" },
  { name: "Đắk Lắk", area: "19.599 km²", population: "2.500.000 người", location: "Vùng Tây Nguyên (Bao gồm Đắk Lắk, Đắk Nông)" },
  { name: "Lâm Đồng", area: "9.783 km²", population: "1.296.906 người", location: "Vùng Tây Nguyên" },
  { name: "Khánh Hòa", area: "16.920 km²", population: "3.800.000 người", location: "Vùng Nam Trung Bộ (Bao gồm Bình Định, Phú Yên, Khánh Hòa, Ninh Thuận)" },
  { name: "Đồng Nai", area: "12.780 km²", population: "5.500.000 người", location: "Vùng Đông Nam Bộ (Bao gồm Đồng Nai, Bình Thuận, Bà Rịa - Vũng Tàu)" },
  { name: "Tây Ninh", area: "10.912 km²", population: "2.100.000 người", location: "Vùng Đông Nam Bộ (Bao gồm Tây Ninh, Bình Phước)" },
  { name: "TP. Hồ Chí Minh", area: "4.755 km²", population: "11.500.000 người", location: "Vùng Đông Nam Bộ (Bao gồm TP. Hồ Chí Minh, Bình Dương)" },
  { name: "Long An", area: "4.494 km²", population: "1.688.547 người", location: "Vùng Đồng bằng sông Cửu Long" },
  { name: "Đồng Tháp mới", area: "5.890 km²", population: "3.350.000 người", location: "Vùng Đồng bằng sông Cửu Long (Bao gồm Đồng Tháp, Tiền Giang)" },
  { name: "An Giang", area: "3.536 km²", population: "1.908.352 người", location: "Vùng Đồng bằng sông Cửu Long" },
  { name: "TP. Cần Thơ", area: "14.500 km²", population: "6.800.000 người", location: "Vùng Đồng bằng sông Cửu Long (Bao gồm Cần Thơ, Hậu Giang, Sóc Trăng, Trà Vinh, Vĩnh Long, Bến Tre)" },
  { name: "Cà Mau", area: "14.300 km²", population: "3.900.000 người", location: "Vùng Đồng bằng sông Cửu Long (Bao gồm Cà Mau, Kiên Giang, Bạc Liêu)" }
];

let content = `export interface Attraction {
  name: string;
  lat: number;
  lng: number;
  highlights: string;
}

export interface Province {
  name: string;
  location: string;
  area: string;
  population: string;
  description: string;
  culture: string;
  food: string[];
  attractions: Attraction[];
  lat: number;
  lng: number;
}

export const provincesData: Record<string, Province> = {
`;

provinces.forEach(p => {
  content += `  "${p.name}": {
    name: "${p.name}",
    location: "${p.location}",
    area: "${p.area}",
    population: "${p.population}",
    description: "Tỉnh/Thành phố ${p.name} là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
`;
});

content += `};

export const getProvinceData = (name: string): Province => {
  if (provincesData[name]) return provincesData[name];
  return {
    name,
    location: "Đang cập nhật",
    area: "Đang cập nhật",
    population: "Đang cập nhật",
    description: \`Thông tin chi tiết về \${name} đang được cập nhật. Đây là một trong 34 tỉnh thành theo phân chia địa lý hành chính mới.\`,
    culture: "Đang cập nhật",
    food: [],
    attractions: [],
    lat: 16,
    lng: 106
  };
};
`;

fs.writeFileSync('src/data/provinces.ts', content);
console.log('Generated provinces.ts');
