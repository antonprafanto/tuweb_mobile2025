// =====================================================================
// MATA KULIAH : PEMROGRAMAN BERBASIS PIRANTI BERGERAK (MSIM4401 / STSI4303)
// SESI 01     : PENGENALAN LINGKUNGAN PENGEMBANGAN PIRANTI BERGERAK
// SLIDE 01    : KONTRAK PERKULIAHAN, ROADMAP 8 SESI & REGULASI RESMI UT
// =====================================================================
// CARA MENJALANKAN:
// 1. Buka terminal / command prompt di VS Code
// 2. Jalankan perintah: node slide_01_kontrak_dan_roadmap.js
// =====================================================================

console.log("==================================================================");
console.log("📱 MSIM4401 / STSI4303 - PEMROGRAMAN BERBASIS PIRANTI BERGERAK (3 SKS)");
console.log("🏛️  UNIVERSITAS TERBUKA - FAKULTAS SAINS DAN TEKNOLOGI");
console.log("👨‍🏫 Tutor Tuton: Anton Prafanto, S.Kom., M.T.");
console.log("==================================================================");
console.log("");

// 1. Roadmap 8 Sesi Tutorial & Tagihan Praktikum
const roadmapSesi = [
  { sesi: 1, modul: "Modul 1", topik: "Lingkungan Pengembangan, Git, Node.js & Ionic Setup", tagihan: "Diskusi 1" },
  { sesi: 2, modul: "Modul 2", topik: "Frontend Modern dengan Reaktivitas Vue.js 3", tagihan: "Diskusi 2" },
  { sesi: 3, modul: "Modul 3", topik: "Praktikum Pemrograman TypeScript & Vue.js (Akt. 4)", tagihan: "🎯 TUGAS 1 (P1: 16,6667%)" },
  { sesi: 4, modul: "Modul 4", topik: "Dasar-Dasar Ionic Framework & Stack Navigation", tagihan: "Diskusi 4" },
  { sesi: 5, modul: "Modul 5", topik: "Praktikum Hybrid & Akses API (Akt. 8)", tagihan: "🎯 TUGAS 2 (P2: 16,6667%)" },
  { sesi: 6, modul: "Modul 6-7", topik: "Capacitor Bridge, Android Manifest & Keamanan Mobile", tagihan: "Diskusi 6" },
  { sesi: 7, modul: "Modul 8-9", topik: "Praktikum Aplikasi Terdistribusi (Akt. 12)", tagihan: "🎯 TUGAS 3 (P3: 16,6667%)" },
  { sesi: 8, modul: "Modul 9", topik: "Optimasi, Build APK Release & Evaluasi UAS", tagihan: "🎓 UAS (50,0000%)" }
];

console.log("🗺️  ROADMAP 8 SESI & DISTRIBUSI TUGAS PRAKTIKUM:");
console.log("------------------------------------------------------------------");
roadmapSesi.forEach((item) => {
  const badge = item.tagihan.includes("TUGAS") ? "🔥" : (item.tagihan.includes("UAS") ? "" : "💬 ");
  console.log(`[Sesi ${item.sesi}] ${item.modul.padEnd(9)} | ${item.topik.padEnd(48)} | ${badge}${item.tagihan}`);
});

console.log("------------------------------------------------------------------");
console.log("");

// 2. Regulasi Penilaian Kelulusan Mata Kuliah Berpraktik
console.log("📊 FORMULA NILAI AKHIR MATA KULIAH BERPRAKTIK:");
console.log("   Nilai Akhir = 16,6667% P1 + 16,6667% P2 + 16,6667% P3 + 50% UAS");
console.log("");
console.log("⚠️  REGULASI AKADEMIK MUTLAK DARI TUTOR TUTON:");
console.log("   1. Tugas 1 (P1), Tugas 2 (P2), dan Tugas 3 (P3) HARUS LENGKAP dikerjakan");
console.log("      dan diunggah di kelas elearning.ut.ac.id.");
console.log("      JIKA SALAH SATU TUGAS TIDAK DIKERJAKAN, NILAI MATA KULIAH TERSEBUT E!");
console.log("   2. UAS mata kuliah berpraktik WAJIB diikuti.");
console.log("   3. Nilai kelulusan mata kuliah berpraktik MINIMAL C (Skor >= 56).");
console.log("==================================================================");
console.log("💡 Pesan Dosen: 'Belajar coding itu seperti bersepeda; Anda tidak bisa");
console.log("   mahir hanya dengan membaca buku, Anda harus mengayuhnya sendiri!'");
console.log("==================================================================");

