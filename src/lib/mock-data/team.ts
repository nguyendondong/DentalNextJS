import type { TeamMemberDetail } from "@/lib/types";

const defaultSkills = [
  { name: "Chăm sóc bệnh nhân", percentage: 84 },
  { name: "Nha khoa phòng ngừa", percentage: 97 },
  { name: "Thủ thuật phục hồi", percentage: 93 },
  { name: "Nha khoa thẩm mỹ", percentage: 89 },
];

const defaultAwards = [
  "/images/icon-award-1.svg",
  "/images/icon-award-2.svg",
  "/images/icon-award-3.svg",
  "/images/icon-award-4.svg",
];

const defaultSocial = {
  facebook: "https://facebook.com",
  youtube: "https://youtube.com",
  instagram: "https://instagram.com",
};

export const mockTeamMembers: TeamMemberDetail[] = [
  {
    id: 1,
    name: "BS. Nguyễn Văn An",
    specialization: "Trưởng khoa Nha",
    avatar: "/images/team-1.jpg",
    bio: "BS. Nguyễn Văn An là bác sĩ nha khoa tận tâm với hơn 10 năm kinh nghiệm trong lĩnh vực chăm sóc răng miệng toàn diện. Ông cam kết giúp bệnh nhân đạt được sức khỏe răng miệng tối ưu thông qua các phương pháp điều trị phòng ngừa và phục hồi.",
    achievements: ["Bằng khen Bộ Y tế", "Top 10 Nha sĩ xuất sắc"],
    order: 1,
    skills: defaultSkills,
    awards: defaultAwards,
    socialLinks: defaultSocial,
    experience: "10+",
    email: "an.nguyen@myradental.com",
  },
  {
    id: 2,
    name: "BS. Trần Minh Khoa",
    specialization: "Nha sĩ cao cấp",
    avatar: "/images/team-2.jpg",
    bio: "BS. Trần Minh Khoa chuyên về các kỹ thuật nha khoa hiện đại với nhiều năm kinh nghiệm trong phục hình răng và implant. Ông được biết đến với phong cách nhẹ nhàng và khả năng giúp bệnh nhân cảm thấy thoải mái.",
    achievements: ["Chứng chỉ Implant quốc tế", "10+ năm kinh nghiệm"],
    order: 2,
    skills: [
      { name: "Chăm sóc bệnh nhân", percentage: 90 },
      { name: "Nha khoa phòng ngừa", percentage: 85 },
      { name: "Thủ thuật phục hồi", percentage: 96 },
      { name: "Nha khoa thẩm mỹ", percentage: 92 },
    ],
    awards: defaultAwards,
    socialLinks: defaultSocial,
    experience: "12+",
    email: "khoa.tran@myradental.com",
  },
  {
    id: 3,
    name: "BS. Lê Thị Hương",
    specialization: "Chỉnh nha",
    avatar: "/images/team-3.jpg",
    bio: "BS. Lê Thị Hương là chuyên gia hàng đầu trong lĩnh vực chỉnh nha với chứng chỉ Invisalign. Bà giúp hàng trăm bệnh nhân có được nụ cười hoàn hảo với phương pháp niềng răng trong suốt hiện đại.",
    achievements: ["Chứng chỉ Invisalign", "Giải thưởng Chỉnh nha xuất sắc"],
    order: 3,
    skills: [
      { name: "Chăm sóc bệnh nhân", percentage: 95 },
      { name: "Nha khoa phòng ngừa", percentage: 88 },
      { name: "Thủ thuật phục hồi", percentage: 90 },
      { name: "Nha khoa thẩm mỹ", percentage: 97 },
    ],
    awards: defaultAwards,
    socialLinks: defaultSocial,
    experience: "8+",
    email: "huong.le@myradental.com",
  },
  {
    id: 4,
    name: "BS. Phạm Đức Trung",
    specialization: "Nha chu",
    avatar: "/images/team-4.jpg",
    bio: "BS. Phạm Đức Trung chuyên về điều trị các bệnh lý nha chu và cấy ghép implant. Với kỹ thuật tiên tiến và thiết bị hiện đại, ông mang đến những giải pháp phục hồi răng toàn diện cho bệnh nhân.",
    achievements: ["Tiến sĩ Nha chu", "Nghiên cứu sinh tại Nhật Bản"],
    order: 4,
    skills: defaultSkills,
    awards: defaultAwards,
    socialLinks: defaultSocial,
    experience: "15+",
    email: "trung.pham@myradental.com",
  },
  {
    id: 5,
    name: "BS. Nguyễn Thị Mai",
    specialization: "Nha khoa trẻ em",
    avatar: "/images/team-5.jpg",
    bio: "BS. Nguyễn Thị Mai là bác sĩ chuyên khoa nhi nha với tình yêu đặc biệt dành cho trẻ em. Bà tạo ra môi trường khám thoải mái, vui vẻ giúp các bé không còn sợ hãi khi đi khám răng.",
    achievements: ["Chuyên khoa Nhi Nha", "Tình nguyện viên Y tế cộng đồng"],
    order: 5,
    skills: [
      { name: "Chăm sóc bệnh nhân", percentage: 98 },
      { name: "Nha khoa phòng ngừa", percentage: 94 },
      { name: "Thủ thuật phục hồi", percentage: 87 },
      { name: "Nha khoa thẩm mỹ", percentage: 82 },
    ],
    awards: defaultAwards,
    socialLinks: defaultSocial,
    experience: "7+",
    email: "mai.nguyen@myradental.com",
  },
  {
    id: 6,
    name: "BS. Hoàng Văn Đạt",
    specialization: "Phẫu thuật miệng",
    avatar: "/images/team-6.jpg",
    bio: "BS. Hoàng Văn Đạt là chuyên gia phẫu thuật miệng và hàm mặt với nhiều năm kinh nghiệm trong các ca phẫu thuật phức tạp. Ông từng tu nghiệp tại Hàn Quốc và áp dụng nhiều kỹ thuật tiên tiến.",
    achievements: ["Tu nghiệp tại Seoul", "200+ ca phẫu thuật thành công"],
    order: 6,
    skills: [
      { name: "Chăm sóc bệnh nhân", percentage: 86 },
      { name: "Nha khoa phòng ngừa", percentage: 80 },
      { name: "Thủ thuật phục hồi", percentage: 98 },
      { name: "Nha khoa thẩm mỹ", percentage: 91 },
    ],
    awards: defaultAwards,
    socialLinks: defaultSocial,
    experience: "11+",
    email: "dat.hoang@myradental.com",
  },
  {
    id: 7,
    name: "Trần Thị Lan Anh",
    specialization: "Trợ thủ nha khoa",
    avatar: "/images/team-7.jpg",
    bio: "Trần Thị Lan Anh là trợ thủ nha khoa giàu kinh nghiệm, luôn hỗ trợ đắc lực cho đội ngũ bác sĩ trong các ca điều trị. Cô được yêu mến bởi sự tận tình và chu đáo với bệnh nhân.",
    achievements: ["Chứng chỉ Trợ thủ nha khoa", "5 năm kinh nghiệm"],
    order: 7,
    skills: [
      { name: "Chăm sóc bệnh nhân", percentage: 96 },
      { name: "Nha khoa phòng ngừa", percentage: 88 },
      { name: "Thủ thuật phục hồi", percentage: 85 },
      { name: "Nha khoa thẩm mỹ", percentage: 80 },
    ],
    awards: defaultAwards,
    socialLinks: defaultSocial,
    experience: "5+",
    email: "lanah.tran@myradental.com",
  },
  {
    id: 8,
    name: "Nguyễn Phương Thảo",
    specialization: "Lễ tân",
    avatar: "/images/team-8.jpg",
    bio: "Nguyễn Phương Thảo là gương mặt đầu tiên chào đón bệnh nhân tại phòng khám. Với sự thân thiện và chuyên nghiệp, cô đảm bảo mọi bệnh nhân đều có trải nghiệm thoải mái từ lúc bước vào.",
    achievements: ["Nhân viên xuất sắc 2024", "Kỹ năng giao tiếp chuyên nghiệp"],
    order: 8,
    skills: [
      { name: "Chăm sóc bệnh nhân", percentage: 99 },
      { name: "Nha khoa phòng ngừa", percentage: 75 },
      { name: "Thủ thuật phục hồi", percentage: 70 },
      { name: "Nha khoa thẩm mỹ", percentage: 72 },
    ],
    awards: defaultAwards,
    socialLinks: defaultSocial,
    experience: "3+",
    email: "thao.nguyen@myradental.com",
  },
];

export function getTeamMemberById(id: number): TeamMemberDetail | undefined {
  return mockTeamMembers.find((m) => m.id === id);
}

export function getAllTeamIds(): number[] {
  return mockTeamMembers.map((m) => m.id);
}
