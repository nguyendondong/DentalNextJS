import Link from "next/link";
import { TextReveal } from "@/components/animations/text-reveal";
import { FadeInUp } from "@/components/animations/fade-in-up";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  title: string;
  items: BreadcrumbItem[];
}

export function Breadcrumb({ title, items }: BreadcrumbProps) {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <TextReveal
          as="h1"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
        >
          {title}
        </TextReveal>

        <FadeInUp delay={0.2}>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center justify-center gap-2 text-sm text-text-muted">
              <li>
                <Link
                  href="/"
                  className="hover:text-accent transition-colors"
                >
                  Trang chủ
                </Link>
              </li>
              {items.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-dark-divider">/</span>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-accent transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-accent font-medium">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </FadeInUp>
      </div>
    </section>
  );
}
