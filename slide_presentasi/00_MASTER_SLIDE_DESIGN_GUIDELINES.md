# 🎨 MASTER SLIDE DESIGN GUIDELINES & PEDOMAN PRESENTASI DOSEN
## Standar Desain Bahan Tayang Mata Kuliah Pemrograman Piranti Bergerak (STSI4303 / MSIM4401)
### Ekosistem Teknologi: Ionic Framework, Vue.js 3, TypeScript & Capacitor — Universitas Terbuka

---

## 1. Format & Aspek Teknis Slide

* **Rasio Layar:** **16:9** (Standar layar monitor modern, proyektor lab, dan smartphone landscape).
* **Gaya Desain Resmi:** **Neo-Brutalism Murni** (Mengacu pada standar `designprompts.dev/neo-brutalism`).
* **Karakteristik Kunci Neo-Brutalism:**
  1. **ZERO BORDER RADIUS (Sudut Tegak 90° Siku Murni):** Seluruh kartu (*card*), lencana (*tag badge*), tombol navigasi, dan kotak kode wajib menggunakan sudut siku-siku tajam (`MSO_SHAPE.RECTANGLE`). Dilarang keras menggunakan sudut membulat (*rounded rectangle*).
  2. **BOLD SOLID BLACK BORDERS:** Setiap elemen dibatasi oleh garis tepi hitam solid setebal `2.5 Pt - 3 Pt` (`#000000`).
  3. **HARD OFFSET BLOCK SHADOWS:** Tidak menggunakan bayangan buram (*no blurry drop shadows*). Gunakan bayangan blok hitam pekat solid yang bergeser sejauh `+0.08 inch` (+6px) secara horizontal dan vertikal di belakang kartu.
  4. **PALET WARNA TINGGI KONTRAS (High-Contrast Saturated Palette):**
     * **Latar Belakang Kanvas Utama:** *Warm Cream Canvas* (`#FAF8F5`).
     * **Kartu Konten:** *Pure White* (`#FFFFFF`).
     * **Aksen Saturated Pop:**
       * *Canary Yellow* (`#FFE600`) — Sorotan konsep kunci & header penting.
       * *Electric Cyan* (`#38BDF8`) — Terminal, CLI commands & tools.
       * *Neo Mint / Emerald* (`#4ADE80`) — Solusi kode sukses, best practice, Vue directives.
       * *Neo Coral / Rose* (`#FB7185`) — Peringatan bug, common pitfalls, security warning.
       * *Lavender Purple* (`#C084FC`) — TypeScript interfaces, models, dan data contracts.
     * **Kotak Kode (Code Box):** *Deep Solid Black* (`#121212`) dengan teks monospace tajam (*Crisp Monospace* `#F5F5F5`).

---

## 2. Prinsip "Anti-Boring Lecturer": Aturan 30-40-30

1. **30% - Konsep Nyata & Urgensi (The "Why"):**
   * Jangan langsung memulai dengan baris sintaks kode. Awali dengan: *"Mengapa aplikasi MyUT membutuhkan validasi NIM secara lokal?"* atau *"Apa risikonya jika kita memanggil REST API tanpa blok try-catch?"*.
2. **40% - Diagram Mental Model & Visual Architecture:**
   * Tampilkan pohon komponen (*Component Tree*), aliran data reaktif (*One-Way vs Two-Way Data Flow*), atau layer jembatan runtime *Capacitor Bridge*. Otak mahasiswa memproses arsitektur visual 60.000x lebih cepat dibanding teks paragraf.
3. **30% - Cuplikan Kode Mandiri Siap Run (Syntax-Highlighted Snippets):**
   * Batasi maksimal 15–20 baris kode per slide.
   * Gunakan penanda kotak berwarna pada baris logika inti yang sedang dibahas.
   * Sertakan tombol tautan langsung ke berkas kode mandiri di GitHub.

---

## 3. Integrasi Hyperlink Dua Arah (Slide ⇄ GitHub)

Slide materi dan repositori GitHub harus terhubung secara organik dan mulus:
1. **Tombol Fisik di Setiap Slide PPTX:**
   Setiap slide materi disematkan tombol aksi di bawah kartu kode:
   ```text
   ┌─────────────────────────────────────────────────────────────────┐
   │ ▶ BUKA KODE LENGKAP DI GITHUB (slide_03_vue_reactivity.html)     │
   └─────────────────────────────────────────────────────────────────┘
   ```
2. **Rumus URL Unduh Otomatis Slide (.pptx):**
   ```text
   https://raw.githubusercontent.com/[username]/[repo]/main/slide_presentasi/[NAMA_FILE].pptx
   ```
3. **Rumus URL Penampil Web Tanpa Lisensi Microsoft Office:**
   ```text
   https://view.officeapps.live.com/op/view.aspx?src=[ENCODED_RAW_URL]
   ```

---

## 4. Struktur Baku Setiap Slide Deck (18 Slide per Sesi)

Setiap sesi perkuliahan (18 slide) mengikuti ritme pedagogis bertahap:
* **Slide 01:** Judul Sesi, Sub-CPMK, & Peta Capaian Sesi.
* **Slide 02:** Masalah Nyata di Industri / Urgensi Topik.
* **Slide 03:** Mental Model & Analogi Dunia Nyata.
* **Slide 04–12:** Bedah Konsep Inti (1 Slide = 1 Berkas Kode Mandiri 40–80 baris).
* **Slide 13–15:** Pengujian Perangkat (Chrome DevTools Toolbar / USB Debugging HP Fisik).
* **Slide 16:** Checklist 5 Aturan Emas & Common Pitfalls.
* **Slide 17:** Solusi Master Lab Quest / Pembahasan Tugas Terbimbing.
* **Slide 18:** Jembatan Konseptual Menuju Sesi Pekan Depan.
