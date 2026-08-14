/* =========================================================================
   WANGSTORE — PUSAT DATA
   Semua data yang perlu kamu ganti ADA DI FILE INI SAJA.
   Cari komentar "GANTI DI SINI".
   ========================================================================= */

export type Product = {
  /** slug unik, dipakai untuk key React. Huruf kecil, tanpa spasi. */
  id: string;
  name: string;
  description: string;
  /** Tulis bebas, sudah termasuk format Rupiah. Contoh: "Rp 15.000" */
  price: string;
  /** Keterangan kecil di samping harga. Contoh: "/ bulan", "/ sekali bayar" */
  priceNote: string;
  /** 3 poin spesifikasi singkat yang tampil di card */
  specs: string[];
  /** true = tampil di section "Produk Unggulan" di halaman Home */
  featured: boolean;
};

export const site = {
  // GANTI DI SINI — identitas toko
  name: "WangStore",
  subBrand: "AULA WANG",
  tagline: "Produk digital, hosting, dan VPS tanpa drama.",
  description:
    "WangStore menyediakan hosting, VPS, dan produk digital dengan harga jujur, respons cepat, dan garansi jelas.",
  // GANTI DI SINI — domain final setelah deploy (dipakai untuk metadata SEO)
  url: "https://wangstore.vercel.app",
};

export const contact = {
  // GANTI DI SINI — nomor WhatsApp format internasional TANPA "+", tanpa "0" di depan.
  // Contoh benar: 6281234567890
  whatsappNumber: "6281234567890",
  // GANTI DI SINI — invite link Discord asli kamu
  discordUrl: "https://discord.gg/xxxxxxx",
  // GANTI DI SINI — email support
  email: "support@wangstore.id",
  // GANTI DI SINI — teks yang tampil sebagai label WhatsApp (opsional)
  whatsappLabel: "+62 812-3456-7890",
};

// GANTI DI SINI — jam operasional
export const operatingHours = [
  { day: "Senin - Jumat", hours: "09.00 - 22.00 WIB" },
  { day: "Sabtu", hours: "10.00 - 22.00 WIB" },
  { day: "Minggu", hours: "12.00 - 20.00 WIB" },
  { day: "Hari Libur Nasional", hours: "Respons lebih lambat" },
];

// GANTI DI SINI — daftar produk (tambah/hapus sesuka hati)
export const products: Product[] = [
  {
    id: "shared-hosting-starter",
    name: "Shared Hosting Starter",
    description:
      "Cocok untuk landing page, portfolio, atau website UMKM yang baru mulai.",
    price: "Rp 15.000",
    priceNote: "/ bulan",
    specs: ["1 GB NVMe Storage", "Unlimited Bandwidth", "Gratis SSL"],
    featured: true,
  },
  {
    id: "shared-hosting-bisnis",
    name: "Shared Hosting Bisnis",
    description:
      "Untuk toko online dan website dengan traffic harian yang stabil.",
    price: "Rp 45.000",
    priceNote: "/ bulan",
    specs: ["10 GB NVMe Storage", "5 Addon Domain", "Daily Backup"],
    featured: true,
  },
  {
    id: "vps-ryzen-basic",
    name: "VPS Ryzen Basic",
    description:
      "Akses root penuh untuk bot, panel, atau aplikasi Node.js kamu.",
    price: "Rp 65.000",
    priceNote: "/ bulan",
    specs: ["2 vCPU Ryzen", "4 GB RAM", "50 GB NVMe"],
    featured: true,
  },
  {
    id: "vps-ryzen-pro",
    name: "VPS Ryzen Pro",
    description:
      "Resource besar untuk production workload dan multi-service deployment.",
    price: "Rp 150.000",
    priceNote: "/ bulan",
    specs: ["4 vCPU Ryzen", "8 GB RAM", "120 GB NVMe"],
    featured: false,
  },
  {
    id: "panel-pterodactyl",
    name: "Panel Pterodactyl",
    description:
      "Panel siap pakai untuk hosting bot dan game server, sudah terinstal.",
    price: "Rp 25.000",
    priceNote: "/ bulan",
    specs: ["2 GB RAM Node", "Full Panel Access", "Setup Instan"],
    featured: false,
  },
  {
    id: "domain-management",
    name: "Domain Management",
    description:
      "Pendaftaran dan pengelolaan domain, termasuk pointing DNS ke server kamu.",
    price: "Rp 20.000",
    priceNote: "/ sekali setup",
    specs: ["Setup DNS", "Pointing ke Hosting", "Konsultasi Gratis"],
    featured: false,
  },
];

// GANTI DI SINI — alasan kenapa pilih WangStore (halaman Home)
export const reasons = [
  {
    title: "Respons Cepat",
    description:
      "Chat dibalas dalam hitungan menit selama jam operasional. Tidak digantung.",
  },
  {
    title: "Harga Jujur",
    description:
      "Harga yang tertulis adalah harga yang dibayar. Tanpa biaya tersembunyi.",
  },
  {
    title: "Garansi Jelas",
    description:
      "Produk bermasalah di masa garansi akan diganti atau direfund penuh.",
  },
  {
    title: "Support Ramah",
    description:
      "Bantuan setup dari nol, termasuk untuk kamu yang baru pertama kali.",
  },
];

// GANTI DI SINI — langkah cara order
export const orderSteps = [
  {
    title: "Pilih Produk",
    description:
      "Buka halaman Produk, lalu tentukan paket yang paling sesuai dengan kebutuhan dan budget kamu.",
  },
  {
    title: "Hubungi via WhatsApp",
    description:
      "Klik tombol Order via WhatsApp pada kartu produk. Pesan otomatis terisi dengan nama produk yang dipilih.",
  },
  {
    title: "Konfirmasi & Pembayaran",
    description:
      "Admin mengirim rincian pesanan dan metode pembayaran. Lakukan pembayaran, lalu kirim bukti transfernya.",
  },
  {
    title: "Terima Akses",
    description:
      "Data akses dikirim melalui WhatsApp atau email setelah pembayaran diverifikasi.",
  },
];

// GANTI DI SINI — FAQ
export const faqs = [
  {
    question: "Berapa lama proses aktivasi setelah pembayaran?",
    answer:
      "Rata-rata 5 sampai 30 menit pada jam operasional. Di luar jam operasional, pesanan diproses pada jam kerja berikutnya.",
  },
  {
    question: "Metode pembayaran apa saja yang diterima?",
    answer:
      "Transfer bank, e-wallet, dan QRIS. Rincian rekening dikirim admin saat konfirmasi pesanan.",
  },
  {
    question: "Apakah ada garansi kalau produk bermasalah?",
    answer:
      "Ada. Setiap produk punya masa garansi. Jika bermasalah bukan karena kesalahan pemakaian, kami ganti atau refund penuh.",
  },
  {
    question: "Bisa minta bantuan setup dari awal?",
    answer:
      "Bisa. Bantuan setup dasar sudah termasuk dalam harga, tanpa biaya tambahan.",
  },
];

/** Membuat link wa.me dengan pesan yang sudah terisi otomatis. */
export function waLink(productName?: string): string {
  // GANTI DI SINI — template pesan WhatsApp (opsional)
  const message = productName
    ? `Halo ${site.name}, saya mau order produk "${productName}". Apakah masih tersedia?`
    : `Halo ${site.name}, saya mau tanya-tanya soal produk yang tersedia.`;
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
