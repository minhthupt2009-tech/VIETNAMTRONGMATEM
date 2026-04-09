const fs = require('fs');
const https = require('https');

// Helper to fetch JSON from URL
function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'VietnamGeoExplorer/1.0' } }, (res) => {
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

// Search Wikipedia for an image
async function searchWikiImage(keyword) {
  try {
    const searchUrl = `https://vi.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(keyword)}&gsrlimit=3&prop=pageimages&piprop=original&format=json`;
    const data = await fetchJson(searchUrl);
    if (data && data.query && data.query.pages) {
      const pages = Object.values(data.query.pages);
      for (const page of pages) {
        if (page.original && page.original.source) {
          // Avoid svg and icons
          if (!page.original.source.toLowerCase().endsWith('.svg') && !page.original.source.toLowerCase().includes('icon')) {
            return page.original.source;
          }
        }
      }
    }
    return null;
  } catch (e) {
    return null;
  }
}

async function main() {
  console.log("Starting to fetch real images from Wikipedia...");
  let content = fs.readFileSync('src/data/provinces.ts', 'utf-8');
  
  // We need to parse the file. Since it's a bit complex, let's use regex to find and replace images.
  // But doing it asynchronously with regex replace is tricky.
  // Let's extract all province names and attraction names first.
  
  const provinceBlocks = content.split(/(\s*"[^"]+":\s*{)/);
  let newContent = provinceBlocks[0];
  
  for (let i = 1; i < provinceBlocks.length; i += 2) {
    let header = provinceBlocks[i];
    let body = provinceBlocks[i+1];
    const provinceNameMatch = header.match(/"([^"]+)":\s*{/);
    
    if (provinceNameMatch) {
      const provinceName = provinceNameMatch[1];
      console.log(`Processing province: ${provinceName}`);
      
      // 1. Province Main Image
      const mainImageRegex = /"lng":\s*[\d.]+,\s*"image":\s*"([^"]+)"/;
      const mainImgMatch = body.match(mainImageRegex);
      if (mainImgMatch) {
        const currentUrl = mainImgMatch[1];
        if (currentUrl.includes('pollinations.ai') || currentUrl.includes('unsplash.com') || currentUrl.includes('loremflickr')) {
          const wikiImg = await searchWikiImage(`Tỉnh ${provinceName} phong cảnh`);
          if (wikiImg) {
            body = body.replace(mainImageRegex, `"lng": ${mainImgMatch[0].match(/[\d.]+/)[0]},\n    "image": "${wikiImg}"`);
            console.log(`  [+] Found real image for province ${provinceName}`);
          } else {
            const wikiImg2 = await searchWikiImage(provinceName);
            if (wikiImg2) {
              body = body.replace(mainImageRegex, `"lng": ${mainImgMatch[0].match(/[\d.]+/)[0]},\n    "image": "${wikiImg2}"`);
              console.log(`  [+] Found real image for province ${provinceName} (fallback)`);
            }
          }
        }
      }
      
      // 2. Attractions Images
      const attrRegex = /"name":\s*"([^"]+)",\s*"lat":[\s\S]*?"image":\s*"([^"]+)"/g;
      let match;
      const replacements = [];
      while ((match = attrRegex.exec(body)) !== null) {
        const attrName = match[1];
        const currentUrl = match[2];
        if (currentUrl.includes('pollinations.ai') || currentUrl.includes('unsplash.com') || currentUrl.includes('loremflickr')) {
          const wikiImg = await searchWikiImage(`${attrName} ${provinceName}`);
          if (wikiImg) {
            replacements.push({ oldUrl: currentUrl, newUrl: wikiImg, name: attrName });
          } else {
            const wikiImg2 = await searchWikiImage(attrName);
            if (wikiImg2) {
              replacements.push({ oldUrl: currentUrl, newUrl: wikiImg2, name: attrName });
            }
          }
        }
      }
      
      for (const rep of replacements) {
        body = body.replace(`"image": "${rep.oldUrl}"`, `"image": "${rep.newUrl}"`);
        console.log(`  [+] Found real image for attraction ${rep.name}`);
      }
      
      // 3. Food Descriptions & Places
      // We will add generic descriptions and places to buy if they don't exist
      const foodRegex = /"name":\s*"([^"]+)",\s*"image":\s*"([^"]+)"(\s*})/g;
      body = body.replace(foodRegex, (match, foodName, foodImage, closingBrace) => {
        // If it already has description, skip (regex won't match anyway because of closingBrace)
        const desc = `${foodName} là một món ăn đặc sản trứ danh của ${provinceName}, mang đậm hương vị truyền thống và văn hóa ẩm thực địa phương. Món ăn được chế biến tỉ mỉ từ những nguyên liệu tươi ngon nhất.`;
        const places = `[\n          { "name": "Chợ trung tâm ${provinceName}", "address": "Khu vực chợ truyền thống" },\n          { "name": "Cửa hàng đặc sản địa phương", "address": "Các tuyến đường du lịch chính" }\n        ]`;
        return `"name": "${foodName}",\n        "image": "${foodImage}",\n        "description": "${desc}",\n        "placesToBuy": ${places}\n      }`;
      });
    }
    
    newContent += header + body;
  }
  
  fs.writeFileSync('src/data/provinces.ts', newContent);
  console.log("Successfully updated provinces.ts with real images and food details.");
}

main();
