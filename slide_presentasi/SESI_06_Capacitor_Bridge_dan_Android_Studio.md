# 📱 NASKAH & SLIDE SESI 06: CAPACITOR RUNTIME BRIDGE & ANDROID STUDIO
## Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak (STSI4303 / MSIM4401)
### Program Studi: S1 Sistem Informasi & S1 Informatika — Universitas Terbuka
### Dosen Pengampu: Anton Prafanto, S.Kom., M.T.
### Modul Acuan BMP: Modul 6 & 7 (MSIM4401/STSI4303)

---

## 🗺️ Gambaran Umum Sesi
Sesi keenam ini merupakan **fase transformasi krusial** dalam mata kuliah Pemrograman Berbasis Perangkat Bergerak. Setelah lima sesi pertama kita berkutat di lingkungan peramban web desktop, di Sesi 06 ini kita melangkah menyeberangi jembatan menuju ekosistem perangkat native Android yang sesungguhnya. Pembahasan berfokus pada arsitektur runtime cross-platform Capacitor, mekanisme bi-directional message passing antara JavaScript WebView dan native Java/Kotlin, konfigurasi berkas sentral `capacitor.config.ts`, alur 4 perintah kunci Capacitor CLI (`build`, `add android`, `sync`, `open android`), bedah struktur folder proyek native `android/`, konfigurasi build tool Gradle (`variables.gradle` dan `build.gradle`), tata kelola izin sistem pada `AndroidManifest.xml` serta penanganan dinamis Runtime Permissions di TypeScript.

Mempertimbangkan kondisi riil mahasiswa Universitas Terbuka yang mayoritas memiliki laptop dengan spesifikasi RAM 4–8GB, sesi ini memberikan penekanan khusus pada **strategi pengujian ramah memori (RAM-efficient)** dengan mengalihkan pengujian dari Emulator Android Virtual Device (AVD) yang memakan RAM 4GB ke **ponsel fisik Android pribadi via USB Debugging** yang hanya memakan RAM komputer ~50MB. Sesi ini juga membekali mahasiswa dengan penguasaan tool mirroring ultra-ringan `scrcpy`, teknik remote debugging via `chrome://inspect`, prinsip keamanan aplikasi hybrid dari ancaman Cross-Site Scripting (XSS), panduan penanganan error kompilasi klasik (*troubleshooting cheatsheet*), serta master solusi **Lab Quest 06: Capacitor Bridge & Android Platform Inspector Dashboard**.

---

## 📊 Daftar 18 Slide Pembahasan & Berkas Kode Mandiri

### 📌 Slide 01: Orientasi Sesi 06: Capacitor Runtime Bridge & Platform Android
* **Sub-CPMK:** Memahami arsitektur transformasi aplikasi hybrid dari peramban web desktop menuju aplikasi native Android sejati.
* **Narasi Dosen:**  
  *"Selamat datang rekan-rekan mahasiswa FST Universitas Terbuka di Sesi 06! Dari Sesi 01 hingga 05, kita telah berhasil merancang antarmuka mobile modern menggunakan Vue 3, TypeScript, dan Ionic di dalam browser. Namun tujuan akhir kita adalah membuat aplikasi yang terinstal nyata di smartphone Android pengguna. Hari ini kita menyeberangi jembatan tersebut dengan teknologi Capacitor! Kita akan membedah bagaimana kode web kita dihubungkan dengan SDK Android asli tanpa mengorbankan performa laptop Anda. Mari kita mulai!"*
* **Poin Kunci:**
  * Transformasi dari Web Browser Sandbox ke Lingkungan Native Android.
  * 3 Lapisan Utama: Web Layer (Vue/Ionic), Bridge Layer (Capacitor Runtime), Native Layer (Android OS & Hardware).
  * 4 Target Pembelajaran Sesi 06 (Arsitektur Bridge, Struktur Folder Android, Manifest & Permissions, Pengujian Fisik USB).
* **Tautan Kode Mandiri:**  
  👉 [`slide_01_orientasi_sesi_06_bridge.html`](../contoh_kode_program/sesi_06_capacitor_android/slide_01_orientasi_sesi_06_bridge.html)

---

