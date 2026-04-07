const https = require('https');

function checkUrl(url) {
  return new Promise((resolve) => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      resolve(res.statusCode);
    });
    req.on('error', (e) => resolve(e.message));
  });
}

async function run() {
  const url1 = "https://upload.wikimedia.org/wikipedia/commons/1/10/Hanoi_Skyline_-_NKS.jpg";
  const url2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vietnam_location_map.svg/800px-Vietnam_location_map.svg.png";
  console.log("Original:", await checkUrl(url1));
  console.log("Thumb:", await checkUrl(url2));
}

run();
