# 📱 NASKAH & SLIDE SESI 01: PENGENALAN LINGKUNGAN PENGEMBANGAN PIRANTI BERGERAK
## Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak (STSI4303 / MSIM4401)
### Program Studi: S1 Sistem Informasi & S1 Informatika — Universitas Terbuka
### Dosen Pengampu: Anton Prafanto, S.Kom., M.T.
### Modul Acuan BMP: Modul 1 (MSIM4401/STSI4303)

---

## 🗺️ Gambaran Umum Sesi
Sesi inisiasi pertama ini membekali mahasiswa dengan fondasi mental model arsitektur aplikasi mobile, komparasi Native vs Hybrid vs Cross-Platform, instalasi perkakas pengembangan (*tools*), pengenalan komponen web Ionic via CDN tanpa hambatan, pengujian mobile di Chrome DevTools, hingga penyelesaian tantangan praktikum **Lab Quest 01 (Kartu Tanda Mahasiswa Digital)**.

---

## 📊 Daftar 18 Slide Pembahasan & Kode Mandiri

### 📌 Slide 01: Kontrak Perkuliahan, Roadmap 8 Sesi & Aturan Nilai UT
* **Sub-CPMK:** Memahami alur 8 sesi tutorial, capaian pembelajaran, dan formula evaluasi akademik UT.
* **Narasi Dosen:**  
  *"Selamat datang rekan-rekan mahasiswa Universitas Terbuka di mata kuliah STSI4303! Kuliah ini adalah mata kuliah berpraktik penuh 3 SKS. Kita akan belajar membuat aplikasi smartphone sungguhan dengan cara yang menyenangkan, tidak membuat laptop panas, dan langsung bisa dicoba sejak hari pertama!"*
* **Poin Kunci:**
  * Komposisi Nilai Tuton: Keaktifan 8 Diskusi (30%) + 3 Tugas Tutorial (70%).
  * Formula Nilai Akhir: 50% Nilai Tuton + 50% Nilai UAS (Syarat: Nilai UAS $\ge 30$).
* **Tautan Kode Mandiri:**  
  👉 [`slide_01_kontrak_dan_roadmap.js`](../contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_01_kontrak_dan_roadmap.js)

---

### 📌 Slide 02: Lanskap Industri Mobile: Mengapa Arsitektur Hybrid Mendominasi?
* **Sub-CPMK:** Menganalisis efisiensi biaya dan waktu pengembangan aplikasi mobile berbasis web (*hybrid*).
* **Narasi Dosen:**  
  *"Bayangkan sebuah kampus besar seperti UT yang memiliki lebih dari 400.000 mahasiswa dengan ribuan jenis smartphone berbeda. Jika kita membuat aplikasi portal mahasiswa menggunakan Native terpisah (tim Android Kotlin dan tim iPhone Swift), biayanya akan membengkak 3 kali lipat. Dengan arsitektur Hybrid, kita hanya merawat 1 basis kode untuk Android, iOS, dan Web!"*
* **Poin Kunci:** *Single codebase*, efisiensi waktu ~66%, kemudahan perawatan jangka panjang.
* **Tautan Kode Mandiri:**  
  👉 [`slide_02_relevansi_mobile_hybrid.html`](../contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_02_relevansi_mobile_hybrid.html)

---

### 📌 Slide 03: Komparasi Arsitektur: Native vs Hybrid vs Cross-Platform
* **Sub-CPMK:** Membedakan cara kerja lapisan tumpukan (*stack layers*) antara Native, Hybrid (Ionic), dan Cross-Platform Canvas (Flutter).
* **Narasi Dosen:**  
  *"Aplikasi Native berbicara langsung ke sistem operasi. Cross-platform menggambar tombolnya sendiri lewat mesin grafis. Sedangkan Hybrid menggunakan WebView modern yang dijembatani oleh Capacitor ke perangkat keras. Untuk aplikasi bisnis, portal universitas, dan e-commerce, Hybrid adalah pilihan paling efisien dan stabil."*
