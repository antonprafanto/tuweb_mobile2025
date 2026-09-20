# 📱 PANDUAN PRAKTIS USB DEBUGGING & SCRCPY (PENGUJIAN HEMAT RAM)
## Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak (STSI4303) — Universitas Terbuka

> [!TIP]
> **Mengapa metode ini sangat disukai mahasiswa UT?**
> Menjalankan emulator Android Studio bawaan memakan RAM **3GB s.d. 5GB** dan sering membuat laptop hang. Menggunakan **HP fisik + scrcpy** hanya memakan RAM **< 70MB**, aplikasi berjalan 100% mulus (*60 FPS*), dan tidak membuat laptop panas!

---

### 🛠️ Langkah 1: Mengaktifkan Opsi Pengembang (*Developer Options*) di HP Android
1. Buka menu **Pengaturan (Settings)** di smartphone Android Anda.
2. Gulir ke bawah dan pilih **Tentang Ponsel (About Phone)**.
3. Cari tulisan **Nomor Bentukan (Build Number)**.
4. **Ketuk sebanyak 7 kali berturut-turut** pada *Build Number* tersebut sampai muncul notifikasi: *"Anda sekarang adalah seorang pengembang!"*.

---

### 🔌 Langkah 2: Mengaktifkan USB Debugging
1. Kembali ke menu utama **Pengaturan**.
2. Masuk ke menu **Sistem > Opsi Pengembang (Developer Options)**.
3. Cari tombol sakelar **Proses Debug USB (USB Debugging)** lalu aktifkan (*ON*).
4. Sambungkan HP ke laptop Anda menggunakan kabel data USB.
5. Pada layar HP Anda akan muncul jendela sembul (*popup*): *"Izinkan debug USB dari komputer ini?"*.
6. Centang kotak *"Selalu izinkan dari komputer ini"* lalu klik **OK**.

---

### 🖥️ Langkah 3: Menjalankan Screen Mirroring dengan scrcpy
1. Unduh aplikasi gratis [scrcpy](https://github.com/Genymobile/scrcpy/releases) untuk Windows (pilih berkas `.zip`).
2. Ekstrak berkas zip tersebut ke sebuah folder di laptop Anda (misal: `C:\tools\scrcpy`).
3. Pastikan HP tersambung kabel data USB, lalu klik dua kali berkas **`scrcpy.exe`**.
4. Seketika, layar ponsel Anda akan muncul di layar laptop!
5. Sekarang, Anda dapat menguji aplikasi mobile Anda, merekam video presentasi tugas, dan mendemokan aplikasi dengan lancar.
