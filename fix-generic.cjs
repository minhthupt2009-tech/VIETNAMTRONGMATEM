const fs = require('fs');
let content = fs.readFileSync('src/data/provinces.ts', 'utf8');

content = content.replace(/https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/thumb\/d\/d6\/Foodlogo2\.svg\/960px-Foodlogo2\.svg\.png/g, 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Fermented_pork_wrapped_in_leaves.jpg/800px-Fermented_pork_wrapped_in_leaves.jpg');

content = content.replace(/https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/thumb\/2\/21\/Flag_of_Vietnam\.svg\/960px-Flag_of_Vietnam\.svg\.png/g, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vietnam_location_map.svg/800px-Vietnam_location_map.svg.png');

fs.writeFileSync('src/data/provinces.ts', content);
console.log('Fixed remaining generic images.');
