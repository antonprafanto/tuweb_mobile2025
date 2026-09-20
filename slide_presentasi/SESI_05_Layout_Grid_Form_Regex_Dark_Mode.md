# 📱 NASKAH & SLIDE SESI 05: LAYOUT GRID, FORM VALIDASI REGEX, THEME, & TUGAS TUTORIAL 2
## Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak (STSI4303 / MSIM4401)
### Program Studi: S1 Sistem Informasi & S1 Informatika — Universitas Terbuka
### Dosen Pengampu: Anton Prafanto, S.Kom., M.T.
### Modul Acuan BMP: Modul 5 (MSIM4401/STSI4303)

---

## 🗺️ Gambaran Umum Sesi
Sesi kelima ini merupakan **tonggak evaluasi tutorial kedua (Milestone 2: TUGAS TUTORIAL 2)** yang berbobot **20%** dari total nilai Tutorial Online (Tuton) di Universitas Terbuka. Sesi ini mematangkan kemampuan mahasiswa dalam merancang antarmuka mobile yang adaptif dan kokoh. Pembahasan mencakup sistem tata letak 12-kolom Ionic Grid (`ion-grid`, `ion-row`, `ion-col`) dengan breakpoint responsif ponsel vs tablet, ragam kontrol masukan formulir mobile (`ion-input`, `ion-textarea`, `ion-select`, `ion-toggle`, `ion-datetime`), penerapan validasi reaktif berbasis Regular Expression (pola ketat NIM 9-digit angka dan domain resmi kampus `@ecampus.ut.ac.id`), umpan balik interaktif dengan dialog konfirmasi `ion-alert` dan notifikasi `ion-toast`, serta adaptasi tema gelap dinamis (*Dynamic Dark Mode*). Sesi ini ditutup dengan pembedahan menyeluruh soal, rubrik evaluasi, dan master solusi resmi **TUGAS TUTORIAL 2: Portal Layanan Mandiri Mahasiswa UT (Penerbitan KTM Digital & Registrasi Sesi)**.

---

## 📊 Daftar 18 Slide Pembahasan & Berkas Kode Mandiri

### 📌 Slide 01: Orientasi Sesi 05, Peta Capaian Sub-CPMK 5 & Tagihan TUGAS TUTORIAL 2
* **Sub-CPMK:** Memahami keterkaitan kompetensi antarmuka mobile adaptif dan tagihan resmi penugasan Tugas Tutorial 2.
* **Narasi Dosen:**  
  *"Selamat berjumpa kembali rekan-rekan mahasiswa FST Universitas Terbuka di Sesi 05! Hari ini kita mencapai milestone evaluasi kedua yang sangat penting: TUGAS TUTORIAL 2 berbobot 20% nilai tutorial resmi dibuka! Di sesi ini, kita mentransformasikan aplikasi mobile kita menjadi antarmuka yang sangat cerdas: tata letak yang otomatis beradaptasi saat ponsel diputar mendatar, formulir yang mampu mencegah kesalahan ketik menggunakan Regular Expression, umpan balik dialog modern, serta dukungan tema gelap (*Dark Mode*). Mari kita kuasai teknik-teknik ini langkah demi langkah!"*
* **Poin Kunci:**
  * Tugas Tutorial 2 berdurasi 2 pekan di LMS Tuton UT.
  * Kasus Proyek: Portal Pendaftaran Layanan Mandiri Mahasiswa UT (KTM Digital & Registrasi).
  * Kewajiban menyertakan video demonstrasi pengujian aplikasi berdurasi 3–5 menit di YouTube (Unlisted).
* **Tautan Kode Mandiri:**  
  👉 [`slide_01_orientasi_sesi_dan_tugas_2.html`](../contoh_kode_program/sesi_05_layout_grid_form/slide_01_orientasi_sesi_dan_tugas_2.html)

---

