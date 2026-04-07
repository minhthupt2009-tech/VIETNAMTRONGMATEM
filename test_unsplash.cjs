const https = require('https');

function searchUnsplash(query) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'unsplash.com',
      path: `/napi/search/photos?query=${encodeURIComponent(query)}&per_page=5`,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'application/json'
      }
    };
    https.get(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.results && json.results.length > 0) {
            let photo = json.results.find(p => p.width > p.height);
            if (!photo) photo = json.results[0];
            resolve(photo.urls.regular);
          } else {
            resolve(null);
          }
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

async function run() {
  const url = await searchUnsplash("Hanoi Vietnam");
  console.log(`Hanoi Vietnam: ${url}`);
}

run();
