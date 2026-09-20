# 📱 BAHAN KULIAH PEMROGRAMAN BERBASIS PERANGKAT BERGERAK (STSI4303)
## Universitas Terbuka — Program Studi S1 Sistem Informasi & Informatika

Selamat datang di repositori resmi materi perkuliahan **Pemrograman Berbasis Perangkat Bergerak (STSI4303 / 3 SKS)** Universitas Terbuka. Repositori ini disusun dengan standar **The Zero-Friction Courseware Framework**, didedikasikan bagi mahasiswa untuk mengakses **Bahan Ajar Presentasi Sesi Perkuliahan**, **Panduan Tutorial & Tugas Mandiri**, serta **Contoh Kode Program Mandiri** berbasis **Ionic Framework**, **Vue.js 3**, **TypeScript**, dan **Capacitor** yang siap dijalankan langsung di peramban web (*Google Chrome*) maupun smartphone fisik.

---

## 🗺️ Struktur Repositori

```text
tuweb_mobile2025/
├── 📁 slide_presentasi/                     # Naskah Slide & Berkas PPTX Neobrutalism
│   ├── 🎨 00_MASTER_SLIDE_DESIGN_GUIDELINES.md
│   ├── 📄 SESI_01_Pengantar_dan_Lingkungan_Ionic.md
│   ├── 📊 SESI_01_Pengantar_dan_Lingkungan_Ionic.pptx
│   └── 🐍 generate_slides_s1_neobrutalism.py
│
├── 📁 contoh_kode_program/                  # Berkas Kode Mandiri Siap Eksekusi (Zero-Friction)
│   └── 📁 sesi_01_lingkungan_dan_tools/     # [18 berkas] Node.js, Web Components & KTM Digital
│
├── 📁 panduan_tutorial_ut/                  # Instrumen Akademik Resmi FST UT
│   ├── 📋 RANCANGAN_AKTIVITAS_TUTORIAL_RAT.md  # Silabus RAT/SAT & Peta Kompetensi STSI4303
│   ├── 📝 PANDUAN_TUGAS_TUTORIAL_1_2_3.md      # Skenario Kasus & Rubrik Tugas 1, 2, 3
│   └── 💬 PANDUAN_DISKUSI_TUTON.md             # Bahan Inisiasi & Pemicu Diskusi Forum 1-8
│
├── 📄 KERANGKA_KERJA_COURSEWARE_GITHUB.md   # Pedoman Standar Courseware Bebas Hambatan Kognitif
├── 📄 .gitignore                            # Konfigurasi Pengabaian Berkas Git
└── 📄 README.md                             # Portal Navigasi Utama Perkuliahan
```

---

## 📊 Katalog Sesi Perkuliahan (8 Sesi Tuton & 9 Modul BMP)

| Sesi | Modul BMP | Topik Pokok Pembahasan | Materi Slide Sesi (PPTX & Naskah) | Berkas Kode Mandiri | Status & Tagihan |
| :---: | :---: | :--- | :--- | :---: | :---: |
| **01** | Modul 1 | Pengenalan Lingkungan & Arsitektur Hybrid | [⚡ Download S01 (.pptx)](slide_presentasi/SESI_01_Pengantar_dan_Lingkungan_Ionic.pptx)<br>[👁️ Baca Online S01](https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fraw.githubusercontent.com%2Fantonprafanto%2Ftuweb_mobile2025%2Fmain%2Fslide_presentasi%2FSESI_01_Pengantar_dan_Lingkungan_Ionic.pptx)<br>[📄 Naskah Slide S01](slide_presentasi/SESI_01_Pengantar_dan_Lingkungan_Ionic.md) | [📁 18 Berkas Mandiri](contoh_kode_program/sesi_01_lingkungan_dan_tools/)<br>• [Solusi Lab Quest 01](contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_17_lab_quest_01_profil_mahasiswa.html) | ✅ **Rilis Lengkap**<br>💬 Diskusi 1 |
| **02** | Modul 2 | Frontend Modern Menggunakan Vue.js 3 | ⏳ *Sedang Disiapkan* | ⏳ *Rilis Bertahap* | 💬 Diskusi 2 |
| **03** | Modul 3 | Praktikum 1: TypeScript & Komposisi Vue | ⏳ *Sedang Disiapkan* | ⏳ *Rilis Bertahap* | 🎯 **TUGAS 1** |
| **04** | Modul 4 | Dasar-Dasar Ionic Framework & Navigasi | ⏳ *Sedang Disiapkan* | ⏳ *Rilis Bertahap* | 💬 Diskusi 4 |
| **05** | Modul 5 | Layout Grid, Dynamic Theme, & Form Regex | ⏳ *Sedang Disiapkan* | ⏳ *Rilis Bertahap* | 🎯 **TUGAS 2** |
| **06** | Modul 6-7| Capacitor & Integrasi Platform Android | ⏳ *Sedang Disiapkan* | ⏳ *Rilis Bertahap* | 💬 Diskusi 6 |
| **07** | Modul 8-9| REST API, Local Storage, & Native Plugins | ⏳ *Sedang Disiapkan* | ⏳ *Rilis Bertahap* | 🎯 **TUGAS 3** |
| **08** | Modul 9 | Optimasi Kinerja, Build APK Release & UAS | ⏳ *Sedang Disiapkan* | ⏳ *Rilis Bertahap* | 💬 Diskusi 8 & UAS |

