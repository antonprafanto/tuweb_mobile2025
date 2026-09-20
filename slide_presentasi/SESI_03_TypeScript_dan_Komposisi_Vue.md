# 📱 NASKAH & SLIDE SESI 03: KEAMANAN TIPE DATA TYPESCRIPT & VUE COMPOSITION API (TUGAS TUTORIAL 1)
## Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak (STSI4303 / MSIM4401)
### Program Studi: S1 Sistem Informasi & S1 Informatika — Universitas Terbuka
### Dosen Pengampu: Anton Prafanto, S.Kom., M.T.
### Modul Acuan BMP: Modul 3 (MSIM4401/STSI4303)

---

## 🗺️ Gambaran Umum Sesi
Sesi ketiga ini merupakan **titik tolak evaluasi mandiri pertama (Milestone 1)** dalam rangkaian 8 sesi tutorial perkuliahan STSI4303. Mahasiswa mempelajari **TypeScript** sebagai standar industri modern untuk mencegah galat runtime (*runtime errors* / *silent bugs*) pada smartphone. Materi memadukan TypeScript secara mendalam dengan **Vue 3 Composition API** (`<script setup lang="ts">`), mencakup pendefinisian tipe primitif, literal & union types, interface kontrak model data, generics pada koleksi array, typing pada fungsi, reaktivitas bertipe (`ref`, `reactive`, `computed`), hingga bedah tuntas kasus dan rubrik penilaian **TUGAS TUTORIAL 1 (Kalkulator Nilai Mata Kuliah & IPS Mahasiswa UT)**.

---

## 📊 Daftar 18 Slide Pembahasan & Berkas Kode Mandiri

### 📌 Slide 01: Orientasi Sesi 03, Peta Capaian & Tagihan TUGAS TUTORIAL 1
* **Sub-CPMK:** Memahami posisi kompetensi Sesi 03 serta rincian tagihan resmi Tugas Tutorial 1 (bobot penilaian terbesar di paruh pertama semester).
* **Narasi Dosen:**  
  *"Selamat berjumpa kembali rekan-rekan mahasiswa Universitas Terbuka! Hari ini kita memasuki Sesi 03, sebuah sesi yang sangat krusial. Selain memperdalam TypeScript untuk memperkuat fondasi kode kita, pada sesi ini resmi dibuka penugasan TUGAS TUTORIAL 1. Tugas ini berbobot 70% dari nilai tutorial (bersama Tugas 2 dan 3). Jangan khawatir, hari ini kita akan membedah seluruh model data dan master solusinya secara bertahap!"*
* **Poin Kunci:**
  * Komposisi Nilai: Tugas Tutorial 1 berdurasi 2 pekan di LMS.
  * Kewajiban menyertakan video demonstrasi aplikasi di YouTube (status unlisted, 3–5 menit).
* **Tautan Kode Mandiri:**  
  👉 [`slide_01_roadmap_sesi_dan_tugas_1.html`](../contoh_kode_program/sesi_03_typescript_vue/slide_01_roadmap_sesi_dan_tugas_1.html)

---

### 📌 Slide 02: Urgensi TypeScript: Menghabisi Bug Runtime Typo Sebelum Aplikasi Meluncur
* **Sub-CPMK:** Menganalisis kelemahan *dynamic typing* pada JavaScript murni dan membuktikan efektivitas *compile-time checking* TypeScript.
* **Narasi Dosen:**  
  *"Di smartphone pengguna, tidak ada hal yang lebih memalukan bagi software engineer selain aplikasi yang mendadak force close karena error `Cannot read properties of undefined`. Di JavaScript murni, jika Anda salah mengetik nama properti data mahasiswa, browser tidak akan memperingatkan Anda. TypeScript hadir sebagai 'polisi kode' cerdas yang memeriksa kesesuaian tipe sebelum kode sempat dikompilasi!"*
* **Poin Kunci:**
  * JavaScript: Menerima typo variabel secara diam-diam (*silent failure*), menghasilkan `undefined` / `NaN`.
  * TypeScript: Menolak kompilasi dan memberi tanda garis merah di VS Code saat terjadi ketidaksesuaian tipe.
* **Tautan Kode Mandiri:**  
  👉 [`slide_02_urgensi_typescript_mobile.html`](../contoh_kode_program/sesi_03_typescript_vue/slide_02_urgensi_typescript_mobile.html)

---

