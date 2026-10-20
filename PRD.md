# PRODUCT REQUIREMENTS DOCUMENT (PRD)
**Nama Proyek:** Wilcore Company Profile & B2B Garment Website  
**Domain:** https://wilcore.com  
**Industri:** Manufaktur Pakaian / Jasa Konveksi & Garment (B2B & B2C)  
**Platform Pengembangan:** Google Antigravity  
**Versi Dokumen:** 1.0  

---

## 1. Ringkasan Proyek & Tujuan (Objectives)
Membangun website *company profile* untuk **Wilcore**, perusahaan jasa konveksi dan pembuatan seragam. Website ini dirancang khusus dengan fokus pada kecepatan akses (*ultra-lightweight*), struktur kode yang bersih, optimasi mesin pencari (SEO) tingkat lanjut, dan konversi tinggi yang terintegrasi langsung dengan WhatsApp.

### Target Metrik Utama (KPI):
1. **Performa & Kecepatan:** Skor Google PageSpeed Insights **95–100** pada Mobile dan Desktop.
2. **Core Web Vitals:** 
   - Largest Contentful Paint (LCP) < 1.5 detik.
   - Cumulative Layout Shift (CLS) = 0.
   - Interaction to Next Paint (INP) < 100 milidetik.
3. **Konversi (Lead Generation):** Kemudahan pengunjung untuk menghubungi admin via WhatsApp atau mengirim formulir penawaran (*Quotation*) dalam maksimal 2 klik dari halaman mana pun.
4. **Visibilitas SEO:** Struktur halaman dan *Schema Markup* yang siap bersaing di halaman pertama Google untuk kata kunci transaksional dan informasional di industri konveksi.

---

## 2. Profil Target Audiens
1. **Klien Korporat / B2B (HRD, Procurement, Panitia Acara):** Mencari vendor pembuatan seragam kantor (PDH/PDL), kaos *gathering*, jaket perusahaan, atau *wearpack* dengan legalitas jelas, kapasitas besar, dan ketepatan waktu.
2. **Instansi Pemerintah & Pendidikan:** Mencari vendor seragam dinas, jas almamater, atau kaos kegiatan.
3. **Komunitas & Brand Pakaian (B2C/Makloon):** Mencari konveksi dengan kualitas jahitan standar *distro/garment* dan *Minimum Order Quantity* (MOQ) yang jelas.

---

## 3. Spesifikasi Teknis (Tech Stack & Strict Rules)

### 3.1. Tech Stack Utama
- **Framework:** **Astro.js** (Static Site Generation / SSG — *Zero-JS by default* untuk performa maksimal).
- **Styling:** **Tailwind CSS** (Utility-first CSS, otomatis menghapus CSS yang tidak terpakai saat *build*).
- **Interaktivitas:** Vanilla JavaScript / TypeScript murni (hanya untuk *toggle* menu mobile, filter portofolio, dan *generator* pesan WhatsApp).
- **Ikon:** Inline SVG (gaya Lucide Icons / Heroicons) tanpa memuat *library* font eksternal.
- **Tipografi:** Google Fonts (`Inter` atau `Plus Jakarta Sans`) dengan pengaturan `font-display: swap`.
- **Integrasi SEO Astro:** `@astrojs/sitemap` untuk pembuatan *sitemap* otomatis.

### 3.2. Aturan Ketat Pengembangan (Strict Constraints)
- **DILARANG** menggunakan *library* animasi atau UI yang berat (seperti jQuery, Bootstrap, GSAP penuh, Three.js, atau Framer Motion). Gunakan transisi CSS murni (`transition-all`, `@keyframes`).
- **DILARANG** menggunakan video *autoplay* sebagai latar belakang yang menghambat pemuatan halaman.
- **WAJIB** memisahkan data konfigurasi (nomor WhatsApp, alamat, daftar layanan, katalog bahan, dan portofolio) ke dalam folder `src/data/` agar mudah dikelola tanpa mengubah kode komponen UI.
- **WAJIB** menyertakan atribut `width`, `height`, dan `alt` yang deskriptif pada setiap elemen `<img>`.

---

## 4. Arsitektur Informasi & Spesifikasi Halaman (Sitemap)

