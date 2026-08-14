/* 
  WangStore - Config & Logic
  100% Static, Vanilla JS, No Build
  -------------------------------------------------------------
  WAJIB EDIT SEBELUM DEPLOY - LIHAT BAGIAN CONFIG DI BAWAH
*/

const CONFIG = {
  // ============ KONTAK - GANTI DI SINI ============
  whatsappNumber: "6281234567890", // GANTI DI SINI - Format 62xxxx tanpa +, tanpa 0, tanpa spasi. Contoh: 6281234567890
  discordLink: "https://discord.gg/INVITE_KAMU", // GANTI DI SINI
  email: "support@wangstore.id", // GANTI DI SINI

  // ============ TOKO ============
  storeName: "WangStore",
  tagline: "Digital Store Terpercaya - Hosting, VPS, & Produk Digital",

  // ============ PESAN WA TEMPLATE - GANTI DI SINI JIKA MAU ============
  waMessageTemplate: (productName) => `Halo ${CONFIG.storeName}, saya mau order ${productName}. Mohon info detailnya ya!`,

  // ============ PRODUK - GANTI DI SINI (6 PRODUK DUMMY) ============
  // Untuk tiap produk: id unik, nama, deskripsi singkat, harga, badge, icon (emoji)
  products: [
    {
      id: "vps-cultivator",
      name: "VPS Cultivator 2vCPU",
      description: "VPS performa tinggi untuk bot, hosting ringan & uji kultivasi. NVMe, 99.9% uptime.",
      price: "Rp 35.000 / bulan",
      priceNote: "start from",
      badge: "MOST POPULAR",
      icon: "⚔️"
    },
    {
      id: "vps-elder",
      name: "VPS Elder 4vCPU",
      description: "VPS elder realm, cocok untuk panel, game server kecil & project production early.",
      price: "Rp 75.000 / bulan",
      priceNote: "best value",
      badge: "RECOMMENDED",
      icon: "🐉"
    },
    {
      id: "hosting-sect",
      name: "Hosting Sect Unlimited",
      description: "cPanel hosting unlimited bandwidth, free SSL & backup harian. Optimized WordPress.",
      price: "Rp 25.000 / bulan",
      priceNote: "domain belum termasuk",
      badge: "HOT",
      icon: "🏯"
    },
    {
      id: "domain-spirit",
      name: "Domain Spirit .COM/.ID",
      description: "Registrasi domain kilat, manage DNS full control, whois privacy optional.",
      price: "Rp 135.000 / tahun",
      priceNote: ".com price",
      badge: "NEW",
      icon: "📜"
    },
    {
      id: "bot-auto",
      name: "Script Bot Auto Order",
      description: "Source script auto order, auto reply WA/Tele. Dokumentasi lengkap + update.",
      price: "Rp 50.000",
      priceNote: "lisensi lifetime",
      badge: "DIGITAL",
      icon: "🤖"
    },
    {
      id: "panel-pterodactyl",
      name: "Panel Pterodactyl Private",
      description: "Jasa install & setup panel pterodactyl private + theme custom wuxia.",
      price: "Rp 120.000",
      priceNote: "one time setup",
      badge: "LIMITED",
      icon: "🛡️"
    }
  ]
};

// ---------- Helper: Build WhatsApp Link ----------
function buildWaLink(productNameOrEmpty) {
  const number = CONFIG.whatsappNumber.replace(/\D/g, ""); // hanya angka
  let text = productNameOrEmpty
    ? CONFIG.waMessageTemplate(productNameOrEmpty)
    : `Halo ${CONFIG.storeName}, saya mau tanya tentang produk & layanan.`;

  // Validasi nomor tidak kosong
  if (!number) {
    console.warn("CONFIG.whatsappNumber belum diisi!");
    return "#";
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

// ---------- Render Products ----------
function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  grid.innerHTML = CONFIG.products.map((p) => {
    const waLink = buildWaLink(p.name);
    return `
      <article class="product-card">
        <div class="product-top">
          <span class="product-badge">${escapeHtml(p.badge)}</span>
          <span class="product-icon" aria-hidden="true">${escapeHtml(p.icon)}</span>
        </div>
        <h3 class="product-name">${escapeHtml(p.name)}</h3>
        <p class="product-desc">${escapeHtml(p.description)}</p>
        <div class="product-meta">
          <div class="product-price">
            ${escapeHtml(p.price)}
            <small>${escapeHtml(p.priceNote || "")}</small>
          </div>
          <a href="${waLink}" target="_blank" rel="noopener" class="product-order" data-product="${escapeHtml(p.id)}">Order</a>
        </div>
      </article>
    `;
  }).join("");
}

// Basic HTML escape untuk safety (prevent XSS jika user edit produk manual)
function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ---------- Kontak Links ----------
function bindContactLinks() {
  const waGeneral = buildWaLink("");
  const waFooter = document.getElementById("footerWA");
  const waFloat = document.getElementById("floatingWA");
  const discordEl = document.getElementById("footerDiscord");
  const emailEl = document.getElementById("footerEmail");

  if (waFooter) waFooter.href = waGeneral;
  if (waFloat) waFloat.href = waGeneral;

  if (discordEl) {
    discordEl.href = CONFIG.discordLink || "#";
    // Jika placeholder, tandai
    if (!CONFIG.discordLink || CONFIG.discordLink.includes("INVITE_KAMU")) {
      discordEl.title = "Ganti CONFIG.discordLink dulu";
    }
  }

  if (emailEl) {
    const email = CONFIG.email;
    emailEl.href = email.includes("@") ? `mailto:${email}` : "#";
    emailEl.textContent = email;
  }
}

// ---------- CTA Scroll ----------
function bindScrollCTA() {
  const cta = document.getElementById("ctaScroll");
  if (!cta) return;
  cta.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector("#produk");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

// ---------- Mobile Menu ----------
function bindMobileMenu() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("mobileMenu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  // Close on link click
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => menu.classList.remove("open"));
  });

  // Close on outside
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove("open");
    }
  });
}

// ---------- Tahun Footer ----------
function setYear() {
  const el = document.getElementById("yearNow");
  if (el) el.textContent = new Date().getFullYear();
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  // Validasi wajib edit - log warning di console untuk dev
  if (CONFIG.whatsappNumber === "6281234567890" || CONFIG.whatsappNumber.includes("xxxxxxxx")) {
    console.warn("%c[WangStore] WAJIB GANTI NOMOR WA di CONFIG.whatsappNumber!", "color: #e31837; font-weight: bold; font-size: 14px;");
  }

  renderProducts();
  bindContactLinks();
  bindScrollCTA();
  bindMobileMenu();
  setYear();
});
