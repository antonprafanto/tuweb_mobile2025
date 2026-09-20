# 📱 NASKAH & SLIDE SESI 07: REST API, STORAGE, & TUGAS TUTORIAL 3
## Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak (STSI4303 / MSIM4401)
### Program Studi: S1 Sistem Informasi & S1 Informatika — Universitas Terbuka
### Dosen Pengampu: Anton Prafanto, S.Kom., M.T.
### Modul Acuan BMP: Modul 8 & 9 (MSIM4401/STSI4303)

---

## 🗺️ Gambaran Umum Sesi
Sesi ketujuh ini merupakan **tonggak evaluasi tutorial ketiga (Milestone 3: TUGAS TUTORIAL 3)** yang berbobot **20%** dari total nilai Tutorial Online (Tuton) di Universitas Terbuka. Sesi ini mematangkan kemampuan mahasiswa dalam mengembangkan aplikasi mobile terintegrasi yang sesungguhnya (*full-stack client mobile*). Pembahasan mencakup prinsip komunikasi data asinkron via Asynchronous REST API, eksekusi HTTP modern dengan `fetch()` dan `async/await`, penanganan status pemuatan data yang ramah pengguna menggunakan spinner dan `<ion-skeleton-text>` shimmer, live demo konsumsi API publik cuaca Open-Meteo tanpa API key, komparasi spektrum penyimpanan data lokal (RAM, LocalStorage, IndexedDB, SQLite, Capacitor Preferences), operasi CRUD penyimpanan persisten, serialisasi array objek via `JSON.stringify` dan `JSON.parse`, pola arsitektur *Offline-First* (Cache-First vs Network-First) agar aplikasi tetap tangguh saat mahasiswa berada di pelosok tanpa sinyal, integrasi sensor hardware Geolocation GPS dan Camera Capacitor Plugins, validasi radius presensi kampus via Rumus Haversine, deteksi status jaringan real-time via `@capacitor/network`, arsitektur Service Pattern (`studyTrackerService.ts`), serta keamanan token otentikasi JWT.

Sesi ini ditutup dengan pembedahan menyeluruh soal, rubrik evaluasi, dan master solusi resmi **TUGAS TUTORIAL 3: Aplikasi UT Study Tracker & Presensi Belajar Mobile**.

---

## 📊 Daftar 18 Slide Pembahasan & Berkas Kode Mandiri

### 📌 Slide 01: Orientasi Sesi 07, Peta Sub-CPMK 7 & Pembukaan TUGAS TUTORIAL 3
* **Sub-CPMK:** Memahami keterkaitan kompetensi integrasi data cloud, penyimpanan lokal, dan pembukaan evaluasi Tugas Tutorial 3.
* **Narasi Dosen:**  
  *"Selamat berjumpa kembali rekan-rekan mahasiswa FST Universitas Terbuka di Sesi 07! Hari ini kita mencapai tonggak evaluasi tutorial terakhir sebelum Ujian Akhir Semester: TUGAS TUTORIAL 3 resmi dibuka dengan bobot 20% nilai! Di sesi ini, kita merakit seluruh ilmu yang telah kita pelajari sejak Sesi 01 hingga 06: menghubungkan aplikasi ke server cloud via REST API, menyimpan data secara mandiri agar tidak hilang saat offline, dan mengaktifkan sensor fisik smartphone seperti GPS dan kamera. Mari kita maksimalkan sesi penugasan ini!"*
* **Poin Kunci:**
  * Tugas Tutorial 3 berdurasi 2 pekan di LMS Tuton UT.
  * Kasus Proyek: Aplikasi UT Study Tracker & Presensi Belajar Mobile.
  * Tagihan: Laporan PDF, Tautan Repositori GitHub, dan Video Demo YouTube (Unlisted).
* **Tautan Kode Mandiri:**  
  👉 [`slide_01_orientasi_sesi_dan_tugas_3.html`](../contoh_kode_program/sesi_07_api_storage_plugins/slide_01_orientasi_sesi_dan_tugas_3.html)

---

