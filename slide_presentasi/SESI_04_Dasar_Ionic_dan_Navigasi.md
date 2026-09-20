# 📱 NASKAH & SLIDE SESI 04: DASAR-DASAR IONIC FRAMEWORK & NAVIGASI HALAMAN MOBILE
## Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak (STSI4303 / MSIM4401)
### Program Studi: S1 Sistem Informasi & S1 Informatika — Universitas Terbuka
### Dosen Pengampu: Anton Prafanto, S.Kom., M.T.
### Modul Acuan BMP: Modul 4 (MSIM4401/STSI4303)

---

## 🗺️ Gambaran Umum Sesi
Sesi keempat ini merupakan gerbang transisi dari pemrograman web murni menuju rekayasa antarmuka aplikasi perangkat bergerak (*mobile application*). Mahasiswa diperkenalkan pada **Ionic Framework**, sebuah toolkit UI mobile terdepan berbasis Web Components yang mampu menyuguhkan performa dan tampilan alami (*native look-and-feel*). Materi mencakup konsep *Adaptive Styling* (Material Design untuk Android dan Cupertino untuk iOS), hierarki tata letak baku mobile (`ion-app`, `ion-page`, `ion-content`), ragam komponen antarmuka esensial, arsitektur perutean tumpukan (*Stack Navigation*) dengan Ionic Vue Router, serta penguasaan siklus hidup halaman (*Lifecycle Hooks*) guna mencegah kebocoran memori pada smartphone. Sesi ini ditutup dengan master solusi **Lab Quest 04: Portal Modul BMP UT Multi-Halaman** dan pengarahan **TUGAS TUTORIAL 2** untuk Sesi 05.

---

## 📊 Daftar 18 Slide Pembahasan & Berkas Kode Mandiri

### 📌 Slide 01: Orientasi Sesi 04, Arsitektur Hybrid & Ekosistem Ionic UI Toolkit
* **Sub-CPMK:** Memahami peran Ionic Framework sebagai penyedia komponen antarmuka mobile multiplatform di atas pondasi Vue 3.
* **Narasi Dosen:**  
  *"Selamat berjumpa di Sesi 04 rekan-rekan mahasiswa Universitas Terbuka! Pada 3 sesi awal, kita telah mematangkan fondasi Vue 3 dan TypeScript. Namun, jika tombol dan form yang kita buat hanya berupa elemen HTML standar, pengguna smartphone akan merasa canggung karena tidak terasa seperti aplikasi native. Hari ini kita melangkah ke dunia Ionic Framework: toolkit UI kelas industri yang menyulap komponen web kita menjadi antarmuka mobile berkelas tanpa perlu menulis kode Java/Kotlin maupun Swift dari nol!"*
* **Poin Kunci:**
  * Ionic adalah perpustakaan komponen UI berbasis Web Components (kustom elemen HTML).
  * Menulis satu basis kode (HTML/CSS/Vue) untuk dijalankan di Android, iOS, dan Web (PWA).
  * Tidak memerlukan compile native berat selama tahap perancangan antarmuka.
* **Tautan Kode Mandiri:**  
  👉 [`slide_01_pengenalan_ekosistem_ionic.html`](../contoh_kode_program/sesi_04_ionic_dasar_navigasi/slide_01_pengenalan_ekosistem_ionic.html)

---

### 📌 Slide 02: Adaptive Styling: Material Design (Android) vs Cupertino (iOS)
* **Sub-CPMK:** Mengidentifikasi mekanisme *Adaptive Styling* otomatis yang menyesuaikan estetika antarmuka sesuai sistem operasi target.
* **Narasi Dosen:**  
  *"Pernahkah Anda memperhatikan bahwa pengguna iPhone menyukai tombol dengan teks berhuruf kapital awal dan toolbar di tengah, sementara pengguna Android menyukai efek ripple beriak dan toolbar di sisi kiri? Ionic memiliki fitur luar biasa bernama Adaptive Styling. Tanpa Anda ubah kodenya sedikit pun, komponen Ionic otomatis mengenali apakah ia sedang berjalan di Android (Material Design) atau iOS (Cupertino)!"*
* **Poin Kunci:**
  * Mode `md` (Material Design): Ripple effect, font Roboto, elevation shadow tegas.
  * Mode `ios` (Cupertino): Transisi geser halus, font San Francisco, judul di tengah, blur header.
  * Dapat dipaksa secara global melalui konfigurasi peramban atau atribut `mode="ios" / mode="md"`.
