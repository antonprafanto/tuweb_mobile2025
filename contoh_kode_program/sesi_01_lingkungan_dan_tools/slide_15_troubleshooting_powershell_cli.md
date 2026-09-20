# 🚨 PROTOKOL PERTOLONGAN PERTAMA: MENGATASI ERROR POWERSHELL WINDOWS
## Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak (STSI4303) — Universitas Terbuka

### ❌ Gejala Error Paling Sering Dialami Mahasiswa:
Saat mahasiswa mengetik perintah `ionic -v` atau `npm` di terminal PowerShell VS Code, muncul teks merah mengerikan:
```text
ionic : File C:\Users\...\AppData\Roaming\npm\ionic.ps1 cannot be loaded because 
running scripts is disabled on this system.
For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ ionic -v
+ ~~~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

---

### 💡 Mengapa Error Ini Muncul?
Ini **BUKAN** karena laptop Anda rusak atau Anda salah menginstal! 
Secara bawaan (*default*), sistem operasi Windows memblokir eksekusi skrip otomatis di PowerShell untuk alasan keamanan dasar.

---

### 🛠️ Solusi 1 Langkah (Sangat Mudah & Aman):

#### Cara A: Ubah Izin Eksekusi Skrip untuk Akun Anda
1. Buka terminal di VS Code (atau buka aplikasi PowerShell biasa).
2. Salin dan tempelkan perintah berikut:
   ```powershell
   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
   ```
3. Tekan **Enter**. Jika muncul pertanyaan konfirmasi, ketik huruf **`Y`** lalu tekan **Enter**.
4. Coba ketik lagi:
   ```powershell
   ionic -v
   ```
5. **Selesai!** Pesan merah akan hilang dan versi Ionic akan tampil normal.

---

#### Cara B: Alternatif Tanpa Mengubah Pengaturan (Gunakan Git Bash)
Jika Anda tidak ingin mengubah pengaturan Windows:
1. Di VS Code, klik tanda panah kecil di sebelah kanan tombol `+` pada panel Terminal.
2. Pilih **Git Bash** atau **Command Prompt (cmd)** sebagai terminal default.
3. Di terminal Git Bash, seluruh perintah `ionic`, `npm`, dan `node` dapat berjalan langsung tanpa batasan kebijakan keamanan PowerShell!
