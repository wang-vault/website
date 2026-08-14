import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products, reasons, site, waLink } from "@/lib/config";

export default function HomePage() {
  const featured = products.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* Latar dekoratif monokrom — GANTI DENGAN GAMBAR ASLI DI SINI kalau mau pakai foto */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-36">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-300">
              {site.subBrand}
            </span>
          </div>

          <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl">
            {site.name}
            <span className="block text-neutral-500">{site.tagline}</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            {site.description}
          </p>

          <div className="mt-11 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/produk"
              className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-neutral-200"
            >
              Lihat Produk
            </Link>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
            >
              Tanya Admin
            </a>
          </div>
        </div>
      </section>

      {/* KENAPA PILIH KAMI */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
            Kenapa Pilih Kami
          </p>
          <h2 className="mt-5 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Alasan pelanggan bertahan di {site.name}
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="rounded-2xl border border-white/10 bg-ink-900 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-ink-800"
              >
                <span className="text-xs font-medium tracking-[0.2em] text-neutral-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-base font-semibold text-white">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUK UNGGULAN */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                Produk Unggulan
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Paling sering dipesan
              </h2>
            </div>
            <Link
              href="/produk"
              className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-300 transition-colors duration-200 hover:text-white"
            >
              Lihat Semua Produk
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
