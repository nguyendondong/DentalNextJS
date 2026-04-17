import type { ContactFormData, AppointmentFormData, FormResponse } from "@/lib/types/forms";

export async function submitContact(data: ContactFormData): Promise<FormResponse> {
  void data; // TODO: Replace with real API: POST /landing/contact
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    success: true,
    message: "Tin nhắn đã được gửi thành công! Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.",
  };
}

export async function submitAppointment(data: AppointmentFormData): Promise<FormResponse> {
  void data; // TODO: Replace with real API: POST /landing/appointment
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    success: true,
    message: "Đặt lịch thành công! Chúng tôi sẽ xác nhận qua điện thoại.",
  };
}
