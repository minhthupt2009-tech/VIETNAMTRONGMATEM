const fs = require('fs');

const landscapeImages = [
  "https://images.unsplash.com/photo-1559506273-620a221f51b6?q=80&w=800&auto=format&fit=crop", // Sapa
  "https://images.unsplash.com/photo-1599708153386-62bf2f0988de?q=80&w=800&auto=format&fit=crop", // Halong
  "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop", // Hoi An
  "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=800&auto=format&fit=crop", // Beach
  "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=800&auto=format&fit=crop", // Mekong
  "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=800&auto=format&fit=crop", // City
  "https://images.unsplash.com/photo-1555921015-5532091f6026?q=80&w=800&auto=format&fit=crop", // Resort
  "https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=800&auto=format&fit=crop", // Nature
  "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=800&auto=format&fit=crop", // Forest
  "https://images.unsplash.com/photo-1540483761890-a1f7be05ce34?q=80&w=800&auto=format&fit=crop", // River
  "https://images.unsplash.com/photo-1506462945848-ac8ea6f609cc?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1418065460487-3e41a6c8e18f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1434394354979-a235cd36269d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1439853949127-fa647821eba0?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1444464666168-49b626f860d5?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1445272619904-568f161a3595?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1447727214839-71ed7881c411?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1443632864897-14973fa006cf?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1445905595283-21f8ae8a33d2?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1445272619904-568f161a3595?q=80&w=800&auto=format&fit=crop"
];

const foodImages = [
  "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=800&auto=format&fit=crop", // Pho
  "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=800&auto=format&fit=crop", // Seafood
  "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=800&auto=format&fit=crop", // Spring rolls
  "https://images.unsplash.com/photo-1562565652-a9e870f81419?q=80&w=800&auto=format&fit=crop", // Fruit
  "https://images.unsplash.com/photo-1625938144755-652e08e359b7?q=80&w=800&auto=format&fit=crop", // Pancake
  "https://images.unsplash.com/photo-1604544203109-18437258056f?q=80&w=800&auto=format&fit=crop", // Meat
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop", // Coffee
  "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?q=80&w=800&auto=format&fit=crop", // Grilled
  "https://images.unsplash.com/photo-1511910849309-0dffb8785146?q=80&w=800&auto=format&fit=crop", // Spices
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop", // Salad
  "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?q=80&w=800&auto=format&fit=crop", // Nuts
  "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop", // Burger/Sandwich
  "https://images.unsplash.com/photo-1548943487-a2e4f43b4850?q=80&w=800&auto=format&fit=crop", // Soup
  "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=800&auto=format&fit=crop", // Sushi/Seafood
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop", // Pizza
  "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=800&auto=format&fit=crop", // Burger
  "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=800&auto=format&fit=crop", // Pasta
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=800&auto=format&fit=crop", // Sandwich
  "https://images.unsplash.com/photo-1484723091791-0fee59dc0508?q=80&w=800&auto=format&fit=crop", // Breakfast
  "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop"  // Salmon
];

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

let content = fs.readFileSync('src/data/provinces.ts', 'utf-8');

// Split by province blocks
const parts = content.split(/(\s*"[^"]+":\s*{)/);
let newContent = parts[0];

for (let i = 1; i < parts.length; i += 2) {
    let header = parts[i];
    let body = parts[i+1];
    const provinceNameMatch = header.match(/"([^"]+)":\s*{/);
    if (provinceNameMatch) {
        const provinceName = provinceNameMatch[1];
        
        // 1. Update main province image
        const pHash = hashString(provinceName);
        const pImage = landscapeImages[pHash % landscapeImages.length];
        const imageRegex = /"image":\s*"[^"]+"(?=\s*})/;
        body = body.replace(imageRegex, `"image": "${pImage}"`);
        
        // 2. Update food images
        body = body.replace(/"name":\s*"([^"]+)",\s*"image":\s*"[^"]+"/g, (match, name) => {
            const fHash = hashString(name);
            const fImage = foodImages[fHash % foodImages.length];
            return `"name": "${name}",\n        "image": "${fImage}"`;
        });
        
        // 3. Update attraction images
        body = body.replace(/"name":\s*"([^"]+)",\s*"lat":[\s\S]*?"image":\s*"[^"]+"/g, (match, name) => {
            const aHash = hashString(name + "attr");
            const aImage = landscapeImages[aHash % landscapeImages.length];
            return match.replace(/"image":\s*"[^"]+"/, `"image": "${aImage}"`);
        });
    }
    newContent += header + body;
}

fs.writeFileSync('src/data/provinces.ts', newContent);
console.log("Successfully updated provinces.ts with reliable Unsplash images.");
