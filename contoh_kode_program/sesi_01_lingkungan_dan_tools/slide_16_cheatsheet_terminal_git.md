# 📜 CHEATSHEET PERINTAH SAKTI TERMINAL & GIT (EDISI MAHASISWA UT)
## Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak (STSI4303) — Universitas Terbuka

Berikut adalah rangkuman perintah yang paling sering digunakan selama perkuliahan STSI4303:

---

### 🖥️ 1. Navigasi Folder di Terminal (Windows & Mac/Linux)

| Perintah | Fungsi Praktis | Contoh Pemakaian |
| :--- | :--- | :--- |
| `cd <nama-folder>` | Masuk ke dalam suatu folder (*Change Directory*) | `cd contoh_kode_program` |
| `cd ..` | Naik / kembali satu tingkat ke folder sebelumnya | `cd ..` |
| `dir` (Windows) / `ls` (Mac/Linux) | Melihat daftar seluruh berkas di folder aktif | `dir` atau `ls -la` |
| `cls` (Windows) / `clear` (Mac/Linux) | Membersihkan layar terminal yang penuh tulisan | `cls` |
| `Ctrl + C` | Menghentikan paksa server yang sedang berjalan | Digunakan untuk menyetop `ionic serve` |

---

### 🐙 2. Perintah Git untuk Pengumpulan Tugas Kuliah

| Perintah | Fungsi Praktis | Kapan Digunakan? |
| :--- | :--- | :--- |
| `git clone <url-repo>` | Mengunduh seluruh materi repositori kuliah ke komputer | Di awal semester |
| `git status` | Memeriksa berkas apa saja yang baru Anda ubah / tambahkan | Sebelum mengumpulkan tugas |
| `git add .` | Menandai seluruh perubahan agar siap disimpan | Setelah menyelesaikan kodingan |
| `git commit -m "pesan"` | Menyimpan rekaman riwayat perubahan dengan catatan jelas | Contoh: `git commit -m "feat: selesaikan tugas 1"` |
| `git push origin main` | Mengirimkan kode dari laptop Anda ke GitHub online | Agar link repositori tugas bisa dinilai tutor |

---

### 💡 3. Tips Cepat Mengetik Perintah (*Keyboard Ninja*)
1. **Gunakan Tombol TAB (Auto-Complete):** Ketik 2–3 huruf awal nama folder/berkas lalu tekan tombol `TAB`. Terminal akan otomatis melengkapi nama berkas tanpa Anda perlu mengetik panjang lebar!
2. **Gunakan Panah Atas (↑):** Tekan panah ke atas di keyboard untuk memanggil kembali perintah-perintah yang baru saja Anda ketik sebelumnya.
