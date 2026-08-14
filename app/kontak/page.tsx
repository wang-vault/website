import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { contact, operatingHours, waLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi WangStore melalui WhatsApp, Discord, atau email. Lihat juga jam operasional kami.",
};

const channels = [
  {
    label: "WhatsApp",
    value: contact.whatsappLabel,
    note: "Jalur tercepat untuk order dan pertanyaan produk.",
    href: waLink(),
    cta: "Chat Sekarang",
    external: true,
  },
  {
    label: "Discord",
    value: "Komunitas WangStore",
    note: "Gabung untuk info promo, update layanan, dan diskusi teknis.",
    href: contact.discordUrl,
    cta: "Gabung Server",
    external: true,
  },
  {
    label: "Email",
    value: contact.email,
    note: "Untuk keperluan invoice, kerja sama, dan pertanyaan formal.",
    href: `mailto:${contact.email}`,
    cta: "Kirim Email",
    external: false,
  },
];

export default function KontakPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hubungi Kami"
        title="Kontak"
        description="Pilih kanal yang paling nyaman buat kamu. Semua pesan dibaca dan dibalas pada jam operasional."
      />

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid gap-6 lg:grid-cols-3">
            {channels.map((channel) => (
              <div
                key={channel.label}
                className="flex flex-col rounded-2xl border border-white/10 bg-ink-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-ink-800"
              >
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                  {channel.label}
                </p>
                <p className="mt-4 text-lg font-semibold tracking-tight text-white">
                  {channel.value}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">
                  {channel.note}
                </p>
                <a
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="mt-8 inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-black"
                >
                  {channel.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-ink-900 p-8 sm:p-10">
            <h2 className="text-xl font-semibold tracking-tight text-white">
              Jam Operasional
            </h2>
            <p className="mt-3 text-sm text-neutral-400">
              Di luar jam ini pesan tetap masuk, tapi dibalas pada jam kerja
              berikutnya.
            </p>
            <dl className="mt-8 divide-y divide-white/10 border-t border-white/10">
              {operatingHours.map((item) => (
                <div
                  key={item.day}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <dt className="text-sm text-neutral-400">{item.day}</dt>
                  <dd className="text-sm font-medium text-white">
                    {item.hours}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
