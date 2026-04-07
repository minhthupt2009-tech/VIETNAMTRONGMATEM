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
  const urls = [
    "https://upload.wikimedia.org/wikipedia/commons/1/10/Hanoi_Skyline_-_NKS.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/1/1c/Hoan_Kiem.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fd/L%C4%83ng_B%C3%A1c_-_NKS.jpg"
  ];
  for (const url of urls) {
    console.log(url, await checkUrl(url));
  }
}

run();