### 📌 Slide 02: Fondasi Tata Letak: Sistem 12-Kolom Ionic Grid
* **Sub-CPMK:** Menyusun hierarki tata letak berbasis Flexbox menggunakan `<ion-grid>`, `<ion-row>`, dan `<ion-col>`.
* **Narasi Dosen:**  
  *"Di smartphone, menyusun tata letak dengan margin manual berbasis piksel adalah resep kehancuran tampilan, karena ada ribuan tipe layar ponsel di pasaran. Ionic mengadopsi sistem 12-Kolom Grid. Prinsip dasarnya sangat matematis: satu baris `<ion-row>` selalu bernilai total 12 unit. Jika Anda membagi dua sama rata, masing-masing kolom diberi `size='6'`. Jika Anda ingin tiga kolom sejajar, gunakan `size='4'`. Sangat rapi, konsisten, dan fleksibel!"*
* **Poin Kunci:**
  * `<ion-grid>`: Kontainer terluar pengatur padding.
  * `<ion-row>`: Baris horizontal flexbox.
  * `<ion-col size="1..12">`: Sel kolom dengan ukuran proporsional.
* **Tautan Kode Mandiri:**  
  👉 [`slide_02_konsep_12_kolom_ion_grid.html`](../contoh_kode_program/sesi_05_layout_grid_form/slide_02_konsep_12_kolom_ion_grid.html)

---

### 📌 Slide 03: Tata Letak Responsif: Titik Henti Breakpoints Grid
* **Sub-CPMK:** Menerapkan titik henti responsif (`size`, `size-sm`, `size-md`, `size-lg`) untuk adaptasi ponsel portrait vs tablet landscape.
* **Narasi Dosen:**  
  *"Pengguna tidak hanya memakai ponsel dalam posisi tegak (*portrait*). Banyak mahasiswa membuka aplikasi kita di tablet iPad atau memutar ponsel secara mendatar (*landscape*). Dengan atribut `size='12' size-md='6'`, elemen antarmuka otomatis menumpuk 1 kolom penuh di layar sempit ponsel, namun otomatis berdampingan 2 kolom di layar tablet tanpa kita perlu menulis media query CSS satu baris pun!"*
* **Poin Kunci:**
  * `size="12"`: Default lebar penuh (100%) untuk smartphone portrait.
  * `size-md="6"`: Dua kolom sejajar (50% - 50%) pada resolusi tablet (≥ 768px).
  * `size-lg="4"`: Tiga kolom sejajar (33.3%) pada layar laptop / desktop (≥ 992px).
* **Tautan Kode Mandiri:**  
  👉 [`slide_03_grid_responsif_breakpoints.html`](../contoh_kode_program/sesi_05_layout_grid_form/slide_03_grid_responsif_breakpoints.html)

---

### 📌 Slide 04: Presisi Tata Letak: Perataan (Alignment) & Offset Kolom
* **Sub-CPMK:** Mengatur distribusi posisi vertikal/horizontal dan pergeseran kolom menggunakan atribut `offset`.
* **Narasi Dosen:**  
  *"Bagaimana cara membuat kartu formulir login berada persis di tengah-tengah layar tablet atau desktop? Kita menggunakan rumus matematis: `offset = (12 - size) / 2`. Jika lebar kartu adalah 8 unit, kita geser dari kiri dengan `offset='2'`. Ditambah dengan kelas utilitas `ion-align-items-center`, elemen teks dan foto profil di sampingnya akan sejajar vertikal secara sempurna!"*
* **Poin Kunci:**
  * `offset="N"`: Menggeser kolom ke kanan sebanyak N unit.
  * `class="ion-justify-content-center"`: Meratakan kolom ke tengah horizontal.
  * `class="ion-align-items-center"`: Menyamakan titik tengah vertikal.
* **Tautan Kode Mandiri:**  
  👉 [`slide_04_alignment_dan_offset_grid.html`](../contoh_kode_program/sesi_05_layout_grid_form/slide_04_alignment_dan_offset_grid.html)

