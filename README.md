# WangStore — Website Multi-Halaman (AULA WANG)

Website toko produk digital / hosting / VPS. Multi-halaman, tema monokrom
(hitam–putih–abu), tanpa backend dan tanpa database.

- **Stack:** Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- **Rendering:** semua halaman di-prerender jadi HTML statis saat build
- **Target deploy:** Vercel (free tier cukup)

## Struktur Folder

```
/
├── app/
│   ├── layout.tsx          # Root layout: font Inter, Navbar, Footer, metadata
│   ├── globals.css         # Import Tailwind + tema warna + styling scrollbar
│   ├── page.tsx            # "/"            Home
│   ├── produk/page.tsx     # "/produk"      Grid semua produk
│   ├── cara-order/page.tsx # "/cara-order"  Step-by-step + FAQ
│   └── kontak/page.tsx     # "/kontak"      WA / Discord / Email + jam operasional
├── components/
│   ├── Navbar.tsx          # Sticky navbar, highlight halaman aktif (client)
│   ├── Footer.tsx          # Footer bersama
│   ├── ProductCard.tsx     # Kartu produk + tombol Order via WhatsApp
│   ├── PageHeader.tsx      # Header judul halaman (dipakai 3 halaman)
│   └── FaqAccordion.tsx    # Accordion FAQ (client)
├── lib/
│   └── config.ts           # ★ SEMUA DATA YANG PERLU DIGANTI ADA DI SINI
├── next.config.ts
├── postcss.config.mjs      # Setup resmi Tailwind v4
├── tsconfig.json
├── vercel.json
└── package.json
```

## Menjalankan di Lokal

```bash
npm install
npm run dev      # buka http://localhost:3000
npm run build    # cek build production sebelum deploy
```

## Yang WAJIB Diedit Sebelum Deploy

Semuanya ada di **`lib/config.ts`** — cari komentar `GANTI DI SINI`:

1. `contact.whatsappNumber` — format `62xxxxxxxxxxx`, tanpa `+`, tanpa `0` depan, tanpa spasi.
2. `contact.whatsappGroupUrl` — link grup WhatsApp / komunitas resmi kamu.
3. `contact.email` dan `contact.whatsappLabel`.
4. `operatingHours` — jam operasional toko.
5. `products` — daftar katalog produk: nama, deskripsi, harga, `specs`, dan `featured` (`featured: true` = tampil di section Produk Unggulan di Home).
6. `site` — nama toko, tagline, deskripsi, dan `site.url` (isi domain final setelah deploy).
7. Opsional: `reasons`, `orderSteps`, `faqs`, dan template pesan di fungsi `waLink()`.

File lain tidak perlu disentuh kecuali mau ubah desain.

## Deploy ke Vercel (via GitHub)

### Kenapa tidak bisa asal upload folder?

Website lama berupa HTML statis, jadi bisa di-drag & drop. Yang ini **Next.js**:
file `.tsx` dan Tailwind harus dikompilasi dulu (`next build`) menjadi HTML, CSS,
dan JS. Browser tidak bisa membaca `.tsx` langsung. Jadi harus ada **build step**
yang dijalankan Vercel di servernya — caranya dengan menghubungkan repo Git,
supaya Vercel yang menjalankan `npm install && npm run build`.

(Alternatifnya: build di laptop lalu upload hasilnya, tapi via GitHub jauh lebih
praktis karena setiap `git push` otomatis re-deploy.)

### Langkah-langkah

1. **Push project ini ke GitHub.**
   ```bash
   git add .
   git commit -m "WangStore: Next.js multi-page"
   git push origin <nama-branch-kamu>
   ```
   Kalau belum ada remote:
   ```bash
   git remote add origin https://github.com/USERNAME/wangstore.git
   git push -u origin main
   ```
2. Buka [vercel.com](https://vercel.com) → **Login with GitHub**.
3. Klik **Add New…** → **Project**.
4. Pilih repo `wangstore` → **Import**. (Kalau repo tidak muncul, klik
   *Adjust GitHub App Permissions* dan beri akses ke repo tersebut.)
5. Di halaman konfigurasi:
   - **Framework Preset:** `Next.js` (terdeteksi otomatis — biarkan).
   - **Build Command:** `npm run build` (default, biarkan).
   - **Output Directory:** biarkan kosong/default.
   - **Environment Variables:** tidak ada, kosongkan.
6. Klik **Deploy**, tunggu ±1–2 menit sampai muncul URL `namaproject.vercel.app`.
7. **Update selanjutnya:** cukup edit `lib/config.ts` → `git commit` → `git push`.
   Vercel otomatis build & deploy ulang.
8. **Custom domain (opsional):** Project → **Settings** → **Domains** → Add,
   lalu arahkan DNS sesuai instruksi Vercel.

> Catatan: kalau build di Vercel gagal, buka tab **Deployments** → klik deployment
> yang merah → **Build Logs** untuk melihat pesan errornya.

## Catatan Teknis

- Menggunakan modern system font stack (bebas dependensi eksternal, performa instan dan stabil saat build).
- Tailwind v4 dikonfigurasi lewat `@theme` di `app/globals.css`, tidak butuh
  `tailwind.config.js`.
- Tidak ada gambar eksternal. Semua placeholder visual pakai gradient div dan
  diberi komentar `GANTI DENGAN GAMBAR ASLI DI SINI`.
- Semua link eksternal pakai `target="_blank" rel="noopener noreferrer"`.
