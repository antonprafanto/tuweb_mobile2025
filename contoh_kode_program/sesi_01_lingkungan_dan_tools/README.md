# 📁 CONTOH KODE PROGRAM MANDIRI — SESI 01
## Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak (STSI4303) — Universitas Terbuka
### Modul Acuan BMP: Modul 1 (MSIM4401/STSI4303) — Pengenalan Lingkungan Pengembangan Aplikasi Piranti Bergerak

Selamat datang di repositori contoh kode program mandiri **Sesi 01**! Sesuai standar **The Zero-Friction Courseware Framework**, seluruh materi pada sesi inisiasi pertama ini dirancang **100% mandiri, ramah komputer spesifikasi RAM 4GB, dan siap dijalankan langsung tanpa instalasi compiler yang rumit**.

---

## 🗺️ Katalog 18 Berkas Kode Per-Slide (Siap Eksekusi)

| No. Slide | Nama Berkas Kode | Konsep Materi yang Dipelajari | Cara Cepat Menjalankan |
| :---: | :--- | :--- | :--- |
| **Slide 01** | [`slide_01_kontrak_dan_roadmap.js`](slide_01_kontrak_dan_roadmap.js) | Kontrak Kuliah, Roadmap 8 Sesi & Aturan Nilai 50% Tuton + 50% UAS | Ketik: `node slide_01_kontrak_dan_roadmap.js` |
| **Slide 02** | [`slide_02_relevansi_mobile_hybrid.html`](slide_02_relevansi_mobile_hybrid.html) | Kalkulator Efisiensi: Mengapa Industri & UT Memilih Hybrid? | Klik ganda file ini untuk buka di Chrome |
| **Slide 03** | [`slide_03_komparasi_arsitektur_mobile.html`](slide_03_komparasi_arsitektur_mobile.html) | Komparasi Interaktif: Native vs Hybrid vs Cross-Platform | Klik ganda file ini untuk buka di Chrome |
| **Slide 04** | [`slide_04_ekosistem_ionic_web_standards.html`](slide_04_ekosistem_ionic_web_standards.html) | Menjalankan Komponen Asli Ionic UI via CDN Bebas Instalasi | Klik ganda file ini untuk buka di Chrome |
| **Slide 05** | [`slide_05_panduan_instalasi_tools.js`](slide_05_panduan_instalasi_tools.js) | Panduan Alat Tempur: Node.js LTS, Git, VS Code, & Ionic CLI | Ketik: `node slide_05_panduan_instalasi_tools.js` |
| **Slide 06** | [`slide_06_diagnostik_environment.js`](slide_06_diagnostik_environment.js) | Skrip Diagnostik Otomatis Pemeriksa Kesiapan RAM & Software | Ketik: `node slide_06_diagnostik_environment.js` |
| **Slide 07** | [`slide_07_anatomi_hybrid_app.html`](slide_07_anatomi_hybrid_app.html) | Anatomi Aplikasi Hybrid: HTML (Tulang), CSS (Baju), JS (Saraf) | Klik ganda file ini untuk buka di Chrome |
| **Slide 08** | [`slide_08_hello_hybrid_app.html`](slide_08_hello_hybrid_app.html) | Aplikasi Mobile Pertama: Mockup MyUT dengan Touch Event | Klik ganda file ini untuk buka di Chrome |
| **Slide 09** | [`slide_09_chrome_device_toolbar_guide.html`](slide_09_chrome_device_toolbar_guide.html) | 3 Langkah Menguji Layar HP di Chrome (`F12` & `Ctrl+Shift+M`) | Klik ganda file ini untuk buka di Chrome |
| **Slide 10** | [`slide_10_viewport_meta_scaling.html`](slide_10_viewport_meta_scaling.html) | Bukti Krusial Viewport Meta Tag (Skala 1:1 Layar Ponsel) | Klik ganda file ini untuk buka di Chrome |
| **Slide 11** | [`slide_11_ionic_cli_simulator.js`](slide_11_ionic_cli_simulator.js) | Simulator & Penjelasan 5 Perintah Sakti Ionic CLI | Ketik: `node slide_11_ionic_cli_simulator.js` |
| **Slide 12** | [`slide_12_struktur_folder_proyek.js`](slide_12_struktur_folder_proyek.js) | Peta Folder Proyek Ionic Vue (`src/views`, `src/theme`, dll.) | Ketik: `node slide_12_struktur_folder_proyek.js` |
| **Slide 13** | [`slide_13_usb_debugging_scrcpy_guide.md`](slide_13_usb_debugging_scrcpy_guide.md) | Panduan Praktis USB Debugging + `scrcpy` (Hemat RAM < 70MB) | Baca panduan markdown ini di VS Code |
| **Slide 14** | [`slide_14_hmr_live_reload_demo.html`](slide_14_hmr_live_reload_demo.html) | Simulasi Cara Kerja Hot Module Replacement (HMR) & Live Reload | Klik ganda file ini untuk buka di Chrome |
| **Slide 15** | [`slide_15_troubleshooting_powershell_cli.md`](slide_15_troubleshooting_powershell_cli.md) | Pertolongan Pertama: Solusi Error PowerShell `PSSecurityException` | Baca panduan solusi 1 langkah di VS Code |
| **Slide 16** | [`slide_16_cheatsheet_terminal_git.md`](slide_16_cheatsheet_terminal_git.md) | Cheatsheet Perintah Esensial Terminal & Git untuk Tugas Kuliah | Baca panduan ringkas ini di VS Code |
| **Slide 17** | [`slide_17_lab_quest_01_profil_mahasiswa.html`](slide_17_lab_quest_01_profil_mahasiswa.html) | **🎯 MASTER SOLUSI LAB QUEST 01:** KTM Digital Mahasiswa UT | Klik ganda file ini untuk buka di Chrome |
| **Slide 18** | [`slide_18_preview_sesi_02_vue.html`](slide_18_preview_sesi_02_vue.html) | Jembatan Sesi 02: Membandingkan DOM Kuno vs Vue.js 3 Reaktif | Klik ganda file ini untuk buka di Chrome |

---

## 💡 Panduan Cepat Menjalankan Kode (Khusus Pemula):

### 1. Untuk Berkas Berakhiran `.html` (Contoh: Slide 02, 03, 04, 07, 08, 09, 10, 14, 17, 18):
* **Tidak memerlukan instalasi apa pun!**
* Cukup buka File Explorer di komputer Anda, lalu **klik dua kali (*double click*)** pada berkas `.html` tersebut.
* Berkas otomatis terbuka di Google Chrome, Microsoft Edge, atau Mozilla Firefox.
* Tekan tombol **`F12`** lalu klik ikon **Toggle Device Toolbar** (`Ctrl + Shift + M`) untuk melihat tampilan seperti di smartphone fisik!

### 2. Untuk Berkas Berakhiran `.js` (Contoh: Slide 01, 05, 06, 11, 12):
* Pastikan Anda telah memasang Node.js LTS dari [nodejs.org](https://nodejs.org/).
* Buka terminal di VS Code (`Ctrl + ~`), lalu jalankan dengan perintah:
  ```bash
  node slide_06_diagnostik_environment.js
  ```

---
*Semoga praktikum mandiri Sesi 01 Anda menyenangkan dan lancar! Jika ada pertanyaan atau kendala, silakan diskusikan di forum Tuton UT.*