### 📌 Slide 03: Tipe Data Primitif & Bahaya Penggunaan Kata Kunci 'any'
* **Sub-CPMK:** Mendeklarasikan tipe data primitif dan menghindari anti-pattern penggunaan `any`.
* **Narasi Dosen:**  
  *"TypeScript menyediakan tipe dasar: `string`, `number`, dan `boolean`. Namun, banyak mahasiswa pemula tergoda menggunakan `let data: any` agar tidak repot saat muncul error. Ingat prinsip ini: memakai kata kunci `any` sama saja dengan membuang TypeScript ke tempat sampah! Jika tipe data memang belum pasti karena respons dari server eksternal, gunakanlah tipe `unknown` disertai pengecekan kondisi `typeof`."*
* **Poin Kunci:**
  * Primitif: `string` (teks), `number` (desimal & integer), `boolean` (true/false).
  * `any`: Mematikan seluruh proteksi sistem tipe (*type bypass*).
  * `unknown`: Alternatif aman untuk data mentah yang belum diverifikasi.
* **Tautan Kode Mandiri:**  
  👉 [`slide_03_tipe_primitif_dan_any_hazard.html`](../contoh_kode_program/sesi_03_typescript_vue/slide_03_tipe_primitif_dan_any_hazard.html)

---

### 📌 Slide 04: Union Types & Literal Types: Membatasi Nilai Sah secara Mutlak
* **Sub-CPMK:** Merancang tipe data kustom yang hanya mengizinkan himpunan nilai tertentu (*closed set*).
* **Narasi Dosen:**  
  *"Berapa banyak nilai huruf yang diakui di Universitas Terbuka? Hanya ada 5: A, B, C, D, dan E. Jika kita menggunakan tipe `string` biasa, pengguna bisa saja memasukkan 'A+', 'B minus', atau bahkan kata acak yang membuat kalkulasi IPS rusak. Dengan Literal Type `type NilaiHuruf = 'A' | 'B' | 'C' | 'D' | 'E'`, kita mengunci nilai variabel hanya pada 5 huruf tersebut!"*
* **Poin Kunci:**
  * Literal Types: Menggunakan nilai literal spesifik sebagai tipe data.
  * Union Operator (`|`): Menggabungkan beberapa kemungkinan nilai yang diizinkan.
  * Sangat ideal untuk status registrasi: `'Aktif' | 'Cuti' | 'Lulus'`.
* **Tautan Kode Mandiri:**  
  👉 [`slide_04_union_dan_literal_types.html`](../contoh_kode_program/sesi_03_typescript_vue/slide_04_union_dan_literal_types.html)

---

### 📌 Slide 05: Kontrak Data Resmi: Mendefinisikan Interface Model Mahasiswa & Mata Kuliah
* **Sub-CPMK:** Menyusun model data akademik terstandar menggunakan kata kunci `interface`.
* **Narasi Dosen:**  
  *"Sebuah aplikasi yang terawat wajib memiliki 'kontrak data' yang jelas. Di Sesi 03 ini, kita mendefinisikan berkas `slide_05_interface_model_mahasiswa.ts`. Berkas ini memuat model `MahasiswaUT` dan `MataKuliah`. Siapa pun developer yang membuat fitur baru di tim kita, wajib mengikuti bentuk interface ini!"*
* **Poin Kunci:**
  * `interface` adalah cetak biru objek yang dievaluasi saat waktu kompilasi tanpa menambah beban ukuran berkas akhir (zero runtime overhead).
  * Mendukung inheritance / ekstensi: `interface MahasiswaBeasiswa extends MahasiswaUT`.
* **Tautan Kode Mandiri:**  
  👉 [`slide_05_interface_model_mahasiswa.ts`](../contoh_kode_program/sesi_03_typescript_vue/slide_05_interface_model_mahasiswa.ts)

---

### 📌 Slide 06: Properti Opsional (?) dan Mutlak Tidak-Dapat-Diubah (readonly)
* **Sub-CPMK:** Mengamankan properti identitas dengan `readonly` dan menandai properti fleksibel dengan tanda tanya (`?`).
* **Narasi Dosen:**  
  *"NIM mahasiswa tidak boleh pernah berubah setelah pertama kali dibuat di sistem. Oleh karena itu, kita tandai dengan `readonly nim: string`. Jika ada baris kode yang mencoba mengubah `mhs.nim = '04123'`, TypeScript langsung menolaknya. Sebaliknya, properti seperti `emailKampus?: string` kita buat opsional karena mahasiswa baru semester 1 mungkin belum memiliki akun email kampus resmi."*
