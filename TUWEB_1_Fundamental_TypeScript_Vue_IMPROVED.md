# TUWEB 1: Fundamental TypeScript & Vue.js untuk Pengembangan Aplikasi Mobile

**Mata Kuliah:** Pemrograman Berbasis Piranti Bergerak (MSIM4401)  
**Dosen:** Anton Prafanto, S.Kom., M.T.  
**Universitas:** Universitas Mulawarman - Universitas Terbuka  
**Durasi:** 120 menit (2 jam)

---

## 🎯 Tujuan Pembelajaran

Setelah mengikuti sesi ini, mahasiswa diharapkan mampu:

### 📋 Level Pemahaman (Bloom's Taxonomy)

#### 🔵 **C1 - Mengingat (Remember)**
- Menyebutkan tipe data dasar TypeScript
- Mengidentifikasi komponen Vue.js
- Menjelaskan konsep dasar programming

#### 🔵 **C2 - Memahami (Understand)**  
- Menjelaskan perbedaan JavaScript dan TypeScript
- Memahami konsep reactive data di Vue.js
- Mengartikan syntax dasar TypeScript

#### 🔵 **C3 - Menerapkan (Apply)**
- Menulis kode TypeScript dengan tipe data yang benar
- Membuat komponen Vue.js sederhana
- Mengimplementasikan studi kasus NIM

---

## 🕐 Timeline Sesi

| Waktu | Aktivitas | Metode |
|-------|-----------|--------|
| 00:00-10:00 | **Pendahuluan & Ice Breaker** | Interaktif |
| 10:00-30:00 | **Teori TypeScript** | Ceramah + Demo |
| 30:00-50:00 | **Praktikum TypeScript** | Hands-on |
| 50:00-65:00 | **Teori Vue.js** | Ceramah + Demo |
| 65:00-85:00 | **Praktikum Vue.js** | Hands-on |
| 85:00-105:00 | **Studi Kasus NIM** | Guided Practice |
| 105:00-115:00 | **Quiz & Evaluasi** | Assessment |
| 115:00-120:00 | **Q&A & Penutup** | Diskusi |

---

## 📚 Materi 1: Pengenalan TypeScript untuk Mobile Development

### 1.1 Apa itu TypeScript? (Pemahaman Konsep)

#### 🎯 **Definisi Sederhana**
TypeScript adalah **JavaScript yang lebih disiplin**. Bayangkan:

> **JavaScript** = Bahasa sehari-hari yang fleksibel tapi kadang ambigu  
> **TypeScript** = Bahasa formal dengan aturan jelas yang mencegah kesalahan

#### 📊 **Perbandingan JavaScript vs TypeScript**

| Aspek | JavaScript | TypeScript |
|-------|------------|------------|
| **Tipe Data** | Dinamis (bisa berubah) | Statis (tetap) |
| **Error Detection** | Saat runtime | Saat development |
| **IDE Support** | Terbatas | Sangat baik |
| **Learning Curve** | Mudah | Sedang |
| **Best For** | Prototyping | Large Applications |

#### 💡 **Mengapa TypeScript Penting untuk Mobile?**

1. **🛡️ Type Safety** - Mencegah error sebelum aplikasi crash
2. **🔧 Better IDE** - Auto-completion dan error detection
3. **📈 Scalability** - Mudah dikembangkan untuk proyek besar
4. **🚀 Modern Features** - Support ES6+ terbaru

### 1.2 Setup Environment TypeScript (Langkah demi Langkah)

#### 🛠️ **Step 1: Install Node.js**
```bash
# Cek apakah Node.js sudah terinstall
node --version

# Jika belum, download dari https://nodejs.org
# Pilih LTS version (recommended)
```

#### 🛠️ **Step 2: Install TypeScript**
```bash
# Install TypeScript globally
npm install -g typescript

# Cek versi TypeScript
tsc --version

# Install ts-node untuk running langsung
npm install -g ts-node
```

#### 🛠️ **Step 3: Buat Project Pertama**
```bash
# Buat folder project
mkdir typescript-practice
cd typescript-practice

# Inisialisasi project
npm init -y

# Inisialisasi TypeScript
tsc --init
```

