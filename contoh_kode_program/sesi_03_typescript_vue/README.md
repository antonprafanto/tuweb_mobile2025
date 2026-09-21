# 📱 CONTOH KODE PROGRAM SESI 03: TYPESCRIPT & KOMPOSISI VUE (TUGAS TUTORIAL 1)
## Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak (STSI4303) — FST Universitas Terbuka

Selamat datang di direktori berkas kode mandiri **Sesi 03: Keamanan Tipe Data TypeScript & Vue Composition API** (Modul 3 BMP UT). Sesi ini memuat **TUGAS TUTORIAL 1** dengan studi kasus perancangan aplikasi **Kalkulator Nilai Mata Kuliah & Indeks Prestasi (IPS) Mahasiswa UT**.

---

## 🛠️ Cara Menjalankan Berkas (Panduan Pemula / Zero-Friction)
Seluruh berkas pada sesi ini dirancang agar **langsung dapat dijalankan** tanpa konfigurasi server yang rumit:
1. **Eksekusi Langsung di Browser (Zero Setup):**  
   Cukup **klik dua kali (*double click*)** pada salah satu berkas berekstensi `.html` di bawah ini (misalnya `slide_17_solusi_tugas_1_kalkulator_nilai.html`). Berkas akan otomatis terbuka di Google Chrome atau browser bawaan Anda dengan antarmuka interaktif, diagram visual SVG, dan logika reaktif penuh!
2. **Membaca & Memodifikasi Kode:**  
   Gunakan **Visual Studio Code** (VS Code) untuk membuka folder ini. Pasang ekstensi *Vue - Official (Volar)* dan *TypeScript Vue Plugin* agar Anda mendapatkan fitur penyorotan sintaks dan peringatan garis merah otomatis saat terjadi kesalahan pengetikan tipe data.
3. **Menginspeksi Log & Reaktivitas:**  
   Tekan tombol **F12** pada keyboard untuk membuka panel *Developer Tools (Console)* browser guna melihat log variabel, eksekusi reaktif, dan hasil kalkulasi di balik layar.

---

## 🗺️ Matriks 18 Berkas Mandiri Siap Eksekusi

