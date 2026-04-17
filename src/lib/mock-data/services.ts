import type { Service, ServiceDetail } from "@/lib/types";

export const mockServices: Service[] = [
  {
    id: 1,
    name: "Chụp X-Quang toàn hàm",
    slug: "chup-x-quang-toan-ham",
    description: "Chụp X-Quang kỹ thuật số toàn hàm giúp bác sĩ chẩn đoán chính xác tình trạng răng miệng.",
    imageUrl: "/images/services-img-1.jpg",
    priceRange: "200.000đ - 500.000đ",
    promotion: null,
    features: ["Hình ảnh kỹ thuật số chất lượng cao", "Liều phóng xạ thấp", "Kết quả nhanh trong 5 phút", "Phát hiện sớm các vấn đề tiềm ẩn"],
    featured: true,
    order: 1,
  },
  {
    id: 2,
    name: "Trám răng thẩm mỹ",
    slug: "tram-rang-tham-my",
    description: "Phục hồi răng sâu, răng mẻ với vật liệu composite thẩm mỹ cao cấp, tự nhiên như răng thật.",
    imageUrl: "/images/services-img-2.jpg",
    priceRange: "300.000đ - 1.500.000đ",
    promotion: null,
    features: ["Vật liệu composite cao cấp", "Màu sắc tự nhiên như răng thật", "Bền đẹp lâu dài", "Không đau, không ê buốt"],
    featured: true,
    order: 2,
  },
  {
    id: 3,
    name: "Cạo vôi răng và đánh bóng",
    slug: "cao-voi-rang-va-danh-bong",
    description: "Loại bỏ cao răng, mảng bám và đánh bóng bề mặt răng, giúp răng sạch sẽ và sáng bóng.",
    imageUrl: "/images/services-img-3.jpg",
    priceRange: "200.000đ - 500.000đ",
    promotion: null,
    features: ["Loại bỏ hoàn toàn cao răng", "Đánh bóng bề mặt răng", "Ngăn ngừa viêm nướu", "Hơi thở thơm mát"],
    featured: true,
    order: 3,
  },
  {
    id: 4,
    name: "Lấy tủy răng cửa",
    slug: "lay-tuy-rang-cua",
    description: "Điều trị tủy răng cửa bị viêm hoặc hoại tử, bảo tồn răng thật và giảm đau hiệu quả.",
    imageUrl: "/images/services-img-4.jpg",
    priceRange: "1.000.000đ - 3.000.000đ",
    promotion: null,
    features: ["Bảo tồn răng thật tối đa", "Giảm đau nhanh chóng", "Kỹ thuật hiện đại", "Tỷ lệ thành công cao"],
    featured: true,
    order: 4,
  },
  {
    id: 5,
    name: "Niềng răng trong suốt",
    slug: "nieng-rang-trong-suot",
    description: "Chỉnh nha thẩm mỹ với khay niềng trong suốt, không mắc cài, thoải mái và thẩm mỹ.",
    imageUrl: "/images/services-img-5.jpg",
    priceRange: "30.000.000đ - 80.000.000đ",
    promotion: null,
    features: ["Khay trong suốt gần như vô hình", "Tháo lắp dễ dàng", "Ít đau hơn niềng truyền thống", "Kết quả chính xác với công nghệ 3D"],
    featured: false,
    order: 5,
  },
  {
    id: 6,
    name: "Trồng răng Implant",
    slug: "trong-rang-implant",
    description: "Phục hình răng đã mất bằng trụ Implant titanium, bền vững và tự nhiên như răng thật.",
    imageUrl: "/images/services-img-6.jpg",
    priceRange: "15.000.000đ - 45.000.000đ",
    promotion: null,
    features: ["Trụ Implant titanium cao cấp", "Bền vững suốt đời", "Thẩm mỹ tự nhiên", "Không ảnh hưởng răng bên cạnh"],
    featured: false,
    order: 6,
  },
  {
    id: 7,
    name: "Bọc răng sứ",
    slug: "boc-rang-su",
    description: "Phục hình thẩm mỹ với răng sứ cao cấp, cải thiện hình dáng và màu sắc răng hoàn hảo.",
    imageUrl: "/images/services-img-7.jpg",
    priceRange: "3.000.000đ - 12.000.000đ",
    promotion: null,
    features: ["Răng sứ cao cấp nhiều loại", "Thẩm mỹ hoàn hảo", "Độ bền cao", "Bảo hành dài hạn"],
    featured: false,
    order: 7,
  },
  {
    id: 8,
    name: "Tẩy trắng răng",
    slug: "tay-trang-rang",
    description: "Làm trắng răng an toàn với công nghệ Laser, giúp răng trắng sáng lên nhiều tông màu.",
    imageUrl: "/images/services-img-8.jpg",
    priceRange: "2.000.000đ - 5.000.000đ",
    promotion: null,
    features: ["Công nghệ Laser hiện đại", "An toàn cho men răng", "Trắng sáng lên 5-8 tông", "Hiệu quả kéo dài"],
    featured: false,
    order: 8,
  },
];

const baseServiceDetail = {
  gallery: [
    { url: "/images/services-img-1.jpg", alt: "Hình ảnh dịch vụ 1" },
    { url: "/images/services-img-2.jpg", alt: "Hình ảnh dịch vụ 2" },
  ],
  faqs: [
    { question: "Thời gian điều trị bao lâu?", answer: "Thời gian điều trị tùy thuộc vào tình trạng cụ thể của từng bệnh nhân, thường từ 30 phút đến 2 giờ cho mỗi lần điều trị." },
    { question: "Có đau không?", answer: "Chúng tôi sử dụng kỹ thuật gây tê hiện đại, đảm bảo quá trình điều trị diễn ra nhẹ nhàng và thoải mái nhất cho bạn." },
    { question: "Chi phí điều trị như thế nào?", answer: "Chi phí phụ thuộc vào tình trạng răng miệng và phương pháp điều trị. Chúng tôi sẽ tư vấn chi tiết và báo giá cụ thể sau khi khám." },
  ],
};

export const mockServiceDetails: ServiceDetail[] = mockServices.map((service) => ({
  ...service,
  fullContent: `<p>${service.description}</p><p>Tại phòng khám Nha Khoa của chúng tôi, dịch vụ ${service.name} được thực hiện bởi đội ngũ bác sĩ giàu kinh nghiệm với trang thiết bị hiện đại nhất. Chúng tôi cam kết mang đến kết quả tốt nhất với chi phí hợp lý.</p><p>Quy trình điều trị được thiết kế để đảm bảo sự an toàn và thoải mái tối đa cho bệnh nhân. Mỗi ca điều trị đều được lên kế hoạch cẩn thận dựa trên kết quả chẩn đoán chi tiết.</p>`,
  gallery: baseServiceDetail.gallery,
  faqs: baseServiceDetail.faqs,
}));

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return mockServiceDetails.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return mockServices.map((s) => s.slug!);
}
