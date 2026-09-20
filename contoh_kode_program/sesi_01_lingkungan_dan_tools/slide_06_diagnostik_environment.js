// =====================================================================
// MATA KULIAH : PEMROGRAMAN BERBASIS PERANGKAT BERGERAK (STSI4303) - UT
// SESI 01     : PENGENALAN LINGKUNGAN PENGEMBANGAN PIRANTI BERGERAK
// SLIDE 06    : UJI DIAGNOSTIK KESIAPAN SISTEM & HARDWARE SECARA OTOMATIS
// =====================================================================
// CARA MENJALANKAN:
// node slide_06_diagnostik_environment.js
// =====================================================================

const os = require('os');
const { execSync } = require('child_process');

console.log("==================================================================");
console.log("🔍 PEMERIKSAAN DIAGNOSTIK LINGKUNGAN KERJA STSI4303 (UT)");
console.log("==================================================================");

function checkCommand(command, name) {
  try {
    const version = execSync(command, { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] }).trim();
    console.log(`✅ [TERPASANG] ${name.padEnd(12)} : ${version}`);
    return true;
  } catch (err) {
    console.log(`❌ [BELUM ADA] ${name.padEnd(12)} : Perlu dipasang`);
    return false;
  }
}

// 1. Info Sistem Operasi & Hardware
const ramGB = (os.totalmem() / (1024 ** 3)).toFixed(2);
console.log(`🖥️  Sistem Operasi  : ${os.type()} (${os.arch()}) ${os.release()}`);
console.log(`💾 Total Memori RAM: ${ramGB} GB`);
console.log(`🧠 Core Processor  : ${os.cpus().length} Cores`);
console.log("------------------------------------------------------------------");

// Rekomendasi Jalur Praktik Berdasarkan RAM
console.log("🚦 REKOMENDASI JALUR PRAKTIK UNTUK SPESIFIKASI ANDA:");
if (ramGB < 6) {
  console.log("   👉 Gunakan JALUR A (Browser Web Preview Standalone CDN).");
  console.log("      Sangat aman untuk RAM 4GB, tidak membebani sistem Anda!");
} else if (ramGB >= 6 && ramGB <= 12) {
  console.log("   👉 Gunakan JALUR B (Ponsel Fisik Android via USB + scrcpy).");
  console.log("      Pengalaman praktik terbaik dan hemat memori (~70MB RAM).");
} else {
  console.log("   👉 Laptop Anda mumpuni untuk JALUR B maupun JALUR C (Full Android Studio).");
}

console.log("------------------------------------------------------------------");
console.log("📦 MEMERIKSA STATUS SOFTWARE WAJIB:");
const nodeOk = checkCommand('node -v', 'Node.js');
const npmOk = checkCommand('npm -v', 'NPM Package');
const gitOk = checkCommand('git --version', 'Git SCM');
const ionicOk = checkCommand('ionic -v', 'Ionic CLI');

console.log("------------------------------------------------------------------");
if (nodeOk && npmOk) {
  console.log("🎉 STATUS: Lingkungan komputer Anda SIAP untuk praktikum STSI4303!");
  if (!ionicOk) {
    console.log("💡 Catatan: Ionic CLI belum terpasang secara global.");
    console.log("   Untuk praktikum Sesi 01 s.d. 03 Anda cukup menggunakan file HTML mandiri.");
    console.log("   Untuk memasang Ionic CLI nanti, ketik: npm install -g @ionic/cli");
  }
} else {
  console.log("⚠️  STATUS: Silakan pasang Node.js LTS terlebih dahulu dari https://nodejs.org/");
}
console.log("==================================================================");