* **Poin Kunci:**
  * `readonly`: Mencegah *re-assignment* nilai setelah instansiasi.
  * `?` (Optional): Mengizinkan nilai properti bernilai `undefined`.
* **Tautan Kode Mandiri:**  
  👉 [`slide_06_optional_dan_readonly_properties.html`](../contoh_kode_program/sesi_03_typescript_vue/slide_06_optional_dan_readonly_properties.html)

---

### 📌 Slide 07: Generics pada Koleksi: Array&lt;T&gt; vs T[] untuk Manipulasi Aman
* **Sub-CPMK:** Mengelola himpunan objek majemuk dengan tipe koleksi generik.
* **Narasi Dosen:**  
  *"Saat mengelola keranjang mata kuliah di Tugas 1, kita memerlukan array yang berisi banyak objek `MataKuliah`. Menulis `Array<MataKuliah>` atau `MataKuliah[]` memastikan bahwa saat kita melakukan looping `reduce` untuk menghitung total SKS, editor VS Code sudah tahu persis bahwa setiap elemen memiliki properti `.sks` bertipe number!"*
* **Poin Kunci:**
  * Sintaks generik: `Array<T>` atau shorthand `T[]`.
  * Operasi array (`map`, `filter`, `reduce`) mendapatkan auto-complete penuh.
* **Tautan Kode Mandiri:**  
  👉 [`slide_07_generics_array_koleksi.html`](../contoh_kode_program/sesi_03_typescript_vue/slide_07_generics_array_koleksi.html)

---

### 📌 Slide 08: Anotasi Tipe pada Fungsi: Parameter Ketat & Return Type Eksplisit
* **Sub-CPMK:** Menerapkan anotasi tipe pada parameter input dan nilai kembalian fungsi kalkulasi.
* **Narasi Dosen:**  
  *"Fungsi kalkulasi nilai akademik adalah jantung dari aplikasi kita. Jangan biarkan parameter fungsi tanpa tipe. Perhatikan fungsi `function hitungMutu(sks: number, huruf: NilaiHuruf): number`. Dengan deklarasi ini, mustahil mahasiswa salah memasukkan urutan parameter atau mengembalikan teks alih-alih angka!"*
* **Poin Kunci:**
  * Anotasi parameter: `(a: number, b: string)`.
  * Return type: `: number` atau `: void` (jika tidak mengembalikan nilai).
* **Tautan Kode Mandiri:**  
  👉 [`slide_08_fungsi_type_annotation.html`](../contoh_kode_program/sesi_03_typescript_vue/slide_08_fungsi_type_annotation.html)

---

### 📌 Slide 09: Integrasi Vue 3 & TypeScript: &lt;script setup lang="ts"&gt;
* **Sub-CPMK:** Mengonfigurasi Single File Component Vue 3 menggunakan blok skrip TypeScript modern.
* **Narasi Dosen:**  
  *"Di Vue 3, menggunakan TypeScript sangat elegan. Cukup tambahkan atribut `lang="ts"` pada tag `<script setup>`, dan seketika seluruh variabel, computed property, dan method Anda berada di bawah perlindungan type checker TypeScript!"*
* **Poin Kunci:**
  * Sintaks ringkas tanpa *boilerplate code* Options API.
  * Tipe data diekspos secara otomatis ke template HTML.
* **Tautan Kode Mandiri:**  
  👉 [`slide_09_vue3_script_setup_lang_ts.html`](../contoh_kode_program/sesi_03_typescript_vue/slide_09_vue3_script_setup_lang_ts.html)

---

### 📌 Slide 10: Deklarasi Typing Reaktif: ref&lt;T&gt; vs reactive&lt;T&gt;
* **Sub-CPMK:** Memanfaatkan TypeScript Generics untuk mengunci tipe data pada state reaktif Vue.
* **Narasi Dosen:**  
  *"Bagaimana cara mengunci tipe data pada `ref`? Kita gunakan kurung sudut generik: `const targetIpk = ref<number>(3.75)`. Begitu pula saat data awalnya bernilai kosong: `const user = ref<MahasiswaUT | null>(null)`. Dengan pola ini, TypeScript akan mengingatkan kita untuk memeriksa apakah data `null` sebelum mengakses propertinya!"*
* **Poin Kunci:**
  * `ref<T>(initialValue)`.
  * Mendukung nullable type: `ref<T | null>(null)`.
