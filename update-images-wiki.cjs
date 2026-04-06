const fs = require('fs');
const https = require('https');

const content = fs.readFileSync('src/data/provinces.ts', 'utf8');
const lines = content.split('\n');

const options = {
  headers: {
    'User-Agent': 'TravelApp/1.0 (minhthupt2009@gmail.com)'
  }
};

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', reject);
  });
}

async function getWikiImage(query) {
  const searchUrl = `https://vi.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&utf8=&format=json`;
  const searchJson = await fetchJson(searchUrl);
  
  if (searchJson && searchJson.query && searchJson.query.search && searchJson.query.search.length > 0) {
    const title = searchJson.query.search[0].title;
    
    // Check if the title is somewhat relevant (e.g., shares at least one word)
    const queryWords = query.toLowerCase().split(' ');
    const titleWords = title.toLowerCase().split(' ');
    const hasOverlap = queryWords.some(w => w.length > 2 && titleWords.includes(w));
    
    if (!hasOverlap && queryWords.length > 0) {
        // If completely irrelevant, skip
        return null;
    }

    const imgUrl = `https://vi.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original|thumbnail&pithumbsize=800&titles=${encodeURIComponent(title)}`;
    const imgJson = await fetchJson(imgUrl);
    
    if (imgJson && imgJson.query && imgJson.query.pages) {
      const pages = imgJson.query.pages;
      const pageId = Object.keys(pages)[0];
      if (pageId !== '-1' && pages[pageId].thumbnail) {
        return pages[pageId].thumbnail.source;
      }
    }
  }
  return null;
}

async function processFile() {
  let currentName = null;
  let isProvinceName = false;
  let updatedCount = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    const nameMatch = line.match(/name:\s*"([^"]+)"/);
    if (nameMatch) {
      currentName = nameMatch[1];
      // Check if this is a province name (usually followed by id or lat/lng)
      // Actually, province name is usually preceded by id:
      if (i > 0 && lines[i-1].includes('id:')) {
        isProvinceName = true;
      } else {
        isProvinceName = false;
      }
    }

    if (line.includes('image: "') && currentName && !isProvinceName) {
      // Only process if it's an unsplash image (meaning it was replaced)
      if (line.includes('unsplash.com')) {
        console.log(`Fetching image for: ${currentName}`);
        const wikiImage = await getWikiImage(currentName);
        
        if (wikiImage) {
          lines[i] = line.replace(/image:\s*"[^"]+"/, `image: "${wikiImage}"`);
          console.log(`  -> Updated to: ${wikiImage}`);
          updatedCount++;
        } else {
          console.log(`  -> No suitable Wiki image found.`);
        }
      }
      currentName = null; // Reset after processing image
    }
  }

  if (updatedCount > 0) {
    fs.writeFileSync('src/data/provinces.ts', lines.join('\n'));
    console.log(`\nSuccessfully updated ${updatedCount} images.`);
  } else {
    console.log('\nNo images were updated.');
  }
}

processFile();