### 📌 Slide 02: Evolusi Runtime: Apache Cordova vs Capacitor
* **Sub-CPMK:** Membedakan secara kritis paradigma 'Black Box' Apache Cordova dengan paradigma modern 'Source-First' Capacitor.
* **Narasi Dosen:**  
  *"Banyak modul atau buku lama masih mengulas Apache Cordova. Namun industri software modern telah beralih penuh ke Capacitor. Mengapa? Cordova memperlakukan folder platform native seperti kotak hitam sekali pakai; mahasiswa dilarang menyentuh file Java karena akan tertimpa saat build ulang! Sebaliknya, Capacitor menganut filosofi 'Source-First': folder android/ adalah kode sumber asli milik Anda seutuhnya yang di-commit ke Git dan dapat dibuka langsung di Android Studio. Ini memberikan kendali penuh kepada pengembang."*
* **Poin Kunci:**
  * Cordova: Pendekatan legacy, folder `platforms/` di-ignore dari Git, konfigurasi XML raksasa yang rapuh.
  * Capacitor: Standar industri modern, folder `android/` di-commit ke Git, konfigurasi berbasis TypeScript murni.
  * Bahan rujukan utama untuk menjawab Forum Diskusi 6 LMS Tuton UT.
* **Tautan Kode Mandiri:**  
  👉 [`slide_02_komparasi_capacitor_vs_cordova.html`](../contoh_kode_program/sesi_06_capacitor_android/slide_02_komparasi_capacitor_vs_cordova.html)

---

### 📌 Slide 03: Cara Kerja Runtime Bridge: Pesan Dua Arah (Web &harr; Native)
* **Sub-CPMK:** Menganalisis alur komunikasi data asinkron dua arah (JSON-RPC) antara WebView dan Android OS.
* **Narasi Dosen:**  
  *"Bagaimana sebuah tombol di Vue bisa menggetarkan smartphone Anda? Chromium WebView diisolasi dalam sandbox ketat. Ketika Anda memanggil `await Haptics.vibrate()`, Capacitor mengemas permintaan tersebut menjadi paket JSON-RPC, mengirimkannya melintasi antarmuka JavaScriptInterface Android, thread latar belakang Java mengeksekusi layanan Vibrator Android, dan hasilnya dikirim balik ke WebView untuk me-resolve JavaScript Promise. Seluruh proses ini asinkron dan berjalan tanpa menghentikan kelancaran 60 FPS antarmuka pengguna!"*
* **Poin Kunci:**
  * Isolasi Sandbox Chromium WebView vs Hak Akses Root Sistem Operasi.
  * 4 Tahap Pipeline: JS Invocation, JSON Serialization, Java Native Execution, Callback Resolution.
  * Non-blocking Async Architecture: Menjamin UI thread bebas jank atau macet.
* **Tautan Kode Mandiri:**  
  👉 [`slide_03_cara_kerja_runtime_bridge.html`](../contoh_kode_program/sesi_06_capacitor_android/slide_03_cara_kerja_runtime_bridge.html)

---

### 📌 Slide 04: Konfigurasi Utama: `capacitor.config.ts`
* **Sub-CPMK:** Menyusun dan memvalidasi berkas konfigurasi sentral Capacitor dengan format Reverse-Domain appId.
* **Narasi Dosen:**  
  *"Setiap aplikasi Android di dunia wajib memiliki nomor identitas tunggal yang unik. Di Capacitor, identitas ini didefinisikan di berkas `capacitor.config.ts`. Parameter `appId` harus menggunakan format Reverse-Domain, seperti `id.ac.ut.mobileportal`. Jika Anda salah mengetikkan format, misalnya menggunakan spasi atau tanda hubung, proses registrasi di Google Play Store dan sistem package Android akan menolak aplikasi Anda secara langsung!"*
* **Poin Kunci:**
  * Properti Kunci: `appId`, `appName`, `webDir` (default: `dist`).
  * Aturan Baku `appId`: Huruf kecil, diawali huruf, dipisah titik minimal 2 segmen (cth: `id.ac.ut.namaapp`).
  * Konfigurasi opsional Server URL untuk mode Live Reload saat pengembangan cepat.
* **Tautan Kode Mandiri:**  
  👉 [`slide_04_konfigurasi_capacitor_config.html`](../contoh_kode_program/sesi_06_capacitor_android/slide_04_konfigurasi_capacitor_config.html)

---

