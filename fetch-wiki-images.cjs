const fs = require('fs');
const https = require('https');

const content = fs.readFileSync('src/data/provinces.ts', 'utf8');
const lines = content.split('\n');

async function searchWikipediaImage(query) {
  return new Promise((resolve) => {
    const url = `https://vi.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${encodeURIComponent(query)}`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
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

async function processLines() {
  let modified = false;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('image: "https://images.unsplash.com')) {
      // Find the name of the attraction
      let name = '';
      for (let j = i - 1; j >= Math.max(0, i - 5); j--) {
        if (lines[j].includes('name: "')) {
          name = lines[j].match(/name: "(.*?)"/)[1];
          break;
        }
      }
      
      if (name) {
        console.log(`Searching image for: ${name}`);
        const imageUrl = await searchWikipediaImage(name);
        if (imageUrl) {
          console.log(`Found: ${imageUrl}`);
          lines[i] = lines[i].replace(/image: ".*"/, `image: "${imageUrl}"`);
          modified = true;
        } else {
          // Try without specific keywords
          const shortName = name.replace(/Đảo |Miếu |Chùa |Khu du lịch |Biển |Vịnh |Chợ /g, '');
          if (shortName !== name) {
            const imageUrl2 = await searchWikipediaImage(shortName);
            if (imageUrl2) {
              console.log(`Found (short): ${imageUrl2}`);
              lines[i] = lines[i].replace(/image: ".*"/, `image: "${imageUrl2}"`);
              modified = true;
            } else {
              console.log(`Not found for: ${name}`);
            }
          } else {
            console.log(`Not found for: ${name}`);
          }
        }
      }
      // Add a small delay to avoid hitting API rate limits
      await new Promise(r => setTimeout(r, 200));
    }
  }
  
  if (modified) {
    fs.writeFileSync('src/data/provinces.ts', lines.join('\n'));
    console.log('Finished updating images.');
  }
}

processLines();
