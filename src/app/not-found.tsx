import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-[120px] font-bold text-primary leading-none">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-primary mt-4">
        Trang không tìm thấy
      </h2>
      <p className="text-text-muted mt-4 max-w-md">
        Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-medium hover:bg-primary transition-colors"
      >
        Về trang chủ
      </Link>
    </main>
  );
}