### 4.1. Beranda (`/`)
- **Hero Section:**
  - Tag `<h1>` utama yang mengandung kata kunci: *"Jasa Konveksi & Vendor Seragam Terpercaya Kualitas Garment"*.
  - Sub-headline persuasif (jaminan tepat waktu, jahitan rapi, bergaransi).
  - 2 Tombol CTA: *"Konsultasi via WhatsApp"* (Utama) & *"Lihat Portofolio"* (Sekunder).
  - *Highlight Statistik:* Kapasitas Produksi/Bulan, Jumlah Klien Puas, Ketepatan Waktu (%).
  - Gambar Hero wajib menggunakan `fetchpriority="high"` dan `loading="eager"`.
- **Keunggulan Wilcore (Why Choose Us):**
  - 4 poin utama: *Quality Control* Ketat (Jahitan Standar Garment), Jaminan Tepat Waktu, Pilihan Bahan Lengkap & Asli, Garansi Produk.
- **Layanan & Produk Utama:**
  - *Grid Card* berisi layanan: Kaos Sablon/Polos, Kemeja PDH/PDL, Jaket & Hoodie, Kaos Polo Bordir, Wearpack/Safety, Jas Almamater. Dilengkapi info minimal order (MOQ).
- **Alur Pemesanan (How to Order):**
  - 4 langkah visual: 1. Konsultasi & Pilih Bahan -> 2. Desain/Mockup & DP -> 3. Proses Produksi & QC -> 4. Pelunasan & Pengiriman.
- **Cuplikan Portofolio:**
  - Menampilkan 6 hasil produksi terbaik lengkap dengan nama proyek, jenis bahan, dan jumlah pesanan.
- **Testimoni & Logo Klien:**
  - Ulasan dari perwakilan perusahaan/instansi.
- **FAQ (Frequently Asked Questions):**
  - Daftar pertanyaan umum (Minimal order, lama produksi, pengiriman luar kota, pembuatan sampel) menggunakan tag `<details>` dan `<summary>` HTML asli yang ringan.

### 4.2. Halaman Layanan (`/layanan`)
- Penjelasan komprehensif setiap produk konveksi yang dikerjakan.
- Spesifikasi teknis tiap layanan: Pilihan bahan yang direkomendasikan, jenis sablon (Plastisol, DTF, Discharge, Rubber) atau bordir komputer, MOQ (misal: minimal 24 pcs), dan estimasi waktu pengerjaan (misal: 7–14 hari kerja).
- Tombol CTA di setiap seksi layanan yang mengarah ke WhatsApp dengan teks otomatis sesuai layanan yang dipilih.

### 4.3. Halaman Panduan Bahan & Size Chart (`/panduan-bahan`)
- **Katalog Karakteristik Kain:**
  - *Kategori Kaos:* Cotton Combed 20s, 24s, 30s, Cotton Bamboo, Polyester/PE.
  - *Kategori Polo:* Lacoste CVC, Lacoste Pique Cotton, Lacoste PE.
  - *Kategori Kemeja & Wearpack:* American Drill, Nagata Drill, Japan Drill, Ripstop, Tropical.
  - *Kategori Jaket:* Cotton Fleece, Baby Terry, Taslan, Mayer, Kanvas.
- **Tabel Size Chart Standar (S, M, L, XL, XXL, 3XL):**
  - Tabel HTML responsif untuk ukuran Lebar Dada $\times$ Panjang Badan (dalam cm) dengan toleransi jahit $\pm 1\text{--}2\text{ cm}$.

### 4.4. Halaman Portofolio (`/portofolio`)
- Galeri foto hasil produksi asli.
- Fitur filter kategori cepat menggunakan Vanilla JS (Semua, Kaos, Kemeja PDH/PDL, Jaket, Polo) tanpa perlu *reload* halaman.
- Setiap kartu portofolio memuat: Gambar (`loading="lazy"`), Judul Proyek, Kategori, Bahan yang Digunakan, dan Tahun/Jumlah Produksi.

### 4.5. Halaman Tentang Kami (`/tentang-kami`)
- Cerita singkat berdirinya Wilcore, Visi, dan Misi perusahaan.
- Kapasitas produksi bulanan dan fasilitas *workshop* (mesin jahit *high-speed*, mesin bordir komputer, meja sablon, tim QC).
- Nilai tambah legalitas usaha untuk mendukung kebutuhan pengadaan B2B/Instansi.

### 4.6. Halaman Kontak & Form Penawaran Cepat (`/kontak`)
- **Informasi Kontak Lengkap:** Alamat *workshop*, nomor telepon/WhatsApp, email resmi, dan jam operasional.
- **Formulir Kalkulator / Request Quotation (Direct to WhatsApp):**
  - Input: Nama Lengkap, Nama Perusahaan/Instansi, Jenis Produk (*Dropdown*), Pilihan Bahan (*Dropdown*), Estimasi Jumlah Pesanan (Pcs), dan Catatan Tambahan.
  - Saat disubmit, Vanilla JS akan memformat data menjadi teks pesan yang rapi dan mengarahkan pengguna langsung ke `https://wa.me/...`.