| No. Berkas | Nama Berkas | Format | Topik Bahasan & Fitur Interaktif | Tautan Langsung |
| :---: | :--- | :---: | :--- | :---: |
| `01` | `slide_01_roadmap_sesi_dan_tugas_1.html` | `.html` | Roadmap Sesi 03 & Orientasi Tagihan Tugas Tutorial 1 | [Buka Berkas](slide_01_roadmap_sesi_dan_tugas_1.html) |
| `02` | `slide_02_urgensi_typescript_mobile.html` | `.html` | Mengapa TypeScript penting: Mencegah bug runtime typo | [Buka Berkas](slide_02_urgensi_typescript_mobile.html) |
| `03` | `slide_03_tipe_primitif_dan_any_hazard.html` | `.html` | Tipe data primitif & bahaya penggunaan kata kunci `any` | [Buka Berkas](slide_03_tipe_primitif_dan_any_hazard.html) |
| `04` | `slide_04_union_dan_literal_types.html` | `.html` | Union Types & Literal Types pada status registrasi UT | [Buka Berkas](slide_04_union_dan_literal_types.html) |
| `05` | `slide_05_interface_model_mahasiswa.html` | `.html` | **Validator Interaktif Model Data Mahasiswa & Mata Kuliah** | [Buka Berkas](slide_05_interface_model_mahasiswa.html) |
| `05-TS` | `slide_05_interface_model_mahasiswa.ts` | `.ts` | *Berkas Model TypeScript Murni (Kontrak Interface Model UT)* | [Buka Kode](slide_05_interface_model_mahasiswa.ts) |
| `06` | `slide_06_optional_dan_readonly_properties.html` | `.html` | Properti opsional (`?`) dan properti mutlak (`readonly nim`) | [Buka Berkas](slide_06_optional_dan_readonly_properties.html) |
| `07` | `slide_07_generics_array_koleksi.html` | `.html` | Manipulasi koleksi data bertipe dengan `Array<T>` & `T[]` | [Buka Berkas](slide_07_generics_array_koleksi.html) |
| `08` | `slide_08_fungsi_type_annotation.html` | `.html` | Anotasi parameter ketat & return type fungsi hitung mutu | [Buka Berkas](slide_08_fungsi_type_annotation.html) |
| `09` | `slide_09_vue3_script_setup_lang_ts.html` | `.html` | Integrasi Vue 3 `<script setup lang="ts">` modern | [Buka Berkas](slide_09_vue3_script_setup_lang_ts.html) |
| `10` | `slide_10_typing_ref_dan_reactive.html` | `.html` | Deklarasi reaktivitas bertipe: `ref<T>` & `reactive<T>` | [Buka Berkas](slide_10_typing_ref_dan_reactive.html) |
| `11` | `slide_11_typing_koleksi_array_reaktif.html` | `.html` | Mengelola array koleksi objek bertipe dengan mutasi aman | [Buka Berkas](slide_11_typing_koleksi_array_reaktif.html) |
| `12` | `slide_12_typing_computed_properties.html` | `.html` | Type-safety pada properti terkalkulasi `computed<T>()` | [Buka Berkas](slide_12_typing_computed_properties.html) |
| `13` | `slide_13_typing_props_komponen.html` | `.html` | Deklarasi props komponen bertipe: `defineProps<T>()` | [Buka Berkas](slide_13_typing_props_komponen.html) |
| `14` | `slide_14_typing_emits_komponen.html` | `.html` | Deklarasi event kustom bertipe: `defineEmits<T>()` | [Buka Berkas](slide_14_typing_emits_komponen.html) |
| `15` | `slide_15_typing_dom_events.html` | `.html` | Penanganan DOM event masukan bertipe (`Event`, `KeyboardEvent`) | [Buka Berkas](slide_15_typing_dom_events.html) |
| `16` | `slide_16_rubrik_tugas_tutorial_1.html` | `.html` | **🎯 Kalkulator Skor Mandiri Rubrik Tugas Tutorial 1 (0–100)** | [Buka Berkas](slide_16_rubrik_tugas_tutorial_1.html) |
| `16-MD` | `slide_16_rubrik_tugas_tutorial_1.md` | `.md` | *Dokumen Panduan & Rubrik Penilaian Resmi Akademik UT* | [Buka Dokumen](slide_16_rubrik_tugas_tutorial_1.md) |
| `17` | `slide_17_solusi_tugas_1_kalkulator_nilai.html` | `.html` | **🎯 MASTER SOLUSI RESMI TUGAS TUTORIAL 1 (Kalkulator IPS)** | [Buka Berkas](slide_17_solusi_tugas_1_kalkulator_nilai.html) |
| `18` | `slide_18_preview_sesi_04_ionic_ui.html` | `.html` | **Jembatan Sesi 04: Transisi Menuju Ionic UI Components** | [Buka Berkas](slide_18_preview_sesi_04_ionic_ui.html) |

---

## 🎯 Panduan Pengerjaan Tugas Tutorial 1
1. **Simulasi Nilai Mandiri:** Gunakan kalkulator interaktif pada [`slide_16_rubrik_tugas_tutorial_1.html`](slide_16_rubrik_tugas_tutorial_1.html) atau baca pedoman teks di [`slide_16_rubrik_tugas_tutorial_1.md`](slide_16_rubrik_tugas_tutorial_1.md) untuk memastikan seluruh kriteria penilaian terpenuhi.
2. **Bedah Master Solusi:** Jalankan dan pelajari alur data pada [`slide_17_solusi_tugas_1_kalkulator_nilai.html`](slide_17_solusi_tugas_1_kalkulator_nilai.html).
3. **Modifikasi & Personalisasi Data:** Modifikasi kode sesuai kreativitas Anda dengan tetap mempertahankan fungsionalitas inti:
   * Menampilkan profil mahasiswa (NIM, Nama, UPBJJ, dan Program Studi Anda sendiri).
   * Validasi masukan formulir SKS (1–6) dan opsi nilai huruf (A=4, B=3, C=2, D=1, E=0).
   * Menghitung Total SKS, Total Mutu, dan Indeks Prestasi Semester (IPS) secara reaktif dengan `computed()`.
   * Memberikan badge predikat kelulusan dan fitur cetak ringkasan KTPU.
4. **Rekaman Video Demonstrasi:** Buat rekaman video demonstrasi aplikasi berdurasi 3–5 menit di YouTube dengan status *Unlisted*, perlihatkan wajah Anda dan jelaskan kode programnya, lalu lampirkan link video pada berkas laporan tugas di LMS UT.

