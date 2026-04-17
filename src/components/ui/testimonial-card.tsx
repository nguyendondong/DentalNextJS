import Image from "next/image";

interface TestimonialCardProps {
  customerName: string;
  rating: number;
  comment: string;
  serviceUsed: string;
  imageUrl: string;
  className?: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < rating ? "#FBBF24" : "none"}
          stroke={i < rating ? "#FBBF24" : "#D1D5DB"}
          strokeWidth="2"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialCard({
  customerName,
  rating,
  comment,
  serviceUsed,
  imageUrl,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-sm border border-dark-divider h-full flex flex-col ${className ?? ""}`}
    >
      {/* Quote icon */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        className="text-accent/20 mb-4 shrink-0"
      >
        <path
          d="M13 25H7l4-10h-4V5h10v10l-4 10zm18 0h-6l4-10h-4V5h10v10l-4 10z"
          fill="currentColor"
        />
      </svg>

      <StarRating rating={rating} />

      <p className="text-text-muted mt-4 leading-relaxed flex-1 line-clamp-4">
        {comment}
      </p>

      <div className="flex items-center gap-3 mt-6 pt-4 border-t border-dark-divider">
        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
          <Image
            src={imageUrl}
            alt={customerName}
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-primary text-sm">{customerName}</p>
          <p className="text-text-muted text-xs">{serviceUsed}</p>
        </div>
      </div>
    </div>
  );
}
