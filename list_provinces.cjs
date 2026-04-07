const fs = require('fs');
const content = fs.readFileSync('src/data/provinces.ts', 'utf-8');

// Extract province keys
const provinceRegex = /"([^"]+)":\s*\{\s*name:\s*"([^"]+)"/g;
let match;
const provinces = [];
while ((match = provinceRegex.exec(content)) !== null) {
  provinces.push({ key: match[1], name: match[2] });
}
console.log(`Found ${provinces.length} provinces.`);
console.log(provinces.map(p => p.name).join(', '));
