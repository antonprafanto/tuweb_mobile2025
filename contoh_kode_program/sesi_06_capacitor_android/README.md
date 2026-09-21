# 📱 CONTOH KODE PROGRAM SESI 06: CAPACITOR RUNTIME BRIDGE & ANDROID STUDIO
## Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak (STSI4303 / MSIM4401) — FST Universitas Terbuka
**Dosen Pengampu: Pak Anton Prafanto, S.Kom., M.T.**

Selamat datang di direktori berkas kode program mandiri **Sesi 06: Capacitor Runtime Bridge, Platform Android Studio, & USB Debugging Ramah RAM (scrcpy)** (Modul 6 & 7 BMP UT). Sesi ini memandu mahasiswa melompat dari pengujian di peramban web desktop menuju ekosistem perangkat native Android sejati.

Seluruh 18 berkas kode mandiri di bawah ini mematuhi **The Zero-Friction Courseware Framework**, dilengkapi **Panduan Ramah Pemula (`.guide-box`)**, **Diagram Arsitektur Inline SVG Responsif**, dan **Sitasi Standar Akademik Ilmiah (`.source-cite`)**. Berkas dapat dijalankan langsung di Google Chrome melalui protokol `file:///` tanpa instalasi server lokal yang rumit, serta dirancang khusus ramah laptop mahasiswa UT (RAM 4–8GB friendly).

---

## 🛠️ Panduan Alat & Lingkungan Belajar (Ramah Pemula)