#### 🛠️ **Step 4: Konfigurasi TypeScript**
Buka file `tsconfig.json` dan ubah beberapa setting:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  }
}
```

### 1.3 Tipe Data Dasar TypeScript (Detail Lengkap)

#### 🔢 **1. Tipe Data Primitif**

```typescript
// 📝 String - untuk teks
let nama: string = "Anton Prafanto";
let nim: string = "230411013";
let alamat: string = "Jl. Ahmad Yani No. 123, Samarinda";

// 🔢 Number - untuk angka (integer & decimal)
let umur: number = 35;
let ipk: number = 3.75;
let tinggi: number = 170.5;

// ✅ Boolean - untuk true/false
let isActive: boolean = true;
let isLulus: boolean = false;
let hasScholarship: boolean = true;

// 🎯 Any - untuk tipe data apapun (gunakan dengan hati-hati!)
let data: any = "Bisa string";
data = 123; // sekarang jadi number
data = true; // sekarang jadi boolean

// ❌ Undefined & Null
let tidakAda: undefined = undefined;
let kosong: null = null;
```

#### 📚 **2. Array (Kumpulan Data)**

```typescript
// Array of strings
let mahasiswa: string[] = ["Budi", "Ani", "Citra", "Doni"];
let mataKuliah: Array<string> = ["Pemrograman", "Basis Data", "Jaringan"];

// Array of numbers
let nilai: number[] = [85, 90, 78, 92, 88];
let ipk: Array<number> = [3.5, 3.7, 3.2, 3.9];

// Array of objects
interface Mahasiswa {
  nim: string;
  nama: string;
  ipk: number;
}

let dataMahasiswa: Mahasiswa[] = [
  { nim: "230411013", nama: "Ahmad Rizki", ipk: 3.75 },
  { nim: "230411014", nama: "Siti Nurhaliza", ipk: 3.85 },
  { nim: "230411015", nama: "Budi Santoso", ipk: 3.65 }
];

// Array operations
console.log(mahasiswa.length); // 4
console.log(mahasiswa[0]); // "Budi"
mahasiswa.push("Eko"); // tambah data
mahasiswa.pop(); // hapus data terakhir
```

#### 🏗️ **3. Object & Interface**

```typescript
// Interface untuk mendefinisikan struktur object
interface Mahasiswa {
  nim: string;           // wajib diisi
  nama: string;          // wajib diisi
  umur?: number;         // optional (bisa kosong)
  ipk: number;           // wajib diisi
  isActive?: boolean;    // optional
  alamat?: {             // nested object
    jalan: string;
    kota: string;
    provinsi: string;
  };
}

// Membuat object sesuai interface
let mhs1: Mahasiswa = {
  nim: "230411013",
  nama: "Ahmad Rizki",
  ipk: 3.75,
  umur: 20,
  isActive: true,
  alamat: {
    jalan: "Jl. Ahmad Yani No. 123",
    kota: "Samarinda",
    provinsi: "Kalimantan Timur"
  }
};

// Object tanpa optional properties
let mhs2: Mahasiswa = {
  nim: "230411014",
  nama: "Siti Nurhaliza",
  ipk: 3.85
};

// Mengakses object properties
console.log(mhs1.nama); // "Ahmad Rizki"
console.log(mhs1.alamat?.kota); // "Samarinda" (safe navigation)
```

### 1.4 Function dengan TypeScript (Step by Step)

#### 🎯 **1. Basic Function**

```typescript
// Function sederhana dengan parameter dan return type
function sapa(nama: string): string {
  return `Halo, ${nama}! Selamat belajar TypeScript`;
}

// Memanggil function
let pesan = sapa("Anton");
console.log(pesan); // "Halo, Anton! Selamat belajar TypeScript"
```

#### 🧮 **2. Function dengan Multiple Parameters**

```typescript
// Function untuk menghitung nilai akhir
function hitungNilaiAkhir(
  uts: number, 
  uas: number, 
  tugas: number
): number {
  const nilaiAkhir = (uts * 0.3) + (uas * 0.5) + (tugas * 0.2);
  return Math.round(nilaiAkhir * 100) / 100; // dibulatkan 2 desimal
}

// Menggunakan function
let nilai1 = hitungNilaiAkhir(80, 85, 90); // 84.5
let nilai2 = hitungNilaiAkhir(75, 80, 85); // 79.5