### 📌 Slide 02: Konsep REST API: Protokol HTTP, JSON & Status Code
* **Sub-CPMK:** Menganalisis arsitektur pertukaran data client-server stateless berbasis REST dan format JSON.
* **Narasi Dosen:**  
  *"Smartphone Anda tidak menyimpan seluruh database kampus di dalam memorinya. Ketika Anda membuka jadwal kuliah atau mengirim tugas, aplikasi mengirimkan permintaan HTTP ke server cloud UT. Inilah arsitektur REST API. Ada 4 kata kerja utama: GET untuk mengambil data, POST untuk mengirim data baru, PUT untuk memperbarui, dan DELETE untuk menghapus. Respon yang dikirim server dibungkus dalam format universal JSON disertai kode status HTTP, seperti 200 OK jika sukses, 404 jika tidak ditemukan, atau 500 jika server sedang bermasalah."*
* **Poin Kunci:**
  * Client-Server & Stateless Architecture.
  * 4 HTTP Methods: GET, POST, PUT, DELETE.
  * Struktur Status Codes: 2xx (Success), 4xx (Client Error), 5xx (Server Error).
* **Tautan Kode Mandiri:**  
  👉 [`slide_02_konsep_rest_api_asinkron.html`](../contoh_kode_program/sesi_07_api_storage_plugins/slide_02_konsep_rest_api_asinkron.html)

---

### 📌 Slide 03: Pemanggilan Data Asinkron: `fetch()` & `async/await`
* **Sub-CPMK:** Menerapkan pemanggilan HTTP asinkron modern dengan struktur penanganan error `try-catch-finally`.
* **Narasi Dosen:**  
  *"Dalam pemrograman mobile, jangan pernah memblokir thread antarmuka saat menunggu balasan server. Kita menggunakan kombinasi `async/await` dan fungsi bawaan `fetch()`. Pola terbaiknya selalu menggunakan tiga blok pertahanan: `try` untuk mengeksekusi request dan mem-parsing JSON, `catch` untuk menangkap galat jaringan, dan `finally` untuk mematikan status loading. Ingat jebakan klasik: `fetch()` tidak me-reject Promise jika menerima error 404 atau 500, jadi Anda wajib memeriksa kondisi `if (!response.ok)` secara manual!"*
* **Poin Kunci:**
  * Sintaks Modern: `const res = await fetch(url)`.
  * Verifikasi Wajib: `if (!res.ok) throw new Error(...)`.
  * Blok `finally`: Menjamin spinner pemuatan data pasti berhenti berputar.
* **Tautan Kode Mandiri:**  
  👉 [`slide_03_fetch_api_dan_async_await.html`](../contoh_kode_program/sesi_07_api_storage_plugins/slide_03_fetch_api_dan_async_await.html)

---

### 📌 Slide 04: Mengelola UX Pemuatan: Spinner & `ion-skeleton-text`
* **Sub-CPMK:** Mengimplementasikan indikator pemuatan data responsif dan animasi skeleton placeholder shimmer.
* **Narasi Dosen:**  
  *"Pengguna smartphone sangat tidak sabar saat menunggu data dimuat. Jika layar ponsel dibiarkan putih membeku tanpa animasi, mereka akan mengira aplikasi hang dan menutup paksa aplikasi. Ionic menyediakan komponen canggih: `<ion-skeleton-text animated>`. Komponen ini menampilkan kerangka abu-abu berdenyut (*shimmer*) yang menyerupai tata letak kartu asli. Riset membuktikan pengguna merasa waktu tunggu 50% lebih singkat ketika melihat skeleton dibanding spinner biasa!"*
* **Poin Kunci:**
  * Dampak Psikologis Blank Screen pada Retensi Pengguna Mobile.
  * `<ion-spinner>`: Indikator putar visual untuk interaksi instan.
  * `<ion-skeleton-text animated>`: Efek placeholder kartu masa kini.
* **Tautan Kode Mandiri:**  
  👉 [`slide_04_indikator_pemuatan_loading.html`](../contoh_kode_program/sesi_07_api_storage_plugins/slide_04_indikator_pemuatan_loading.html)

