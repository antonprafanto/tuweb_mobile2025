// =====================================================================
// MATA KULIAH : PEMROGRAMAN BERBASIS PERANGKAT BERGERAK (STSI4303) - UT
// SESI 01     : PENGENALAN LINGKUNGAN PENGEMBANGAN PIRANTI BERGERAK
// SLIDE 05    : PANDUAN LANGKAH DEMI LANGKAH INSTALASI DEV-TOOLS LOKAL
// =====================================================================
// CARA MENJALANKAN:
// node slide_05_panduan_instalasi_tools.js
// =====================================================================

console.log("==================================================================");
console.log("🛠️  PANDUAN LENGKAP PENYIAPAN PERANGKAT KERJA MAHASISWA UT");
console.log("==================================================================");

const tools = [
  {
    nama: "1. Node.js (Versi LTS 20.x atau 22.x)",
    situs: "https://nodejs.org/",
    fungsi: "Runtime JavaScript agar komputer bisa menjalankan tools Ionic & build sistem.",
    verifikasi: "node -v  (Wajib muncul versi v20.x atau lebih baru)"
  },
  {
    nama: "2. Git SCM (Version Control)",
    situs: "https://git-scm.com/",
    fungsi: "Mencatat riwayat revisi kode dan mengunggah tugas kuliah ke GitHub.",
    verifikasi: "git --version"
  },
  {
    nama: "3. Visual Studio Code (VS Code)",
    situs: "https://code.visualstudio.com/",
    fungsi: "Editor kode ringan dan gratis terbaik untuk pengembangan web & mobile.",
    verifikasi: "Ekstensi Wajib di VS Code:\n       • Vue - Official (Syntax highlight Vue 3)\n       • Ionic (Snippet & tooling Ionic)\n       • Prettier (Perapih format kode otomatis)"
  },
  {
    nama: "4. Peramban Web (Google Chrome / Edge)",
    situs: "Sudah terpasang di hampir setiap komputer",
    fungsi: "Media pengujian antarmuka smartphone tanpa emulator berat (DevTools F12).",
    verifikasi: "Tekan F12 -> Ikon Toggle Device Toolbar (Ctrl+Shift+M)"
  },
  {
    nama: "5. Ionic CLI (Opsional Proyek Penuh)",
    situs: "Dipasang via terminal setelah Node.js ada",
    fungsi: "Perintah baris untuk membuat template proyek dan server lokal.",
    verifikasi: "npm install -g @ionic/cli  lalu cek dengan:  ionic -v"
  }
];

tools.forEach((t) => {
  console.log(`\n📌 ${t.nama}`);
  console.log(`   🌐 Unduh di : ${t.situs}`);
  console.log(`   💡 Fungsi   : ${t.fungsi}`);
  console.log(`   🔍 Cek Hasil: ${t.verifikasi}`);
});

console.log("\n==================================================================");
console.log("💡 Tips Dosen: Jika laptop Anda memiliki RAM 4GB, prioritaskan");
console.log("   membuka contoh file .html di Google Chrome. Hindari membuka");
console.log("   banyak aplikasi berat lain saat belajar agar laptop tetap sejuk.");
console.log("==================================================================");