### 📌 Slide 05: Alur 4 Perintah Kunci Capacitor CLI
* **Sub-CPMK:** Mengeksekusi workflow kompilasi dan sinkronisasi proyek web ke native secara teratur dan berurutan.
* **Narasi Dosen:**  
  *"Jangan menghafal perintah tanpa memahami urutan alurnya! Ada 4 perintah wajib: Pertama, `npm run build` untuk mengompilasi kode Vue menjadi aset web statis di folder `dist/`. Kedua, `npx cap add android` hanya sekali di awal untuk men-generate folder native. Ketiga, `npx cap sync` setiap kali Anda mengubah kode Vue agar file di `dist/` disalin ke folder assets Android. Terakhir, `npx cap open android` untuk meluncurkan Android Studio. Jangan pernah melakukan `cap sync` sebelum `npm run build`, itu kesalahan klasik yang sering membuat mahasiswa bingung mengapa perubahannya tidak muncul!"*
* **Poin Kunci:**
  * 1. `npm run build` $\rightarrow$ Menghasilkan bundel `dist/`.
  * 2. `npx cap add android` $\rightarrow$ Inisialisasi perancah native `android/`.
  * 3. `npx cap sync` $\rightarrow$ Menyalin aset web dan menyelaraskan plugin Gradle.
  * 4. `npx cap open android` $\rightarrow$ Membuka proyek di Android Studio secara otomatis.
* **Tautan Kode Mandiri:**  
  👉 [`slide_05_alur_perintah_cli_capacitor.html`](../contoh_kode_program/sesi_06_capacitor_android/slide_05_alur_perintah_cli_capacitor.html)

---

### 📌 Slide 06: Anatomi Struktur Folder `android/`
* **Sub-CPMK:** Menjelajahi struktur pohon folder native Android hasil kompilasi Capacitor.
* **Narasi Dosen:**  
  *"Saat Anda membuka folder `android/`, jangan panik melihat banyaknya berkas! Sebenarnya hanya ada beberapa titik penting yang perlu kita pahami. Folder `app/src/main/assets/public/` adalah tempat berkas HTML dan JS kita tinggal. Berkas `MainActivity.java` adalah pintu gerbang pembuka WebView. Folder `res/` adalah rumah bagi ikon aplikasi dan splash screen. Dan berkas `AndroidManifest.xml` adalah cetak biru resmi aplikasi kepada sistem operasi Android!"*
* **Poin Kunci:**
  * `build.gradle` (Root) vs `app/build.gradle` (Modul aplikasi).
  * `variables.gradle`: Tempat terpusat mengatur versi SDK Android.
  * `MainActivity.java`: Kelas turunan `BridgeActivity` Capacitor.
  * `res/mipmap` & `res/drawable`: Penempatan ikon aplikasi multi-resolusi.
* **Tautan Kode Mandiri:**  
  👉 [`slide_06_anatomi_folder_android.html`](../contoh_kode_program/sesi_06_capacitor_android/slide_06_anatomi_folder_android.html)

---

### 📌 Slide 07: Konfigurasi Android SDK pada `build.gradle`
* **Sub-CPMK:** Mengatur versi kompatibilitas Android SDK (`minSdk`, `targetSdk`, `compileSdk`) dan versioining rilis.
* **Narasi Dosen:**  
  *"Parameter SDK di Gradle menentukan seberapa luas aplikasi Anda dapat digunakan masyarakat. Nilai `minSdk` menetapkan versi Android terendah yang sanggup menjalankan aplikasi kita—Capacitor mensyaratkan minimal API 22 atau 24. Sementara `targetSdk` menyatakan versi Android terbaru yang sudah kita uji perilakunya secara optimal, misalnya API 34 untuk Android 14. Sedangkan `versionCode` adalah angka integer yang wajib naik setiap kali Anda mengunggah pembaruan ke Google Play Store!"*
* **Poin Kunci:**
  * `minSdkVersion`: Batas bawah OS yang didukung perangkat (misal API 24 = Android 7.0).
  * `targetSdkVersion`: Versi API yang dioptimalkan kinerjanya (API 34/35 standar modern).
  * `versionCode` (integer internal urut) vs `versionName` (string semantik untuk user, cth: "1.0.0").
