const https = require('https');

function checkUrl(url) {
  return new Promise((resolve) => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      resolve(res.statusCode);
    });
    req.on('error', (e) => resolve(e.message));
  });
}

async function run() {
  const url = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Hoan_Kiem.jpg/800px-Hoan_Kiem.jpg";
  console.log("Thumb:", await checkUrl(url));
}

run();
