import type { GalleryImage } from "@/lib/types";

export const galleryImages: GalleryImage[] = [
  { id: "1", url: "/images/gallery-1.jpg", thumbnailUrl: "/images/gallery-1.jpg", alt: "Phòng khám hiện đại", category: "Phòng Khám", order: 1 },
  { id: "2", url: "/images/gallery-2.jpg", thumbnailUrl: "/images/gallery-2.jpg", alt: "Khu vực tiếp tân", category: "Phòng Khám", order: 2 },
  { id: "3", url: "/images/gallery-3.jpg", thumbnailUrl: "/images/gallery-3.jpg", alt: "Điều trị nha khoa", category: "Điều Trị", order: 3 },
  { id: "4", url: "/images/gallery-4.jpg", thumbnailUrl: "/images/gallery-4.jpg", alt: "Kiểm tra răng định kỳ", category: "Điều Trị", order: 4 },
  { id: "5", url: "/images/gallery-5.jpg", thumbnailUrl: "/images/gallery-5.jpg", alt: "Bác sĩ nha khoa", category: "Đội Ngũ", order: 5 },
  { id: "6", url: "/images/gallery-6.jpg", thumbnailUrl: "/images/gallery-6.jpg", alt: "Đội ngũ y tế", category: "Đội Ngũ", order: 6 },
  { id: "7", url: "/images/gallery-7.jpg", thumbnailUrl: "/images/gallery-7.jpg", alt: "Thiết bị nha khoa", category: "Thiết Bị", order: 7 },
  { id: "8", url: "/images/gallery-8.jpg", thumbnailUrl: "/images/gallery-8.jpg", alt: "Máy chụp X-quang", category: "Thiết Bị", order: 8 },
  { id: "9", url: "/images/gallery-9.jpg", thumbnailUrl: "/images/gallery-9.jpg", alt: "Phòng điều trị", category: "Phòng Khám", order: 9 },
  { id: "10", url: "/images/gallery-10.jpg", thumbnailUrl: "/images/gallery-10.jpg", alt: "Tẩy trắng răng", category: "Điều Trị", order: 10 },
  { id: "11", url: "/images/gallery-11.jpg", thumbnailUrl: "/images/gallery-11.jpg", alt: "Camera nội soi", category: "Thiết Bị", order: 11 },
  { id: "12", url: "/images/gallery-12.jpg", thumbnailUrl: "/images/gallery-12.jpg", alt: "Tư vấn bệnh nhân", category: "Đội Ngũ", order: 12 },
];

export const galleryCategories = ["Tất Cả", "Phòng Khám", "Điều Trị", "Đội Ngũ", "Thiết Bị"];
