# 📱 CONTOH KODE PROGRAM SESI 06: CAPACITOR RUNTIME BRIDGE & ANDROID STUDIO
## Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak (STSI4303 / MSIM4401) — FST Universitas Terbuka

Selamat datang di direktori berkas kode mandiri **Sesi 06: Capacitor Runtime Bridge, Platform Android, Lingkungan Android Studio, & USB Debugging Ramah RAM** (Modul 6 & 7 BMP UT). Sesi ini memandu mahasiswa melompat dari peramban desktop menuju ekosistem perangkat native Android.

Seluruh 18 berkas kode di bawah ini mematuhi **The Zero-Friction Courseware Framework**, dapat dijalankan langsung di peramban Google Chrome tanpa build tools rumit, serta dirancang khusus ramah laptop mahasiswa UT (RAM 4–8GB friendly).

---

## 🗺️ Matriks 18 Berkas Mandiri Siap Eksekusi

| No. Berkas | Nama Berkas | Topik Bahasan & Fitur Interaktif | Tautan Langsung |
| :---: | :--- | :--- | :---: |
| `01` | `slide_01_orientasi_sesi_06_bridge.html` | Orientasi Sesi 06, Sub-CPMK 6 & Roadmap Transformasi ke Native Android | [Buka Berkas](slide_01_orientasi_sesi_06_bridge.html) |
| `02` | `slide_02_komparasi_capacitor_vs_cordova.html` | Komparasi Filosofi: Apache Cordova (Black-box) vs Capacitor (Source-first) | [Buka Berkas](slide_02_komparasi_capacitor_vs_cordova.html) |
| `03` | `slide_03_cara_kerja_runtime_bridge.html` | Mekanisme Jembatan: Pesan Dua Arah JS &harr; Java/Kotlin & Simulator RPC | [Buka Berkas](slide_03_cara_kerja_runtime_bridge.html) |
| `04` | `slide_04_konfigurasi_capacitor_config.html` | Generator & Validator `capacitor.config.ts`: Penegakan Reverse-Domain appId | [Buka Berkas](slide_04_konfigurasi_capacitor_config.html) |
| `05` | `slide_05_alur_perintah_cli_capacitor.html` | Alur 4 Perintah CLI: `build`, `add android`, `sync`, & `open android` | [Buka Berkas](slide_05_alur_perintah_cli_capacitor.html) |
| `06` | `slide_06_anatomi_folder_android.html` | Visual Tree Explorer: Bedah Struktur Folder `android/`, `app/`, `res/`, `manifest` | [Buka Berkas](slide_06_anatomi_folder_android.html) |
| `07` | `slide_07_konfigurasi_build_gradle.html` | Konfigurasi `build.gradle`: `minSdk`, `targetSdk`, `compileSdk`, `versionCode` | [Buka Berkas](slide_07_konfigurasi_build_gradle.html) |
| `08` | `slide_08_anatomi_android_manifest.html` | Anatomi `AndroidManifest.xml`: Izin Hardware, Orientasi & Cleartext Traffic | [Buka Berkas](slide_08_anatomi_android_manifest.html) |
| `09` | `slide_09_manajemen_runtime_permissions.html` | Pola Runtime Permissions: `checkPermissions()` & `requestPermissions()` | [Buka Berkas](slide_09_manajemen_runtime_permissions.html) |
| `10` | `slide_10_pengenalan_android_studio.html` | Peta Instrumen Android Studio: Toolbar, Gradle Sync, Target Device & Logcat | [Buka Berkas](slide_10_pengenalan_android_studio.html) |
| `11` | `slide_11_dilema_ram_emulator_vs_device.html` | Solusi RAM 4–8GB: Kalkulator Beban RAM Emulator (4GB) vs HP Fisik (50MB) | [Buka Berkas](slide_11_dilema_ram_emulator_vs_device.html) |
| `12` | `slide_12_panduan_usb_debugging_android.md` | Panduan Praktis Aktivasi Opsi Pengembang & USB Debugging Semua Merk HP | [Buka Berkas](slide_12_panduan_usb_debugging_android.md) |
| `13` | `slide_13_panduan_scrcpy_mirroring.html` | Mirroring Layar HP Tanpa Lag & Perekam Video Demo via `scrcpy` | [Buka Berkas](slide_13_panduan_scrcpy_mirroring.html) |
| `14` | `slide_14_chrome_remote_debugging_inspect.html` | Remote Debugging WebView Menggunakan `chrome://inspect` Desktop | [Buka Berkas](slide_14_chrome_remote_debugging_inspect.html) |
| `15` | `slide_15_keamanan_webview_dan_xss.html` | Keamanan Arsitektur Hybrid: Hardening WebView, Pencegahan XSS & Skema HTTPS | [Buka Berkas](slide_15_keamanan_webview_dan_xss.html) |
| `16` | `slide_16_troubleshooting_build_android.md` | Cheatsheet Error Populer: JDK Mismatch, AAPT2, ADB Unauthorized & OOM | [Buka Berkas](slide_16_troubleshooting_build_android.md) |
| `17` | `slide_17_lab_quest_06_bridge_tester.html` | **🎯 MASTER SOLUSI LAB QUEST 06: Capacitor Bridge & Platform Inspector** | [Buka Berkas](slide_17_lab_quest_06_bridge_tester.html) |
| `18` | `slide_18_preview_sesi_07_api_storage.html` | **Jembatan Sesi 07: REST API, Offline Storage & Pembukaan TUGAS TUTORIAL 3** | [Buka Berkas](slide_18_preview_sesi_07_api_storage.html) |

---

## 🎯 Panduan Praktikum Mandiri Sesi 06
1. Pelajari berkas komparasi konsep pada [`slide_02_komparasi_capacitor_vs_cordova.html`](slide_02_komparasi_capacitor_vs_cordova.html) untuk menjawab Diskusi 6 Tuton.
2. Ikuti panduan aktivasi USB Debugging pada [`slide_12_panduan_usb_debugging_android.md`](slide_12_panduan_usb_debugging_android.md) agar laptop RAM 4–8GB Anda tetap dingin dan lancar.
3. Jalankan dan uji coba **Master Solusi Lab Quest 06** pada [`slide_17_lab_quest_06_bridge_tester.html`](slide_17_lab_quest_06_bridge_tester.html) untuk memahami bagaimana pesan jembatan RPC dikirimkan ke Android native.
4. Siapkan laptop dan smartphone Anda untuk menyambut **Tugas Tutorial 3** yang akan dibuka pada Sesi 07!