---

### 📌 Slide 05: Integrasi Data Publik: Cuaca Sentra Layanan UT Daerah
* **Sub-CPMK:** Menghubungkan aplikasi dengan endpoint live REST API eksternal (Open-Meteo) tanpa kerumitan API key.
* **Narasi Dosen:**  
  *"Untuk memenuhi Kriteria 1 Tugas Tutorial 3, kita membutuhkan REST API nyata yang bebas biaya dan tidak ribet. Kami memilih Open-Meteo API: layanan ramalan cuaca global yang 100% terbuka tanpa perlu mendaftar token API key! Anda cukup mengirimkan parameter koordinat lintang dan bujur kampus UT daerah Anda, dan server akan membalas dengan suhu udara, kecepatan angin, dan kode cuaca secara real-time. Ini adalah contoh riil integrasi data cloud yang sangat elegan!"*
* **Poin Kunci:**
  * Konsumsi Endpoint: `https://api.open-meteo.com/v1/forecast?latitude=...&longitude=...&current_weather=true`.
  * Parsing Objek Suhu (°C), Kecepatan Angin (km/h), dan Kode Kondisi Cuaca.
  * Memenuhi Kriteria 1 (Bobot 30 Poin) Tugas Tutorial 3.
* **Tautan Kode Mandiri:**  
  👉 [`slide_05_integrasi_live_api_cuaca.html`](../contoh_kode_program/sesi_07_api_storage_plugins/slide_05_integrasi_live_api_cuaca.html)

---

### 📌 Slide 06: Spektrum Opsi Penyimpanan Data Mobile
* **Sub-CPMK:** Membandingkan kelebihan dan batasan 5 media penyimpanan data lokal pada perangkat bergerak.
* **Narasi Dosen:**  
  *"Di mana kita harus menyimpan data mahasiswa di smartphone? Kita memiliki 5 opsi spektrum: Variabel RAM Vue sangat cepat tetapi lenyap begitu aplikasi di-reload. Web LocalStorage sangat mudah tetapi hanya menampung data hingga 5MB. IndexedDB mampu menampung ratusan megabyte secara noSQL. Capacitor Preferences menggunakan SharedPreferences bawaan Android yang aman dan asinkron. Dan jika Anda membutuhkan tabel relasional dengan query SQL murni, pilihlah SQLite plugin. Untuk Tugas Tutorial 3, LocalStorage atau Capacitor Preferences adalah pilihan yang paling pas!"*
* **Poin Kunci:**
  * Memori RAM (Ephemeral) vs Storage Fisik (Persistent).
  * Karakteristik LocalStorage (~5MB, Sinkron) vs Capacitor Preferences (Asinkron).
  * Penggunaan Tingkat Lanjut: IndexedDB & SQLite Database.
* **Tautan Kode Mandiri:**  
  👉 [`slide_06_komparasi_opsi_penyimpanan_mobile.html`](../contoh_kode_program/sesi_07_api_storage_plugins/slide_06_komparasi_opsi_penyimpanan_mobile.html)

---

### 📌 Slide 07: Operasi Key-Value dengan `@capacitor/preferences`
* **Sub-CPMK:** Mengeksekusi operasi simpan, baca, dan hapus data lokal persisten menggunakan Capacitor Preferences.
* **Narasi Dosen:**  
  *"Plugin `@capacitor/preferences` adalah standar resmi Ionic untuk mengelola konfigurasi lokal. Mengapa lebih unggul dari LocalStorage biasa? Karena Capacitor Preferences bekerja secara asinkron berbasis Promise dan langsung memetakan datanya ke XML SharedPreferences di Android atau UserDefaults di iOS. Perintah dasarnya sangat ringkas: `Preferences.set()` untuk menyimpan, `Preferences.get()` untuk membaca, dan `Preferences.remove()` untuk menghapus kunci tertentu."*
* **Poin Kunci:**
  * 4 Fungsi Inti: `set()`, `get()`, `remove()`, `clear()`.
  * Integrasi Native: Berkas XML SharedPreferences dalam direktori privat aplikasi Android.
  * Asynchronous Non-blocking I/O.
