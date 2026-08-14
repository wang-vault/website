# WangStore - Landing Page AULA WANG

Landing page toko online produk digital / hosting / VPS bertema wuxia modern "AULA WANG".
- Stack: HTML + CSS + JS vanilla, 100% static, no build step
- Siap deploy ke Vercel langsung
- Mobile-first, Dark mode Red/Gold

## Struktur File
```
/
├── index.html   # Struktur halaman (Hero, Produk, Cara Order, Footer)
├── style.css    # Styling dark wuxia + responsive
├── script.js    # CONFIG pusat + render produk + WA link logic
└── vercel.json  # Config optional Vercel (cleanUrls + security headers)
```

### Semua yang WAJIB diganti ada di `script.js` paling atas:

```js
const CONFIG = {
  whatsappNumber: "6281234567890", // GANTI DI SINI
  discordLink: "https://discord.gg/xxx",
  email: "support@wangstore.id",
  products: [ ... 6 produk ... ]
}
```

## Yang WAJIB Diedit Sebelum Deploy

1. **Nomor WhatsApp** - `CONFIG.whatsappNumber` di `script.js` baris 11
   - Format: `62` diikuti nomor tanpa `+`, tanpa `0`, tanpa spasi.
   - Contoh valid: `6281234567890`
   - Link WA akan otomatis jadi `https://wa.me/NOMOR?text=Halo%20...`

2. **Link Discord** - `CONFIG.discordLink`
   - Ganti dengan invite link asli server kamu.

3. **Email** - `CONFIG.email`

4. **6 Produk Dummy** - `CONFIG.products`
   - Ganti `name`, `description`, `price`, `priceNote`, `badge`, `icon`
   - Icon pakai emoji biar ringan, atau ganti jadi teks.
   - Harga bebas format: `Rp 35.000 / bulan`

5. **Opsional:** `storeName`, `waMessageTemplate` jika mau ubah sapaan WA.

Tidak ada backend/database. Semua edit cukup di `script.js`.

## Cara Deploy ke Vercel (2 Opsi)

### Opsi A: Via GitHub (Paling Mudah - Recommended)
1. Push repo ini ke GitHub:
   - Buat repo baru di github.com/new (nama misal `wangstore`)
   - Di lokal:
     ```bash
     git remote add origin https://github.com/USERNAME/wangstore.git
     git branch -M main
     git push -u origin arena/019fff62-website:main
     # atau push ke branch ini saja jika lewat Arena
     ```
2. Buka vercel.com → Login dengan GitHub → **Add New Project**
3. Import repo `wangstore` → Framework Preset pilih **Other**
4. Build & Output Settings: kosongkan semua (karena static, no build)
5. Klik **Deploy** → selesai, dapat URL `*.vercel.app`
6. Jika update produk/nomor WA, tinggal `git push` → Vercel auto-deploy.

### Opsi B: Via Vercel CLI (Tanpa GitHub)
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Di folder project (`/website`):
   ```bash
   vercel
   ```
   - Ikuti prompt: login → pilih scope → project name `wangstore` → directory `./` → No build.
3. Untuk deploy production:
   ```bash
   vercel --prod
   ```

### Opsi C: Drag & Drop (Vercel Dashboard)
- Buka vercel.com/new → pilih **Browse** → drag folder ini → Deploy.

## Cek Lokal Sebelum Deploy
Cukup buka `index.html` via Live Server atau:
```bash
npx serve .
# atau
python -m http.server 3000
```
Buka http://localhost:3000

Tidak butuh `npm install` / build step.

## Catatan Teknis
- Google Fonts dipakai via CDN valid: `https://fonts.googleapis.com/...` (Inter + Poppins)
- Hover animation pakai `transform + transition 0.25s`, tidak berlebihan
- WA link pakai `wa.me` official API, encodeURIComponent untuk pre-filled message
- Semua link eksternal pakai `target="_blank" rel="noopener"`

## Lisensi
Bebas pakai untuk UMKM / toko online kamu.

---
Made for WangStore - Aula Wang
