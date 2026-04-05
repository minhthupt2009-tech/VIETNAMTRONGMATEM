export interface Attraction {
  name: string;
  lat: number;
  lng: number;
  highlights: string;
  description?: string;
  image?: string;
}

export interface FoodItem {
  name: string;
  image: string;
}

export interface Province {
  name: string;
  location: string;
  area: string;
  population: string;
  description: string;
  culture: string;
  economy: string;
  climate: string;
  food: FoodItem[];
  attractions: Attraction[];
  lat: number;
  lng: number;
  image?: string;
}

export const provincesData: Record<string, Province> = {
  "Lai Châu": {
    name: "Lai Châu",
    location: "Việt Nam",
    area: "9.068 km²",
    population: "460.196 người",
    description: "Lai Châu là một tỉnh biên giới thuộc vùng Tây Bắc Bộ, Việt Nam. Nơi đây có cảnh quan thiên nhiên hùng vĩ với những dãy núi cao, đèo dốc và những bản làng dân tộc thiểu số đậm đà bản sắc.",
    culture: "Đa dạng với hơn 20 dân tộc anh em sinh sống, nổi bật là văn hóa người Thái, Mông, Dao.",
    economy: "Nông lâm nghiệp là chủ đạo, đang phát triển thủy điện và du lịch cộng đồng.",
    climate: "Khí hậu nhiệt đới gió mùa núi cao, mùa đông lạnh, mùa hè mát mẻ.",
    food: [
      {
        name: "Lợn cắp nách",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sapa-pig.jpg/800px-Sapa-pig.jpg"
      },
      {
        name: "Xôi tím",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/X%C3%B4i_%C4%91%E1%BB%97_xanh.jpg/800px-X%C3%B4i_%C4%91%E1%BB%97_xanh.jpg"
      }
    ],
    attractions: [
      {
        name: "Đèo Ô Quy Hồ",
        lat: 22.35,
        lng: 103.78,
        highlights: "Một trong tứ đại đỉnh đèo của Tây Bắc.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/O_Quy_Ho_pass.jpg/960px-O_Quy_Ho_pass.jpg"
      }
    ],
    lat: 22.3975,
    lng: 103.45,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Laichautown.jpg"
  },
  "Điện Biên": {
    name: "Điện Biên",
    location: "Việt Nam",
    area: "9.541 km²",
    population: "598.856 người",
    description: "Điện Biên là tỉnh miền núi biên giới thuộc vùng Tây Bắc, nổi tiếng với chiến thắng Điện Biên Phủ lừng lẫy năm châu.",
    culture: "Đậm đà bản sắc văn hóa dân tộc Thái, Mông với các lễ hội truyền thống như hoa Ban.",
    economy: "Phát triển nông nghiệp, lâm nghiệp và du lịch lịch sử.",
    climate: "Nhiệt đới gió mùa núi cao, mùa đông lạnh và ít mưa.",
    food: [
      {
        name: "Gà nướng mắc khén",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/G%C3%A0_n%C6%B0%E1%BB%9Bng.jpg/800px-G%C3%A0_n%C6%B0%E1%BB%9Bng.jpg"
      },
      {
        name: "Thịt trâu gác bếp",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/L%E1%BB%85_h%E1%BB%99i_%E1%BA%A9m_th%E1%BB%B1c_C%E1%BB%ADa_Vi%E1%BB%87t_th4n2023_%C4%91%E1%BA%B7c_s%E1%BA%A3n_T%C3%A2y_B%E1%BA%AFc%2C_th%E1%BB%8Bt_tr%C3%A2u_g%C3%A1c_b%E1%BA%BFp_m%E1%BA%AFc_kh%C3%A9n_%284%29.jpg/800px-L%E1%BB%85_h%E1%BB%99i_%E1%BA%A9m_th%E1%BB%B1c_C%E1%BB%ADa_Vi%E1%BB%87t_th4n2023_%C4%91%E1%BA%B7c_s%E1%BA%A3n_T%C3%A2y_B%E1%BA%AFc%2C_th%E1%BB%8Bt_tr%C3%A2u_g%C3%A1c_b%E1%BA%BFp_m%E1%BA%AFc_kh%C3%A9n_%284%29.jpg"
      }
    ],
    attractions: [
      {
        name: "Di tích Điện Biên Phủ",
        lat: 21.39,
        lng: 103.01,
        highlights: "Quần thể di tích lịch sử hào hùng.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/M%C6%B0%E1%BB%9Dng_Thanh_Valley.jpg/960px-M%C6%B0%E1%BB%9Dng_Thanh_Valley.jpg"
      }
    ],
    lat: 21.3853,
    lng: 103.0181,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/M%C6%B0%E1%BB%9Dng_Thanh_Valley.jpg"
  },
  "Sơn La": {
    name: "Sơn La",
    location: "Việt Nam",
    area: "14.123 km²",
    population: "1.248.415 người",
    description: "Sơn La là tỉnh miền núi Tây Bắc, nổi tiếng với cao nguyên Mộc Châu xanh mướt và công trình thủy điện Sơn La lớn nhất Đông Nam Á.",
    culture: "Văn hóa đặc sắc của đồng bào Thái, H'Mông với điệu múa xòe và khèn bè.",
    economy: "Nông nghiệp công nghệ cao, trồng cây ăn quả, bò sữa và thủy điện.",
    climate: "Khí hậu cận ôn đới ở vùng cao nguyên, mát mẻ quanh năm.",
    food: [
      {
        name: "Bê chao Mộc Châu",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Goat_meat_dish.jpg/800px-Goat_meat_dish.jpg"
      },
      {
        name: "Cá nướng Pa Pỉnh Tộp",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Khu_%E1%BA%A9m_th%E1%BB%B1c_B%E1%BA%BFn_Ngh%C3%A9_ng13th8n2023_%28c%C3%A1_n%C6%B0%E1%BB%9Bng_T%C3%A2y_B%E1%BA%AFc_Pa_t%E1%BB%89nh_t%E1%BB%99p%29_%287%29.jpg/800px-Khu_%E1%BA%A9m_th%E1%BB%B1c_B%E1%BA%BFn_Ngh%C3%A9_ng13th8n2023_%28c%C3%A1_n%C6%B0%E1%BB%9Bng_T%C3%A2y_B%E1%BA%AFc_Pa_t%E1%BB%89nh_t%E1%BB%99p%29_%287%29.jpg"
      }
    ],
    attractions: [
      {
        name: "Đồi chè Mộc Châu",
        lat: 20.85,
        lng: 104.63,
        highlights: "Những đồi chè xanh mướt trải dài vô tận.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Moc_Chau_tea_hill.jpg/800px-Moc_Chau_tea_hill.jpg"
      }
    ],
    lat: 21.328,
    lng: 103.897,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/S%E1%BB%91ng_l%C6%B0ng_kh%E1%BB%A7ng_long_T%C3%A0_X%C3%B9a.jpg"
  },
  "Lào Cai - Yên Bái": {
    name: "Lào Cai (Lào Cai + Yên Bái)",
    location: "Việt Nam",
    area: "13.258 km²",
    population: "1.554.000 người",
    description: "Cụm tỉnh Lào Cai - Yên Bái là trung tâm du lịch và kinh tế cửa khẩu của vùng Tây Bắc, nổi bật với Sa Pa sương mù và ruộng bậc thang Mù Cang Chải.",
    culture: "Sự hòa quyện văn hóa của người Mông, Dao, Tày, Thái với các phiên chợ vùng cao độc đáo.",
    economy: "Phát triển mạnh du lịch, kinh tế cửa khẩu và khai thác khoáng sản.",
    climate: "Khí hậu ôn đới và cận nhiệt đới, có tuyết rơi vào mùa đông ở vùng cao.",
    food: [
      {
        name: "Thắng cố",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Th%E1%BA%AFng_c%E1%BB%91.jpg/800px-Th%E1%BA%AFng_c%E1%BB%91.jpg"
      },
      {
        name: "Xôi ngũ sắc",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/X%C3%B4i_ng%C5%A9_s%E1%BA%AFc.JPG/800px-X%C3%B4i_ng%C5%A9_s%E1%BA%AFc.JPG"
      }
    ],
    attractions: [
      {
        name: "Đỉnh Fansipan",
        lat: 22.3,
        lng: 103.77,
        highlights: "Nóc nhà Đông Dương hùng vĩ.",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/de/C%C3%A1p-treo-fansipan-17.jpg"
      },
      {
        name: "Mù Cang Chải",
        lat: 21.85,
        lng: 104.08,
        highlights: "Ruộng bậc thang đẹp nhất Việt Nam.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Mu_Cang_Chai_01.JPG/960px-Mu_Cang_Chai_01.JPG"
      }
    ],
    lat: 22.4833,
    lng: 103.9667,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Fansipan_summit_2_in_sunrise.jpg"
  },
  "Hà Giang - Tuyên Quang": {
    name: "Hà Giang (Hà Giang + Tuyên Quang)",
    location: "Việt Nam",
    area: "13.800 km²",
    population: "1.650.000 người",
    description: "Vùng đất địa đầu Tổ quốc với Cao nguyên đá Đồng Văn hùng vĩ và khu di tích lịch sử Tân Trào.",
    culture: "Đậm đà bản sắc dân tộc Mông, Tày, Dao với lễ hội hoa tam giác mạch.",
    economy: "Nông nghiệp, lâm nghiệp và du lịch sinh thái, lịch sử.",
    climate: "Nhiệt đới gió mùa, mùa đông rất lạnh ở vùng núi cao.",
    food: [
      {
        name: "Cháo ấu tẩu",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Ch%C3%A1o_l%C3%B2ng.jpg/800px-Ch%C3%A1o_l%C3%B2ng.jpg"
      },
      {
        name: "Bánh cuốn trứng",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Banh_cuon.jpg/800px-Banh_cuon.jpg"
      }
    ],
    attractions: [
      {
        name: "Cột cờ Lũng Cú",
        lat: 23.36,
        lng: 105.31,
        highlights: "Điểm cực Bắc thiêng liêng của Tổ quốc.",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/20/C%E1%BB%99t_c%E1%BB%9D_L%C5%A9ng_C%C3%BA.JPG"
      },
      {
        name: "Mã Pì Lèng",
        lat: 23.25,
        lng: 105.4,
        highlights: "Đệ nhất hùng quan của Việt Nam.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/%C4%90%C3%A8o_M%C3%A3_P%C3%AD_L%C3%A8ng_2022.jpg/960px-%C4%90%C3%A8o_M%C3%A3_P%C3%AD_L%C3%A8ng_2022.jpg"
      }
    ],
    lat: 22.8233,
    lng: 104.9833,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/20/C%E1%BB%99t_c%E1%BB%9D_L%C5%A9ng_C%C3%BA.JPG"
  },
  "Cao Bằng": {
    name: "Cao Bằng",
    location: "Việt Nam",
    area: "6.700 km²",
    population: "530.341 người",
    description: "Cao Bằng là vùng đất biên cương với non nước hữu tình, nổi tiếng với thác Bản Giốc và hang Pác Bó.",
    culture: "Văn hóa người Tày, Nùng với làn điệu hát Then, đàn Tính.",
    economy: "Nông nghiệp, khai khoáng và du lịch sinh thái.",
    climate: "Khí hậu ôn hòa, mát mẻ quanh năm.",
    food: [
      {
        name: "Vịt quay 7 vị",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Roasted_Beijing_Duck_sliced.jpg/800px-Roasted_Beijing_Duck_sliced.jpg"
      },
      {
        name: "Hạt dẻ Trùng Khánh",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Roasted_chestnuts.jpg/800px-Roasted_chestnuts.jpg"
      }
    ],
    attractions: [
      {
        name: "Thác Bản Giốc",
        lat: 22.85,
        lng: 106.72,
        highlights: "Thác nước tự nhiên lớn nhất Đông Nam Á.",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Bangioc9tam.jpg"
      }
    ],
    lat: 22.6667,
    lng: 106.25,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Ban_Gioc_-_Detian_Falls2.jpg"
  },
  "Bắc Kạn - Thái Nguyên": {
    name: "Thái Nguyên (Bắc Kạn + Thái Nguyên)",
    location: "Việt Nam",
    area: "8.390 km²",
    population: "1.600.000 người",
    description: "Trung tâm vùng trung du miền núi phía Bắc, nổi tiếng với đệ nhất danh trà Thái Nguyên và hồ Ba Bể thơ mộng.",
    culture: "Giao thoa văn hóa giữa miền núi và đồng bằng, quê hương của nhiều di tích lịch sử ATK.",
    economy: "Công nghiệp luyện kim, giáo dục đào tạo và nông nghiệp (trồng chè).",
    climate: "Nhiệt đới gió mùa, có mùa đông lạnh.",
    food: [
      {
        name: "Trà Tân Cương",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Green_tea_leaves.jpg/800px-Green_tea_leaves.jpg"
      },
      {
        name: "Miến dong",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Dongfen.JPG/800px-Dongfen.JPG"
      }
    ],
    attractions: [
      {
        name: "Hồ Ba Bể",
        lat: 22.4,
        lng: 105.61,
        highlights: "Hồ nước ngọt tự nhiên trên núi lớn nhất Việt Nam.",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/BacKan-HoBaBe_map.png"
      },
      {
        name: "Đồi chè Tân Cương",
        lat: 21.58,
        lng: 105.78,
        highlights: "Vùng chè đặc sản nổi tiếng.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Tan_Cuong_Tea_culture.jpg/960px-Tan_Cuong_Tea_culture.jpg"
      }
    ],
    lat: 21.5667,
    lng: 105.85,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/19/TN_VNG_QT.jpg"
  },
  "Lạng Sơn": {
    name: "Lạng Sơn",
    location: "Việt Nam",
    area: "8.310 km²",
    population: "781.655 người",
    description: "Tỉnh biên giới phía Bắc, cửa ngõ quan trọng giao thương với Trung Quốc, nổi tiếng với chợ Kỳ Lừa, nàng Tô Thị.",
    culture: "Văn hóa xứ Lạng đậm đà bản sắc dân tộc Tày, Nùng.",
    economy: "Thương mại biên giới, dịch vụ cửa khẩu và du lịch.",
    climate: "Nhiệt đới gió mùa, mùa đông lạnh giá, có thể có tuyết ở đỉnh Mẫu Sơn.",
    food: [
      {
        name: "Lợn quay lá mắc mật",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Shaoruzhu.jpg"
      },
      {
        name: "Phở chua",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Ph%E1%BB%9F_b%C3%B2%2C_C%E1%BA%A7u_Gi%E1%BA%A5y%2C_H%C3%A0_N%E1%BB%99i.jpg/800px-Ph%E1%BB%9F_b%C3%B2%2C_C%E1%BA%A7u_Gi%E1%BA%A5y%2C_H%C3%A0_N%E1%BB%99i.jpg"
      }
    ],
    attractions: [
      {
        name: "Đỉnh Mẫu Sơn",
        lat: 21.83,
        lng: 106.98,
        highlights: "Khu du lịch nghỉ dưỡng với khí hậu mát mẻ.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mau_Son.JPG/960px-Mau_Son.JPG"
      }
    ],
    lat: 21.8333,
    lng: 106.7667,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/57/M%E1%BA%ABu_S%C6%A1n.jpg"
  },
  "Quảng Ninh": {
    name: "Quảng Ninh",
    location: "Việt Nam",
    area: "6.178 km²",
    population: "1.320.324 người",
    description: "Quảng Ninh được ví như một Việt Nam thu nhỏ, có biển, đảo, đồng bằng, trung du, đồi núi, biên giới. Nổi tiếng toàn cầu với Vịnh Hạ Long.",
    culture: "Văn hóa biển đảo kết hợp với văn hóa công nhân vùng mỏ.",
    economy: "Phát triển mạnh mẽ công nghiệp khai thác than, du lịch biển và kinh tế cửa khẩu.",
    climate: "Nhiệt đới gió mùa ven biển.",
    food: [
      {
        name: "Chả mực Hạ Long",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Ch%E1%BA%A3_m%E1%BB%B1c.jpg/800px-Ch%E1%BA%A3_m%E1%BB%B1c.jpg"
      },
      {
        name: "Sá sùng",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Sipuncula.jpg/800px-Sipuncula.jpg"
      }
    ],
    attractions: [
      {
        name: "Vịnh Hạ Long",
        lat: 20.91,
        lng: 107.18,
        highlights: "Di sản thiên nhiên thế giới UNESCO.",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/29/V%E1%BB%8Bnh_H%E1%BA%A1_Long_-_NKS.jpg"
      }
    ],
    lat: 21,
    lng: 107.3333,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/A_view_of_Ha_Long_Bay_from_the_high_point_of_Sun_Sot_cave_%2831520203451%29.jpg"
  },
  "Phú Thọ - Vĩnh Phúc - Hòa Bình": {
    name: "Phú Thọ (Phú Thọ + Vĩnh Phúc + Hòa Bình)",
    location: "Việt Nam",
    area: "10.300 km²",
    population: "3.500.000 người",
    description: "Vùng đất Tổ cội nguồn của dân tộc Việt Nam, kết hợp với vùng công nghiệp Vĩnh Phúc và cửa ngõ Tây Bắc Hòa Bình.",
    culture: "Tín ngưỡng thờ cúng Hùng Vương, văn hóa Mường đặc sắc ở Hòa Bình.",
    economy: "Phát triển công nghiệp, nông nghiệp và du lịch tâm linh, sinh thái.",
    climate: "Nhiệt đới gió mùa, phân hóa đa dạng từ đồng bằng đến miền núi.",
    food: [
      {
        name: "Thịt chua Thanh Sơn",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Fermented_pork_wrapped_in_leaves.jpg/800px-Fermented_pork_wrapped_in_leaves.jpg"
      },
      {
        name: "Cơm lam Hòa Bình",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/C%C6%A1m_lam.jpg/800px-C%C6%A1m_lam.jpg"
      }
    ],
    attractions: [
      {
        name: "Đền Hùng",
        lat: 21.36,
        lng: 105.32,
        highlights: "Khu di tích lịch sử quốc gia đặc biệt.",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Mausoleum_of_Hung_King.JPG"
      },
      {
        name: "Tam Đảo",
        lat: 21.45,
        lng: 105.64,
        highlights: "Khu nghỉ dưỡng trên núi mát mẻ.",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/af/C%C3%A1nh_%C4%91%E1%BB%93ng_d%C6%B0%E1%BB%9Bi_ch%C3%A2n_n%C3%BAi_Tam_%C4%90%E1%BA%A3o.jpg"
      }
    ],
    lat: 21.3167,
    lng: 105.2167,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/21/%C4%90%C6%B0%E1%BB%9Dng_l%C3%AAn_%C4%90%E1%BB%81n_H%C3%B9ng_-_panoramio.jpg"
  },
  "Hà Nội": {
    name: "Hà Nội",
    location: "Việt Nam",
    area: "3.359 km²",
    population: "8.418.883 người",
    description: "Thủ đô ngàn năm văn hiến của Việt Nam, trung tâm chính trị, văn hóa, giáo dục và kinh tế lớn của cả nước.",
    culture: "Văn hóa Tràng An thanh lịch, hội tụ tinh hoa văn hóa của cả nước.",
    economy: "Trung tâm kinh tế, thương mại, dịch vụ và công nghệ cao.",
    climate: "Nhiệt đới gió mùa, có 4 mùa rõ rệt.",
    food: [
      {
        name: "Phở Hà Nội",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Ph%E1%BB%9F_b%C3%B2%2C_C%E1%BA%A7u_Gi%E1%BA%A5y%2C_H%C3%A0_N%E1%BB%99i.jpg/800px-Ph%E1%BB%9F_b%C3%B2%2C_C%E1%BA%A7u_Gi%E1%BA%A5y%2C_H%C3%A0_N%E1%BB%99i.jpg"
      },
      {
        name: "Bún chả",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/B%C3%BAn_ch%E1%BA%A3_Th%E1%BB%A5y_Khu%C3%AA.jpg/800px-B%C3%BAn_ch%E1%BA%A3_Th%E1%BB%A5y_Khu%C3%AA.jpg"
      }
    ],
    attractions: [
      {
        name: "Hồ Hoàn Kiếm",
        lat: 21.02,
        lng: 105.85,
        highlights: "Trái tim của thủ đô Hà Nội.",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Hoan_Kiem.jpg"
      }
    ],
    lat: 21.0285,
    lng: 105.8542,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/10/Hanoi_Skyline_-_NKS.jpg"
  },
  "Bắc Ninh - Bắc Giang": {
    name: "Bắc Ninh (Bắc Ninh + Bắc Giang)",
    location: "Việt Nam",
    area: "4.720 km²",
    population: "3.300.000 người",
    description: "Vùng Kinh Bắc xưa, cái nôi của dân ca Quan họ, nay là trung tâm công nghiệp lớn của miền Bắc.",
    culture: "Đậm đà truyền thống văn hóa, quê hương của các làn điệu Quan họ mượt mà.",
    economy: "Phát triển mạnh mẽ công nghiệp điện tử, thu hút FDI lớn.",
    climate: "Nhiệt đới gió mùa, mùa đông lạnh.",
    food: [
      {
        name: "Bánh phu thê",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Phu_The_Cake.jpg/800px-Phu_The_Cake.jpg"
      },
      {
        name: "Vải thiều Lục Ngạn",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Litchi_chinensis_Luc_Ngan.jpg/800px-Litchi_chinensis_Luc_Ngan.jpg"
      }
    ],
    attractions: [
      {
        name: "Chùa Dâu",
        lat: 21.06,
        lng: 106.04,
        highlights: "Ngôi chùa cổ nhất Việt Nam.",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Dau_pagoda.jpg"
      }
    ],
    lat: 21.1833,
    lng: 106.05,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Trung_t%C3%A2m_v%C4%83n_h%C3%B3a_Kinh_B%E1%BA%AFc.jpg"
  },
  "Hải Phòng": {
    name: "Hải Phòng",
    location: "Việt Nam",
    area: "1.526 km²",
    population: "2.088.020 người",
    description: "Thành phố cảng lớn nhất miền Bắc, trung tâm công nghiệp và giao thương hàng hải quan trọng.",
    culture: "Văn hóa đô thị cảng biển năng động, cởi mở.",
    economy: "Cảng biển, công nghiệp nặng, du lịch biển.",
    climate: "Nhiệt đới gió mùa ven biển.",
    food: [
      {
        name: "Bánh đa cua",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/81/BANH_DA_CUA_1.jpg"
      },
      {
        name: "Nem cua bể",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Nem_cua_b%E1%BB%83_H%C3%A0_N%E1%BB%99i_t%E1%BA%A1i_Nguy%E1%BB%85n_S%C6%A1n%2C_T%C3%A2n_Ph%C3%BA%2C_th%C3%A1ng_9_n%C4%83m_2018_%283%29.jpg/800px-Nem_cua_b%E1%BB%83_H%C3%A0_N%E1%BB%99i_t%E1%BA%A1i_Nguy%E1%BB%85n_S%C6%A1n%2C_T%C3%A2n_Ph%C3%BA%2C_th%C3%A1ng_9_n%C4%83m_2018_%283%29.jpg"
      }
    ],
    attractions: [
      {
        name: "Cát Bà",
        lat: 20.72,
        lng: 107.04,
        highlights: "Quần đảo xinh đẹp với hệ sinh thái đa dạng.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/QD_Catba2.jpg/960px-QD_Catba2.jpg"
      }
    ],
    lat: 20.8449,
    lng: 106.6881,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Haiphong2020.jpg"
  },
  "Hải Dương - Hưng Yên - Thái Bình": {
    name: "Hải Dương (Hải Dương + Hưng Yên + Thái Bình)",
    location: "Việt Nam",
    area: "4.500 km²",
    population: "5.100.000 người",
    description: "Vùng trọng điểm nông nghiệp và công nghiệp nhẹ của Đồng bằng sông Hồng, vựa lúa lớn của miền Bắc.",
    culture: "Văn hóa làng quê Bắc Bộ truyền thống, nhiều di tích lịch sử và lễ hội.",
    economy: "Nông nghiệp lúa nước, công nghiệp chế biến và dệt may.",
    climate: "Nhiệt đới gió mùa.",
    food: [
      {
        name: "Bánh đậu xanh",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Banh-Dau-Xanh.jpg"
      },
      {
        name: "Nhãn lồng",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Longan_tree_at_Pine_Island_Nursery.jpg/800px-Longan_tree_at_Pine_Island_Nursery.jpg"
      }
    ],
    attractions: [
      {
        name: "Chùa Keo",
        lat: 20.37,
        lng: 106.29,
        highlights: "Công trình kiến trúc gỗ độc đáo.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Chuakeothaibinh.jpg/960px-Chuakeothaibinh.jpg"
      }
    ],
    lat: 20.9333,
    lng: 106.3167,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Banh-Dau-Xanh.jpg"
  },
  "Hà Nam - Nam Định - Ninh Bình": {
    name: "Nam Định (Hà Nam + Nam Định + Ninh Bình)",
    location: "Việt Nam",
    area: "4.100 km²",
    population: "3.600.000 người",
    description: "Vùng đất phía Nam đồng bằng sông Hồng, nổi tiếng với di sản thiên nhiên Tràng An và các làng nghề truyền thống.",
    culture: "Cố đô Hoa Lư lịch sử, văn hóa Phật giáo và Thiên chúa giáo đan xen.",
    economy: "Du lịch sinh thái, tâm linh, nông nghiệp và công nghiệp vật liệu xây dựng.",
    climate: "Nhiệt đới gió mùa.",
    food: [
      {
        name: "Phở bò Nam Định",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Ph%E1%BB%9F_b%C3%B2%2C_C%E1%BA%A7u_Gi%E1%BA%A5y%2C_H%C3%A0_N%E1%BB%99i.jpg/800px-Ph%E1%BB%9F_b%C3%B2%2C_C%E1%BA%A7u_Gi%E1%BA%A5y%2C_H%C3%A0_N%E1%BB%99i.jpg"
      },
      {
        name: "Thịt dê núi",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Goat_meat_dish.jpg/800px-Goat_meat_dish.jpg"
      }
    ],
    attractions: [
      {
        name: "Tràng An",
        lat: 20.25,
        lng: 105.97,
        highlights: "Di sản văn hóa và thiên nhiên thế giới.",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Muaxuantamcoc.jpg"
      }
    ],
    lat: 20.4333,
    lng: 106.1667,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Sam_Son_beach.jpg"
  },
  "Thanh Hóa": {
    name: "Thanh Hóa",
    location: "Việt Nam",
    area: "11.114 km²",
    population: "3.712.600 người",
    description: "Tỉnh lớn ở Bắc Trung Bộ, nơi giao thoa giữa miền Bắc và miền Trung, có đầy đủ các địa hình núi, trung du, đồng bằng và biển.",
    culture: "Vùng đất địa linh nhân kiệt, quê hương của nhiều triều đại phong kiến Việt Nam.",
    economy: "Công nghiệp lọc hóa dầu, du lịch biển và nông nghiệp.",
    climate: "Nhiệt đới gió mùa, chịu ảnh hưởng của gió Lào vào mùa hè.",
    food: [
      {
        name: "Nem chua",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Fermented_pork_wrapped_in_leaves.jpg/800px-Fermented_pork_wrapped_in_leaves.jpg"
      },
      {
        name: "Chả tôm",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Cha_gio.jpg"
      }
    ],
    attractions: [
      {
        name: "Sầm Sơn",
        lat: 19.73,
        lng: 105.9,
        highlights: "Bãi biển du lịch sầm uất.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Sam_Son_beach.jpg"
      }
    ],
    lat: 19.8,
    lng: 105.7667,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/81/Le_Loi_statue.JPG"
  },
  "Nghệ An": {
    name: "Nghệ An",
    location: "Việt Nam",
    area: "16.486 km²",
    population: "3.409.800 người",
    description: "Tỉnh có diện tích lớn nhất Việt Nam, quê hương của Chủ tịch Hồ Chí Minh.",
    culture: "Truyền thống hiếu học, văn hóa dân ca ví dặm Nghệ Tĩnh.",
    economy: "Nông nghiệp, công nghiệp và du lịch lịch sử, sinh thái.",
    climate: "Khí hậu khắc nghiệt, mùa hè có gió Tây Nam khô nóng.",
    food: [
      {
        name: "Súp lươn",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/S%C3%BAp_l%C6%B0%C6%A1n_Ngh%E1%BB%87_An.jpg/800px-S%C3%BAp_l%C6%B0%C6%A1n_Ngh%E1%BB%87_An.jpg"
      },
      {
        name: "Nhút Thanh Chương",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Nh%C3%BAt_Thanh_Ch%C6%B0%C6%A1ng.jpg/800px-Nh%C3%BAt_Thanh_Ch%C6%B0%C6%A1ng.jpg"
      }
    ],
    attractions: [
      {
        name: "Làng Sen",
        lat: 18.67,
        lng: 105.55,
        highlights: "Quê nội Bác Hồ.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Kim_Lien_Monuments_Park.JPG/960px-Kim_Lien_Monuments_Park.JPG"
      }
    ],
    lat: 19.3333,
    lng: 104.9,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Quangtruonghochiminh.jpg"
  },
  "Hà Tĩnh": {
    name: "Hà Tĩnh",
    location: "Việt Nam",
    area: "5.990 km²",
    population: "1.313.254 người",
    description: "Tỉnh thuộc vùng Bắc Trung Bộ, nổi tiếng với ngã ba Đồng Lộc và khu kinh tế Vũng Áng.",
    culture: "Quê hương của đại thi hào Nguyễn Du, đậm đà dân ca ví dặm.",
    economy: "Phát triển công nghiệp nặng và nông lâm thủy sản.",
    climate: "Nhiệt đới gió mùa, chịu nhiều ảnh hưởng của bão và gió Lào.",
    food: [
      {
        name: "Kẹo cu đơ",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/KeoCudo.JPG/800px-KeoCudo.JPG"
      },
      {
        name: "Mực nhảy Vũng Áng",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Fresh_squid.jpg/800px-Fresh_squid.jpg"
      }
    ],
    attractions: [
      {
        name: "Ngã ba Đồng Lộc",
        lat: 18.38,
        lng: 105.75,
        highlights: "Di tích lịch sử thanh niên xung phong.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ng%C3%A3_ba_%C4%90%E1%BB%93ng_L%E1%BB%99c.jpg/800px-Ng%C3%A3_ba_%C4%90%E1%BB%93ng_L%E1%BB%99c.jpg"
      }
    ],
    lat: 18.3333,
    lng: 105.9,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Toancanhthixa.jpg"
  },
  "Quảng Bình - Quảng Trị": {
    name: "Quảng Bình (Quảng Bình + Quảng Trị)",
    location: "Việt Nam",
    area: "12.700 km²",
    population: "1.550.000 người",
    description: "Vùng đất miền Trung anh hùng, nổi tiếng với hệ thống hang động kỳ vĩ Phong Nha - Kẻ Bàng và các di tích lịch sử vĩ tuyến 17.",
    culture: "Gắn liền với những năm tháng chiến tranh hào hùng của dân tộc.",
    economy: "Du lịch hang động, lịch sử và nông nghiệp.",
    climate: "Nhiệt đới gió mùa, mùa hè rất nóng và khô.",
    food: [
      {
        name: "Bánh lọc",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/B%C3%A1nh_b%C3%A8o%2C_b%E1%BB%99t_l%E1%BB%8Dc%2C_nem_chua.jpg/800px-B%C3%A1nh_b%C3%A8o%2C_b%E1%BB%99t_l%E1%BB%8Dc%2C_nem_chua.jpg"
      },
      {
        name: "Cháo canh",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/B%C3%A1nh_canh_Qu%E1%BA%A3ng_B%C3%ACnh.jpg/800px-B%C3%A1nh_canh_Qu%E1%BA%A3ng_B%C3%ACnh.jpg"
      }
    ],
    attractions: [
      {
        name: "Phong Nha - Kẻ Bàng",
        lat: 17.58,
        lng: 106.28,
        highlights: "Vương quốc hang động thế giới.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Phongnhakebang6.jpg/960px-Phongnhakebang6.jpg"
      }
    ],
    lat: 17.4833,
    lng: 106.6,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Toancanhthixa.jpg"
  },
  "TP. Huế": {
    name: "Thừa Thiên Huế (TP. Huế)",
    location: "Việt Nam",
    area: "4.902 km²",
    population: "1.133.600 người",
    description: "Cố đô của Việt Nam, nơi lưu giữ quần thể di tích kiến trúc cung đình triều Nguyễn.",
    culture: "Văn hóa cung đình, nhã nhạc, ẩm thực tinh tế và con người trầm mặc.",
    economy: "Du lịch văn hóa, di sản là mũi nhọn.",
    climate: "Nhiệt đới gió mùa, lượng mưa lớn vào mùa thu đông.",
    food: [
      {
        name: "Bún bò Huế",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Bun-Bo-Hue-from-Huong-Giang-2011.jpg/800px-Bun-Bo-Hue-from-Huong-Giang-2011.jpg"
      },
      {
        name: "Bánh bèo nậm lọc",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/B%C3%A1nh_b%C3%A8o.jpg"
      }
    ],
    attractions: [
      {
        name: "Đại Nội Huế",
        lat: 16.47,
        lng: 107.58,
        highlights: "Hoàng thành của triều đại nhà Nguyễn.",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/%C4%90%E1%BA%A1i_n%E1%BB%99i.jpg"
      }
    ],
    lat: 16.4667,
    lng: 107.6,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Bun-Bo-Hue-from-Huong-Giang-2011.jpg"
  },
  "Đà Nẵng - Quảng Nam": {
    name: "Đà Nẵng (Đà Nẵng + Quảng Nam)",
    location: "Việt Nam",
    area: "11.800 km²",
    population: "2.700.000 người",
    description: "Trung tâm kinh tế, du lịch lớn nhất miền Trung, hội tụ vẻ đẹp hiện đại của Đà Nẵng và nét cổ kính của Hội An, Mỹ Sơn.",
    culture: "Giao thoa văn hóa Chăm Pa và Việt, đô thị sầm uất và phố cổ yên bình.",
    economy: "Du lịch, dịch vụ, công nghiệp công nghệ cao và cảng biển.",
    climate: "Nhiệt đới gió mùa, có hai mùa mưa nắng rõ rệt.",
    food: [
      {
        name: "Mì Quảng",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Mi_Quang_1A_Danang.jpg/800px-Mi_Quang_1A_Danang.jpg"
      },
      {
        name: "Cao lầu",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Cao_l%E1%BA%A7u_%28144854_994%29.jpg/800px-Cao_l%E1%BA%A7u_%28144854_994%29.jpg"
      }
    ],
    attractions: [
      {
        name: "Phố cổ Hội An",
        lat: 15.88,
        lng: 108.33,
        highlights: "Thương cảng cổ sầm uất thế kỷ 16-17.",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/PhoCoHoiAn.jpg"
      },
      {
        name: "Bà Nà Hills",
        lat: 15.99,
        lng: 107.98,
        highlights: "Khu du lịch trên núi với Cầu Vàng nổi tiếng.",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Panoramic_View.jpg"
      }
    ],
    lat: 16.0667,
    lng: 108.2333,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Han_River_Bridge_in_Vietnam_Night_View.jpg"
  },
  "Quảng Ngãi": {
    name: "Quảng Ngãi",
    location: "Việt Nam",
    area: "5.155 km²",
    population: "1.234.700 người",
    description: "Tỉnh ven biển Duyên hải Nam Trung Bộ, nổi tiếng với đảo Lý Sơn và nhà máy lọc dầu Dung Quất.",
    culture: "Văn hóa Sa Huỳnh cổ đại, quê hương đội Hoàng Sa kiêm quản Bắc Hải.",
    economy: "Công nghiệp lọc hóa dầu, nông nghiệp và đánh bắt thủy sản.",
    climate: "Nhiệt đới gió mùa, mùa mưa thường có bão.",
    food: [
      {
        name: "Tỏi Lý Sơn",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Ly_Son3.jpg/800px-Ly_Son3.jpg"
      },
      {
        name: "Don",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Don_Qu%E1%BA%A3ng_Ng%C3%A3i.jpg/800px-Don_Qu%E1%BA%A3ng_Ng%C3%A3i.jpg"
      }
    ],
    attractions: [
      {
        name: "Đảo Lý Sơn",
        lat: 15.38,
        lng: 109.11,
        highlights: "Vương quốc tỏi với cảnh quan núi lửa độc đáo.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/C%E1%BB%95ng_ch%C3%A0o_tr%C3%AAn_Huy%E1%BB%87n_%C4%90%E1%BA%A3o_L%C3%BD_S%C6%A1n_-_Qu%E1%BA%A3ng_Ng%C3%A3i.jpg/960px-C%E1%BB%95ng_ch%C3%A0o_tr%C3%AAn_Huy%E1%BB%87n_%C4%90%E1%BA%A3o_L%C3%BD_S%C6%A1n_-_Qu%E1%BA%A3ng_Ng%C3%A3i.jpg"
      }
    ],
    lat: 15.1167,
    lng: 108.8,
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/DUNG_QUAT_REFINERY_-_panoramio.jpg"
  },
  "Gia Lai - Kon Tum - Bình Định": {
    name: "Gia Lai (Gia Lai + Kon Tum + Bình Định)",
    location: "Việt Nam",
    area: "31.000 km²",
    population: "3.500.000 người",
    description: "Sự kết hợp giữa vùng cao nguyên đại ngàn Bắc Tây Nguyên và vùng duyên hải võ thuật Bình Định.",
    culture: "Văn hóa cồng chiêng Tây Nguyên rực rỡ và tinh thần thượng võ Tây Sơn.",
    economy: "Nông nghiệp cây công nghiệp (cà phê, cao su), lâm nghiệp và du lịch biển.",
    climate: "Phân hóa rõ rệt giữa vùng cao nguyên mát mẻ và đồng bằng ven biển nắng nóng.",
    food: [
      {
        name: "Phở khô Gia Lai",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Ph%E1%BB%9F_kh%C3%B4_Gia_Lai.jpg/800px-Ph%E1%BB%9F_kh%C3%B4_Gia_Lai.jpg"
      },
      {
        name: "Bánh xèo tôm nhảy",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/B%C3%A1nh_x%C3%A8o_t%C3%B4m_nh%E1%BA%A3y.jpg/800px-B%C3%A1nh_x%C3%A8o_t%C3%B4m_nh%E1%BA%A3y.jpg"
      }
    ],
    attractions: [
      {
        name: "Biển Hồ",
        lat: 14.05,
        lng: 108,
        highlights: "Đôi mắt Pleiku trong xanh.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Bien_Ho%2C_Gia_Lai.jpg/800px-Bien_Ho%2C_Gia_Lai.jpg"
      },
      {
        name: "Kỳ Co",
        lat: 13.93,
        lng: 109.3,
        highlights: "Maldives của Việt Nam.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Ky_Co_beach.jpg/800px-Ky_Co_beach.jpg"
      }
    ],
    lat: 13.9833,
    lng: 108,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Chi%E1%BB%81u_cao_nguy%C3%AAn_-_Late_afternoon_in_the_Central_High_Plateaux_-_panoramio.jpg"
  },
  "Đắk Lắk - Đắk Nông": {
    name: "Đắk Lắk (Đắk Lắk + Đắk Nông)",
    location: "Việt Nam",
    area: "19.600 km²",
    population: "2.500.000 người",
    description: "Thủ phủ cà phê của Việt Nam, vùng đất bazan màu mỡ với những thác nước hùng vĩ và đàn voi rừng.",
    culture: "Không gian văn hóa cồng chiêng Tây Nguyên, đậm đà bản sắc người Ê Đê, M'Nông.",
    economy: "Trồng trọt và xuất khẩu cà phê, hồ tiêu, cao su lớn nhất nước.",
    climate: "Khí hậu cao nguyên nhiệt đới ẩm, chia hai mùa mưa nắng.",
    food: [
      {
        name: "Cà phê Buôn Ma Thuột",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roasted_coffee_beans.jpg/800px-Roasted_coffee_beans.jpg"
      },
      {
        name: "Gà nướng bản Đôn",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/G%C3%A0_n%C6%B0%E1%BB%9Bng.jpg/800px-G%C3%A0_n%C6%B0%E1%BB%9Bng.jpg"
      }
    ],
    attractions: [
      {
        name: "Hồ Lắk",
        lat: 12.42,
        lng: 108.17,
        highlights: "Hồ nước ngọt tự nhiên lớn nhất Tây Nguyên.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Lak_Lake.jpg"
      }
    ],
    lat: 12.6667,
    lng: 108.0333,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Mui_Dai_Lanh_PhuYen.jpg"
  },
  "Phú Yên - Khánh Hòa - Ninh Thuận": {
    name: "Khánh Hòa (Phú Yên + Khánh Hòa + Ninh Thuận)",
    location: "Việt Nam",
    area: "13.600 km²",
    population: "2.700.000 người",
    description: "Thiên đường du lịch biển Nam Trung Bộ với những vịnh biển đẹp nhất thế giới như Nha Trang, Vũng Rô, Vĩnh Hy.",
    culture: "Văn hóa Chăm Pa đặc sắc với các tháp Chàm cổ kính.",
    economy: "Du lịch biển đảo, dịch vụ, nuôi trồng và đánh bắt thủy sản.",
    climate: "Nhiệt đới xavan, khô hạn nhất cả nước (đặc biệt ở Ninh Thuận).",
    food: [
      {
        name: "Mắt cá ngừ đại dương",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tuna_eye.jpg/800px-Tuna_eye.jpg"
      },
      {
        name: "Nho Ninh Thuận",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Grapes_in_Ninh_Thuan.jpg/800px-Grapes_in_Ninh_Thuan.jpg"
      }
    ],
    attractions: [
      {
        name: "Vịnh Nha Trang",
        lat: 12.23,
        lng: 109.2,
        highlights: "Một trong những vịnh biển đẹp nhất thế giới.",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Arriving_in_Nha_Trang_-_Vietnam.jpg"
      },
      {
        name: "Ghềnh Đá Đĩa",
        lat: 13.34,
        lng: 109.29,
        highlights: "Kiệt tác thiên nhiên từ đá bazan.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/G%C3%A0nh_%C4%90%C3%A1_%C4%90%C4%A9a_-_Ph%C3%BA_Y%C3%AAn.jpg/960px-G%C3%A0nh_%C4%90%C3%A1_%C4%90%C4%A9a_-_Ph%C3%BA_Y%C3%AAn.jpg"
      }
    ],
    lat: 12.25,
    lng: 109.1833,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Nha_Trang_%2C_Vietnam_-_panoramio_%2835%29.jpg"
  },
  "Lâm Đồng - Bình Thuận": {
    name: "Lâm Đồng (Lâm Đồng + Bình Thuận)",
    location: "Việt Nam",
    area: "17.600 km²",
    population: "2.600.000 người",
    description: "Sự giao hòa tuyệt vời giữa thành phố ngàn hoa Đà Lạt trên cao nguyên và những đồi cát trắng trải dài ven biển Mũi Né.",
    culture: "Đa dạng văn hóa từ các dân tộc bản địa Tây Nguyên đến văn hóa biển.",
    economy: "Du lịch nghỉ dưỡng, nông nghiệp công nghệ cao (hoa, rau quả) và năng lượng tái tạo.",
    climate: "Đà Lạt mát mẻ quanh năm, Bình Thuận khô nóng nhiều gió.",
    food: [
      {
        name: "Bánh tráng nướng",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/36/B%C3%A1nh_tr%C3%A1ng_1.jpg"
      },
      {
        name: "Hải sản Mũi Né",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Grilled_seafood_in_Vietnam.jpg/800px-Grilled_seafood_in_Vietnam.jpg"
      }
    ],
    attractions: [
      {
        name: "Đà Lạt",
        lat: 11.94,
        lng: 108.44,
        highlights: "Thành phố sương mù lãng mạn.",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Da_Lat_-_Viet_Nam.jpg"
      },
      {
        name: "Đồi cát Mũi Né",
        lat: 10.94,
        lng: 108.28,
        highlights: "Tiểu sa mạc ven biển.",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Vietnam%2C_Mui_Ne_sand_dune.jpg"
      }
    ],
    lat: 11.9333,
    lng: 108.4333,
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Da_Lat%2C_view_to_Xuan_Huong_lake_2.jpg"
  },
  "Bình Phước - Bình Dương - Đồng Nai": {
    name: "Đồng Nai (Bình Phước + Bình Dương + Đồng Nai)",
    location: "Việt Nam",
    area: "19.500 km²",
    population: "6.800.000 người",
    description: "Thủ phủ công nghiệp của miền Nam, động lực phát triển kinh tế trọng điểm với hàng loạt khu công nghiệp lớn.",
    culture: "Văn hóa hiện đại, hội tụ người lao động từ mọi miền đất nước.",
    economy: "Công nghiệp sản xuất, chế xuất, nông nghiệp cây công nghiệp (cao su, điều).",
    climate: "Nhiệt đới gió mùa cận xích đạo, nóng ẩm quanh năm.",
    food: [
      {
        name: "Gỏi bưởi Tân Triều",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Pomelo_salad.jpg/800px-Pomelo_salad.jpg"
      },
      {
        name: "Hạt điều rang muối",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cashew_apples.jpg/800px-Cashew_apples.jpg"
      }
    ],
    attractions: [
      {
        name: "Vườn quốc gia Cát Tiên",
        lat: 11.42,
        lng: 107.42,
        highlights: "Khu dự trữ sinh quyển thế giới.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/45/BenCu_forest_structure_23Dec08.jpg"
      }
    ],
    lat: 10.95,
    lng: 106.8167,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Nh%C3%A0_th%E1%BB%9D_ch%C3%ADnh_V%C4%83n_mi%E1%BA%BFu_Tr%E1%BA%A5n_Bi%C3%AAn.jpg"
  },
  "Tây Ninh": {
    name: "Tây Ninh",
    location: "Việt Nam",
    area: "4.041 km²",
    population: "1.178.329 người",
    description: "Tỉnh biên giới Tây Nam Bộ, nổi tiếng với núi Bà Đen và Tòa Thánh Cao Đài.",
    culture: "Trung tâm của đạo Cao Đài, tín ngưỡng dân gian phong phú.",
    economy: "Nông nghiệp (mía, mì), công nghiệp chế biến và thương mại cửa khẩu.",
    climate: "Nhiệt đới gió mùa, nắng nóng quanh năm.",
    food: [
      {
        name: "Bánh tráng phơi sương",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/36/B%C3%A1nh_tr%C3%A1ng_1.jpg"
      },
      {
        name: "Muối tôm Tây Ninh",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Mu%E1%BB%91i_t%C3%B4m_T%C3%A2y_Ninh.png"
      }
    ],
    attractions: [
      {
        name: "Núi Bà Đen",
        lat: 11.37,
        lng: 106.16,
        highlights: "Nóc nhà Đông Nam Bộ.",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Dau_Tieng_Lake_-_50766650163.png"
      }
    ],
    lat: 11.3,
    lng: 106.1,
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Ho_dau_tieng.jpg"
  },
  "TP. Hồ Chí Minh - Long An - Bà Rịa Vũng Tàu": {
    name: "TP. Hồ Chí Minh (TP.HCM + Long An + BR-VT)",
    location: "Việt Nam",
    area: "8.500 km²",
    population: "12.500.000 người",
    description: "Siêu đô thị kinh tế lớn nhất Việt Nam, kết nối với cửa ngõ Đồng bằng sông Cửu Long và trung tâm du lịch, dầu khí Vũng Tàu.",
    culture: "Năng động, hiện đại, đa văn hóa và cởi mở bậc nhất cả nước.",
    economy: "Đầu tàu kinh tế, tài chính, dịch vụ, công nghiệp và khai thác dầu khí.",
    climate: "Nhiệt đới gió mùa cận xích đạo, hai mùa mưa nắng.",
    food: [
      {
        name: "Cơm tấm",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/C%C6%A1m_T%E1%BA%A5m%2C_Da_Nang%2C_Vietnam.jpg/800px-C%C6%A1m_T%E1%BA%A5m%2C_Da_Nang%2C_Vietnam.jpg"
      },
      {
        name: "Bánh khọt Vũng Tàu",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/B%C3%A1nh_kh%E1%BB%8Dt.jpg/800px-B%C3%A1nh_kh%E1%BB%8Dt.jpg"
      }
    ],
    attractions: [
      {
        name: "Chợ Bến Thành",
        lat: 10.77,
        lng: 106.69,
        highlights: "Biểu tượng lịch sử của Sài Gòn.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Ben_Thanh_market_2.jpg"
      },
      {
        name: "Biển Vũng Tàu",
        lat: 10.34,
        lng: 107.08,
        highlights: "Thành phố biển sôi động.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/B%E1%BB%9D_bi%E1%BB%83n_V%C5%A9ng_T%C3%A0u.JPG/960px-B%E1%BB%9D_bi%E1%BB%83n_V%C5%A9ng_T%C3%A0u.JPG"
      }
    ],
    lat: 10.7769,
    lng: 106.7009,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Ho_Chi_Minh_City_Skyline_%28Night%29.jpg"
  },
  "Đồng Tháp - Tiền Giang": {
    name: "Đồng Tháp (Đồng Tháp + Tiền Giang)",
    location: "Việt Nam",
    area: "5.900 km²",
    population: "3.300.000 người",
    description: "Vùng miệt vườn sông nước trù phú, nổi tiếng với những cánh đồng sen Đồng Tháp Mười và vựa trái cây Tiền Giang.",
    culture: "Văn hóa sông nước miệt vườn, đờn ca tài tử Nam Bộ.",
    economy: "Nông nghiệp lúa nước, trồng cây ăn trái và nuôi trồng thủy sản.",
    climate: "Nhiệt đới gió mùa cận xích đạo.",
    food: [
      {
        name: "Hủ tiếu Mỹ Tho",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/H%E1%BB%A7_t%C3%ADu_Nam_Vang_%28h%E1%BB%A7_t%C3%ADu_t%C3%B4m%29%2C_qu%C3%A1n_C%E1%BA%A7u_Tr%E1%BA%AFng%2C_K%C3%AAnh_n%C6%B0%E1%BB%9Bc_%C4%91en_%281%29.jpg/800px-H%E1%BB%A7_t%C3%ADu_Nam_Vang_%28h%E1%BB%A7_t%C3%ADu_t%C3%B4m%29%2C_qu%C3%A1n_C%E1%BA%A7u_Tr%E1%BA%AFng%2C_K%C3%AAnh_n%C6%B0%E1%BB%9Bc_%C4%91en_%281%29.jpg"
      },
      {
        name: "Nem Lai Vung",
        image: "https://upload.wikimedia.org/wikipedia/vi/thumb/0/0d/Nem_chua_Lai_Vung.jpg/800px-Nem_chua_Lai_Vung.jpg"
      }
    ],
    attractions: [
      {
        name: "Tràm Chim",
        lat: 10.73,
        lng: 105.5,
        highlights: "Khu bảo tồn sếu đầu đỏ quý hiếm.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/%C4%90%E1%BB%93ng_c%E1%BB%8F_v%C3%A0_chim_n%C6%B0%E1%BB%9Bc.jpg/960px-%C4%90%E1%BB%93ng_c%E1%BB%8F_v%C3%A0_chim_n%C6%B0%E1%BB%9Bc.jpg"
      },
      {
        name: "Chợ nổi Cái Bè",
        lat: 10.33,
        lng: 106.03,
        highlights: "Văn hóa giao thương trên sông.",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Vietnam_08_-_122_-_Cai_Be_floating_market_%283185904536%29.jpg"
      }
    ],
    lat: 10.4667,
    lng: 105.6333,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/57/C%E1%BA%A7u_Cao_L%C3%A3nh.jpg"
  },
  "Vĩnh Long - Bến Tre - Trà Vinh": {
    name: "Vĩnh Long (Vĩnh Long + Bến Tre + Trà Vinh)",
    location: "Việt Nam",
    area: "6.200 km²",
    population: "3.300.000 người",
    description: "Xứ sở của những rặng dừa xanh ngát, cù lao trù phú và sự giao thoa văn hóa Việt - Khmer.",
    culture: "Đậm chất miền Tây hiền hòa, nhiều chùa chiền kiến trúc Khmer độc đáo ở Trà Vinh.",
    economy: "Kinh tế vườn, dừa, cây ăn trái và thủy hải sản.",
    climate: "Nhiệt đới gió mùa, mát mẻ nhờ hệ thống sông ngòi chằng chịt.",
    food: [
      {
        name: "Kẹo dừa Bến Tre",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Cocnout_candy_8.jpg/800px-Cocnout_candy_8.jpg"
      },
      {
        name: "Bún nước lèo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/B%C3%BAn_n%C6%B0%E1%BB%9Bc_l%C3%A8o.jpg/800px-B%C3%BAn_n%C6%B0%E1%BB%9Bc_l%C3%A8o.jpg"
      }
    ],
    attractions: [
      {
        name: "Cồn Thới Sơn",
        lat: 10.33,
        lng: 106.33,
        highlights: "Du lịch sinh thái miệt vườn.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/T%C3%A0u_du_l%E1%BB%8Bch_gh%C3%A9_c%E1%BB%93n_L%C3%A2n.jpg/960px-T%C3%A0u_du_l%E1%BB%8Bch_gh%C3%A9_c%E1%BB%93n_L%C3%A2n.jpg"
      }
    ],
    lat: 10.25,
    lng: 105.9667,
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Trung_t%C3%A2m_H%C3%A0nh_ch%C3%ADnh_t%E1%BB%89nh_V%C4%A9nh_Long.jpg"
  },
  "TP. Cần Thơ - Hậu Giang - Sóc Trăng": {
    name: "Cần Thơ (TP. Cần Thơ + Hậu Giang + Sóc Trăng)",
    location: "Việt Nam",
    area: "6.300 km²",
    population: "3.200.000 người",
    description: "Thủ phủ của miền Tây Nam Bộ, trung tâm kinh tế, giáo dục của vùng ĐBSCL, nổi tiếng với chợ nổi Cái Răng và văn hóa Khmer Sóc Trăng.",
    culture: "Thủ phủ miền Tây, lễ hội Oóc Om Bóc, đua ghe ngo sôi động.",
    economy: "Trung tâm thương mại, dịch vụ, lúa gạo và thủy sản.",
    climate: "Nhiệt đới gió mùa, ôn hòa.",
    food: [
      {
        name: "Bánh xèo miền Tây",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/B%C3%A1nh_x%C3%A8o_with_n%C6%B0%E1%BB%9Bc_m%E1%BA%AFm.jpg/800px-B%C3%A1nh_x%C3%A8o_with_n%C6%B0%E1%BB%9Bc_m%E1%BA%AFm.jpg"
      },
      {
        name: "Bánh pía Sóc Trăng",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Bakpia_pathok.jpg"
      }
    ],
    attractions: [
      {
        name: "Chợ nổi Cái Răng",
        lat: 10,
        lng: 105.75,
        highlights: "Chợ nổi sầm uất nhất miền Tây.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/62/M%E1%BB%99t_c%E1%BA%A3nh_%E1%BB%9F_ch%E1%BB%A3_n%E1%BB%95i_C%C3%A1i_R%C4%83ng.jpg"
      },
      {
        name: "Chùa Dơi",
        lat: 9.58,
        lng: 105.97,
        highlights: "Ngôi chùa Khmer cổ kính với đàn dơi khổng lồ.",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/54/Ch%C3%B9a_D%C6%A1i_%2845715215502%29.jpg"
      }
    ],
    lat: 10.0333,
    lng: 105.7833,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Can_Tho_Bridge.jpg"
  },
  "An Giang - Kiên Giang": {
    name: "Kiên Giang (An Giang + Kiên Giang)",
    location: "Việt Nam",
    area: "9.800 km²",
    population: "3.600.000 người",
    description: "Vùng đất đa dạng địa hình từ núi non Thất Sơn huyền bí đến đảo ngọc Phú Quốc tuyệt đẹp trên vịnh Thái Lan.",
    culture: "Giao thoa văn hóa Việt, Hoa, Khmer, Chăm. Tín ngưỡng Bà Chúa Xứ linh thiêng.",
    economy: "Du lịch biển đảo, lúa gạo, đánh bắt thủy sản và kinh tế biên mậu.",
    climate: "Nhiệt đới gió mùa, Phú Quốc có khí hậu biển đảo ôn hòa.",
    food: [
      {
        name: "Bún cá Châu Đốc",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Saigon_Pho_with_pork.jpg/800px-Saigon_Pho_with_pork.jpg"
      },
      {
        name: "Gỏi cá trích Phú Quốc",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/G%E1%BB%8Fi_c%C3%A1_tr%C3%ADch.jpg/800px-G%E1%BB%8Fi_c%C3%A1_tr%C3%ADch.jpg"
      }
    ],
    attractions: [
      {
        name: "Đảo Phú Quốc",
        lat: 10.22,
        lng: 103.96,
        highlights: "Đảo ngọc du lịch nghỉ dưỡng hàng đầu.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Phu_Quoc%2C_Viet_Nam.jpg/960px-Phu_Quoc%2C_Viet_Nam.jpg"
      },
      {
        name: "Miếu Bà Chúa Xứ",
        lat: 10.68,
        lng: 105.08,
        highlights: "Trung tâm hành hương lớn nhất miền Nam.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Mieuba2.jpg/960px-Mieuba2.jpg"
      }
    ],
    lat: 10.3833,
    lng: 105.4167,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Bai-sao-phu-quoc-tuonglamphotos.jpg"
  },
  "Bạc Liêu - Cà Mau": {
    name: "Cà Mau (Bạc Liêu + Cà Mau)",
    location: "Việt Nam",
    area: "7.900 km²",
    population: "2.100.000 người",
    description: "Vùng đất cực Nam của Tổ quốc, nổi tiếng với rừng ngập mặn U Minh, mũi Cà Mau và giai thoại Công tử Bạc Liêu.",
    culture: "Văn hóa đờn ca tài tử, quê hương của bản Dạ cổ hoài lang.",
    economy: "Nuôi trồng và xuất khẩu tôm lớn nhất nước, năng lượng gió.",
    climate: "Nhiệt đới gió mùa cận xích đạo.",
    food: [
      {
        name: "Cua Cà Mau",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Mud_crab.jpg/800px-Mud_crab.jpg"
      },
      {
        name: "Lẩu mắm",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/L%E1%BA%A9u_m%E1%BA%AFm.jpg/800px-L%E1%BA%A9u_m%E1%BA%AFm.jpg"
      }
    ],
    attractions: [
      {
        name: "Mũi Cà Mau",
        lat: 8.6,
        lng: 104.73,
        highlights: "Điểm cực Nam trên đất liền của Việt Nam.",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Tuongdaimuicamau.jpg"
      },
      {
        name: "Cánh đồng quạt gió",
        lat: 9.23,
        lng: 105.73,
        highlights: "Cánh đồng điện gió trên biển lớn nhất Việt Nam.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/B%E1%BA%A1c_Li%C3%AAu_windpower_farm.jpg/960px-B%E1%BA%A1c_Li%C3%AAu_windpower_farm.jpg"
      }
    ],
    lat: 9.1833,
    lng: 105.15,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Muicamau.jpg"
  },
};

export function getProvinceData(name: string): Province | null {
  return provincesData[name] || null;
}

export function getAllProvinces(): Province[] {
  return Object.values(provincesData);
}