* **Tautan Kode Mandiri:**  
  👉 [`slide_03_komparasi_arsitektur_mobile.html`](../contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_03_komparasi_arsitektur_mobile.html)

---

### 📌 Slide 04: Ekosistem Ionic Framework & Kekuatan Web Components
* **Sub-CPMK:** Mengidentifikasi keunggulan Web Components bawaan Ionic yang dapat berjalan instan via CDN.
* **Narasi Dosen:**  
  *"Keajaiban Ionic adalah: Anda tidak perlu menunggu install dependensi bergigabyte untuk melihat tombol dan kartu mobile. Cukup tautkan pustaka CDN Ionic di file HTML, dan browser Anda langsung menyajikan tampilan berstandar Google Material Design!"*
* **Cuplikan Kode:**
  ```html
  <script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" />
  <ion-app>
    <ion-button expand="block">Tombol Khas Mobile</ion-button>
  </ion-app>
  ```
* **Tautan Kode Mandiri:**  
  👉 [`slide_04_ekosistem_ionic_web_standards.html`](../contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_04_ekosistem_ionic_web_standards.html)

---

### 📌 Slide 05: Menyiapkan Dapur Kerja: Node.js LTS, Git & VS Code
* **Sub-CPMK:** Menyiapkan perangkat lunak pendukung pengembangan mobile di komputer lokal.
* **Narasi Dosen:**  
  *"Ada 3 perkakas gratis wajib bagi pengembang mobile: Node.js versi LTS sebagai mesin runtime, Git untuk mencatat revisi kode dan mengumpulkan tugas kuliah, serta VS Code sebagai editor kode paling nyaman di dunia."*
* **Tautan Kode Mandiri:**  
  👉 [`slide_05_panduan_instalasi_tools.js`](../contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_05_panduan_instalasi_tools.js)

---

### 📌 Slide 06: Uji Diagnostik Lingkungan Pengembangan Mandiri
* **Sub-CPMK:** Melakukan pengujian otomatis kesiapan memori RAM dan versi piranti lunak.
* **Narasi Dosen:**  
  *"Sebelum mulai ngoding, mari kita pastikan dapur kerja kita siap. Jalankan skrip diagnostik ini di terminal, maka sistem akan memberi tahu spesifikasi RAM Anda dan memberikan rekomendasi jalur praktikum yang paling aman bagi laptop Anda!"*
* **Perintah Eksekusi:**
  ```bash
  node slide_06_diagnostik_environment.js
  ```
* **Tautan Kode Mandiri:**  
  👉 [`slide_06_diagnostik_environment.js`](../contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_06_diagnostik_environment.js)

---

### 📌 Slide 07: Anatomi Aplikasi Hybrid: Tritunggal HTML, CSS & JavaScript
* **Sub-CPMK:** Menguraikan peran struktural, estetika, dan logika interaktivitas dalam aplikasi mobile hybrid.
* **Narasi Dosen:**  
  *"Aplikasi mobile hybrid seperti tubuh manusia: HTML adalah kerangka tulangnya, CSS adalah pakaian rapi dan warnanya, sedangkan JavaScript adalah sistem saraf yang merespon ketika tombol disentuh pengguna."*
* **Tautan Kode Mandiri:**  
  👉 [`slide_07_anatomi_hybrid_app.html`](../contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_07_anatomi_hybrid_app.html)

---

### 📌 Slide 08: Hello Hybrid World: Mockup Aplikasi Mobile Pertama Anda
* **Sub-CPMK:** Membangun antarmuka mobile pertama lengkap dengan status bar dan event sentuhan (*touch event*).
* **Narasi Dosen:**  
  *"Mari kita buat aplikasi mobile pertama kita: MyUT Mobile! Berkas ini membuktikan bahwa tanpa kompilasi rumit, Anda sudah bisa membuat aplikasi dengan status bar, kartu profil, dan penanganan sentuhan yang mulus."*
