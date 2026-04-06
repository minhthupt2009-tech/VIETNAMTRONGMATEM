const fs = require('fs');
const content = fs.readFileSync('src/data/provinces.ts', 'utf8');
const lines = content.split('\n');

const fallbackImages = [
  'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=800&auto=format&fit=crop', // Food
  'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=800&auto=format&fit=crop', // Place
];

let modified = false;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('image: "https://upload.wikimedia.org') && (lines[i].includes('.pdf') || lines[i].includes('.svg') || lines[i].includes('White_rhinoceros'))) {
    
    let isFood = false;
    for (let j = i; j >= Math.max(0, i - 5); j--) {
      if (lines[j].includes('food: [')) {
        isFood = true;
        break;
      }
    }
    
    if (i > 0 && lines[i-1].includes('name:')) {
      const nameLine = lines[i-1].toLowerCase();
      if (nameLine.includes('cơm') || nameLine.includes('phở') || nameLine.includes('bún') || nameLine.includes('bánh') || nameLine.includes('chả') || nameLine.includes('lẩu') || nameLine.includes('cua') || nameLine.includes('gà') || nameLine.includes('thịt') || nameLine.includes('xôi') || nameLine.includes('nem') || nameLine.includes('kẹo') || nameLine.includes('mắm') || nameLine.includes('hủ tiếu') || nameLine.includes('gỏi') || nameLine.includes('hải sản') || nameLine.includes('mực') || nameLine.includes('cá') || nameLine.includes('lợn') || nameLine.includes('bê') || nameLine.includes('vịt') || nameLine.includes('nhút') || nameLine.includes('súp') || nameLine.includes('cháo') || nameLine.includes('mì') || nameLine.includes('cao lầu') || nameLine.includes('don') || nameLine.includes('muối') || nameLine.includes('hạt')) {
        isFood = true;
      }
    }

    const fallback = isFood ? fallbackImages[0] : fallbackImages[1];
    lines[i] = lines[i].replace(/image: ".*"/, `image: "${fallback}"`);
    modified = true;
  }
}

if (modified) {
  fs.writeFileSync('src/data/provinces.ts', lines.join('\n'));
  console.log('Fixed bad images.');
}
