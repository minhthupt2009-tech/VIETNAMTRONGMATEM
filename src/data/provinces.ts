export interface Attraction {
  name: string;
  lat: number;
  lng: number;
  highlights: string;
  description?: string;
  image?: string;
  videoUrl?: string;
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
  culture: string[];
  economy: string[];
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
    culture: [
      "Đa dạng với hơn 20 dân tộc anh em sinh sống, nổi bật là văn hóa người Thái, Mông, Dao.",
      "Nổi tiếng với các lễ hội truyền thống như Lễ hội Tú Tỉ, Lễ hội Nàng Han của người Thái trắng.",
      "Nghề thủ công truyền thống như dệt thổ cẩm, đan lát vẫn được duy trì và phát triển."
    ],
    economy: [
      "Nông lâm nghiệp là chủ đạo với các loại cây đặc sản như chè Tam Đường, thảo quả.",
      "Phát triển mạnh mẽ các công trình thủy điện lớn trên sông Đà và sông Nậm Na.",
      "Du lịch cộng đồng và du lịch mạo hiểm đang trở thành ngành kinh tế mũi nhọn."
    ],
    climate: "Khí hậu nhiệt đới gió mùa núi cao, mùa đông lạnh, mùa hè mát mẻ.",
    food: [
      {
        name: "Lợn cắp nách",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sapa-pig.jpg/960px-Sapa-pig.jpg"
      },
      {
        name: "Xôi tím",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/X%C3%B4i_%C4%91%E1%BB%97_xanh.jpg/960px-X%C3%B4i_%C4%91%E1%BB%97_xanh.jpg"
      }
    ],
    attractions: [
      {
        name: "Đèo Ô Quy Hồ",
        lat: 22.35,
        lng: 103.78,
        highlights: "Một trong tứ đại đỉnh đèo của Tây Bắc.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/O_Quy_Ho_pass.jpg/960px-O_Quy_Ho_pass.jpg",
        videoUrl: "https://www.youtube.com/watch?v=sB11xO9a7w0"
      }
    ],
    lat: 22.3975,
    lng: 103.45,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/O_Quy_Ho_pass.jpg/960px-O_Quy_Ho_pass.jpg"
  },
  "Điện Biên": {
    name: "Điện Biên",
    location: "Việt Nam",
    area: "9.541 km²",
    population: "598.856 người",
    description: "Điện Biên là tỉnh miền núi biên giới thuộc vùng Tây Bắc, nổi tiếng với chiến thắng Điện Biên Phủ lừng lẫy năm châu.",
    culture: [
      "Đậm đà bản sắc văn hóa dân tộc Thái, Mông với các lễ hội truyền thống như hoa Ban, lễ hội Thành Bản Phủ.",
      "Lịch sử hào hùng gắn liền với chiến thắng Điện Biên Phủ 'lừng lẫy năm châu, chấn động địa cầu'.",
      "Ẩm thực Tây Bắc độc đáo với các món ăn từ cá suối, thịt gác bếp và gạo nếp nương."
    ],
    economy: [
      "Phát triển nông nghiệp hàng hóa, đặc biệt là lúa gạo Mường Thanh nổi tiếng.",
      "Kinh tế biên mậu phát triển thông qua các cửa khẩu với Lào và Trung Quốc.",
      "Du lịch lịch sử - văn hóa là ngành kinh tế trọng tâm của tỉnh."
    ],
    climate: "Nhiệt đới gió mùa núi cao, mùa đông lạnh và ít mưa.",
    food: [
      {
        name: "Gà nướng mắc khén",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/G%C3%A0_n%C6%B0%E1%BB%9Bng_m%E1%BA%AFc_kh%C3%A9n.jpg/800px-G%C3%A0_n%C6%B0%E1%BB%9Bng_m%E1%BA%AFc_kh%C3%A9n.jpg"
      },
      {
        name: "Thịt trâu gác bếp",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/L%E1%BB%85_h%E1%BB%99i_%E1%BA%A9m_th%E1%BB%B1c_C%E1%BB%ADa_Vi%E1%BB%87t_th4n2023_%C4%91%E1%BA%B7c_s%E1%BA%A3n_T%C3%A2y_B%E1%BA%AFc%2C_th%E1%BB%8Bt_tr%C3%A2u_g%C3%A1c_b%E1%BA%BFp_m%E1%BA%AFc_kh%C3%A9n_%284%29.jpg/960px-L%E1%BB%85_h%E1%BB%99i_%E1%BA%A9m_th%E1%BB%B1c_C%E1%BB%ADa_Vi%E1%BB%87t_th4n2023_%C4%91%E1%BA%B7c_s%E1%BA%A3n_T%C3%A2y_B%E1%BA%AFc%2C_th%E1%BB%8Bt_tr%C3%A2u_g%C3%A1c_b%E1%BA%BFp_m%E1%BA%AFc_kh%C3%A9n_%284%29.jpg"
      }
    ],
    attractions: [
      {
        name: "Di tích Điện Biên Phủ",
        lat: 21.39,
        lng: 103.01,
        highlights: "Quần thể di tích lịch sử hào hùng.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/M%C6%B0%E1%BB%9Dng_Thanh_Valley.jpg/960px-M%C6%B0%E1%BB%9Dng_Thanh_Valley.jpg",
        videoUrl: "https://www.youtube.com/watch?v=zR3YmMEzE5M"
      }
    ],
    lat: 21.3853,
    lng: 103.0181,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/M%C6%B0%E1%BB%9Dng_Thanh_Valley.jpg/960px-M%C6%B0%E1%BB%9Dng_Thanh_Valley.jpg"
  },
  "Sơn La": {
    name: "Sơn La",
    location: "Việt Nam",
    area: "14.123 km²",
    population: "1.248.415 người",
    description: "Sơn La là tỉnh miền núi Tây Bắc, nổi tiếng với cao nguyên Mộc Châu xanh mướt và công trình thủy điện Sơn La lớn nhất Đông Nam Á.",
    culture: [
      "Văn hóa đặc sắc của đồng bào Thái, H'Mông với điệu múa xòe và khèn bè đã được UNESCO công nhận.",
      "Lễ hội đua thuyền trên sông Đà và lễ hội cầu mưa là những nét đẹp văn hóa lâu đời.",
      "Kiến trúc nhà sàn truyền thống của người Thái vẫn được giữ gìn nguyên vẹn tại các bản làng."
    ],
    economy: [
      "Nông nghiệp công nghệ cao phát triển mạnh, đặc biệt là vùng cây ăn quả Mộc Châu và Yên Châu.",
      "Công nghiệp thủy điện đóng góp lớn cho ngân sách với nhà máy thủy điện Sơn La.",
      "Chăn nuôi bò sữa và chế biến sữa Mộc Châu là thương hiệu quốc gia."
    ],
    climate: "Khí hậu cận ôn đới ở vùng cao nguyên, mát mẻ quanh năm.",
    food: [
      {
        name: "Bê chao Mộc Châu",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/S%E1%BB%91ng_l%C6%B0ng_kh%E1%BB%A7ng_long_T%C3%A0_X%C3%B9a.jpg/960px-S%E1%BB%91ng_l%C6%B0ng_kh%E1%BB%A7ng_long_T%C3%A0_X%C3%B9a.jpg"
      },
      {
        name: "Cá nướng Pa Pỉnh Tộp",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Khu_%E1%BA%A9m_th%E1%BB%B1c_B%E1%BA%BFn_Ngh%C3%A9_ng13th8n2023_%28c%C3%A1_n%C6%B0%E1%BB%9Bng_T%C3%A2y_B%E1%BA%AFc_Pa_t%E1%BB%89nh_t%E1%BB%99p%29_%287%29.jpg/960px-Khu_%E1%BA%A9m_th%E1%BB%B1c_B%E1%BA%BFn_Ngh%C3%A9_ng13th8n2023_%28c%C3%A1_n%C6%B0%E1%BB%9Bng_T%C3%A2y_B%E1%BA%AFc_Pa_t%E1%BB%89nh_t%E1%BB%99p%29_%287%29.jpg"
      }
    ],
    attractions: [
      {
        name: "Đồi chè Mộc Châu",
        lat: 20.85,
        lng: 104.63,
        highlights: "Những đồi chè xanh mướt trải dài vô tận.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/S%E1%BB%91ng_l%C6%B0ng_kh%E1%BB%A7ng_long_T%C3%A0_X%C3%B9a.jpg/960px-S%E1%BB%91ng_l%C6%B0ng_kh%E1%BB%A7ng_long_T%C3%A0_X%C3%B9a.jpg"
      }
    ],
    lat: 21.328,
    lng: 103.897,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vietnam_location_map.svg/800px-Vietnam_location_map.svg.png"
  },
  "Lào Cai - Yên Bái": {
    name: "Lào Cai (Lào Cai + Yên Bái)",
    location: "Việt Nam",
    area: "13.258 km²",
    population: "1.554.000 người",
    description: "Cụm tỉnh Lào Cai - Yên Bái là trung tâm du lịch và kinh tế cửa khẩu của vùng Tây Bắc, nổi bật với Sa Pa sương mù và ruộng bậc thang Mù Cang Chải.",
    culture: [
      "Sự hòa quyện văn hóa của người Mông, Dao, Tày, Thái với các phiên chợ vùng cao độc đáo.",
      "Lễ hội Gầu Tào của người Mông và lễ Cấp sắc của người Dao là những di sản văn hóa phi vật thể.",
      "Văn hóa ruộng bậc thang đã trở thành biểu tượng du lịch và niềm tự hào của người dân địa phương."
    ],
    economy: [
      "Phát triển mạnh du lịch nghỉ dưỡng cao cấp tại Sa Pa và du lịch sinh thái Mù Cang Chải.",
      "Kinh tế cửa khẩu sôi động với Trung Quốc qua cửa khẩu quốc tế Lào Cai.",
      "Khai thác và chế biến khoáng sản (Apatit) đóng vai trò quan trọng trong công nghiệp."
    ],
    climate: "Khí hậu ôn đới và cận nhiệt đới, có tuyết rơi vào mùa đông ở vùng cao.",
    food: [
      {
        name: "Thắng cố",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Th%E1%BA%AFng_c%E1%BB%91.jpg/960px-Th%E1%BA%AFng_c%E1%BB%91.jpg"
      },
      {
        name: "Xôi ngũ sắc",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/S%E1%BB%91ng_l%C6%B0ng_kh%E1%BB%A7ng_long_T%C3%A0_X%C3%B9a.jpg/960px-S%E1%BB%91ng_l%C6%B0ng_kh%E1%BB%A7ng_long_T%C3%A0_X%C3%B9a.jpg"
      }
    ],
    attractions: [
      {
        name: "Đỉnh Fansipan",
        lat: 22.3,
        lng: 103.77,
        highlights: "Nóc nhà Đông Dương hùng vĩ.",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/de/C%C3%A1p-treo-fansipan-17.jpg",
        videoUrl: "https://www.youtube.com/watch?v=F_b_2n-P33w"
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Mu_Cang_Chai_01.JPG/960px-Mu_Cang_Chai_01.JPG"
  },
  "Hà Giang - Tuyên Quang": {
    name: "Hà Giang (Hà Giang + Tuyên Quang)",
    location: "Việt Nam",
    area: "13.800 km²",
    population: "1.650.000 người",
    description: "Vùng đất địa đầu Tổ quốc với Cao nguyên đá Đồng Văn hùng vĩ và khu di tích lịch sử Tân Trào.",
    culture: [
      "Đậm đà bản sắc dân tộc Mông, Tày, Dao với các lễ hội truyền thống như Lễ hội hoa Tam giác mạch, Lễ hội nhảy lửa.",
      "Không gian văn hóa Cao nguyên đá Đồng Văn - Công viên địa chất toàn cầu UNESCO.",
      "Di tích lịch sử cách mạng Tân Trào - Thủ đô kháng chiến của dân tộc."
    ],
    economy: [
      "Phát triển mạnh du lịch sinh thái, du lịch mạo hiểm và du lịch lịch sử - văn hóa.",
      "Nông nghiệp đặc sản với các sản phẩm như cam sành Hà Giang, chè Shan Tuyết cổ thụ.",
      "Kinh tế biên mậu phát triển qua các cửa khẩu quốc tế Thanh Thủy."
    ],
    climate: "Nhiệt đới gió mùa, mùa đông rất lạnh ở vùng núi cao.",
    food: [
      {
        name: "Xôi ngũ sắc",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/S%E1%BB%91ng_l%C6%B0ng_kh%E1%BB%A7ng_long_T%C3%A0_X%C3%B9a.jpg/960px-S%E1%BB%91ng_l%C6%B0ng_kh%E1%BB%A7ng_long_T%C3%A0_X%C3%B9a.jpg"
      },
      {
        name: "Bánh cuốn trứng",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Banh_cuon.jpg/960px-Banh_cuon.jpg"
      }
    ],
    attractions: [
      {
        name: "Cột cờ Lũng Cú",
        lat: 23.36,
        lng: 105.31,
        highlights: "Điểm cực Bắc thiêng liêng của Tổ quốc.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/C%E1%BB%99t_c%E1%BB%9D_L%C5%A9ng_C%C3%BA.JPG/960px-C%E1%BB%99t_c%E1%BB%9D_L%C5%A9ng_C%C3%BA.JPG"
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/%C4%90%C3%A8o_M%C3%A3_P%C3%AD_L%C3%A8ng_2022.jpg/960px-%C4%90%C3%A8o_M%C3%A3_P%C3%AD_L%C3%A8ng_2022.jpg"
  },
  "Cao Bằng": {
    name: "Cao Bằng",
    location: "Việt Nam",
    area: "6.700 km²",
    population: "530.341 người",
    description: "Cao Bằng là vùng đất biên cương với non nước hữu tình, nổi tiếng với thác Bản Giốc và hang Pác Bó.",
    culture: [
      "Văn hóa người Tày, Nùng với làn điệu hát Then, đàn Tính đã được UNESCO vinh danh.",
      "Truyền thống cách mạng gắn liền với hang Pác Bó, suối Lê-nin và cuộc đời hoạt động của Bác Hồ.",
      "Các làng nghề rèn đúc truyền thống (Phúc Sen) vẫn được duy trì qua nhiều thế hệ."
    ],
    economy: [
      "Phát triển nông nghiệp đặc sản với hạt dẻ Trùng Khánh, quýt Trà Lĩnh.",
      "Khai thác khoáng sản (măng-gan, sắt) là thế mạnh công nghiệp của tỉnh.",
      "Du lịch biên giới và du lịch địa chất toàn cầu (Công viên địa chất Non nước Cao Bằng)."
    ],
    climate: "Khí hậu ôn hòa, mát mẻ quanh năm.",
    food: [
      {
        name: "Vịt quay 7 vị",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Roasted_Beijing_Duck_sliced.jpg/960px-Roasted_Beijing_Duck_sliced.jpg"
      },
      {
        name: "Hạt dẻ Trùng Khánh",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Th%C3%A1c_B%E1%BA%A3n_Gi%E1%BB%91c.jpg/960px-Th%C3%A1c_B%E1%BA%A3n_Gi%E1%BB%91c.jpg"
      }
    ],
    attractions: [
      {
        name: "Thác Bản Giốc",
        lat: 22.85,
        lng: 106.72,
        highlights: "Thác nước tự nhiên lớn nhất Đông Nam Á.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Bangioc9tam.jpg/960px-Bangioc9tam.jpg"
      }
    ],
    lat: 22.6667,
    lng: 106.25,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Bangioc9tam.jpg/960px-Bangioc9tam.jpg"
  },
  "Bắc Kạn - Thái Nguyên": {
    name: "Thái Nguyên (Bắc Kạn + Thái Nguyên)",
    location: "Việt Nam",
    area: "8.390 km²",
    population: "1.600.000 người",
    description: "Trung tâm vùng trung du miền núi phía Bắc, nổi tiếng với đệ nhất danh trà Thái Nguyên và hồ Ba Bể thơ mộng.",
    culture: [
      "Giao thoa văn hóa giữa miền núi và đồng bằng, quê hương của nhiều di tích lịch sử ATK.",
      "Văn hóa trà Thái Nguyên đã trở thành một nét di sản tinh thần đặc sắc.",
      "Lễ hội Lồng Tồng của người Tày ở Bắc Kạn là lễ hội xuống đồng lớn nhất vùng."
    ],
    economy: [
      "Công nghiệp luyện kim (Gang thép Thái Nguyên) và công nghiệp điện tử (Samsung) phát triển mạnh.",
      "Nông nghiệp thế mạnh với cây trà (chè) Tân Cương nổi tiếng khắp cả nước.",
      "Du lịch sinh thái hồ Ba Bể và du lịch về nguồn ATK Định Hóa."
    ],
    climate: "Nhiệt đới gió mùa, có mùa đông lạnh.",
    food: [
      {
        name: "Trà Tân Cương",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Tan_Cuong_Tea_culture.jpg/800px-Tan_Cuong_Tea_culture.jpg"
      },
      {
        name: "Miến dong",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Dongfen.JPG/960px-Dongfen.JPG"
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Tan_Cuong_Tea_culture.jpg/960px-Tan_Cuong_Tea_culture.jpg"
  },
  "Lạng Sơn": {
    name: "Lạng Sơn",
    location: "Việt Nam",
    area: "8.310 km²",
    population: "781.655 người",
    description: "Tỉnh biên giới phía Bắc, cửa ngõ quan trọng giao thương với Trung Quốc, nổi tiếng với chợ Kỳ Lừa, nàng Tô Thị.",
    culture: [
      "Văn hóa xứ Lạng đậm đà bản sắc dân tộc Tày, Nùng với các làn điệu Sli, Lượn.",
      "Lễ hội chùa Tam Thanh và lễ hội đền Kỳ Cùng - Tả Phủ là những sự kiện văn hóa lớn.",
      "Truyền thuyết về nàng Tô Thị hóa đá chờ chồng là biểu tượng của lòng thủy chung."
    ],
    economy: [
      "Kinh tế cửa khẩu là mũi nhọn với các cửa khẩu quốc tế Hữu Nghị, Tân Thanh.",
      "Thương mại dịch vụ phát triển mạnh mẽ nhờ vị trí cửa ngõ giao thương với Trung Quốc.",
      "Nông nghiệp đặc sản với na Chi Lăng, hồng không hạt Bảo Lâm."
    ],
    climate: "Nhiệt đới gió mùa, mùa đông lạnh giá, có thể có tuyết ở đỉnh Mẫu Sơn.",
    food: [
      {
        name: "Phở chua",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Ph%E1%BB%9F_b%C3%B2%2C_C%E1%BA%A7u_Gi%E1%BA%A5y%2C_H%C3%A0_N%E1%BB%99i.jpg/960px-Ph%E1%BB%9F_b%C3%B2%2C_C%E1%BA%A7u_Gi%E1%BA%A5y%2C_H%C3%A0_N%E1%BB%99i.jpg"
      },
      {
        name: "Vịt quay lá mắc mật",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/M%E1%BA%ABu_S%C6%A1n.jpg/960px-M%E1%BA%ABu_S%C6%A1n.jpg"
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mau_Son.JPG/960px-Mau_Son.JPG"
  },
  "Quảng Ninh": {
    name: "Quảng Ninh",
    location: "Việt Nam",
    area: "6.178 km²",
    population: "1.320.324 người",
    description: "Quảng Ninh được ví như một Việt Nam thu nhỏ, có biển, đảo, đồng bằng, trung du, đồi núi, biên giới. Nổi tiếng toàn cầu với Vịnh Hạ Long.",
    culture: [
      "Văn hóa biển đảo kết hợp với văn hóa công nhân vùng mỏ kiên cường, bất khuất.",
      "Trung tâm Phật giáo Việt Nam với thiền phái Trúc Lâm Yên Tử do Phật hoàng Trần Nhân Tông sáng lập.",
      "Các lễ hội truyền thống như lễ hội đền Cửa Ông, lễ hội Yên Tử thu hút hàng triệu du khách."
    ],
    economy: [
      "Đầu tàu kinh tế vùng Đông Bắc với công nghiệp khai thác than và nhiệt điện.",
      "Du lịch biển đảo phát triển đẳng cấp quốc tế với Vịnh Hạ Long, Vân Đồn, Móng Cái.",
      "Kinh tế biển và dịch vụ cảng biển đang được đầu tư mạnh mẽ."
    ],
    climate: "Nhiệt đới gió mùa ven biển.",
    food: [
      {
        name: "Chả mực Hạ Long",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Ch%E1%BA%A3_m%E1%BB%B1c.jpg/960px-Ch%E1%BA%A3_m%E1%BB%B1c.jpg"
      },
      {
        name: "Sá sùng",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Sipuncula.jpg/960px-Sipuncula.jpg"
      }
    ],
    attractions: [
      {
        name: "Vịnh Hạ Long",
        lat: 20.91,
        lng: 107.18,
        highlights: "Di sản thiên nhiên thế giới UNESCO.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/V%E1%BB%8Bnh_H%E1%BA%A1_Long_-_NKS.jpg/960px-V%E1%BB%8Bnh_H%E1%BA%A1_Long_-_NKS.jpg",
        videoUrl: "https://www.youtube.com/watch?v=Q1b_hG7X8-g"
      }
    ],
    lat: 21,
    lng: 107.3333,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/V%E1%BB%8Bnh_H%E1%BA%A1_Long_-_NKS.jpg/960px-V%E1%BB%8Bnh_H%E1%BA%A1_Long_-_NKS.jpg"
  },
  "Phú Thọ - Vĩnh Phúc - Hòa Bình": {
    name: "Phú Thọ (Phú Thọ + Vĩnh Phúc + Hòa Bình)",
    location: "Việt Nam",
    area: "10.300 km²",
    population: "3.500.000 người",
    description: "Vùng đất Tổ cội nguồn của dân tộc Việt Nam, kết hợp với vùng công nghiệp Vĩnh Phúc và cửa ngõ Tây Bắc Hòa Bình.",
    culture: [
      "Tín ngưỡng thờ cúng Hùng Vương - Di sản văn hóa phi vật thể đại diện của nhân loại.",
      "Văn hóa Mường đặc sắc ở Hòa Bình với sử thi 'Đẻ đất đẻ nước' và nghệ thuật chiêng Mường.",
      "Hát Xoan Phú Thọ là loại hình nghệ thuật dân gian độc đáo gắn liền với thời đại Hùng Vương."
    ],
    economy: [
      "Công nghiệp sản xuất ô tô, điện tử (Vĩnh Phúc) là động lực tăng trưởng chính.",
      "Nông nghiệp hàng hóa với các vùng trồng cây ăn quả, chăn nuôi gia súc lớn.",
      "Du lịch tâm linh (Đền Hùng) và du lịch nghỉ dưỡng (Tam Đảo, Kim Bôi) phát triển mạnh."
    ],
    climate: "Nhiệt đới gió mùa, phân hóa đa dạng từ đồng bằng đến miền núi.",
    food: [
      {
        name: "Thịt chua Thanh Sơn",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Fermented_pork_wrapped_in_leaves.jpg/800px-Fermented_pork_wrapped_in_leaves.jpg"
      },
      {
        name: "Cơm lam Hòa Bình",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Tr%C3%AAn_%C4%91%E1%BA%ADp_th%E1%BB%A7y_%C4%91i%E1%BB%87n_H%C3%B2a_B%C3%ACnh_nh%C3%ACn_to%C3%A0n_c%E1%BA%A3nh.jpg/960px-Tr%C3%AAn_%C4%91%E1%BA%ADp_th%E1%BB%A7y_%C4%91i%E1%BB%87n_H%C3%B2a_B%C3%ACnh_nh%C3%ACn_to%C3%A0n_c%E1%BA%A3nh.jpg"
      }
    ],
    attractions: [
      {
        name: "Đền Hùng",
        lat: 21.36,
        lng: 105.32,
        highlights: "Khu di tích lịch sử quốc gia đặc biệt.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Mausoleum_of_Hung_King.JPG/960px-Mausoleum_of_Hung_King.JPG"
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
    image: "https://upload.wikimedia.org/wikipedia/commons/a/af/C%C3%A1nh_%C4%91%E1%BB%93ng_d%C6%B0%E1%BB%9Bi_ch%C3%A2n_n%C3%BAi_Tam_%C4%90%E1%BA%A3o.jpg"
  },
  "Hà Nội": {
    name: "Hà Nội",
    location: "Việt Nam",
    area: "3.359 km²",
    population: "8.418.883 người",
    description: "Thủ đô ngàn năm văn hiến của Việt Nam, trung tâm chính trị, văn hóa, giáo dục và kinh tế lớn của cả nước.",
    culture: [
      "Văn hóa Tràng An thanh lịch, hội tụ tinh hoa văn hóa của cả nước qua hàng ngàn năm.",
      "Hệ thống di sản văn hóa phi vật thể phong phú như ca trù, múa rối nước, hát xẩm.",
      "Lối sống người Hà Nội gắn liền với các làng nghề truyền thống và văn hóa ẩm thực tinh tế."
    ],
    economy: [
      "Trung tâm kinh tế, tài chính, thương mại và dịch vụ lớn nhất miền Bắc.",
      "Phát triển mạnh mẽ công nghiệp công nghệ cao và kinh tế tri thức.",
      "Thu hút đầu tư nước ngoài (FDI) luôn nằm trong nhóm dẫn đầu cả nước."
    ],
    climate: "Nhiệt đới gió mùa, có 4 mùa rõ rệt.",
    food: [
      {
        name: "Phở Hà Nội",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Ph%E1%BB%9F_b%C3%B2%2C_C%E1%BA%A7u_Gi%E1%BA%A5y%2C_H%C3%A0_N%E1%BB%99i.jpg/960px-Ph%E1%BB%9F_b%C3%B2%2C_C%E1%BA%A7u_Gi%E1%BA%A5y%2C_H%C3%A0_N%E1%BB%99i.jpg"
      },
      {
        name: "Bún chả",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/B%C3%BAn_ch%E1%BA%A3_Th%E1%BB%A5y_Khu%C3%AA.jpg/960px-B%C3%BAn_ch%E1%BA%A3_Th%E1%BB%A5y_Khu%C3%AA.jpg"
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
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Hoan_Kiem.jpg"
  },
  "Bắc Ninh - Bắc Giang": {
    name: "Bắc Ninh (Bắc Ninh + Bắc Giang)",
    location: "Việt Nam",
    area: "4.720 km²",
    population: "3.300.000 người",
    description: "Vùng Kinh Bắc xưa, cái nôi của dân ca Quan họ, nay là trung tâm công nghiệp lớn của miền Bắc.",
    culture: [
      "Đậm đà truyền thống văn hóa Kinh Bắc, quê hương của dân ca Quan họ - Di sản thế giới.",
      "Hệ thống đình, chùa cổ kính và các làng nghề thủ công mỹ nghệ nổi tiếng (Đồng Kỵ, Phù Lãng).",
      "Truyền thống hiếu học với nhiều trạng nguyên, tiến sĩ trong lịch sử khoa bảng."
    ],
    economy: [
      "Trung tâm công nghiệp điện tử và công nghệ cao của cả nước (Samsung, Foxconn).",
      "Phát triển mạnh mẽ các khu công nghiệp tập trung, thu hút vốn đầu tư nước ngoài lớn.",
      "Nông nghiệp hàng hóa với các sản phẩm đặc sản như vải thiều Lục Ngạn, gà đồi Yên Thế."
    ],
    climate: "Nhiệt đới gió mùa, mùa đông lạnh.",
    food: [
      {
        name: "Bánh phu thê",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Phu_The_Cake.jpg/960px-Phu_The_Cake.jpg"
      },
      {
        name: "Vải thiều Lục Ngạn",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/V%E1%BB%8Bnh_H%E1%BA%A1_Long_-_NKS.jpg/800px-V%E1%BB%8Bnh_H%E1%BA%A1_Long_-_NKS.jpg"
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
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Dau_pagoda.jpg"
  },
  "Hải Phòng": {
    name: "Hải Phòng",
    location: "Việt Nam",
    area: "1.526 km²",
    population: "2.088.020 người",
    description: "Thành phố cảng lớn nhất miền Bắc, trung tâm công nghiệp và giao thương hàng hải quan trọng.",
    culture: [
      "Văn hóa đô thị cảng biển năng động, cởi mở và phóng khoáng của người dân đất Cảng.",
      "Lễ hội chọi trâu Đồ Sơn là di sản văn hóa phi vật thể quốc gia độc đáo.",
      "Ẩm thực đường phố Hải Phòng (Food tour) đang trở thành một nét văn hóa thu hút giới trẻ."
    ],
    economy: [
      "Cảng biển quốc tế Lạch Huyện là cửa ngõ giao thương hàng hải lớn nhất miền Bắc.",
      "Công nghiệp đóng tàu, sản xuất ô tô (VinFast) và công nghiệp phụ trợ phát triển mạnh.",
      "Du lịch biển đảo (Cát Bà, Đồ Sơn) là ngành kinh tế mũi nhọn của thành phố."
    ],
    climate: "Nhiệt đới gió mùa ven biển.",
    food: [
      {
        name: "Bánh đa cua",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/81/BANH_DA_CUA_1.jpg"
      },
      {
        name: "Nem cua bể",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Nem_cua_b%E1%BB%83_H%C3%A0_N%E1%BB%99i_t%E1%BA%A1i_Nguy%E1%BB%85n_S%C6%A1n%2C_T%C3%A2n_Ph%C3%BA%2C_th%C3%A1ng_9_n%C4%83m_2018_%283%29.jpg/960px-Nem_cua_b%E1%BB%83_H%C3%A0_N%E1%BB%99i_t%E1%BA%A1i_Nguy%E1%BB%85n_S%C6%A1n%2C_T%C3%A2n_Ph%C3%BA%2C_th%C3%A1ng_9_n%C4%83m_2018_%283%29.jpg"
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/QD_Catba2.jpg/960px-QD_Catba2.jpg"
  },
  "Hải Dương - Hưng Yên - Thái Bình": {
    name: "Hải Dương (Hải Dương + Hưng Yên + Thái Bình)",
    location: "Việt Nam",
    area: "4.500 km²",
    population: "5.100.000 người",
    description: "Vùng trọng điểm nông nghiệp và công nghiệp nhẹ của Đồng bằng sông Hồng, vựa lúa lớn của miền Bắc.",
    culture: [
      "Văn hóa làng quê Bắc Bộ truyền thống với các loại hình nghệ thuật như hát chèo, múa rối nước.",
      "Nhiều di tích lịch sử quan trọng như Côn Sơn - Kiếp Bạc, Phố Hiến, chùa Keo.",
      "Làng nghề truyền thống phong phú: gốm Chu Đậu, bánh đậu xanh, dệt chiếu."
    ],
    economy: [
      "Vùng trọng điểm sản xuất lúa gạo và nông sản thực phẩm của miền Bắc.",
      "Phát triển mạnh công nghiệp nhẹ, công nghiệp chế biến và dệt may.",
      "Kinh tế dịch vụ và du lịch văn hóa - tâm linh đang được đầu tư mở rộng."
    ],
    climate: "Nhiệt đới gió mùa.",
    food: [
      {
        name: "Bánh đậu xanh",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Banh-Dau-Xanh.jpg"
      },
      {
        name: "Nhãn lồng",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Longan_tree_at_Pine_Island_Nursery.jpg/960px-Longan_tree_at_Pine_Island_Nursery.jpg"
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Chuakeothaibinh.jpg/960px-Chuakeothaibinh.jpg"
  },
  "Hà Nam - Nam Định - Ninh Bình": {
    name: "Nam Định (Hà Nam + Nam Định + Ninh Bình)",
    location: "Việt Nam",
    area: "4.100 km²",
    population: "3.600.000 người",
    description: "Vùng đất phía Nam đồng bằng sông Hồng, nổi tiếng với di sản thiên nhiên Tràng An và các làng nghề truyền thống.",
    culture: [
      "Cố đô Hoa Lư lịch sử - kinh đô đầu tiên của nhà nước phong kiến trung ương tập quyền.",
      "Văn hóa Phật giáo phát triển rực rỡ với quần thể chùa Bái Đính lớn nhất Đông Nam Á.",
      "Truyền thống hiếu học và các lễ hội đền Trần, lễ hội Phủ Dầy mang đậm bản sắc Nam Định."
    ],
    economy: [
      "Du lịch sinh thái, tâm linh và di sản (Tràng An) là ngành kinh tế mũi nhọn.",
      "Phát triển công nghiệp dệt may, cơ khí và sản xuất vật liệu xây dựng.",
      "Nông nghiệp lúa nước chất lượng cao và nuôi trồng thủy sản ven biển."
    ],
    climate: "Nhiệt đới gió mùa.",
    food: [
      {
        name: "Phở bò Nam Định",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Ph%E1%BB%9F_b%C3%B2%2C_C%E1%BA%A7u_Gi%E1%BA%A5y%2C_H%C3%A0_N%E1%BB%99i.jpg/960px-Ph%E1%BB%9F_b%C3%B2%2C_C%E1%BA%A7u_Gi%E1%BA%A5y%2C_H%C3%A0_N%E1%BB%99i.jpg"
      },
      {
        name: "Thịt dê núi",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Goats_in_Ninh_H%E1%BA%A3i%2C_Ninh_Binh_province%2C_Vietnam%2C_20240201_1521_4869.jpg/960px-Goats_in_Ninh_H%E1%BA%A3i%2C_Ninh_Binh_province%2C_Vietnam%2C_20240201_1521_4869.jpg"
      }
    ],
    attractions: [
      {
        name: "Tràng An",
        lat: 20.25,
        lng: 105.97,
        highlights: "Di sản văn hóa và thiên nhiên thế giới.",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Muaxuantamcoc.jpg",
        videoUrl: "https://www.youtube.com/watch?v=2b9txcAt4e0"
      }
    ],
    lat: 20.4333,
    lng: 106.1667,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Muaxuantamcoc.jpg"
  },
  "Thanh Hóa": {
    name: "Thanh Hóa",
    location: "Việt Nam",
    area: "11.114 km²",
    population: "3.712.600 người",
    description: "Tỉnh lớn ở Bắc Trung Bộ, nơi giao thoa giữa miền Bắc và miền Trung, có đầy đủ các địa hình núi, trung du, đồng bằng và biển.",
    culture: [
      "Vùng đất địa linh nhân kiệt, quê hương của nhiều triều đại phong kiến và các anh hùng dân tộc.",
      "Hò sông Mã và các làn điệu dân ca Đông Sơn là những nét văn hóa đặc trưng.",
      "Di sản văn hóa thế giới Thành Nhà Hồ là minh chứng cho kỹ thuật xây dựng đá độc đáo."
    ],
    economy: [
      "Khu kinh tế Nghi Sơn với tổ hợp lọc hóa dầu là động lực tăng trưởng chính.",
      "Phát triển mạnh du lịch biển (Sầm Sơn, Hải Tiến) và du lịch di sản.",
      "Nông nghiệp hàng hóa và chăn nuôi gia súc quy mô lớn."
    ],
    climate: "Nhiệt đới gió mùa, chịu ảnh hưởng của gió Lào vào mùa hè.",
    food: [
      {
        name: "Nem chua",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Fermented_pork_wrapped_in_leaves.jpg/960px-Fermented_pork_wrapped_in_leaves.jpg"
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Sam_Son_beach.jpg/960px-Sam_Son_beach.jpg"
      }
    ],
    lat: 19.8,
    lng: 105.7667,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Sam_Son_beach.jpg/960px-Sam_Son_beach.jpg"
  },
  "Nghệ An": {
    name: "Nghệ An",
    location: "Việt Nam",
    area: "16.486 km²",
    population: "3.409.800 người",
    description: "Tỉnh có diện tích lớn nhất Việt Nam, quê hương của Chủ tịch Hồ Chí Minh.",
    culture: [
      "Quê hương của Chủ tịch Hồ Chí Minh với truyền thống hiếu học và yêu nước nồng nàn.",
      "Dân ca Ví, Giặm Nghệ Tĩnh - Di sản văn hóa phi vật thể đại diện của nhân loại.",
      "Hệ thống các di tích lịch sử, đền chùa cổ kính gắn liền với lịch sử dựng nước và giữ nước."
    ],
    economy: [
      "Phát triển đa dạng các ngành công nghiệp, dịch vụ và du lịch lịch sử - tâm linh.",
      "Nông nghiệp thế mạnh với các vùng trồng cây ăn quả (cam Vinh) và chăn nuôi bò sữa.",
      "Kinh tế biển phát triển với đánh bắt, nuôi trồng thủy sản và du lịch biển Cửa Lò."
    ],
    climate: "Khí hậu khắc nghiệt, mùa hè có gió Tây Nam khô nóng.",
    food: [
      {
        name: "Súp lươn",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Monopterus_albus_4.jpg"
      },
      {
        name: "Nhút Thanh Chương",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Fermented_pork_wrapped_in_leaves.jpg/800px-Fermented_pork_wrapped_in_leaves.jpg"
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vietnam_location_map.svg/800px-Vietnam_location_map.svg.png"
  },
  "Hà Tĩnh": {
    name: "Hà Tĩnh",
    location: "Việt Nam",
    area: "5.990 km²",
    population: "1.313.254 người",
    description: "Tỉnh thuộc vùng Bắc Trung Bộ, nổi tiếng với ngã ba Đồng Lộc và khu kinh tế Vũng Áng.",
    culture: [
      "Quê hương của đại thi hào Nguyễn Du và nhiều danh nhân văn hóa thế giới.",
      "Đậm đà bản sắc dân ca Ví, Giặm và các lễ hội truyền thống vùng sông Lam, núi Hồng.",
      "Truyền thống hiếu học và ý chí vươn lên mạnh mẽ của con người miền Trung."
    ],
    economy: [
      "Khu kinh tế Vũng Áng với dự án Formosa là trung tâm công nghiệp nặng của vùng.",
      "Phát triển mạnh nuôi trồng và đánh bắt thủy hải sản ven biển.",
      "Nông nghiệp hàng hóa và kinh tế rừng đóng góp quan trọng vào cơ cấu kinh tế."
    ],
    climate: "Nhiệt đới gió mùa, chịu nhiều ảnh hưởng của bão và gió Lào.",
    food: [
      {
        name: "Kẹo cu đơ",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/KeoCudo.JPG/960px-KeoCudo.JPG"
      },
      {
        name: "Mực nhảy Vũng Áng",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Fermented_pork_wrapped_in_leaves.jpg/800px-Fermented_pork_wrapped_in_leaves.jpg"
      }
    ],
    attractions: [
      {
        name: "Ngã ba Đồng Lộc",
        lat: 18.38,
        lng: 105.75,
        highlights: "Di tích lịch sử thanh niên xung phong.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Nga_ba_Dong_Loc.jpg/800px-Nga_ba_Dong_Loc.jpg"
      }
    ],
    lat: 18.3333,
    lng: 105.9,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vietnam_location_map.svg/800px-Vietnam_location_map.svg.png"
  },
  "Quảng Bình - Quảng Trị": {
    name: "Quảng Bình (Quảng Bình + Quảng Trị)",
    location: "Việt Nam",
    area: "12.700 km²",
    population: "1.550.000 người",
    description: "Vùng đất miền Trung anh hùng, nổi tiếng với hệ thống hang động kỳ vĩ Phong Nha - Kẻ Bàng và các di tích lịch sử vĩ tuyến 17.",
    culture: [
      "Gắn liền với những năm tháng chiến tranh hào hùng, là biểu tượng của tinh thần bất khuất.",
      "Văn hóa dân gian vùng cát trắng với các điệu hò khoan, hò giã gạo đặc sắc.",
      "Sự giao thoa văn hóa giữa các dân tộc thiểu số vùng Trường Sơn hùng vĩ."
    ],
    economy: [
      "Du lịch hang động (Phong Nha - Kẻ Bàng) là ngành kinh tế mũi nhọn mang tầm quốc tế.",
      "Phát triển năng lượng tái tạo (điện gió, điện mặt trời) trên vùng đất cát.",
      "Nông nghiệp thích ứng với biến đổi khí hậu và kinh tế rừng bền vững."
    ],
    climate: "Nhiệt đới gió mùa, mùa hè rất nóng và khô.",
    food: [
      {
        name: "Bánh lọc",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/B%C3%A1nh_b%C3%A8o%2C_b%E1%BB%99t_l%E1%BB%8Dc%2C_nem_chua.jpg/960px-B%C3%A1nh_b%C3%A8o%2C_b%E1%BB%99t_l%E1%BB%8Dc%2C_nem_chua.jpg"
      },
      {
        name: "Cháo canh",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Ch%C3%A1o_l%C3%B2ng.jpg/960px-Ch%C3%A1o_l%C3%B2ng.jpg"
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Phongnhakebang6.jpg/960px-Phongnhakebang6.jpg"
  },
  "TP. Huế": {
    name: "Thừa Thiên Huế (TP. Huế)",
    location: "Việt Nam",
    area: "4.902 km²",
    population: "1.133.600 người",
    description: "Cố đô của Việt Nam, nơi lưu giữ quần thể di tích kiến trúc cung đình triều Nguyễn.",
    culture: [
      "Văn hóa cung đình triều Nguyễn tinh tế, nhã nhạc cung đình Huế - Di sản thế giới.",
      "Lối sống thanh lịch, nhẹ nhàng của con người xứ Huế gắn liền với tà áo dài và nón lá.",
      "Ẩm thực Huế phong phú từ món ăn dân dã đến các món cung đình cầu kỳ."
    ],
    economy: [
      "Du lịch di sản và văn hóa là ngành kinh tế trọng tâm của tỉnh.",
      "Phát triển mạnh các ngành dịch vụ, giáo dục đại học và y tế chuyên sâu.",
      "Công nghiệp dệt may và sản xuất vật liệu xây dựng đóng góp đáng kể cho kinh tế."
    ],
    climate: "Nhiệt đới gió mùa, lượng mưa lớn vào mùa thu đông.",
    food: [
      {
        name: "Bún bò Huế",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Bun-Bo-Hue-from-Huong-Giang-2011.jpg/960px-Bun-Bo-Hue-from-Huong-Giang-2011.jpg"
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
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/%C4%90%E1%BA%A1i_n%E1%BB%99i.jpg",
        videoUrl: "https://www.youtube.com/watch?v=xP2cIGhqIGQ"
      }
    ],
    lat: 16.4667,
    lng: 107.6,
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/%C4%90%E1%BA%A1i_n%E1%BB%99i.jpg"
  },
  "Đà Nẵng - Quảng Nam": {
    name: "Đà Nẵng (Đà Nẵng + Quảng Nam)",
    location: "Việt Nam",
    area: "11.800 km²",
    population: "2.700.000 người",
    description: "Trung tâm kinh tế, du lịch lớn nhất miền Trung, hội tụ vẻ đẹp hiện đại của Đà Nẵng và nét cổ kính của Hội An, Mỹ Sơn.",
    culture: [
      "Giao thoa văn hóa Chăm Pa và Việt, thể hiện qua các di tích Mỹ Sơn và lối sống người dân.",
      "Đô thị Đà Nẵng năng động, hiện đại kết hợp với nét cổ kính, bình dị của Hội An.",
      "Nghệ thuật Bài Chòi và các lễ hội cầu ngư đặc trưng của vùng duyên hải."
    ],
    economy: [
      "Trung tâm du lịch, dịch vụ và thương mại lớn nhất khu vực miền Trung - Tây Nguyên.",
      "Phát triển mạnh công nghiệp công nghệ cao, công nghệ thông tin và cảng biển.",
      "Kinh tế biển phát triển toàn diện từ đánh bắt đến chế biến thủy sản xuất khẩu."
    ],
    climate: "Nhiệt đới gió mùa, có hai mùa mưa nắng rõ rệt.",
    food: [
      {
        name: "Mì Quảng",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Mi_Quang_1A_Danang.jpg/960px-Mi_Quang_1A_Danang.jpg"
      },
      {
        name: "Cao lầu",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Cao_l%E1%BA%A7u_%28144854_994%29.jpg/960px-Cao_l%E1%BA%A7u_%28144854_994%29.jpg"
      }
    ],
    attractions: [
      {
        name: "Phố cổ Hội An",
        lat: 15.88,
        lng: 108.33,
        highlights: "Thương cảng cổ sầm uất thế kỷ 16-17.",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/PhoCoHoiAn.jpg",
        videoUrl: "https://www.youtube.com/watch?v=9_b_2n-P33w"
      },
      {
        name: "Bà Nà Hills",
        lat: 15.99,
        lng: 107.98,
        highlights: "Khu du lịch trên núi với Cầu Vàng nổi tiếng.",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Panoramic_View.jpg",
        videoUrl: "https://www.youtube.com/watch?v=3_b_2n-P33w"
      }
    ],
    lat: 16.0667,
    lng: 108.2333,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vietnam_location_map.svg/800px-Vietnam_location_map.svg.png"
  },
  "Quảng Ngãi": {
    name: "Quảng Ngãi",
    location: "Việt Nam",
    area: "5.155 km²",
    population: "1.234.700 người",
    description: "Tỉnh ven biển Duyên hải Nam Trung Bộ, nổi tiếng với đảo Lý Sơn và nhà máy lọc dầu Dung Quất.",
    culture: [
      "Văn hóa Sa Huỳnh cổ đại rực rỡ, quê hương của đội Hoàng Sa kiêm quản Bắc Hải.",
      "Tinh thần yêu nước nồng nàn với các cuộc khởi nghĩa và danh nhân lịch sử.",
      "Văn hóa biển đảo đặc sắc gắn liền với nghề trồng tỏi và đánh bắt xa bờ ở Lý Sơn."
    ],
    economy: [
      "Công nghiệp lọc hóa dầu (Dung Quất) là trụ cột kinh tế của tỉnh và khu vực.",
      "Phát triển mạnh kinh tế biển, cảng biển nước sâu và dịch vụ hậu cần nghề cá.",
      "Nông nghiệp đặc sản với thương hiệu tỏi Lý Sơn nổi tiếng toàn quốc."
    ],
    climate: "Nhiệt đới gió mùa, mùa mưa thường có bão.",
    food: [
      {
        name: "Tỏi Lý Sơn",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Ly_Son3.jpg/960px-Ly_Son3.jpg"
      },
      {
        name: "Don",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Miguel_de_Cervantes_%281605%29_El_ingenioso_hidalgo_Don_Quixote_de_la_Mancha.png"
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/C%E1%BB%95ng_ch%C3%A0o_tr%C3%AAn_Huy%E1%BB%87n_%C4%90%E1%BA%A3o_L%C3%BD_S%C6%A1n_-_Qu%E1%BA%A3ng_Ng%C3%A3i.jpg/960px-C%E1%BB%95ng_ch%C3%A0o_tr%C3%AAn_Huy%E1%BB%87n_%C4%90%E1%BA%A3o_L%C3%BD_S%C6%A1n_-_Qu%E1%BA%A3ng_Ng%C3%A3i.jpg"
  },
  "Gia Lai - Kon Tum - Bình Định": {
    name: "Gia Lai (Gia Lai + Kon Tum + Bình Định)",
    location: "Việt Nam",
    area: "31.000 km²",
    population: "3.500.000 người",
    description: "Sự kết hợp giữa vùng cao nguyên đại ngàn Bắc Tây Nguyên và vùng duyên hải võ thuật Bình Định.",
    culture: [
      "Văn hóa cồng chiêng Tây Nguyên hùng vĩ và tinh thần thượng võ Tây Sơn Bình Định.",
      "Hệ thống các tháp Chăm cổ kính và nghệ thuật hát Bội, nhạc võ Tây Sơn độc đáo.",
      "Sự hòa quyện giữa văn hóa các dân tộc thiểu số (Ba Na, Gia Rai) và văn hóa miền biển."
    ],
    economy: [
      "Nông nghiệp thế mạnh với cây công nghiệp (cà phê, cao su) và chăn nuôi gia súc.",
      "Phát triển mạnh công nghiệp chế biến nông lâm sản và năng lượng tái tạo.",
      "Du lịch sinh thái núi rừng kết hợp du lịch biển đảo và văn hóa lịch sử."
    ],
    climate: "Phân hóa rõ rệt giữa vùng cao nguyên mát mẻ và đồng bằng ven biển nắng nóng.",
    food: [
      {
        name: "Phở khô Gia Lai",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Ph%E1%BB%9F_b%C3%B2%2C_C%E1%BA%A7u_Gi%E1%BA%A5y%2C_H%C3%A0_N%E1%BB%99i.jpg/960px-Ph%E1%BB%9F_b%C3%B2%2C_C%E1%BA%A7u_Gi%E1%BA%A5y%2C_H%C3%A0_N%E1%BB%99i.jpg"
      },
      {
        name: "Bánh xèo tôm nhảy",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/B%C3%A1nh_x%C3%A8o_with_n%C6%B0%E1%BB%9Bc_m%E1%BA%AFm.jpg/800px-B%C3%A1nh_x%C3%A8o_with_n%C6%B0%E1%BB%9Bc_m%E1%BA%AFm.jpg"
      }
    ],
    attractions: [
      {
        name: "Biển Hồ",
        lat: 14.05,
        lng: 108,
        highlights: "Đôi mắt Pleiku trong xanh.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Bien_Ho_Pleiku.jpg/800px-Bien_Ho_Pleiku.jpg"
      },
      {
        name: "Kỳ Co",
        lat: 13.93,
        lng: 109.3,
        highlights: "Maldives của Việt Nam.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ky_Co_Beach.jpg/800px-Ky_Co_Beach.jpg"
      }
    ],
    lat: 13.9833,
    lng: 108,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vietnam_location_map.svg/800px-Vietnam_location_map.svg.png"
  },
  "Đắk Lắk - Đắk Nông": {
    name: "Đắk Lắk (Đắk Lắk + Đắk Nông)",
    location: "Việt Nam",
    area: "19.600 km²",
    population: "2.500.000 người",
    description: "Thủ phủ cà phê của Việt Nam, vùng đất bazan màu mỡ với những thác nước hùng vĩ và đàn voi rừng.",
    culture: [
      "Không gian văn hóa cồng chiêng Tây Nguyên đậm đà bản sắc người Ê Đê, M'Nông.",
      "Các sử thi (Khan) truyền miệng và kiến trúc nhà dài truyền thống độc đáo.",
      "Lễ hội đua voi và các nghi lễ liên quan đến đời sống tâm linh của đồng bào Tây Nguyên."
    ],
    economy: [
      "Thủ phủ cà phê của Việt Nam với sản lượng và chất lượng xuất khẩu hàng đầu thế giới.",
      "Phát triển mạnh các loại cây công nghiệp giá trị cao như hồ tiêu, ca cao, mắc ca.",
      "Du lịch sinh thái, trải nghiệm văn hóa bản địa đang ngày càng thu hút du khách."
    ],
    climate: "Khí hậu cao nguyên nhiệt đới ẩm, chia hai mùa mưa nắng.",
    food: [
      {
        name: "Cà phê Buôn Ma Thuột",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Bmtcitycenter.png/960px-Bmtcitycenter.png"
      },
      {
        name: "Gà nướng bản Đôn",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Srepok_Ban_Don.JPG/960px-Srepok_Ban_Don.JPG"
      }
    ],
    attractions: [
      {
        name: "Hồ Lắk",
        lat: 12.42,
        lng: 108.17,
        highlights: "Hồ nước ngọt tự nhiên lớn nhất Tây Nguyên.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Lak_Lake.jpg/960px-Lak_Lake.jpg"
      }
    ],
    lat: 12.6667,
    lng: 108.0333,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Lak_Lake.jpg/960px-Lak_Lake.jpg"
  },
  "Phú Yên - Khánh Hòa - Ninh Thuận": {
    name: "Khánh Hòa (Phú Yên + Khánh Hòa + Ninh Thuận)",
    location: "Việt Nam",
    area: "13.600 km²",
    population: "2.700.000 người",
    description: "Thiên đường du lịch biển Nam Trung Bộ với những vịnh biển đẹp nhất thế giới như Nha Trang, Vũng Rô, Vĩnh Hy.",
    culture: [
      "Văn hóa Chăm Pa đặc sắc với hệ thống tháp Chàm và các làng nghề gốm, dệt truyền thống.",
      "Lối sống phóng khoáng của cư dân ven biển gắn liền với các lễ hội cầu ngư.",
      "Sự giao thoa văn hóa giữa các dân tộc Việt, Chăm, Raglai tạo nên nét độc đáo riêng."
    ],
    economy: [
      "Du lịch biển đảo đẳng cấp quốc tế (Nha Trang, Cam Ranh) là ngành kinh tế chủ lực.",
      "Phát triển mạnh kinh tế biển, nuôi trồng thủy sản công nghệ cao (tôm hùm, yến sào).",
      "Năng lượng tái tạo (điện mặt trời, điện gió) phát triển mạnh tại Ninh Thuận."
    ],
    climate: "Nhiệt đới xavan, khô hạn nhất cả nước (đặc biệt ở Ninh Thuận).",
    food: [
      {
        name: "Mắt cá ngừ đại dương",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Tuna_assortment.png"
      },
      {
        name: "Nho Ninh Thuận",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Po_Klong_Garai.jpg/960px-Po_Klong_Garai.jpg"
      }
    ],
    attractions: [
      {
        name: "Vịnh Nha Trang",
        lat: 12.23,
        lng: 109.2,
        highlights: "Một trong những vịnh biển đẹp nhất thế giới.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Nha_Trang%2C_Kh%C3%A1nh_H%C3%B2a.png/960px-Nha_Trang%2C_Kh%C3%A1nh_H%C3%B2a.png"
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/G%C3%A0nh_%C4%90%C3%A1_%C4%90%C4%A9a_-_Ph%C3%BA_Y%C3%AAn.jpg/960px-G%C3%A0nh_%C4%90%C3%A1_%C4%90%C4%A9a_-_Ph%C3%BA_Y%C3%AAn.jpg"
  },
  "Lâm Đồng - Bình Thuận": {
    name: "Lâm Đồng (Lâm Đồng + Bình Thuận)",
    location: "Việt Nam",
    area: "17.600 km²",
    population: "2.600.000 người",
    description: "Sự giao hòa tuyệt vời giữa thành phố ngàn hoa Đà Lạt trên cao nguyên và những đồi cát trắng trải dài ven biển Mũi Né.",
    culture: [
      "Sự giao hòa tuyệt vời giữa văn hóa các dân tộc bản địa Tây Nguyên và văn hóa biển.",
      "Không gian văn hóa cồng chiêng Tây Nguyên và các lễ hội dân gian vùng biển Bình Thuận.",
      "Nghệ thuật kiến trúc và điêu khắc của người Chăm tại các tháp cổ vùng Nam Trung Bộ."
    ],
    economy: [
      "Du lịch nghỉ dưỡng cao cấp (Đà Lạt, Mũi Né) là ngành kinh tế mũi nhọn.",
      "Nông nghiệp công nghệ cao (hoa, rau quả Đà Lạt) và xuất khẩu thanh long Bình Thuận.",
      "Năng lượng tái tạo (điện gió, điện mặt trời) và khai thác bô-xít."
    ],
    climate: "Đà Lạt mát mẻ quanh năm, Bình Thuận khô nóng nhiều gió.",
    food: [
      {
        name: "Bánh tráng nướng",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/36/B%C3%A1nh_tr%C3%A1ng_1.jpg"
      },
      {
        name: "Hải sản Mũi Né",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Vietnam_region_map.svg/960px-Vietnam_region_map.svg.png"
      }
    ],
    attractions: [
      {
        name: "Đà Lạt",
        lat: 11.94,
        lng: 108.44,
        highlights: "Thành phố sương mù lãng mạn.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Da_Lat_-_Viet_Nam.jpg/960px-Da_Lat_-_Viet_Nam.jpg"
      },
      {
        name: "Đồi cát Mũi Né",
        lat: 10.94,
        lng: 108.28,
        highlights: "Tiểu sa mạc ven biển.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Vietnam%2C_Mui_Ne_sand_dune.jpg/960px-Vietnam%2C_Mui_Ne_sand_dune.jpg"
      }
    ],
    lat: 11.9333,
    lng: 108.4333,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Vietnam%2C_Mui_Ne_sand_dune.jpg/960px-Vietnam%2C_Mui_Ne_sand_dune.jpg"
  },
  "Bình Phước - Bình Dương - Đồng Nai": {
    name: "Đồng Nai (Bình Phước + Bình Dương + Đồng Nai)",
    location: "Việt Nam",
    area: "19.500 km²",
    population: "6.800.000 người",
    description: "Thủ phủ công nghiệp của miền Nam, động lực phát triển kinh tế trọng điểm với hàng loạt khu công nghiệp lớn.",
    culture: [
      "Văn hóa hiện đại, năng động, hội tụ người lao động từ mọi miền đất nước.",
      "Các di tích lịch sử cách mạng như Chiến khu Đ, nhà tù Phú Lợi.",
      "Văn hóa làng nghề truyền thống: gốm sứ Bình Dương, sơn mài Tương Bình Hiệp."
    ],
    economy: [
      "Thủ phủ công nghiệp của cả nước với hàng chục khu công nghiệp quy mô lớn.",
      "Thu hút vốn đầu tư nước ngoài (FDI) luôn nằm trong top đầu cả nước.",
      "Phát triển mạnh mẽ đô thị thông minh và dịch vụ logistics hiện đại."
    ],
    climate: "Nhiệt đới gió mùa cận xích đạo, nóng ẩm quanh năm.",
    food: [
      {
        name: "Gỏi bưởi Tân Triều",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Vietnam_location_map.svg/960px-Vietnam_location_map.svg.png"
      },
      {
        name: "Hạt điều rang muối",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cashew_apples.jpg/960px-Cashew_apples.jpg"
      }
    ],
    attractions: [
      {
        name: "Vườn quốc gia Cát Tiên",
        lat: 11.42,
        lng: 107.42,
        highlights: "Khu dự trữ sinh quyển thế giới.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/BenCu_forest_structure_23Dec08.jpg/960px-BenCu_forest_structure_23Dec08.jpg"
      }
    ],
    lat: 10.95,
    lng: 106.8167,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/BenCu_forest_structure_23Dec08.jpg/960px-BenCu_forest_structure_23Dec08.jpg"
  },
  "Tây Ninh": {
    name: "Tây Ninh",
    location: "Việt Nam",
    area: "4.041 km²",
    population: "1.178.329 người",
    description: "Tỉnh biên giới Tây Nam Bộ, nổi tiếng với núi Bà Đen và Tòa Thánh Cao Đài.",
    culture: [
      "Trung tâm của đạo Cao Đài với Tòa Thánh Tây Ninh kiến trúc độc đáo.",
      "Tín ngưỡng thờ Linh Sơn Thánh Mẫu tại núi Bà Đen thu hút hàng triệu tín đồ.",
      "Sự giao thoa văn hóa biên giới Việt Nam - Campuchia đặc sắc."
    ],
    economy: [
      "Nông nghiệp hàng hóa quy mô lớn với cây mía, sắn (khoai mì) và cao su.",
      "Phát triển mạnh công nghiệp chế biến nông sản và năng lượng mặt trời.",
      "Kinh tế cửa khẩu phát triển qua các cửa khẩu quốc tế Mộc Bài, Xa Mát."
    ],
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Dau_Tieng_Lake_-_50766650163.png/960px-Dau_Tieng_Lake_-_50766650163.png"
      }
    ],
    lat: 11.3,
    lng: 106.1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Dau_Tieng_Lake_-_50766650163.png/960px-Dau_Tieng_Lake_-_50766650163.png"
  },
  "TP. Hồ Chí Minh - Long An - Bà Rịa Vũng Tàu": {
    name: "TP. Hồ Chí Minh (TP.HCM + Long An + BR-VT)",
    location: "Việt Nam",
    area: "8.500 km²",
    population: "12.500.000 người",
    description: "Siêu đô thị kinh tế lớn nhất Việt Nam, kết nối với cửa ngõ Đồng bằng sông Cửu Long và trung tâm du lịch, dầu khí Vũng Tàu.",
    culture: [
      "Năng động, hiện đại, đa văn hóa và cởi mở bậc nhất cả nước.",
      "Hệ thống di sản kiến trúc Pháp kết hợp với văn hóa đô thị sông nước Nam Bộ.",
      "Trung tâm văn hóa, nghệ thuật, giải trí và sáng tạo lớn nhất Việt Nam."
    ],
    economy: [
      "Đầu tàu kinh tế, tài chính, thương mại và dịch vụ của cả nước.",
      "Phát triển mạnh mẽ công nghiệp công nghệ cao, kinh tế số và khởi nghiệp.",
      "Khai thác dầu khí và dịch vụ cảng biển quốc tế (Cái Mép - Thị Vải)."
    ],
    climate: "Nhiệt đới gió mùa cận xích đạo, hai mùa mưa nắng.",
    food: [
      {
        name: "Cơm tấm",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/C%C6%A1m_T%E1%BA%A5m%2C_Da_Nang%2C_Vietnam.jpg/960px-C%C6%A1m_T%E1%BA%A5m%2C_Da_Nang%2C_Vietnam.jpg"
      },
      {
        name: "Bánh khọt Vũng Tàu",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/B%C3%A1nh_kh%E1%BB%8Dt.jpg/960px-B%C3%A1nh_kh%E1%BB%8Dt.jpg"
      }
    ],
    attractions: [
      {
        name: "Chợ Bến Thành",
        lat: 10.77,
        lng: 106.69,
        highlights: "Biểu tượng lịch sử của Sài Gòn.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Ben_Thanh_market_2.jpg/960px-Ben_Thanh_market_2.jpg",
        videoUrl: "https://www.youtube.com/watch?v=4_b_2n-P33w"
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/B%E1%BB%9D_bi%E1%BB%83n_V%C5%A9ng_T%C3%A0u.JPG/960px-B%E1%BB%9D_bi%E1%BB%83n_V%C5%A9ng_T%C3%A0u.JPG"
  },
  "Đồng Tháp - Tiền Giang": {
    name: "Đồng Tháp (Đồng Tháp + Tiền Giang)",
    location: "Việt Nam",
    area: "5.900 km²",
    population: "3.300.000 người",
    description: "Vùng miệt vườn sông nước trù phú, nổi tiếng với những cánh đồng sen Đồng Tháp Mười và vựa trái cây Tiền Giang.",
    culture: [
      "Văn hóa sông nước miệt vườn đặc trưng với đờn ca tài tử Nam Bộ.",
      "Các làng nghề truyền thống: làng hoa Sa Đéc, làng chiếu Định Yên.",
      "Lối sống hiền hòa, mến khách gắn liền với hình ảnh hoa sen Đồng Tháp."
    ],
    economy: [
      "Vựa lúa và trái cây lớn của Đồng bằng sông Cửu Long.",
      "Phát triển mạnh nuôi trồng và chế biến thủy sản xuất khẩu (cá tra, cá basa).",
      "Du lịch sinh thái miệt vườn và du lịch văn hóa - lịch sử phát triển mạnh."
    ],
    climate: "Nhiệt đới gió mùa cận xích đạo.",
    food: [
      {
        name: "Hủ tiếu Mỹ Tho",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/H%E1%BB%A7_t%C3%ADu_Nam_Vang_%28h%E1%BB%A7_t%C3%ADu_t%C3%B4m%29%2C_qu%C3%A1n_C%E1%BA%A7u_Tr%E1%BA%AFng%2C_K%C3%AAnh_n%C6%B0%E1%BB%9Bc_%C4%91en_%281%29.jpg/960px-H%E1%BB%A7_t%C3%ADu_Nam_Vang_%28h%E1%BB%A7_t%C3%ADu_t%C3%B4m%29%2C_qu%C3%A1n_C%E1%BA%A7u_Tr%E1%BA%AFng%2C_K%C3%AAnh_n%C6%B0%E1%BB%9Bc_%C4%91en_%281%29.jpg"
      },
      {
        name: "Nem Lai Vung",
        image: "https://upload.wikimedia.org/wikipedia/vi/thumb/0/0d/Nem_chua_Lai_Vung.jpg/960px-Nem_chua_Lai_Vung.jpg"
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Vietnam_08_-_122_-_Cai_Be_floating_market_%283185904536%29.jpg/960px-Vietnam_08_-_122_-_Cai_Be_floating_market_%283185904536%29.jpg"
      }
    ],
    lat: 10.4667,
    lng: 105.6333,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Vietnam_08_-_122_-_Cai_Be_floating_market_%283185904536%29.jpg/960px-Vietnam_08_-_122_-_Cai_Be_floating_market_%283185904536%29.jpg"
  },
  "Vĩnh Long - Bến Tre - Trà Vinh": {
    name: "Vĩnh Long (Vĩnh Long + Bến Tre + Trà Vinh)",
    location: "Việt Nam",
    area: "6.200 km²",
    population: "3.300.000 người",
    description: "Xứ sở của những rặng dừa xanh ngát, cù lao trù phú và sự giao thoa văn hóa Việt - Khmer.",
    culture: [
      "Sự giao thoa văn hóa rực rỡ giữa ba dân tộc Việt - Khmer - Hoa.",
      "Hệ thống chùa chiền kiến trúc Khmer độc đáo và các lễ hội truyền thống.",
      "Văn hóa dừa Bến Tre đã trở thành biểu tượng di sản văn hóa của vùng."
    ],
    economy: [
      "Kinh tế vườn phát triển mạnh với các loại cây ăn trái đặc sản và dừa.",
      "Nuôi trồng và đánh bắt thủy hải sản ven biển đóng góp lớn cho kinh tế.",
      "Phát triển du lịch sinh thái sông nước và du lịch văn hóa tâm linh."
    ],
    climate: "Nhiệt đới gió mùa, mát mẻ nhờ hệ thống sông ngòi chằng chịt.",
    food: [
      {
        name: "Kẹo dừa Bến Tre",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Cocnout_candy_8.jpg/960px-Cocnout_candy_8.jpg"
      },
      {
        name: "Bún nước lèo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/B%C3%BAn_n%C6%B0%E1%BB%9Bc_l%C3%A8o.jpg/960px-B%C3%BAn_n%C6%B0%E1%BB%9Bc_l%C3%A8o.jpg"
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/T%C3%A0u_du_l%E1%BB%8Bch_gh%C3%A9_c%E1%BB%93n_L%C3%A2n.jpg/960px-T%C3%A0u_du_l%E1%BB%8Bch_gh%C3%A9_c%E1%BB%93n_L%C3%A2n.jpg"
  },
  "TP. Cần Thơ - Hậu Giang - Sóc Trăng": {
    name: "Cần Thơ (TP. Cần Thơ + Hậu Giang + Sóc Trăng)",
    location: "Việt Nam",
    area: "6.300 km²",
    population: "3.200.000 người",
    description: "Thủ phủ của miền Tây Nam Bộ, trung tâm kinh tế, giáo dục của vùng ĐBSCL, nổi tiếng với chợ nổi Cái Răng và văn hóa Khmer Sóc Trăng.",
    culture: [
      "Thủ phủ miền Tây với lối sống sông nước sầm uất và hào sảng.",
      "Văn hóa Khmer Sóc Trăng với lễ hội Oóc Om Bóc và đua ghe ngo truyền thống.",
      "Sự đa dạng tôn giáo và tín ngưỡng với nhiều ngôi chùa cổ kính, linh thiêng."
    ],
    economy: [
      "Trung tâm thương mại, dịch vụ, giáo dục và y tế của vùng ĐBSCL.",
      "Phát triển mạnh công nghiệp chế biến lương thực, thực phẩm và thủy sản.",
      "Du lịch sông nước (chợ nổi) và du lịch văn hóa Khmer là thế mạnh."
    ],
    climate: "Nhiệt đới gió mùa, ôn hòa.",
    food: [
      {
        name: "Bánh xèo miền Tây",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/B%C3%A1nh_x%C3%A8o_with_n%C6%B0%E1%BB%9Bc_m%E1%BA%AFm.jpg/960px-B%C3%A1nh_x%C3%A8o_with_n%C6%B0%E1%BB%9Bc_m%E1%BA%AFm.jpg"
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/M%E1%BB%99t_c%E1%BA%A3nh_%E1%BB%9F_ch%E1%BB%A3_n%E1%BB%95i_C%C3%A1i_R%C4%83ng.jpg/960px-M%E1%BB%99t_c%E1%BA%A3nh_%E1%BB%9F_ch%E1%BB%A3_n%E1%BB%95i_C%C3%A1i_R%C4%83ng.jpg",
        videoUrl: "https://www.youtube.com/watch?v=5_b_2n-P33w"
      },
      {
        name: "Chùa Dơi",
        lat: 9.58,
        lng: 105.97,
        highlights: "Ngôi chùa Khmer cổ kính với đàn dơi khổng lồ.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Ch%C3%B9a_D%C6%A1i_%2845715215502%29.jpg/960px-Ch%C3%B9a_D%C6%A1i_%2845715215502%29.jpg"
      }
    ],
    lat: 10.0333,
    lng: 105.7833,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Ch%C3%B9a_D%C6%A1i_%2845715215502%29.jpg/960px-Ch%C3%B9a_D%C6%A1i_%2845715215502%29.jpg"
  },
  "An Giang - Kiên Giang": {
    name: "Kiên Giang (An Giang + Kiên Giang)",
    location: "Việt Nam",
    area: "9.800 km²",
    population: "3.600.000 người",
    description: "Vùng đất đa dạng địa hình từ núi non Thất Sơn huyền bí đến đảo ngọc Phú Quốc tuyệt đẹp trên vịnh Thái Lan.",
    culture: [
      "Giao thoa văn hóa Việt, Hoa, Khmer, Chăm tạo nên bản sắc đa dạng.",
      "Tín ngưỡng thờ Bà Chúa Xứ núi Sam linh thiêng, thu hút hàng triệu khách hành hương.",
      "Văn hóa biển đảo Phú Quốc với các nghề truyền thống như làm nước mắm, nuôi ngọc trai."
    ],
    economy: [
      "Du lịch biển đảo (Phú Quốc) và du lịch tâm linh (Châu Đốc) là mũi nhọn kinh tế.",
      "Sản xuất lúa gạo hàng đầu cả nước và phát triển mạnh nuôi trồng thủy sản.",
      "Kinh tế biên mậu phát triển sôi động qua các cửa khẩu với Campuchia."
    ],
    climate: "Nhiệt đới gió mùa, Phú Quốc có khí hậu biển đảo ôn hòa.",
    food: [
      {
        name: "Bún cá Châu Đốc",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Saigon_Pho_with_pork.jpg/960px-Saigon_Pho_with_pork.jpg"
      },
      {
        name: "Gỏi cá trích Phú Quốc",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Saigon_Pho_with_pork.jpg/960px-Saigon_Pho_with_pork.jpg"
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Mieuba2.jpg/960px-Mieuba2.jpg"
  },
  "Bạc Liêu - Cà Mau": {
    name: "Cà Mau (Bạc Liêu + Cà Mau)",
    location: "Việt Nam",
    area: "7.900 km²",
    population: "2.100.000 người",
    description: "Vùng đất cực Nam của Tổ quốc, nổi tiếng với rừng ngập mặn U Minh, mũi Cà Mau và giai thoại Công tử Bạc Liêu.",
    culture: [
      "Văn hóa đờn ca tài tử Nam Bộ gắn liền với giai thoại Công tử Bạc Liêu.",
      "Văn hóa rừng ngập mặn U Minh và lối sống của cư dân vùng đất mũi.",
      "Các lễ hội truyền thống của người Khmer và người Hoa đặc sắc."
    ],
    economy: [
      "Nuôi trồng và xuất khẩu thủy sản (đặc biệt là tôm) đứng đầu cả nước.",
      "Phát triển mạnh năng lượng sạch (điện gió, điện mặt trời) ven biển.",
      "Du lịch sinh thái rừng ngập mặn và du lịch văn hóa - lịch sử."
    ],
    climate: "Nhiệt đới gió mùa cận xích đạo.",
    food: [
      {
        name: "Cua Cà Mau",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Tuongdaimuicamau.jpg/960px-Tuongdaimuicamau.jpg"
      },
      {
        name: "Lẩu mắm",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Day177lilybday.JPG/960px-Day177lilybday.JPG"
      }
    ],
    attractions: [
      {
        name: "Mũi Cà Mau",
        lat: 8.6,
        lng: 104.73,
        highlights: "Điểm cực Nam trên đất liền của Việt Nam.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Tuongdaimuicamau.jpg/960px-Tuongdaimuicamau.jpg"
      },
      {
        name: "Cánh đồng quạt gió",
        lat: 9.23,
        lng: 105.73,
        highlights: "Cánh đồng điện gió trên biển lớn nhất Việt Nam.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/KamowK32A.jpg/960px-KamowK32A.jpg"
      }
    ],
    lat: 9.1833,
    lng: 105.15,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/KamowK32A.jpg/960px-KamowK32A.jpg"
  },
};

export function getProvinceData(name: string): Province | null {
  return provincesData[name] || null;
}

export function getAllProvinces(): Province[] {
  return Object.values(provincesData);
}
