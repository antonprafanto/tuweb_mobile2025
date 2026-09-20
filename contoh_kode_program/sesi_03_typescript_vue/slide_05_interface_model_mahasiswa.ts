/**
 * =====================================================================
 * KONTRAK DATA RESMI TYPESCRIPT: MODEL AKADEMIK UNIVERSITAS TERBUKA
 * Mata Kuliah : Pemrograman Berbasis Perangkat Bergerak (STSI4303)
 * Modul       : Modul 3 (TypeScript Models & Interfaces)
 * =====================================================================
 */

/**
 * Nilai huruf resmi UT beserta representasi bobot angka
 */
export type NilaiHuruf = 'A' | 'B' | 'C' | 'D' | 'E';

/**
 * Status registrasi mahasiswa di pangkalan data UT
 */
export type StatusMahasiswa = 'Aktif' | 'Cuti' | 'Lulus' | 'Nonaktif';

/**
 * Predikat kelulusan berdasarkan Indeks Prestasi Semester
 */
export type PredikatKelulusan = 'Dengan Pujian' | 'Sangat Memuaskan' | 'Memuaskan' | 'Cukup' | 'Kurang';

/**
 * Interface 1: Model Mata Kuliah
 */
export interface MataKuliah {
  readonly id: string;           // ID unik (tidak dapat diubah setelah dibuat)
  kode: string;                  // Contoh: STSI4303
  nama: string;                  // Contoh: Pemrograman Berbasis Perangkat Bergerak
  sks: number;                   // Beban SKS (1 - 6)
  nilaiHuruf?: NilaiHuruf;       // Opsional: Nilai huruf hasil ujian/tuton
  semester?: number;             // Semester rekomendasi kurikulum
}

/**
 * Interface 2: Model Mahasiswa UT
 */
export interface MahasiswaUT {
  readonly nim: string;          // 9 Digit NIM Mahasiswa UT
  nama: string;
  upbjj: string;                 // Kantor Layanan UPBJJ UT (misal: Jakarta, Samarinda, UT Layanan Luar Negeri)
  programStudi: string;          // Sistem Informasi / Informatika
  semesterBerjalan: number;
  status: StatusMahasiswa;
  emailKampus?: string;          // @ecampus.ut.ac.id
  daftarNilai: MataKuliah[];     // Koleksi mata kuliah yang diambil
}

/**
 * Interface 3: Hasil Kalkulasi IPS (Return Type Tugas 1)
 */
export interface HasilKalkulasiIPS {
  totalSks: number;
  totalMutu: number;
  ips: number;                   // Nilai pecahan 2 desimal (0.00 - 4.00)
  predikat: PredikatKelulusan;
  tanggalHitung: string;
}

/**
 * Fungsi pembantu konversi huruf ke bobot angka
 */
export function konversiHurufKeBobot(huruf: NilaiHuruf): number {
  switch (huruf) {
    case 'A': return 4.0;
    case 'B': return 3.0;
    case 'C': return 2.0;
    case 'D': return 1.0;
    case 'E': return 0.0;
  }
}