---

### 📱 Rincian 18 Berkas Mandiri Sesi 01 (Lingkungan & Tools)

| Slide | Konsep Materi Pembahasan | Tautan Berkas Mandiri (Siap Run) |
| :---: | :--- | :--- |
| **Slide 01** | Kontrak Kuliah, Roadmap 8 Sesi & Aturan Nilai UT | [`slide_01_kontrak_dan_roadmap.js`](contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_01_kontrak_dan_roadmap.js) |
| **Slide 02** | Kalkulator Efisiensi: Mengapa Industri & UT Memilih Hybrid? | [`slide_02_relevansi_mobile_hybrid.html`](contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_02_relevansi_mobile_hybrid.html) |
| **Slide 03** | Komparasi Interaktif: Native vs Hybrid vs Cross-Platform | [`slide_03_komparasi_arsitektur_mobile.html`](contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_03_komparasi_arsitektur_mobile.html) |
| **Slide 04** | Menjalankan Komponen Asli Ionic UI via CDN Bebas Instalasi | [`slide_04_ekosistem_ionic_web_standards.html`](contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_04_ekosistem_ionic_web_standards.html) |
| **Slide 05** | Panduan Alat Tempur: Node.js LTS, Git, VS Code, & Ionic CLI | [`slide_05_panduan_instalasi_tools.js`](contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_05_panduan_instalasi_tools.js) |
| **Slide 06** | Skrip Diagnostik Otomatis Pemeriksa Kesiapan RAM & Software | [`slide_06_diagnostik_environment.js`](contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_06_diagnostik_environment.js) |
| **Slide 07** | Anatomi Aplikasi Hybrid: HTML (Tulang), CSS (Baju), JS (Saraf) | [`slide_07_anatomi_hybrid_app.html`](contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_07_anatomi_hybrid_app.html) |
| **Slide 08** | Aplikasi Mobile Pertama: Mockup MyUT dengan Touch Event | [`slide_08_hello_hybrid_app.html`](contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_08_hello_hybrid_app.html) |
| **Slide 09** | 3 Langkah Menguji Layar HP di Chrome (`F12` & `Ctrl+Shift+M`) | [`slide_09_chrome_device_toolbar_guide.html`](contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_09_chrome_device_toolbar_guide.html) |
| **Slide 10** | Bukti Krusial Viewport Meta Tag (Skala 1:1 Layar Ponsel) | [`slide_10_viewport_meta_scaling.html`](contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_10_viewport_meta_scaling.html) |
| **Slide 11** | Simulator & Penjelasan 5 Perintah Sakti Ionic CLI | [`slide_11_ionic_cli_simulator.js`](contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_11_ionic_cli_simulator.js) |
| **Slide 12** | Peta Folder Proyek Ionic Vue (`src/views`, `src/theme`, dll.) | [`slide_12_struktur_folder_proyek.js`](contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_12_struktur_folder_proyek.js) |
| **Slide 13** | Panduan Praktis USB Debugging + `scrcpy` (Hemat RAM < 70MB) | [`slide_13_usb_debugging_scrcpy_guide.md`](contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_13_usb_debugging_scrcpy_guide.md) |
| **Slide 14** | Simulasi Cara Kerja Hot Module Replacement (HMR) & Live Reload | [`slide_14_hmr_live_reload_demo.html`](contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_14_hmr_live_reload_demo.html) |
| **Slide 15** | Pertolongan Pertama: Solusi Error PowerShell `PSSecurityException` | [`slide_15_troubleshooting_powershell_cli.md`](contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_15_troubleshooting_powershell_cli.md) |
| **Slide 16** | Cheatsheet Perintah Esensial Terminal & Git untuk Tugas Kuliah | [`slide_16_cheatsheet_terminal_git.md`](contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_16_cheatsheet_terminal_git.md) |
| **Slide 17** | **🎯 MASTER SOLUSI LAB QUEST 01:** KTM Digital Mahasiswa UT | [`slide_17_lab_quest_01_profil_mahasiswa.html`](contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_17_lab_quest_01_profil_mahasiswa.html) |
| **Slide 18** | Jembatan Sesi 02: Membandingkan DOM Kuno vs Vue.js 3 Reaktif | [`slide_18_preview_sesi_02_vue.html`](contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_18_preview_sesi_02_vue.html) |