* **Tautan Kode Mandiri:**  
  👉 [`slide_02_adaptive_styling_md_ios.html`](../contoh_kode_program/sesi_04_ionic_dasar_navigasi/slide_02_adaptive_styling_md_ios.html)

---

### 📌 Slide 03: Anatomi Halaman Mobile Baku: Hirarki ion-app, ion-page, ion-header, & ion-content
* **Sub-CPMK:** Menyusun struktur pembungkus halaman mobile yang valid sesuai spesifikasi arsitektur Ionic.
* **Narasi Dosen:**  
  *"Salah satu kesalahan paling sering yang membuat layar aplikasi mobile menjadi putih kosong adalah menyusun layout seperti web HTML biasa dengan tag `<div>`. Pada Ionic, seluruh aplikasi wajib dibungkus `<ion-app>`, setiap layar wajib dibungkus `<ion-page>`, dan area scroll konten wajib ditempatkan di dalam `<ion-content>`. Jangan pernah melanggar hierarki ini jika Anda ingin animasi perpindahan layar berjalan mulus!"*
* **Poin Kunci:**
  * `<ion-app>`: Root pembungkus tunggal di `App.vue`.
  * `<ion-page>`: Pembungkus level layar individual (wajib ada untuk navigasi router).
  * `<ion-header>` & `<ion-toolbar>`: Area atas penampung judul dan tombol aksi.
  * `<ion-content>`: Area isi aplikasi dengan manajemen scroll akselerasi hardware.
* **Tautan Kode Mandiri:**  
  👉 [`slide_03_anatomi_halaman_ion_page.html`](../contoh_kode_program/sesi_04_ionic_dasar_navigasi/slide_03_anatomi_halaman_ion_page.html)

---

### 📌 Slide 04: Palet Warna Semantik Tema Mobile Ionic
* **Sub-CPMK:** Memanfaatkan sistem pewarnaan semantik Ionic (`color="primary|secondary|danger"`) untuk standarisasi antarmuka.
* **Narasi Dosen:**  
  *"Dalam desain antarmuka modern, kita tidak lagi mengodekan nilai heksadesimal warna secara acak di setiap tombol. Ionic menyediakan palet warna semantik universal: primary (biru branding), secondary (aksen), success (konfirmasi KRS berhasil), warning (peringatan masa registrasi), dan danger (pembatalan/penghapusan). Sistem ini memudahkan standarisasi identitas visual institusi!"*
* **Poin Kunci:**
  * 6 Warna Inti: `primary`, `secondary`, `tertiary`, `success`, `warning`, `danger`.
  * 3 Warna Monokromatik: `light`, `medium`, `dark`.
  * Atribut diterapkan langsung pada komponen: `<ion-button color="success">Simpan</ion-button>`.
* **Tautan Kode Mandiri:**  
  👉 [`slide_04_palet_warna_tema_mobile.html`](../contoh_kode_program/sesi_04_ionic_dasar_navigasi/slide_04_palet_warna_tema_mobile.html)

---

### 📌 Slide 05: Variasi & Konfigurasi Tombol Mobile: ion-button
* **Sub-CPMK:** Mengonfigurasi properti `expand`, `fill`, `shape`, dan `size` pada `<ion-button>`.
* **Narasi Dosen:**  
  *"Tombol pada layar sentuh smartphone harus mudah ditekan oleh jempol (thumb-friendly). Tombol aksi utama lazimnya membentang penuh dengan atribut `expand='block'`, sementara tombol sekunder cukup bergaris tepi dengan `fill='outline'`. Pelajari variasi ini agar hierarki aksi pada aplikasi Anda terasa intuitif bagi pengguna!"*
* **Poin Kunci:**
  * `expand="block"` (lebar penuh bersudut), `expand="full"` (lebar penuh tanpa margin).
  * `fill="solid"` (default), `fill="outline"` (garis luar), `fill="clear"` (teks transparan).
  * `shape="round"` (sudut membulat pill modern).
* **Tautan Kode Mandiri:**  
  👉 [`slide_05_variasi_tombol_ion_button.html`](../contoh_kode_program/sesi_04_ionic_dasar_navigasi/slide_05_variasi_tombol_ion_button.html)

