# 📋 PEDOMAN & RUBRIK PENILAIAN RESMI: TUGAS TUTORIAL 3 (TUTON 3)
**Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak (STSI4303 / MSIM4401 - 3 SKS)**  
**Fakultas Sains dan Teknologi (FST) — Universitas Terbuka**  
**Dosen Pengampu: Anton Prafanto, S.Kom., M.T.**  
**Bobot Evaluasi: 20% dari Total Nilai Akhir Tutorial Online**

---

## 🎯 Capaian Pembelajaran Khusus (Sub-CPMK 7)
Mahasiswa mampu merancang dan mengimplementasikan aplikasi mobile terintegrasi yang menggabungkan:
1. Konsumsi layanan data eksternal (**Asynchronous REST API**).
2. Penyimpanan lokal persisten (**Offline Storage Persistence**).
3. Pemanfaatan sensor perangkat keras (**Capacitor Native Hardware Plugins: Geolocation GPS atau Camera**).
4. Penanganan kesalahan terstruktur (**Error Handling & Loading UX**).

---

## 📱 Skenario Kasus Proyek: "UT Study Tracker & Presensi Belajar Mobile"
Anda diminta membangun aplikasi pelaporan kegiatan belajar mandiri mahasiswa Universitas Terbuka yang terpasang di smartphone. Aplikasi ini mencatat riwayat jam belajar modul BMP, mengambil informasi cuaca sentra kampus secara real-time via REST API, menyimpan data kegiatan secara lokal tanpa hilang saat offline, serta mengunci titik koordinat GPS atau mengambil foto bukti belajar.

---

## 📊 Matriks Rubrik Penilaian Resmi (Skala 0 – 100)

| No | Kriteria Evaluasi | Bobot Skor | Deskripsi Capaian Sempurna (Nilai Penuh) |
| :-: | :--- | :-: | :--- |
| **1** | **Konsumsi Asynchronous REST API** | **30 Poin** | Aplikasi berhasil mengambil data eksternal (misal: Live Weather API Open-Meteo atau data perkuliahan UT) menggunakan `fetch()` dan `async/await`, dilengkapi dengan indikator pemuatan data (`<ion-spinner>` atau `<ion-skeleton-text>`). |
| **2** | **Penyimpanan Lokal Persisten (CRUD)** | **25 Poin** | Mekanisme simpan (*Create*), baca (*Read*), dan hapus (*Delete*) riwayat belajar ke media penyimpanan lokal (`localStorage` atau `@capacitor/preferences`) berfungsi sempurna dan **tidak hilang saat aplikasi ditutup atau direfresh**. |
| **3** | **Integrasi Sensor Hardware Native** | **25 Poin** | Berhasil menghubungkan salah satu atau kedua plugin hardware Capacitor:<br>• **Geolocation Plugin:** Mengunci koordinat lintang & bujur lokasi belajar mahasiswa.<br>• **Camera Plugin:** Mengambil atau memilih foto bukti belajar modul BMP. |
| **4** | **Arsitektur Kode & Video Pengujian** | **20 Poin** | Kode terstruktur rapi dengan blok `try-catch`, antarmuka responsif ramah smartphone, laporan PDF rapi, serta menyertakan tautan video demonstrasi pengujian berdurasi 3–5 menit di YouTube (Unlisted). |

---

## 🛠️ Master Solusi Rujukan Resmi
Mahasiswa UT dapat mempelajari dan menguji coba secara langsung arsitektur solusi tugas pada berkas:  
👉 [`slide_17_solusi_tugas_3_study_tracker.html`](slide_17_solusi_tugas_3_study_tracker.html)

---

## 📦 Tata Cara Pengumpulan di LMS Tuton UT
1. Berkas dikumpulkan dalam bentuk **dokumen PDF** dengan format penamaan:  
   `Tugas3_NIM_NamaLengkap.pdf` (Contoh: `Tugas3_041234567_AntonPrafanto.pdf`).
2. Isi Laporan PDF wajib mencakup:
   * **Halaman Judul:** Identitas Mahasiswa (Nama, NIM, UPBJJ-UT, Program Studi).
   * **Deskripsi Arsitektur:** Penjelasan singkat alur REST API, penyimpanan lokal, dan sensor yang digunakan.
   * **Tangkapan Layar (Screenshots):**
     1. Tampilan saat mengambil data live REST API (disertai loading indicator).
     2. Tampilan daftar catatan riwayat belajar yang tersimpan offline.
     3. Tampilan hasil penguncian GPS koordinat atau foto kamera.
   * **Tautan Repositori GitHub:** Tautan repositori publik yang memuat kode sumber Anda.
   * **Tautan Video YouTube (Unlisted):** Tautan video rekaman layar laptop / ponsel berdurasi 3–5 menit yang memperlihatkan pengujian fitur aplikasi secara langsung.
3. **Batas Waktu:** Sesuai kalender akademik Tuton UT (2 pekan kalender sejak sesi dibuka). Keterlambatan akan memengaruhi nilai evaluasi tutorial.