---

### 📌 Slide 05: Kontrol Masukan Modern: Komponen <ion-input> & Inputmode
* **Sub-CPMK:** Mengonfigurasi properti `label-placement`, `clear-input`, dan `inputmode="numeric"` pada kolom masukan mobile.
* **Narasi Dosen:**  
  *"Pengalaman mengisi formulir di ponsel sangat ditentukan oleh kenyamanan papan ketik virtual. Saat mahasiswa mengisi NIM, aplikasi profesional wajib memerintahkan smartphone memunculkan keyboard angka dengan atribut `inputmode='numeric'`. Jangan biarkan pengguna kerepotan mengganti keyboard alfabet ke mode simbol secara manual!"*
* **Poin Kunci:**
  * `label-placement="floating"`: Label melayang halus saat kolom aktif.
  * `inputmode="numeric"`: Memanggil keyboard angka langsung di Android & iOS.
  * `:clear-input="true"`: Ikon silang cepat untuk membersihkan teks masukan.
  * `helper-text` & `error-text`: Teks petunjuk dan peringatan status.
* **Tautan Kode Mandiri:**  
  👉 [`slide_05_kontrol_input_teks_ion_input.html`](../contoh_kode_program/sesi_05_layout_grid_form/slide_05_kontrol_input_teks_ion_input.html)

---

### 📌 Slide 06: Masukan Lanjutan: <ion-select> (Action-Sheet) & <ion-textarea> (Auto-grow)
* **Sub-CPMK:** Merancang dropdown pemilih program studi dengan interface action-sheet dan kolom alamat yang tumbuh otomatis.
* **Narasi Dosen:**  
  *"Menu drop-down HTML standar (`<select>`) di ponsel tampak sangat kaku dan kuno. Ionic menyajikan `<ion-select interface='action-sheet'>` yang memunculkan lembar opsi elegan dari dasar layar ponsel (*bottom sheet*), sangat mudah dijangkau oleh jempol. Dan untuk kolom alamat rumah, gunakan `:auto-grow='true'` agar kotak membesar otomatis saat mahasiswa mengetik kalimat panjang!"*
* **Poin Kunci:**
  * `interface="action-sheet"`: Lembar aksi dari bawah khas aplikasi native.
  * `:auto-grow="true"`: Ketinggian textarea menyesuaikan isi teks tanpa scrollbar kaku.
  * `:counter="true"` & `maxlength="200"`: Indikator sisa kuota karakter.
* **Tautan Kode Mandiri:**  
  👉 [`slide_06_area_teks_dan_pilihan_dropdown.html`](../contoh_kode_program/sesi_05_layout_grid_form/slide_06_area_teks_dan_pilihan_dropdown.html)

---

### 📌 Slide 07: Kontrol Pilihan: ion-toggle, ion-checkbox, & ion-radio
* **Sub-CPMK:** Menentukan kontrol pilihan boolean (toggle), seleksi majemuk (checkbox), dan pilihan jalur eksklusif (radio).
* **Narasi Dosen:**  
  *"Jangan salah memilih kontrol pilihan! Jika mahasiswa memilih status aktif/nonaktif notifikasi atau Dark Mode, gunakan `<ion-toggle>` karena perubahannya bersifat instan. Jika menyetujui fakta integritas akademik, gunakan `<ion-checkbox>`. Namun jika memilih satu skema registrasi perkuliahan (SIPAS Non-TTM vs Semi), gunakan `<ion-radio-group>` karena pilihannya bersifat saling meniadakan (*mutually exclusive*)!"*
* **Poin Kunci:**
  * `<ion-toggle>`: Sakelar boolean biner (True/False).
  * `<ion-checkbox>`: Seleksi centang majemuk atau persetujuan syarat.
  * `<ion-radio-group>`: Seleksi tunggal mutlak dari sekelompok pilihan.
