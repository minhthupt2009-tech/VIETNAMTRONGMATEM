const fs = require('fs');
const content = fs.readFileSync('src/data/provinces.ts', 'utf8');
const lines = content.split('\n');

const foodImages = [
  'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1625938146369-adc83368bda7?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1605333396914-2613f4f879cb?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
];

const placeImages = [
  'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509030450251-ce6dd44b2f1c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540483761890-a1f7be05ce34?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1557750255-c76072a7aad1?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531737212413-667205e1cda7?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=800&auto=format&fit=crop',
];

let foodIndex = 0;
let placeIndex = 0;
let modified = false;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('image: "https://upload.wikimedia.org')) {
    let isFood = false;
    for (let j = i; j >= Math.max(0, i - 5); j--) {
      if (lines[j].includes('food: [')) {
        isFood = true;
        break;
      }
    }
    
    if (i > 0 && lines[i-1].includes('name:')) {
      const nameLine = lines[i-1].toLowerCase();
      if (nameLine.includes('cơm') || nameLine.includes('phở') || nameLine.includes('bún') || nameLine.includes('bánh') || nameLine.includes('chả') || nameLine.includes('lẩu') || nameLine.includes('cua') || nameLine.includes('gà') || nameLine.includes('thịt') || nameLine.includes('xôi') || nameLine.includes('nem') || nameLine.includes('kẹo') || nameLine.includes('mắm') || nameLine.includes('hủ tiếu') || nameLine.includes('gỏi') || nameLine.includes('hải sản') || nameLine.includes('mực') || nameLine.includes('cá') || nameLine.includes('lợn') || nameLine.includes('bê') || nameLine.includes('vịt') || nameLine.includes('nhút') || nameLine.includes('súp') || nameLine.includes('cháo') || nameLine.includes('mì') || nameLine.includes('cao lầu') || nameLine.includes('don') || nameLine.includes('muối') || nameLine.includes('hạt') || nameLine.includes('nhãn') || nameLine.includes('vải') || nameLine.includes('tỏi') || nameLine.includes('nho') || nameLine.includes('cà phê') || nameLine.includes('chè') || nameLine.includes('trà') || nameLine.includes('miến') || nameLine.includes('sá sùng') || nameLine.includes('thắng cố')) {
        isFood = true;
      }
    }

    if (isFood) {
      lines[i] = lines[i].replace(/image: ".*"/, 'image: "' + foodImages[foodIndex % foodImages.length] + '"');
      foodIndex++;
    } else {
      lines[i] = lines[i].replace(/image: ".*"/, 'image: "' + placeImages[placeIndex % placeImages.length] + '"');
      placeIndex++;
    }
    modified = true;
  }
}

if (modified) {
  fs.writeFileSync('src/data/provinces.ts', lines.join('\n'));
  console.log('Replaced all remaining Wikimedia images with Unsplash images.');
} else {
  console.log('No Wikimedia images found.');
}
