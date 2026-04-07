const https = require('https');

function searchGithub(query) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'api.github.com',
      path: `/search/code?q=${encodeURIComponent(query)}+extension:json`,
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    };
    https.get(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', () => resolve(null));
  });
}

async function run() {
  console.log(await searchGithub("unsplash hanoi"));
}

run();
