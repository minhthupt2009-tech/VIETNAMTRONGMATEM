const fs = require('fs');
const content = fs.readFileSync('src/data/provinces.ts', 'utf-8');

const provinceRegex = /"([^"]+)":\s*\{[\s\S]*?name:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"/g;
let match;
const provinces = [];
while ((match = provinceRegex.exec(content)) !== null) {
  provinces.push({ key: match[1], name: match[2], image: match[3] });
}

console.log(JSON.stringify(provinces, null, 2));
