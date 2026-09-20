# 📱 NASKAH & SLIDE SESI 08: BUILD APK RELEASE & 50 BANK SOAL UAS
## Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak (STSI4303 / MSIM4401)
### Program Studi: S1 Sistem Informasi & S1 Informatika — Universitas Terbuka
### Dosen Pengampu: Anton Prafanto, S.Kom., M.T.
### Modul Acuan BMP: Modul 9 (Kompilasi, Distribusi & Pemeliharaan) & Review Komprehensif Modul 1 s.d. 9

---

## 🗺️ Gambaran Umum Sesi
Sesi kedelapan ini merupakan **puncak penutup perkuliahan (Grand Finale & Sesi Penutup Semester)** yang mengantarkan mahasiswa dari ranah kode pengembangan menuju produk perangkat lunak biner mandiri yang siap digunakan oleh masyarakat luas. Fokus utama sesi ini terbagi menjadi dua pilar esensial:
1. **Engineering & Deployment (Kompilasi Biner & Rilis Stand-alone)**:
   Mahasiswa mempelajari siklus rilis aplikasi mobile profesional, pembuatan sertifikat digital Keystore RSA 2048-bit via utilitas `keytool`, konfigurasi penandatanganan otomatis (`signingConfigs`) pada `android/app/build.gradle`, eksekusi kompilasi `./gradlew assembleRelease` untuk menghasilkan berkas `.apk` mandiri yang dapat dipasang (sideloading) tanpa PC dan tanpa ketergantungan pada Google Play Store, optimasi biner melalui minifikasi R8 / ProGuard (`minifyEnabled` dan `shrinkResources`), optimasi aset web (kompresi gambar WebP, tree shaking ES modules), audit keamanan pra-rilis (proteksi cleartext traffic HTTPS, sanitasi izin permission), alternatif distribusi Progressive Web App (PWA) via Service Worker Cache, serta pemahaman standar publikasi Google Play Console dan format modern Android App Bundle (`.aab`).
2. **Academic Mastery & Exam Preparation (50 Bank Soal Komprehensif UAS)**:
   Pembedahan menyeluruh kisi-kisi resmi Ujian Akhir Semester (UAS) STSI4303 / MSIM4401 yang mencakup 9 Modul Buku Materi Pokok (BMP) UT. Sesi ini menyajikan 50 butir soal pilihan ganda akademik berkualitas tinggi lengkap dengan kunci jawaban dan pembahasan pedagogis, serta ditutup dengan **Master Solusi Lab Quest 08** berupa Interactive APK Release Validator & 50-Question UAS Exam Engine berwaktu mundur 90 menit.

---

## 📊 Daftar 18 Slide Pembahasan & Berkas Kode Mandiri

### 📌 Slide 01: Orientasi Sesi 08: Rilis APK Stand-alone & Sukses UAS
* **Sub-CPMK:** Memahami alur kerja transformasi kode sumber web hybrid menjadi berkas biner mandiri dan kesiapan menghadapi UAS.
* **Narasi Dosen:**  
  *"Selamat berjumpa di garis akhir perkuliahan kita rekan-rekan mahasiswa FST Universitas Terbuka! Di Sesi 08 penutup ini, kita akan merayakan pencapaian besar: mengubah aplikasi yang telah kita bangun menjadi berkas installer mandiri (.apk) yang bisa Anda kirimkan lewat WhatsApp atau Google Drive dan langsung dipasang di smartphone keluarga, teman, atau calon pengguna tanpa perlu kabel data atau laptop. Selain itu, kita akan membedah tuntas 50 bank soal UAS agar Anda siap meraih nilai A mutlak!"*
* **Poin Kunci:**
  * Transformasi dari development mode ke production release binary.
  * Dua target utama sesi: Berkas APK siap edar dan kesiapan 100% UAS.
  * Penerapan filosofi zero-friction hingga rilis produksi.
