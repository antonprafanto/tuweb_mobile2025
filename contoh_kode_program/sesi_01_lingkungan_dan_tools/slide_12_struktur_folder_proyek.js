// =====================================================================
// MATA KULIAH : PEMROGRAMAN BERBASIS PERANGKAT BERGERAK (STSI4303) - UT
// SESI 01     : PENGENALAN LINGKUNGAN PENGEMBANGAN PIRANTI BERGERAK
// SLIDE 12    : ANATOMI STRUKTUR FOLDER PROYEK IONIC VUE STANDAR
// =====================================================================
// CARA MENJALANKAN:
// node slide_12_struktur_folder_proyek.js
// =====================================================================

console.log("==================================================================");
console.log("📂 EKSPLORER POHON STRUKTUR FOLDER PROYEK IONIC VUE 3");
console.log("==================================================================");

const folderTree = `
myut-app/
├── 📁 node_modules/             # Dependensi pustaka npm (jangan diedit manual!)
├── 📁 public/                   # Aset publik statis (ikon aplikasi, favicon, gambar)
├── 📁 src/                      # JANTUNG UTAMA KODE PROGRAM KITA:
│   ├── 📁 components/           # Komponen kecil reusable (Card, Modal, Button kustom)
│   ├── 📁 router/               # Konfigurasi navigasi halaman (index.ts)
│   ├── 📁 theme/                # Palet warna & variabel CSS tema (variables.css)
│   ├── 📁 views/                # Halaman-halaman layar aplikasi (Home.vue, Profil.vue)
│   ├── 📄 App.vue               # Komponen akar (Root component: ion-app)
│   └── 📄 main.ts               # Titik masuk pertama JavaScript (Entry Point)
│
├── 📁 android/                  # Proyek native Android (dihasilkan oleh Capacitor)
├── 📄 capacitor.config.json     # Konfigurasi identitas aplikasi (App ID, App Name)
├── 📄 package.json              # Daftar pustaka & skrip eksekusi proyek
├── 📄 tsconfig.json             # Konfigurasi compiler bahasa TypeScript
└── 📄 vite.config.ts            # Konfigurasi bundler kilat Vite
`;

console.log(folderTree);
console.log("------------------------------------------------------------------");
console.log("🎯 DI MANA MAHASISWA AKAN PALING BANYAK MENULIS KODE?");
console.log("   1. src/views/       -> Tempat membuat tampilan layar baru.");
console.log("   2. src/theme/       -> Tempat mengganti warna biru UT atau Dark Mode.");
console.log("   3. src/router/      -> Tempat mendaftarkan rute perpindahan halaman.");
console.log("==================================================================");
