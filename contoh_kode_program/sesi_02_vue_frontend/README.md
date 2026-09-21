# 📱 CONTOH KODE PROGRAM SESI 02: REKAYASA FRONTEND MODERN BERBASIS VUE.JS 3
## Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak (STSI4303 / MSIM4401 — 3 SKS)
### Program Studi: S1 Sistem Informasi & S1 Informatika — Universitas Terbuka
### Modul Acuan: Modul 2 BMP UT (Rekayasa Antarmuka Komponen Reaktif)

Selamat datang di direktori berkas kode mandiri **Sesi 02: Rekayasa Frontend Modern Berbasis Vue.js 3**. Seluruh berkas di bawah ini dirancang dengan standar mutu **The Zero-Friction Courseware Framework**, dapat langsung dijalankan dengan **klik ganda (*double-click*)** di peramban web (*Google Chrome, Edge, Firefox*) tanpa perlu memasang `npm`, Node.js, maupun kompilasi build tools yang membebani memori RAM laptop Anda.

---

## 🌟 Standar Kualitas & Fitur Baru Hasil Audit Mutu

Setiap berkas `.html` pada Sesi 02 telah diaudit dan diperkaya dengan tiga pilar edukasi ramah awam:
1. **📘 Kotak Panduan Praktikum Mandiri (`.guide-box`):**
   * **🛠️ Alat yang Digunakan:** Arahan eksplisit penggunaan Google Chrome, DevTools (`F12`), mode simulator ponsel (`Ctrl + Shift + M`), serta ekstensi VS Code (*Vue - Official Volar*).
   * **🎯 Cara Menguji Interaksi:** Instruksi runut langkah demi langkah tombol mana yang harus diklik dan apa yang harus diamati.
   * **💡 Apa yang Terjadi di Balik Layar:** Penjelasan konseptual santai namun berbobot ilmiah mengenai cara kerja mesin Vue 3 (Getter/Setter, Proxy, Virtual DOM, Diffing, dan Caching).
2. **📐 Diagram Arsitektur Inline SVG (`.diagram-card`):**
   * Diagram grafis vektor murni (tanpa gambar eksternal yang rawan pecah/hilang), bergaya Neo-Brutalism dengan marker panah `<marker id="arrow"...>` yang responsif di layar ponsel maupun desktop.
3. **📚 Sitasi & Referensi Akademik Terstandar (`.source-cite`):**
   * Setiap berkas menyertakan sitasi ilmiah ke Modul 2 BMP UT (MSIM4401/STSI4303), dokumentasi resmi Vue.js 3, W3C, dan MDN Web Docs.

---

## 🗺️ Matriks 18 Berkas Kode Mandiri Siap Eksekusi (1:1 Slide Presentasi)

