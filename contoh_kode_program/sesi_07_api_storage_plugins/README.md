# 📱 CONTOH KODE PROGRAM SESI 07: REST API, STORAGE, & TUGAS TUTORIAL 3
## Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak (STSI4303 / MSIM4401) — FST Universitas Terbuka

Selamat datang di direktori berkas kode mandiri **Sesi 07: Asynchronous REST API, Penyimpanan Lokal Offline Persisten, Hardware Plugins (GPS & Kamera), & TUGAS TUTORIAL 3** (Modul 8 & 9 BMP UT). Sesi ini memuat instrumen evaluasi tutorial resmi ketiga (Milestone 3) dengan bobot **20%** dari total nilai Tuton UT.

Seluruh 18 berkas kode di bawah ini mematuhi **The Zero-Friction Courseware Framework**, dapat dijalankan langsung di peramban Google Chrome tanpa build tools rumit, serta dirancang khusus ramah laptop mahasiswa UT (RAM 4–8GB friendly).

---

## 🗺️ Matriks 18 Berkas Mandiri Siap Eksekusi

| No. Berkas | Nama Berkas | Topik Bahasan & Fitur Interaktif | Tautan Langsung |
| :---: | :--- | :--- | :---: |
| `01` | `slide_01_orientasi_sesi_dan_tugas_3.html` | Roadmap Sesi 07, Sub-CPMK 7 & Pengumuman Akbar TUGAS TUTORIAL 3 (20%) | [Buka Berkas](slide_01_orientasi_sesi_dan_tugas_3.html) |
| `02` | `slide_02_konsep_rest_api_asinkron.html` | Anatomi REST API: Client-Server, HTTP Methods (GET/POST/PUT/DELETE), & Status Codes | [Buka Berkas](slide_02_konsep_rest_api_asinkron.html) |
| `03` | `slide_03_fetch_api_dan_async_await.html` | Eksekusi HTTP Modern: `fetch()`, `async/await`, & Error Handling `try-catch-finally` | [Buka Berkas](slide_03_fetch_api_dan_async_await.html) |
| `04` | `slide_04_indikator_pemuatan_loading.html` | UX Asinkron: Mengelola State `isLoading`, `<ion-spinner>`, & `<ion-skeleton-text>` Shimmer | [Buka Berkas](slide_04_indikator_pemuatan_loading.html) |
| `05` | `slide_05_integrasi_live_api_cuaca.html` | Live Demo REST API Publik: Data Cuaca Sentra Kampus UT via Open-Meteo (No API Key) | [Buka Berkas](slide_05_integrasi_live_api_cuaca.html) |
| `06` | `slide_06_komparasi_opsi_penyimpanan_mobile.html` | Matriks Spektrum Storage: RAM vs LocalStorage vs IndexedDB vs SQLite vs Preferences | [Buka Berkas](slide_06_komparasi_opsi_penyimpanan_mobile.html) |
| `07` | `slide_07_capacitor_preferences_kv.html` | Operasi CRUD Storage Persisten: `Preferences.set()`, `get()`, `remove()`, & `clear()` | [Buka Berkas](slide_07_capacitor_preferences_kv.html) |
| `08` | `slide_08_serialisasi_objek_json_storage.html` | Serialisasi Data Kompleks: Menyimpan & Memulihkan Objek via `JSON.stringify` / `parse` | [Buka Berkas](slide_08_serialisasi_objek_json_storage.html) |
| `09` | `slide_09_arsitektur_offline_first_caching.html` | Pola Offline-First: Strategi Cache-First vs Network-First saat Ponsel Hilang Sinyal | [Buka Berkas](slide_09_arsitektur_offline_first_caching.html) |
| `10` | `slide_10_plugin_geolocation_koordinat.html` | Integrasi Sensor 1: Mengunci Koordinat Lintang & Bujur via `@capacitor/geolocation` | [Buka Berkas](slide_10_plugin_geolocation_koordinat.html) |
| `11` | `slide_11_geofencing_validasi_lokasi_ut.html` | Algoritma Geofencing: Rumus Haversine untuk Memvalidasi Radius Presensi Mahasiswa | [Buka Berkas](slide_11_geofencing_validasi_lokasi_ut.html) |
| `12` | `slide_12_plugin_camera_capture_photo.html` | Integrasi Sensor 2: Mengambil Foto Bukti Belajar / Scan Dokumen via `@capacitor/camera` | [Buka Berkas](slide_12_plugin_camera_capture_photo.html) |
| `13` | `slide_13_plugin_network_status_detection.html` | Monitoring Sinyal Real-Time: Deteksi Otomatis Event Online/Offline via `@capacitor/network` | [Buka Berkas](slide_13_plugin_network_status_detection.html) |
| `14` | `slide_14_clean_architecture_service_pattern.html` | Clean Architecture: Memisahkan Logika Bisnis ke Layer Service (`studyTrackerService.ts`) | [Buka Berkas](slide_14_clean_architecture_service_pattern.html) |
| `15` | `slide_15_keamanan_token_jwt_dan_interceptor.html` | Keamanan REST API: Manajemen Token JWT, Header `Authorization: Bearer`, & Penanganan 401 | [Buka Berkas](slide_15_keamanan_token_jwt_dan_interceptor.html) |
| `16` | `slide_16_rubrik_tugas_tutorial_3.md` | **Pedoman & Rubrik Penilaian Resmi TUGAS TUTORIAL 3 (Skala 0–100)** | [Buka Berkas](slide_16_rubrik_tugas_tutorial_3.md) |
| `17` | `slide_17_solusi_tugas_3_study_tracker.html` | **🎯 MASTER SOLUSI RESMI TUGAS TUTORIAL 3: UT Study Tracker & Presensi Belajar Mobile** | [Buka Berkas](slide_17_solusi_tugas_3_study_tracker.html) |
| `18` | `slide_18_preview_sesi_08_build_apk_uas.html` | **Jembatan Sesi 08:** Finalisasi Rilis APK Stand-alone, Keystore, & 50 Bank Soal UAS | [Buka Berkas](slide_18_preview_sesi_08_build_apk_uas.html) |

---

## 🎯 Panduan Praktikum Mandiri & Pengerjaan Tugas Tutorial 3
1. Pelajari berkas **Rubrik Penilaian** pada [`slide_16_rubrik_tugas_tutorial_3.md`](slide_16_rubrik_tugas_tutorial_3.md).
2. Jalankan dan uji coba **Master Solusi Resmi** pada [`slide_17_solusi_tugas_3_study_tracker.html`](slide_17_solusi_tugas_3_study_tracker.html) langsung di peramban Google Chrome.
3. Modifikasi kode sesuai identitas Anda:
   * Masukkan nama lengkap, NIM 9 digit, dan UPBJJ-UT Anda.
   * Uji fitur penguncian koordinat GPS dan foto bukti belajar modul BMP.
   * Pastikan catatan yang Anda simpan tidak hilang saat peramban ditutup/direfresh.
4. Rekam video pengujian berdurasi 3–5 menit di YouTube (Unlisted), lalu kumpulkan laporan PDF beserta tautan repositori GitHub Anda ke LMS Tuton UT sebelum batas waktu berakhir!