* **Tautan Kode Mandiri:**  
  👉 [`slide_07_capacitor_preferences_kv.html`](../contoh_kode_program/sesi_07_api_storage_plugins/slide_07_capacitor_preferences_kv.html)

---

### 📌 Slide 08: Serialisasi Array Objek: `JSON.stringify()` & `JSON.parse()`
* **Sub-CPMK:** Mengelola struktur data koleksi kompleks pada media penyimpanan berbasis teks.
* **Narasi Dosen:**  
  *"Penyimpanan lokal di smartphone hanya memahami tipe data teks string. Jika Anda mencoba menyimpan array daftar sesi belajar mahasiswa secara langsung, datanya akan rusak menjadi teks `[object Object]`! Solusinya adalah serialisasi: gunakan `JSON.stringify()` saat hendak menyimpan data ke storage, dan gunakan `JSON.parse()` saat membaca kembali string tersebut menjadi array objek JavaScript. Selalu sertakan penanganan try-catch agar aplikasi tidak mogok jika berkas penyimpanan rusak!"*
* **Poin Kunci:**
  * Serialisasi: Objek JavaScript $\rightarrow$ String JSON (`JSON.stringify`).
  * Deserialisasi: String JSON $\rightarrow$ Objek JavaScript (`JSON.parse`).
  * Pola Pertahanan Defensive Coding terhadap Data Storage Corrupt.
* **Tautan Kode Mandiri:**  
  👉 [`slide_08_serialisasi_objek_json_storage.html`](../contoh_kode_program/sesi_07_api_storage_plugins/slide_08_serialisasi_objek_json_storage.html)

---

### 📌 Slide 09: Arsitektur Offline-First & Strategi Caching
* **Sub-CPMK:** Merancang arsitektur aplikasi tangguh offline dengan strategi Cache-First dan Network-First.
* **Narasi Dosen:**  
  *"Banyak mahasiswa UT belajar di pelosok daerah atau saat bepergian dengan sinyal internet yang tidak stabil. Aplikasi yang hebat tidak boleh menyerah dan menampilkan dinosaurus offline! Terapkan prinsip Offline-First: simpan salinan data terakhir ke penyimpanan lokal. Ketika mahasiswa membuka aplikasi tanpa internet, aplikasi tetap menyajikan data cache lokal disertai label ramah 'Mode Offline'. Dua strategi yang umum digunakan adalah Network-First (coba server dulu, jika gagal ambil cache) dan Cache-First (tampilkan cache seketika, sinkronisasi diam-diam di latar belakang)."*
* **Poin Kunci:**
  * Urgensi Ketahanan Offline bagi Mahasiswa UT di Wilayah 3T.
  * Strategi Network-First: Prioritas data teranyar dengan fallback cache lokal.
  * Strategi Cache-First (Stale-While-Revalidate): Respons kilat seketika (0 ms).
* **Tautan Kode Mandiri:**  
  👉 [`slide_09_arsitektur_offline_first_caching.html`](../contoh_kode_program/sesi_07_api_storage_plugins/slide_09_arsitektur_offline_first_caching.html)

---

### 📌 Slide 10: Integrasi Sensor GPS dengan `@capacitor/geolocation`
* **Sub-CPMK:** Mengakses koordinat presisi lintang dan bujur menggunakan plugin resmi Geolocation.
* **Narasi Dosen:**  
  *"Mari kita hubungkan aplikasi kita dengan perangkat keras ponsel! Plugin `@capacitor/geolocation` memberikan akses ke sinyal satelit GPS smartphone. Cukup dengan satu baris kode: `await Geolocation.getCurrentPosition({ enableHighAccuracy: true })`, aplikasi akan menerima data koordinat lintang (*latitude*), bujur (*longitude*), dan radius akurasi dalam meter. Di slide ini kita juga menyiapkan fallback peramban agar Anda bisa mengujinya langsung di laptop!"*