* **Tautan Kode Mandiri:**  
  👉 [`slide_01_orientasi_sesi_08_final.html`](../contoh_kode_program/sesi_08_build_apk_uas/slide_01_orientasi_sesi_08_final.html)

---

### 📌 Slide 02: Siklus Rilis Aplikasi Mobile (Development to Maintenance)
* **Sub-CPMK:** Menganalisis 5 fase siklus hidup rilis aplikasi mobile dari alpha testing hingga pasca rilis.
* **Narasi Dosen:**  
  *"Membangun aplikasi mobile profesional tidak berhenti ketika kode selesai diketik. Ada siklus rilis yang ketat: Development (fase koding & debugging), Alpha/Internal Testing (pengujian fungsional fitur), Beta/Closed Testing (pengujian pada perangkat pengguna nyata), Production Release (distribusi biner terverifikasi), dan Post-Release Monitoring (pemantauan crash log dan update berkala). Memahami siklus ini membedakan seorang programmer amatir dengan software engineer profesional."*
* **Poin Kunci:**
  * 5 Fase Rilis: Dev -> Alpha -> Beta -> Prod -> Maintenance.
  * Versioning semantik: `versionCode` (integer Android) dan `versionName` (string semver x.y.z).
  * Manajemen rollback dan strategi update aplikasi.
* **Tautan Kode Mandiri:**  
  👉 [`slide_02_siklus_rilis_aplikasi_mobile.html`](../contoh_kode_program/sesi_08_build_apk_uas/slide_02_siklus_rilis_aplikasi_mobile.html)

---

### 📌 Slide 03: Pembuatan Digital Keystore via `keytool`
* **Sub-CPMK:** Membangun sertifikat kriptografi digital mandiri menggunakan utilitas standar JDK `keytool`.
* **Narasi Dosen:**  
  *"Sistem operasi Android memiliki aturan keamanan mutlak: tidak ada berkas APK yang boleh dipasang tanpa tanda tangan digital. Sertifikat ini dibungkus di dalam berkas Keystore (.jks atau .keystore). Kita membuatnya menggunakan tool bawaan Java SDK yaitu keytool dengan algoritma RSA 2048-bit dan validitas 10.000 hari (25+ tahun). Ingat pesan saya: simpan berkas ini dan password-nya baik-baik! Jika Anda kehilangan keystore, Anda tidak akan pernah bisa memperbarui aplikasi Anda di ponsel pengguna!"*
* **Poin Kunci:**
  * Perintah: `keytool -genkeypair -v -keystore ut-release.keystore -alias utkey -keyalg RSA -keysize 2048 -validity 10000`.
  * Keystore bertindak sebagai KTP digital pengembang aplikasi.
  * Perlindungan kunci: Jangan pernah commit keystore ke repositori publik Git!
* **Tautan Kode Mandiri:**  
  👉 [`slide_03_pembuatan_keystore_digital.html`](../contoh_kode_program/sesi_08_build_apk_uas/slide_03_pembuatan_keystore_digital.html)

---

### 📌 Slide 04: Konfigurasi Otomasi Signing pada `build.gradle`
* **Sub-CPMK:** Mengonfigurasi penandatanganan biner otomatis pada skrip Gradle Android Studio.
* **Narasi Dosen:**  
  *"Menandatangani APK secara manual setiap kali build sangat memakan waktu. Melalui berkas `android/app/build.gradle`, kita dapat mengonfigurasi blok `signingConfigs` untuk tipe build `release`. Kita hubungkan file keystore, password, dan alias. Agar kredensial tetap aman, di lingkungan industri kita menyimpannya di file `gradle.properties` lokal atau variabel environment sistem, sehingga tidak terekspos ke publik."*
* **Poin Kunci:**
  * Blok `signingConfigs { release { storeFile ... } }`.
  * Menautkan ke `buildTypes { release { signingConfig signingConfigs.release } }`.
  * Praktik keamanan pemisahan password dari berkas konfigurasi publik.
