const https = require('https');

function searchWikiImage(query) {
  const searchUrl = `https://vi.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&utf8=&format=json`;
  
  const options = {
    headers: {
      'User-Agent': 'TravelApp/1.0 (minhthupt2009@gmail.com)'
    }
  };

  https.get(searchUrl, options, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        if (json.query.search.length > 0) {
          const title = json.query.search[0].title;
          
          const imgUrl = `https://vi.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original|thumbnail&pithumbsize=800&titles=${encodeURIComponent(title)}`;
          https.get(imgUrl, options, (res2) => {
            let data2 = '';
            res2.on('data', chunk => data2 += chunk);
            res2.on('end', () => {
              const json2 = JSON.parse(data2);
              const pages = json2.query.pages;
              const pageId = Object.keys(pages)[0];
              if (pageId !== '-1' && pages[pageId].thumbnail) {
                console.log(`Found for ${query} (via ${title}):`, pages[pageId].thumbnail.source);
              } else {
                console.log(`No image found for ${query} (via ${title})`);
              }
            });
          });
        } else {
          console.log(`No search results for ${query}`);
        }
      } catch (e) {
        console.error('Error parsing JSON for', query);
      }
    });
  });
}

searchWikiImage('Miếu Bà Chúa Xứ');
searchWikiImage('Đảo Phú Quốc');
searchWikiImage('Chợ nổi Cái Răng');
searchWikiImage('Bún quậy Phú Quốc');