---

### 📌 Slide 06: Penyajian Konten Berbasis Kartu: ion-card & Elemen-elemen Bagiannya
* **Sub-CPMK:** Merancang kartu informasi ringkas dengan memadukan `ion-card-header`, `ion-card-title`, dan `ion-card-content`.
* **Narasi Dosen:**  
  *"Penyajian informasi di smartphone sangat mengandalkan konsep 'Card UI' karena memberikan pemisah visual yang tegas di layar yang sempit. Di dalam `<ion-card>`, kita memiliki subtitle sebagai label kategori, title sebagai judul berita, dan content sebagai ringkasan artikel. Kartu ini sangat pas untuk menyajikan daftar pengumuman perkuliahan UT!"*
* **Poin Kunci:**
  * `<ion-card>`: Kontainer elevasi berbayang lembut.
  * `<ion-card-header>`: Menampung `<ion-card-subtitle>` dan `<ion-card-title>`.
  * `<ion-card-content>`: Menampung paragraf ringkasan atau tombol aksi tambahan.
* **Tautan Kode Mandiri:**  
  👉 [`slide_06_kartu_informasi_ion_card.html`](../contoh_kode_program/sesi_04_ionic_dasar_navigasi/slide_06_kartu_informasi_ion_card.html)

---

### 📌 Slide 07: Identitas Visual Mobile: ion-avatar, ion-badge, & ion-chip
* **Sub-CPMK:** Mengimplementasikan avatar profil, lencana notifikasi, dan tag filter interaktif.
* **Narasi Dosen:**  
  *"Untuk membuat antarmuka terasa hidup, kita memerlukan aksen visual mikro. Gunakan `<ion-avatar>` untuk menampilkan foto profil mahasiswa yang otomatis terpotong bundar sempurna, `<ion-badge>` untuk penanda jumlah pesan baru yang belum dibaca, dan `<ion-chip>` sebagai tombol tag interaktif untuk menyaring mata kuliah!"*
* **Poin Kunci:**
  * `ion-avatar`: Pemotong foto bundar otomatis.
  * `ion-badge`: Kapsul penanda angka status (misal counter unread notifikasi).
  * `ion-chip`: Tag seleksi interaktif yang dapat memuat teks dan ikon.
* **Tautan Kode Mandiri:**  
  👉 [`slide_07_avatar_badge_dan_chip.html`](../contoh_kode_program/sesi_04_ionic_dasar_navigasi/slide_07_avatar_badge_dan_chip.html)

---

### 📌 Slide 08: Pengelolaan Informasi Kolektif: ion-list & ion-item
* **Sub-CPMK:** Mengelola tampilan daftar data dengan memanfaatkan Web Component Slots (`slot="start"` dan `slot="end"`).
* **Narasi Dosen:**  
  *"Sebagian besar aplikasi mobile adalah daftar (list) informasi: daftar mata kuliah, daftar modul BMP, daftar nilai, atau riwayat registrasi. Komponen `<ion-item>` membagi baris menjadi 3 area: slot 'start' di kiri untuk gambar/ikon, area tengah untuk label bertingkat (`ion-label`), dan slot 'end' di kanan untuk catatan atau status!"*
* **Poin Kunci:**
  * `<ion-list lines="full | inset | none">`: Pembungkus kumpulan item.
  * `slot="start"`: Area kiri (avatar/ikon).
  * `slot="end"`: Area kanan (note/chevron arrow).
  * Atribut `button`: Memberikan efek ripple interaktif saat baris ditekan.
* **Tautan Kode Mandiri:**  
  👉 [`slide_08_daftar_list_dan_item.html`](../contoh_kode_program/sesi_04_ionic_dasar_navigasi/slide_08_daftar_list_dan_item.html)

---

### 📌 Slide 09: Bahasa Visual Antarmuka: Perpustakaan Resmi Ionicons
* **Sub-CPMK:** Mengintegrasikan ikon vektor mobile dengan konfigurasi varian outline, filled, dan sharp.
* **Narasi Dosen:**  
  *"Ikon adalah bahasa universal dalam aplikasi mobile. Ionic menyertakan paket resmi bernama Ionicons dengan ribuan ikon vektor SVG gratis. Anda cukup memanggil `<ion-icon name='book-outline'></ion-icon>`. Ikon ini tajam di resolusi layar tinggi (*Retina Display*) dan warnanya otomatis mengikuti warna teks di sekitarnya!"*