* **Tautan Kode Mandiri:**  
  👉 [`slide_04_konfigurasi_signing_build_gradle.html`](../contoh_kode_program/sesi_08_build_apk_uas/slide_04_konfigurasi_signing_build_gradle.html)

---

### 📌 Slide 05: Kompilasi APK Release Stand-alone via Gradle Wrapper
* **Sub-CPMK:** Mengeksekusi perintah CLI Gradle Wrapper untuk menghasilkan berkas installer mandiri `.apk`.
* **Narasi Dosen:**  
  *"Saatnya melahirkan berkas biner mandiri! Masuk ke direktori `android/` melalui terminal, lalu jalankan perintah `./gradlew assembleRelease`. Gradle akan mengompilasi kode Java/Kotlin, memproses aset web Capacitor, menyusutkan resource, menandatangani biner dengan keystore, dan menyelaraskan struktur berkas (zipalign). Hasil akhirnya adalah `app-release.apk` berukuran ramping yang tersimpan di `android/app/build/outputs/apk/release/`!"*
* **Poin Kunci:**
  * Perintah: `./gradlew assembleRelease` (Linux/Mac/PowerShell) atau `gradlew.bat assembleRelease` (CMD).
  * Lokasi output: `android/app/build/outputs/apk/release/app-release.apk`.
  * Verifikasi tanda tangan dengan `apksigner verify --verbose app-release.apk`.
* **Tautan Kode Mandiri:**  
  👉 [`slide_05_kompilasi_apk_assemble_release.html`](../contoh_kode_program/sesi_08_build_apk_uas/slide_05_kompilasi_apk_assemble_release.html)

---

### 📌 Slide 06: Instalasi Mandiri (Sideloading) APK ke Smartphone Tanpa PC
* **Sub-CPMK:** Memahami mekanisme sideloading APK, perizinan sumber tidak dikenal, dan pengujian independen.
* **Narasi Dosen:**  
  *"Setelah berkas app-release.apk selesai dikompilasi, bagaimana mendistribusikannya ke pengguna? Cukup unggah berkas tersebut ke Google Drive atau kirim lewat pesan chat. Saat pengguna mengunduh dan membukanya di Android, sistem akan meminta izin 'Install Unknown Apps' (Pasang Aplikasi dari Sumber Tidak Dikenal). Begitu izin diaktifkan, aplikasi terpasang mandiri dengan ikon dan nama resmi Anda, dapat dibuka kapan saja tanpa kabel USB dan tanpa laptop!"*
* **Poin Kunci:**
  * Konsep Sideloading pada sistem operasi Android.
  * Dialog keamanan 'Unknown Sources' & 'Play Protect Unrecognized Developer'.
  * Kemandirian eksekusi aplikasi mobile 100% native runtime.
* **Tautan Kode Mandiri:**  
  👉 [`slide_06_instalasi_apk_mandiri_tanpa_pc.html`](../contoh_kode_program/sesi_08_build_apk_uas/slide_06_instalasi_apk_mandiri_tanpa_pc.html)

---

### 📌 Slide 07: Optimasi Biner: Minifikasi R8 & ProGuard Native
* **Sub-CPMK:** Menerapkan teknik kompresi kode native melalui compiler R8 dan konfigurasi ProGuard.
* **Narasi Dosen:**  
  *"Aplikasi rilis tidak boleh berukuran membengkak. Google menyematkan kompilator cerdas bernama R8 di Android Gradle Plugin. Dengan mengaktifkan `minifyEnabled true` dan `shrinkResources true`, R8 akan melakukan tree-shaking native: menghapus class Java pihak ketiga yang tidak pernah dipanggil, mengaburkan nama method menjadi huruf acak (obfuscation) agar sulit di-reverse engineering, dan membuang file XML/gambar yang tidak terpakai."*
* **Poin Kunci:**
  * Pengaturan: `minifyEnabled true` dan `shrinkResources true`.
  * Obfuscation: Melindungi kekayaan intelektual kode dari decompilation.
  * Berkas aturan pengecualian: `proguard-rules.pro` untuk library berbasis refleksi.
