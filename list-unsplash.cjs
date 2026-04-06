const fs = require('fs');
const content = fs.readFileSync('src/data/provinces.ts', 'utf8');
const lines = content.split('\n');
let currentName = null;
for (let i = 0; i < lines.length; i++) {
  const nameMatch = lines[i].match(/name:\s*"([^"]+)"/);
  if (nameMatch) {
    currentName = nameMatch[1];
  }
  if (lines[i].includes('unsplash.com') && currentName) {
    console.log(currentName);
  }
}
