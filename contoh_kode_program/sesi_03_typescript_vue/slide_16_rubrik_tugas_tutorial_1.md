# 📋 PANDUAN LENGKAP & RUBRIK PENILAIAN TUGAS TUTORIAL 1
## Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak (STSI4303 / 3 SKS)
### Fakultas Sains dan Teknologi — Universitas Terbuka

---

## 🎯 Deskripsi Studi Kasus
Mahasiswa diminta membangun aplikasi mini mobile berbasis **Vue.js 3 Composition API** dan **TypeScript** bertajuk **"Kalkulator Nilai Mata Kuliah & Indeks Prestasi Semester (IPS) Mahasiswa UT"**. Aplikasi ini bertujuan mempermudah mahasiswa dalam mensimulasikan perolehan nilai, menghitung total beban SKS yang diambil, mengonversi nilai huruf ke bobot angka secara otomatis, menghitung mutu (SKS × Bobot), serta memprediksi Indeks Prestasi Semester (IPS) beserta predikat akademik kelulusan.

---

## ⚖️ Rubrik Penilaian Resmi (Skala 0 – 100)

| No | Aspek Penilaian | Bobot | Kriteria Capai Maksimal (Skor 100) |
| :-: | :--- | :-: | :--- |
| **1** | **Model Data TypeScript & Type Safety** | **25%** | Mendefinisikan `interface MataKuliah` dan `interface MahasiswaUT` secara ketat tanpa menggunakan kata kunci `any`. Menerapkan literal types untuk nilai huruf (`'A'\|'B'\|'C'\|'D'\|'E'`). |
| **2** | **Reaktivitas Vue 3 & Validasi Form** | **25%** | Menerapkan `ref<MataKuliah[]>`, form input nama/sks dengan `v-model.number`, validasi batas beban SKS (1–6 per mata kuliah), serta tombol aksi penambahan dan penghapusan baris data secara reaktif. |
| **3** | **Logika Kalkulasi Otomatis (Computed)** | **30%** | Memanfaatkan `computed()` untuk menghitung Total SKS, Total Mutu, Nilai IPS (2 desimal), dan penentuan Predikat Akademik secara efisien dengan *dependency caching*. |
| **4** | **Video Demonstrasi & Integritas Akademik** | **20%** | Menyertakan link video YouTube *Unlisted* berdurasi 3–5 menit yang memperlihatkan wajah mahasiswa, demonstrasi fitur aplikasi, dan penjelasan singkat baris kode TypeScript. Bebas plagiasi. |

---

## 📦 Format Pengumpulan Berkas di LMS UT
1. Berkas kode program (berkas `.html` mandiri atau zip proyek Vue TypeScript).
2. Dokumen laporan PDF singkat (NIM, Nama, UPBJJ, tangkapan layar aplikasi, dan tautan video YouTube).
3. Batas waktu pengumpulan adalah **2 pekan** sejak Sesi 03 dibuka.
4. *Master Solusi Resmi* dapat dipelajari pada berkas: [`slide_17_solusi_tugas_1_kalkulator_nilai.html`](slide_17_solusi_tugas_1_kalkulator_nilai.html).
