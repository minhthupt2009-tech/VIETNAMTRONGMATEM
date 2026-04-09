const fs = require('fs');

const replacements = {
  "Đảo Phú Quốc": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Phu_Quoc_Beach.jpg/800px-Phu_Quoc_Beach.jpg",
  "Miếu Bà Chúa Xứ": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Mieu_Ba_Chua_Xu_Nui_Sam.jpg/800px-Mieu_Ba_Chua_Xu_Nui_Sam.jpg",
  "Tràm Chim": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Tram_Chim_National_Park.jpg/800px-Tram_Chim_National_Park.jpg",
  "Chợ nổi Cái Bè": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Cai_Be_Floating_Market.jpg/800px-Cai_Be_Floating_Market.jpg",
  "Đền Hùng": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Den_Hung_Phu_Tho.jpg/800px-Den_Hung_Phu_Tho.jpg",
  "Tam Đảo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Tam_Dao_Vinh_Phuc.jpg/800px-Tam_Dao_Vinh_Phuc.jpg",
  "Chợ nổi Cái Răng": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Cai_Rang_Floating_Market.jpg/800px-Cai_Rang_Floating_Market.jpg",
  "Chùa Dơi": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Chua_Doi_Soc_Trang.jpg/800px-Chua_Doi_Soc_Trang.jpg",
  "Chợ Bến Thành": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ben_Thanh_Market.jpg/800px-Ben_Thanh_Market.jpg",
  "Biển Vũng Tàu": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Vung_Tau_Beach.jpg/800px-Vung_Tau_Beach.jpg"
};

let content = fs.readFileSync('src/data/provinces.ts', 'utf-8');

for (const [name, url] of Object.entries(replacements)) {
  const regex = new RegExp(`("name":\\s*"${name}",\\s*"lat":\\s*[\\d.]+,\\s*"lng":\\s*[\\d.]+,\\s*"highlights":\\s*"[^"]+",\\s*"image":\\s*")[^"]+(")`, 'g');
  content = content.replace(regex, `$1${url}$2`);
}

fs.writeFileSync('src/data/provinces.ts', content);
console.log('Fixed duplicate images.');
