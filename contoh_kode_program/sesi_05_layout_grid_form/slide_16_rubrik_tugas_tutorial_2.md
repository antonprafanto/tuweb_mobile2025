# 📋 PANDUAN DAN RUBRIK PENILAIAN RESMI TUGAS TUTORIAL 2

> **Mata Kuliah:** Pemrograman Berbasis Perangkat Bergerak (STSI4303 / MSIM4401 — 3 SKS)  
> **Modul BMP Acuan:** Modul 5 (Layout, Theming & Komponen UI)  
> **Institusi:** Fakultas Sains dan Teknologi (FST), Universitas Terbuka  
> **Dosen Pengampu:** Anton Prafanto, S.Kom., M.T.  
> **Bobot Penilaian:** 20% dari Total Nilai Tutorial Online (Tuton)  
> **Masa Pengerjaan:** 2 Pekan sejak Sesi 05 dibuka di LMS Tuton

---

## 🎯 Capaian Pembelajaran Tugas 2
Mahasiswa mampu merancang antarmuka aplikasi bergerak menggunakan komponen resmi **Ionic Framework**, menyusun tata letak responsif, mengimplementasikan **kontrol formulir komprehensif**, menerapkan **validasi berbasis Regular Expression (NIM 9 digit angka & email institusi `@ecampus.ut.ac.id`)**, menyajikan **umpan balik interaktif (`ion-toast` / `ion-alert`)**, serta menyediakan fitur **peralihan tema (*Dark Mode* / *Light Mode*)**.

---

## 📝 Skenario Kasus Proyek

Anda ditugaskan sebagai Pengembang Aplikasi Frontend Mobile di Universitas Terbuka untuk membangun:  
**"Portal Pendaftaran Layanan Mandiri Mahasiswa UT (Penerbitan KTM Digital & Registrasi Sesi)"**

### Spesifikasi Kebutuhan Fungsional:
1. **Tata Letak & Komponen UI:**
   * Membungkus layar dengan hierarki baku: `<ion-page>`, `<ion-header>`, `<ion-toolbar>`, dan `<ion-content>`.
   * Menggunakan komponen resmi: `<ion-card>`, `<ion-item>`, `<ion-input>`, `<ion-select>`, `<ion-toggle>`, `<ion-button>`.
   * Memanfaatkan sistem 12-kolom (`ion-grid`, `ion-row`, `ion-col`) agar tampilan tetap rapi saat ponsel diputar mendatar (*landscape*).
2. **Kontrol Masukan Formulir & Validasi Regex:**
   * **NIM Mahasiswa:** Wajib tepat 9 digit angka (Pola Regex: `/^[0-9]{9}$/`). Tidak boleh memuat huruf atau spasi.
   * **Nama Lengkap:** Wajib diisi (minimal 3 karakter huruf).
   * **Surel Resmi UT:** Wajib berakhiran domain kampus (Pola Regex: `/^[a-zA-Z0-9._%+-]+@ecampus\.ut\.ac\.id$/`).
   * **Program Studi:** Pilihan dropdown minimal 3 program studi FST (S1 Sistem Informasi, S1 Informatika, S1 Sains Data).
   * **Pilihan Layanan:** Checkbox/Radio skema layanan (SIPAS Non-TTM / SIPAS Semi / Non-SIPAS).
3. **Umpan Balik Pengguna (Feedback):**
   * Menampilkan pesan kesalahan instan di bawah kolom input jika data yang diketik tidak sah.
   * Menampilkan dialog konfirmasi `<ion-alert>` sebelum data resmi disubmit.
   * Menampilkan notifikasi mengambang `<ion-toast>` berwarna hijau (*success*) jika pendaftaran berhasil.
4. **Dukungan Dynamic Theming (Dark Mode):**
   * Menyediakan tombol `<ion-toggle>` untuk beralih antara tema terang (*Light Mode*) dan tema gelap (*Dark Mode*).
   * Warna latar, teks, dan kartu informasi harus menyesuaikan kontras secara otomatis.
5. **Kartu Preview KTM Digital:**
   * Menampilkan kartu pratinjau KTM Digital secara reaktif yang langsung memperbarui foto avatar, nama, NIM, dan prodi saat mahasiswa mengetik di formulir.

---

## 📊 Matriks Rubrik Penilaian (Skor Total: 100)

| No | Kriteria Evaluasi | Indikator Kinerja Unggul | Skor Maksimal |
| :-: | :--- | :--- | :-: |
| **1** | **Tata Letak & Komponen Ionic UI** | Menggunakan komponen resmi Ionic (`ion-page`, `ion-grid`, `ion-card`, `ion-input`, `ion-select`) dengan hierarki rapi dan thumb-friendly. | **25** |
| **2** | **Ketepatan Validasi Pola Regex** | Pola Regex NIM 9-digit angka (`/^[0-9]{9}$/`) dan email kampus (`/^[a-zA-Z0-9._%+-]+@ecampus\.ut\.ac\.id$/`) berfungsi sempurna mencegah data invalid. | **35** |
| **3** | **Umpan Balik Interaktif (Toast & Alert)** | Dialog konfirmasi modal sebelum submit (`ion-alert`) dan notifikasi sukses/gagal (`ion-toast`) berjalan mulus dan informatif. | **20** |
| **4** | **Fitur Dark/Light Mode & Dokumentasi** | Sakelar tema gelap berfungsi mulus, kode program bersih berstandar TypeScript/Vue, serta laporan PDF & video demo jelas. | **20** |

---

## 📦 Ketentuan Penyerahan Tugas (Submission Checklist)

1. **Berkas Laporan PDF:**
   * Halaman Judul: Nama Mahasiswa, NIM, Program Studi, UPBJJ-UT, dan Mata Kuliah (STSI4303).
   * Tangkapan layar (*screenshot*) formulir dalam kondisi kosong, kondisi galat/invalid, dan kondisi sukses.
   * Tangkapan layar saat fitur *Dark Mode* diaktifkan.
   * Tangkapan layar kartu pratinjau KTM Digital yang terisi otomatis.
2. **Tautan Video Demonstrasi:**
   * Buat rekaman video layar pengujian aplikasi berdurasi **3–5 menit**.
   * Demonstrasikan:
     1. Mengetik NIM salah (< 9 digit atau memuat huruf) dan melihat pesan error.
     2. Mengetik email non-kampus (misal `@gmail.com`) dan melihat pesan error.
     3. Mengetik data yang benar hingga muncul kartu preview KTM Digital.
     4. Menekan tombol submit, menyetujui dialog Alert, dan melihat notifikasi Toast muncul.
     5. Menggeser sakelar Dark Mode untuk membuktikan perubahan tema instan.
   * Unggah ke **YouTube** dengan status privasi **Unlisted** (Tidak Publik), lalu sertakan tautan URL video di dalam berkas PDF laporan Anda.
3. **Master Solusi Acuan:**
   * Mahasiswa dapat mempelajari arsitektur referensi resmi pada berkas:  
     [`slide_17_solusi_tugas_2_portal_ktm_registrasi.html`](slide_17_solusi_tugas_2_portal_ktm_registrasi.html)
