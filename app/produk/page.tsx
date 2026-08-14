import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import { products, waLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Produk",
  description:
    "Daftar lengkap produk digital, hosting, dan VPS yang tersedia di WangStore.",
};

export default function ProdukPage() {
  return (
    <>
      <PageHeader
        eyebrow="Katalog"
        title="Semua Produk"
        description="Pilih paket yang sesuai kebutuhan kamu. Semua harga sudah final, tanpa biaya tersembunyi."
      />

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-20 rounded-2xl border border-white/10 bg-ink-900 p-10 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Butuh paket khusus?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-neutral-400">
              Kalau kebutuhan kamu tidak ada di daftar di atas, kami bisa buatkan
              paket custom sesuai spesifikasi dan budget.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-neutral-200"
            >
              Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
