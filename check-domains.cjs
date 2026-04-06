const fs = require('fs');
const content = fs.readFileSync('src/data/provinces.ts', 'utf8');
const lines = content.split('\n');
const domains = new Set();
for (const line of lines) {
  if (line.includes('image: "')) {
    const match = line.match(/image: "(https?:\/\/[^\/]+)/);
    if (match) {
      domains.add(match[1]);
    }
  }
}
console.log(Array.from(domains));
