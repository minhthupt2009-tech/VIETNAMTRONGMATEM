const https = require('https');

function searchUnsplashHTML(query) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'unsplash.com',
      path: `/s/photos/${encodeURIComponent(query)}`,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    };
    https.get(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+[^\s"']+/g;
        const matches = data.match(regex);
        if (matches) {
          const valid = matches.filter(m => m.includes('w=') && !m.includes('profile'));
          if (valid.length > 0) {
            const baseUrl = valid[0].split('?')[0];
            resolve(`${baseUrl}?q=80&w=800&auto=format&fit=crop`);
            return;
          }
        }
        resolve(null);
      });
    }).on('error', () => resolve(null));
  });
}

async function run() {
  const queries = [
    "Hanoi", "Ho Chi Minh City", "Da Nang", "Ha Long Bay", "Sapa", "Ha Giang",
    "Ninh Binh", "Hue", "Hoi An", "Da Lat", "Mekong Delta", "Phu Quoc",
    "Phong Nha", "Nha Trang", "Mui Ne", "Can Tho", "Vung Tau"
  ];
  for (const q of queries) {
    const url = await searchUnsplashHTML(q);
    console.log(`${q}: ${url}`);
  }
}

run();
