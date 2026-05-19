import type { ContactFormData, AppointmentFormData, FormResponse } from "@/lib/types/forms";
import { API_ENDPOINTS, buildApiUrl } from "./api";

export async function submitContact(data: ContactFormData): Promise<FormResponse> {
  void data; // TODO: Replace with real API: POST /landing/contact
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    success: true,
    message: "Tin nhắn đã được gửi thành công! Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.",
  };
}

export async function submitAppointment(data: AppointmentFormData): Promise<FormResponse> {
  const { name, email, phone, service, date } = data;
  const serviceId = Number.parseInt(service, 10);

  if (Number.isNaN(serviceId)) {
    return {
      success: false,
      message: "Dịch vụ đã chọn không hợp lệ. Vui lòng chọn lại.",
    };
  }

  try {
    const res = await fetch(buildApiUrl(API_ENDPOINTS.LANDING.APPOINTMENT), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        serviceId,
        date,
        message: data.message?.trim() || "",
      }),
    });

    const payload = (await res.json().catch(() => null)) as
      | { message?: string; data?: { message?: string } }
      | null;

    if (!res.ok) {
      return {
        success: false,
        message:
          payload?.message ||
          payload?.data?.message ||
          "Không thể đặt lịch lúc này. Vui lòng thử lại sau.",
      };
    }

    return {
      success: true,
      message:
        payload?.message ||
        payload?.data?.message ||
        "Đặt lịch thành công! Chúng tôi sẽ xác nhận qua điện thoại.",
    };
  } catch {
    return {
      success: false,
      message: "Không thể kết nối đến hệ thống đặt lịch. Vui lòng thử lại sau.",
    };
  }
}