* **Tautan Kode Mandiri:**  
  👉 [`slide_08_hello_hybrid_app.html`](../contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_08_hello_hybrid_app.html)

---

### 📌 Slide 09: 3 Langkah Menguji Layar HP di Google Chrome DevTools
* **Sub-CPMK:** Mengoperasikan Toggle Device Toolbar di browser untuk simulasi berbagai dimensi smartphone.
* **Narasi Dosen:**  
  *"Laptop Anda tidak perlu terbebani emulator Android Studio yang memakan RAM 4GB. Cukup tekan F12 di Google Chrome, lalu tekan Ctrl + Shift + M. Seketika Anda bisa memilih simulasi layar Pixel 7 atau iPhone 14 Pro!"*
* **Shortcut Kunci:** `F12` lalu `Ctrl + Shift + M`.
* **Tautan Kode Mandiri:**  
  👉 [`slide_09_chrome_device_toolbar_guide.html`](../contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_09_chrome_device_toolbar_guide.html)

---

### 📌 Slide 10: Peran Krusial Viewport Meta Tag pada Layar Ponsel
* **Sub-CPMK:** Menganalisis fungsi tag `<meta name="viewport">` dalam mencegah efek perkecilan (*zoom-out*) otomatis di ponsel.
* **Narasi Dosen:**  
  *"Pernahkah Anda membuka website di HP dan tulisannya menjadi sekecil semut? Itu karena website tersebut lupa menyertakan meta viewport! Tag ini adalah perintah sakti yang menyuruh smartphone menampilkan halaman dengan skala 1:1."*
* **Tautan Kode Mandiri:**  
  👉 [`slide_10_viewport_meta_scaling.html`](../contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_10_viewport_meta_scaling.html)

---

### 📌 Slide 11: Pengenalan 5 Perintah Sakti Ionic CLI
* **Sub-CPMK:** Menjelaskan fungsi perintah baris `ionic start`, `ionic serve`, `ionic build`, dan `cap sync`.
* **Narasi Dosen:**  
  *"Saat proyek aplikasi kita bertambah besar, kita menggunakan Ionic CLI. Ada 5 perintah utama yang akan menjadi sahabat setia Anda dari awal pembuatan hingga rilis aplikasi."*
* **Tautan Kode Mandiri:**  
  👉 [`slide_11_ionic_cli_simulator.js`](../contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_11_ionic_cli_simulator.js)

---

### 📌 Slide 12: Eksplorasi Struktur Folder Proyek Standar Ionic Vue 3
* **Sub-CPMK:** Mengidentifikasi letak berkas tampilan, konfigurasi rute, dan aset publik dalam arsitektur folder Ionic.
* **Narasi Dosen:**  
  *"Jangan takut melihat banyaknya folder di proyek Ionic! Tempat kita paling banyak menulis kode hanya ada di satu tempat: folder src/views untuk layar aplikasi dan src/theme untuk mengubah warna tema."*
* **Tautan Kode Mandiri:**  
  👉 [`slide_12_struktur_folder_proyek.js`](../contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_12_struktur_folder_proyek.js)

---

### 📌 Slide 13: Pengujian HP Fisik Hemat RAM via USB Debugging & scrcpy
* **Sub-CPMK:** Mengonfigurasi USB Debugging pada smartphone Android dan menampilkan layar ke PC menggunakan `scrcpy`.
* **Narasi Dosen:**  
  *"Metode rahasia pengembang handal: hubungkan HP fisik Anda dengan kabel data USB. Aktifkan USB Debugging dan buka aplikasi scrcpy. Konsumsi RAM kurang dari 70MB dan performanya 60 FPS bebas patah-patah!"*
* **Tautan Panduan Mandiri:**  
  👉 [`slide_13_usb_debugging_scrcpy_guide.md`](../contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_13_usb_debugging_scrcpy_guide.md)