* **Tautan Kode Mandiri:**  
  👉 [`slide_07_optimasi_minifikasi_r8_proguard.html`](../contoh_kode_program/sesi_08_build_apk_uas/slide_07_optimasi_minifikasi_r8_proguard.html)

---

### 📌 Slide 08: Optimasi Web Assets: Kompresi WebP & Tree Shaking
* **Sub-CPMK:** Menganalisis teknik optimasi aset front-end untuk mempercepat kecepatan loading awal WebView.
* **Narasi Dosen:**  
  *"Di sisi web hybrid, kecepatan render pertama sangat bergantung pada bobot aset. Ganti seluruh gambar PNG/JPEG format lama menjadi format WebP modern yang menghemat ukuran hingga 70% tanpa penurunan kualitas kasat mata. Lakukan minifikasi file CSS dan JavaScript, manfaatkan dynamic import untuk lazy loading rute halaman, dan pastikan tidak ada font tebal yang tidak dipakai ikut dibungkus ke dalam aset WebView."*
* **Poin Kunci:**
  * Format gambar modern: WebP & SVG vector.
  * Dynamic import & lazy routing pada arsitektur Single Page Application.
  * Memangkas waktu First Contentful Paint (FCP) di bawah 1.5 detik.
* **Tautan Kode Mandiri:**  
  👉 [`slide_08_optimasi_aset_dan_tree_shaking.html`](../contoh_kode_program/sesi_08_build_apk_uas/slide_08_optimasi_aset_dan_tree_shaking.html)

---

### 📌 Slide 09: Audit Keamanan Aplikasi Pra-Rilis
* **Sub-CPMK:** Melakukan checklist audit keamanan komprehensif pada konfigurasi AndroidManifest dan jaringan.
* **Narasi Dosen:**  
  *"Sebelum melepas aplikasi ke publik, audit keamanan adalah harga mati! Periksa `AndroidManifest.xml`: pastikan atribut `android:debuggable` bernilai false atau diatur otomatis oleh Gradle. Nonaktifkan `usesCleartextTraffic` agar aplikasi menolak koneksi HTTP tanpa enkripsi (wajib HTTPS). Dan bersihkan seluruh deklarasi permission yang tidak digunakan agar aplikasi Anda tidak dicurigai sebagai malware oleh sistem Android."*
* **Poin Kunci:**
  * Larangan keras hardcoded API Keys rahasia di berkas client-side JavaScript.
  * Enforcing HTTPS TLS 1.3 via Network Security Config.
  * Sanitasi `<uses-permission>` seminimal mungkin sesuai prinsip Least Privilege.
* **Tautan Kode Mandiri:**  
  👉 [`slide_09_audit_keamanan_sebelum_rilis.html`](../contoh_kode_program/sesi_08_build_apk_uas/slide_09_audit_keamanan_sebelum_rilis.html)

---

### 📌 Slide 10: Distribusi Alternatif: Progressive Web App (PWA) Offline
* **Sub-CPMK:** Menerapkan Service Worker Cache API dan Web App Manifest untuk instalasi tanpa toko aplikasi.
* **Narasi Dosen:**  
  *"Bagaimana jika pengguna Anda menggunakan perangkat iOS atau memori penyimpanan ponselnya sangat terbatas? Solusinya adalah Progressive Web App (PWA). Cukup dengan menyediakan berkas `manifest.json` dan skrip `sw.js` (Service Worker), peramban Chrome akan memunculkan tombol 'Install App' ke layar utama ponsel. Berkas HTML/CSS/JS dicadangkan ke Cache API sehingga aplikasi tetap bisa dibuka meskipun koneksi internet mati total!"*
* **Poin Kunci:**
  * Anatomi `manifest.json`: `name`, `icons`, `start_url`, `display: standalone`.
  * Service Worker Lifecycle: `install`, `activate`, dan `fetch` intercept.
  * Distribusi instan tanpa biaya lisensi Google Play Store.
