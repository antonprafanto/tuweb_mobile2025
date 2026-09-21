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
* **Poin Kunci Jawaban Mahasiswa / Panduan Tutor:**
  * **Urgensi TypeScript pada Aplikasi Mobile:** Mencegah galat fatal di tangan pengguna (*runtime silent crashes* / *force close*); memberikan fasilitas *IntelliSense* dan pelengkapan otomatis (*autocompletion*) cerdas di VS Code; serta mempermudah *refactoring* dan kolaborasi tim pada basis kode berskala besar.
  * **Skenario Galat yang Dicegah Sejak Dini (*Compile-Time Guard*):**
    1. *Typo Properti Objek:* Mengetik `mhs.skorIpk` padahal nama aslinya `mhs.ipk`. Pada JavaScript murni hal ini menghasilkan nilai `undefined` atau kalkulasi `NaN` tanpa peringatan, sedangkan TypeScript langsung memberikan garis merah di editor.
    2. *Kontrak Data Antarmuka (`interface`):* Menjamin setiap entitas (seperti `MahasiswaUT` dan `MataKuliah`) memiliki tipe data atribut yang sesuai (misal: SKS wajib `number`, bukan string).
    3. *Penyusupan Nilai Asing via Literal Types:* Mengunci nilai huruf hanya pada himpunan legal UT (`'A' | 'B' | 'C' | 'D' | 'E'`), mencegah pengguna atau API mengirimkan data yang merusak perhitungan mutu.
    4. *Penanganan Data Kosong (*Null Safety*):* Memaksa pengembang melakukan pengecekan `if (data)` sebelum mengakses properti objek sehingga terhindar dari galat klasik `Cannot read properties of undefined`.
  * **Rujukan Kode Pembelajaran:** Dapat merujuk pada berkas mandiri [`slide_02_urgensi_typescript_mobile.html`](../contoh_kode_program/sesi_03_typescript_vue/slide_02_urgensi_typescript_mobile.html), [`slide_04_union_dan_literal_types.html`](../contoh_kode_program/sesi_03_typescript_vue/slide_04_union_dan_literal_types.html), dan [`slide_05_interface_model_mahasiswa.html`](../contoh_kode_program/sesi_03_typescript_vue/slide_05_interface_model_mahasiswa.html).

---

### 📌 Sesi 4: Navigasi Halaman & Siklus Hidup pada Aplikasi Mobile
* **Topik Diskusi:**  
  Navigasi pada aplikasi mobile berbeda dengan navigasi halaman web biasa. Aplikasi mobile mempertahankan riwayat halaman dalam bentuk tumpukan (*stack navigation*).  
  *Pertanyaan:* Bagaimana Ionic Vue Router mengelola perpindahan halaman? Jelaskan perbedaan fungsi antara event siklus hidup biasa (seperti `onMounted`) dengan event siklus hidup spesifik Ionic seperti `ionViewDidEnter` dan `ionViewWillLeave`!
* **Poin Kunci Jawaban Mahasiswa & Panduan Tutor:**
  * **Arsitektur Pengelolaan Tumpukan (Stack Navigation):**
    1. *Prinsip LIFO (Last In, First Out):* Saat navigasi dilakukan dengan `router.push()`, halaman baru ditumpuk di atas halaman lama. Wadah `<ion-router-outlet>` mempertahankan halaman sebelumnya di dalam memori cache DOM ponsel. Hal ini menjamin posisi scroll, status filter, dan input form tidak hilang saat pengguna kembali.
    2. *Peran `<ion-back-button>` & `default-href`:* Mengonsumsi riwayat tumpukan untuk melakukan navigasi mundur (*pop*). Atribut `default-href` wajib disertakan sebagai proteksi rute cadangan jika pengguna membuka URL rincian secara langsung atau setelah memuat ulang peramban.
  * **Komparasi Siklus Hidup (Vue Lifecycle vs Ionic Mobile Lifecycle):**
    1. *Kelemahan `onMounted()` pada Mobile Stack:* Hook bawaan Vue ini hanya berjalan **satu kali** saat komponen pertama kali diinisialisasi ke DOM. Ketika pengguna kembali dari halaman lain, halaman lama tidak di-mount ulang sehingga pemanggilan data di dalam `onMounted()` tidak akan pernah dieksekusi kembali.
    2. *Fase Masuk (`ionViewWillEnter` & `ionViewDidEnter`):* Terpanggil **setiap kali** layar aktif kembali. Mahasiswa wajib memanfaatkan `ionViewWillEnter` untuk mengambil data terbaru dari penyimpanan lokal atau API sebelum animasi transisi dimulai.
    3. *Fase Keluar & Proteksi Baterai (`ionViewWillLeave` & `ionViewDidLeave`):* Karena halaman tidak di-unmount, proses latar belakang seperti `setInterval`, rekaman audio, pemantauan geolokasi GPS, atau koneksi WebSocket akan terus berjalan jika tidak dihentikan manual di `ionViewWillLeave`. Penjelasan aspek proteksi *memory leak* ini menjadi pembeda utama nilai mahasiswa unggul.
* **Rujukan Kode Pembelajaran:**
  Dapat merujuk pada berkas mandiri [`slide_10_filosofi_stack_navigation.html`](../contoh_kode_program/sesi_04_ionic_dasar_navigasi/slide_10_filosofi_stack_navigation.html), [`slide_11_struktur_ionic_vue_router.html`](../contoh_kode_program/sesi_04_ionic_dasar_navigasi/slide_11_struktur_ionic_vue_router.html), [`slide_13_tombol_kembali_back_button.html`](../contoh_kode_program/sesi_04_ionic_dasar_navigasi/slide_13_tombol_kembali_back_button.html), [`slide_14_siklus_hidup_masuk_halaman.html`](../contoh_kode_program/sesi_04_ionic_dasar_navigasi/slide_14_siklus_hidup_masuk_halaman.html), [`slide_15_siklus_hidup_keluar_halaman.html`](../contoh_kode_program/sesi_04_ionic_dasar_navigasi/slide_15_siklus_hidup_keluar_halaman.html), dan [`slide_17_lab_quest_04_portal_modul_ut.html`](../contoh_kode_program/sesi_04_ionic_dasar_navigasi/slide_17_lab_quest_04_portal_modul_ut.html).

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
