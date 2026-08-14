export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400">
          {description}
        </p>
      </div>
    </section>
  );
}
