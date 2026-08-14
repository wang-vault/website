import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import PageHeader from "@/components/PageHeader";
import { orderSteps } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cara Order",
  description:
    "Panduan langkah demi langkah cara memesan produk di WangStore, lengkap dengan FAQ.",
};

export default function CaraOrderPage() {
  return (
    <>
      <PageHeader
        eyebrow="Panduan"
        title="Cara Order"
        description="Empat langkah sederhana dari memilih produk sampai akses diterima. Tidak perlu daftar akun."
      />

      {/* STEPS */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <ol className="grid gap-6 sm:grid-cols-2">
            {orderSteps.map((step, index) => (
              <li
                key={step.title}
                className="group rounded-2xl border border-white/10 bg-ink-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-ink-800"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                  {index + 1}
                </span>
                <h2 className="mt-6 text-lg font-semibold tracking-tight text-white">
                  {step.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/produk"
              className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-neutral-200"
            >
              Mulai dari Halaman Produk
            </Link>
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
            >
              Lihat Kontak
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
            FAQ
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Pertanyaan yang sering muncul
          </h2>
          <div className="mt-12">
            <FaqAccordion />
          </div>
        </div>
      </section>
    </>
  );
}
