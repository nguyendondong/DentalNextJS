import { TextReveal } from "@/components/animations/text-reveal";
import { FadeInUp } from "@/components/animations/fade-in-up";

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
}

export function SectionHeader({
  subtitle,
  title,
  titleHighlight,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  const renderTitle = () => {
    if (!titleHighlight) return title;
    const parts = title.split(titleHighlight);
    if (parts.length === 1) return title;
    return `${parts[0]}${titleHighlight}${parts.slice(1).join(titleHighlight)}`;
  };

  const titleWithHighlight = titleHighlight
    ? title.replace(
        titleHighlight,
        `<span class="text-accent">${titleHighlight}</span>`
      )
    : title;

  return (
    <div className={`max-w-2xl mb-12 ${alignClass} ${className ?? ""}`}>
      {subtitle && (
        <FadeInUp>
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            {subtitle}
          </span>
        </FadeInUp>
      )}

      {titleHighlight ? (
        <FadeInUp delay={0.1}>
          <h2
            className="text-3xl md:text-4xl font-bold text-primary mt-2"
            dangerouslySetInnerHTML={{ __html: titleWithHighlight }}
          />
        </FadeInUp>
      ) : (
        <TextReveal
          as="h2"
          className="text-3xl md:text-4xl font-bold text-primary mt-2"
          delay={0.1}
        >
          {renderTitle()}
        </TextReveal>
      )}

      {description && (
        <FadeInUp delay={0.2}>
          <p className="text-text-muted mt-4 leading-relaxed">{description}</p>
        </FadeInUp>
      )}
    </div>
  );
}
