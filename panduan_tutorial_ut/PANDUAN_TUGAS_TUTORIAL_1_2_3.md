# 📝 PANDUAN PENGERJAAN & RUBRIK TUGAS TUTORIAL 1, 2, & 3
## Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak (STSI4303) — Universitas Terbuka

> [!IMPORTANT]
> **Petunjuk Umum Mahasiswa:**
> 1. Pengerjaan tugas bersifat **individu** untuk menguji pemahaman praktis Anda.
> 2. Hasil pengerjaan dikumpulkan dalam bentuk **Laporan PDF** (berisi penjelasan singkat & tangkapan layar/screenshot aplikasi yang berjalan) serta **Tautan Repositori GitHub** atau arsip kode program (.zip).
> 3. Kepatuhan terhadap batas waktu pengumpulan sangat menentukan kelulusan mata kuliah praktik ini.

---

## 🎯 TUGAS TUTORIAL 1 (Diberikan pada Sesi 3)
* **Topik Materi:** Pemrograman Sisi Frontend Menggunakan TypeScript dan Vue.js 3
* **Capaian:** Mampu membuat aplikasi interaktif berbasis web/mobile menggunakan sistem reaktivitas Vue 3 dan keamanan tipe data TypeScript.

### Skenario Kasus:
Anda diminta membangun aplikasi **"Kalkulator Indeks Prestasi & Konversi Nilai Mahasiswa UT"**:
1. Buat *interface* TypeScript `MataKuliah` dengan properti: `kode: string`, `nama: string`, `sks: number`, `nilaiHuruf: 'A' | 'B' | 'C' | 'D' | 'E'`.
2. Gunakan Vue 3 Composition API (`ref` atau `reactive`) untuk menyimpan daftar mata kuliah yang diambil.
3. Tampilkan daftar mata kuliah menggunakan direktif `v-for`.
4. Sediakan form sederhana untuk menambahkan mata kuliah baru dengan *two-way data binding* (`v-model`).
5. Hitung secara otomatis nilai total SKS dan Indeks Prestasi Semester (IPS) menggunakan `computed property`.

### Rubrik Penilaian Tugas 1 (Skor Maksimal: 100)
| No | Kriteria Evaluasi | Skor Maksimal |
| :---: | :--- | :---: |
| 1 | Deklarasi antarmuka/tipe data TypeScript (`interface MataKuliah`) yang benar dan tepat | 20 |
| 2 | Penggunaan Vue 3 Composition API (`ref`/`reactive`) dan direktif template (`v-for`, `v-model`) | 30 |
| 3 | Logika kalkulasi otomatis IPS menggunakan `computed` berjalan akurat | 30 |
| 4 | Kerapian kode, penanganan masukan kosong, dan dokumentasi laporan | 20 |

---

## 🎯 TUGAS TUTORIAL 2 (Diberikan pada Sesi 5)
* **Topik Materi:** Perancangan Antarmuka Mobile dengan Ionic Framework, Form Validasi, & Theming
* **Capaian:** Mampu merancang antarmuka aplikasi bergerak berbasis Ionic dengan tata letak adaptif, validasi formulir, dan dukungan tema.

### Skenario Kasus:
Anda diminta merancang antarmuka **"Portal Pendaftaran Layanan Mandiri Mahasiswa UT (KTM & Registrasi Sesi)"**:
1. Menggunakan komponen UI bawaan Ionic Framework (`<ion-card>`, `<ion-item>`, `<ion-input>`, `<ion-select>`, `<ion-button>`).
2. Terapkan validasi formulir:
   * NIM wajib 9 digit angka.
   * Nama lengkap tidak boleh kosong.
   * Email wajib berakhiran `@ecampus.ut.ac.id` (menggunakan logika validator regex).
   * Pilihan Program Studi (Dropdown / Select).
3. Jika validasi gagal, tampilkan pesan peringatan di bawah input. Jika berhasil, tampilkan konfirmasi melalui notifikasi mengambang (`<ion-toast>` atau `<ion-alert>`).
4. Sediakan tombol toggle untuk mengubah mode tampilan (*Dark Mode* / *Light Mode*).

### Rubrik Penilaian Tugas 2 (Skor Maksimal: 100)
| No | Kriteria Evaluasi | Skor Maksimal |
| :---: | :--- | :---: |
| 1 | Struktur tampilan antarmuka rapi menggunakan komponen resmi Ionic UI | 25 |
| 2 | Implementasi validasi form (NIM 9 digit & regex email kampus) berfungsi tepat | 35 |
| 3 | Umpan balik interaktif (Toast/Alert konfirmasi berhasil/gagal) | 20 |
| 4 | Fitur Dark/Light Mode toggle berfungsi mulus dan laporan tangkapan layar jelas | 20 |

---

## 🎯 TUGAS TUTORIAL 3 (Diberikan pada Sesi 7)
* **Topik Materi:** Pengembangan Aplikasi Terintegrasi (REST API, Local Storage, & Capacitor Native Plugin)
* **Capaian:** Mampu mengintegrasikan aplikasi Ionic dengan layanan data eksternal (REST API), penyimpanan lokal persisten, dan kapabilitas perangkat keras.

### Skenario Kasus:
Anda diminta membuat aplikasi mobile **"Aplikasi Pelaporan Presensi & Lokasi Belajar Mahasiswa (Study Tracker Mobile)"**:
1. **Integrasi REST API Publik:** Mengambil data eksternal secara asinkron menggunakan `fetch` atau `axios` (misal: data cuaca BMKG / Open-Meteo, kutipan motivasi belajar harian, atau data publik lainnya).
2. **Penyimpanan Lokal Persisten (Local Storage / Capacitor Preferences):** Mahasiswa dapat menyimpan riwayat jam belajar / catatan catatan sesi yang tidak hilang saat aplikasi ditutup/direfresh.
3. **Integrasi Perangkat Keras (Capacitor Native Plugin):**
   * Pilihan A: Mengakses **Geolocation** untuk mencatat koordinat lintang-bujur (*latitude, longitude*) lokasi belajar.
   * ATAU Pilihan B: Mengakses **Camera Plugin** untuk mengambil foto bukti belajar mandiri (atau simulasi file upload).
4. Tampilan responsif yang menyatukan komponen data API, daftar catatan lokal, dan hasil sensor native.

### Rubrik Penilaian Tugas 3 (Skor Maksimal: 100)
| No | Kriteria Evaluasi | Skor Maksimal |
| :---: | :--- | :---: |
| 1 | Pengambilan data eksternal via REST API asinkron (`async/await`) berjalan lancar | 30 |
| 2 | Mekanisme simpan, baca, dan hapus data lokal persisten berfungsi baik | 25 |
| 3 | Pemanfaatan plugin Capacitor (Geolocation / Camera) berhasil terhubung | 25 |
| 4 | Arsitektur kode terstruktur, penanganan error (`try-catch`), & video/screenshot demo | 20 |
