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
        // Look for images.unsplash.com/photo-...
        const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+[^\s"']+/g;
        const matches = data.match(regex);
        if (matches) {
          // Filter out profile images and get a good landscape one
          const valid = matches.filter(m => m.includes('w=') && !m.includes('profile'));
          if (valid.length > 0) {
            // Clean up the URL to be a standard 800x600 crop
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
  console.log("Hanoi:", await searchUnsplashHTML("hanoi-vietnam"));
  console.log("Ho Chi Minh:", await searchUnsplashHTML("ho-chi-minh-city"));
  console.log("Da Nang:", await searchUnsplashHTML("da-nang"));
  console.log("Ha Long:", await searchUnsplashHTML("ha-long-bay"));
}

run();
