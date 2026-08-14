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
  whatsappNumber: "6282189822272",
  // GANTI DI SINI — invite link Discord asli kamu
  discordUrl: "https://chat.whatsapp.com/CuoLFC6NSKgJgH7A8ZjJeE?mode=gi_t",
  // GANTI DI SINI — email support
  email: "support@wangstore.id",
  // GANTI DI SINI — teks yang tampil sebagai label WhatsApp (opsional)
  whatsappLabel: "+6282189822272",
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
  // List Spec VPS
  {
    id: "vps-4gb-2core-unli-50k",
    name: "VPS 4GB 2 Core (Unli Bandwidth)",
    description:
      "VPS hemat dengan bandwidth unlimited. CPU: Intel Xeon E5-4650 v2 @2.40GHz.",
    price: "Rp 50.000",
    priceNote: "/ bulan",
    specs: ["2 vCPU", "4 GB RAM", "Unlimited Bandwidth"],
    featured: true,
  },
  {
    id: "vps-8gb-4core-unli-75k",
    name: "VPS 8GB 4 Core (Unli Bandwidth)",
    description:
      "Cocok untuk beban kerja menengah. CPU: Intel Xeon E5-4650 v2 @2.40GHz.",
    price: "Rp 75.000",
    priceNote: "/ bulan",
    specs: ["4 vCPU", "8 GB RAM", "Unlimited Bandwidth"],
    featured: true,
  },
  {
    id: "vps-2690v4-4gb-2core-60k",
    name: "VPS Intel 2690 v4 4GB 2 Core",
    description:
      "Disk 30GB, bisa tambah disk +Rp10.000/10GB. Unlimited traffic.",
    price: "Rp 60.000",
    priceNote: "/ bulan",
    specs: ["2 vCPU 2690 v4", "4 GB RAM", "Disk 30 GB (+10k/10GB)"],
    featured: false,
  },
  {
    id: "vps-2690v4-8gb-4core-75k",
    name: "VPS Intel 2690 v4 8GB 4 Core",
    description:
      "Disk 30GB, bisa tambah disk +Rp10.000/10GB. Unlimited traffic.",
    price: "Rp 75.000",
    priceNote: "/ bulan",
    specs: ["4 vCPU 2690 v4", "8 GB RAM", "Disk 30 GB (+10k/10GB)"],
    featured: false,
  },

  // NVMe Hong Kong (harga +15k tiap paket)
  {
    id: "nvme-2gb-hk",
    name: "NVMe 2 GB (HK)",
    description: "Fair-share compute. Lokasi: Hong Kong.",
    price: "Rp 96.402",
    priceNote: "/ bulan",
    specs: ["1 vCPU", "2 GB RAM", "10 GB NVMe • 1 TB"],
    featured: false,
  },
  {
    id: "nvme-4gb-hk",
    name: "NVMe 4 GB (HK)",
    description: "Fair-share compute. Lokasi: Hong Kong.",
    price: "Rp 137.103",
    priceNote: "/ bulan",
    specs: ["2 vCPU", "4 GB RAM", "20 GB NVMe • 1 TB"],
    featured: true,
  },
  {
    id: "nvme-8gb-hk",
    name: "NVMe 8 GB (HK)",
    description: "Fair-share compute. Lokasi: Hong Kong.",
    price: "Rp 198.154",
    priceNote: "/ bulan",
    specs: ["2 vCPU", "8 GB RAM", "35 GB NVMe • 3 TB"],
    featured: false,
  },
  {
    id: "nvme-12gb-hk",
    name: "NVMe 12 GB (HK)",
    description: "1 dedicated core. Lokasi: Hong Kong.",
    price: "Rp 259.206",
    priceNote: "/ bulan",
    specs: ["4 vCPU", "12 GB RAM", "50 GB NVMe • 5 TB"],
    featured: false,
  },
  {
    id: "nvme-16gb-hk",
    name: "NVMe 16 GB (HK)",
    description: "2 dedicated cores. Lokasi: Hong Kong.",
    price: "Rp 320.257",
    priceNote: "/ bulan",
    specs: ["4 vCPU", "16 GB RAM", "75 GB NVMe • 5 TB"],
    featured: false,
  },
  {
    id: "nvme-24gb-hk",
    name: "NVMe 24 GB (HK)",
    description: "2 dedicated cores. Lokasi: Hong Kong.",
    price: "Rp 462.710",
    priceNote: "/ bulan",
    specs: ["6 vCPU", "24 GB RAM", "100 GB NVMe • 7 TB"],
    featured: false,
  },
  {
    id: "nvme-32gb-hk",
    name: "NVMe 32 GB (HK)",
    description: "3 dedicated cores. Lokasi: Hong Kong.",
    price: "Rp 605.163",
    priceNote: "/ bulan",
    specs: ["8 vCPU", "32 GB RAM", "125 GB NVMe • 8 TB"],
    featured: false,
  },
  {
    id: "nvme-48gb-hk",
    name: "NVMe 48 GB (HK)",
    description: "4 dedicated cores. Lokasi: Hong Kong.",
    price: "Rp 808.668",
    priceNote: "/ bulan",
    specs: ["8 vCPU", "48 GB RAM", "150 GB NVMe • 10 TB"],
    featured: false,
  },
  {
    id: "nvme-64gb-hk",
    name: "NVMe 64 GB (HK)",
    description: "6 dedicated cores. Lokasi: Hong Kong.",
    price: "Rp 1.012.172",
    priceNote: "/ bulan",
    specs: ["12 vCPU", "64 GB RAM", "200 GB NVMe • 15 TB"],
    featured: false,
  },
  {
    id: "nvme-96gb-hk",
    name: "NVMe 96 GB (HK)",
    description: "8 dedicated cores. Lokasi: Hong Kong.",
    price: "Rp 1.419.181",
    priceNote: "/ bulan",
    specs: ["16 vCPU", "96 GB RAM", "250 GB NVMe • 20 TB"],
    featured: false,
  },
  {
    id: "nvme-128gb-hk",
    name: "NVMe 128 GB (HK)",
    description: "10 dedicated cores. Lokasi: Hong Kong.",
    price: "Rp 2.009.344",
    priceNote: "/ bulan",
    specs: ["20 vCPU", "128 GB RAM", "375 GB NVMe • 35 TB"],
    featured: false,
  },
  {
    id: "nvme-256gb-hk",
    name: "NVMe 256 GB (HK)",
    description: "20 dedicated cores. Lokasi: Hong Kong.",
    price: "Rp 3.922.285",
    priceNote: "/ bulan",
    specs: ["40 vCPU", "256 GB RAM", "1000 GB NVMe • 70 TB"],
    featured: false,
  },

  // Akaya Cloud (Indonesia)
  {
    id: "akaya-2gb-1vcpu-20gb-35k",
    name: "Akaya Cloud 2 GB",
    description: "Indonesia • Unlimited Bandwidth • Status: Out of Stock",
    price: "Rp 35.000",
    priceNote: "/ bulan",
    specs: ["1 vCPU", "2 GB RAM", "20 GB Storage"],
    featured: false,
  },
  {
    id: "akaya-4gb-2vcpu-40gb-60k",
    name: "Akaya Cloud 4 GB",
    description: "Indonesia • Unlimited Bandwidth",
    price: "Rp 60.000",
    priceNote: "/ bulan",
    specs: ["2 vCPU", "4 GB RAM", "40 GB Storage"],
    featured: false,
  },
  {
    id: "akaya-8gb-4vcpu-60gb-90k",
    name: "Akaya Cloud 8 GB",
    description: "Indonesia • Unlimited Bandwidth",
    price: "Rp 90.000",
    priceNote: "/ bulan",
    specs: ["4 vCPU", "8 GB RAM", "60 GB Storage"],
    featured: true,
  },
  {
    id: "akaya-16gb-8vcpu-100gb-175k",
    name: "Akaya Cloud 16 GB",
    description: "Indonesia • Unlimited Bandwidth",
    price: "Rp 175.000",
    priceNote: "/ bulan",
    specs: ["8 vCPU", "16 GB RAM", "100 GB Storage"],
    featured: false,
  },
  {
    id: "akaya-32gb-8vcpu-150gb-350k",
    name: "Akaya Cloud 32 GB",
    description: "Indonesia • Unlimited Bandwidth",
    price: "Rp 350.000",
    priceNote: "/ bulan",
    specs: ["8 vCPU", "32 GB RAM", "150 GB Storage"],
    featured: false,
  },

  // Platinum 01–24 (Intel Platinum 8272CL — Vietnam 10Gbps)
  {
    id: "platinum-01",
    name: "Platinum 01",
    description: "Vietnam • 10 Gbps • Intel Platinum 8272CL",
    price: "Rp 65.224",
    priceNote: "/ bulan",
    specs: ["1 vCPU", "1 GB RAM", "20 GB Storage"],
    featured: false,
  },
  {
    id: "platinum-02",
    name: "Platinum 02",
    description: "Vietnam • 10 Gbps • Intel Platinum 8272CL",
    price: "Rp 86.965",
    priceNote: "/ bulan",
    specs: ["1 vCPU", "2 GB RAM", "25 GB Storage"],
    featured: false,
  },
  {
    id: "platinum-03",
    name: "Platinum 03",
    description: "Vietnam • 10 Gbps • Intel Platinum 8272CL",
    price: "Rp 121.751",
    priceNote: "/ bulan",
    specs: ["2 vCPU", "2 GB RAM", "25 GB Storage"],
    featured: false,
  },
  {
    id: "platinum-04",
    name: "Platinum 04",
    description: "Vietnam • 10 Gbps • Intel Platinum 8272CL",
    price: "Rp 156.537",
    priceNote: "/ bulan",
    specs: ["2 vCPU", "4 GB RAM", "30 GB Storage"],
    featured: true,
  },
  {
    id: "platinum-05",
    name: "Platinum 05",
    description: "Vietnam • 10 Gbps • Intel Platinum 8272CL",
    price: "Rp 182.626",
    priceNote: "/ bulan",
    specs: ["3 vCPU", "3 GB RAM", "30 GB Storage"],
    featured: false,
  },
  {
    id: "platinum-06",
    name: "Platinum 06",
    description: "Vietnam • 10 Gbps • Intel Platinum 8272CL",
    price: "Rp 234.805",
    priceNote: "/ bulan",
    specs: ["3 vCPU", "6 GB RAM", "30 GB Storage"],
    featured: false,
  },
  {
    id: "platinum-07",
    name: "Platinum 07",
    description: "Vietnam • 10 Gbps • Intel Platinum 8272CL",
    price: "Rp 243.501",
    priceNote: "/ bulan",
    specs: ["4 vCPU", "4 GB RAM", "40 GB Storage"],
    featured: false,
  },
  {
    id: "platinum-08",
    name: "Platinum 08",
    description: "Vietnam • 10 Gbps • Intel Platinum 8272CL",
    price: "Rp 278.287",
    priceNote: "/ bulan",
    specs: ["4 vCPU", "6 GB RAM", "40 GB Storage"],
    featured: false,
  },
  {
    id: "platinum-09",
    name: "Platinum 09",
    description: "Vietnam • 10 Gbps • Intel Platinum 8272CL",
    price: "Rp 313.073",
    priceNote: "/ bulan",
    specs: ["4 vCPU", "8 GB RAM", "40 GB Storage"],
    featured: false,
  },
  {
    id: "platinum-10",
    name: "Platinum 10",
    description: "Vietnam • 10 Gbps • Intel Platinum 8272CL",
    price: "Rp 400.038",
    priceNote: "/ bulan",
    specs: ["6 vCPU", "8 GB RAM", "40 GB Storage"],
    featured: false,
  },
  {
    id: "platinum-11",
    name: "Platinum 11",
    description: "Vietnam • 10 Gbps • Intel Platinum 8272CL",
    price: "Rp 469.609",
    priceNote: "/ bulan",
    specs: ["6 vCPU", "12 GB RAM", "50 GB Storage"],
    featured: false,
  },
  {
    id: "platinum-12",
    name: "Platinum 12",
    description: "Vietnam • 10 Gbps • Intel Platinum 8272CL",
    price: "Rp 556.574",
    priceNote: "/ bulan",
    specs: ["8 vCPU", "12 GB RAM", "50 GB Storage"],
    featured: false,
  },
  {
    id: "platinum-13",
    name: "Platinum 13",
    description: "Vietnam • 10 Gbps • Intel Platinum 8272CL",
    price: "Rp 626.145",
    priceNote: "/ bulan",
    specs: ["8 vCPU", "16 GB RAM", "60 GB Storage"],
    featured: false,
  },
  {
    id: "platinum-14",
    name: "Platinum 14",
    description: "Vietnam • 10 Gbps • Intel Platinum 8272CL",
    price: "Rp 765.289",
    priceNote: "/ bulan",
    specs: ["8 vCPU", "24 GB RAM", "70 GB Storage"],
    featured: false,
  },
  {
    id: "platinum-15",
    name: "Platinum 15",
    description: "Vietnam • 10 Gbps • Intel Platinum 8272CL",
    price: "Rp 782.682",
    priceNote: "/ bulan",
    specs: ["10 vCPU", "20 GB RAM", "70 GB Storage"],
    featured: false,
  },
  {
    id: "platinum-16",
    name: "Platinum 16",
    description: "Vietnam • 10 Gbps • Intel Platinum 8272CL",
    price: "Rp 834.860",
    priceNote: "/ bulan",
    specs: ["12 vCPU", "18 GB RAM", "80 GB Storage"],
    featured: false,
  },
  {
    id: "platinum-17",
    name: "Platinum 17",
    description: "Vietnam • 10 Gbps • Intel Platinum 8272CL",
    price: "Rp 1.170.069",
    priceNote: "/ bulan",
    specs: ["16 vCPU", "24 GB RAM", "100 GB Storage"],
    featured: false,
  },
  {
    id: "platinum-18",
    name: "Platinum 18",
    description: "Vietnam • 10 Gbps • Intel Platinum 8272CL",
    price: "Rp 1.252.290",
    priceNote: "/ bulan",
    specs: ["16 vCPU", "32 GB RAM", "100 GB Storage"],
    featured: false,
  },
  {
    id: "platinum-19",
    name: "Platinum 19",
    description: "Vietnam • 10 Gbps • Intel Platinum 8272CL",
    price: "Rp 1.565.363",
    priceNote: "/ bulan",
    specs: ["20 vCPU", "40 GB RAM", "120 GB Storage"],
    featured: false,
  },
  {
    id: "platinum-20",
    name: "Platinum 20",
    description: "Vietnam • 10 Gbps • Intel Platinum 8272CL",
    price: "Rp 2.156.722",
    priceNote: "/ bulan",
    specs: ["24 vCPU", "64 GB RAM", "150 GB Storage"],
    featured: false,
  },
  {
    id: "platinum-21",
    name: "Platinum 21",
    description: "Vietnam • 10 Gbps • Intel Platinum 8272CL",
    price: "Rp 3.061.153",
    priceNote: "/ bulan",
    specs: ["32 vCPU", "96 GB RAM", "180 GB Storage"],
    featured: false,
  },
  {
    id: "platinum-22",
    name: "Platinum 22",
    description: "Vietnam • 10 Gbps • Intel Platinum 8272CL",
    price: "Rp 4.313.443",
    priceNote: "/ bulan",
    specs: ["48 vCPU", "128 GB RAM", "200 GB Storage"],
    featured: false,
  },
  {
    id: "platinum-23",
    name: "Platinum 23",
    description: "Vietnam • 10 Gbps • Intel Platinum 8272CL",
    price: "Rp 5.565.733",
    priceNote: "/ bulan",
    specs: ["64 vCPU", "160 GB RAM", "250 GB Storage"],
    featured: false,
  },
  {
    id: "platinum-24",
    name: "Platinum 24",
    description: "Vietnam • 10 Gbps • Intel Platinum 8272CL",
    price: "Rp 8.626.886",
    priceNote: "/ bulan",
    specs: ["96 vCPU", "256 GB RAM", "300 GB Storage"],
    featured: false,
  },

  // EPYC 01–24 (AMD EPYC 7J13 — Vietnam 10Gbps)
  {
    id: "epyc-01",
    name: "EPYC 01",
    description: "Vietnam • 10 Gbps • AMD EPYC 7J13",
    price: "Rp 65.224",
    priceNote: "/ bulan",
    specs: ["1 vCPU", "1 GB RAM", "20 GB Storage"],
    featured: false,
  },
  {
    id: "epyc-02",
    name: "EPYC 02",
    description: "Vietnam • 10 Gbps • AMD EPYC 7J13",
    price: "Rp 86.965",
    priceNote: "/ bulan",
    specs: ["1 vCPU", "2 GB RAM", "25 GB Storage"],
    featured: false,
  },
  {
    id: "epyc-03",
    name: "EPYC 03",
    description: "Vietnam • 10 Gbps • AMD EPYC 7J13",
    price: "Rp 121.751",
    priceNote: "/ bulan",
    specs: ["2 vCPU", "2 GB RAM", "25 GB Storage"],
    featured: false,
  },
  {
    id: "epyc-04",
    name: "EPYC 04",
    description: "Vietnam • 10 Gbps • AMD EPYC 7J13",
    price: "Rp 156.537",
    priceNote: "/ bulan",
    specs: ["2 vCPU", "4 GB RAM", "30 GB Storage"],
    featured: true,
  },
  {
    id: "epyc-05",
    name: "EPYC 05",
    description: "Vietnam • 10 Gbps • AMD EPYC 7J13",
    price: "Rp 182.626",
    priceNote: "/ bulan",
    specs: ["3 vCPU", "3 GB RAM", "30 GB Storage"],
    featured: false,
  },
  {
    id: "epyc-06",
    name: "EPYC 06",
    description: "Vietnam • 10 Gbps • AMD EPYC 7J13",
    price: "Rp 234.805",
    priceNote: "/ bulan",
    specs: ["3 vCPU", "6 GB RAM", "30 GB Storage"],
    featured: false,
  },
  {
    id: "epyc-07",
    name: "EPYC 07",
    description: "Vietnam • 10 Gbps • AMD EPYC 7J13",
    price: "Rp 243.501",
    priceNote: "/ bulan",
    specs: ["4 vCPU", "4 GB RAM", "40 GB Storage"],
    featured: false,
  },
  {
    id: "epyc-08",
    name: "EPYC 08",
    description: "Vietnam • 10 Gbps • AMD EPYC 7J13",
    price: "Rp 278.287",
    priceNote: "/ bulan",
    specs: ["4 vCPU", "6 GB RAM", "40 GB Storage"],
    featured: false,
  },
  {
    id: "epyc-09",
    name: "EPYC 09",
    description: "Vietnam • 10 Gbps • AMD EPYC 7J13",
    price: "Rp 313.073",
    priceNote: "/ bulan",
    specs: ["4 vCPU", "8 GB RAM", "40 GB Storage"],
    featured: false,
  },
  {
    id: "epyc-10",
    name: "EPYC 10",
    description: "Vietnam • 10 Gbps • AMD EPYC 7J13",
    price: "Rp 400.038",
    priceNote: "/ bulan",
    specs: ["6 vCPU", "8 GB RAM", "40 GB Storage"],
    featured: false,
  },
  {
    id: "epyc-11",
    name: "EPYC 11",
    description: "Vietnam • 10 Gbps • AMD EPYC 7J13",
    price: "Rp 469.609",
    priceNote: "/ bulan",
    specs: ["6 vCPU", "12 GB RAM", "50 GB Storage"],
    featured: false,
  },
  {
    id: "epyc-12",
    name: "EPYC 12",
    description: "Vietnam • 10 Gbps • AMD EPYC 7J13",
    price: "Rp 556.574",
    priceNote: "/ bulan",
    specs: ["8 vCPU", "12 GB RAM", "50 GB Storage"],
    featured: false,
  },
  {
    id: "epyc-13",
    name: "EPYC 13",
    description: "Vietnam • 10 Gbps • AMD EPYC 7J13",
    price: "Rp 626.145",
    priceNote: "/ bulan",
    specs: ["8 vCPU", "16 GB RAM", "60 GB Storage"],
    featured: false,
  },
  {
    id: "epyc-14",
    name: "EPYC 14",
    description: "Vietnam • 10 Gbps • AMD EPYC 7J13",
    price: "Rp 765.289",
    priceNote: "/ bulan",
    specs: ["8 vCPU", "24 GB RAM", "70 GB Storage"],
    featured: false,
  },
  {
    id: "epyc-15",
    name: "EPYC 15",
    description: "Vietnam • 10 Gbps • AMD EPYC 7J13",
    price: "Rp 782.682",
    priceNote: "/ bulan",
    specs: ["10 vCPU", "20 GB RAM", "70 GB Storage"],
    featured: false,
  },
  {
    id: "epyc-16",
    name: "EPYC 16",
    description: "Vietnam • 10 Gbps • AMD EPYC 7J13",
    price: "Rp 834.860",
    priceNote: "/ bulan",
    specs: ["12 vCPU", "18 GB RAM", "80 GB Storage"],
    featured: false,
  },
  {
    id: "epyc-17",
    name: "EPYC 17",
    description: "Vietnam • 10 Gbps • AMD EPYC 7J13",
    price: "Rp 1.113.147",
    priceNote: "/ bulan",
    specs: ["16 vCPU", "24 GB RAM", "100 GB Storage"],
    featured: false,
  },
  {
    id: "epyc-18",
    name: "EPYC 18",
    description: "Vietnam • 10 Gbps • AMD EPYC 7J13",
    price: "Rp 1.252.290",
    priceNote: "/ bulan",
    specs: ["16 vCPU", "32 GB RAM", "100 GB Storage"],
    featured: false,
  },
  {
    id: "epyc-19",
    name: "EPYC 19",
    description: "Vietnam • 10 Gbps • AMD EPYC 7J13",
    price: "Rp 1.565.363",
    priceNote: "/ bulan",
    specs: ["20 vCPU", "40 GB RAM", "120 GB Storage"],
    featured: false,
  },
  {
    id: "epyc-20",
    name: "EPYC 20",
    description: "Vietnam • 10 Gbps • AMD EPYC 7J13",
    price: "Rp 2.156.722",
    priceNote: "/ bulan",
    specs: ["24 vCPU", "64 GB RAM", "150 GB Storage"],
    featured: false,
  },
  {
    id: "epyc-21",
    name: "EPYC 21",
    description: "Vietnam • 10 Gbps • AMD EPYC 7J13",
    price: "Rp 3.061.153",
    priceNote: "/ bulan",
    specs: ["32 vCPU", "96 GB RAM", "180 GB Storage"],
    featured: false,
  },
  {
    id: "epyc-22",
    name: "EPYC 22",
    description: "Vietnam • 10 Gbps • AMD EPYC 7J13",
    price: "Rp 4.313.443",
    priceNote: "/ bulan",
    specs: ["48 vCPU", "128 GB RAM", "200 GB Storage"],
    featured: false,
  },
  {
    id: "epyc-23",
    name: "EPYC 23",
    description: "Vietnam • 10 Gbps • AMD EPYC 7J13",
    price: "Rp 5.565.733",
    priceNote: "/ bulan",
    specs: ["64 vCPU", "160 GB RAM", "250 GB Storage"],
    featured: false,
  },
  {
    id: "epyc-24",
    name: "EPYC 24",
    description: "Vietnam • 10 Gbps • AMD EPYC 7J13",
    price: "Rp 8.626.886",
    priceNote: "/ bulan",
    specs: ["96 vCPU", "256 GB RAM", "300 GB Storage"],
    featured: false,
  },

  // Ryzen 01–08 (Vietnam 10Gbps)
  {
    id: "ryzen-01",
    name: "Ryzen 01",
    description: "Vietnam • 10 Gbps • AMD Ryzen 9 9950X",
    price: "Rp 268.800",
    priceNote: "/ bulan",
    specs: ["2 vCPU", "4 GB RAM", "40 GB Storage"],
    featured: false,
  },
  {
    id: "ryzen-02",
    name: "Ryzen 02",
    description: "Vietnam • 10 Gbps • AMD Ryzen 9 9950X",
    price: "Rp 403.200",
    priceNote: "/ bulan",
    specs: ["3 vCPU", "6 GB RAM", "50 GB Storage"],
    featured: false,
  },
  {
    id: "ryzen-03",
    name: "Ryzen 03",
    description: "Vietnam • 10 Gbps • AMD Ryzen 9 9950X",
    price: "Rp 537.600",
    priceNote: "/ bulan",
    specs: ["4 vCPU", "8 GB RAM", "60 GB Storage"],
    featured: true,
  },
  {
    id: "ryzen-04",
    name: "Ryzen 04",
    description: "Vietnam • 10 Gbps • AMD Ryzen 9 9950X",
    price: "Rp 806.399",
    priceNote: "/ bulan",
    specs: ["6 vCPU", "12 GB RAM", "70 GB Storage"],
    featured: false,
  },
  {
    id: "ryzen-05",
    name: "Ryzen 05",
    description: "Vietnam • 10 Gbps • AMD Ryzen 9 9950X",
    price: "Rp 1.075.199",
    priceNote: "/ bulan",
    specs: ["8 vCPU", "16 GB RAM", "80 GB Storage"],
    featured: false,
  },
  {
    id: "ryzen-06",
    name: "Ryzen 06",
    description: "Vietnam • 10 Gbps • AMD Ryzen 9 9950X",
    price: "Rp 1.470.492",
    priceNote: "/ bulan",
    specs: ["10 vCPU", "24 GB RAM", "90 GB Storage"],
    featured: false,
  },
  {
    id: "ryzen-07",
    name: "Ryzen 07",
    description: "Vietnam • 10 Gbps • AMD Ryzen 9 9950X",
    price: "Rp 1.739.292",
    priceNote: "/ bulan",
    specs: ["12 vCPU", "28 GB RAM", "100 GB Storage"],
    featured: false,
  },
  {
    id: "ryzen-08",
    name: "Ryzen 08",
    description: "Vietnam • 10 Gbps • AMD Ryzen 9 9950X",
    price: "Rp 2.008.091",
    priceNote: "/ bulan",
    specs: ["14 vCPU", "32 GB RAM", "120 GB Storage"],
    featured: false,
  },

  // FlexNet Cloud VPS 10Gbps No Limit (Indonesia)
  {
    id: "flexnet-10gbps-unli",
    name: "FlexNet Cloud VPS 10Gbps No Limit",
    description: "Flexs Cloud • Indonesia • Network Unlimited (10 Gbps)",
    price: "Starting from Rp 250.000",
    priceNote: "/ bulan",
    specs: ["12 vCPU", "8 GB RAM", "120 GB Storage"],
    featured: true,
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