* **Tautan Kode Mandiri:**  
  👉 [`slide_07_konfigurasi_build_gradle.html`](../contoh_kode_program/sesi_06_capacitor_android/slide_07_konfigurasi_build_gradle.html)

---

### 📌 Slide 08: Anatomi Berkas `AndroidManifest.xml`
* **Sub-CPMK:** Mendeklarasikan izin perangkat keras (hardware permissions) dan mengonfigurasi orientasi Activity.
* **Narasi Dosen:**  
  *"Berkas `AndroidManifest.xml` ibarat kartu identitas dan kontrak hukum aplikasi Anda di mata Android OS. Jika Anda lupa mendeklarasikan `<uses-permission android:name='android.permission.CAMERA' />` di berkas ini, maka sekeren apa pun kode Vue Anda, aplikasi akan langsung ditolak sistem saat mencoba membuka kamera ponsel! Di berkas ini pula kita mengonfigurasi orientasi layar dan pengaturan keamanan lalu lintas jaringan."*
* **Poin Kunci:**
  * Tag `<uses-permission>`: Deklarasi izin wajib (INTERNET, CAMERA, LOCATION, STORAGE).
  * Tag `<application>`: Konfigurasi ikon, label judul, dan status `usesCleartextTraffic`.
  * Tag `<activity>`: Titik masuk utama aplikasi dengan filter `MAIN` dan `LAUNCHER`.
* **Tautan Kode Mandiri:**  
  👉 [`slide_08_anatomi_android_manifest.html`](../contoh_kode_program/sesi_06_capacitor_android/slide_08_anatomi_android_manifest.html)

---

### 📌 Slide 09: Manajemen Hak Akses Runtime (Runtime Permissions)
* **Sub-CPMK:** Menerapkan pola perizinan dinamis asinkron pada runtime Android modern menggunakan TypeScript.
* **Narasi Dosen:**  
  *"Mulai era Android 6.0 Marshmallow hingga Android 14 sekarang, Google tidak lagi mengizinkan aplikasi langsung mengakses sensor berbahaya hanya karena sudah dicatat di manifest. Pengguna berhak menolak izin kapan saja! Oleh karena itu, kita wajib menerapkan pola perizinan runtime di TypeScript: panggil `checkPermissions()` terlebih dahulu. Jika statusnya belum granted, panggil dialog interaktif `requestPermissions()`. Jika pengguna menolak, sediakan pesan edukatif yang ramah dan jangan biarkan aplikasi Anda tiba-tiba crash!"*
* **Poin Kunci:**
  * Klasifikasi Izin: Normal (Install-time) vs Dangerous / Sensitif (Runtime-prompt).
  * Siklus Perizinan: `checkPermissions()` $\rightarrow$ `requestPermissions()` $\rightarrow$ Evaluasi Hasil (`granted`, `denied`).
  * Desain Umpan Balik Pengguna: Menghindari error silent fail saat izin ditolak.
* **Tautan Kode Mandiri:**  
  👉 [`slide_09_manajemen_runtime_permissions.html`](../contoh_kode_program/sesi_06_capacitor_android/slide_09_manajemen_runtime_permissions.html)

---

### 📌 Slide 10: Pengenalan Antarmuka Android Studio
* **Sub-CPMK:** Mengoperasikan elemen-elemen kunci antarmuka Android Studio untuk kompilasi dan debugging.
* **Narasi Dosen:**  
  *"Android Studio adalah IDE resmi buatan Google berbasis IntelliJ IDEA. Jangan merasa terintimidasi dengan puluhan tombol di dalamnya! Bagi pengembang aplikasi hybrid Ionic/Capacitor, instrumen yang paling sering Anda sentuh hanyalah empat: tombol Sync Gradle (ikon gajah) saat memperbarui plugin, Target Device Selector untuk memilih HP Anda, tombol Run (segitiga hijau) untuk kompilasi, dan Logcat di bilah bawah untuk melihat jejak diagnostik error. Pahami fungsi keempat instrumen ini, maka Anda sudah siap 100%!"*
* **Poin Kunci:**
  * Project View: Mode tampilan struktur "Android" yang ringkas dan bersih.
  * Sync Project with Gradle Files: Menyelaraskan pustaka dan dependensi Maven.
  * Logcat Window: Konsol pemantau jejak sistem Android OS dan filter tag `Capacitor`.
