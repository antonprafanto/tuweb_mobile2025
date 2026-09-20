# 📘 KERANGKA KERJA COURSEWARE BERBASIS GITHUB (IONIC & VUE)
## *The Zero-Friction Courseware Framework: Pedoman Pengembangan Materi Perkuliahan Pemrograman Mobile Bebas Hambatan Kognitif*
### Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak (STSI4303) — Universitas Terbuka

> **Dokumen Panduan Standar Dosen & Tutor Pengembang Kurikulum**  
> Disusun berdasarkan evaluasi empiris perkuliahan pemrograman jarak jauh (PTTJJ) di Universitas Terbuka. Panduan ini dirancang untuk memastikan seluruh bahan ajar, slide presentasi, dan contoh kode program dapat diakses, dipelajari, dan dijalankan oleh mahasiswa secara mandiri tanpa kendala teknis non-esensial (*zero friction*).

---

## 1. Latar Belakang & Filosofi Inti

### 1.1 Karakteristik Mahasiswa Universitas Terbuka (UT)
Mahasiswa UT memiliki karakteristik unik yang membedakannya dengan mahasiswa perguruan tinggi konvensional:
1. **Pembelajar Mandiri Jarak Jauh:** Tersebar di berbagai penjuru nusantara hingga luar negeri dengan interaksi tatap muka terbatas (Tutorial Webinar / Tuton Online).
2. **Variasi Spesifikasi Perangkat (*Hardware Choke*):** Sebagian besar mahasiswa menggunakan laptop dengan RAM 4GB–8GB. Menjalankan Android Studio, Emulator AVD, dan peramban secara bersamaan berisiko membuat komputer macet total (*freeze*).
3. **Keterbatasan Bandwidth Jaringan:** Di beberapa daerah, mengunduh dependensi berat (*gigabytes of SDK*) membutuhkan waktu berjam-jam atau kuota data yang tinggi.

### 1.2 Filosofi: *The Zero-Friction Courseware*
Materi perkuliahan harus menganut prinsip:
> **"Dari Membaca Materi ke Eksekusi Kode dalam Kurang dari 5 Detik, Mandiri, Fokus Logika, dan Ramah Komputer RAM 4–8GB."**

---

## 2. Enam Pilar Utama Kerangka Kerja

```
                      THE ZERO-FRICTION COURSEWARE (IONIC-VUE)
 ┌───────────────────────────────────┬───────────────────────────────────┐
 │ 1. Clean Hub Directory            │ 2. One-Slide, One-Runnable-File   │
 │    Struktur repositori bersih     │    1 konsep = 1 berkas utuh       │
 │    tanpa prefiks nomor folder     │    (Standalone CDN / Vue SFC)     │
 ├───────────────────────────────────┼───────────────────────────────────┤
 │ 3. Anti-Design Overhead           │ 4. Two-Way Hyperlink Integration  │
 │    Fokus logika & struktur,       │    Materi Slide ⇄ Repositori      │
 │    bebas styling dekoratif rumit  │    Direct raw download & web view │
 ├───────────────────────────────────┼───────────────────────────────────┤
 │ 5. Zero-Warning Quality Gate      │ 6. Zero-Barrier Lab & Playground  │
 │    Sintaks TypeScript & Vue valid │    Browser preview instan, tanpa  │
 │    dan bebas galat                │    wajib emulator Android berat   │
 └───────────────────────────────────┴───────────────────────────────────┘
```

---

### PILAR 1: Repositori *Clean Hub Directory* (Sederhana, Bersih, Terfokus)

Repositori publik mahasiswa tidak menggunakan penomoran prefiks numerik (`01_`, `03_`, `07_`) pada direktori utama agar rapi, intuitif, dan sesuai standar open source:

```text
mobile2026UT/
├── 📁 slide_presentasi/       # Materi presentasi / modul bacaan tiap sesi
├── 📁 contoh_kode_program/    # Berkas kode program siap pakai & siap jalankan
├── 📁 panduan_tutorial_ut/    # Silabus RAT/SAT, panduan Tugas 1-3, & inisiasi Tuton
├── 📄 KERANGKA_KERJA_COURSEWARE_GITHUB.md
├── 📄 .gitignore
└── 📄 README.md               # Portal navigasi utama perkuliahan
```

---

### PILAR 2: Prinsip *"One-Slide, One-Runnable-File"* (Atomik)

Setiap sesi perkuliahan memuat contoh teknis yang **WAJIB** berupa berkas mandiri yang lengkap:
* **Tingkat Dasar (Konsep UI & Vue):** Menggunakan berkas standalone HTML berbasis CDN (`vue.global.js` & Ionic core via CDN). Mahasiswa cukup klik ganda (*double click*) berkas HTML di komputer mereka untuk membuka langsung di peramban (Chrome/Edge/Firefox) tanpa perlu menjalankan terminal atau `npm install` yang berat!
* **Tingkat Lanjut (Aplikasi Terintegrasi & Capacitor):** Berupa Single File Component (SFC `.vue`) atau konfigurasi TypeScript yang siap di-*copy-paste* ke dalam proyek Ionic Vue standar.

---

### PILAR 3: Prinsip *"Anti-Design Overhead"* (Fokus Pedagogis)

Contoh kode untuk pengajaran konsep dasar dilarang memuat dekorasi CSS berlebihan:
* **Gunakan Komponen Bawaan Ionic:** Gunakan `<ion-card>`, `<ion-item>`, `<ion-input>`, `<ion-button>` standar tanpa kustomisasi CSS ratusan baris.
* **Panjang Kode Ringkas:** 40 s.d. 80 baris per file contoh agar mahasiswa langsung memahami relasi antara template, script, dan data.
* **Komentar Edukatif:** Jelaskan *mengapa* fungsi tersebut dipanggil (misal: pentingnya reactive state `ref()`, validasi form, atau penanganan promise `async/await`).

---

### PILAR 4: Integrasi Hyperlink Dua Arah

Materi sesi perkuliahan dan repositori GitHub terhubung langsung:
1. **Direct Download Slide:** Mahasiswa dapat mengunduh materi dalam satu kali klik melalui tautan *raw GitHub*.
2. **Tautan Langsung ke Kode:** Di setiap pembahasan konsep, terdapat tautan langsung menuju berkas kode di GitHub sehingga mahasiswa tidak tersesat dalam repositori.

---

### PILAR 5: *Zero-Warning Quality Gate*

Seluruh kode program di repositori wajib memenuhi standar mutu industri:
1. **TypeScript Typing:** Penggunaan `interface` dan `type` eksplisit pada entitas data untuk meminimalkan *runtime error*.
2. **Vue 3 Best Practice:** Menggunakan modern **Composition API** (`<script setup lang="ts">`) yang ringkas dan standar industri 2026.
3. **Format Rapi:** Bebas dari galat sintaksis dan inkonsistensi indentasi.

---

### PILAR 6: *Low-Spec & Zero-Barrier Lab*

Mitigasi untuk perkuliahan mandiri mahasiswa di seluruh wilayah:
* **Browser sebagai Target Utama:** Mahasiswa menguji fungsionalitas aplikasi di peramban desktop (`ionic serve` atau buka berkas HTML mandiri).
* **Simulasi Tampilan Ponsel di Chrome:** Cukup tekan `F12` lalu aktifkan tombol *Toggle Device Toolbar* (`Ctrl + Shift + M`) untuk melihat tampilan responsif smartphone Android/iOS.
* **Uji Hardware Fisik:** Jika ingin menguji perangkat Android, gunakan kabel USB dengan mode *USB Debugging* dan *mirroring* via `scrcpy` (ringan dan tanpa emulator).