console.log(`Nilai akhir: ${nilai1}`); // "Nilai akhir: 84.5"
```

#### ⚡ **3. Arrow Function**

```typescript
// Arrow function untuk operasi matematika sederhana
const kuadrat = (x: number): number => x * x;
const pangkatTiga = (x: number): number => x * x * x;
const tambahSepuluh = (x: number): number => x + 10;

// Menggunakan arrow function
console.log(kuadrat(5));      // 25
console.log(pangkatTiga(3));  // 27
console.log(tambahSepuluh(15)); // 25
```

#### 📝 **4. Void Function (Tidak Mengembalikan Nilai)**

```typescript
// Function untuk menampilkan pesan
function tampilkanPesan(pesan: string): void {
  console.log(`📢 ${pesan}`);
}

// Function untuk menyimpan data (simulasi)
function simpanDataMahasiswa(nim: string, nama: string): void {
  console.log(`💾 Menyimpan data: ${nim} - ${nama}`);
  // Di aplikasi nyata, ini akan menyimpan ke database
}

// Menggunakan void function
tampilkanPesan("Selamat datang di kelas TypeScript!");
simpanDataMahasiswa("230411013", "Ahmad Rizki");
```

#### 🔄 **5. Function dengan Default Parameters**

```typescript
// Function dengan default value
function biodata(
  nama: string, 
  umur: number = 20, 
  kota: string = "Samarinda"
): string {
  return `Nama: ${nama}, Umur: ${umur}, Kota: ${kota}`;
}

// Memanggil dengan berbagai cara
console.log(biodata("Anton")); // "Nama: Anton, Umur: 20, Kota: Samarinda"
console.log(biodata("Budi", 25)); // "Nama: Budi, Umur: 25, Kota: Samarinda"
console.log(biodata("Citra", 22, "Balikpapan")); // "Nama: Citra, Umur: 22, Kota: Balikpapan"
```

---

## 📚 Materi 2: Fundamental Vue.js

### 2.1 Apa itu Vue.js? (Konsep untuk Pemula)

#### 🎯 **Definisi Visual**
Vue.js adalah **framework JavaScript untuk membangun antarmuka pengguna (UI)**. Bayangkan Vue.js seperti:

> **Lego Blocks** untuk website - menyediakan komponen siap pakai yang bisa disusun menjadi aplikasi lengkap!

#### 🏗️ **Konsep Utama Vue.js**

1. **🎨 Declarative Rendering** - Deskripsikan UI yang diinginkan, Vue akan mengurus cara membuatnya
2. **⚡ Reactive Data** - Data berubah → UI otomatis update
3. **🧩 Component-Based** - Bangun aplikasi dari komponen-komponen kecil
4. **📱 Progressive** - Bisa digunakan untuk bagian kecil hingga aplikasi besar

#### 📊 **Vue.js vs Framework Lain**

| Framework | Learning Curve | Performance | Ecosystem | Best For |
|-----------|----------------|-------------|-----------|----------|
| **Vue.js** | Mudah | Tinggi | Growing | Beginners, Rapid Development |
| **React** | Sedang | Tinggi | Large | Complex Applications |
| **Angular** | Sulit | Sedang | Large | Enterprise Applications |

### 2.2 Setup Environment Vue.js (Step by Step)

#### 🛠️ **Step 1: Install Vue CLI**
```bash
# Install Vue CLI globally
npm install -g @vue/cli

# Cek versi
vue --version
```

#### 🛠️ **Step 2: Buat Project Vue Baru**
```bash
# Buat project baru
vue create vue-practice

# Pilih preset "Default (Vue 3)" atau "Manually select features"
# Untuk pemula, pilih Default saja

# Masuk ke folder project
cd vue-practice

# Jalankan development server
npm run serve
```

#### 🛠️ **Step 3: Buka di Browser**
Buka `http://localhost:8080` untuk melihat aplikasi Vue pertama Anda!

### 2.3 Struktur Project Vue.js

```
vue-practice/
├── public/           # Static files (images, icons)
├── src/
│   ├── assets/       # Asset files
│   ├── components/    # Reusable components
│   ├── App.vue       # Main application component
│   └── main.js       # Application entry point
├── package.json      # Project dependencies
└── vue.config.js     # Vue configuration
```

### 2.4 Konsep Dasar Vue.js dengan Contoh Praktis

#### 🏗️ **1. Vue Component Structure**

Setiap Vue component memiliki 3 bagian utama:

```vue
<template>
  <!-- 🎨 HTML Template - UI yang akan ditampilkan -->
  <div class="container">
    <h1>{{ judul }}</h1>
    <p>{{ pesan }}</p>
    <button @click="ubahPesan">Klik Saya</button>
  </div>
</template>

<script>
// 🧠 JavaScript Logic - Data dan methods
export default {
  name: 'HelloWorld',
  data() {
    return {
      judul: 'Aplikasi Vue Pertama Saya',
      pesan: 'Selamat belajar Vue.js!'
    }
  },
  methods: {
    ubahPesan() {
      this.pesan = 'Tombol sudah diklik! 🎉';
    }
  }
}
</script>

<style>
/* 🎨 CSS Styling - Penampilan component */
.container {
  text-align: center;
  padding: 20px;
}

h1 {
  color: #42b883; /* Vue green color */
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #369870;
}
</style>
```

#### ⚡ **2. Reactive Data Binding**

```vue
<template>
  <div>
    <h2>📱 Counter App</h2>
    <p>Angka saat ini: <strong>{{ counter }}</strong></p>
    
    <button @click="increment">➕ Tambah</button>
    <button @click="decrement">➖ Kurang</button>
    <button @click="reset">🔄 Reset</button>
    
    <div v-if="counter > 10" class="warning">
      ⚠️ Angka sudah lebih dari 10!
    </div>
  </div>
</template>

<script>
export default {
  name: 'CounterApp',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      if (this.counter > 0) {
        this.counter--;
      }
    },
    reset() {
      this.counter = 0;
    }
  }
}
</script>

<style scoped>
.warning {
  background-color: #fff3cd;
  color: #856404;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

button {
  margin: 5px;
  padding: 8px 16px;
  font-size: 14px;
}
</style>
```

#### 📝 **3. Working with Forms**

```vue
<template>
  <div class="form-container">
    <h2>📝 Form Mahasiswa</h2>
    
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="nim">NIM:</label>
        <input 
          type="text" 
          id="nim" 
          v-model="form.nim" 
          placeholder="Masukkan NIM"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="nama">Nama Lengkap:</label>
        <input 
          type="text" 
          id="nama" 
          v-model="form.nama" 
          placeholder="Masukkan nama lengkap"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="ipk">IPK:</label>
        <input 
          type="number" 
          id="ipk" 
          v-model.number="form.ipk" 
          min="0" 
          max="4" 
          step="0.01"
          placeholder="0.00 - 4.00"
          required
        />
      </div>
      
      <div class="form-group">
        <label>
          <input type="checkbox" v-model="form.isActive" />
          Mahasiswa Aktif
        </label>
      </div>
      
      <button type="submit" class="submit-btn">
        💾 Simpan Data
      </button>
    </form>
    
    <!-- Preview Data -->
    <div v-if="showPreview" class="preview">
      <h3>📋 Preview Data:</h3>
      <p><strong>NIM:</strong> {{ form.nim }}</p>
      <p><strong>Nama:</strong> {{ form.nama }}</p>
      <p><strong>IPK:</strong> {{ form.ipk }}</p>
      <p><strong>Status:</strong> {{ form.isActive ? 'Aktif' : 'Tidak Aktif' }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MahasiswaForm',
  data() {
    return {
      form: {
        nim: '',
        nama: '',
        ipk: 0,
        isActive: true
      },
      showPreview: false
    }
  },
  methods: {
    submitForm() {
      // Validasi sederhana
      if (!this.form.nim || !this.form.nama) {
        alert('Mohon lengkapi semua field yang wajib!');
        return;
      }
      
      if (this.form.ipk < 0 || this.form.ipk > 4) {
        alert('IPK harus antara 0.00 - 4.00!');
        return;
      }
      
      // Tampilkan preview
      this.showPreview = true;
      
      // Simulasi penyimpanan data
      console.log('Data yang disimpan:', this.form);
      
      // Reset form (opsional)
      // this.resetForm();
    },
    
    resetForm() {
      this.form = {
        nim: '',
        nama: '',
        ipk: 0,
        isActive: true
      };
      this.showPreview = false;
    }
  }
}
</script>

<style scoped>
.form-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.submit-btn {
  background-color: #42b883;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
}

.submit-btn:hover {
  background-color: #369870;
}

.preview {
  margin-top: 20px;
  padding: 15px;
  background-color: #e8f5e8;
  border-radius: 5px;
  border-left: 4px solid #42b883;
}
</style>
```

