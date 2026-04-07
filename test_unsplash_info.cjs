const https = require('https');

function getUnsplashPhotoInfo(photoId) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'unsplash.com',
      path: `/photos/${photoId}`,
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    };
    https.get(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const titleMatch = data.match(/<title>(.*?)<\/title>/);
        resolve(titleMatch ? titleMatch[1] : null);
      });
    }).on('error', () => resolve(null));
  });
}

async function run() {
  const ids = [
    "1581007871115-f14bc016e0a4",
    "1504674900247-0877df9cc836",
    "1555126634-ae235c4bcce0",
    "1580476262798-bddd9f4b7369",
    "1512621776951-a57141f2eefd",
    "1625938144755-652e08e359b7",
    "1599084993091-1cb5c0721cc6",
    "1563379926898-05f4575a45d8",
    "1564834724105-918b73d1b9e0",
    "1585032226651-759b368d7246"
  ];
  for (const id of ids) {
    console.log(`${id}:`, await getUnsplashPhotoInfo(id));
  }
}

run();