* **Poin Kunci:**
  * Sintaks pemanggilan: `<ion-icon :icon="bookOutline"></ion-icon>` atau `name="book-outline"`.
  * 3 Varian: Default (solid/tebal), `-outline` (garis tipis modern), `-sharp` (sudut tegas Android).
  * Kustomisasi ukuran via `font-size` atau atribut `size="small | large"`.
* **Tautan Kode Mandiri:**  
  👉 [`slide_09_ikonografi_ionicons.html`](../contoh_kode_program/sesi_04_ionic_dasar_navigasi/slide_09_ikonografi_ionicons.html)

---

### 📌 Slide 10: Filosofi Stack Navigation: Mental Model LIFO Mobile vs Browser Reload
* **Sub-CPMK:** Menganalisis perbedaan fundamental antara perutean web biasa (URL destroy) dan perutean mobile tumpukan (*Stack Navigation*).
* **Narasi Dosen:**  
  *"Di situs web desktop, ketika Anda mengeklik link halaman lain, halaman sebelumnya dihancurkan dari memori dan halaman baru dimuat ulang dari awal. Di smartphone, perilaku seperti itu sangat menyiksa pengguna! Pada aplikasi mobile, halaman baru ditumpukkan di atas halaman lama (*Push*). Ketika pengguna menekan tombol Back (*Pop*), halaman lama muncul seketika lengkap dengan posisi scroll yang tidak bergeser sama sekali!"*
* **Poin Kunci:**
  * LIFO (Last In, First Out): Layar teratas adalah layar yang aktif.
  * Layar di bawahnya tetap hidup dan ter-cache di memori smartphone.
  * Mencegah pemborosan kuota data akibat fetch ulang data yang sudah dibuka.
* **Tautan Kode Mandiri:**  
  👉 [`slide_10_filosofi_stack_navigation.html`](../contoh_kode_program/sesi_04_ionic_dasar_navigasi/slide_10_filosofi_stack_navigation.html)

---

### 📌 Slide 11: Konfigurasi Sistem: Integrasi Ionic Vue Router & ion-router-outlet
* **Sub-CPMK:** Mengonfigurasi berkas perutean `@ionic/vue-router` dan menempatkan wadah penampung tumpukan `<ion-router-outlet>`.
* **Narasi Dosen:**  
  *"Meskipun berbasis Vue, kita tidak menggunakan `vue-router` standar secara langsung, melainkan pembungkus resmi `@ionic/vue-router`. Mengapa? Karena router Ionic menyediakan transisi animasi perangkat bergerak dan komponen `<ion-router-outlet>`. Jangan menggantinya dengan `<router-view>` biasa, karena jika itu terjadi, seluruh animasi native dan riwayat tumpukan akan hilang!"*
* **Poin Kunci:**
  * Menggunakan `createRouter` dari `@ionic/vue-router`.
  * Di `App.vue`: Wajib menggunakan `<ion-router-outlet />` di dalam `<ion-app>`.
  * Mendukung lazy loading komponen dengan `component: () => import('@/views/Page.vue')`.
* **Tautan Kode Mandiri:**  
  👉 [`slide_11_struktur_ionic_vue_router.html`](../contoh_kode_program/sesi_04_ionic_dasar_navigasi/slide_11_struktur_ionic_vue_router.html)

---

### 📌 Slide 12: Transisi Antar Layar: useRouter() & Pengiriman Parameter (:kode)
* **Sub-CPMK:** Memprogram navigasi dinamis dengan `router.push()` dan mengekstrak parameter rute dengan `useRoute()`.
* **Narasi Dosen:**  
  *"Bagaimana cara kita berpindah dari halaman katalog modul menuju halaman rincian buku BMP tertentu? Kita menggunakan fungsi `router.push('/modul/' + kode)`. Pada halaman rincian tujuan, kita menangkap kode tersebut melalui `route.params.kode`. Dengan cara ini, satu halaman tampilan rincian dapat digunakan berulang kali untuk menampilkan ribuan modul mata kuliah yang berbeda!"*
* **Poin Kunci:**
  * Halaman asal: `useRouter().push('/path')`.
  * Halaman tujuan: `useRoute().params.namaParam`.
  * Gunakan `computed()` saat membaca parameter rute untuk menjamin reaktivitas data.