---

## 🛠️ Praktikum 1: Pola Segitiga dari NIM (Step-by-Step)

### 🎯 **Tujuan Praktikum**
Membuat program TypeScript untuk menampilkan pola segitiga berdasarkan digit terakhir NIM mahasiswa.

### 📋 **Spesifikasi Program**
- **Input:** NIM mahasiswa (contoh: 230411013)
- **Process:** Ambil digit terakhir sebagai tinggi segitiga
- **Output:** Pola segitiga angka

### 🧩 **Logika Algoritma**

```
CONTOH: NIM = 230411013
Digit terakhir = 3
Tinggi segitiga = 3

OUTPUT:
1
1 2
1 2 3
```

### 💻 **Implementasi TypeScript**

#### **Step 1: Buat Class SegitigaNIM**

```typescript
// File: segitiga-nim.ts

class SegitigaNIM {
  // Property untuk menyimpan NIM
  private nim: string;

  // Constructor untuk inisialisasi NIM
  constructor(nim: string) {
    this.nim = nim;
  }

  // Method untuk mendapatkan digit terakhir NIM
  getDigitTerakhir(): number {
    // Ambil karakter terakhir dari string NIM
    const digitTerakhir = this.nim.slice(-1);
    
    // Konversi ke number
    const angka = parseInt(digitTerakhir);
    
    // Jika 0, default ke 5 agar ada polanya
    return angka === 0 ? 5 : angka;
  }

  // Method untuk membuat pola segitiga
  buatPolaSegitiga(): string[] {
    const tinggi = this.getDigitTerakhir();
    const hasil: string[] = [];

    // Loop dari baris 1 hingga tinggi
    for (let baris = 1; baris <= tinggi; baris++) {
      let barisString = '';
      
      // Loop untuk setiap angka dalam baris
      for (let kolom = 1; kolom <= baris; kolom++) {
        barisString += kolom.toString();
        
        // Tambahkan spasi kecuali untuk angka terakhir
        if (kolom < baris) {
          barisString += ' ';
        }
      }
      
      // Tambahkan baris ke hasil
      hasil.push(barisString);
    }

    return hasil;
  }

  // Method untuk menampilkan hasil ke console
  tampilkanHasil(): void {
    const pola = this.buatPolaSegitiga();
    
    console.log('═'.repeat(30));
    console.log(`🔺 POLA SEGITIGA NIM: ${this.nim}`);
    console.log('═'.repeat(30));
    console.log(`Digit Terakhir: ${this.getDigitTerakhir()}`);
    console.log(`Tinggi Segitiga: ${this.getDigitTerakhir()}`);
    console.log('');
    
    // Tampilkan pola
    pola.forEach((baris, index) => {
      console.log(baris);
    });
    
    console.log('═'.repeat(30));
  }

  // Method untuk validasi NIM
  isValidNIM(): boolean {
    // NIM harus minimal 5 digit dan hanya angka
    return this.nim.length >= 5 && /^\d+$/.test(this.nim);
  }
}

// Export class untuk digunakan di file lain
export { SegitigaNIM };
```

#### **Step 2: Buat Program Utama**

```typescript
// File: main.ts

import { SegitigaNIM } from './segitiga-nim';

// Function untuk menjalankan program
function main() {
  console.log('🚀 PROGRAM POLA SEGITIGA NIM');
  console.log('================================');
  
  // Test dengan berbagai NIM
  const testNIMs = [
    '230411013', // digit terakhir 3
    '230411020', // digit terakhir 0 (akan jadi 5)
    '230411005', // digit terakhir 5
    '230411001'  // digit terakhir 1
  ];

  testNIMs.forEach(nim => {
    const segitiga = new SegitigaNIM(nim);
    
    if (segitiga.isValidNIM()) {
      segitiga.tampilkanHasil();
    } else {
      console.log(`❌ NIM ${nim} tidak valid!`);
    }
    
    console.log(''); // Spasi antar test
  });
}

// Jalankan program
main();
```

#### **Step 3: Jalankan Program**

```bash
# Compile TypeScript ke JavaScript
tsc segitiga-nim.ts main.ts

# Jalankan program
node main.js

# Atau langsung dengan ts-node
ts-node main.ts
```

