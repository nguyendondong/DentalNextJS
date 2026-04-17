import { Button } from "@/components/ui/button";
import { FadeInUp } from "@/components/animations/fade-in-up";

export function AppointmentCTA() {
  return (
    <section className="bg-accent py-20">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Đặt lịch khám ngay
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.15}>
          <p className="text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Đội ngũ bác sĩ giàu kinh nghiệm sẵn sàng tư vấn và chăm sóc sức khỏe răng miệng cho bạn.
            Đặt lịch hẹn ngay hôm nay để được khám và tư vấn miễn phí.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <Button href="/appointment" variant="highlighted">
            Đặt lịch hẹn
          </Button>
        </FadeInUp>
      </div>
    </section>
  );
}