* **Tautan Kode Mandiri:**  
  👉 [`slide_12_pindah_halaman_dan_parameter.html`](../contoh_kode_program/sesi_04_ionic_dasar_navigasi/slide_12_pindah_halaman_dan_parameter.html)

---

### 📌 Slide 13: Navigasi Alami: Komponen ion-back-button & Kewajiban default-href
* **Sub-CPMK:** Mengimplementasikan tombol kembali otomatis `<ion-back-button>` dan mencegah aplikasi buntu dengan `default-href`.
* **Narasi Dosen:**  
  *"Di smartphone, tombol panah kembali pada toolbar atas adalah komponen navigasi paling vital. Ionic menyediakannya lewat `<ion-back-button>`. Namun ada jebakan besar: jika mahasiswa membuka link langsung dari pesan WhatsApp tanpa membuka beranda dulu, stack riwayatnya kosong! Di sinilah atribut `default-href='/home'` menjadi penyelamat agar pengguna tidak terjebak di layar buntu!"*
* **Poin Kunci:**
  * Terletak di dalam `<ion-buttons slot="start">` pada toolbar.
  * Tampil otomatis hanya jika ada tumpukan halaman sebelumnya.
  * Atribut `default-href` memberikan rute alternatif mundur jika riwayat kosong.
* **Tautan Kode Mandiri:**  
  👉 [`slide_13_tombol_kembali_back_button.html`](../contoh_kode_program/sesi_04_ionic_dasar_navigasi/slide_13_tombol_kembali_back_button.html)

---

### 📌 Slide 14: Siklus Hidup Masuk: ionViewWillEnter vs ionViewDidEnter
* **Sub-CPMK:** Menganalisis perbedaan eksekusi antara `onMounted()` Vue murni dan lifecycle hook masuk milik Ionic.
* **Narasi Dosen:**  
  *"Banyak mahasiswa bertanya: 'Pak Anton, mengapa saat saya edit profil lalu kembali ke halaman beranda, nama saya tidak berubah? Padahal saya sudah memanggil fungsi load di onMounted()!' Jawabannya sederhana: karena halaman beranda tersimpan di memori stack, onMounted() hanya berjalan satu kali saja saat aplikasi pertama dibuka! Untuk mengambil data terbaru setiap kali layar dikunjungi, Anda wajib menggunakan onIonViewWillEnter!"*
* **Poin Kunci:**
  * `onMounted()`: Hanya berjalan 1x saat komponen pertama kali dibuat ke DOM.
  * `onIonViewWillEnter()`: Terpanggil SETIAP KALI halaman akan tampil (sebelum animasi).
  * `onIonViewDidEnter()`: Terpanggil tepat setelah animasi transisi layar selesai.
* **Tautan Kode Mandiri:**  
  👉 [`slide_14_siklus_hidup_masuk_halaman.html`](../contoh_kode_program/sesi_04_ionic_dasar_navigasi/slide_14_siklus_hidup_masuk_halaman.html)

---

### 📌 Slide 15: Siklus Hidup Keluar: ionViewWillLeave vs ionViewDidLeave
* **Sub-CPMK:** Mengendalikan penghentian proses latar belakang (*background tasks*) guna mencegah kebocoran memori (*memory leak*).
* **Narasi Dosen:**  
  *"Smartphone memiliki daya baterai dan kapasitas memori yang terbatas. Jika Anda menyalakan timer interval ujian atau pemantauan lokasi GPS di sebuah halaman, proses itu TIDAK AKAN MATI saat pengguna membuka halaman lain karena komponennya tidak di-unmount! Anda wajib mematikan timer tersebut di dalam hook onIonViewWillLeave demi menghemat baterai perangkat mahasiswa!"*
* **Poin Kunci:**
  * `onUnmounted()` tidak terpanggil saat halaman ditumpuk (*pushed*).
  * `onIonViewWillLeave()`: Momen terbaik untuk mematikan `setInterval`, WebSocket, atau audio.
  * `onIonViewDidLeave()`: Terpanggil setelah halaman sepenuhnya tertutup di latar belakang.
