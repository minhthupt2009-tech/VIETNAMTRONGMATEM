import { Province } from './provinces';

export type QuestionType = 'MULTIPLE_CHOICE' | 'FILL_BLANK' | 'MATCHING';

export interface BaseQuestion {
  id: string;
  type: QuestionType;
  question: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'MULTIPLE_CHOICE';
  options: string[];
  correctAnswer: string;
}

export interface FillBlankQuestion extends BaseQuestion {
  type: 'FILL_BLANK';
  correctAnswers: string[];
}

export interface MatchingQuestion extends BaseQuestion {
  type: 'MATCHING';
  pairs: { left: string; right: string }[];
}

export type GameQuestion = MultipleChoiceQuestion | FillBlankQuestion | MatchingQuestion;

const generalQuestionBank: GameQuestion[] = [
  {
    id: 'g1',
    type: 'MULTIPLE_CHOICE',
    question: 'Theo bản đồ hành chính mới (34 tỉnh), "Đồng Tháp mới" được gộp từ những tỉnh nào trước đây?',
    options: ['Đồng Tháp, Tiền Giang', 'Đồng Tháp, An Giang', 'Đồng Tháp, Vĩnh Long', 'Đồng Tháp, Long An'],
    correctAnswer: 'Đồng Tháp, Tiền Giang'
  },
  {
    id: 'g2',
    type: 'FILL_BLANK',
    question: 'Điền tên tỉnh thích hợp: Tỉnh ________ bao gồm Bắc Ninh và Bắc Giang.',
    correctAnswers: ['Bắc Ninh', 'bắc ninh', 'Bac Ninh', 'bac ninh']
  },
  {
    id: 'g3',
    type: 'MATCHING',
    question: 'Ghép nối tên tỉnh (theo phân chia mới) với vùng địa lý tương ứng:',
    pairs: [
      { left: 'Hà Nội', right: 'Đồng bằng sông Hồng' },
      { left: 'Sơn La', right: 'Tây Bắc Bộ' },
      { left: 'Lâm Đồng', right: 'Tây Nguyên' },
      { left: 'Nghệ An', right: 'Bắc Trung Bộ' }
    ]
  },
  {
    id: 'g4',
    type: 'MULTIPLE_CHOICE',
    question: 'Tỉnh nào sau đây đại diện cho toàn bộ các tỉnh: Cần Thơ, Hậu Giang, Sóc Trăng, Trà Vinh, Vĩnh Long, Bến Tre?',
    options: ['Cà Mau', 'TP. Cần Thơ', 'Kiên Giang', 'Long An'],
    correctAnswer: 'TP. Cần Thơ'
  },
  {
    id: 'g5',
    type: 'FILL_BLANK',
    question: 'Tỉnh có diện tích lớn nhất vùng Tây Nguyên (bao gồm Gia Lai, Kon Tum) là tỉnh ________.',
    correctAnswers: ['Gia Lai', 'gia lai', 'Gia lai']
  },
  {
    id: 'g6',
    type: 'MULTIPLE_CHOICE',
    question: '"Hải Phòng" theo phân chia mới bao gồm những tỉnh thành nào?',
    options: [
      'Hải Phòng, Hải Dương, Hưng Yên, Thái Bình, Nam Định',
      'Hải Phòng, Quảng Ninh, Thái Bình',
      'Hải Phòng, Hải Dương, Bắc Ninh',
      'Hải Phòng, Nam Định, Ninh Bình'
    ],
    correctAnswer: 'Hải Phòng, Hải Dương, Hưng Yên, Thái Bình, Nam Định'
  },
  {
    id: 'g7',
    type: 'MULTIPLE_CHOICE',
    question: 'Tỉnh nào bao gồm Phú Thọ và Vĩnh Phúc?',
    options: ['Phú Thọ', 'Vĩnh Phúc', 'Tuyên Quang', 'Hà Nội'],
    correctAnswer: 'Phú Thọ'
  },
  {
    id: 'g8',
    type: 'FILL_BLANK',
    question: 'Tỉnh nào gộp Lào Cai và Yên Bái? (Nhập tên tỉnh)',
    correctAnswers: ['Lào Cai', 'lào cai', 'Lao Cai', 'lao cai']
  },
  {
    id: 'g9',
    type: 'MULTIPLE_CHOICE',
    question: '"Thái Nguyên" mới bao gồm Thái Nguyên và tỉnh nào?',
    options: ['Bắc Kạn', 'Lạng Sơn', 'Cao Bằng', 'Tuyên Quang'],
    correctAnswer: 'Bắc Kạn'
  },
  {
    id: 'g10',
    type: 'FILL_BLANK',
    question: 'Tỉnh nào gộp Hà Nam và Ninh Bình? (Nhập tên tỉnh)',
    correctAnswers: ['Ninh Bình', 'ninh bình', 'Ninh Binh', 'ninh binh']
  },
  {
    id: 'g11',
    type: 'MULTIPLE_CHOICE',
    question: '"Hà Nội" mới bao gồm thủ đô Hà Nội và tỉnh nào?',
    options: ['Hòa Bình', 'Hà Tây', 'Vĩnh Phúc', 'Bắc Ninh'],
    correctAnswer: 'Hòa Bình'
  },
  {
    id: 'g12',
    type: 'MULTIPLE_CHOICE',
    question: '"Quảng Trị" mới bao gồm Quảng Trị và tỉnh nào?',
    options: ['Quảng Bình', 'Thừa Thiên Huế', 'Hà Tĩnh', 'Quảng Nam'],
    correctAnswer: 'Quảng Bình'
  },
  {
    id: 'g13',
    type: 'MULTIPLE_CHOICE',
    question: '"TP. Đà Nẵng" mới bao gồm Đà Nẵng và tỉnh nào?',
    options: ['Quảng Nam', 'Quảng Ngãi', 'Thừa Thiên Huế', 'Bình Định'],
    correctAnswer: 'Quảng Nam'
  },
  {
    id: 'g14',
    type: 'MULTIPLE_CHOICE',
    question: '"Gia Lai" mới bao gồm Gia Lai và tỉnh nào?',
    options: ['Kon Tum', 'Đắk Lắk', 'Đắk Nông', 'Lâm Đồng'],
    correctAnswer: 'Kon Tum'
  },
  {
    id: 'g15',
    type: 'MULTIPLE_CHOICE',
    question: '"Đắk Lắk" mới bao gồm Đắk Lắk và tỉnh nào?',
    options: ['Đắk Nông', 'Gia Lai', 'Lâm Đồng', 'Kon Tum'],
    correctAnswer: 'Đắk Nông'
  },
  {
    id: 'g16',
    type: 'MULTIPLE_CHOICE',
    question: '"Khánh Hòa" mới bao gồm những tỉnh nào?',
    options: [
      'Bình Định, Phú Yên, Khánh Hòa, Ninh Thuận',
      'Khánh Hòa, Ninh Thuận, Bình Thuận',
      'Phú Yên, Khánh Hòa',
      'Khánh Hòa, Lâm Đồng'
    ],
    correctAnswer: 'Bình Định, Phú Yên, Khánh Hòa, Ninh Thuận'
  },
  {
    id: 'g17',
    type: 'MULTIPLE_CHOICE',
    question: '"Đồng Nai" mới bao gồm những tỉnh nào?',
    options: [
      'Đồng Nai, Bình Thuận, Bà Rịa - Vũng Tàu',
      'Đồng Nai, Bình Dương, Bình Phước',
      'Đồng Nai, Tây Ninh',
      'Đồng Nai, Lâm Đồng, Bình Thuận'
    ],
    correctAnswer: 'Đồng Nai, Bình Thuận, Bà Rịa - Vũng Tàu'
  },
  {
    id: 'g18',
    type: 'MULTIPLE_CHOICE',
    question: '"Tây Ninh" mới bao gồm Tây Ninh và tỉnh nào?',
    options: ['Bình Phước', 'Bình Dương', 'Long An', 'Đồng Nai'],
    correctAnswer: 'Bình Phước'
  },
  {
    id: 'g19',
    type: 'MULTIPLE_CHOICE',
    question: '"TP. Hồ Chí Minh" mới bao gồm TP. Hồ Chí Minh và tỉnh nào?',
    options: ['Bình Dương', 'Long An', 'Đồng Nai', 'Tây Ninh'],
    correctAnswer: 'Bình Dương'
  },
  {
    id: 'g20',
    type: 'MULTIPLE_CHOICE',
    question: '"Cà Mau" mới bao gồm những tỉnh nào?',
    options: [
      'Cà Mau, Kiên Giang, Bạc Liêu',
      'Cà Mau, Bạc Liêu, Sóc Trăng',
      'Cà Mau, Kiên Giang, An Giang',
      'Cà Mau, Hậu Giang'
    ],
    correctAnswer: 'Cà Mau, Kiên Giang, Bạc Liêu'
  },
  {
    id: 'g21',
    type: 'MULTIPLE_CHOICE',
    question: 'Tỉnh nào sau đây KHÔNG bị gộp chung với tỉnh khác trong 34 tỉnh mới?',
    options: ['Thanh Hóa', 'Hà Nam', 'Hòa Bình', 'Bắc Giang'],
    correctAnswer: 'Thanh Hóa'
  },
  {
    id: 'g22',
    type: 'FILL_BLANK',
    question: 'Điền tên tỉnh: Tỉnh ________ mới bao gồm Bình Định, Phú Yên, Khánh Hòa, Ninh Thuận.',
    correctAnswers: ['Khánh Hòa', 'khánh hòa', 'Khanh Hoa', 'khanh hoa']
  },
  {
    id: 'g23',
    type: 'FILL_BLANK',
    question: 'Điền tên tỉnh: Tỉnh ________ mới bao gồm Đồng Nai, Bình Thuận, Bà Rịa - Vũng Tàu.',
    correctAnswers: ['Đồng Nai', 'đồng nai', 'Dong Nai', 'dong nai']
  },
  {
    id: 'g24',
    type: 'MATCHING',
    question: 'Ghép nối các tỉnh gộp (theo phân chia 34 tỉnh):',
    pairs: [
      { left: 'TP. Hồ Chí Minh', right: 'gộp Bình Dương' },
      { left: 'Hà Nội', right: 'gộp Hòa Bình' },
      { left: 'Gia Lai', right: 'gộp Kon Tum' },
      { left: 'Đắk Lắk', right: 'gộp Đắk Nông' }
    ]
  },
  {
    id: 'g25',
    type: 'MATCHING',
    question: 'Ghép nối các tỉnh gộp ở miền Nam và miền Trung:',
    pairs: [
      { left: 'Cà Mau', right: 'gộp Kiên Giang, Bạc Liêu' },
      { left: 'Tây Ninh', right: 'gộp Bình Phước' },
      { left: 'Đà Nẵng', right: 'gộp Quảng Nam' },
      { left: 'Quảng Trị', right: 'gộp Quảng Bình' }
    ]
  }
];