---

### 📌 Slide 14: Memahami Cara Kerja Hot Module Replacement (HMR) & Live Reload
* **Sub-CPMK:** Menjelaskan alur pembaruan komponen otomatis saat penyimpanan kode (*Ctrl+S*) tanpa memuat ulang status aplikasi.
* **Narasi Dosen:**  
  *"Hot Module Replacement membuat proses belajar coding sangat adiktif. Begitu Anda menekan simpan, peramban langsung memperbarui warna dan tombol tanpa menghapus data formulir yang sedang Anda ketik!"*
* **Tautan Kode Mandiri:**  
  👉 [`slide_14_hmr_live_reload_demo.html`](../contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_14_hmr_live_reload_demo.html)

---

### 📌 Slide 15: Protokol Pertolongan Pertama: Mengatasi Galat PowerShell Windows
* **Sub-CPMK:** Mengatasi galat kebijakan keamanan eksekusi skrip (*PSSecurityException*) di terminal Windows.
* **Narasi Dosen:**  
  *"Jika terminal Anda memunculkan teks merah berbunyi 'running scripts is disabled on this system', jangan panik! Itu adalah proteksi default Windows. Cukup jalankan perintah Set-ExecutionPolicy RemoteSigned satu kali, dan masalah tuntas selamanya."*
* **Tautan Panduan Solusi:**  
  👉 [`slide_15_troubleshooting_powershell_cli.md`](../contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_15_troubleshooting_powershell_cli.md)

---

### 📌 Slide 16: Cheatsheet Perintah Terminal & Git untuk Tugas Kuliah
* **Sub-CPMK:** Menggunakan perintah navigasi terminal dan Git dasar untuk mengelola berkas tugas mandiri.
* **Narasi Dosen:**  
  *"Sebagai mahasiswa Informatika dan Sistem Informasi, menguasai perintah dasar terminal seperti cd, ls, git add, dan git commit adalah modal emas portofolio karir Anda."*
* **Tautan Cheatsheet:**  
  👉 [`slide_16_cheatsheet_terminal_git.md`](../contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_16_cheatsheet_terminal_git.md)

---

### 📌 Slide 17: 🎯 Lab Quest 01: Membangun Kartu Digital Mahasiswa UT
* **Sub-CPMK:** Menerapkan komponen resmi Ionic (`ion-card`, `ion-list`, `ion-button`) untuk menghasilkan antarmuka KTM digital responsif.
* **Tantangan Lab:**
  1. Buat kartu identitas memuat Nama, NIM, Prodi, dan Fakultas FST UT.
  2. Berikan sentuhan warna biru khas Universitas Terbuka (`#005691`).
  3. Tambahkan tombol interaktif untuk memverifikasi keaslian status aktif mahasiswa.
* **Tautan Master Solusi:**  
  👉 [`slide_17_lab_quest_01_profil_mahasiswa.html`](../contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_17_lab_quest_01_profil_mahasiswa.html)

---

### 📌 Slide 18: Preview Sesi 02: Beralih ke Reaktivitas Modern Vue.js 3
* **Sub-CPMK:** Menghubungkan konsep manipulasi DOM imperatif dengan paradigma reaktif deklaratif di Sesi 02.
* **Narasi Dosen:**  
  *"Hari ini kita telah menaklukkan lingkungan kerja dan komponen mobile pertama. Pekan depan di Sesi 02, kita akan menjinakkan logika tampilan: bagaimana membuat data dan layar sinkron otomatis tanpa ribet menggunakan keajaiban Vue.js 3!"*
* **Tautan Kode Mandiri:**  
  👉 [`slide_18_preview_sesi_02_vue.html`](../contoh_kode_program/sesi_01_lingkungan_dan_tools/slide_18_preview_sesi_02_vue.html)

---
*Materi Slide Sesi 01 ini disusun dengan standar mutu The Zero-Friction Courseware Framework — Universitas Terbuka.*
