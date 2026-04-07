const fs = require('fs');
const https = require('https');

https.get('https://code.highcharts.com/mapdata/countries/vn/vn-all.topo.json', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('public/vn-all.topo.json', data);
    console.log('Downloaded vn-all.topo.json');
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