* **Tautan Kode Mandiri:**  
  👉 [`slide_07_sakelar_toggle_checkbox_radio.html`](../contoh_kode_program/sesi_05_layout_grid_form/slide_07_sakelar_toggle_checkbox_radio.html)

---

### 📌 Slide 08: Pemilih Kalender Modern: Komponen <ion-datetime> (Lokalisasi id-ID)
* **Sub-CPMK:** Mengimplementasikan kalender tanggal lahir mahasiswa dengan lokalisasi Bahasa Indonesia dan pembatas rentang tahun.
* **Narasi Dosen:**  
  *"Mengisi tanggal lahir di smartphone sering kali menjengkelkan jika pengguna harus mengetik angka strip secara manual. Dengan `<ion-datetime locale='id-ID' presentation='date'>`, kita menyajikan kalender visual berstandar Android & iOS lengkap dengan nama bulan Bahasa Indonesia. Kita juga membatasi tahun lahir maksimum dengan atribut `max` agar input data mahasiswa selalu masuk akal!"*
* **Poin Kunci:**
  * `locale="id-ID"`: Teks hari dan bulan otomatis dalam Bahasa Indonesia.
  * `presentation="date"`: Kalender tanggal tanpa pemilih jam menit.
  * `min` & `max`: Batasan validasi tahun lahir yang sah.
* **Tautan Kode Mandiri:**  
  👉 [`slide_08_pemilih_tanggal_ion_datetime.html`](../contoh_kode_program/sesi_05_layout_grid_form/slide_08_pemilih_tanggal_ion_datetime.html)

---

### 📌 Slide 09: Prinsip Validasi Reaktif: Dirty, Touched, & Umpan Balik Instan
* **Sub-CPMK:** Mengelola siklus status masukan form (*pristine*, *dirty*, *touched*) demi menjaga kenyamanan pengguna (UX).
* **Narasi Dosen:**  
  *"Dalam User Experience (UX) mobile, tidak ada hal yang lebih menyebalkan bagi pengguna selain membuka formulir baru lalu langsung disambut oleh tulisan merah 'NIM Anda Salah!'. Pengguna bahkan belum sempat menyentuh kolom tersebut! Status formulir harus dihormati: saat 'pristine', jangan tampilkan error. Tampilkan pesan kesalahan hanya jika kolom sudah 'touched' (pernah difokuskan lalu ditinggalkan) dan datanya tidak valid!"*
* **Poin Kunci:**
  * *Pristine*: Belum pernah diedit (jangan tampilkan peringatan).
  * *Dirty*: Pengguna sudah mulai mengetik karakter.
  * *Touched*: Kursor sudah keluar dari input (`@ion-blur`).
* **Tautan Kode Mandiri:**  
  👉 [`slide_09_prinsip_validasi_reaktif_form.html`](../contoh_kode_program/sesi_05_layout_grid_form/slide_09_prinsip_validasi_reaktif_form.html)

---

### 📌 Slide 10: Validasi Pola Regex: Penegakan Format 9 Digit NIM UT
* **Sub-CPMK:** Menganalisis dan menerapkan Regular Expression `/^[0-9]{9}$/` untuk menjamin integritas data NIM mahasiswa UT.
* **Narasi Dosen:**  
  *"Di Universitas Terbuka, setiap NIM mahasiswa terdiri dari tepat 9 digit angka, seperti 043123456. Di JavaScript biasa, mahasiswa sering memeriksa `nim.length == 9`. Tapi tahukah Anda? Jika pengguna mengetik '043ABCDEF' panjangnya juga 9 karakter, padahal ada huruf di dalamnya! Oleh karena itu, kita wajib menggunakan Regular Expression `/^[0-9]{9}$/` yang secara mutlak menolak huruf, spasi, maupun tanda baca!"*
