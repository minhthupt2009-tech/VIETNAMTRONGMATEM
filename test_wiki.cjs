const https = require('https');

function getWikiImage(title) {
  return new Promise((resolve) => {
    const url = `https://vi.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${encodeURIComponent(title)}`;
    https.get(url, { headers: { 'User-Agent': 'NodeJS/1.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          const pageId = Object.keys(pages)[0];
          if (pageId !== '-1' && pages[pageId].original) {
            resolve(pages[pageId].original.source);
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
  console.log("Hà Nội:", await getWikiImage("Hà Nội"));
  console.log("Hồ Hoàn Kiếm:", await getWikiImage("Hồ Hoàn Kiếm"));
  console.log("Lăng Chủ tịch Hồ Chí Minh:", await getWikiImage("Lăng Chủ tịch Hồ Chí Minh"));
}

run();