* **Tautan Kode Mandiri:**  
  👉 [`slide_10_typing_ref_dan_reactive.html`](../contoh_kode_program/sesi_03_typescript_vue/slide_10_typing_ref_dan_reactive.html)

---

### 📌 Slide 11: Mengelola Array Koleksi Bertipe: ref&lt;MataKuliah[]&gt;([])
* **Sub-CPMK:** Mengelola mutasi data daftar nilai secara reaktif dan aman dari penyusupan tipe data asing.
* **Narasi Dosen:**  
  *"Di Tugas 1, kita akan sering melakukan operasi `push` dan `filter` pada daftar mata kuliah. Dengan deklarasi `const daftarNilai = ref<MataKuliah[]>([])`, Anda tidak akan bisa secara sengaja memasukkan objek asing yang tidak memiliki properti SKS atau kode mata kuliah."*
* **Poin Kunci:**
  * Array reaktif bertipe objek interface.
  * Metode mutasi `push()`, `splice()`, dan `filter()` mempertahankan kepatuhan interface.
* **Tautan Kode Mandiri:**  
  👉 [`slide_11_typing_koleksi_array_reaktif.html`](../contoh_kode_program/sesi_03_typescript_vue/slide_11_typing_koleksi_array_reaktif.html)

---

### 📌 Slide 12: Type Safety pada Properti Terkalkulasi: computed&lt;T&gt;()
* **Sub-CPMK:** Mengunci tipe data luaran kalkulasi otomatis dengan anotasi generik pada `computed`.
* **Narasi Dosen:**  
  *"Computed property secara default menebak tipe berdasarkan nilai kembaliannya. Namun untuk logika penilaian akademik, kita sebaiknya menuliskan tipe secara eksplisit: `const totalSks = computed<number>(...)`. Jika ada rekan setim yang secara tidak sengaja mengembalikan string, TypeScript akan langsung menolaknya!"*
* **Poin Kunci:**
  * `computed<number>()`, `computed<string>()`.
  * Menjamin fungsi getter mematuhi kontrak data.
* **Tautan Kode Mandiri:**  
  👉 [`slide_12_typing_computed_properties.html`](../contoh_kode_program/sesi_03_typescript_vue/slide_12_typing_computed_properties.html)

---

### 📌 Slide 13: Deklarasi Props Bertipe: defineProps&lt;T&gt;()
* **Sub-CPMK:** Memvalidasi aliran data dari komponen induk ke anak menggunakan tipe TypeScript murni.
* **Narasi Dosen:**  
  *"Selamat tinggal validasi runtime props yang panjang dan membosankan. Di `<script setup lang="ts">`, kita cukup menulis `defineProps<{ mk: MataKuliah }>()`. TypeScript akan langsung memvalidasi atribut komponen di template induk Anda!"*
* **Poin Kunci:**
  * *Type-based props declaration*.
  * Mendukung nilai default menggunakan makro `withDefaults()`.
* **Tautan Kode Mandiri:**  
  👉 [`slide_13_typing_props_komponen.html`](../contoh_kode_program/sesi_03_typescript_vue/slide_13_typing_props_komponen.html)

---

### 📌 Slide 14: Deklarasi Emits Bertipe: defineEmits&lt;T&gt;()
* **Sub-CPMK:** Mengunci nama event kustom dan tipe payload parameter yang dipancarkan ke komponen induk.
* **Narasi Dosen:**  
  *"Ketika komponen baris mata kuliah ingin memberi tahu induk bahwa baris tersebut dihapus, ia memancarkan event `hapus`. Dengan `defineEmits<{ (e: 'hapus', id: string): void }>()`, komponen anak wajib menyertakan ID bertipe string saat memanggil emit!"*
* **Poin Kunci:**
  * Mengeliminasi bug salah ketik nama event kustom.
  * Validasi tipe argumen payload secara ketat.
* **Tautan Kode Mandiri:**  
  👉 [`slide_14_typing_emits_komponen.html`](../contoh_kode_program/sesi_03_typescript_vue/slide_14_typing_emits_komponen.html)

---

### 📌 Slide 15: Penanganan DOM Events Bertipe (Event, KeyboardEvent, HTMLInputElement)
* **Sub-CPMK:** Menangani interaksi masukan formulir menggunakan event type assertion yang benar.
* **Narasi Dosen:**  
  *"Saat membaca nilai input manual dengan `event.target.value`, TypeScript akan memperingatkan bahwa `event.target` mungkin tidak memiliki properti `.value`. Mengapa? Karena tidak semua elemen HTML adalah input text! Solusinya adalah melakukan casting: `(event.target as HTMLInputElement).value`."*