Sebelum menguji perintah dan berkas interaktif di sesi ini, siapkan perangkat lunak berikut di laptop Anda:
1. **Google Chrome / Peramban Desktop:** Cukup klik ganda berkas `.html` mana pun untuk membuka modul interaktif secara instan (Zero Friction, tanpa internet).
2. **Chrome DevTools (`F12`):** Untuk menginspeksi console log dan pesan lalu lintas jembatan Capacitor Bridge.
3. **Visual Studio Code:** Digunakan untuk membuka proyek web Vue, menyunting `capacitor.config.ts`, serta menjalankan perintah terminal via Integrated Terminal (`Ctrl + ` `).
4. **Android Studio (Ladybug / Hedgehog):** Digunakan untuk membuka folder native `android/`, mengelola Android SDK, dan mengompilasi berkas APK debug.
5. **Kabel Data USB & Smartphone Fisik Android:** Solusi terbaik mahasiswa UT dengan laptop RAM 4–8GB untuk menjalankan aplikasi langsung di HP pribadi melalui **USB Debugging** (hanya memakai RAM laptop ~50 MB dibanding emulator AVD yang memakan RAM 4.000 MB).
6. **scrcpy (Screen Copy):** Alat sumber terbuka ringan (< 70 MB RAM) untuk memproyeksikan dan mengontrol layar HP Android Anda langsung dari monitor laptop menggunakan mouse dan keyboard.

---

## 🗺️ Matriks 18 Berkas Mandiri Siap Eksekusi

| No. Berkas | Nama Berkas | Topik Bahasan & Fitur Interaktif | Tautan Langsung |
| :---: | :--- | :--- | :---: |
| `01` | `slide_01_orientasi_sesi_06_bridge.html` | Orientasi Sesi 06, Sub-CPMK 6 & Roadmap Transformasi ke Native Android | [🌐 Buka Berkas](slide_01_orientasi_sesi_06_bridge.html) |
| `02` | `slide_02_komparasi_capacitor_vs_cordova.html` | Komparasi Filosofi: Apache Cordova (Black-box) vs Capacitor (Source-first) | [🌐 Buka Berkas](slide_02_komparasi_capacitor_vs_cordova.html) |
| `03` | `slide_03_cara_kerja_runtime_bridge.html` | Mekanisme Jembatan: Pesan Dua Arah JS &harr; Java/Kotlin & Simulator RPC | [🌐 Buka Berkas](slide_03_cara_kerja_runtime_bridge.html) |
| `04` | `slide_04_konfigurasi_capacitor_config.html` | Generator & Validator `capacitor.config.ts`: Penegakan Reverse-Domain appId | [🌐 Buka Berkas](slide_04_konfigurasi_capacitor_config.html) |
| `05` | `slide_05_alur_perintah_cli_capacitor.html` | Alur 4 Perintah CLI: `build`, `add android`, `sync`, & `open android` | [🌐 Buka Berkas](slide_05_alur_perintah_cli_capacitor.html) |
| `06` | `slide_06_anatomi_folder_android.html` | Visual Tree Explorer: Bedah Struktur Folder `android/`, `app/`, `res/`, `manifest` | [🌐 Buka Berkas](slide_06_anatomi_folder_android.html) |
| `07` | `slide_07_konfigurasi_build_gradle.html` | Konfigurasi `build.gradle`: `minSdk`, `targetSdk`, `compileSdk`, `versionCode` | [🌐 Buka Berkas](slide_07_konfigurasi_build_gradle.html) |
| `08` | `slide_08_anatomi_android_manifest.html` | Anatomi `AndroidManifest.xml`: Izin Hardware, Orientasi & Cleartext Traffic | [🌐 Buka Berkas](slide_08_anatomi_android_manifest.html) |
| `09` | `slide_09_manajemen_runtime_permissions.html` | Pola Runtime Permissions: `checkPermissions()` & `requestPermissions()` | [🌐 Buka Berkas](slide_09_manajemen_runtime_permissions.html) |
| `10` | `slide_10_pengenalan_android_studio.html` | Peta Instrumen Android Studio: Toolbar, Gradle Sync, Target Device & Logcat | [🌐 Buka Berkas](slide_10_pengenalan_android_studio.html) |
| `11` | `slide_11_dilema_ram_emulator_vs_device.html` | Solusi RAM 4–8GB: Kalkulator Beban RAM Emulator (4GB) vs HP Fisik (50MB) | [🌐 Buka Berkas](slide_11_dilema_ram_emulator_vs_device.html) |
| `12` | `slide_12_panduan_usb_debugging_android.html`<br>📄 `slide_12_panduan_usb_debugging_android.md` | Simulator Interaktif Aktivasi Opsi Pengembang & USB Debugging Multi-Merk HP<br>*(Tersedia pula panduan dokumen teks lengkap)* | [🌐 Simulator Interaktif](slide_12_panduan_usb_debugging_android.html) • [📄 Panduan Markdown](slide_12_panduan_usb_debugging_android.md) |
| `13` | `slide_13_panduan_scrcpy_mirroring.html` | Mirroring Layar HP Tanpa Lag & Perekam Video Demo Tugas via `scrcpy` | [🌐 Buka Berkas](slide_13_panduan_scrcpy_mirroring.html) |
| `14` | `slide_14_chrome_remote_debugging_inspect.html` | Remote Debugging WebView Menggunakan `chrome://inspect` Desktop | [🌐 Buka Berkas](slide_14_chrome_remote_debugging_inspect.html) |
| `15` | `slide_15_keamanan_webview_dan_xss.html` | Keamanan Arsitektur Hybrid: Hardening WebView, Pencegahan XSS & Skema HTTPS | [🌐 Buka Berkas](slide_15_keamanan_webview_dan_xss.html) |
| `16` | `slide_16_troubleshooting_build_android.html`<br>📄 `slide_16_troubleshooting_build_android.md` | Konsol Diagnostik & Solusi 6 Eror Populer (JDK Mismatch, dist, AAPT2, Cleartext, OOM)<br>*(Tersedia pula cheatsheet teks lengkap)* | [🌐 Konsol Diagnostik](slide_16_troubleshooting_build_android.html) • [📄 Cheatsheet Markdown](slide_16_troubleshooting_build_android.md) |
| `17` | `slide_17_lab_quest_06_bridge_tester.html` | **🎯 MASTER SOLUSI LAB QUEST 06: Capacitor Bridge & Platform Inspector** | [🌐 Buka Berkas](slide_17_lab_quest_06_bridge_tester.html) |
| `18` | `slide_18_preview_sesi_07_api_storage.html` | **Jembatan Sesi 07: REST API, Offline Storage & Pembukaan TUGAS TUTORIAL 3** | [🌐 Buka Berkas](slide_18_preview_sesi_07_api_storage.html) |

---

## 🎯 Panduan Praktikum Mandiri Sesi 06

1. **Jawab Diskusi Sesi 06 Tuton:** Pelajari perbandingan mendalam konsep pada [`slide_02_komparasi_capacitor_vs_cordova.html`](slide_02_komparasi_capacitor_vs_cordova.html) untuk memahami mengapa industri modern memilih pendekatan *Source-First*.
2. **Koneksikan Smartphone Pribadi Anda:** Buka simulator [`slide_12_panduan_usb_debugging_android.html`](slide_12_panduan_usb_debugging_android.html) atau baca [`slide_12_panduan_usb_debugging_android.md`](slide_12_panduan_usb_debugging_android.md) untuk mengaktifkan USB Debugging di HP Anda agar laptop berspesifikasi RAM 4–8GB tetap dingin dan lancar.
3. **Uji Coba Master Solusi Lab Quest 06:** Buka [`slide_17_lab_quest_06_bridge_tester.html`](slide_17_lab_quest_06_bridge_tester.html) di Chrome untuk melihat bagaimana kode web memanggil fitur getar haptik dan menyalin teks ke clipboard perangkat.
4. **Jika Menemui Kendala Build:** Gunakan [`slide_16_troubleshooting_build_android.html`](slide_16_troubleshooting_build_android.html) untuk mendiagnosis masalah versi Java (JDK 17) atau keterbatasan memori Gradle.
5. **Bersiap untuk Tugas Tutorial 3:** Sesi 07 pekan depan akan membuka **Tugas Tutorial 3** dengan bobot evaluasi terbesar (20%). Pastikan lingkungan Android Studio dan USB Debugging Anda sudah terkonfigurasi dengan baik mulai hari ini!