* **Poin Kunci:**
  * `^` dan `$`: Kunci awal dan akhir string.
  * `[0-9]`: Hanya mengizinkan karakter angka.
  * `{9}`: Wajib berjumlah tepat sembilan karakter.
* **Tautan Kode Mandiri:**  
  👉 [`slide_10_validasi_regex_nim_9_digit.html`](../contoh_kode_program/sesi_05_layout_grid_form/slide_10_validasi_regex_nim_9_digit.html)

---

### 📌 Slide 11: Validasi Pola Regex: Domain Resmi Surel Kampus (@ecampus.ut.ac.id)
* **Sub-CPMK:** Merancang pola Regular Expression untuk mengunci domain surel resmi institusi mahasiswa UT.
* **Narasi Dosen:**  
  *"Pada penugasan Tugas Tutorial 2, salah satu syarat ketat adalah memastikan pendaftar menggunakan surel kampus. Kita menggunakan pola `/^[a-zA-Z0-9._%+-]+@ecampus\.ut\.ac\.id$/`. Perhatikan tanda backslash pada `\.ut\.ac\.id`. Dalam regex, tanda titik tanpa backslash berarti 'sembarang karakter'. Dengan memberi escape `\.`, kita memastikan karakter yang diterima adalah tanda titik asli!"*
* **Poin Kunci:**
  * Username: `[a-zA-Z0-9._%+-]+` (karakter alfanumerik sebelum simbol @).
  * Domain: `@ecampus\.ut\.ac\.id` (mengunci domain resmi Universitas Terbuka).
  * Gunakan `.trim().toLowerCase()` sebelum memvalidasi surel.
* **Tautan Kode Mandiri:**  
  👉 [`slide_11_validasi_regex_email_ecampus_ut.html`](../contoh_kode_program/sesi_05_layout_grid_form/slide_11_validasi_regex_email_ecampus_ut.html)

---

### 📌 Slide 12: Umpan Balik Halus: Notifikasi Mengambang <ion-toast>
* **Sub-CPMK:** Mengimplementasikan notifikasi popup bawah `<ion-toast>` dengan durasi otomatis dan pewarnaan semantik.
* **Narasi Dosen:**  
  *"Ketika pendaftaran mahasiswa berhasil atau gagal, jangan gunakan fungsi `alert()` bawaan browser yang memblokir layar dengan kotak abu-abu kuno. Gunakan `<ion-toast>`! Toast melayang anggun di bagian bawah layar ponsel selama 3 detik, memberi tahu mahasiswa dengan warna hijau (*success*) bahwa datanya tersimpan, lalu menghilang otomatis tanpa mengganggu alur navigasi!"*
* **Poin Kunci:**
  * `:is-open="boolean"`: Properti pemicu tampil reaktif.
  * `:duration="3000"`: Menghilang otomatis setelah 3 detik.
  * `position="bottom"`: Posisi ramah jempol smartphone.
  * `color="success | danger | warning"`: Warna semantik status aksi.
* **Tautan Kode Mandiri:**  
  👉 [`slide_12_notifikasi_mengambang_ion_toast.html`](../contoh_kode_program/sesi_05_layout_grid_form/slide_12_notifikasi_mengambang_ion_toast.html)

---

### 📌 Slide 13: Konfirmasi Krusial: Kotak Dialog Modal <ion-alert>
* **Sub-CPMK:** Merancang dialog verifikasi dua langkah (*Two-Tier Confirmation*) sebelum pengiriman formulir permanen.
* **Narasi Dosen:**  
  *"Menerbitkan KTM Digital adalah proses yang tidak boleh salah. Sebelum form dikirim ke server, kita memunculkan `<ion-alert>`. Alert ini merangkum data nama, NIM, dan prodi yang sudah diketik, lalu meminta konfirmasi akhir: 'Apakah data Anda sudah benar?'. Jika mahasiswa mengeklik 'Batal', form tetap terbuka. Jika mengeklik 'Ya', barulah proses submit dieksekusi!"*
