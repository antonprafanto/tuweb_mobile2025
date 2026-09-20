# 📱 CONTOH KODE PROGRAM SESI 08: BUILD APK RELEASE & BANK SOAL UAS
## Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak (STSI4303 / MSIM4401) — FST Universitas Terbuka

Selamat datang di direktori berkas kode mandiri **Sesi 08: Optimasi Kinerja, Build APK Release Stand-alone, Keystore Digital Signing, & 50 Bank Soal Komprehensif UAS** (Modul 9 BMP UT - Sesi Penutup Semester).

Seluruh 18 berkas kode di bawah ini mematuhi **The Zero-Friction Courseware Framework**, dapat dijalankan langsung di peramban Google Chrome tanpa build tools rumit, serta dirancang khusus ramah laptop mahasiswa UT (RAM 4–8GB friendly).

---

## 🗺️ Matriks 18 Berkas Mandiri Siap Eksekusi

| No. Berkas | Nama Berkas | Topik Bahasan & Fitur Interaktif | Tautan Langsung |
| :---: | :--- | :--- | :---: |
| `01` | `slide_01_orientasi_sesi_08_final.html` | Garis Akhir Perkuliahan: Dari Kode Menjadi Berkas Installer APK Mandiri | [Buka Berkas](slide_01_orientasi_sesi_08_final.html) |
| `02` | `slide_02_siklus_rilis_aplikasi_mobile.html` | 5 Tahapan Siklus Rilis Aplikasi Mobile (Development hingga Maintenance) | [Buka Berkas](slide_02_siklus_rilis_aplikasi_mobile.html) |
| `03` | `slide_03_pembuatan_keystore_digital.html` | Pembuatan Digital Keystore RSA 2048-bit via Utilitas `keytool` | [Buka Berkas](slide_03_pembuatan_keystore_digital.html) |
| `04` | `slide_04_konfigurasi_signing_build_gradle.html` | Konfigurasi Otomasi Tanda Tangan Digital pada `android/app/build.gradle` | [Buka Berkas](slide_04_konfigurasi_signing_build_gradle.html) |
| `05` | `slide_05_kompilasi_apk_assemble_release.html` | Eksekusi Kompilasi APK Release Stand-alone via Gradle Wrapper (`./gradlew assembleRelease`) | [Buka Berkas](slide_05_kompilasi_apk_assemble_release.html) |
| `06` | `slide_06_instalasi_apk_mandiri_tanpa_pc.html` | Distribusi & Instalasi Mandiri (Sideloading) APK ke Ponsel Tanpa PC | [Buka Berkas](slide_06_instalasi_apk_mandiri_tanpa_pc.html) |
| `07` | `slide_07_optimasi_minifikasi_r8_proguard.html` | Optimasi Biner: Minifikasi Kode & Tree Shaking Native via Kompilator R8 / ProGuard | [Buka Berkas](slide_07_optimasi_minifikasi_r8_proguard.html) |
| `08` | `slide_08_optimasi_aset_dan_tree_shaking.html` | Optimasi Web Assets: Kompresi WebP, Tree Shaking ES Modules & Lazy Loading | [Buka Berkas](slide_08_optimasi_aset_dan_tree_shaking.html) |
| `09` | `slide_09_audit_keamanan_sebelum_rilis.html` | Audit Keamanan Pra-Rilis: Proteksi Data, Cleartext HTTPS, & Permissions Sanitization | [Buka Berkas](slide_09_audit_keamanan_sebelum_rilis.html) |
| `10` | `slide_10_pwa_service_worker_offline.html` | Distribusi Alternatif: Progressive Web App (PWA) & Service Worker Cache | [Buka Berkas](slide_10_pwa_service_worker_offline.html) |
| `11` | `slide_11_distribusi_google_play_console.html` | Publikasi Google Play Console & Standar Android App Bundle (`.aab`) | [Buka Berkas](slide_11_distribusi_google_play_console.html) |
| `12` | `slide_12_kisi_kisi_uas_modul_1_sampai_9.html` | **Kisi-kisi Resmi Komprehensif UAS**: Pemetaan 9 Modul BMP STSI4303 / MSIM4401 | [Buka Berkas](slide_12_kisi_kisi_uas_modul_1_sampai_9.html) |
| `13` | `slide_13_bank_soal_uas_bagian_1.html` | **Bank Soal UAS Bagian 1 (Soal 01–15)**: Arsitektur Hybrid, Web Standards & Vue.js 3 | [Buka Berkas](slide_13_bank_soal_uas_bagian_1.html) |
| `14` | `slide_14_bank_soal_uas_bagian_2.html` | **Bank Soal UAS Bagian 2 (Soal 16–30)**: TypeScript, Ionic Grid, Form & Dark Mode | [Buka Berkas](slide_14_bank_soal_uas_bagian_2.html) |
| `15` | `slide_15_bank_soal_uas_bagian_3.html` | **Bank Soal UAS Bagian 3 (Soal 31–45)**: Capacitor Bridge, REST API, Storage & Sensor | [Buka Berkas](slide_15_bank_soal_uas_bagian_3.html) |
| `16` | `slide_16_bank_soal_uas_bagian_4.html` | **Bank Soal UAS Bagian 4 (Soal 46–50)**: Signing Keystore, Build Release & Kasus Produksi | [Buka Berkas](slide_16_bank_soal_uas_bagian_4.html) |
| `17` | `slide_17_lab_quest_08_apk_validator.html` | **🎯 MASTER SOLUSI LAB QUEST 08: APK Release Validator & Engine Simulasi 50 Soal UAS** | [Buka Berkas](slide_17_lab_quest_08_apk_validator.html) |
| `18` | `slide_18_penutup_semester_pesan_dosen.html` | **🎓 Penutup Semester**: Refleksi Perkuliahan & Pesan Dosen Pak Anton Prafanto | [Buka Berkas](slide_18_penutup_semester_pesan_dosen.html) |

---

## 🎯 Panduan Praktikum Mandiri & Persiapan UAS
1. Jalankan **Master Solusi Lab Quest 08** pada [`slide_17_lab_quest_08_apk_validator.html`](slide_17_lab_quest_08_apk_validator.html) di peramban Google Chrome.
2. Gunakan **Tab 1 (APK Release Readiness Audit)** untuk memeriksa apakah proyek aplikasi Anda sudah memenuhi checklist keamanan sebelum dibagikan ke teman atau dipublikasikan.
3. Kerjakan **Tab 2 (Simulasi Penuh 50 Soal UAS)**:
   * Alokasikan waktu 90 menit tanpa membuka catatan untuk mengukur kesiapan murni Anda.
   * Ujian dilengkapi timer otomatis, matriks navigasi nomor soal, dan penilaian skor instan skala 0–100.
   * Pelajari kunci jawaban dan pembahasan akademik dari setiap soal yang dijawab salah untuk memperdalam konsep Modul 1 s.d. Modul 9 BMP UT.
4. Terapkan pesan penutup dari Dosen Pengampu pada [`slide_18_penutup_semester_pesan_dosen.html`](slide_18_penutup_semester_pesan_dosen.html): Terus asah keterampilan, bangun portofolio GitHub profesional, dan bersiaplah menjadi Mobile Engineer unggul kebanggaan Universitas Terbuka!
