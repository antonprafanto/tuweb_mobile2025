# 📱 CONTOH KODE PROGRAM SESI 03: TYPESCRIPT & KOMPOSISI VUE (TUGAS TUTORIAL 1)
## Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak (STSI4303) — FST Universitas Terbuka

Selamat datang di direktori berkas kode mandiri **Sesi 03: Keamanan Tipe Data TypeScript & Vue Composition API** (Modul 3 BMP UT). Sesi ini memuat **TUGAS TUTORIAL 1** dengan studi kasus perancangan aplikasi **Kalkulator Nilai Mata Kuliah & Indeks Prestasi (IPS) Mahasiswa UT**.

---

## 🗺️ Matriks 18 Berkas Mandiri Siap Eksekusi

| No. Berkas | Nama Berkas | Topik Bahasan & Fitur Interaktif | Tautan Langsung |
| :---: | :--- | :--- | :---: |
| `01` | `slide_01_roadmap_sesi_dan_tugas_1.html` | Roadmap Sesi 03 & Orientasi Tagihan Tugas Tutorial 1 | [Buka Berkas](slide_01_roadmap_sesi_dan_tugas_1.html) |
| `02` | `slide_02_urgensi_typescript_mobile.html` | Mengapa TypeScript penting: Mencegah bug runtime typo | [Buka Berkas](slide_02_urgensi_typescript_mobile.html) |
| `03` | `slide_03_tipe_primitif_dan_any_hazard.html` | Tipe data primitif & bahaya penggunaan kata kunci `any` | [Buka Berkas](slide_03_tipe_primitif_dan_any_hazard.html) |
| `04` | `slide_04_union_dan_literal_types.html` | Union Types & Literal Types pada status registrasi UT | [Buka Berkas](slide_04_union_dan_literal_types.html) |
| `05` | `slide_05_interface_model_mahasiswa.ts` | Berkas model data interface resmi `MahasiswaUT` & `MataKuliah` | [Buka Berkas](slide_05_interface_model_mahasiswa.ts) |
| `06` | `slide_06_optional_dan_readonly_properties.html` | Properti opsional (`?`) dan properti mutlak (`readonly nim`) | [Buka Berkas](slide_06_optional_dan_readonly_properties.html) |
| `07` | `slide_07_generics_array_koleksi.html` | Manipulasi koleksi data bertipe dengan `Array<T>` & `T[]` | [Buka Berkas](slide_07_generics_array_koleksi.html) |
| `08` | `slide_08_fungsi_type_annotation.html` | Anotasi parameter ketat & return type fungsi hitung mutu | [Buka Berkas](slide_08_fungsi_type_annotation.html) |
| `09` | `slide_09_vue3_script_setup_lang_ts.html` | Integrasi Vue 3 `<script setup lang="ts">` modern | [Buka Berkas](slide_09_vue3_script_setup_lang_ts.html) |
| `10` | `slide_10_typing_ref_dan_reactive.html` | Deklarasi reaktivitas bertipe: `ref<T>` & `reactive<T>` | [Buka Berkas](slide_10_typing_ref_dan_reactive.html) |
| `11` | `slide_11_typing_koleksi_array_reaktif.html` | Mengelola array koleksi objek bertipe dengan mutasi aman | [Buka Berkas](slide_11_typing_koleksi_array_reaktif.html) |
| `12` | `slide_12_typing_computed_properties.html` | Type-safety pada properti terkalkulasi `computed<T>()` | [Buka Berkas](slide_12_typing_computed_properties.html) |
| `13` | `slide_13_typing_props_komponen.html` | Deklarasi props komponen bertipe: `defineProps<T>()` | [Buka Berkas](slide_13_typing_props_komponen.html) |
| `14` | `slide_14_typing_emits_komponen.html` | Deklarasi event kustom bertipe: `defineEmits<T>()` | [Buka Berkas](slide_14_typing_emits_komponen.html) |
| `15` | `slide_15_typing_dom_events.html` | Penanganan DOM event masukan bertipe (`Event`, `KeyboardEvent`) | [Buka Berkas](slide_15_typing_dom_events.html) |
| `16` | `slide_16_rubrik_tugas_tutorial_1.md` | **Pedoman & Rubrik Penilaian Resmi TUGAS TUTORIAL 1** | [Buka Berkas](slide_16_rubrik_tugas_tutorial_1.md) |
| `17` | `slide_17_solusi_tugas_1_kalkulator_nilai.html` | **🎯 MASTER SOLUSI RESMI TUGAS TUTORIAL 1 (Kalkulator IPS)** | [Buka Berkas](slide_17_solusi_tugas_1_kalkulator_nilai.html) |
| `18` | `slide_18_preview_sesi_04_ionic_ui.html` | **Jembatan Sesi 04: Transisi Menuju Ionic UI Components** | [Buka Berkas](slide_18_preview_sesi_04_ionic_ui.html) |

---

## 🎯 Panduan Pengerjaan Tugas Tutorial 1
1. Pelajari berkas **Rubrik Penilaian** pada [`slide_16_rubrik_tugas_tutorial_1.md`](slide_16_rubrik_tugas_tutorial_1.md).
2. Jalankan dan bedah **Master Solusi** pada [`slide_17_solusi_tugas_1_kalkulator_nilai.html`](slide_17_solusi_tugas_1_kalkulator_nilai.html).
3. Modifikasi kode sesuai kreativitas Anda dengan tetap mempertahankan fungsionalitas inti:
   * Menambahkan nama, NIM, dan UPBJJ Anda sendiri.
   * Melakukan validasi input form SKS (1–6) dan konversi huruf (A=4, B=3, C=2, D=1, E=0).
   * Menghitung Total SKS, Total Mutu, dan IPS secara reaktif dengan `computed()`.
4. Buat rekaman video demonstrasi aplikasi berdurasi 3–5 menit di YouTube dengan status *Unlisted*, lalu lampirkan link-nya pada dokumen tugas di LMS Tuton UT.