* **Tautan Kode Mandiri:**  
  👉 [`slide_10_pwa_service_worker_offline.html`](../contoh_kode_program/sesi_08_build_apk_uas/slide_10_pwa_service_worker_offline.html)

---

### 📌 Slide 11: Distribusi Google Play Console & Standar Android App Bundle (.aab)
* **Sub-CPMK:** Memahami ekosistem rilis Google Play Store, format AAB, dan alur track pengujian rilis.
* **Narasi Dosen:**  
  *"Jika Anda ingin mempublikasikan aplikasi ke Google Play Store resmi, Google mewajibkan format Android App Bundle (.aab) via perintah `./gradlew bundleRelease`. Play Store menggunakan Dynamic Delivery untuk memecah AAB menjadi paket kecil yang disesuaikan dengan arsitektur CPU dan resolusi layar masing-masing HP pengguna. Anda juga perlu melewati track pengujian: Internal Testing, Closed Testing (kebijakan 20 penguji selama 14 hari), sebelum disetujui masuk ke Production Track."*
* **Poin Kunci:**
  * Keunggulan AAB: Penghematan unduhan pengguna hingga 35%.
  * 4 Release Tracks: Internal, Closed (20 Testers / 14 Days), Open, dan Production.
  * Checklist Store Listing: Icon 512x512, Feature Graphic 1024x500, Privacy Policy HTTPS.
* **Tautan Kode Mandiri:**  
  👉 [`slide_11_distribusi_google_play_console.html`](../contoh_kode_program/sesi_08_build_apk_uas/slide_11_distribusi_google_play_console.html)

---

### 📌 Slide 12: Pemetaan Kisi-kisi Soal UAS: Modul 1 sampai Modul 9 BMP
* **Sub-CPMK:** Memetakan distribusi bobot kompetensi dan pola soal UAS mata kuliah STSI4303 / MSIM4401.
* **Narasi Dosen:**  
  *"Ujian Akhir Semester di Universitas Terbuka disusun dengan standar kurikulum yang sangat terukur mengacu pada Buku Materi Pokok (BMP). Modul 1–2 mencakup 20% (Arsitektur Hybrid & Vue 3), Modul 3–5 mencakup 32% (TypeScript, UI Navigation, Formulir, Regex, Dark Mode), Modul 6–8 mencakup 32% (Capacitor Bridge, Android Studio, REST API, Offline Storage, Hardware Plugins), dan Modul 9 mencakup 16% (Build APK Release & Troubleshooting). Mari kita pelajari strategi menjawabnya!"*
* **Poin Kunci:**
  * Pemetaan 9 Modul BMP UT secara komprehensif.
  * Trik eliminasi jawaban pengecoh (*distractors*).
  * Manajemen waktu: 50 butir soal dalam 90 menit (~1.8 menit/soal).
* **Tautan Kode Mandiri:**  
  👉 [`slide_12_kisi_kisi_uas_modul_1_sampai_9.html`](../contoh_kode_program/sesi_08_build_apk_uas/slide_12_kisi_kisi_uas_modul_1_sampai_9.html)

---

### 📌 Slide 13: Bank Soal UAS Bagian 1 (Soal 01 - 15): Arsitektur Hybrid & Vue.js 3
* **Sub-CPMK:** Menguji penguasaan konsep arsitektur hybrid, WebView, standar web modern, dan sistem reaktivitas Vue 3.
* **Narasi Dosen:**  
  *"Bagian pertama dari bank soal kita menguji pondasi: Mengapa hybrid menggunakan WebView? Bagaimana Vue 3 memanfaatkan Proxy API untuk mendeteksi perubahan state secara instan? Kapan kita menggunakan ref() versus reactive()? Dan mengapa direktif v-model begitu krusial pada interaksi formulir mobile? Ujilah jawaban Anda secara interaktif di lembar kerja ini!"*
* **Poin Kunci:**
  * 15 butir soal pilihan ganda akademik berkualitas tinggi.
  * Kunci jawaban instan dan pembahasan pedagogis per butir soal.
  * Mengukur pemahaman Modul 1 & Modul 2 BMP UT.
