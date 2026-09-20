# Cheatsheet Diagnostik & Troubleshooting Error Android Studio & Gradle
**Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak (STSI4303 / MSIM4401 - 3 SKS)**  
**Dosen Pengampu: Pak Anton Prafanto, S.Kom., M.T.**

---

## 🚨 Daftar Masalah Kompilasi Klasik Mahasiswa & Solusi Solutifnya

Berikut adalah rangkuman masalah yang paling sering dihadapi mahasiswa saat mengompilasi aplikasi hybrid Ionic & Capacitor ke Android Studio, beserta instruksi perbaikan langkah-demi-langkah:

---

### 1. ☕ Masalah Versi Java (JDK Mismatch)
- **Pesan Error di Android Studio:**
  ```text
  Unsupported class file major version 65
  -- ATAU --
  Gradle sync failed: Incompatible Java version
  ```
- **Penyebab:** Versi Java Development Kit (JDK) yang terpasang di laptop terlalu baru (JDK 21+) atau terlalu tua (JDK 8/11) untuk versi Gradle bawaan proyek.
- **Langkah Solusi:**
  1. Di Android Studio, buka menu **File** $\rightarrow$ **Settings** (di macOS: *Android Studio* $\rightarrow$ *Settings*).
  2. Pilih menu **Build, Execution, Deployment** $\rightarrow$ **Build Tools** $\rightarrow$ **Gradle**.
  3. Pada opsi **Gradle JDK**, klik dropdown dan pilih **jbr-17 (JetBrains Runtime version 17)** yang sudah terpasang sepaket dengan Android Studio.
  4. Klik **Apply** $\rightarrow$ **OK**, lalu klik tombol **Sync Project with Gradle Files** (ikon gajah).

---

### 2. 📂 Aset Web Hilang (`dist` Not Found)
- **Pesan Error di Terminal:**
  ```text
  [error] Cannot copy web assets: Directory 'dist' does not exist.
  ```
- **Penyebab:** Anda langsung mengeksekusi `npx cap sync` sebelum menghasilkan bundel web aplikasi!
- **Langkah Solusi:**
  ```bash
  # 1. Jalankan proses kompilasi bundel Vue terlebih dahulu:
  npm run build

  # 2. Setelah folder dist/ terisi, jalankan sinkronisasi Capacitor:
  npx cap sync
  ```

---

### 3. 🔑 Status Perangkat `unauthorized` di ADB
- **Pesan Error di Terminal:**
  ```text
  List of devices attached
  RFCW10J6KLP    unauthorized
  ```
- **Penyebab:** Laptop belum mendapat otorisasi sertifikat RSA dari pemilik smartphone.
- **Langkah Solusi:**
  1. Buka kunci layar smartphone Anda.
  2. Buka **Settings** $\rightarrow$ **Developer Options**.
  3. Gulir ke bawah, ketuk **Revoke USB debugging authorizations (Cabut otorisasi debugging USB)** $\rightarrow$ Pilih OK.
  4. Cabut kabel USB dari laptop, tunggu 3 detik, lalu pasang kembali.
  5. Saat dialog *"Allow USB debugging?"* muncul di layar ponsel, centang kotak **Always allow from this computer**, lalu klik **Allow**.

---

### 4. 🔤 Penamaan Berkas Resource Tidak Sah (AAPT2 Error)
- **Pesan Error di Gradle Console:**
  ```text
  Execution failed for task ':app:processDebugResources'.
  > 'My Logo.png' is not a valid resource name.
  ```
- **Penyebab:** Sistem resource Android OS (AAPT2) melarang keras nama file yang mengandung huruf kapital, spasi, atau tanda hubung (-).
- **Aturan Baku Android:**
  - ❌ `My Logo UT.png` (Salah)
  - ❌ `logo-ut.png` (Salah)
  - ✅ `my_logo_ut.png` (Benar: hanya huruf kecil, angka, dan garis bawah/underscore).
- **Langkah Solusi:** Ganti nama file gambar di dalam folder `android/app/src/main/res/drawable/` menjadi huruf kecil murni dengan underscore, lalu build ulang.

---

### 5. 🌐 Lalu Lintas HTTP Lokal Ditolak (Cleartext HTTP Not Permitted)
- **Pesan Error di Logcat / DevTools:**
  ```text
  net::ERR_CLEARTEXT_NOT_PERMITTED
  ```
- **Penyebab:** Sejak Android 9.0 (API 28), OS memblokir seluruh koneksi HTTP biasa tanpa sertifikat SSL (HTTPS) demi keamanan.
- **Langkah Solusi:**
  Buka berkas `android/app/src/main/AndroidManifest.xml`, cari tag `<application>`, lalu tambahkan atribut:
  ```xml
  <application
      android:usesCleartextTraffic="true"
      ... >
  ```

---

### 6. 🧠 Out of Memory (OOM) pada Laptop RAM 4–8GB
- **Pesan Error di Terminal:**
  ```text
  Gradle build daemon disappeared unexpectedly (it may have been killed or may have crashed)
  ```
- **Penyebab:** Daemon Gradle meminta alokasi RAM lebih besar daripada ketersediaan sisa RAM fisik laptop.
- **Langkah Solusi:**
  Buka berkas `android/gradle.properties`, lalu batasi alokasi heap JVM:
  ```properties
  # Ubah alokasi dari 2048m ke 1024m yang aman untuk RAM 4-8GB:
  org.gradle.jvmargs=-Xmx1024m -XX:MaxMetaspaceSize=512m
  ```
