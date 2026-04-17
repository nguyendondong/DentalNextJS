import type { BlogPost, BlogDetail } from "@/lib/types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Tầm Quan Trọng Của Việc Kiểm Tra Răng Định Kỳ",
    slug: "tam-quan-trong-cua-kiem-tra-rang-dinh-ky",
    excerpt: "Kiểm tra răng định kỳ giúp phát hiện sớm các vấn đề về răng miệng và ngăn ngừa các biến chứng nghiêm trọng...",
    imageUrl: "/images/post-1.jpg",
    author: "Dr. Hà Trần",
    publishedAt: "2024-01-15",
    tags: ["nha-khoa", "phong-ngua"],
    category: "Sức Khỏe Răng Miệng",
  },
  {
    id: "2",
    title: "Top 5 Lợi Ích Của Tẩy Trắng Răng Chuyên Nghiệp",
    slug: "loi-ich-tay-trang-rang-chuyen-nghiep",
    excerpt: "Tẩy trắng răng chuyên nghiệp không chỉ mang lại hàm răng sáng bóng mà còn giúp tăng sự tự tin trong cuộc sống...",
    imageUrl: "/images/post-2.jpg",
    author: "Dr. Minh Nguyễn",
    publishedAt: "2024-01-22",
    tags: ["tham-my", "tay-trang"],
    category: "Thẩm Mỹ Nha Khoa",
  },
  {
    id: "3",
    title: "Cấy Ghép Implant Nha Khoa: Những Điều Bạn Cần Biết",
    slug: "cay-ghep-implant-nha-khoa",
    excerpt: "Implant nha khoa là giải pháp thay thế răng hiện đại và bền vững nhất hiện nay. Tìm hiểu quy trình và lợi ích của phương pháp này...",
    imageUrl: "/images/post-3.jpg",
    author: "Dr. Lan Phạm",
    publishedAt: "2024-02-05",
    tags: ["implant", "rang-gia"],
    category: "Phục Hình Răng",
  },
  {
    id: "4",
    title: "Vai Trò Của Fluor Trong Việc Bảo Vệ Men Răng",
    slug: "vai-tro-cua-fluor-trong-bao-ve-men-rang",
    excerpt: "Fluor là khoáng chất thiết yếu giúp bảo vệ men răng khỏi sâu răng và tăng cường sức đề kháng của răng...",
    imageUrl: "/images/post-4.jpg",
    author: "Dr. Hà Trần",
    publishedAt: "2024-02-12",
    tags: ["phong-ngua", "men-rang"],
    category: "Sức Khỏe Răng Miệng",
  },
  {
    id: "5",
    title: "Ê Buốt Răng: Nguyên Nhân, Điều Trị Và Phòng Ngừa",
    slug: "e-buot-rang-nguyen-nhan-dieu-tri-phong-ngua",
    excerpt: "Ê buốt răng là triệu chứng phổ biến ảnh hưởng đến chất lượng cuộc sống. Hiểu rõ nguyên nhân để điều trị hiệu quả...",
    imageUrl: "/images/post-5.jpg",
    author: "Dr. Minh Nguyễn",
    publishedAt: "2024-02-20",
    tags: ["e-buot", "dieu-tri"],
    category: "Điều Trị Nha Khoa",
  },
  {
    id: "6",
    title: "Lợi Ích Của Cấy Ghép Implant: Phục Hồi Chức Năng Nhai",
    slug: "loi-ich-cay-ghep-implant-phuc-hoi-chuc-nang-nhai",
    excerpt: "Implant không chỉ giúp phục hồi thẩm mỹ mà còn mang lại chức năng nhai tự nhiên như răng thật...",
    imageUrl: "/images/post-6.jpg",
    author: "Dr. Lan Phạm",
    publishedAt: "2024-03-01",
    tags: ["implant", "phuc-hoi"],
    category: "Phục Hình Răng",
  },
  {
    id: "7",
    title: "Tầm Quan Trọng Của Chỉ Nha Khoa: Kỹ Thuật Và Lợi Ích",
    slug: "tam-quan-trong-cua-chi-nha-khoa",
    excerpt: "Chỉ nha khoa là công cụ vệ sinh răng miệng không thể thiếu, giúp làm sạch những vùng bàn chải không thể với tới...",
    imageUrl: "/images/post-7.jpg",
    author: "Dr. Hà Trần",
    publishedAt: "2024-03-10",
    tags: ["ve-sinh", "phong-ngua"],
    category: "Sức Khỏe Răng Miệng",
  },
  {
    id: "8",
    title: "Chỉnh Nha Invisalign: Nụ Cười Hoàn Hảo Không Cần Mắc Cài",
    slug: "chinh-nha-invisalign",
    excerpt: "Invisalign là phương pháp chỉnh nha hiện đại với máng trong suốt, giúp bạn có hàm răng đều đẹp mà không cần mắc cài kim loại...",
    imageUrl: "/images/post-8.jpg",
    author: "Dr. Minh Nguyễn",
    publishedAt: "2024-03-18",
    tags: ["chinh-nha", "invisalign"],
    category: "Chỉnh Nha",
  },
  {
    id: "9",
    title: "Dinh Dưỡng Và Sức Khỏe Răng Miệng: Thực Phẩm Nên Ăn Và Tránh",
    slug: "dinh-duong-va-suc-khoe-rang-mieng",
    excerpt: "Chế độ ăn uống đóng vai trò quan trọng trong việc duy trì sức khỏe răng miệng. Khám phá các thực phẩm tốt và có hại cho răng...",
    imageUrl: "/images/post-9.jpg",
    author: "Dr. Lan Phạm",
    publishedAt: "2024-03-25",
    tags: ["dinh-duong", "suc-khoe"],
    category: "Sức Khỏe Răng Miệng",
  },
];