* **Tautan Kode Mandiri:**  
  👉 [`slide_13_bank_soal_uas_bagian_1.html`](../contoh_kode_program/sesi_08_build_apk_uas/slide_13_bank_soal_uas_bagian_1.html)

---

### 📌 Slide 14: Bank Soal UAS Bagian 2 (Soal 16 - 30): TypeScript, Ionic Grid & Dark Mode
* **Sub-CPMK:** Menguji pemahaman static typing TypeScript, sistem tata letak responsive grid, sanitasi Regex, dan tema gelap.
* **Narasi Dosen:**  
  *"Bagian kedua membawa kita ke level antarmuka dan keamanan data: Mengapa interface dan optional property (?) pada TypeScript mencegah runtime error? Bagaimana sistem 12-kolom Ionic Grid beradaptasi saat dibuka di ponsel versus tablet? Dan pola regex apa yang menjamin validasi 9 digit angka NIM mahasiswa UT? Kuasai bagian ini untuk mengamankan 30 poin ujian Anda!"*
* **Poin Kunci:**
  * 15 butir soal pilihan ganda akademik berbobot.
  * Analisis potongan kode TypeScript dan regex.
  * Mengukur pemahaman Modul 3, 4, dan 5 BMP UT.
* **Tautan Kode Mandiri:**  
  👉 [`slide_14_bank_soal_uas_bagian_2.html`](../contoh_kode_program/sesi_08_build_apk_uas/slide_14_bank_soal_uas_bagian_2.html)

---

### 📌 Slide 15: Bank Soal UAS Bagian 3 (Soal 31 - 45): Capacitor Bridge, API & Storage
* **Sub-CPMK:** Menguji kompetensi komunikasi native bridge, integrasi REST API, penyimpanan lokal, dan akses sensor.
* **Narasi Dosen:**  
  *"Di bagian ketiga, kita masuk ke jantung kapabilitas mobile: Bagaimana Capacitor menerjemahkan panggilan JavaScript ke Java native? Mengapa npx cap sync wajib dijalankan setelah build web? Mengapa try-catch-finally esensial pada pemanggilan fetch API? Dan mengapa Capacitor Preferences jauh lebih aman dari penghapusan cache OS dibanding localStorage biasa? Uji pemahaman Anda sekarang!"*
* **Poin Kunci:**
  * 15 butir soal mencakup Modul 6, 7, dan 8 BMP UT.
  * Pembahasan skenario offline-first, GPS Geolocation, dan Camera Permissions.
  * Pembedahan teknik debugging via Chrome Remote Inspect (`chrome://inspect`).
* **Tautan Kode Mandiri:**  
  👉 [`slide_15_bank_soal_uas_bagian_3.html`](../contoh_kode_program/sesi_08_build_apk_uas/slide_15_bank_soal_uas_bagian_3.html)

---

### 📌 Slide 16: Bank Soal UAS Bagian 4 (Soal 46 - 50): Keystore, Build & Kasus Produksi
* **Sub-CPMK:** Menganalisis skenario tingkat lanjut penandatanganan digital, kompilasi Gradle, dan pemecahan masalah (troubleshooting).
* **Narasi Dosen:**  
  *"Lima soal pamungkas ini menguji kematangan Anda sebagai engineer: Apa fungsi esensial sertifikat Keystore? Mengapa assembleRelease berbeda dengan bundleRelease? Dan studi kasus produksi klasik: Mengapa sebuah aplikasi yang berjalan mulus di Chrome desktop tiba-tiba mengalami layar putih (White Screen of Death) saat dipasang di ponsel Android versi lama? Pelajari pembahasannya agar Anda tidak terjebak!"*
* **Poin Kunci:**
  * 5 butir soal advance mencakup Modul 9 BMP UT.
  * Analisis troubleshooting White Screen of Death & kompatibilitas WebView.
  * Pemahaman mitigasi risiko kehilangan digital keystore.
