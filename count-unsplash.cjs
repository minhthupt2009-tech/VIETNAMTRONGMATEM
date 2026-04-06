const fs = require('fs');
const content = fs.readFileSync('src/data/provinces.ts', 'utf8');
const lines = content.split('\n');
let count = 0;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('unsplash.com')) {
    count++;
  }
}
console.log('Unsplash images remaining:', count);
