const fs = require('fs');

const regions = {
  "Lai Châu": "Tây Bắc Bộ",
  "Điện Biên": "Tây Bắc Bộ",
  "Sơn La": "Tây Bắc Bộ",
  "Lào Cai - Yên Bái": "Tây Bắc Bộ",
  "Hà Giang - Tuyên Quang": "Đông Bắc Bộ",
  "Cao Bằng": "Đông Bắc Bộ",
  "Bắc Kạn - Thái Nguyên": "Đông Bắc Bộ",
  "Lạng Sơn": "Đông Bắc Bộ",
  "Quảng Ninh": "Đông Bắc Bộ",
  "Phú Thọ - Vĩnh Phúc - Hòa Bình": "Trung du và miền núi phía Bắc",
  "Hà Nội": "Đồng bằng sông Hồng",
  "Bắc Ninh - Bắc Giang": "Đồng bằng sông Hồng & Đông Bắc Bộ",
  "Hải Phòng": "Đồng bằng sông Hồng",
  "Hải Dương - Hưng Yên - Thái Bình": "Đồng bằng sông Hồng",
  "Hà Nam - Nam Định - Ninh Bình": "Đồng bằng sông Hồng",
  "Thanh Hóa": "Bắc Trung Bộ",
  "Nghệ An": "Bắc Trung Bộ",
  "Hà Tĩnh": "Bắc Trung Bộ",
  "Quảng Bình - Quảng Trị": "Bắc Trung Bộ",
  "TP. Huế": "Bắc Trung Bộ",
  "Đà Nẵng - Quảng Nam": "Nam Trung Bộ",
  "Quảng Ngãi": "Nam Trung Bộ",
  "Gia Lai - Kon Tum - Bình Định": "Tây Nguyên & Nam Trung Bộ",
  "Đắk Lắk - Đắk Nông": "Tây Nguyên",
  "Phú Yên - Khánh Hòa - Ninh Thuận": "Nam Trung Bộ",
  "Lâm Đồng - Bình Thuận": "Tây Nguyên & Nam Trung Bộ",
  "Bình Phước - Bình Dương - Đồng Nai": "Đông Nam Bộ",
  "Tây Ninh": "Đông Nam Bộ",
  "TP. Hồ Chí Minh - Long An - Bà Rịa Vũng Tàu": "Đông Nam Bộ & Đồng bằng sông Cửu Long",
  "Đồng Tháp - Tiền Giang": "Đồng bằng sông Cửu Long",
  "Vĩnh Long - Bến Tre - Trà Vinh": "Đồng bằng sông Cửu Long",
  "TP. Cần Thơ - Hậu Giang - Sóc Trăng": "Đồng bằng sông Cửu Long",
  "An Giang - Kiên Giang": "Đồng bằng sông Cửu Long",
  "Bạc Liêu - Cà Mau": "Đồng bằng sông Cửu Long"
};

let content = fs.readFileSync('src/data/provinces.ts', 'utf-8');

// Add region to interface
if (!content.includes('region: string;')) {
  content = content.replace('location: string;', 'location: string;\n  region: string;');
}

// Add region to each province
for (const [key, region] of Object.entries(regions)) {
  const regex = new RegExp(`("${key}":\\s*\\{\\s*name:\\s*"[^"]+",\\s*location:\\s*"[^"]+",)`);
  content = content.replace(regex, `$1\n    region: "${region}",`);
}

fs.writeFileSync('src/data/provinces.ts', content);
console.log("Regions added.");