export const getGeneralQuestions = (count: number = 5): GameQuestion[] => {
  const shuffled = [...generalQuestionBank].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

export const getProvinceQuestions = (province: Province, count: number = 5): GameQuestion[] => {
  const questions: GameQuestion[] = [];

  // 1. Location
  const allLocations = [
    "Vùng Tây Bắc Bộ", "Vùng Đông Bắc Bộ", "Vùng Đồng bằng sông Hồng", 
    "Vùng Bắc Trung Bộ", "Vùng Nam Trung Bộ", "Vùng Tây Nguyên", 
    "Vùng Đông Nam Bộ", "Vùng Đồng bằng sông Cửu Long"
  ];
  const wrongLocations = allLocations.filter(loc => !province.location.includes(loc)).sort(() => 0.5 - Math.random());
  
  questions.push({
    id: `p_q1_${province.name}`,
    type: 'MULTIPLE_CHOICE',
    question: `Về mặt địa lý, ${province.name} nằm ở khu vực nào?`,
    options: [province.location, ...wrongLocations.slice(0, 3)].sort(() => 0.5 - Math.random()),
    correctAnswer: province.location
  });

  // 2. Area
  const wrongAreas = ["1.200 km²", "5.000 km²", "10.000 km²", "15.000 km²", "20.000 km²", "8.000 km²"].filter(a => a !== province.area).sort(() => 0.5 - Math.random());
  questions.push({
    id: `p_q2_${province.name}`,
    type: 'MULTIPLE_CHOICE',
    question: `Diện tích của ${province.name} khoảng bao nhiêu?`,
    options: [province.area, ...wrongAreas.slice(0, 3)].sort(() => 0.5 - Math.random()),
    correctAnswer: province.area
  });

  // 3. Population
  const wrongPops = ["1 triệu người", "2,5 triệu người", "500.000 người", "3 triệu người", "1,5 triệu người"].filter(p => p !== province.population).sort(() => 0.5 - Math.random());
  questions.push({
    id: `p_q3_${province.name}`,
    type: 'MULTIPLE_CHOICE',
    question: `Dân số của ${province.name} khoảng bao nhiêu?`,
    options: [province.population, ...wrongPops.slice(0, 3)].sort(() => 0.5 - Math.random()),
    correctAnswer: province.population
  });

  // 4. Food 1
  if (province.food && province.food.length > 0) {
    const foodName = province.food[0].name;
    const wrongFoods = ["Phở Hà Nội", "Bún bò Huế", "Mì Quảng", "Bánh xèo miền Tây", "Cơm tấm Sài Gòn", "Chả cá Lã Vọng", "Bún chả", "Gỏi cuốn"].filter(f => f !== foodName).sort(() => 0.5 - Math.random());
    questions.push({
      id: `p_q4_${province.name}`,
      type: 'MULTIPLE_CHOICE',
      question: `Đâu là một trong những món ăn đặc sản của ${province.name}?`,
      options: [foodName, ...wrongFoods.slice(0, 3)].sort(() => 0.5 - Math.random()),
      correctAnswer: foodName
    });
  }

  // 5. Food 2
  if (province.food && province.food.length > 1) {
    const foodName = province.food[1].name;
    questions.push({
      id: `p_q5_${province.name}`,
      type: 'FILL_BLANK',
      question: `Điền tên món ăn: Một đặc sản khác của ${province.name} là ________.`,
      correctAnswers: [foodName, foodName.toLowerCase()]
    });
  }

  // 6. Attractions Matching
  if (province.attractions && province.attractions.length >= 2) {
    const pairs = province.attractions.slice(0, 4).map(a => ({
      left: a.name,
      right: a.highlights.length > 60 ? a.highlights.substring(0, 60) + '...' : a.highlights
    }));
    questions.push({
      id: `p_q6_${province.name}`,
      type: 'MATCHING',
      question: `Ghép nối địa điểm du lịch ở ${province.name} với đặc điểm tương ứng:`,
      pairs
    });
  }

  // 7. Attraction MC
  if (province.attractions && province.attractions.length > 0) {
    const attr = province.attractions[0].name;
    const wrongAttrs = ["Vịnh Hạ Long", "Phố cổ Hội An", "Địa đạo Củ Chi", "Phong Nha - Kẻ Bàng", "Bà Nà Hills", "Vinpearl Land"].filter(a => a !== attr).sort(() => 0.5 - Math.random());
    questions.push({
      id: `p_q7_${province.name}`,
      type: 'MULTIPLE_CHOICE',
      question: `Địa điểm du lịch nào sau đây thuộc ${province.name}?`,
      options: [attr, ...wrongAttrs.slice(0, 3)].sort(() => 0.5 - Math.random()),
      correctAnswer: attr
    });
  }

  // 8. True/False Area
  questions.push({
    id: `p_q8_${province.name}`,
    type: 'MULTIPLE_CHOICE',
    question: `Nhận định sau đúng hay sai: Diện tích của ${province.name} là ${province.area}?`,
    options: ['Đúng', 'Sai'],
    correctAnswer: 'Đúng'
  });

  // 9. True/False Population
  const fakePop = wrongPops[0];
  questions.push({
    id: `p_q9_${province.name}`,
    type: 'MULTIPLE_CHOICE',
    question: `Nhận định sau đúng hay sai: Dân số của ${province.name} là ${fakePop}?`,
    options: ['Đúng', 'Sai'],
    correctAnswer: 'Sai'
  });

  // 10. Fill Blank Province Name
  questions.push({
    id: `p_q10_${province.name}`,
    type: 'FILL_BLANK',
    question: `Tỉnh/Thành phố đang được nhắc đến có tên là gì? (Gợi ý: Thuộc ${province.location})`,
    correctAnswers: [province.name, province.name.toLowerCase()]
  });

  // 11. Culture
  if (province.culture && province.culture.length > 0) {
    const culturePoint = province.culture[0];
    questions.push({
      id: `p_q11_${province.name}`,
      type: 'MULTIPLE_CHOICE',
      question: `Đặc điểm văn hóa nào sau đây gắn liền với ${province.name}?`,
      options: [
        culturePoint.length > 80 ? culturePoint.substring(0, 80) + '...' : culturePoint,
        "Văn hóa cồng chiêng Tây Nguyên",
        "Nhã nhạc cung đình Huế",
        "Đờn ca tài tử Nam Bộ"
      ].filter((v, i, a) => a.indexOf(v) === i).sort(() => 0.5 - Math.random()).slice(0, 4),
      correctAnswer: culturePoint.length > 80 ? culturePoint.substring(0, 80) + '...' : culturePoint
    });
  }

  // 12. Food 3
  if (province.food && province.food.length > 2) {
    const food = province.food[2];
    questions.push({
      id: `p_q12_${province.name}`,
      type: 'MULTIPLE_CHOICE',
      question: `Món "${food}" là đặc sản của tỉnh nào?`,
      options: [province.name, "Hà Nội", "TP. Hồ Chí Minh", "Đà Nẵng"].sort(() => 0.5 - Math.random()),
      correctAnswer: province.name
    });
  }

  // 13. Attraction 2
  if (province.attractions && province.attractions.length > 1) {
    const attr = province.attractions[1].name;
    questions.push({
      id: `p_q13_${province.name}`,
      type: 'FILL_BLANK',
      question: `Điền tên địa danh: Một điểm du lịch nổi tiếng khác ở ${province.name} là ________.`,
      correctAnswers: [attr, attr.toLowerCase()]
    });
  }

  // 14. Location True/False
  const fakeLoc = wrongLocations[0];
  questions.push({
    id: `p_q14_${province.name}`,
    type: 'MULTIPLE_CHOICE',
    question: `Nhận định sau đúng hay sai: ${province.name} nằm ở ${fakeLoc}?`,
    options: ['Đúng', 'Sai'],
    correctAnswer: 'Sai'
  });

  // 15. General Knowledge
  questions.push({
    id: `p_q15_${province.name}`,
    type: 'MULTIPLE_CHOICE',
    question: `${province.name} là một trong bao nhiêu đơn vị hành chính theo phân chia mới?`,
    options: ['34', '63', '64', '32'],
    correctAnswer: '34'
  });

  // 16-25: Pad with general questions if needed to reach the requested count
  const shuffled = questions.sort(() => 0.5 - Math.random());
  
  if (shuffled.length < count) {
    const extraNeeded = count - shuffled.length;
    const generalQs = getGeneralQuestions(extraNeeded);
    return [...shuffled, ...generalQs];
  }

  return shuffled.slice(0, count);
};
