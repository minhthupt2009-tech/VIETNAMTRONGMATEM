const fs = require('fs');
const https = require('https');

const content = fs.readFileSync('src/data/provinces.ts', 'utf8');
const lines = content.split('\n');

async function searchCommonsImage(query) {
  return new Promise((resolve) => {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=1&prop=imageinfo&iiprop=url&format=json`;
    https.get(url, { headers: { 'User-Agent': 'NodeJS/1.0' } }, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.query && json.query.pages) {
            const pages = json.query.pages;
            const pageId = Object.keys(pages)[0];
            if (pages[pageId].imageinfo && pages[pageId].imageinfo[0]) {
              resolve(pages[pageId].imageinfo[0].url);
              return;
            }
          }
          resolve(null);
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
      let name = '';
      for (let j = i - 1; j >= Math.max(0, i - 5); j--) {
        if (lines[j].includes('name: "')) {
          name = lines[j].match(/name: "(.*?)"/)[1];
          break;
        }
      }
      
      if (name) {
        console.log(`Searching Commons for: ${name}`);
        let imageUrl = await searchCommonsImage(name);
        
        if (!imageUrl) {
          const shortName = name.replace(/Đảo |Miếu |Chùa |Khu du lịch |Biển |Vịnh |Chợ |Đỉnh |Đèo |Thác /g, '');
          if (shortName !== name) {
            imageUrl = await searchCommonsImage(shortName);
          }
        }
        
        if (!imageUrl) {
          // Fallback to English terms for food
          if (name.includes('Cua')) imageUrl = await searchCommonsImage('Crab food');
          else if (name.includes('Phở')) imageUrl = await searchCommonsImage('Pho noodle');
          else if (name.includes('Bún')) imageUrl = await searchCommonsImage('Bun bo Hue');
          else if (name.includes('Gà')) imageUrl = await searchCommonsImage('Roast chicken');
          else if (name.includes('Xôi')) imageUrl = await searchCommonsImage('Sticky rice');
          else if (name.includes('Lẩu')) imageUrl = await searchCommonsImage('Hot pot');
          else if (name.includes('Cơm')) imageUrl = await searchCommonsImage('Cooked rice');
        }

        if (imageUrl) {
          console.log(`Found: ${imageUrl}`);
          lines[i] = lines[i].replace(/image: ".*"/, `image: "${imageUrl}"`);
          modified = true;
        } else {
          console.log(`Not found for: ${name}`);
        }
      }
      await new Promise(r => setTimeout(r, 200));
    }
  }
  
  if (modified) {
    fs.writeFileSync('src/data/provinces.ts', lines.join('\n'));
    console.log('Finished updating images.');
  }
}

processLines();
