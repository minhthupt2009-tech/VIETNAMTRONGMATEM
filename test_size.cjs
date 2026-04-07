const https = require('https');

function getHeaders(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      resolve(res.headers);
    });
    req.on('error', (e) => resolve(e.message));
    req.end();
  });
}

async function run() {
  const url = "https://upload.wikimedia.org/wikipedia/commons/1/10/Hanoi_Skyline_-_NKS.jpg";
  console.log(await getHeaders(url));
}

run();