### 🎨 **Integrasi dengan Vue.js**

#### **Step 1: Buat Vue Component**

```vue
<!-- SegitigaNIM.vue -->
<template>
  <div class="segitiga-container">
    <div class="header">
      <h2>🔺 Pola Segitiga dari NIM</h2>
      <p>Masukkan NIM Anda untuk generate pola segitiga</p>
    </div>

    <!-- Input Section -->
    <div class="input-section">
      <label for="nim-input">Masukkan NIM:</label>
      <input
        id="nim-input"
        v-model="nim"
        type="text"
        placeholder="Contoh: 230411013"
        @input="validateAndGenerate"
        maxlength="10"
      />
      
      <div v-if="errorMessage" class="error-message">
        ⚠️ {{ errorMessage }}
      </div>
    </div>

    <!-- Result Section -->
    <div v-if="pola.length > 0" class="result-section">
      <h3>📋 Hasil Pola Segitiga:</h3>
      <div class="info-box">
        <p><strong>NIM:</strong> {{ nim }}</p>
        <p><strong>Digit Terakhir:</strong> {{ digitTerakhir }}</p>
        <p><strong>Tinggi Segitiga:</strong> {{ digitTerakhir }} baris</p>
      </div>
      
      <div class="pola-display">
        <div 
          v-for="(baris, index) in pola" 
          :key="index"
          class="baris"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          {{ baris }}
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>Menggenerate pola...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SegitigaNIM',
  data() {
    return {
      nim: '',
      pola: [],
      digitTerakhir: 0,
      loading: false,
      errorMessage: ''
    }
  },
  methods: {
    // Validasi NIM
    validateNIM(nim) {
      if (!nim) {
        return 'NIM tidak boleh kosong';
      }
      
      if (nim.length < 5) {
        return 'NIM minimal 5 digit';
      }
      
      if (!/^\d+$/.test(nim)) {
        return 'NIM hanya boleh mengandung angka';
      }
      
      return ''; // No error
    },

    // Validasi dan generate pola
    async validateAndGenerate() {
      // Reset state
      this.errorMessage = '';
      this.pola = [];
      
      // Validasi
      const error = this.validateNIM(this.nim);
      if (error) {
        this.errorMessage = error;
        return;
      }
      
      // Simulasi loading
      this.loading = true;
      
      // Simulasi async operation
      await new Promise(resolve => setTimeout(resolve, 500));
      
      try {
        // Generate pola
        this.generatePola();
      } catch (error) {
        this.errorMessage = 'Terjadi kesalahan saat generate pola';
      } finally {
        this.loading = false;
      }
    },

    // Generate pola segitiga
    generatePola() {
      // Ambil digit terakhir
      const digitTerakhirStr = this.nim.slice(-1);
      this.digitTerakhir = parseInt(digitTerakhirStr) || 5; // Default 5 jika 0
      
      // Generate pola
      const hasil = [];
      
      for (let baris = 1; baris <= this.digitTerakhir; baris++) {
        let barisString = '';
        
        for (let kolom = 1; kolom <= baris; kolom++) {
          barisString += kolom.toString();
          if (kolom < baris) {
            barisString += ' ';
          }
        }
        
        hasil.push(barisString);
      }
      
      this.pola = hasil;
    }
  }
}
</script>

<style scoped>
.segitiga-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h2 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.header p {
  color: #7f8c8d;
  font-size: 14px;
}

.input-section {
  margin-bottom: 30px;
}

.input-section label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #2c3e50;
}

.input-section input {
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.input-section input:focus {
  outline: none;
  border-color: #42b883;
}

.error-message {
  margin-top: 8px;
  padding: 8px 12px;
  background-color: #ffebee;
  color: #c62828;
  border-radius: 4px;
  font-size: 14px;
}

.result-section {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e9ecef;
}

.result-section h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.info-box {
  background-color: #e3f2fd;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.info-box p {
  margin: 5px 0;
  color: #1565c0;
}

.pola-display {
  font-family: 'Courier New', monospace;
  font-size: 18px;
  line-height: 1.8;
  text-align: center;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  border: 2px solid #42b883;
}

.baris {
  margin: 5px 0;
  opacity: 0;
  animation: fadeInUp 0.5s forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.loading {
  text-align: center;
  padding: 20px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #42b883;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 10px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
```

---