* **Poin Kunci:**
  * Instalasi Plugin: `@capacitor/geolocation`.
  * Objek Respon Posisi: `latitude`, `longitude`, `accuracy`, `timestamp`.
  * Integrasi Tautan Langsung ke Peta Google Maps.
* **Tautan Kode Mandiri:**  
  👉 [`slide_10_plugin_geolocation_koordinat.html`](../contoh_kode_program/sesi_07_api_storage_plugins/slide_10_plugin_geolocation_koordinat.html)

---

### 📌 Slide 11: Validasi Presensi Geofencing via Rumus Haversine
* **Sub-CPMK:** Menerapkan formula matematis Haversine untuk memvalidasi radius jarak presensi ujian/tatap muka.
* **Narasi Dosen:**  
  *"Bagaimana cara memastikan mahasiswa benar-benar hadir di ruang ujian UT dan bukan titip absen dari tempat tidur? Kita menggunakan teknik Geofencing! Karena bumi berbentuk bulat, jarak antara koordinat GPS mahasiswa dan gedung kampus dihitung menggunakan Rumus Haversine. Jika jarak yang dihitung kurang dari 200 meter, presensi disetujui. Namun jika jaraknya melebihi radius batas, sistem akan otomatis menolak presensi tersebut. Ini adalah logika kecerdasan spasial yang sangat aplikatif di dunia industri!"*
* **Poin Kunci:**
  * Konsep Great-Circle Distance pada Permukaan Bola Bumi.
  * Implementasi Algoritma Matematika Haversine dalam JavaScript.
  * Penegakan Radius Batas Toleransi Lokasi Presensi Mahasiswa.
* **Tautan Kode Mandiri:**  
  👉 [`slide_11_geofencing_validasi_lokasi_ut.html`](../contoh_kode_program/sesi_07_api_storage_plugins/slide_11_geofencing_validasi_lokasi_ut.html)

---

### 📌 Slide 12: Integrasi Kamera Perangkat dengan `@capacitor/camera`
* **Sub-CPMK:** Menangkap foto bukti kegiatan belajar mandiri menggunakan antarmuka asinkron Capacitor Camera.
* **Narasi Dosen:**  
  *"Bukti fisik kegiatan belajar mandiri dapat diverifikasi melalui foto modul BMP atau swafoto mahasiswa. Dengan `@capacitor/camera`, memotret semudah memanggil fungsi `Camera.getPhoto()`. Anda dapat memilih format keluaran `DataUrl` (string teks Base64) yang sangat praktis jika ingin disimpan langsung ke LocalStorage atau dikirim via JSON REST API. Di berkas interaktif ini, kami juga menyertakan input pemilih berkas gambar sebagai fallback peramban desktop!"*
* **Poin Kunci:**
  * Format Hasil Foto: `CameraResultType.Uri` vs `CameraResultType.DataUrl` (Base64).
  * Pengaturan Mutu Gambar: Parameter `quality: 85` untuk menghemat bandwidth.
  * Preview Thumbnail Gambar Reaktif pada Kartu Antarmuka.
* **Tautan Kode Mandiri:**  
  👉 [`slide_12_plugin_camera_capture_photo.html`](../contoh_kode_program/sesi_07_api_storage_plugins/slide_12_plugin_camera_capture_photo.html)

---

### 📌 Slide 13: Deteksi Status Jaringan dengan `@capacitor/network`
* **Sub-CPMK:** Memasang pemantau (listener) status konektivitas internet untuk sinkronisasi otomatis.
* **Narasi Dosen:**  
  *"Aplikasi mobile yang cerdas harus peka terhadap status konektivitasnya. Dengan plugin `@capacitor/network`, kita dapat memasang listener `networkStatusChange`. Begitu ponsel mendeteksi sinyal internet kembali aktif setelah sebelumnya offline, aplikasi secara otomatis mengunggah seluruh antrian catatan belajar yang tertunda ke server cloud UT. Ini adalah pengalaman pengguna tingkat tinggi (*seamless synchronization*)!"*
* **Poin Kunci:**
  * Deteksi Status: Properti `connected` (boolean) & `connectionType` (wifi/cellular/none).
  * Event Listener Real-Time: `Network.addListener('networkStatusChange', ...)`.
  * Konsep Offline Sync Queue: Pengunggahan otomatis data tertunda.
