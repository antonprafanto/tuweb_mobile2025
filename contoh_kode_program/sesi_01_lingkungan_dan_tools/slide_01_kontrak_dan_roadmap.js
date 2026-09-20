// =====================================================================
// MATA KULIAH : PEMROGRAMAN BERBASIS PERANGKAT BERGERAK (STSI4303)
// SESI 01     : PENGENALAN LINGKUNGAN PENGEMBANGAN PIRANTI BERGERAK
// SLIDE 01    : KONTRAK PERKULIAHAN, ROADMAP 8 SESI & ATURAN AKADEMIK UT
// =====================================================================
// CARA MENJALANKAN:
// 1. Buka terminal / command prompt di VS Code
// 2. Jalankan perintah: node slide_01_kontrak_dan_roadmap.js
// =====================================================================

console.log("==================================================================");
console.log("📱 STSI4303 - PEMROGRAMAN BERBASIS PERANGKAT BERGERAK (3 SKS)");
console.log("🏛️  UNIVERSITAS TERBUKA - FAKULTAS SAINS DAN TEKNOLOGI");
console.log("👨‍🏫 Dosen Pengampu: Anton Prafanto, S.Kom., M.T.");
console.log("==================================================================");
console.log("");

// 1. Roadmap 8 Sesi Tutorial
const roadmapSesi = [
  { sesi: 1, modul: "Modul 1", topik: "Lingkungan Pengembangan, Git, Node.js & Ionic Setup", tagihan: "Diskusi 1" },
  { sesi: 2, modul: "Modul 2", topik: "Frontend Modern dengan Reaktivitas Vue.js 3", tagihan: "Diskusi 2" },
  { sesi: 3, modul: "Modul 3", topik: "TypeScript, Type Safety & Vue Composition API", tagihan: "🎯 TUGAS 1 (Bobot 20%)" },
  { sesi: 4, modul: "Modul 4", topik: "Dasar-Dasar Ionic Framework & Stack Navigation", tagihan: "Diskusi 4" },
  { sesi: 5, modul: "Modul 5", topik: "Layout Grid Responsif, Validasi Form Regex & Dark Mode", tagihan: "🎯 TUGAS 2 (Bobot 25%)" },
  { sesi: 6, modul: "Modul 6-7", topik: "Capacitor Bridge, Android Manifest & Keamanan Mobile", tagihan: "Diskusi 6" },
  { sesi: 7, modul: "Modul 8-9", topik: "Integrasi REST API, Local Storage & Sensor Native GPS", tagihan: "🎯 TUGAS 3 (Bobot 25%)" },
  { sesi: 8, modul: "Modul 9", topik: "Optimasi, Build APK Release Keystore & Simulasi UAS", tagihan: "Diskusi 8 & Latihan UAS" }
];

console.log("🗺️  ROADMAP PERKULIAHAN 8 SESI (TUTON / TUWEB):");
console.log("------------------------------------------------------------------");
roadmapSesi.forEach((item) => {
  const badge = item.tagihan.includes("TUGAS") ? "🔥" : "💬";
  console.log(`[Sesi ${item.sesi}] ${item.modul.padEnd(9)} | ${item.topik.padEnd(52)} | ${badge} ${item.tagihan}`);
});

console.log("------------------------------------------------------------------");
console.log("");

// 2. Regulasi Penilaian Kelulusan UT
console.log("📊 FORMULA BOBOT PENILAIAN RESMI UT:");
console.log("   • Keaktifan Forum Diskusi (8 Sesi) : 30% dari Nilai Tuton");
console.log("   • Tugas Tutorial 1 (Sesi 3)        : 20% dari Nilai Tuton");
console.log("   • Tugas Tutorial 2 (Sesi 5)        : 25% dari Nilai Tuton");
console.log("   • Tugas Tutorial 3 (Sesi 7)        : 25% dari Nilai Tuton");
console.log("");
console.log("   ★ FORMULA NILAI AKHIR MATA KULIAH PRAKTIK:");
console.log("     Nilai Akhir = (50% x Nilai Tuton) + (50% x Nilai UAS)");
console.log("     ⚠️  SYARAT MUTLAK: Nilai UAS wajib minimal 30 agar nilai Tuton dihitung!");
console.log("==================================================================");
console.log("💡 Pesan Dosen: 'Belajar coding itu seperti bersepeda; Anda tidak bisa");
console.log("   mahir hanya dengan membaca buku, Anda harus mengayuhnya sendiri!'");
console.log("==================================================================");
