const fs = require('fs');

const provinceImages = {
  "An Giang": "https://loremflickr.com/800/600/angiang,vietnam,landscape",
  "Bắc Ninh": "https://loremflickr.com/800/600/bacninh,vietnam,temple",
  "Cà Mau": "https://loremflickr.com/800/600/camau,vietnam,mangrove",
  "Cao Bằng": "https://loremflickr.com/800/600/caobang,vietnam,waterfall",
  "Đắk Lắk": "https://loremflickr.com/800/600/daklak,vietnam,coffee",
  "Điện Biên": "https://loremflickr.com/800/600/dienbien,vietnam,monument",
  "Đồng Nai": "https://loremflickr.com/800/600/dongnai,vietnam,industry",
  "Đồng Tháp": "https://loremflickr.com/800/600/dongthap,vietnam,lotus",
  "Gia Lai": "https://loremflickr.com/800/600/gialai,vietnam,mountain",
  "Hà Tĩnh": "https://loremflickr.com/800/600/hatinh,vietnam,coast",
  "Hưng Yên": "https://loremflickr.com/800/600/hungyen,vietnam,village",
  "Khánh Hoà": "https://loremflickr.com/800/600/nhatrang,vietnam,beach",
  "Lai Châu": "https://loremflickr.com/800/600/laichau,vietnam,mountain",
  "Lâm Đồng": "https://loremflickr.com/800/600/dalat,vietnam,flower",
  "Lạng Sơn": "https://loremflickr.com/800/600/langson,vietnam,mountain",
  "Lào Cai": "https://loremflickr.com/800/600/sapa,vietnam,terraces",
  "Nghệ An": "https://loremflickr.com/800/600/nghean,vietnam,hometown",
  "Ninh Bình": "https://loremflickr.com/800/600/ninhbinh,vietnam,trangan",
  "Phú Thọ": "https://loremflickr.com/800/600/phutho,vietnam,temple",
  "Quảng Ngãi": "https://loremflickr.com/800/600/quangngai,vietnam,island",
  "Quảng Ninh": "https://loremflickr.com/800/600/halongbay,vietnam",
  "Quảng Trị": "https://loremflickr.com/800/600/quangtri,vietnam,citadel",
  "Sơn La": "https://loremflickr.com/800/600/sonla,vietnam,tea",
  "Tây Ninh": "https://loremflickr.com/800/600/tayninh,vietnam,mountain",
  "Thái Nguyên": "https://loremflickr.com/800/600/thainguyen,vietnam,tea",
  "Thanh Hóa": "https://loremflickr.com/800/600/thanhhoa,vietnam,beach",
  "TP. Cần Thơ": "https://loremflickr.com/800/600/cantho,vietnam,river",
  "TP. Đà Nẵng": "https://loremflickr.com/800/600/danang,vietnam,bridge",
  "TP. Hà Nội": "https://loremflickr.com/800/600/hanoi,vietnam,lake",
  "TP. Hải Phòng": "https://loremflickr.com/800/600/haiphong,vietnam,port",
  "TP. Hồ Chí Minh": "https://loremflickr.com/800/600/saigon,vietnam,city",
  "TP. Huế": "https://loremflickr.com/800/600/hue,vietnam,imperial",
  "Tuyên Quang": "https://loremflickr.com/800/600/tuyenquang,vietnam,mountain",
  "Vĩnh Long": "https://loremflickr.com/800/600/vinhlong,vietnam,river"
};

let content = fs.readFileSync('src/data/provinces.ts', 'utf-8');

// 1. Update all food items and attractions first (more specific regex)
content = content.replace(/"name":\s*"([^"]+)",\s*"image":\s*"[^"]+"/g, (match, name) => {
  const keyword = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, ',');
  const url = `https://loremflickr.com/800/600/${keyword},vietnam,food,landmark`;
  return `"name": "${name}",\n        "image": "${url}"`;
});

// 2. Update attractions that have lat/lng
content = content.replace(/"name":\s*"([^"]+)",\s*"lat":[\s\S]*?"image":\s*"[^"]+"/g, (match, name) => {
  const keyword = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, ',');
  const url = `https://loremflickr.com/800/600/${keyword},vietnam,landmark`;
  return match.replace(/"image":\s*"[^"]+"/, `"image": "${url}"`);
});

// 3. Update main province images
for (const [name, url] of Object.entries(provinceImages)) {
  // Look for the block starting with the province name and ending with the image property
  const regex = new RegExp(`"${name}":\\s*{[^}]*?"image":\\s*"[^"]+"`, 'g');
  content = content.replace(regex, (m) => {
    return m.replace(/"image":\s*"[^"]+"/, `"image": "${url}"`);
  });
}

fs.writeFileSync('src/data/provinces.ts', content);
console.log("Successfully updated provinces.ts with dynamic images.");
