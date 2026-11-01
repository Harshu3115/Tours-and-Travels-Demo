export default function SectionHeader({ eyebrow, title, subtitle, align = "center" }) {
  return (
    <div className={`mx-auto max-w-3xl ${align === "left" ? "text-left" : "text-center"}`}>
      {eyebrow && (
        <span className="badge-pill">
          <span className="size-1.5 rounded-full bg-ocean" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-7 text-slate-600">{subtitle}</p>}
    </div>
  );
}