- **Peta Lokasi (Map Facade):**
  - Desain kartu lokasi atau *placeholder* ringan dengan tombol *"Buka di Google Maps"* agar tidak membebani pemuatan awal halaman dengan *iframe* berat.

### 4.7. Halaman Blog SEO (`/blog`)
- Daftar artikel edukasi dan informasi seputar konveksi (contoh: *"Perbedaan Bahan American Drill dan Nagata Drill untuk Seragam PDH"*, *"Tips Memilih Sablon Awet untuk Kaos Gathering"*).

---

## 5. Spesifikasi SEO Kuat (Technical & On-Page SEO)

1. **Komponen `SEOHead.astro` Terpusat:**
   - Mengatur `<title>` (maksimal 60 karakter) dan `<meta name="description">` (maksimal 155 karakter) yang unik di setiap halaman.
   - Menghasilkan `<link rel="canonical" href="https://wilcore.com/...">` secara otomatis.
   - Menyertakan Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) dan Twitter Card tags.
2. **Structured Data (JSON-LD Schema Markup):**
   - **LocalBusiness / GarmentStore Schema:** Diterapkan secara global, memuat nama bisnis ("Wilcore Konveksi"), URL, logo, alamat, kontak, dan jam operasional.
   - **FAQPage Schema:** Diterapkan pada halaman utama untuk memunculkan *rich snippet* FAQ di hasil pencarian Google.
   - **Service / Product Schema:** Diterapkan pada halaman layanan.
3. **Semantik HTML5:**
   - Penggunaan tag `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, dan `<footer>` secara disiplin.
   - Hanya ada **satu tag `<h1>`** per halaman, diikuti hierarki `<h2>` dan `<h3>` yang berurutan tanpa melompat.
4. **File `robots.txt` & `sitemap-index.xml`:**
   - Mengizinkan seluruh *crawler* mesin pencari (`User-agent: *`, `Allow: /`) dan mencantumkan lokasi peta situs (`Sitemap: https://wilcore.com/sitemap-index.xml`).

---

## 6. Sistem Desain Antarmuka (UI/UX Guidelines)

- **Gaya Desain:** Modern, *Clean*, Industrial-Profesional, berfokus pada keterbacaan dan kemudahan navigasi di perangkat *mobile* (*Mobile-First Design*).
- **Palet Warna (Tailwind CSS):**
  - *Primary (Brand & Header):* Deep Navy (`slate-900` / `#0F172A`) — merepresentasikan kredibilitas dan profesionalisme B2B.
  - *Accent (Primary CTA):* Vibrant Orange (`orange-600` / `#EA580C`) — kontras tinggi untuk menarik perhatian.
  - *WhatsApp CTA:* Emerald Green (`emerald-600` / `#059669`) — warna familier untuk aksi komunikasi langsung.
  - *Background:* Pure White (`#FFFFFF`) dan Soft Slate (`slate-50` / `#F8FAFC`) sebagai pemisah antar bagian.
- **Komponen Konversi Global:**
  - **Floating WhatsApp Button:** Tombol melayang di pojok kanan bawah layar (lengkap dengan *tooltip* ajakan konsultasi gratis) yang selalu tampil di semua halaman.

---

## 7. Struktur Direktori Proyek (Target Workspace)

```text
/
├── public/
│   ├── robots.txt
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── FloatingWA.astro
│   │   ├── SEOHead.astro
│   │   ├── Hero.astro
│   │   ├── ServiceCard.astro
│   │   └── FAQSection.astro
│   ├── data/
│   │   ├── siteConfig.ts        # Konfigurasi Nomor WA, Alamat, Email, Sosmed
│   │   ├── services.ts          # Data Layanan, MOQ, Estimasi Produksi
│   │   ├── materials.ts         # Data Jenis Kain & Tabel Size Chart
│   │   └── portfolio.ts         # Data Galeri Portofolio Produksi
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── layanan.astro
│   │   ├── panduan-bahan.astro
│   │   ├── portofolio.astro
│   │   ├── tentang-kami.astro
│   │   ├── kontak.astro
│   │   └── blog/
│   │       └── index.astro
└── astro.config.mjs
```