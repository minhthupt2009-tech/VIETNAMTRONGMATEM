const https = require('https');

function fetchWikiImage(title) {
  const url = `https://vi.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original|thumbnail&pithumbsize=800&titles=${encodeURIComponent(title)}`;
  
  const options = {
    headers: {
      'User-Agent': 'TravelApp/1.0 (minhthupt2009@gmail.com)'
    }
  };

  https.get(url, options, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        const pages = json.query.pages;
        const pageId = Object.keys(pages)[0];
        if (pageId !== '-1' && pages[pageId].thumbnail) {
          console.log(`Found for ${title}:`, pages[pageId].thumbnail.source);
        } else {
          console.log(`Not found for ${title}`);
        }
      } catch (e) {
        console.error('Error parsing JSON for', title, data);
      }
    });
  });
}

fetchWikiImage('Miếu Bà Chúa Xứ');
fetchWikiImage('Phú Quốc');
fetchWikiImage('Vịnh Hạ Long');
fetchWikiImage('Phở');