| No. | Nama Berkas | Topik Bahasan & Fitur Interaktif | Diagram Arsitektur Inline | Tautan Langsung |
| :---: | :--- | :--- | :--- | :---: |
| `01` | [`slide_01_paradigma_imperatif_vs_deklaratif.html`](slide_01_paradigma_imperatif_vs_deklaratif.html) | Paradigma: Vanilla JS DOM vs Vue 3 Reaktif | Spaghetti DOM vs Virtual DOM Engine | [🌐 Buka](slide_01_paradigma_imperatif_vs_deklaratif.html) |
| `02` | [`slide_02_sistem_reaktivitas_ref.html`](slide_02_sistem_reaktivitas_ref.html) | State primitif `ref()`, counter, dan unboxing `.value` | Getter/Setter Kontainer & Auto-Unwrap | [🌐 Buka](slide_02_sistem_reaktivitas_ref.html) |
| `03` | [`slide_03_reaktivitas_objek_reactive.html`](slide_03_reaktivitas_objek_reactive.html) | State objek `reactive()`, JavaScript Proxy, profil KTM | ES6 Proxy Trap (Track & Trigger) | [🌐 Buka](slide_03_reaktivitas_objek_reactive.html) |
| `04` | [`slide_04_text_interpolation_v_bind.html`](slide_04_text_interpolation_v_bind.html) | Interpolasi `{{ }}` & dynamic binding `:class`, `:disabled` | Text Node vs Attribute Binding | [🌐 Buka](slide_04_text_interpolation_v_bind.html) |
| `05` | [`slide_05_two_way_binding_v_model.html`](slide_05_two_way_binding_v_model.html) | Form dua arah `v-model` dengan modifier `.trim`, `.number` | Two-Way Binding (`:value` + `@input`) | [🌐 Buka](slide_05_two_way_binding_v_model.html) |
| `06` | [`slide_06_conditional_v_if_vs_v_show.html`](slide_06_conditional_v_if_vs_v_show.html) | Bedah kinerja memori DOM: `v-if` vs `v-show` | DOM Destruction vs CSS `display: none` | [🌐 Buka](slide_06_conditional_v_if_vs_v_show.html) |
| `07` | [`slide_07_list_rendering_v_for_dan_key.html`](slide_07_list_rendering_v_for_dan_key.html) | Render koleksi mata kuliah & algoritma diffing `:key` unik | Virtual DOM Diffing (Key vs Index) | [🌐 Buka](slide_07_list_rendering_v_for_dan_key.html) |
| `08` | [`slide_08_event_handling_dan_modifiers.html`](slide_08_event_handling_dan_modifiers.html) | Penanganan event `@click`, `@submit.prevent`, `@click.stop` | Event Propagation & Modifiers Guard | [🌐 Buka](slide_08_event_handling_dan_modifiers.html) |
| `09` | [`slide_09_computed_properties_ips.html`](slide_09_computed_properties_ips.html) | Optimasi caching `computed()` untuk kalkulator IPS UT | Dependency Tracking & Caching (0 ms) | [🌐 Buka](slide_09_computed_properties_ips.html) |
| `10` | [`slide_10_watchers_dan_side_effects.html`](slide_10_watchers_dan_side_effects.html) | Pemantau data `watch()`, auto-save form ke `localStorage` | Debouncing Pipeline & Asynchronous Disk Save | [🌐 Buka](slide_10_watchers_dan_side_effects.html) |
| `11` | [`slide_11_lifecycle_hooks_onmounted.html`](slide_11_lifecycle_hooks_onmounted.html) | Siklus hidup komponen `onMounted`, `onUpdated`, `onUnmounted` | Timeline 4 Fase & Pencegahan Memory Leak | [🌐 Buka](slide_11_lifecycle_hooks_onmounted.html) |
| `12` | [`slide_12_komposisi_komponen_sfc.html`](slide_12_komposisi_komponen_sfc.html) | Anatomi Single File Component (`<template>`, `<script>`, `<style>`) | Arsitektur Vite SFC Compiler & Scope Hash | [🌐 Buka](slide_12_komposisi_komponen_sfc.html) |
| `13` | [`slide_13_props_aliran_data_induk_anak.html`](slide_13_props_aliran_data_induk_anak.html) | Komunikasi downward Induk ke Anak menggunakan `props` | One-Way Data Flow (Props Down Read-Only) | [🌐 Buka](slide_13_props_aliran_data_induk_anak.html) |
| `14` | [`slide_14_emits_komunikasi_anak_ke_induk.html`](slide_14_emits_komunikasi_anak_ke_induk.html) | Komunikasi upward Anak ke Induk via custom event `emit` | Siklus Props Down & Events Up Terpadu | [🌐 Buka](slide_14_emits_komunikasi_anak_ke_induk.html) |
| `15` | [`slide_15_slots_proyeksi_konten_fleksibel.html`](slide_15_slots_proyeksi_konten_fleksibel.html) | Content projection dengan Default & Named Slots pada Modal | Content Injection Shell vs Fill Slots | [🌐 Buka](slide_15_slots_proyeksi_konten_fleksibel.html) |
| `16` | [`slide_16_state_reusable_composables.html`](slide_16_state_reusable_composables.html) | Clean Architecture: Custom Composable `useKRSManager()` | Separation of Concerns (UI vs Pure Logic) | [🌐 Buka](slide_16_state_reusable_composables.html) |
| `17` | [`slide_17_lab_quest_02_krs_interaktif.html`](slide_17_lab_quest_02_krs_interaktif.html) | **🎯 MASTER SOLUSI LAB QUEST 02: Aplikasi KRS Mandiri UT** | Cetak Biru Mini-SIA KRS FST UT | [🌐 Buka](slide_17_lab_quest_02_krs_interaktif.html) |
| `18` | [`slide_18_preview_sesi_03_typescript.html`](slide_18_preview_sesi_03_typescript.html) | **Jembatan Sesi 03: Mengapa Butuh TypeScript Interface?** | Runtime Crash JS vs Compile-Time Type Safety | [🌐 Buka](slide_18_preview_sesi_03_typescript.html) |

---

## 💡 Petunjuk Pengujian Mandiri Mahasiswa

1. **Buka Langsung di Browser (Zero Installation):**
   Cukup klik ganda (*double-click*) berkas `.html` yang diinginkan dari File Explorer untuk menjalankannya seketika di Google Chrome, Edge, atau Firefox.
2. **Mode Simulator Ponsel Cerdas (Mobile Device Toolbar):**
   * Di Google Chrome, tekan tombol `F12` untuk membuka Developer Tools.
   * Tekan tombol pintas `Ctrl + Shift + M` (*Toggle Device Toolbar*).
   * Pilih model smartphone (misal: *iPhone 14 Pro*, *Samsung Galaxy S20*, atau *Pixel 7*) untuk menguji responsivitas kartu antarmuka.
3. **Eksperimen Modifikasi Mandiri di VS Code:**
   Buka berkas di Visual Studio Code, ubah variabel reaktif atau direktif template, lalu lakukan *Refresh* (`Ctrl + R`) pada browser Anda untuk melihat perubahan instan tanpa perlu kompilasi ulang yang memakan waktu!