* **Poin Kunci:**
  * Type Casting / Type Assertion dengan kata kunci `as`.
  * Tipe event spesifik: `KeyboardEvent`, `MouseEvent`, `TouchEvent`.
* **Tautan Kode Mandiri:**  
  👉 [`slide_15_typing_dom_events.html`](../contoh_kode_program/sesi_03_typescript_vue/slide_15_typing_dom_events.html)

---

### 📌 Slide 16: Bedah Rubrik Penilaian Resmi TUGAS TUTORIAL 1 UT
* **Sub-CPMK:** Menelaah 4 kriteria penilaian dan tata cara pengumpulan Tugas Tutorial 1 berskala 0–100.
* **Narasi Dosen:**  
  *"Perhatikan baik-baik rubrik ini rekan-rekan! Nilai 100 didapatkan dari 4 pilar: Model TypeScript & Type Safety (25%), Reaktivitas Vue 3 & Validasi Form (25%), Logika Kalkulasi Otomatis SKS & IPS (30%), serta Video YouTube Unlisted 3–5 Menit (20%). Pastikan wajah Anda terlihat jelas dalam video demonstrasi!"*
* **Poin Kunci:**
  * Skala penilaian 0–100 dengan batas waktu pengerjaan 2 pekan.
  * Larangan keras plagiasi atau mengambil kode tanpa pemahaman.
* **Tautan Dokumen Rubrik:**  
  👉 [`slide_16_rubrik_tugas_tutorial_1.md`](../contoh_kode_program/sesi_03_typescript_vue/slide_16_rubrik_tugas_tutorial_1.md)

---

### 📌 Slide 17: 🎯 MASTER SOLUSI RESMI TUGAS TUTORIAL 1: Kalkulator Nilai & IPS Mahasiswa UT
* **Sub-CPMK:** Membangun aplikasi lengkap solusi Tugas Tutorial 1 yang memenuhi seluruh rubrik penilaian FST UT.
* **Narasi Dosen:**  
  *"Ini dia master solusi resmi Tugas Tutorial 1! Kita membangun aplikasi lengkap: kartu profil mahasiswa, form penambahan mata kuliah dengan validasi SKS, tabel rekapitulasi nilai yang dinamis, perhitungan otomatis total SKS dan mutu, konversi bobot huruf ke angka, perhitungan IPS hingga 2 desimal, badge predikat kelulusan, dan fitur cetak ringkasan KTPU. Pelajari dan jadikan referensi terbaik Anda!"*
* **Fitur Aplikasi:**
  * Kontrak Model Data TypeScript (`MahasiswaUT`, `MataKuliah`).
  * Reaktivitas Vue 3 Composition API murni.
  * Kalkulasi IPS otomatis dengan `computed()`.
  * Fitur cetak cetak ringkasan (*print summary*).
* **Tautan Kode Mandiri:**  
  👉 [`slide_17_solusi_tugas_1_kalkulator_nilai.html`](../contoh_kode_program/sesi_03_typescript_vue/slide_17_solusi_tugas_1_kalkulator_nilai.html)

---

### 📌 Slide 18: 🚀 Jembatan Menuju Sesi 04: Transisi Menuju Komponen Mobile Asli Ionic UI
* **Sub-CPMK:** Mempersiapkan diri memasuki ekosistem mobile Ionic Framework di Sesi 04.
* **Narasi Dosen:**  
  *"Luar biasa! Kita telah menguasai Vue 3 dan TypeScript dengan kokoh. Namun, tombol dan kartu yang kita gunakan saat ini masih berupa elemen HTML browser biasa. Pekan depan di Sesi 04, kita akan bertransformasi ke ekosistem smartphone sesungguhnya: Ionic UI Framework! Kita akan membedah `ion-app`, `ion-page`, `ion-card`, dan navigasi tumpukan kartu mobile khas Android dan iOS!"*
* **Poin Kunci:**
  * Transisi dari web components biasa ke pustaka UI mobile khusus.
  * Pengenalan konsep tumpukan navigasi (*navigation stack*).
  * Persiapan menghadapi **Sesi 04: Dasar-Dasar Ionic Framework & Navigasi Halaman**.
* **Tautan Kode Mandiri:**  
  👉 [`slide_18_preview_sesi_04_ionic_ui.html`](../contoh_kode_program/sesi_03_typescript_vue/slide_18_preview_sesi_04_ionic_ui.html)
