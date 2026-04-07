const fs = require('fs');

const content = fs.readFileSync('src/data/provinces.ts', 'utf-8');

// Categories of Unsplash images
const images = {
  food: [
    "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555126634-ae235c4bcce0?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511910849309-0dffb8785146?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1548943487-a2e4f43b4850?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562565652-a9e870f81419?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1625938144755-652e08e359b7?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604544203109-18437258056f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=800&auto=format&fit=crop"
  ],
  landscape: [
    "https://images.unsplash.com/photo-1599708153386-62bf2f0988de?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559506273-620a221f51b6?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540483761890-a1f7be05ce34?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555921015-5532091f6026?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=800&auto=format&fit=crop"
  ],
  city: [
    "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559506273-620a221f51b6?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581007871115-f14bc016e0a4?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555921015-5532091f6026?q=80&w=800&auto=format&fit=crop"
  ]
};

let foodIndex = 0;
let landscapeIndex = 0;
let cityIndex = 0;

function getNextImage(category) {
  if (category === 'food') {
    const img = images.food[foodIndex % images.food.length];
    foodIndex++;
    return img;
  } else if (category === 'city') {
    const img = images.city[cityIndex % images.city.length];
    cityIndex++;
    return img;
  } else {
    const img = images.landscape[landscapeIndex % images.landscape.length];
    landscapeIndex++;
    return img;
  }
}

let newContent = content;

// Replace images inside food arrays
newContent = newContent.replace(/(food:\s*\[[\s\S]*?\])/g, (match) => {
  return match.replace(/image:\s*"https:\/\/upload\.wikimedia\.org[^"]+"/g, () => {
    return `image: "${getNextImage('food')}"`;
  });
});

// Replace images inside attractions arrays
newContent = newContent.replace(/(attractions:\s*\[[\s\S]*?\])/g, (match) => {
  return match.replace(/image:\s*"https:\/\/upload\.wikimedia\.org[^"]+"/g, () => {
    return `image: "${getNextImage('landscape')}"`;
  });
});

// Replace province hero images
newContent = newContent.replace(/lng:\s*[\d.]+,\s*image:\s*"https:\/\/upload\.wikimedia\.org[^"]+"/g, (match) => {
  return match.replace(/"https:\/\/upload\.wikimedia\.org[^"]+"/, `"${getNextImage('city')}"`);
});

fs.writeFileSync('src/data/provinces.ts', newContent);
console.log("Replaced all wikimedia images with Unsplash images.");