## 🎯 Latihan Mandiri (Progressive Difficulty)

### 📈 **Level 1: Basic (Mudah)**

#### **Latihan 1.1: Enhanced Segitiga**
Modifikasi program segitiga untuk menampilkan:
1. **Pola terbalik** (dari besar ke kecil)
2. **Pola dengan karakter khusia** (★, ♦, ♥)
3. **Pola dengan warna berbeda** untuk setiap baris

```typescript
// Hint: Gunakan array karakter
const karakter = ['★', '♦', '♥', '♠', '♣'];
```

#### **Latihan 1.2: Input Validation**
Tambahkan validasi yang lebih baik:
1. **NIM harus 9-10 digit**
2. **Digit pertama tidak boleh 0**
3. **Show error message yang user-friendly**

### 📈 **Level 2: Intermediate (Sedang)**

#### **Latihan 2.1: Multiple Patterns**
Buat program yang bisa generate berbagai pola:
1. **Piramida** (simetris di tengah)
2. **Diamond shape**
3. **Number pyramid**

#### **Latihan 2.2: Interactive Features**
Tambahkan fitur interaktif:
1. **Animation** saat generate pola
2. **Save history** dari NIM yang sudah diinput
3. **Export to image** functionality

### 📈 **Level 3: Advanced (Menantang)**

#### **Latihan 3.1: Pattern Generator**
Buat aplikasi lengkap:
1. **Multiple pattern types** dengan menu selection
2. **Customizable settings** (size, character, color)
3. **Pattern library** dengan save/load functionality

#### **Latihan 3.2: Performance Optimization**
Optimasi aplikasi:
1. **Lazy loading** untuk complex patterns
2. **Web Workers** untuk heavy calculations
3. **Caching system** untuk generated patterns

---

## 📝 Evaluasi & Assessment

### 🎯 **Quick Quiz (10 menit)**

#### **Soal Pilihan Ganda**

1. **Apa keunggulan utama TypeScript dibanding JavaScript?**
   - A) Lebih cepat dijalankan
   - B) Type safety dan better IDE support  
   - C) Lebih mudah dipelajari
   - D) Support lebih banyak browser

2. **Method yang tepat untuk mengambil digit terakhir string di TypeScript:**
   - A) `str.last()`
   - B) `str.slice(-1)`
   - C) `str.getEnd()`
   - D) `str[-1]`

3. **Apa itu reactive data di Vue.js?**
   - A) Data yang bisa berubah
   - B) Data yang otomatis update UI ketika berubah
   - C) Data yang tersimpan di database
   - D) Data yang statis

4. **Directive Vue.js untuk conditional rendering:**
   - A) `v-show`
   - B) `v-if`
   - C) `v-for`
   - D) Semua benar

5. **Symbol untuk two-way data binding di Vue.js:**
   - A) `@`
   - B) `:`
   - C) `v-model`
   - D) `v-bind`

#### **Jawaban:**
1. B, 2. B, 3. B, 4. D, 5. C

### 📊 **Rubrik Penilaian Praktikum**

| Kriteria | Sangat Baik (4) | Baik (3) | Cukup (2) | Kurang (1) |
|----------|-----------------|----------|-----------|------------|
| **Kebenaran Logika** | ✅ Semua kasus benar | ✅ Sebagian besar benar | ⚠️ Beberapa error | ❌ Banyak error |
| **Code Quality** | ✅ Clean & readable | ✅ Good structure | ⚠️ Needs improvement | ❌ Poor structure |
| **Error Handling** | ✅ Comprehensive | ✅ Basic handling | ⚠️ Minimal handling | ❌ No handling |
| **UI/UX** | ✅ Beautiful & intuitive | ✅ Good design | ⚠️ Basic UI | ❌ Poor UX |
| **Creativity** | ✅ Extra features | ✅ Good implementation | ⚠️ Basic only | ❌ Incomplete |

---

## 🔗 Resources Tambahan

### 📚 **Documentation & Learning**

