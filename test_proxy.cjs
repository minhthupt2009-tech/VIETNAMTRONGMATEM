const https = require('https');

function checkUrl(url) {
  return new Promise((resolve) => {
    const req = https.get(url, (res) => {
      resolve(res.statusCode);
    });
    req.on('error', (e) => resolve(e.message));
  });
}

async function run() {
  const wikiUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vietnam_location_map.svg/800px-Vietnam_location_map.svg.png";
  const proxyUrl = `https://wsrv.nl/?url=${encodeURIComponent(wikiUrl)}`;
  
  console.log("Wiki status:", await checkUrl(wikiUrl));
  console.log("Proxy status:", await checkUrl(proxyUrl));
}

run();
