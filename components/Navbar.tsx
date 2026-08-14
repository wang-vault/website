"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/config";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/produk", label: "Produk" },
  { href: "/cara-order", label: "Cara Order" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (!pathname) return false;
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
        >
          {/* GANTI DENGAN GAMBAR ASLI DI SINI (logo) */}
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-white to-neutral-400 text-sm font-bold text-black transition-transform duration-300 group-hover:scale-105">
            W
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-tight text-white">
              {site.name}
            </span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
              {site.subBrand}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative rounded-md px-4 py-2 text-sm transition-colors duration-200 ${
                isActive(item.href)
                  ? "text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {item.label}
              <span
                className={`absolute inset-x-3 -bottom-px h-px bg-white transition-transform duration-300 ${
                  isActive(item.href) ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Buka menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-neutral-300 transition-colors duration-200 hover:border-white/30 hover:text-white md:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 block h-px w-4 bg-current transition-transform duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-px w-4 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-4 bg-current transition-transform duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-ink-950 transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-72" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`border-b border-white/5 py-3 text-sm transition-colors duration-200 last:border-b-0 ${
                isActive(item.href)
                  ? "text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