export const blogDetails: Record<string, BlogDetail> = {
  "tam-quan-trong-cua-kiem-tra-rang-dinh-ky": {
    ...blogPosts[0],
    content: `<p>Việc kiểm tra răng định kỳ là một trong những thói quen quan trọng nhất để bảo vệ sức khỏe răng miệng lâu dài. Nhiều người thường bỏ qua lịch khám định kỳ vì không có triệu chứng đau hoặc khó chịu, nhưng đây là sai lầm phổ biến.</p>
<h2>Tại Sao Cần Kiểm Tra Định Kỳ?</h2>
<p>Nhiều bệnh về răng miệng, bao gồm sâu răng giai đoạn đầu và bệnh nha chu, thường không có triệu chứng rõ ràng cho đến khi đã tiến triển nặng. Khám định kỳ giúp phát hiện sớm các vấn đề này trước khi chúng trở nên nghiêm trọng và tốn kém hơn để điều trị.</p>
<h2>Những Gì Diễn Ra Trong Một Lần Khám?</h2>
<ul>
  <li>Kiểm tra toàn diện răng, nướu và các mô mềm trong miệng</li>
  <li>Chụp X-quang để phát hiện vấn đề ẩn dưới bề mặt</li>
  <li>Lấy cao răng và làm sạch chuyên nghiệp</li>
  <li>Tư vấn về kỹ thuật vệ sinh răng miệng đúng cách</li>
</ul>
<h2>Tần Suất Khám Răng Được Khuyến Nghị</h2>
<p>Đối với hầu hết người lớn, khám răng 6 tháng một lần là lý tưởng. Tuy nhiên, những người có nguy cơ cao hơn như người mắc bệnh tiểu đường, người hút thuốc hoặc người có tiền sử bệnh nha chu có thể cần khám thường xuyên hơn.</p>
<p>Đừng chờ đến khi có triệu chứng mới đến khám. Phòng ngừa luôn tốt hơn điều trị!</p>`,
    relatedPosts: [blogPosts[1], blogPosts[2]],
  },
  "loi-ich-tay-trang-rang-chuyen-nghiep": {
    ...blogPosts[1],
    content: `<p>Tẩy trắng răng chuyên nghiệp là một trong những phương pháp thẩm mỹ nha khoa được yêu cầu nhiều nhất. Không giống như các sản phẩm tẩy trắng tại nhà, tẩy trắng chuyên nghiệp mang lại kết quả nhanh chóng, an toàn và lâu dài hơn.</p>
<h2>5 Lợi Ích Hàng Đầu</h2>
<ul>
  <li><strong>Kết quả nhanh chóng:</strong> Chỉ trong một buổi điều trị, răng có thể sáng hơn từ 6-10 tông màu</li>
  <li><strong>An toàn và được kiểm soát:</strong> Bác sĩ giám sát toàn bộ quá trình, bảo vệ nướu và mô mềm</li>
  <li><strong>Kết quả bền lâu:</strong> Hiệu quả kéo dài từ 1-3 năm với chăm sóc đúng cách</li>
  <li><strong>Tăng sự tự tin:</strong> Hàm răng trắng sáng giúp bạn tự tin hơn trong giao tiếp</li>
  <li><strong>Sử dụng công nghệ tiên tiến:</strong> Đèn LED và gel tẩy trắng chuyên dụng hiệu quả cao</li>
</ul>
<h2>Ai Phù Hợp Với Tẩy Trắng Răng?</h2>
<p>Tẩy trắng răng phù hợp với hầu hết người lớn có răng khỏe mạnh và nướu không bị viêm. Tuy nhiên, cần tư vấn với bác sĩ nha khoa trước khi tiến hành để đảm bảo phương pháp này phù hợp với tình trạng răng miệng của bạn.</p>`,
    relatedPosts: [blogPosts[0], blogPosts[3]],
  },
  "cay-ghep-implant-nha-khoa": {
    ...blogPosts[2],
    content: `<p>Cấy ghép implant nha khoa là phương pháp hiện đại nhất để thay thế răng đã mất, mang lại cảm giác và chức năng gần giống như răng thật nhất.</p>
<h2>Implant Là Gì?</h2>
<p>Implant nha khoa là một trụ titanium được cấy vào xương hàm để làm nền tảng cho răng giả. Titanium có tính tương thích sinh học cao, cho phép nó tích hợp tự nhiên với xương hàm theo thời gian.</p>
<h2>Quy Trình Cấy Ghép</h2>
<ul>
  <li>Tư vấn và đánh giá ban đầu, chụp X-quang CT 3D</li>
  <li>Phẫu thuật cấy trụ implant vào xương hàm</li>
  <li>Thời gian tích hợp xương: 3-6 tháng</li>
  <li>Lắp mão răng sứ lên trên trụ implant</li>
</ul>
<h2>Ưu Điểm Của Implant</h2>
<p>Implant có tuổi thọ rất cao, có thể tồn tại suốt đời nếu được chăm sóc đúng cách. Không giống như răng giả tháo lắp hay cầu răng, implant không ảnh hưởng đến các răng lân cận và giúp bảo tồn xương hàm.</p>`,
    relatedPosts: [blogPosts[5], blogPosts[0]],
  },
};

export function getBlogBySlug(slug: string): BlogDetail | undefined {
  return blogDetails[slug];
}

export function getAllBlogSlugs(): string[] {
  return Object.keys(blogDetails);
}