#### **Official Documentation**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Panduan resmi TypeScript
- [Vue.js Guide](https://vuejs.org/guide/) - Panduan lengkap Vue.js
- [TypeScript for Vue.js](https://vuejs.org/guide/typescript/overview.html) - Integrasi TS + Vue

#### **Interactive Learning**
- [TypeScript Playground](https://www.typescriptlang.org/play) - Coba TypeScript online
- [Vue.js Mastery](https://www.vuemastery.com/) - Video tutorial Vue.js
- [Scrimba Vue Course](https://scrimba.com/learn/learnvue) - Interactive Vue course

### 🛠️ **Development Tools**

#### **Code Editors & Extensions**
- **VS Code** dengan extensions:
  - Vue Language Features (Volar)
  - TypeScript Importer
  - Prettier - Code formatter
  - ESLint - Code linter

#### **Browser DevTools**
- **Vue DevTools** - Debug Vue applications
- **TypeScript Compiler** - Check types in browser

### 🎮 **Practice Platforms**

#### **Coding Challenges**
- [Codewars](https://www.codewars.com/) - Algorithm challenges
- [HackerRank](https://www.hackerrank.com/) - Programming problems
- [LeetCode](https://leetcode.com/) - Interview preparation

#### **Vue.js Practice**
- [Vue.js Examples](https://vuejs.org/examples/) - Official examples
- [CodeSandbox Vue](https://codesandbox.io/s/vue) - Online Vue editor

---

## 💡 Tips & Best Practices

### 🎯 **Untuk Mahasiswa Pemula**

#### **Learning Strategy**
1. **Start Small** - Mulai dari konsep dasar
2. **Practice Daily** - Coding setiap hari minimal 30 menit
3. **Understand, Don't Memorize** - Fokus pada konsep bukan syntax
4. **Ask Questions** - Jangan takut bertanya
5. **Build Projects** - Praktek langsung dengan proyek nyata

#### **Common Mistakes to Avoid**
1. **Skipping Basics** - Jangan loncati fundamental
2. **Copy-Paste Without Understanding** - Pahami setiap baris kode
3. **Giving Up Too Early** - Programming butuh kesabaran
4. **Not Reading Documentation** - Docs adalah teman terbaik
5. **Working in Isolation** - Join communities dan forums

### 🚀 **Code Quality Tips**

#### **TypeScript Best Practices**
1. **Use Interfaces** untuk object structure
2. **Prefer `const` over `let`** ketika possible
3. **Use Type Inference** untuk cleaner code
4. **Avoid `any` type** unless absolutely necessary
5. **Enable Strict Mode** di `tsconfig.json`

#### **Vue.js Best Practices**
1. **Use Composition API** untuk new projects
2. **Keep Components Small** - Single responsibility
3. **Use Computed Properties** untuk derived data
4. **Organize Components** in logical folders
5. **Follow Naming Conventions** (PascalCase untuk components)

---

## 🎉 Penutup Sesi

### 🏆 **Achievement Unlocked!**

Selamat! Anda telah menyelesaikan TUWEB 1 dan telah berhasil:

- ✅ **Memahami fundamental TypeScript** untuk mobile development
- ✅ **Menguasai dasar Vue.js** untuk building interactive UIs
- ✅ **Membuat aplikasi praktis** dengan studi kasus NIM
- ✅ **Menerapkan best practices** dalam coding

### 🎯 **Key Takeaways**

1. **TypeScript = JavaScript + Types** - Lebih safe dan maintainable
2. **Vue.js = Progressive Framework** - Mudah dipelajari, powerful
3. **Practice Makes Perfect** - Terus coding dan eksperimen
4. **Start Simple, Build Up** - Mulai dari dasar lalu kompleks

### 🚀 **Next Steps**

1. **Review materi** ini minggu depan sebelum TUWEB 2
2. **Complete latihan mandiri** untuk reinforcement
3. **Explore additional resources** yang disediakan
4. **Prepare questions** untuk sesi berikutnya
5. **Start thinking about final project** ideas

### 📞 **Support & Contact**

**Jika ada pertanyaan:**
- **Email:** anton.prafanto@mulawarman.ac.id
- **WhatsApp Group:** [Link akan dibagikan]
- **Office Hours:** [Jadwal konsultasi]

**Remember:** "The expert in anything was once a beginner. Keep learning, keep growing! 🌱"

---

**See you in TUWEB 2: Ionic Framework & API Integration! 🚀**

---

*Dicetak oleh: Anton Prafanto, S.Kom., M.T.*  
*Universitas Mulawarman - Program Studi Informatika*  
*Universitas Terbuka - Pusat Belajar Jarak Jauh*  
*Tanggal: 29 Oktober 2025*