* **Tautan Kode Mandiri:**  
  👉 [`slide_10_pengenalan_android_studio.html`](../contoh_kode_program/sesi_06_capacitor_android/slide_10_pengenalan_android_studio.html)

---

### 📌 Slide 11: Solusi Ramah Laptop: Emulator AVD vs Ponsel Fisik
* **Sub-CPMK:** Menghitung perbandingan konsumsi beban RAM laptop antara emulator AVD dan ponsel fisik via USB.
* **Narasi Dosen:**  
  *"Banyak mahasiswa mengeluh laptopnya macet, kipasnya berisik, dan Windows-nya freeze saat belajar mobile. Mengapa? Karena mereka memaksakan menjalankan Android Virtual Device (AVD) di laptop RAM 4GB atau 8GB! Emulator AVD memakan alokasi RAM 3.5 hingga 4.5 GB sendiri. Solusi cerdas dan hemat dari kami adalah: gunakan smartphone Android fisik Anda! Dengan kabel data USB, daemon ADB di laptop hanya memakan RAM sekitar 50 megabyte. Laptop Anda tetap dingin, baterai awet, dan uji coba sensor hardware akurat 100%!"*
* **Poin Kunci:**
  * Kalkulasi Beban RAM: Windows OS (2GB) + IDE (1.8GB) + AVD (3.6GB) = 7.4GB (Batas kritis laptop 8GB!).
  * Mode USB Debugging: Beban ADB hanya ~50MB, eksekusi kode sepenuhnya ditangani prosesor smartphone.
  * Keuntungan Tambahan: Akses sensor nyata, multi-touch jari asli, dan bebas lag emulator.
* **Tautan Kode Mandiri:**  
  👉 [`slide_11_dilema_ram_emulator_vs_device.html`](../contoh_kode_program/sesi_06_capacitor_android/slide_11_dilema_ram_emulator_vs_device.html)

---

### 📌 Slide 12: Panduan Resmi Praktis: Aktivasi USB Debugging di Berbagai Merk HP
* **Sub-CPMK:** Mengaktifkan Opsi Pengembang, otorisasi kunci RSA ADB, dan USB Debugging di berbagai merek smartphone Android.
* **Narasi Dosen:**  
  *"Bagaimana cara menyambungkan HP ke laptop? Menu Developer Options sengaja disembunyikan pabrikan agar pengguna awam tidak salah menekan pengaturan. Masuklah ke Settings > About Phone, lalu ketuk 'Build Number' sebanyak 7 kali berturut-turut hingga muncul pesan 'You are now a developer!'. Buka Developer Options, aktifkan USB Debugging, dan saat kabel dicolok ke laptop, pastikan Anda mencentang 'Always allow from this computer'. Verifikasi di PowerShell dengan perintah `adb devices`. Jika statusnya sudah 'device', Anda sudah siap meluncur!"*
* **Poin Kunci:**
  * Cara aktivasi Opsi Pengembang (Ketuk 7x Build Number) pada Samsung, Xiaomi, Oppo, Vivo, Infinix, Pixel.
  * Catatan khusus Xiaomi/MIUI: Wajib mengaktifkan 'Install via USB' dan 'USB Debugging (Security settings)'.
  * Otorisasi Fingerprint Kunci Kriptografi RSA antara laptop dan ponsel.
* **Tautan Panduan:**  
  👉 [`slide_12_panduan_usb_debugging_android.md`](../contoh_kode_program/sesi_06_capacitor_android/slide_12_panduan_usb_debugging_android.md)

---

### 📌 Slide 13: Mirroring Layar Cepat & Hemat RAM dengan `scrcpy`
* **Sub-CPMK:** Mengoperasikan tool open-source `scrcpy` untuk menampilkan dan merekam layar ponsel di desktop.
* **Narasi Dosen:**  
  *"Saat mengerjakan tugas atau presentasi di depan dosen dan rekan mahasiswa, Anda tentu ingin layar ponsel Anda tampil jelas di monitor laptop. Jangan menggunakan aplikasi mirroring berbasis Wi-Fi yang penuh iklan dan memberatkan PC! Gunakan `scrcpy` buatan tim Genymobile. Berkas eksekusinya berbasis bahasa C yang sangat ringan, latensinya hampir nol (35-70ms), dan Anda bahkan bisa mengontrol HP menggunakan mouse dan keyboard laptop. Hebatnya lagi, Anda bisa merekam video demo tugas langsung menjadi file MP4 dengan perintah `scrcpy --record demo.mp4`!"*
