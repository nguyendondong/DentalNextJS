import type { ProcessStep } from "@/lib/types";

export const mockProcessSteps: ProcessStep[] = [
  {
    id: "1",
    step: 1,
    title: "Đặt lịch hẹn",
    description:
      "Liên hệ hoặc đặt lịch trực tuyến để chọn thời gian phù hợp nhất cho bạn. Đội ngũ của chúng tôi sẽ xác nhận lịch hẹn trong thời gian sớm nhất.",
  },
  {
    id: "2",
    step: 2,
    title: "Tư vấn & Khám",
    description:
      "Bác sĩ khám và tư vấn phương án điều trị phù hợp nhất với tình trạng răng miệng của bạn. Chúng tôi sử dụng công nghệ hiện đại để chẩn đoán chính xác.",
  },
  {
    id: "3",
    step: 3,
    title: "Điều trị",
    description:
      "Thực hiện điều trị theo kế hoạch đã thống nhất với bác sĩ. Cam kết nhẹ nhàng, an toàn và mang lại kết quả tốt nhất cho bạn.",
  },
];
