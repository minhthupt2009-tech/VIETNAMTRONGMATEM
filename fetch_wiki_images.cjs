const https = require('https');
const fs = require('fs');

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
  const content = fs.readFileSync('src/data/provinces.ts', 'utf-8');
  const provinceRegex = /"([^"]+)":\s*\{[\s\S]*?name:\s*"([^"]+)"/g;
  let match;
  const provinces = [];
  while ((match = provinceRegex.exec(content)) !== null) {
    provinces.push({ key: match[1], name: match[2] });
  }

  const results = {};
  for (const p of provinces) {
    // Try exact name first
    let url = await getWikiImage(p.name);
    if (!url) {
      // Try key
      url = await getWikiImage(p.key);
    }
    if (!url) {
      // Try removing parentheses
      const cleanName = p.name.replace(/\s*\(.*?\)\s*/g, '');
      url = await getWikiImage(cleanName);
    }
    if (!url) {
       // Try adding " (tỉnh)"
       const cleanName = p.name.replace(/\s*\(.*?\)\s*/g, '');
       url = await getWikiImage(cleanName + " (tỉnh)");
    }
    
    results[p.key] = url;
    console.log(`${p.key}: ${url}`);
  }
  
  fs.writeFileSync('wiki_images.json', JSON.stringify(results, null, 2));
}

run();
