const fs = require('fs');
const content = fs.readFileSync('src/data/provinces.ts', 'utf-8');
const matches = content.match(/"([^"]+)":\s*\{[^}]*lat:\s*[\d.]+,[^}]*lng:\s*[\d.]+,?(?![^}]*image:)/g);
if (matches) {
  console.log("Missing images in:", matches.map(m => m.split(':')[0]));
} else {
  console.log("All provinces have images.");
}
