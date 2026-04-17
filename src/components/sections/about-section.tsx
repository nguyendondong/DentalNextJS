import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeInUp } from "@/components/animations/fade-in-up";
import { ImageReveal } from "@/components/animations/image-reveal";
import { TextReveal } from "@/components/animations/text-reveal";

const features = [
  "Đội ngũ bác sĩ giàu kinh nghiệm",
  "Dịch vụ nha khoa toàn diện",
  "Công nghệ tiên tiến hiện đại",
  "Dịch vụ nha khoa khẩn cấp",
];

export function AboutSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Images */}
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <ImageReveal className="rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/about-us-img-1.jpg"
                  alt="Phòng khám nha khoa"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </ImageReveal>
              <ImageReveal className="rounded-2xl overflow-hidden aspect-[3/4] mt-8" delay={0.2}>
                <Image
                  src="/images/about-us-img-2.jpg"
                  alt="Bác sĩ nha khoa"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </ImageReveal>
            </div>

            {/* Experience Badge */}
            <FadeInUp delay={0.4}>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-accent text-white flex flex-col items-center justify-center text-center shadow-lg">
                <span className="text-2xl font-bold leading-none">10+</span>
                <span className="text-xs mt-1">Năm Kinh Nghiệm</span>
              </div>
            </FadeInUp>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <FadeInUp>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Giới thiệu
              </span>
            </FadeInUp>

            <TextReveal as="h2" className="text-3xl md:text-4xl font-bold text-primary mt-3" delay={0.1}>
              Hành Trình Đến Nụ Cười Khỏe Mạnh Bắt Đầu Từ Đây
            </TextReveal>

            <FadeInUp delay={0.25}>
              <p className="text-text-muted mt-5 leading-relaxed">
                Mục tiêu của phòng khám là mang đến dịch vụ nha khoa thân thiện, tận tâm cùng các phương pháp điều trị nha khoa tổng quát, thẩm mỹ và chuyên sâu ở mức cao nhất.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <ul className="mt-6 space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E84B5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-primary font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </FadeInUp>

            <FadeInUp delay={0.55}>
              <div className="mt-8">
                <Button href="/about">Xem thêm</Button>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
