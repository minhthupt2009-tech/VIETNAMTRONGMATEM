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
  const url = "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/1/10/Hanoi_Skyline_-_NKS.jpg&w=800&h=600&fit=cover";
  console.log("Weserv status:", await checkUrl(url));
}

run();
