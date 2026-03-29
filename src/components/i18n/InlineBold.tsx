"use client";

/**
 * Renders a string with **segments** as <strong>. Use in translated copy only (trusted catalog).
 */
export function InlineBold({
  text,
  strongClassName = "font-medium text-[#111]",
}: {
  text: string;
  strongClassName?: string;
}) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className={strongClassName}>
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
