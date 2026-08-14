import { waLink, type Product } from "@/lib/config";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-white/10 bg-ink-900 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-ink-800">
      {/* GANTI DENGAN GAMBAR ASLI DI SINI (thumbnail produk) */}
      <div className="mb-6 h-28 w-full rounded-xl bg-gradient-to-br from-neutral-700 via-ink-700 to-ink-900 transition-opacity duration-300 group-hover:opacity-90" />

      <h3 className="text-lg font-semibold tracking-tight text-white">
        {product.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-400">
        {product.description}
      </p>

      <ul className="mt-6 space-y-2.5">
        {product.specs.map((spec) => (
          <li
            key={spec}
            className="flex items-center gap-3 text-sm text-neutral-300"
          >
            <span className="h-1 w-1 shrink-0 rounded-full bg-neutral-500" />
            {spec}
          </li>
        ))}
      </ul>

      <div className="mt-7 flex items-baseline gap-1.5 border-t border-white/10 pt-6">
        <span className="text-2xl font-semibold tracking-tight text-white">
          {product.price}
        </span>
        <span className="text-sm text-neutral-500">{product.priceNote}</span>
      </div>

      <a
        href={waLink(product.name)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-black"
      >
        Order via WhatsApp
      </a>
    </article>
  );
}