---

## 🎯 Panduan Tugas Tutorial Wajib Mahasiswa (Tuton UT)

1. **[Tugas Tutorial 1 (Sesi 3)](panduan_tutorial_ut/PANDUAN_TUGAS_TUTORIAL_1_2_3.md#tugas-tutorial-1-diberikan-pada-sesi-3):**
   * *Studi Kasus:* Kalkulator Nilai Mata Kuliah & Indeks Prestasi (IPS) Mahasiswa UT berbasis TypeScript & Vue Composition API.
   * *Contoh Master Solusi:* [slide_03_solusi_tugas_1_kalkulator_nilai.html](contoh_kode_program/sesi_03_typescript_vue/slide_03_solusi_tugas_1_kalkulator_nilai.html)
2. **[Tugas Tutorial 2 (Sesi 5)](panduan_tutorial_ut/PANDUAN_TUGAS_TUTORIAL_1_2_3.md#tugas-tutorial-2-diberikan-pada-sesi-5):**
   * *Studi Kasus:* Portal Layanan Mandiri Mahasiswa (Penerbitan KTM Digital, Form Validasi NIM 9 digit & email kampus `@ecampus.ut.ac.id`, Dark Mode Switch).
   * *Contoh Master Solusi:* [slide_04_solusi_tugas_2_katalog_mahasiswa.html](contoh_kode_program/sesi_05_layout_komponen_form/slide_04_solusi_tugas_2_katalog_mahasiswa.html)
3. **[Tugas Tutorial 3 (Sesi 7)](panduan_tutorial_ut/PANDUAN_TUGAS_TUTORIAL_1_2_3.md#tugas-tutorial-3-diberikan-pada-sesi-7):**
   * *Studi Kasus:* Aplikasi Mobile Terintegrasi "UT Study Tracker" (Konsumsi REST API Asinkron, Penyimpanan Data Offline Persisten, Sensor Geolocation GPS).
   * *Contoh Master Solusi:* [slide_03_solusi_tugas_3_aplikasi_terintegrasi.html](contoh_kode_program/sesi_07_api_storage_plugins/slide_03_solusi_tugas_3_aplikasi_terintegrasi.html)

---

## 💡 Panduan Cepat Menjalankan Kode (Zero-Friction bagi Mahasiswa)

### A. Metode Instan (Paling Ringan & Ramah Laptop RAM 4–8GB)
Sebagian besar contoh kode program di repositori ini berupa **berkas HTML mandiri** yang telah mengintegrasikan engine Vue 3 dan Ionic Framework via CDN:
1. Unduh berkas `.html` yang ingin Anda coba dari folder `contoh_kode_program/`.
2. **Cukup klik dua kali (*double-click*)** berkas tersebut untuk membukanya di Google Chrome, Microsoft Edge, atau Mozilla Firefox.
3. Untuk melihat tampilan seperti layar HP: Tekan tombol `F12` pada keyboard, lalu klik ikon **Toggle Device Toolbar** (`Ctrl + Shift + M`).

### B. Metode Proyek Lengkap (Ionic CLI & Live Reload)
Jika Anda mengembangkan proyek skala penuh:
1. Pastikan Node.js terpasang:
   ```bash
   node -v
   ```
2. Pasang Ionic CLI:
   ```bash
   npm install -g @ionic/cli
   ```
3. Buat proyek baru bertema Ionic Vue:
   ```bash
   ionic start mobile-ut blank --type=vue
   cd mobile-ut
   ```
4. Jalankan server lokal:
   ```bash
   ionic serve
   ```

### C. Metode Uji Smartphone Fisik Android (Tanpa Emulator Berat)
1. Sambungkan ponsel Android Anda ke laptop menggunakan kabel USB.
2. Aktifkan **USB Debugging** di menu *Pengaturan > Opsi Pengembang*.
3. Buka aplikasi gratisan [scrcpy](https://github.com/Genymobile/scrcpy) untuk melakukan *screen mirroring* instan di laptop dengan konsumsi RAM < 80MB!

---

## 📜 Lisensi & Kontribusi
Repositori ini dikembangkan sebagai materi ajar terbuka (*Open Courseware*) untuk mendukung proses pembelajaran mahasiswa Universitas Terbuka di seluruh Indonesia. Silakan manfaatkan, pelajari, dan kembangkan secara bertanggung jawab dengan tetap menjunjung tinggi integritas akademik.