* **Tautan Kode Mandiri:**  
  👉 [`slide_13_plugin_network_status_detection.html`](../contoh_kode_program/sesi_07_api_storage_plugins/slide_13_plugin_network_status_detection.html)

---

### 📌 Slide 14: Arsitektur Bersih: Pemisahan Logika via Service Layer
* **Sub-CPMK:** Menerapkan Service Pattern untuk memisahkan urusan UI dengan logika akses data REST dan Storage.
* **Narasi Dosen:**  
  *"Jangan pernah menumpuk kode pemanggilan API, query storage, dan logika parsing di dalam komponen template Vue Anda! Praktik tersebut membuat kode Anda menjadi 'spaghetti' yang sulit dirawat. Pisahkan kode ke dalam berkas Service terpusat, misalnya `studyTrackerService.ts`. Komponen Vue Anda cukup memanggil `StudyTrackerService.getAll()` atau `save()`. Jika suatu saat endpoint server berubah, Anda hanya perlu mengedit satu berkas saja tanpa menyentuh tampilan antarmuka!"*
* **Poin Kunci:**
  * Prinsip Separation of Concerns (Pemisahan Tanggung Jawab).
  * Lapisan Presentasi (Vue SFC) vs Lapisan Layanan Bisnis (Service Layer).
  * Kemudahan Pemeliharaan (*Maintainability*) dan Pengujian (*Unit Testing*).
* **Tautan Kode Mandiri:**  
  👉 [`slide_14_clean_architecture_service_pattern.html`](../contoh_kode_program/sesi_07_api_storage_plugins/slide_14_clean_architecture_service_pattern.html)

---

### 📌 Slide 15: Keamanan API: Manajemen Token JWT & Header Authorization
* **Sub-CPMK:** Mengamankan transaksi data private mahasiswa menggunakan JSON Web Token (JWT) dan Header Bearer.
* **Narasi Dosen:**  
  *"Saat mengakses data sensitif seperti riwayat nilai atau presensi pribadi, server UT membutuhkan bukti keabsahan identitas Anda. Server menerbitkan tiket digital bernama JSON Web Token (JWT). Token ini kita simpan secara aman di memori lokal dan kita sertakan di setiap permintaan HTTP melalui header `Authorization: Bearer <token>`. Waspadai aturan krusial ini: bagian payload JWT mudah dibaca siapa saja, jadi jangan pernah menyimpan password plaintext di dalamnya!"*
* **Poin Kunci:**
  * Anatomi JWT: Header, Payload (Klaim Identitas), dan Signature Kriptografi.
  * Header Standar HTTP: `Authorization: Bearer <TOKEN>`.
  * Penanganan Status 401 Unauthorized: Pengalihan otomatis ke form login.
* **Tautan Kode Mandiri:**  
  👉 [`slide_15_keamanan_token_jwt_dan_interceptor.html`](../contoh_kode_program/sesi_07_api_storage_plugins/slide_15_keamanan_token_jwt_dan_interceptor.html)

---

### 📌 Slide 16: Pedoman & Rubrik Penilaian Resmi TUGAS TUTORIAL 3 (Skala 0–100)
* **Sub-CPMK:** Membedah 4 kriteria evaluasi praktikum Tugas Tutorial 3 untuk meraih skor maksimal 100.
* **Narasi Dosen:**  
  *"Sebelum mulai mengoding tugas, mari kita bedah bersama rubrik evaluasi resmi Tugas Tutorial 3 berbobot 20% nilai Tuton. Ada 4 kriteria penilaian: Kriteria 1 berbobot 30 poin untuk konsumsi REST API asinkron dengan loading indicator; Kriteria 2 berbobot 25 poin untuk operasi simpan, baca, dan hapus data lokal persisten; Kriteria 3 berbobot 25 poin untuk integrasi plugin Geolocation atau Kamera; dan Kriteria 4 berbobot 20 poin untuk kerapian kode serta video demo YouTube. Pelajari rubrik ini dengan cermat!"*
