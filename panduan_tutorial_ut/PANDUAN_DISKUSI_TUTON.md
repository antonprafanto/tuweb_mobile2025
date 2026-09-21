# 💬 PANDUAN INISIASI & TOPIK DISKUSI FORUM TUTON (SESI 1 - 8)
## Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak (STSI4303) — Universitas Terbuka

Dokumen ini memuat daftar topik pemicu diskusi (*discussion prompts*) dan panduan jawaban untuk tutor serta mahasiswa dalam forum e-learning Universitas Terbuka (`elearning.ut.ac.id`).

---

### 📌 Sesi 1: Arsitektur Pengembangan Aplikasi Perangkat Bergerak
* **Topik Diskusi:**  
  Dalam industri pengembangan aplikasi mobile saat ini, terdapat tiga pendekatan utama: *Native Development* (Kotlin/Swift), *Cross-Platform Native Canvas* (Flutter), dan *Hybrid/Web-view based* (Ionic dengan Capacitor).  
  *Pertanyaan:* Menurut Anda, apa keunggulan utama pendekatan Hybrid (Ionic) dibandingkan pendekatan Native murni ketika sebuah institusi seperti Universitas Terbuka ingin mengembangkan aplikasi portal mahasiswa yang cepat dirilis di Android, iOS, dan Web? Kapan pendekatan hybrid TIDAK disarankan untuk digunakan?
* **Poin Kunci Jawaban Mahasiswa:** Efisiensi *single codebase* (HTML/CSS/JS), kemudahan pemeliharaan oleh developer web yang sudah ada, akses ke ekosistem npm, serta batasan pada aplikasi game 3D/grafis berat yang membutuhkan akses GPU langsung.

---

### 📌 Sesi 2: Sistem Reaktivitas Frontend Modern (Vue.js)
* **Topik Diskusi:**  
  Dalam pengembangan antarmuka pengguna berbasis JavaScript konvensional (Vanilla JS), pembaruan tampilan antarmuka saat data berubah sering kali membutuhkan manipulasi DOM manual seperti `document.getElementById().innerText = data`.  
  *Pertanyaan:* Mengapa Vue.js mengadopsi sistem reaktivitas (`ref` dan `reactive`) serta Virtual DOM? Bagaimana konsep deklaratif ini mempermudah pengembang dalam membangun antarmuka aplikasi mobile yang responsif?
* **Poin Kunci Jawaban Mahasiswa / Panduan Tutor:** Mahasiswa mampu menguraikan pergeseran paradigma dari imperatif (*HOW*) ke deklaratif (*WHAT*); cara kerja *dependency tracking* (getter/setter `ref` dan ES6 Proxy `reactive`); keunggulan Virtual DOM Diffing yang hanya memutakhirkan node yang nilainya berubah tanpa render ulang keseluruhan pohon DOM; serta eliminasi risiko *spaghetti code* dan desinkronisasi data tampilan pada aplikasi mobile.

---

### 📌 Sesi 3: Manfaat Type Safety & TypeScript dalam Proyek Skala Besar
* **Topik Diskusi:**  
  JavaScript adalah bahasa pemrograman bertipe dinamis (*loosely typed*), sedangkan TypeScript menambahkan sistem tipe statis (*static typing*).  
  *Pertanyaan:* Mengapa dalam kurikulum STSI4303 mahasiswa diarahkan menggunakan TypeScript saat membangun aplikasi dengan Vue dan Ionic? Jelaskan skenario error pada aplikasi mobile yang dapat dicegah sejak dini saat proses penulisan kode (*compile-time*) berkat penggunaan antarmuka (`interface`) TypeScript!

---

### 📌 Sesi 4: Navigasi Halaman & Siklus Hidup pada Aplikasi Mobile
* **Topik Diskusi:**  
  Navigasi pada aplikasi mobile berbeda dengan navigasi halaman web biasa. Aplikasi mobile mempertahankan riwayat halaman dalam bentuk tumpukan (*stack navigation*).  
  *Pertanyaan:* Bagaimana Ionic Vue Router mengelola perpindahan halaman? Jelaskan perbedaan fungsi antara event siklus hidup biasa (seperti `onMounted`) dengan event siklus hidup spesifik Ionic seperti `ionViewDidEnter` dan `ionViewWillLeave`!

---

### 📌 Sesi 5: Desain Adaptif & Konsistensi Pengalaman Pengguna (UX)
* **Topik Diskusi:**  
  Aplikasi mobile diakses melalui ratusan variasi ukuran layar ponsel Android dan tablet.  
  *Pertanyaan:* Bagaimana Ionic Grid System membantu pengembang menciptakan tata letak yang adaptif? Mengapa dalam perancangan aplikasi modern, penerapan validasi input di sisi klien (*client-side validation*) dan dukungan *Dark Mode* menjadi standar kenyamanan pengguna (User Experience)?

---

### 📌 Sesi 6: Jembatan Antara Web dan Perangkat Keras (Capacitor)
* **Topik Diskusi:**  
  Di masa lalu, Apache Cordova menjadi jembatan utama aplikasi hybrid, namun kini ekosistem Ionic beralih sepenuhnya ke **Capacitor**.  
  *Pertanyaan:* Apa perbedaan mendasar dalam filosofi pengelolaan proyek native antara Cordova dan Capacitor? Bagaimana Capacitor memastikan bahwa proyek Android (`android/`) dapat diperlakukan sebagai artefak sumber asli yang bisa di-debug langsung di Android Studio?

---

### 📌 Sesi 7: Integrasi Layanan Backend & Penyimpanan Data Offline
* **Topik Diskusi:**  
  Aplikasi mobile sering kali harus beroperasi dalam kondisi jaringan internet yang tidak stabil (*unreliable connection*).  
  *Pertanyaan:* Jelaskan strategi arsitektur yang harus diterapkan agar aplikasi mobile tetap dapat menampilkan data dasar mahasiswa meskipun koneksi internet terputus (*offline-first design*), dengan memanfaatkan kombinasi REST API dan penyimpanan lokal (*Local Storage / Capacitor Preferences*)!

---

### 📌 Sesi 8: Kesiapan Rilis (*Production Readiness*) & Keamanan Aplikasi
* **Topik Diskusi:**  
  Sebelum sebuah berkas APK Android dipublikasikan ke Google Play Store atau didistribusikan kepada mahasiswa, berkas tersebut harus melalui proses *build release* dan penandatanganan digital (*code signing / keystore*).  
  *Pertanyaan:* Mengapa berkas APK mode Debug tidak boleh dirilis ke publik? Sebutkan tiga praktik terbaik (*best practices*) dalam menjaga keamanan kode sumber dan API Key pada aplikasi hybrid berbasis Ionic!
