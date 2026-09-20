# 📱 CONTOH KODE PROGRAM SESI 04: DASAR IONIC FRAMEWORK & NAVIGASI MOBILE
## Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak (STSI4303 / MSIM4401) — FST Universitas Terbuka

Selamat datang di direktori berkas kode mandiri **Sesi 04: Dasar-Dasar Ionic Framework & Navigasi Halaman Mobile** (Modul 4 BMP UT). Sesi ini memperkenalkan ekosistem komponen antarmuka *Ionic UI Toolkit*, konsep *Adaptive Styling*, hierarki tata letak baku mobile, sistem navigasi tumpukan (*Stack Navigation*), serta pengendalian siklus hidup halaman (*Lifecycle Hooks*).

Seluruh berkas kode di bawah ini menggunakan **standar The Zero-Friction Courseware Framework**, dapat dijalankan langsung dengan klik dua kali di peramban Google Chrome tanpa memerlukan build tools atau instalasi CLI yang memberatkan memori laptop mahasiswa.

---

## 🗺️ Matriks 18 Berkas Mandiri Siap Eksekusi

| No. Berkas | Nama Berkas | Topik Bahasan & Fitur Interaktif | Tautan Langsung |
| :---: | :--- | :--- | :---: |
| `01` | `slide_01_pengenalan_ekosistem_ionic.html` | Pengantar ekosistem Ionic UI Toolkit dan perbandingan dengan UI web biasa | [Buka Berkas](slide_01_pengenalan_ekosistem_ionic.html) |
| `02` | `slide_02_adaptive_styling_md_ios.html` | Demonstrasi fitur *Adaptive Styling*: Mode Android (MD) vs iPhone (iOS) | [Buka Berkas](slide_02_adaptive_styling_md_ios.html) |
| `03` | `slide_03_anatomi_halaman_ion_page.html` | Anatomi hirarki baku halaman: `ion-app`, `ion-page`, `ion-header`, `ion-content` | [Buka Berkas](slide_03_anatomi_halaman_ion_page.html) |
| `04` | `slide_04_palet_warna_tema_mobile.html` | Eksplorasi palet warna resmi Ionic: `primary`, `secondary`, `success`, `danger` | [Buka Berkas](slide_04_palet_warna_tema_mobile.html) |
| `05` | `slide_05_variasi_tombol_ion_button.html` | Ragam konfigurasi tombol: `expand="block"`, `fill="outline"`, `shape="round"` | [Buka Berkas](slide_05_variasi_tombol_ion_button.html) |
| `06` | `slide_06_kartu_informasi_ion_card.html` | Kartu informasi: `ion-card`, `ion-card-header`, `ion-card-title`, `ion-card-content` | [Buka Berkas](slide_06_kartu_informasi_ion_card.html) |
| `07` | `slide_07_avatar_badge_dan_chip.html` | Penanda identitas visual mahasiswa: `ion-avatar`, `ion-badge`, dan `ion-chip` | [Buka Berkas](slide_07_avatar_badge_dan_chip.html) |
| `08` | `slide_08_daftar_list_dan_item.html` | Daftar kolektif mobile: `ion-list`, `ion-item`, `ion-label`, dan garis inset | [Buka Berkas](slide_08_daftar_list_dan_item.html) |
| `09` | `slide_09_ikonografi_ionicons.html` | Integrasi ikon mobile dengan ratusan koleksi resmi Ionicons | [Buka Berkas](slide_09_ikonografi_ionicons.html) |
| `10` | `slide_10_filosofi_stack_navigation.html` | Mental model tumpukan layar (LIFO Stack) vs reload peramban | [Buka Berkas](slide_10_filosofi_stack_navigation.html) |
| `11` | `slide_11_struktur_ionic_vue_router.html` | Konfigurasi perutean & penampung tumpukan `<ion-router-outlet>` | [Buka Berkas](slide_11_struktur_ionic_vue_router.html) |
| `12` | `slide_12_pindah_halaman_dan_parameter.html` | Pindah halaman dengan `router.push()` dan membawa parameter URL (`:kode`) | [Buka Berkas](slide_12_pindah_halaman_dan_parameter.html) |
| `13` | `slide_13_tombol_kembali_back_button.html` | Tombol kembali otomatis `<ion-back-button>` dan penanganan `default-href` | [Buka Berkas](slide_13_tombol_kembali_back_button.html) |
| `14` | `slide_14_siklus_hidup_masuk_halaman.html` | Pemantauan siklus hidup masuk: `ionViewWillEnter` vs `ionViewDidEnter` | [Buka Berkas](slide_14_siklus_hidup_masuk_halaman.html) |
| `15` | `slide_15_siklus_hidup_keluar_halaman.html` | Pemantauan siklus hidup keluar: `ionViewWillLeave` vs `ionViewDidLeave` | [Buka Berkas](slide_15_siklus_hidup_keluar_halaman.html) |
| `16` | `slide_16_troubleshooting_routing_ionic.md` | Panduan pemecahan masalah: Layar putih, tombol back hilang, dan route loop | [Buka Berkas](slide_16_troubleshooting_routing_ionic.md) |
| `17` | `slide_17_lab_quest_04_portal_modul_ut.html` | **🎯 MASTER SOLUSI LAB QUEST 04: Portal Modul BMP UT Multi-Halaman** | [Buka Berkas](slide_17_lab_quest_04_portal_modul_ut.html) |
| `18` | `slide_18_preview_sesi_05_layout_grid_form.html` | **Jembatan Sesi 05: Responsive 12-Grid, Form Regex, & Pengarahan Tugas 2** | [Buka Berkas](slide_18_preview_sesi_05_layout_grid_form.html) |

---

## 🎯 Panduan Praktikum Mandiri Mahasiswa
1. **Mulai dari Berkas 01 sampai 09**: Pahami bagaimana Ionic Web Components (`<ion-button>`, `<ion-card>`, `<ion-list>`, dll) memberikan nuansa aplikasi native tanpa memerlukan CSS rumit dari nol.
2. **Eksplorasi Berkas 10 sampai 15**: Pelajari perbedaan fundamental navigasi tumpukan (*Stack*) pada mobile dibanding navigasi web biasa, serta kuasai penggunaan lifecycle hook `ionViewWillEnter` dan `ionViewWillLeave`.
3. **Bedah Master Solusi Lab Quest 04 (Berkas 17)**:
   * Rasakan pengalaman navigasi multi-halaman dalam simulator smartphone.
   * Amati log terminal siklus hidup di panel samping saat Anda berpindah dari Katalog ke Detail dan saat menekan tombol Kembali.
   * Jadikan kode ini sebagai referensi utama dalam merancang arsitektur aplikasi tugas praktikum Anda!
