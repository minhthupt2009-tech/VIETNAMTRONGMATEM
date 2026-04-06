const fs = require('fs');
const https = require('https');

const content = fs.readFileSync('src/data/provinces.ts', 'utf8');
const lines = content.split('\n');

const options = {
  headers: {
    'User-Agent': 'TravelApp/1.0 (minhthupt2009@gmail.com)'
  }
};

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', reject);
  });
}

async function getWikiImage(query) {
  if (!query) return null;
  const searchUrl = `https://vi.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&utf8=&format=json`;
  const searchJson = await fetchJson(searchUrl);
  
  if (searchJson && searchJson.query && searchJson.query.search && searchJson.query.search.length > 0) {
    const title = searchJson.query.search[0].title;
    
    const imgUrl = `https://vi.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original|thumbnail&pithumbsize=800&titles=${encodeURIComponent(title)}`;
    const imgJson = await fetchJson(imgUrl);
    
    if (imgJson && imgJson.query && imgJson.query.pages) {
      const pages = imgJson.query.pages;
      const pageId = Object.keys(pages)[0];
      if (pageId !== '-1' && pages[pageId].thumbnail) {
        return pages[pageId].thumbnail.source;
      }
    }
  }
  return null;
}

async function processFile() {
  let currentName = null;
  let updatedCount = 0;
  let provinceName = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('id: "')) {
      // Find the name of the province which is usually on the next line
      for (let j = i + 1; j < i + 5; j++) {
        const pNameMatch = lines[j].match(/name:\s*"([^"]+)"/);
        if (pNameMatch) {
          provinceName = pNameMatch[1];
          break;
        }
      }
    }

    const nameMatch = line.match(/name:\s*"([^"]+)"/);
    if (nameMatch) {
      currentName = nameMatch[1];
    }

    if (line.includes('image: "') && line.includes('unsplash.com')) {
      // If currentName is null, it might be the province image at the end of the object
      const queryName = currentName || provinceName || "Việt Nam";
      console.log(`Fetching image for: ${queryName}`);
      
      let wikiImage = await getWikiImage(queryName);
      
      // Fallbacks for specific known missing ones
      if (!wikiImage || wikiImage.includes('Foodlogo2') || wikiImage.includes('Pad_Thai')) {
        if (queryName.includes('Gà nướng mắc khén')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/G%C3%A0_n%C6%B0%E1%BB%9Bng_m%E1%BA%AFc_kh%C3%A9n.jpg/800px-G%C3%A0_n%C6%B0%E1%BB%9Bng_m%E1%BA%AFc_kh%C3%A9n.jpg';
        else if (queryName.includes('Bê chao')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/B%C3%A1nh_x%C3%A8o_with_n%C6%B0%E1%BB%9Bc_m%E1%BA%AFm.jpg/800px-B%C3%A1nh_x%C3%A8o_with_n%C6%B0%E1%BB%9Bc_m%E1%BA%AFm.jpg'; // fallback
        else if (queryName.includes('Đồi chè Mộc Châu')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Moc_Chau_Tea_Hill.jpg/800px-Moc_Chau_Tea_Hill.jpg';
        else if (queryName.includes('Xôi ngũ sắc')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/X%C3%B4i_ng%C5%A9_s%E1%BA%AFc.jpg/800px-X%C3%B4i_ng%C5%A9_s%E1%BA%AFc.jpg';
        else if (queryName.includes('Trà Tân Cương')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Tan_Cuong_Tea_culture.jpg/800px-Tan_Cuong_Tea_culture.jpg';
        else if (queryName.includes('Hồ Ba Bể')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ba_Be_Lake.jpg/800px-Ba_Be_Lake.jpg';
        else if (queryName.includes('Vịt quay')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Roasted_Beijing_Duck_sliced.jpg/800px-Roasted_Beijing_Duck_sliced.jpg';
        else if (queryName.includes('Chả tôm')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Ch%E1%BA%A3_m%E1%BB%B1c.jpg/800px-Ch%E1%BA%A3_m%E1%BB%B1c.jpg';
        else if (queryName.includes('Nhút')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Fermented_pork_wrapped_in_leaves.jpg/800px-Fermented_pork_wrapped_in_leaves.jpg';
        else if (queryName.includes('Làng Sen')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Lang_Sen_Kim_Lien.jpg/800px-Lang_Sen_Kim_Lien.jpg';
        else if (queryName.includes('Ngã ba Đồng Lộc')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Nga_ba_Dong_Loc.jpg/800px-Nga_ba_Dong_Loc.jpg';
        else if (queryName.includes('Bà Nà')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Ba_Na_Hills_French_Village.jpg/800px-Ba_Na_Hills_French_Village.jpg';
        else if (queryName.includes('Bánh xèo')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/B%C3%A1nh_x%C3%A8o_with_n%C6%B0%E1%BB%9Bc_m%E1%BA%AFm.jpg/800px-B%C3%A1nh_x%C3%A8o_with_n%C6%B0%E1%BB%9Bc_m%E1%BA%AFm.jpg';
        else if (queryName.includes('Biển Hồ')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Bien_Ho_Pleiku.jpg/800px-Bien_Ho_Pleiku.jpg';
        else if (queryName.includes('Kỳ Co')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ky_Co_Beach.jpg/800px-Ky_Co_Beach.jpg';
        else if (queryName.includes('Bún cá')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Bun_ca_Chau_Doc.jpg/800px-Bun_ca_Chau_Doc.jpg';
        else if (queryName.includes('Gỏi cá')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Tuna_assortment.png';
        else if (queryName.includes('Hải Dương')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Hai_Duong_City.jpg/800px-Hai_Duong_City.jpg';
        else if (queryName.includes('Hưng Yên')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Hung_Yen_City.jpg/800px-Hung_Yen_City.jpg';
        else if (queryName.includes('Thái Bình')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Thai_Binh_City.jpg/800px-Thai_Binh_City.jpg';
        else if (queryName.includes('Nam Định')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Nam_Dinh_City.jpg/800px-Nam_Dinh_City.jpg';
        else if (queryName.includes('Ninh Bình')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Muaxuantamcoc.jpg/800px-Muaxuantamcoc.jpg';
        else if (queryName.includes('Thanh Hóa')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Sam_Son_beach.jpg/800px-Sam_Son_beach.jpg';
        else if (queryName.includes('Nghệ An')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Lang_Sen_Kim_Lien.jpg/800px-Lang_Sen_Kim_Lien.jpg';
        else if (queryName.includes('Hà Tĩnh')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Nga_ba_Dong_Loc.jpg/800px-Nga_ba_Dong_Loc.jpg';
        else if (queryName.includes('Quảng Bình')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Phongnhakebang6.jpg/800px-Phongnhakebang6.jpg';
        else if (queryName.includes('Quảng Trị')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Quang_Tri_Citadel.jpg/800px-Quang_Tri_Citadel.jpg';
        else if (queryName.includes('Thừa Thiên Huế')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/%C4%90%E1%BA%A1i_n%E1%BB%99i.jpg/800px-%C4%90%E1%BA%A1i_n%E1%BB%99i.jpg';
        else if (queryName.includes('Đà Nẵng')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Da_Nang_Skyline.jpg/800px-Da_Nang_Skyline.jpg';
        else if (queryName.includes('Quảng Nam')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/PhoCoHoiAn.jpg/800px-PhoCoHoiAn.jpg';
        else if (queryName.includes('Quảng Ngãi')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Ly_Son3.jpg/800px-Ly_Son3.jpg';
        else if (queryName.includes('Bình Định')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ky_Co_Beach.jpg/800px-Ky_Co_Beach.jpg';
        else if (queryName.includes('Phú Yên')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/G%C3%A0nh_%C4%90%C3%A1_%C4%90%C4%A9a_-_Ph%C3%BA_Y%C3%AAn.jpg/800px-G%C3%A0nh_%C4%90%C3%A1_%C4%90%C4%A9a_-_Ph%C3%BA_Y%C3%AAn.jpg';
        else if (queryName.includes('Khánh Hòa')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Nha_Trang%2C_Kh%C3%A1nh_H%C3%B2a.png/800px-Nha_Trang%2C_Kh%C3%A1nh_H%C3%B2a.png';
        else if (queryName.includes('Ninh Thuận')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Po_Klong_Garai.jpg/800px-Po_Klong_Garai.jpg';
        else if (queryName.includes('Bình Thuận')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Vietnam%2C_Mui_Ne_sand_dune.jpg/800px-Vietnam%2C_Mui_Ne_sand_dune.jpg';
        else if (queryName.includes('Kon Tum')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Kon_Tum_Wooden_Church.jpg/800px-Kon_Tum_Wooden_Church.jpg';
        else if (queryName.includes('Gia Lai')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Bien_Ho_Pleiku.jpg/800px-Bien_Ho_Pleiku.jpg';
        else if (queryName.includes('Đắk Lắk')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Lak_Lake.jpg/800px-Lak_Lake.jpg';
        else if (queryName.includes('Đắk Nông')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ta_Dung_Lake.jpg/800px-Ta_Dung_Lake.jpg';
        else if (queryName.includes('Lâm Đồng')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Da_Lat_-_Viet_Nam.jpg/800px-Da_Lat_-_Viet_Nam.jpg';
        else if (queryName.includes('Bình Phước')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Binh_Phuoc_Rubber_Forest.jpg/800px-Binh_Phuoc_Rubber_Forest.jpg';
        else if (queryName.includes('Tây Ninh')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Dau_Tieng_Lake_-_50766650163.png/800px-Dau_Tieng_Lake_-_50766650163.png';
        else if (queryName.includes('Bình Dương')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Binh_Duong_New_City.jpg/800px-Binh_Duong_New_City.jpg';
        else if (queryName.includes('Đồng Nai')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/BenCu_forest_structure_23Dec08.jpg/800px-BenCu_forest_structure_23Dec08.jpg';
        else if (queryName.includes('Bà Rịa - Vũng Tàu')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/B%E1%BB%9D_bi%E1%BB%83n_V%C5%A9ng_T%C3%A0u.JPG/800px-B%E1%BB%9D_bi%E1%BB%83n_V%C5%A9ng_T%C3%A0u.JPG';
        else if (queryName.includes('Hồ Chí Minh')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Ben_Thanh_market_2.jpg/800px-Ben_Thanh_market_2.jpg';
        else if (queryName.includes('Long An')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Long_An_Paddy_Field.jpg/800px-Long_An_Paddy_Field.jpg';
        else if (queryName.includes('Tiền Giang')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Vietnam_08_-_122_-_Cai_Be_floating_market_%283185904536%29.jpg/800px-Vietnam_08_-_122_-_Cai_Be_floating_market_%283185904536%29.jpg';
        else if (queryName.includes('Bến Tre')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Cocnout_candy_8.jpg/800px-Cocnout_candy_8.jpg';
        else if (queryName.includes('Trà Vinh')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Tra_Vinh_Ba_Om_Pond.jpg/800px-Tra_Vinh_Ba_Om_Pond.jpg';
        else if (queryName.includes('Vĩnh Long')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vinh_Long_Bridge.jpg/800px-Vinh_Long_Bridge.jpg';
        else if (queryName.includes('Đồng Tháp')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/%C4%90%E1%BB%93ng_c%E1%BB%8F_v%C3%A0_chim_n%C6%B0%E1%BB%9Bc.jpg/800px-%C4%90%E1%BB%93ng_c%E1%BB%8F_v%C3%A0_chim_n%C6%B0%E1%BB%9Bc.jpg';
        else if (queryName.includes('An Giang')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Mieuba2.jpg/800px-Mieuba2.jpg';
        else if (queryName.includes('Kiên Giang')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Phu_Quoc%2C_Viet_Nam.jpg/800px-Phu_Quoc%2C_Viet_Nam.jpg';
        else if (queryName.includes('Cần Thơ')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/M%E1%BB%99t_c%E1%BA%A3nh_%E1%BB%9F_ch%E1%BB%A3_n%E1%BB%95i_C%C3%A1i_R%C4%83ng.jpg/800px-M%E1%BB%99t_c%E1%BA%A3nh_%E1%BB%9F_ch%E1%BB%A3_n%E1%BB%95i_C%C3%A1i_R%C4%83ng.jpg';
        else if (queryName.includes('Hậu Giang')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Hau_Giang_River.jpg/800px-Hau_Giang_River.jpg';
        else if (queryName.includes('Sóc Trăng')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Ch%C3%B9a_D%C6%A1i_%2845715215502%29.jpg/800px-Ch%C3%B9a_D%C6%A1i_%2845715215502%29.jpg';
        else if (queryName.includes('Bạc Liêu')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/KamowK32A.jpg/800px-KamowK32A.jpg';
        else if (queryName.includes('Cà Mau')) wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Tuongdaimuicamau.jpg/800px-Tuongdaimuicamau.jpg';
        else wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/V%E1%BB%8Bnh_H%E1%BA%A1_Long_-_NKS.jpg/800px-V%E1%BB%8Bnh_H%E1%BA%A1_Long_-_NKS.jpg'; // Ultimate fallback
      }
      
      if (wikiImage) {
        lines[i] = line.replace(/image:\s*"[^"]+"/, `image: "${wikiImage}"`);
        console.log(`  -> Updated to: ${wikiImage}`);
        updatedCount++;
      }
      currentName = null;
    }
  }

  if (updatedCount > 0) {
    fs.writeFileSync('src/data/provinces.ts', lines.join('\n'));
    console.log(`\nSuccessfully updated ${updatedCount} images.`);
  } else {
    console.log('\nNo images were updated.');
  }
}

processFile();
