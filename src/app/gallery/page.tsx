import type { Metadata } from "next";
import { GalleryClient } from "@/components/sections/gallery-client";

export const metadata: Metadata = {
  title: "Thư Viện Ảnh",
  description: "Khám phá thư viện ảnh phòng khám và các ca điều trị thành công tại Myra Dental.",
  openGraph: {
    title: "Thư Viện Ảnh | Myra Dental",
    description: "Thư viện ảnh phòng khám và các ca điều trị thành công tại Myra Dental.",
    images: ["/images/logo.svg"],
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
