# 📱 CONTOH KODE PROGRAM SESI 02: FRONTEND MODERN BERBASIS VUE.JS 3
## Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak (STSI4303) — FST Universitas Terbuka

Selamat datang di direktori berkas kode mandiri **Sesi 02: Rekayasa Frontend Modern Berbasis Vue.js 3** (Modul 2 BMP UT). Seluruh berkas di bawah ini dirancang dengan prinsip **The Zero-Friction Courseware Framework**, dapat langsung dijalankan dengan **klik dua kali (*double-click*)** di peramban web (*Google Chrome, Edge, Firefox*) tanpa perlu memasang `npm` maupun kompilasi build tools yang membebani memori laptop Anda.

---

## 🗺️ Matriks 18 Berkas Kode Mandiri Siap Eksekusi

| No. Berkas | Nama Berkas | Topik Bahasan & Fitur Interaktif | Tautan Langsung |
| :---: | :--- | :--- | :---: |
| `01` | `slide_01_paradigma_imperatif_vs_deklaratif.html` | Komparasi *side-by-side* Vanilla DOM vs Vue 3 Reaktif | [Buka Berkas](slide_01_paradigma_imperatif_vs_deklaratif.html) |
| `02` | `slide_02_sistem_reaktivitas_ref.html` | State primitif `ref()`, counter, dan unboxing `.value` | [Buka Berkas](slide_02_sistem_reaktivitas_ref.html) |
| `03` | `slide_03_reaktivitas_objek_reactive.html` | State objek `reactive()`, JavaScript Proxy, profil KTM | [Buka Berkas](slide_03_reaktivitas_objek_reactive.html) |
| `04` | `slide_04_text_interpolation_v_bind.html` | Interpolasi `{{ }}` & dynamic binding `:class`, `:disabled` | [Buka Berkas](slide_04_text_interpolation_v_bind.html) |
| `05` | `slide_05_two_way_binding_v_model.html` | Form dua arah `v-model` dengan modifier `.trim`, `.number` | [Buka Berkas](slide_05_two_way_binding_v_model.html) |
| `06` | `slide_06_conditional_v_if_vs_v_show.html` | Bedah kinerja memori DOM: `v-if` vs `v-show` | [Buka Berkas](slide_06_conditional_v_if_vs_v_show.html) |
| `07` | `slide_07_list_rendering_v_for_dan_key.html` | Render koleksi mata kuliah & algoritma diffing `:key` unik | [Buka Berkas](slide_07_list_rendering_v_for_dan_key.html) |
| `08` | `slide_08_event_handling_dan_modifiers.html` | Penanganan event `@click`, `@submit.prevent`, `@click.stop` | [Buka Berkas](slide_08_event_handling_dan_modifiers.html) |
| `09` | `slide_09_computed_properties_ips.html` | Optimasi caching `computed()` untuk kalkulator IPS UT | [Buka Berkas](slide_09_computed_properties_ips.html) |
| `10` | `slide_10_watchers_dan_side_effects.html` | Pemantau data `watch()`, auto-save form ke `localStorage` | [Buka Berkas](slide_10_watchers_dan_side_effects.html) |
| `11` | `slide_11_lifecycle_hooks_onmounted.html` | Siklus hidup komponen `onMounted`, `onUpdated`, `onUnmounted` | [Buka Berkas](slide_11_lifecycle_hooks_onmounted.html) |
| `12` | `slide_12_komposisi_komponen_sfc.html` | Anatomi Single File Component (`<template>`, `<script>`, `<style>`) | [Buka Berkas](slide_12_komposisi_komponen_sfc.html) |
| `13` | `slide_13_props_aliran_data_induk_anak.html` | Komunikasi downward Induk ke Anak menggunakan `props` | [Buka Berkas](slide_13_props_aliran_data_induk_anak.html) |
| `14` | `slide_14_emits_komunikasi_anak_ke_induk.html` | Komunikasi upward Anak ke Induk via custom event `emit` | [Buka Berkas](slide_14_emits_komunikasi_anak_ke_induk.html) |
| `15` | `slide_15_slots_proyeksi_konten_fleksibel.html` | Content projection dengan Default & Named Slots pada Modal | [Buka Berkas](slide_15_slots_proyeksi_konten_fleksibel.html) |
| `16` | `slide_16_state_reusable_composables.html` | Clean Architecture: Custom Composable `useKRSManager()` | [Buka Berkas](slide_16_state_reusable_composables.html) |
| `17` | `slide_17_lab_quest_02_krs_interaktif.html` | **🎯 MASTER SOLUSI LAB QUEST 02: Aplikasi KRS Mandiri UT** | [Buka Berkas](slide_17_lab_quest_02_krs_interaktif.html) |
| `18` | `slide_18_preview_sesi_03_typescript.html` | **Jembatan Sesi 03: Mengapa Butuh TypeScript Interface?** | [Buka Berkas](slide_18_preview_sesi_03_typescript.html) |

---

## 💡 Cara Menjalankan Berkas Kode
1. **Buka Langsung di Browser:**
   Klik dua kali berkas `.html` yang ingin Anda uji di File Explorer.
2. **Mode Uji Ponsel (Mobile Simulator):**
   * Di Google Chrome, tekan tombol `F12` untuk membuka Developer Tools.
   * Tekan tombol pintas `Ctrl + Shift + M` (*Toggle Device Toolbar*).
   * Pilih model smartphone seperti *iPhone 14 Pro*, *Samsung Galaxy S20*, atau *Pixel 7*.
3. **Eksperimen Modifikasi Mandiri:**
   Buka berkas di Visual Studio Code, ubah logika atau tambahkan fitur baru, lalu lakukan *Refresh* (`Ctrl + R`) pada browser Anda untuk melihat perubahan instan.
