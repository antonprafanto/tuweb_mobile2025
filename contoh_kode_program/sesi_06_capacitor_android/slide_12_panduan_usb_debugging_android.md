# Panduan Resmi Praktis: Aktivasi USB Debugging di Berbagai Merk HP Android
**Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak (STSI4303 / MSIM4401 - 3 SKS)**  
**Dosen Pengampu: Pak Anton Prafanto, S.Kom., M.T.**

---

## 🎯 Mengapa Menggunakan Smartphone Fisik Pribadi?
Mahasiswa Universitas Terbuka (UT) sangat dianjurkan menghubungkan ponsel fisik Android via kabel USB daripada menjalankan Emulator Android Virtual Device (AVD).
1. **Menghemat Beban RAM:** Konsumsi RAM laptop turun dari ~4.0 GB (emulator) menjadi hanya ~50 MB (daemon ADB).
2. **Akurasi 100% Hardware:** Uji coba kamera, GPS, getaran haptik, dan sentuhan layar berjalan langsung di perangkat nyata.
3. **Bebas Freeze & Lag:** Laptop berspesifikasi RAM 4–8GB dapat bekerja dengan dingin dan lancar.

---

## 🛠️ Langkah 1: Membuka Menu "Developer Options" (Opsi Pengembang)
Secara bawaan pabrik, menu rahasia ini disembunyikan oleh sistem Android demi keamanan pengguna awam. Cara mengaktifkannya:

1. Buka menu **Settings (Pengaturan)** di smartphone Anda.
2. Gulir ke menu paling bawah, pilih **About Phone (Tentang Ponsel)**.
3. Temukan baris **Build Number (Nomor Bentukan)**:
   - **Samsung:** *About phone* $\rightarrow$ *Software information* $\rightarrow$ *Build number*.
   - **Xiaomi / Redmi / POCO:** *About phone* $\rightarrow$ Ketuk pada **OS Version / MIUI version**.
   - **OPPO / Realme:** *About phone* $\rightarrow$ *Version* $\rightarrow$ *Build number*.
   - **Vivo / iQOO:** *About phone* $\rightarrow$ *Software version*.
   - **Infinix / Tecno:** *My phone* $\rightarrow$ *Build number*.
   - **Google Pixel / Android Murni:** *Settings* $\rightarrow$ *About phone* $\rightarrow$ *Build number*.
4. **Ketuk 7 KALI secara cepat dan berturut-turut** pada baris tersebut.
5. Masukkan PIN / Pola kunci layar jika diminta.
6. Notifikasi popup akan muncul: *"You are now a developer!"* (Anda sekarang adalah seorang pengembang!).

---

## 🔌 Langkah 2: Mengaktifkan USB Debugging
1. Kembali ke menu utama **Settings**.
2. Masuk ke submenu Opsi Pengembang:
   - Di Android murni: Masuk ke **System** $\rightarrow$ **Developer Options**.
   - Di Xiaomi/Oppo/Realme: Masuk ke **Additional Settings (Setelan Tambahan)** $\rightarrow$ **Developer Options**.
3. Aktifkan sakelar **Developer Options** menjadi *ON*.
4. Gulir ke bawah hingga bagian *Debugging*, lalu aktifkan sakelar **USB Debugging** (Debugging USB).

> [!IMPORTANT]
> **Khusus Pengguna Xiaomi / Redmi / POCO (MIUI / HyperOS):**  
> Sistem MIUI memiliki lapisan keamanan ganda. Anda WAJIB mengaktifkan 3 sakelar sekaligus:  
> 1. **USB Debugging** = *ON*  
> 2. **Install via USB** = *ON*  
> 3. **USB Debugging (Security settings)** = *ON* (Memerlukan login Mi Account & kartu SIM aktif).

---

## 💻 Langkah 3: Menghubungkan Ponsel ke Laptop & Verifikasi RSA Key
1. Hubungkan ponsel Android ke port USB laptop menggunakan kabel data berkualitas baik (bukan kabel pengisi daya murahan yang tidak mendukung transfer data).
2. Di layar HP, ubah mode koneksi dari *Charging only* menjadi **File Transfer (MTP)**.
3. Tunggu 3–5 detik. Di layar ponsel akan muncul dialog otorisasi kunci keamanan:
   > **Allow USB debugging?**  
   > *The computer's RSA key fingerprint is: XX:XX:XX:XX...*  
   > ☑️ **Always allow from this computer** (Centang opsi ini!)  
   > Pilih **Allow (Izinkan)**.
4. Buka PowerShell / Terminal di laptop Anda, lalu jalankan perintah:
   ```bash
   adb devices
   ```
5. Perhatikan respon yang muncul di konsol:
   - ✅ **SUKSES:**
     ```text
     List of devices attached
     RFCW10J6KLP    device
     ```
     *(Status `device` menandakan Android Studio dan Capacitor sudah siap 100% meluncurkan aplikasi ke HP Anda).*
   - ⚠️ **BELUM DI-IZINKAN:**
     ```text
     RFCW10J6KLP    unauthorized
     ```
     *(Solusi: Lepas kabel, colok kembali, lalu tekan "Allow" pada dialog pop-up di layar smartphone).*
   - ❌ **TIDAK TERDETEKSI (KOSONG):**
     *(Solusi: Ganti kabel data, pindah port USB laptop, atau unduh OEM USB Driver resmi dari situs produsen smartphone Anda).*

---

## 🚀 Langkah 4: Menjalankan Aplikasi dari Capacitor
Setelah terhubung dengan status `device`, Anda dapat langsung menjalankan aplikasi tanpa perlu membuka Android Studio:
```bash
npx cap run android --target <DEVICE_ID>
```
Atau cukup buka Android Studio:
```bash
npx cap open android
```
Pilih nama smartphone Anda di pojok kanan atas toolbar Android Studio, lalu tekan tombol **Run (▶)**!