* **Tautan Kode Mandiri:**  
  👉 [`slide_15_siklus_hidup_keluar_halaman.html`](../contoh_kode_program/sesi_04_ionic_dasar_navigasi/slide_15_siklus_hidup_keluar_halaman.html)

---

### 📌 Slide 16: Panduan Pemecahan Masalah (Troubleshooting) Routing & Komponen Ionic
* **Sub-CPMK:** Mendiagnosis dan memperbaiki galat umum perutean hybrid, layar putih kosong, dan lupa import komponen.
* **Narasi Dosen:**  
  *"Saat pertama kali memprogram dengan Ionic, jangan panik jika layar tiba-tiba kosong atau tombol tampil seperti teks polos tanpa warna. Berkas panduan troubleshooting ini merangkum 5 penyebab paling sering terjadi di laboratorium: mulai dari lupa membungkus template dengan `<ion-page>`, salah memakai router-view standar, hingga kelalaian menyertakan paket CSS resmi Ionic."*
* **Poin Kunci:**
  * Solusi Layar Putih: Verifikasi tag `<ion-page>` dan `<ion-content>`.
  * Solusi Komponen Polos: Pastikan paket CSS bundle `@ionic/vue/css/core.css` diimpor.
  * Solusi Navigasi Rusak: Hindari `window.location.href`, selalu gunakan `router.push()`.
* **Tautan Kode Mandiri:**  
  👉 [`slide_16_troubleshooting_routing_ionic.md`](../contoh_kode_program/sesi_04_ionic_dasar_navigasi/slide_16_troubleshooting_routing_ionic.md)

---

### 📌 Slide 17: MASTER SOLUSI LAB QUEST 04: Aplikasi Portal Modul BMP UT Multi-Halaman
* **Sub-CPMK:** Mengintegrasikan seluruh komponen antarmuka, perutean tumpukan, dan siklus hidup dalam satu aplikasi terpadu.
* **Narasi Dosen:**  
  *"Mari kita satukan seluruh pemahaman hari ini ke dalam Master Solusi Lab Quest 04: Aplikasi Portal Modul BMP Universitas Terbuka! Aplikasi ini menghadirkan simulator smartphone lengkap: halaman katalog dengan filter chip, transisi menuju halaman rincian dengan parameter kode modul, tombol kembali alami, fitur bookmark, serta terminal pemantau lifecycle yang mencatat perpindahan hook secara real-time!"*
* **Poin Kunci:**
  * Arsitektur multi-halaman mobile yang responsif.
  * Interaksi tombol bookmark reaktif dan penampil daftar kegiatan belajar (KB).
  * Terminal visual pencatat eksekusi hook `ionViewWillEnter` dan `ionViewWillLeave`.
* **Tautan Kode Mandiri:**  
  👉 [`slide_17_lab_quest_04_portal_modul_ut.html`](../contoh_kode_program/sesi_04_ionic_dasar_navigasi/slide_17_lab_quest_04_portal_modul_ut.html)

---

### 📌 Slide 18: Jembatan Menuju Sesi 05 & Pengarahan Asesmen TUGAS TUTORIAL 2
* **Sub-CPMK:** Menghubungkan capaian Sesi 04 menuju materi tata letak grid, formulir validasi reaktif, dan orientasi Tugas Tutorial 2.
* **Narasi Dosen:**  
  *"Luar biasa pencapaian Anda hari ini! Dengan menguasai navigasi mobile dan komponen Ionic dasar, Anda kini telah memiliki pondasi seorang Mobile Engineer sejati. Di Sesi 05 mendatang, kita akan mempelajari sistem grid 12-kolom, validasi formulir masukan NIM dan surel dengan Regex, dynamic dark mode, dan yang terpenting: pembukaan TUGAS TUTORIAL 2 berbobot 20%! Persiapkan diri Anda dengan mempraktikkan kode sesi ini!"*
* **Poin Kunci:**
  * Materi Sesi 05: Responsive 12-Grid (`ion-grid`), Form Controls (`ion-input`, `ion-select`), Validasi Regex.
  * Pengumuman Tugas Tutorial 2: Studi kasus aplikasi formulir registrasi & kalkulasi akademik.
* **Tautan Kode Mandiri:**  
  👉 [`slide_18_preview_sesi_05_layout_grid_form.html`](../contoh_kode_program/sesi_04_ionic_dasar_navigasi/slide_18_preview_sesi_05_layout_grid_form.html)