* **Poin Kunci:**
  * Konsumsi RAM komputer < 70MB dengan framerate mulus 60 FPS.
  * Perintah praktis: `scrcpy --stay-awake -m 1024` (Optimal untuk laptop spesifikasi hemat).
  * Fitur rekaman otomatis video format MP4 untuk pengumpulan tugas tutorial UT.
* **Tautan Kode Mandiri:**  
  👉 [`slide_13_panduan_scrcpy_mirroring.html`](../contoh_kode_program/sesi_06_capacitor_android/slide_13_panduan_scrcpy_mirroring.html)

---

### 📌 Slide 14: Inspeksi WebView dengan `chrome://inspect`
* **Sub-CPMK:** Memanfaatkan Chrome Remote Debugging untuk menginspeksi DOM, konsol JavaScript, dan request jaringan di perangkat Android.
* **Narasi Dosen:**  
  *"Banyak mahasiswa mengira ketika aplikasi sudah masuk ke HP, kita tidak bisa lagi melakukan 'Inspect Element'. Itu keliru! Cukup buka Google Chrome di laptop Anda, ketik `chrome://inspect/#devices`, dan Anda akan melihat nama smartphone Anda beserta aplikasi Ionic yang sedang berjalan. Klik tombol 'inspect', dan jendela Chrome DevTools lengkap akan terbuka! Anda bisa mengubah warna CSS secara langsung di ponsel, memantau output console.log, hingga melihat paket data jaringan API kampus secara real-time!"*
* **Poin Kunci:**
  * URL Akses Browser: `chrome://inspect/#devices`.
  * Panel Elements: Memeriksa hierarki tag komponen Ionic di layar HP.
  * Panel Console & Network: Debugging pesan error JS dan pemantauan latensi REST API.
* **Tautan Kode Mandiri:**  
  👉 [`slide_14_chrome_remote_debugging_inspect.html`](../contoh_kode_program/sesi_06_capacitor_android/slide_14_chrome_remote_debugging_inspect.html)

---

### 📌 Slide 15: Keamanan WebView & Bahaya Cross-Site Scripting (XSS)
* **Sub-CPMK:** Menerapkan prinsip pengamanan aplikasi mobile hybrid dari serangan XSS dan pembatasan cleartext traffic.
* **Narasi Dosen:**  
  *"Di website biasa, serangan XSS mungkin hanya mencuri token sesi browser. Tetapi di aplikasi hybrid dengan Capacitor Bridge, celah XSS berakibat sangat fatal! Skrip berbahaya yang disuntikkan penyerang dapat memanggil fungsi bridge native untuk membaca kontak, mencuri file lokal di memori HP, atau melacak posisi GPS mahasiswa! Karena itu, patuhi prinsip Defense-in-Depth: jangan pernah gunakan `v-html` untuk data pengguna, terapkan Content Security Policy yang ketat, dan matikan Cleartext Traffic di build produksi agar seluruh transmisi data terenkripsi HTTPS!"*
* **Poin Kunci:**
  * Risiko Spesifik Mobile Hybrid: XSS dapat melompat melintasi bridge ke API sistem native.
  * Prinsip Sanitasi Input: Mengutamakan interpolasi aman Vue `{{ text }}` dibanding `v-html`.
  * Penegakan HTTPS & Pembatasan skema lokal via origin `https://localhost`.
* **Tautan Kode Mandiri:**  
  👉 [`slide_15_keamanan_webview_dan_xss.html`](../contoh_kode_program/sesi_06_capacitor_android/slide_15_keamanan_webview_dan_xss.html)

---

### 📌 Slide 16: Cheatsheet Diagnostik & Troubleshooting Error Android Studio & Gradle
* **Sub-CPMK:** Mengidentifikasi dan memecahkan 6 galat (errors) umum dalam proses sinkronisasi dan kompilasi Gradle.
* **Narasi Dosen:**  
  *"Dalam praktikum mobile, mengalami error kompilasi adalah hal yang 100% normal. Kami telah merangkum 6 error paling populer yang sering dialami mahasiswa UT: mulai dari Java Version Mismatch yang dapat diselesaikan dengan menyetel Gradle JDK ke jbr-17, lupa menjalankan `npm run build` sebelum `npx cap sync`, status ADB unauthorized, galat nama gambar AAPT2 yang memuat huruf besar/spasi, error Cleartext HTTP, hingga masalah Out-Of-Memory Gradle. Simpan dokumen cheatsheet ini sebagai panduan wajib selama praktikum!"*
