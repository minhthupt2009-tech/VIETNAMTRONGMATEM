const fs = require('fs');

let content = fs.readFileSync('src/data/provinces.ts', 'utf-8');

// Replace all loremflickr URLs with pollinations.ai URLs
content = content.replace(/"image":\s*"https:\/\/loremflickr\.com\/800\/600\/([^"]+)"/g, (match, keywords) => {
    // keywords is like "angiang,vietnam,landscape"
    const prompt = keywords.replace(/,/g, ' ') + ' realistic high quality photography';
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=800&height=600&nologo=true`;
    return `"image": "${url}"`;
});

// Also replace any remaining unsplash images that might be generic with pollinations
// Actually, let's just make sure the main province images are good.
// The user specifically complained about the main province images.
// Let's find the main province images and replace them with pollinations.ai

const parts = content.split(/(\s*"[^"]+":\s*{)/);
let newContent = parts[0];

for (let i = 1; i < parts.length; i += 2) {
    let header = parts[i];
    let body = parts[i+1];
    const provinceNameMatch = header.match(/"([^"]+)":\s*{/);
    if (provinceNameMatch) {
        const provinceName = provinceNameMatch[1];
        
        // Find the main image (it's at the end of the province object, usually preceded by lng)
        const mainImageRegex = /"lng":\s*[\d.]+,\s*"image":\s*"([^"]+)"/;
        body = body.replace(mainImageRegex, (match, currentUrl) => {
            const prompt = `Beautiful landscape photography of ${provinceName} province Vietnam, famous landmarks, scenic view, high quality, 8k resolution`;
            const newUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=800&height=600&nologo=true`;
            return match.replace(currentUrl, newUrl);
        });
    }
    newContent += header + body;
}

fs.writeFileSync('src/data/provinces.ts', newContent);
console.log("Successfully updated provinces.ts with Pollinations AI images.");