* **Tautan Kode Mandiri:**  
  👉 [`slide_16_bank_soal_uas_bagian_4.html`](../contoh_kode_program/sesi_08_build_apk_uas/slide_16_bank_soal_uas_bagian_4.html)

---

### 📌 Slide 17: Master Solusi Lab Quest 08: APK Release Validator & 50 Soal UAS Engine
* **Sub-CPMK:** Mengoperasikan simulator audit kesiapan APK rilis dan menuntaskan simulasi penuh 50 soal UAS dengan batas waktu 90 menit.
* **Narasi Dosen:**  
  *"Inilah mahakarya penutup sesi praktikum kita: Master Solusi Lab Quest 08! Aplikasi ini memiliki dua instrumen interaktif: Tab 1 adalah APK Release Readiness Audit untuk memverifikasi keamanan proyek Anda sebelum rilis. Dan Tab 2 adalah Simulasi Penuh 50 Soal UAS berwaktu mundur 90 menit dengan matriks navigasi soal, penilaian skor instan 0–100, predikat kelulusan UT, serta kartu hasil evaluasi. Cobalah sekarang dan buktikan kesiapan Anda!"*
* **Poin Kunci:**
  * **Tab 1:** Automated APK Release Readiness Checker (Audit Keystore, Gradle, Manifest, dan Web Assets).
  * **Tab 2:** Full 50-Question Interactive Exam Simulator (Countdown timer 90 menit, matriks 50 soal, scoring A/B/C/D/E, dan review pedagogis).
  * Zero-friction: Berjalan 100% di browser Chrome tanpa instalasi server tambahan.
* **Tautan Kode Mandiri:**  
  👉 [`slide_17_lab_quest_08_apk_validator.html`](../contoh_kode_program/sesi_08_build_apk_uas/slide_17_lab_quest_08_apk_validator.html)

---

### 📌 Slide 18: Penutup Semester: Refleksi Perkuliahan & Pesan Dosen
* **Sub-CPMK:** Memaknai pencapaian kompetensi 8 sesi perkuliahan dan merencanakan pengembangan portofolio karir mobile profesional.
* **Narasi Dosen:**  
  *"Selamat rekan-rekan mahasiswa Universitas Terbuka dari Sabang sampai Merauke! Kalian telah menuntaskan seluruh rangkaian 8 sesi perkuliahan Pemrograman Berbasis Perangkat Bergerak (STSI4303 / MSIM4401). Kalian telah membuktikan bahwa dengan tekad kuat dan pendekatan zero-friction, mahasiswa UT mampu menguasai ekosistem industri modern: Ionic, Vue 3, TypeScript, Capacitor, hingga rilis mandiri APK. Teruslah berkarya, bangun portofolio GitHub yang membanggakan, dan bawalah manfaat bagi kemajuan bangsa! Sukses besar di UAS dan sampai jumpa di wisuda UT!"*
* **Poin Kunci:**
  * Rangkuman pencapaian 8 sesi dari nol hingga rilis produksi.
  * Roadmap pasca perkuliahan: Portofolio GitHub, eksplorasi fitur enterprise (Push Notifications, SQLite).
  * Pesan inspiratif dan penutupan resmi perkuliahan oleh Pak Anton Prafanto, S.Kom., M.T.
* **Tautan Kode Mandiri:**  
  👉 [`slide_18_penutup_semester_pesan_dosen.html`](../contoh_kode_program/sesi_08_build_apk_uas/slide_18_penutup_semester_pesan_dosen.html)

---

## 👨‍🏫 Profil Pengampu & Kontak Akademik
* **Dosen:** Anton Prafanto, S.Kom., M.T.
* **Program Studi:** Sistem Informasi / Informatika — Fakultas Sains dan Teknologi (FST)
* **Institusi:** Universitas Terbuka (UT)
* **Repositori Resmi:** [`https://github.com/antonprafanto/tuweb_mobile2025.git`](https://github.com/antonprafanto/tuweb_mobile2025.git)
