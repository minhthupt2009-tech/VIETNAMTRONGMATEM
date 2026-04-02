export interface Attraction {
  name: string;
  lat: number;
  lng: number;
  highlights: string;
}

export interface Province {
  name: string;
  location: string;
  area: string;
  population: string;
  description: string;
  culture: string;
  food: string[];
  attractions: Attraction[];
  lat: number;
  lng: number;
}

export const provincesData: Record<string, Province> = {
  "Lai Châu": {
    name: "Lai Châu",
    location: "Vùng Tây Bắc Bộ",
    area: "9.068 km²",
    population: "460.196 người",
    description: "Tỉnh/Thành phố Lai Châu là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Điện Biên": {
    name: "Điện Biên",
    location: "Vùng Tây Bắc Bộ",
    area: "9.541 km²",
    population: "598.856 người",
    description: "Tỉnh/Thành phố Điện Biên là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Sơn La": {
    name: "Sơn La",
    location: "Vùng Tây Bắc Bộ",
    area: "14.123 km²",
    population: "1.248.415 người",
    description: "Tỉnh/Thành phố Sơn La là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Lào Cai": {
    name: "Lào Cai",
    location: "Vùng Tây Bắc Bộ (Bao gồm Lào Cai, Yên Bái)",
    area: "13.248 km²",
    population: "1.558.000 người",
    description: "Tỉnh/Thành phố Lào Cai là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Hà Giang": {
    name: "Hà Giang",
    location: "Vùng Đông Bắc Bộ",
    area: "7.929 km²",
    population: "854.679 người",
    description: "Tỉnh/Thành phố Hà Giang là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Tuyên Quang": {
    name: "Tuyên Quang",
    location: "Vùng Đông Bắc Bộ",
    area: "5.867 km²",
    population: "784.811 người",
    description: "Tỉnh/Thành phố Tuyên Quang là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Cao Bằng": {
    name: "Cao Bằng",
    location: "Vùng Đông Bắc Bộ",
    area: "6.700 km²",
    population: "530.341 người",
    description: "Tỉnh/Thành phố Cao Bằng là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Lạng Sơn": {
    name: "Lạng Sơn",
    location: "Vùng Đông Bắc Bộ",
    area: "8.310 km²",
    population: "781.655 người",
    description: "Tỉnh/Thành phố Lạng Sơn là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Thái Nguyên": {
    name: "Thái Nguyên",
    location: "Vùng Đông Bắc Bộ (Bao gồm Thái Nguyên, Bắc Kạn)",
    area: "8.394 km²",
    population: "1.600.000 người",
    description: "Tỉnh/Thành phố Thái Nguyên là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Bắc Ninh": {
    name: "Bắc Ninh",
    location: "Vùng Đồng bằng sông Hồng (Bao gồm Bắc Ninh, Bắc Giang)",
    area: "4.723 km²",
    population: "3.200.000 người",
    description: "Tỉnh/Thành phố Bắc Ninh là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Quảng Ninh": {
    name: "Quảng Ninh",
    location: "Vùng Đông Bắc Bộ",
    area: "6.178 km²",
    population: "1.320.324 người",
    description: "Tỉnh/Thành phố Quảng Ninh là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Phú Thọ": {
    name: "Phú Thọ",
    location: "Vùng Đông Bắc Bộ (Bao gồm Phú Thọ, Vĩnh Phúc)",
    area: "4.771 km²",
    population: "2.600.000 người",
    description: "Tỉnh/Thành phố Phú Thọ là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Hà Nội": {
    name: "Hà Nội",
    location: "Vùng Đồng bằng sông Hồng (Bao gồm Hà Nội, Hòa Bình)",
    area: "7.966 km²",
    population: "9.300.000 người",
    description: "Tỉnh/Thành phố Hà Nội là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Hải Phòng": {
    name: "Hải Phòng",
    location: "Vùng Đồng bằng sông Hồng (Bao gồm Hải Phòng, Hải Dương, Hưng Yên, Thái Bình, Nam Định)",
    area: "6.830 km²",
    population: "6.500.000 người",
    description: "Tỉnh/Thành phố Hải Phòng là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Ninh Bình": {
    name: "Ninh Bình",
    location: "Vùng Đồng bằng sông Hồng (Bao gồm Ninh Bình, Hà Nam)",
    area: "2.242 km²",
    population: "1.850.000 người",
    description: "Tỉnh/Thành phố Ninh Bình là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Thanh Hóa": {
    name: "Thanh Hóa",
    location: "Vùng Bắc Trung Bộ",
    area: "11.120 km²",
    population: "3.640.128 người",
    description: "Tỉnh/Thành phố Thanh Hóa là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Nghệ An": {
    name: "Nghệ An",
    location: "Vùng Bắc Trung Bộ",
    area: "16.490 km²",
    population: "3.327.791 người",
    description: "Tỉnh/Thành phố Nghệ An là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Hà Tĩnh": {
    name: "Hà Tĩnh",
    location: "Vùng Bắc Trung Bộ",
    area: "5.990 km²",
    population: "1.288.866 người",
    description: "Tỉnh/Thành phố Hà Tĩnh là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Quảng Trị": {
    name: "Quảng Trị",
    location: "Vùng Bắc Trung Bộ (Bao gồm Quảng Bình, Quảng Trị)",
    area: "12.796 km²",
    population: "1.550.000 người",
    description: "Tỉnh/Thành phố Quảng Trị là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "TP. Huế": {
    name: "TP. Huế",
    location: "Vùng Bắc Trung Bộ (Thừa Thiên Huế)",
    area: "5.048 km²",
    population: "1.128.120 người",
    description: "Tỉnh/Thành phố TP. Huế là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "TP. Đà Nẵng": {
    name: "TP. Đà Nẵng",
    location: "Vùng Nam Trung Bộ (Bao gồm Đà Nẵng, Quảng Nam)",
    area: "11.711 km²",
    population: "2.700.000 người",
    description: "Tỉnh/Thành phố TP. Đà Nẵng là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Quảng Ngãi": {
    name: "Quảng Ngãi",
    location: "Vùng Nam Trung Bộ",
    area: "5.155 km²",
    population: "1.231.697 người",
    description: "Tỉnh/Thành phố Quảng Ngãi là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Gia Lai": {
    name: "Gia Lai",
    location: "Vùng Tây Nguyên (Bao gồm Gia Lai, Kon Tum)",
    area: "25.216 km²",
    population: "2.100.000 người",
    description: "Tỉnh/Thành phố Gia Lai là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Đắk Lắk": {
    name: "Đắk Lắk",
    location: "Vùng Tây Nguyên (Bao gồm Đắk Lắk, Đắk Nông)",
    area: "19.599 km²",
    population: "2.500.000 người",
    description: "Tỉnh/Thành phố Đắk Lắk là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Lâm Đồng": {
    name: "Lâm Đồng",
    location: "Vùng Tây Nguyên",
    area: "9.783 km²",
    population: "1.296.906 người",
    description: "Tỉnh/Thành phố Lâm Đồng là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Khánh Hòa": {
    name: "Khánh Hòa",
    location: "Vùng Nam Trung Bộ (Bao gồm Bình Định, Phú Yên, Khánh Hòa, Ninh Thuận)",
    area: "16.920 km²",
    population: "3.800.000 người",
    description: "Tỉnh/Thành phố Khánh Hòa là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Đồng Nai": {
    name: "Đồng Nai",
    location: "Vùng Đông Nam Bộ (Bao gồm Đồng Nai, Bình Thuận, Bà Rịa - Vũng Tàu)",
    area: "12.780 km²",
    population: "5.500.000 người",
    description: "Tỉnh/Thành phố Đồng Nai là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Tây Ninh": {
    name: "Tây Ninh",
    location: "Vùng Đông Nam Bộ (Bao gồm Tây Ninh, Bình Phước)",
    area: "10.912 km²",
    population: "2.100.000 người",
    description: "Tỉnh/Thành phố Tây Ninh là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "TP. Hồ Chí Minh": {
    name: "TP. Hồ Chí Minh",
    location: "Vùng Đông Nam Bộ (Bao gồm TP. Hồ Chí Minh, Bình Dương)",
    area: "4.755 km²",
    population: "11.500.000 người",
    description: "Tỉnh/Thành phố TP. Hồ Chí Minh là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Long An": {
    name: "Long An",
    location: "Vùng Đồng bằng sông Cửu Long",
    area: "4.494 km²",
    population: "1.688.547 người",
    description: "Tỉnh/Thành phố Long An là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Đồng Tháp mới": {
    name: "Đồng Tháp mới",
    location: "Vùng Đồng bằng sông Cửu Long (Bao gồm Đồng Tháp, Tiền Giang)",
    area: "5.890 km²",
    population: "3.350.000 người",
    description: "Tỉnh/Thành phố Đồng Tháp mới là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "An Giang": {
    name: "An Giang",
    location: "Vùng Đồng bằng sông Cửu Long",
    area: "3.536 km²",
    population: "1.908.352 người",
    description: "Tỉnh/Thành phố An Giang là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "TP. Cần Thơ": {
    name: "TP. Cần Thơ",
    location: "Vùng Đồng bằng sông Cửu Long (Bao gồm Cần Thơ, Hậu Giang, Sóc Trăng, Trà Vinh, Vĩnh Long, Bến Tre)",
    area: "14.500 km²",
    population: "6.800.000 người",
    description: "Tỉnh/Thành phố TP. Cần Thơ là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
  "Cà Mau": {
    name: "Cà Mau",
    location: "Vùng Đồng bằng sông Cửu Long (Bao gồm Cà Mau, Kiên Giang, Bạc Liêu)",
    area: "14.300 km²",
    population: "3.900.000 người",
    description: "Tỉnh/Thành phố Cà Mau là một trong 34 đơn vị hành chính mới của Việt Nam, mang trong mình nhiều giá trị văn hóa, lịch sử và tiềm năng phát triển.",
    culture: "Văn hóa đa dạng, phong phú với nhiều lễ hội truyền thống và di tích lịch sử.",
    food: ["Đặc sản 1", "Đặc sản 2", "Đặc sản 3"],
    attractions: [
      { name: "Điểm du lịch trung tâm", lat: 16.0, lng: 106.0, highlights: "Điểm đến hấp dẫn với cảnh quan tuyệt đẹp." }
    ],
    lat: 16.0,
    lng: 106.0
  },
};

export const getProvinceData = (name: string): Province => {
  if (provincesData[name]) return provincesData[name];
  return {
    name,
    location: "Đang cập nhật",
    area: "Đang cập nhật",
    population: "Đang cập nhật",
    description: `Thông tin chi tiết về ${name} đang được cập nhật. Đây là một trong 34 tỉnh thành theo phân chia địa lý hành chính mới.`,
    culture: "Đang cập nhật",
    food: [],
    attractions: [],
    lat: 16,
    lng: 106
  };
};
