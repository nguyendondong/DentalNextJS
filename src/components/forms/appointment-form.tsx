"use client";

import { useState, useEffect } from "react";
import type { AppointmentFormData } from "@/lib/types/forms";
import { submitAppointment } from "@/lib/api/forms";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9+\-() ]{8,15}$/;

interface AppointmentFormProps {
  services: { name: string; slug: string }[];
}

export function AppointmentForm({ services }: AppointmentFormProps) {
  const [today, setToday] = useState("");
  const [form, setForm] = useState<AppointmentFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  // Set min date client-side to avoid SSR/client mismatch
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setToday(new Date().toISOString().split("T")[0]);
  }, []);
  const [errors, setErrors] = useState<Partial<Record<keyof AppointmentFormData, string>>>({});

  function validate(): boolean {
    const errs: typeof errors = {};
    if (!form.name.trim()) errs.name = "Vui lòng nhập họ tên";
    if (!form.email.trim()) errs.email = "Vui lòng nhập email";
    else if (!emailRegex.test(form.email)) errs.email = "Email không hợp lệ";
    if (!form.phone.trim()) errs.phone = "Vui lòng nhập số điện thoại";
    else if (!phoneRegex.test(form.phone)) errs.phone = "Số điện thoại không hợp lệ";
    if (!form.service) errs.service = "Vui lòng chọn dịch vụ";
    if (!form.date) errs.date = "Vui lòng chọn ngày hẹn";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await submitAppointment(form);
      setStatus(res.success ? "success" : "error");
      setResponseMsg(res.message);
      if (res.success) setForm({ name: "", email: "", phone: "", service: "", date: "", message: "" });
    } catch {
      setStatus("error");
      setResponseMsg("Có lỗi xảy ra. Vui lòng thử lại sau.");
    }
  }

  function onChange(field: keyof AppointmentFormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  const inputClass = (field: keyof AppointmentFormData) =>
    `w-full px-4 py-3 rounded-lg border ${errors[field] ? "border-red-400" : "border-gray-200"} focus:border-accent focus:outline-none transition-colors`;

  return (
    <form onSubmit={handleSubmit} noValidate>
      {status === "success" && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">{responseMsg}</div>
      )}
      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">{responseMsg}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <input type="text" placeholder="Họ và tên" value={form.name} onChange={(e) => onChange("name", e.target.value)} className={inputClass("name")} />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <input type="email" placeholder="Email" value={form.email} onChange={(e) => onChange("email", e.target.value)} className={inputClass("email")} />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <input type="tel" placeholder="Số điện thoại" value={form.phone} onChange={(e) => onChange("phone", e.target.value)} className={inputClass("phone")} />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <select value={form.service} onChange={(e) => onChange("service", e.target.value)} className={inputClass("service")}>
            <option value="" disabled>Chọn dịch vụ</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
          </select>
          {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
        </div>
      </div>

      <div className="mb-4">
        <input type="date" min={today} value={form.date} onChange={(e) => onChange("date", e.target.value)} className={inputClass("date")} />
        {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
      </div>

      <div className="mb-6">
        <textarea placeholder="Ghi chú thêm (không bắt buộc)" rows={4} value={form.message ?? ""} onChange={(e) => onChange("message", e.target.value)} className={inputClass("message")} />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-medium hover:bg-primary transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
            Đang đặt lịch...
          </>
        ) : "Đặt lịch hẹn"}
      </button>
    </form>
  );
}
