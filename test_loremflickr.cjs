const https = require('https');

function getRedirectUrl(url) {
  return new Promise((resolve) => {
    const req = https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        resolve(res.headers.location);
      } else {
        resolve(res.statusCode);
      }
    });
    req.on('error', (e) => resolve(e.message));
  });
}

async function run() {
  const url = "https://loremflickr.com/800/600/hanoi,landmark/all";
  console.log("Redirects to:", await getRedirectUrl(url));
}

run();
