// =====================================================================
// MATA KULIAH : PEMROGRAMAN BERBASIS PERANGKAT BERGERAK (STSI4303) - UT
// SESI 01     : PENGENALAN LINGKUNGAN PENGEMBANGAN PIRANTI BERGERAK
// SLIDE 11    : ANATOMI PERINTAH ESSENTIAL IONIC CLI
// =====================================================================
// CARA MENJALANKAN:
// node slide_11_ionic_cli_simulator.js
// =====================================================================

console.log("==================================================================");
console.log("⚡ 5 PERINTAH SAKTI IONIC CLI UNTUK MAHASISWA UT");
console.log("==================================================================");

const ionicCommands = [
  {
    perintah: "1. ionic start <nama-app> blank --type=vue",
    penjelasan: "Membuat kerangka proyek baru berbasis Vue.js 3 secara otomatis.",
    contoh: "ionic start myut-app blank --type=vue",
    catatan: "Pilihan template: blank (kosong bersih), tabs (menu bawah), sidemenu (laci samping)."
  },
  {
    perintah: "2. cd <nama-app>",
    penjelasan: "Berpindah masuk ke dalam folder proyek yang baru dibuat.",
    contoh: "cd myut-app",
    catatan: "Wajib dilakukan sebelum mengetik perintah apa pun di dalam proyek!"
  },
  {
    perintah: "3. ionic serve",
    penjelasan: "Menjalankan server pengembangan lokal dengan fitur Live Reload!",
    contoh: "ionic serve",
    catatan: "Otomatis membuka browser di alamat: http://localhost:8100"
  },
  {
    perintah: "4. ionic build",
    penjelasan: "Mengompilasi seluruh kode web menjadi aset siap rilis di folder dist/.",
    contoh: "ionic build",
    catatan: "Dilakukan sebelum membungkus aplikasi ke dalam platform Android."
  },
  {
    perintah: "5. npx cap sync android",
    penjelasan: "Menyinkronkan aset web hasil build ke dalam proyek Android native.",
    contoh: "npx cap sync android",
    catatan: "Jembatan ajaib Capacitor: mengubah web menjadi aplikasi Android murni!"
  }
];

ionicCommands.forEach(c => {
  console.log(`\n📌 ${c.perintah}`);
  console.log(`   💡 Fungsi : ${c.penjelasan}`);
  console.log(`   💻 Contoh : ${c.contoh}`);
  console.log(`   📝 Catatan: ${c.catatan}`);
});

console.log("\n==================================================================");
console.log("💡 Tips Menghentikan Server Lokal: Jika sedang menjalankan");
console.log("   'ionic serve', tekan Ctrl + C di terminal untuk berhenti.");
console.log("==================================================================");