* **Poin Kunci:**
  * Kriteria 1 (30 Poin): Asynchronous REST API Data Fetching.
  * Kriteria 2 (25 Poin): CRUD Offline Storage Persistence.
  * Kriteria 3 (25 Poin): Hardware Plugins (Geolocation / Camera).
  * Kriteria 4 (20 Poin): Clean Code, Try-Catch Error Handling & Video YouTube Unlisted.
* **Tautan Panduan:**  
  👉 [`slide_16_rubrik_tugas_tutorial_3.md`](../contoh_kode_program/sesi_07_api_storage_plugins/slide_16_rubrik_tugas_tutorial_3.md)

---

### 📌 Slide 17: Master Solusi Resmi Tugas Tutorial 3: UT Study Tracker & Presensi Belajar
* **Sub-CPMK:** Menelaah dan menguji arsitektur aplikasi mobile lengkap yang mengintegrasikan REST API, Storage, GPS, dan Kamera.
* **Narasi Dosen:**  
  *"Inilah karya penutup praktikum kita: Master Solusi Resmi Tugas Tutorial 3 'UT Study Tracker & Presensi Belajar Mobile'. Aplikasi ini menyatukan seluruh pilar yang telah kita pelajari: memuat data cuaca kampus terkini via live REST API Open-Meteo, mengunci titik koordinat GPS mahasiswa, melampirkan foto bukti modul BMP, menghitung total jam belajar, serta menyimpan seluruh riwayat secara permanen di local storage sehingga tidak hilang saat peramban direfresh. Berkas ini adalah rujukan skor 100 yang siap Anda jadikan inspirasi!"*
* **Poin Kunci:**
  * Arsitektur Aplikasi Terintegrasi Skala Penuh (*Full Feature*).
  * Live REST API Cuaca + Penyimpanan Persisten CRUD + Geolocation GPS + Lampiran Foto Kamera.
  * Dasbor Statistik Total Jam Belajar & Filter Catatan.
  * Rujukan Resmi Berbobot Nilai 100.
* **Tautan Kode Mandiri:**  
  👉 [`slide_17_solusi_tugas_3_study_tracker.html`](../contoh_kode_program/sesi_07_api_storage_plugins/slide_17_solusi_tugas_3_study_tracker.html)

---

### 📌 Slide 18: Jembatan Menuju Sesi 08: Rilis APK Stand-alone & Sukses UAS
* **Sub-CPMK:** Mengantisipasi finalisasi rilis paket APK produksi mandiri, pembuatan keystore digital, dan persiapan UAS.
* **Narasi Dosen:**  
  *"Selamat atas pencapaian luar biasa rekan-rekan mahasiswa FST Universitas Terbuka! Anda telah menaklukkan seluruh modul materi teknis mobile development dengan gemilang. Di Sesi 08 pekan depan—sesi terakhir perkuliahan kita—kita akan melangkah ke tahap akhir: membuat Keystore digital mandiri, menandatangani kode (*code signing*), dan mengompilasi APK Release mandiri yang dapat langsung dikirim lewat WhatsApp dan diinstal di ponsel siapa pun tanpa bantuan PC! Tidak hanya itu, kami juga telah menyiapkan pembahasan 50 Bank Soal UAS STSI4303 untuk mengantar Anda meraih nilai A mutlak. Sampai jumpa di Sesi 08 penutup!"*
* **Poin Kunci:**
  * Agenda Sesi 08: Digital Keystore, APK Stand-alone Release, Minifikasi ProGuard/R8.
  * Pembahasan Akbar: 50 Bank Soal Komprehensif Ujian Akhir Semester (UAS).
  * Penegasan Penyelesaian Seluruh Tagihan Tugas Tutorial (Tugas 1, 2, dan 3).
* **Tautan Kode Mandiri:**  
  👉 [`slide_18_preview_sesi_08_build_apk_uas.html`](../contoh_kode_program/sesi_07_api_storage_plugins/slide_18_preview_sesi_08_build_apk_uas.html)