* **Poin Kunci:**
  * Dialog modal yang memfokuskan perhatian pengguna pada keputusan krusial.
  * Konfigurasi tombol array: `role: 'cancel'` dan `role: 'confirm'`.
  * Menampilkan pesan ringkasan data sebelum commit permanen.
* **Tautan Kode Mandiri:**  
  👉 [`slide_13_dialog_konfirmasi_ion_alert.html`](../contoh_kode_program/sesi_05_layout_grid_form/slide_13_dialog_konfirmasi_ion_alert.html)

---

### 📌 Slide 14: Arsitektur Theming: CSS Variables & prefers-color-scheme
* **Sub-CPMK:** Membedah mekanisme penyesuaian warna global Ionic melalui variabel CSS dan media query sistem operasi.
* **Narasi Dosen:**  
  *"Mengapa Ionic begitu disukai pengembang aplikasi enterprise? Karena arsitektur pewarnaannya dibangun di atas CSS Custom Properties. Variabel `--ion-background-color`, `--ion-text-color`, dan `--ion-card-background` dapat dikendalikan secara global. Saat ponsel pengguna beralih ke tema malam, sistem Ionic otomatis membaca media query `@media (prefers-color-scheme: dark)` tanpa perlu reload halaman!"*
* **Poin Kunci:**
  * CSS Variables: Standar Web Components untuk pewarnaan tema dinamis.
  * `prefers-color-scheme: dark`: Mendeteksi pengaturan bawaan sistem operasi ponsel.
  * Warna latar abu OLED gelap (#121212) lebih nyaman bagi mata dibanding hitam murni.
* **Tautan Kode Mandiri:**  
  👉 [`slide_14_arsitektur_tema_gelap_dark_mode.html`](../contoh_kode_program/sesi_05_layout_grid_form/slide_14_arsitektur_tema_gelap_dark_mode.html)

---

### 📌 Slide 15: Peralihan Tema Real-Time: Sakelar Dark & Light Mode
* **Sub-CPMK:** Mengimplementasikan tombol toggle tema yang memanipulasi kelas body dan menyimpan preferensi ke LocalStorage.
* **Narasi Dosen:**  
  *"Pengguna menyukai fleksibilitas. Selain deteksi otomatis, kita menyediakan tombol sakelar `<ion-toggle>` di toolbar atas. Saat sakelar digeser, kita menyuntikkan kelas `.dark` pada dokumen HTML dan menyimpan pilihan tersebut ke `localStorage`. Sehingga saat mahasiswa membuka aplikasi kembali esok hari, tema malam favoritnya tetap terjaga!"*
* **Poin Kunci:**
  * Manipulasi kelas: `document.body.classList.toggle('dark', isDark)`.
  * Persistensi: Menyimpan status tema di `localStorage.setItem('theme', 'dark')`.
  * Pemulihan state saat aplikasi pertama kali dimuat (*onMounted*).
* **Tautan Kode Mandiri:**  
  👉 [`slide_15_sakelar_tema_dinamis_dark_light.html`](../contoh_kode_program/sesi_05_layout_grid_form/slide_15_sakelar_tema_dinamis_dark_light.html)

---

### 📌 Slide 16: Pedoman & Rubrik Penilaian Resmi TUGAS TUTORIAL 2 (Skala 0–100)
* **Sub-CPMK:** Menguraikan 4 kriteria evaluasi resmi, pembagian skor, dan tata cara penyerahan laporan tugas di LMS Tuton.
* **Narasi Dosen:**  
  *"Perhatikan baik-baik slide ini rekan-rekan mahasiswa! Ini adalah rubrik resmi yang akan saya gunakan dalam menilai berkas Tugas Tutorial 2 Anda. Penilaian terbagi 4 pilar: Kerapian komponen resmi Ionic (25 poin), Ketepatan validasi Regex NIM 9 digit & email kampus (35 poin), Interaktivitas dialog Toast & Alert (20 poin), serta Kinerja Dark Mode dan kejelasan video demo (20 poin). Total nilai maksimal adalah 100!"*
* **Poin Kunci:**
  * Skor 100: Kerapian UI (25), Validasi Regex (35), Toast/Alert (20), Dark Mode & Video (20).
  * Video YouTube Unlisted (durasi 3–5 menit) wajib dilampirkan dalam laporan PDF.
  * Batas waktu pengumpulan: 2 pekan di LMS Tuton UT.
* **Tautan Kode Mandiri:**  
  👉 [`slide_16_rubrik_tugas_tutorial_2.md`](../contoh_kode_program/sesi_05_layout_grid_form/slide_16_rubrik_tugas_tutorial_2.md)

---

### 📌 Slide 17: MASTER SOLUSI RESMI TUGAS TUTORIAL 2: Portal Layanan Mandiri & KTM Digital
* **Sub-CPMK:** Mengintegrasikan seluruh komponen UI, validasi Regex, dialog konfirmasi, dan theming dalam satu aplikasi utuh.
* **Narasi Dosen:**  
  *"Inilah Mahakarya kita hari ini: Master Solusi Resmi Tugas Tutorial 2! Aplikasi ini menggabungkan simulator smartphone lengkap: formulir pendaftaran dengan validasi Regex interaktif, tombol Dark Mode di toolbar, dialog konfirmasi modal, notifikasi Toast, dan yang paling menarik: Kartu Tanda Mahasiswa (KTM) Digital yang langsung terisi foto avatar, nama, dan NIM Anda secara reaktif saat Anda mengetik! Pelajari dan modifikasi berkas ini untuk tugas Anda!"*
* **Poin Kunci:**
  * Aplikasi komprehensif siap pakai dengan arsitektur bersih Vue 3 Composition API.
  * Kartu KTM Digital reaktif dengan avatar bottts dinamis dan kode batang simulasi.
  * Inspektur validasi real-time yang memantau keabsahan setiap kolom input.
* **Tautan Kode Mandiri:**  
  👉 [`slide_17_solusi_tugas_2_portal_ktm_registrasi.html`](../contoh_kode_program/sesi_05_layout_grid_form/slide_17_solusi_tugas_2_portal_ktm_registrasi.html)

---

### 📌 Slide 18: Jembatan Menuju Sesi 06: Capacitor Runtime Bridge & Android Studio
* **Sub-CPMK:** Menghubungkan capaian antarmuka mobile menuju integrasi native SDK Android dan runtime bridge Capacitor.
* **Narasi Dosen:**  
  *"Selamat atas penguasaan komponen antarmuka, validasi form, dan penyelesaian Tugas 2! Namun selama ini, kita masih menguji aplikasi di dalam peramban web. Di Sesi 06 mendatang, kita akan melangkah lebih jauh ke dunia native: kita akan menghubungkan kode web kita ke sistem operasi Android menggunakan Capacitor Runtime Bridge, membuka Android Studio, mengelola izin AndroidManifest, dan menguji aplikasi langsung di ponsel fisik Anda menggunakan scrcpy! Siapkan smartphone dan kabel data Anda!"*
* **Poin Kunci:**
  * Topik Sesi 06: Capacitor Bridge, Android Studio, `AndroidManifest.xml`, USB Debugging.
  * Menjalankan aplikasi langsung di perangkat Android fisik (RAM < 70MB via `scrcpy`).
  * Persiapan integrasi sensor native perangkat keras.
* **Tautan Kode Mandiri:**  
  👉 [`slide_18_preview_sesi_06_capacitor_android.html`](../contoh_kode_program/sesi_05_layout_grid_form/slide_18_preview_sesi_06_capacitor_android.html)