* **Poin Kunci:**
  * Solusi JDK 17 JetBrains Runtime vs JDK 21.
  * Urutan perbaikan aset `dist/` dan sinkronisasi Capacitor.
  * Standar penamaan resource Android (`my_image_ut.png`).
  * Konfigurasi batas heap JVM Gradle di `gradle.properties` (`-Xmx1024m`).
* **Tautan Panduan:**  
  👉 [`slide_16_troubleshooting_build_android.md`](../contoh_kode_program/sesi_06_capacitor_android/slide_16_troubleshooting_build_android.md)

---

### 📌 Slide 17: Master Solusi Lab Quest 06: Capacitor Bridge & Android Platform Inspector
* **Sub-CPMK:** Membangun dashboard pemeriksa status jembatan runtime Capacitor dan pengujian plugin terpadu.
* **Narasi Dosen:**  
  *"Sebagai pembuktian kemampuan praktikum Sesi 06, mari kita bedah Master Solusi Lab Quest 06. Kita membangun sebuah aplikasi cerdas 'Capacitor Bridge & Platform Inspector'. Aplikasi ini mampu mendeteksi apakah dirinya berjalan di peramban web biasa atau di dalam native Android container, menampilkan resolusi layar dan rasio piksel, memantau status daya baterai dan konektivitas jaringan, serta menyediakan panel uji interaktif untuk memicu getaran Haptics dan clipboard lengkap dengan jendela log paket JSON-RPC secara real-time. Ini adalah tolok ukur nilai sempurna 100!"*
* **Poin Kunci:**
  * Deteksi Dinamis Ekosistem Runtime (`isNativePlatform()` vs Web fallback).
  * Pengujian Asinkron Plugin Native: Haptics, Clipboard, Network, Battery.
  * Pencatatan Paket JSON-RPC Wire secara interaktif.
  * Rubrik Penilaian Resmi Lab Quest 06 (Skor 0–100).
* **Tautan Kode Mandiri:**  
  👉 [`slide_17_lab_quest_06_bridge_tester.html`](../contoh_kode_program/sesi_06_capacitor_android/slide_17_lab_quest_06_bridge_tester.html)

---

### 📌 Slide 18: Jembatan Menuju Sesi 07: REST API, Offline Storage & TUGAS TUTORIAL 3
* **Sub-CPMK:** Mengantisipasi integrasi data cloud eksternal, penyimpanan offline lokal, dan pembukaan tagihan Tugas Tutorial 3.
* **Narasi Dosen:**  
  *"Selamat atas keberhasilan rekan-rekan menyelesaikan Sesi 06 dengan gemilang! Kini jembatan native Android Anda telah berdiri kokoh. Di Sesi 07 pekan depan, kita akan memasuki puncak materi teknis: menghubungkan aplikasi mobile dengan server cloud Universitas Terbuka via Asynchronous REST API, menerapkan strategi penyimpanan offline-first agar aplikasi tetap bisa dipakai saat tidak ada internet, serta mengakses sensor kamera asli. Dan yang paling penting: TUGAS TUTORIAL 3 (tugas praktikum penutup sebelum UAS) akan resmi dibuka! Tetap semangat belajar dan sampai jumpa di Sesi 07!"*
* **Poin Kunci:**
  * 3 Pilar Utama Sesi 07: REST API Cloud Backend, Offline-First Storage Persistence, Native Hardware Sensors.
  * Pengumuman Tagihan Akbar: **TUGAS TUTORIAL 3 (TUTON 3)** berbobot evaluasi tinggi.
  * Pesan motivasi akademik Dosen untuk persiapan praktikum lanjutan.
* **Tautan Kode Mandiri:**  
  👉 [`slide_18_preview_sesi_07_api_storage.html`](../contoh_kode_program/sesi_06_capacitor_android/slide_18_preview_sesi_07_api_storage.html)
