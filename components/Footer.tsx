import Link from "next/link";
import { contact, site } from "@/lib/config";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/produk", label: "Produk" },
  { href: "/cara-order", label: "Cara Order" },
  { href: "/kontak", label: "Kontak" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              {/* GANTI DENGAN GAMBAR ASLI DI SINI (logo) */}
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-white to-neutral-400 text-sm font-bold text-black">
                W
              </span>
              <span className="text-sm font-semibold tracking-tight text-white">
                {site.name}
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-neutral-400">
              {site.description}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Navigasi
            </h3>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Kontak
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`https://wa.me/${contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-400 transition-colors duration-200 hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsappGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-400 transition-colors duration-200 hover:text-white"
                >
                  Grup WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm text-neutral-400 transition-colors duration-200 hover:text-white"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} {site.name}. Seluruh hak cipta
            dilindungi.
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
            {site.subBrand}
          </p>
        </div>
      </div>
    </footer>
  );
}
