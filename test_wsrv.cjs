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
  const url = "https://wsrv.nl/?url=upload.wikimedia.org/wikipedia/commons/1/1c/Hoan_Kiem.jpg&w=800";
  console.log("wsrv status:", await checkUrl(url));
}

run();
