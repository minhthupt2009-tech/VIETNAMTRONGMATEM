const fs = require('fs');
const https = require('https');

const content = fs.readFileSync('src/data/provinces.ts', 'utf-8');
const urls = [...content.matchAll(/image:\s*"([^"]+)"/g)].map(m => m[1]);
const uniqueUrls = [...new Set(urls)];

console.log(`Checking ${uniqueUrls.length} unique URLs...`);

let checked = 0;
let broken = [];

function checkUrl(url) {
  return new Promise((resolve) => {
    if (url.startsWith('https://images.unsplash.com')) {
      resolve({url, ok: true}); // Assume unsplash is fine
      return;
    }
    
    const req = https.get(url, (res) => {
      if (res.statusCode >= 400) {
        resolve({url, ok: false, status: res.statusCode});
      } else {
        resolve({url, ok: true});
      }
    }).on('error', (e) => {
      resolve({url, ok: false, error: e.message});
    });
    req.setTimeout(5000, () => {
      req.abort();
      resolve({url, ok: false, error: 'timeout'});
    });
  });
}

async function run() {
  // Check in batches of 10
  for (let i = 0; i < uniqueUrls.length; i += 10) {
    const batch = uniqueUrls.slice(i, i + 10);
    const results = await Promise.all(batch.map(checkUrl));
    for (const r of results) {
      if (!r.ok) {
        console.log(`BROKEN: ${r.url} (${r.status || r.error})`);
        broken.push(r.url);
      }
    }
    checked += batch.length;
    process.stdout.write(`\rChecked ${checked}/${uniqueUrls.length}`);
  }
  console.log(`\nFound ${broken.length} broken URLs.`);
}

run();
