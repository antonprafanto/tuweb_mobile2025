# MATERI TUWEB 4 - PERTEMUAN 14
# PROJECT AKHIR: APLIKASI MOBILE TERINTEGRASI LENGKAP

---

## 📋 INFORMASI MATA KULIAH

**Mata Kuliah**: Pemrograman Berbasis Perangkat Bergerak (MSIM4401)
**Pertemuan**: 14 (TUWEB 4 - Project Akhir)
**Pokok Bahasan**: Pengembangan Aplikasi Mobile Terintegrasi Lengkap dari Awal sampai Deployment
**Pendekatan**: Project-Based Learning

---

## 🎯 TUJUAN PEMBELAJARAN

Setelah menyelesaikan praktikum ini, mahasiswa diharapkan mampu:

1. Merancang dan mengembangkan aplikasi mobile lengkap dari awal hingga akhir
2. Mengintegrasikan berbagai teknologi (Vue, Ionic, REST API, Native Plugins)
3. Menerapkan best practices dalam pengembangan mobile
4. Melakukan testing dan debugging aplikasi secara menyeluruh
5. Mengoptimasi performa dan user experience aplikasi
6. Mendeploy aplikasi ke perangkat Android
7. Mempersiapkan aplikasi untuk publikasi di Google Play Store
8. Membuat dokumentasi dan user guide aplikasi

---

## 📚 PRASYARAT

Sebelum memulai praktikum ini, pastikan Anda telah:

- ✅ Menyelesaikan Tuweb 1 (Pertemuan 6)
- ✅ Menyelesaikan Tuweb 2 (Pertemuan 10)
- ✅ Memahami Vue.js, Ionic Framework, dan Capacitor
- ✅ Mampu build aplikasi menjadi APK
- ✅ Memiliki ide aplikasi atau mengikuti studi kasus yang disediakan

---

## 🎨 STUDI KASUS: APLIKASI "KAMPUS KITA"

### Overview Aplikasi

**Kampus Kita** adalah aplikasi mobile untuk mahasiswa yang mengintegrasikan berbagai fitur penting:

1. **Informasi Akademik** - Jadwal kuliah, nilai, dan pengumuman
2. **Manajemen Tugas** - To-do list dengan reminder
3. **Info Cuaca & Lokasi** - Cuaca kampus dan navigasi
4. **Profil Mahasiswa** - Data diri dengan foto
5. **Berita & Artikel** - Feed berita kampus dari API
6. **Catatan** - Note-taking dengan rich text

### Fitur Utama:

✅ **Offline-first**: Data disimpan lokal, sync saat online
✅ **Real-time**: Notifikasi dan update terbaru
✅ **Native Features**: Camera, GPS, Storage
✅ **Modern UI**: Material Design dengan animasi
✅ **Responsive**: Adaptif untuk berbagai ukuran layar

---

## 🏗️ ARSITEKTUR APLIKASI

### Struktur Folder

```
kampus-kita/
├── android/                    # Android platform
├── ios/                        # iOS platform (opsional)
├── public/                     # Static assets
├── src/
│   ├── assets/                 # Images, icons
│   ├── components/             # Reusable components
│   │   ├── common/             # Button, Card, dll
│   │   ├── layout/             # Header, Footer
│   │   └── features/           # Feature-specific
│   ├── composables/            # Vue composables (hooks)
│   ├── models/                 # TypeScript interfaces
│   ├── router/                 # Routing configuration
│   ├── services/               # API services
│   │   ├── api/                # HTTP clients
│   │   ├── storage/            # Local storage
│   │   └── native/             # Native plugins
│   ├── stores/                 # State management (Pinia)
│   ├── utils/                  # Helper functions
│   ├── views/                  # Pages/Views
│   ├── theme/                  # CSS/SCSS files
│   ├── App.vue                 # Root component
│   └── main.ts                 # Entry point
├── tests/                      # Unit & E2E tests
├── .env                        # Environment variables
├── capacitor.config.ts         # Capacitor config
├── ionic.config.json           # Ionic config
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
└── vite.config.ts              # Vite bundler config
```

---

## 🚀 PRAKTIKUM 1: SETUP PROJECT & ARCHITECTURE

### Langkah 1: Membuat Project Baru

```bash
# Buat project dengan template tabs
ionic start kampus-kita tabs --type=vue --capacitor

cd kampus-kita
```

---

### Langkah 2: Install Dependencies

```bash
# State Management
npm install pinia

# HTTP Client
npm install axios

# Date Utilities
npm install date-fns

# Validation
npm install yup

# Rich Text Editor
npm install @tiptap/vue-3 @tiptap/starter-kit

# Capacitor Plugins
npm install @capacitor/geolocation @capacitor/camera @capacitor/preferences @capacitor/local-notifications @capacitor/share @capacitor/network

# Sync
npx cap sync
```

---

### Langkah 3: Setup State Management (Pinia)

File: `src/stores/index.ts`

```typescript
import { createPinia } from 'pinia';

export const pinia = createPinia();
```

File: `src/main.ts` (update)

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { pinia } from './stores';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components */
import '@ionic/vue/css/core.css';
/* ... other ionic css ... */

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(pinia);

router.isReady().then(() => {
  app.mount('#app');
});
```

---

### Langkah 4: Membuat Models/Interfaces

File: `src/models/index.ts`

```typescript
// User Model
export interface User {
  id: string;
  nim: string;
  name: string;
  email: string;
  prodi: string;
  semester: number;
  photo?: string;
}

// Task Model
export interface Task {
  id: string;
  title: string;
  description: string;
  deadline: Date;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
  category: 'kuliah' | 'tugas' | 'ujian' | 'lainnya';
  createdAt: Date;
}

// Schedule Model
export interface Schedule {
  id: string;
  mataKuliah: string;
  dosen: string;
  ruangan: string;
  hari: string;
  jamMulai: string;
  jamSelesai: string;
}

// Note Model
export interface Note {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

// News/Article Model
export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishedAt: Date;
  category: string;
}

// Weather Model
export interface Weather {
  city: string;
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}
```

---

### Langkah 5: Setup Environment Variables

File: `.env`

```env
VITE_APP_NAME=Kampus Kita
VITE_API_BASE_URL=https://api.kampuskita.ac.id/v1
VITE_WEATHER_API_URL=https://api.open-meteo.com/v1
VITE_NEWS_API_URL=https://newsapi.org/v2
```

File: `src/config/index.ts`

```typescript
export const config = {
  appName: import.meta.env.VITE_APP_NAME || 'Kampus Kita',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
  weatherApiUrl: import.meta.env.VITE_WEATHER_API_URL,
  newsApiUrl: import.meta.env.VITE_NEWS_API_URL,
};
```

---

## 📦 PRAKTIKUM 2: MEMBUAT SERVICES LAYER

### Langkah 1: HTTP Client Setup

File: `src/services/api/httpClient.ts`

```typescript
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { config } from '@/config';

class HttpClient {
  private instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request Interceptor
    this.instance.interceptors.request.use(
      (config) => {
        // Bisa tambahkan token di sini
        const token = localStorage.getItem('authToken');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response Interceptor
    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        // Handle errors globally
        if (error.response?.status === 401) {
          // Redirect to login
          console.log('Unauthorized, redirecting to login...');
        }
        return Promise.reject(error);
      }
    );
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.instance.get(url, config);
    return response.data;
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.instance.post(url, data, config);
    return response.data;
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.instance.put(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.instance.delete(url, config);
    return response.data;
  }
}

export const apiClient = new HttpClient(config.apiBaseUrl);
export const weatherClient = new HttpClient(config.weatherApiUrl);
```

---

### Langkah 2: Storage Service

File: `src/services/storage/storageService.ts`

```typescript
import { Preferences } from '@capacitor/preferences';

export class StorageService {
  /**
   * Simpan data
   */
  static async set(key: string, value: any): Promise<void> {
    await Preferences.set({
      key,
      value: JSON.stringify(value),
    });
  }

  /**
   * Ambil data
   */
  static async get<T>(key: string): Promise<T | null> {
    const { value } = await Preferences.get({ key });
    return value ? JSON.parse(value) : null;
  }

  /**
   * Hapus data
   */
  static async remove(key: string): Promise<void> {
    await Preferences.remove({ key });
  }

  /**
   * Hapus semua data
   */
  static async clear(): Promise<void> {
    await Preferences.clear();
  }

  /**
   * Cek apakah key ada
   */
  static async has(key: string): Promise<boolean> {
    const { value } = await Preferences.get({ key });
    return value !== null;
  }
}

// Storage Keys
export const STORAGE_KEYS = {
  USER: 'user',
  TASKS: 'tasks',
  NOTES: 'notes',
  SCHEDULES: 'schedules',
  SETTINGS: 'settings',
  THEME: 'theme',
};
```

---

### Langkah 3: News Service

File: `src/services/api/newsService.ts`

```typescript
import { Article } from '@/models';

// Mock data untuk demo (karena NewsAPI butuh key)
const mockArticles: Article[] = [
  {
    id: 1,
    title: 'Pendaftaran Mahasiswa Baru Tahun 2025',
    excerpt: 'Universitas membuka pendaftaran mahasiswa baru untuk tahun akademik 2025/2026.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: 'https://picsum.photos/400/250?random=1',
    author: 'Admin Kampus',
    publishedAt: new Date('2025-01-01'),
    category: 'Pengumuman',
  },
  {
    id: 2,
    title: 'Seminar Nasional Teknologi Informasi',
    excerpt: 'Prodi Informatika mengadakan seminar nasional dengan tema AI dan Machine Learning.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: 'https://picsum.photos/400/250?random=2',
    author: 'Prodi Informatika',
    publishedAt: new Date('2025-01-15'),
    category: 'Event',
  },
  {
    id: 3,
    title: 'Beasiswa Prestasi Semester Genap 2024',
    excerpt: 'Informasi beasiswa prestasi untuk mahasiswa berprestasi.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: 'https://picsum.photos/400/250?random=3',
    author: 'Kemahasiswaan',
    publishedAt: new Date('2025-01-20'),
    category: 'Beasiswa',
  },
];

export class NewsService {
  /**
   * Get all articles
   */
  static async getArticles(): Promise<Article[]> {
    // Simulasi API call dengan delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockArticles;
  }

  /**
   * Get article by ID
   */
  static async getArticleById(id: number): Promise<Article | null> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockArticles.find(article => article.id === id) || null;
  }

  /**
   * Get articles by category
   */
  static async getArticlesByCategory(category: string): Promise<Article[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockArticles.filter(article => article.category === category);
  }
}
```

---

### Langkah 4: Weather Service

File: `src/services/api/weatherService.ts`

```typescript
import { weatherClient } from './httpClient';
import { Weather } from '@/models';

export class WeatherService {
  /**
   * Get weather by coordinates
   */
  static async getWeather(lat: number, lon: number): Promise<Weather> {
    try {
      const response = await weatherClient.get<any>('/forecast', {
        params: {
          latitude: lat,
          longitude: lon,
          current_weather: true,
          hourly: 'temperature_2m,relative_humidity_2m,windspeed_10m',
          timezone: 'Asia/Jakarta'
        }
      });

      return {
        city: 'Samarinda', // Bisa pakai reverse geocoding API
        temperature: response.current_weather.temperature,
        description: this.getWeatherDescription(response.current_weather.weathercode),
        humidity: response.hourly.relative_humidity_2m[0],
        windSpeed: response.current_weather.windspeed,
        icon: this.getWeatherIcon(response.current_weather.weathercode),
      };
    } catch (error) {
      console.error('Error fetching weather:', error);
      throw error;
    }
  }

  /**
   * Get weather by city name (preset)
   */
  static async getWeatherByCity(city: string): Promise<Weather> {
    const cities: { [key: string]: { lat: number; lon: number } } = {
      'samarinda': { lat: -0.5, lon: 117.15 },
      'balikpapan': { lat: -1.24, lon: 116.89 },
      'jakarta': { lat: -6.2, lon: 106.8 },
    };

    const coords = cities[city.toLowerCase()];
    if (!coords) {
      throw new Error('City not found');
    }

    return this.getWeather(coords.lat, coords.lon);
  }

  private static getWeatherDescription(code: number): string {
    const descriptions: { [key: number]: string } = {
      0: 'Cerah',
      1: 'Cerah Sebagian',
      2: 'Berawan Sebagian',
      3: 'Berawan',
      45: 'Berkabut',
      48: 'Berkabut Tebal',
      51: 'Gerimis Ringan',
      61: 'Hujan Ringan',
      63: 'Hujan Sedang',
      65: 'Hujan Lebat',
      95: 'Badai Petir',
    };
    return descriptions[code] || 'Unknown';
  }

  private static getWeatherIcon(code: number): string {
    // Mapping ke ionicons
    const icons: { [key: number]: string } = {
      0: 'sunny',
      1: 'partly-sunny',
      2: 'cloudy',
      3: 'cloudy',
      51: 'rainy',
      61: 'rainy',
      63: 'rainy',
      65: 'rainy',
      95: 'thunderstorm',
    };
    return icons[code] || 'cloud';
  }
}
```

---

## 🗂️ PRAKTIKUM 3: STATE MANAGEMENT DENGAN PINIA

### Langkah 1: User Store

File: `src/stores/userStore.ts`

```typescript
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { User } from '@/models';
import { StorageService, STORAGE_KEYS } from '@/services/storage/storageService';

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null);
  const isAuthenticated = ref(false);

  // Load user from storage
  const loadUser = async () => {
    const savedUser = await StorageService.get<User>(STORAGE_KEYS.USER);
    if (savedUser) {
      user.value = savedUser;
      isAuthenticated.value = true;
    }
  };

  // Save user
  const setUser = async (userData: User) => {
    user.value = userData;
    isAuthenticated.value = true;
    await StorageService.set(STORAGE_KEYS.USER, userData);
  };

  // Update user
  const updateUser = async (updates: Partial<User>) => {
    if (user.value) {
      user.value = { ...user.value, ...updates };
      await StorageService.set(STORAGE_KEYS.USER, user.value);
    }
  };

  // Logout
  const logout = async () => {
    user.value = null;
    isAuthenticated.value = false;
    await StorageService.remove(STORAGE_KEYS.USER);
  };

  return {
    user,
    isAuthenticated,
    loadUser,
    setUser,
    updateUser,
    logout,
  };
});
```

---

### Langkah 2: Tasks Store

File: `src/stores/tasksStore.ts`

```typescript
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { Task } from '@/models';
import { StorageService, STORAGE_KEYS } from '@/services/storage/storageService';

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref<Task[]>([]);

  // Computed
  const totalTasks = computed(() => tasks.value.length);
  const completedTasks = computed(() => tasks.value.filter(t => t.completed).length);
  const pendingTasks = computed(() => tasks.value.filter(t => !t.completed).length);
  const todayTasks = computed(() => {
    const today = new Date().toDateString();
    return tasks.value.filter(t => new Date(t.deadline).toDateString() === today);
  });

  // Load tasks
  const loadTasks = async () => {
    const savedTasks = await StorageService.get<Task[]>(STORAGE_KEYS.TASKS);
    if (savedTasks) {
      tasks.value = savedTasks;
    }
  };

  // Save tasks
  const saveTasks = async () => {
    await StorageService.set(STORAGE_KEYS.TASKS, tasks.value);
  };

  // Add task
  const addTask = async (task: Omit<Task, 'id' | 'createdAt'>) => {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    tasks.value.push(newTask);
    await saveTasks();
  };

  // Update task
  const updateTask = async (id: string, updates: Partial<Task>) => {
    const index = tasks.value.findIndex(t => t.id === id);
    if (index !== -1) {
      tasks.value[index] = { ...tasks.value[index], ...updates };
      await saveTasks();
    }
  };

  // Delete task
  const deleteTask = async (id: string) => {
    tasks.value = tasks.value.filter(t => t.id !== id);
    await saveTasks();
  };

  // Toggle complete
  const toggleComplete = async (id: string) => {
    const task = tasks.value.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      await saveTasks();
    }
  };

  return {
    tasks,
    totalTasks,
    completedTasks,
    pendingTasks,
    todayTasks,
    loadTasks,
    addTask,
    updateTask,
    deleteTask,
    toggleComplete,
  };
});
```

---

### Langkah 3: Notes Store

File: `src/stores/notesStore.ts`

```typescript
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Note } from '@/models';
import { StorageService, STORAGE_KEYS } from '@/services/storage/storageService';

export const useNotesStore = defineStore('notes', () => {
  const notes = ref<Note[]>([]);

  // Load notes
  const loadNotes = async () => {
    const savedNotes = await StorageService.get<Note[]>(STORAGE_KEYS.NOTES);
    if (savedNotes) {
      notes.value = savedNotes;
    }
  };

  // Save notes
  const saveNotes = async () => {
    await StorageService.set(STORAGE_KEYS.NOTES, notes.value);
  };

  // Add note
  const addNote = async (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newNote: Note = {
      ...note,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    notes.value.unshift(newNote);
    await saveNotes();
  };

  // Update note
  const updateNote = async (id: string, updates: Partial<Note>) => {
    const index = notes.value.findIndex(n => n.id === id);
    if (index !== -1) {
      notes.value[index] = {
        ...notes.value[index],
        ...updates,
        updatedAt: new Date(),
      };
      await saveNotes();
    }
  };

  // Delete note
  const deleteNote = async (id: string) => {
    notes.value = notes.value.filter(n => n.id !== id);
    await saveNotes();
  };

  return {
    notes,
    loadNotes,
    addNote,
    updateNote,
    deleteNote,
  };
});
```

---

## 🎨 PRAKTIKUM 4: MEMBUAT UI COMPONENTS

### Langkah 1: Task Card Component

File: `src/components/features/TaskCard.vue`

```vue
<template>
  <ion-card :class="{ 'task-completed': task.completed }">
    <ion-card-content>
      <ion-grid>
        <ion-row class="ion-align-items-center">
          <ion-col size="1">
            <ion-checkbox
              :checked="task.completed"
              @ionChange="$emit('toggle', task.id)"
            ></ion-checkbox>
          </ion-col>
          <ion-col>
            <h3 :class="{ 'text-line-through': task.completed }">
              {{ task.title }}
            </h3>
            <p class="task-description">{{ task.description }}</p>
            <div class="task-meta">
              <ion-chip :color="priorityColor" size="small">
                {{ task.priority }}
              </ion-chip>
              <ion-chip size="small">
                <ion-icon :icon="calendarOutline"></ion-icon>
                {{ formatDate(task.deadline) }}
              </ion-chip>
              <ion-chip :color="categoryColor" size="small">
                {{ task.category }}
              </ion-chip>
            </div>
          </ion-col>
          <ion-col size="auto">
            <ion-button fill="clear" @click="$emit('delete', task.id)">
              <ion-icon :icon="trashOutline" color="danger"></ion-icon>
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { format } from 'date-fns';
import { id as idLocale } from 'date-fns/locale';
import { Task } from '@/models';
import {
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCheckbox,
  IonChip,
  IonIcon,
  IonButton,
} from '@ionic/vue';
import { calendarOutline, trashOutline } from 'ionicons/icons';

interface Props {
  task: Task;
}

const props = defineProps<Props>();
defineEmits<{
  (e: 'toggle', id: string): void;
  (e: 'delete', id: string): void;
}>();

const priorityColor = computed(() => {
  const colors = {
    low: 'success',
    medium: 'warning',
    high: 'danger',
  };
  return colors[props.task.priority];
});

const categoryColor = computed(() => {
  const colors = {
    kuliah: 'primary',
    tugas: 'secondary',
    ujian: 'danger',
    lainnya: 'medium',
  };
  return colors[props.task.category];
});

const formatDate = (date: Date) => {
  return format(new Date(date), 'dd MMM yyyy', { locale: idLocale });
};
</script>

<style scoped>
.task-completed {
  opacity: 0.6;
}

.text-line-through {
  text-decoration: line-through;
}

h3 {
  margin: 0 0 5px 0;
  font-size: 16px;
}

.task-description {
  margin: 0 0 10px 0;
  font-size: 14px;
  color: #666;
}

.task-meta {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
}
</style>
```

---

### Langkah 2: News Card Component

File: `src/components/features/NewsCard.vue`

```vue
<template>
  <ion-card button @click="$emit('click', article.id)">
    <img :src="article.image" :alt="article.title" />
    <ion-card-header>
      <ion-chip :color="categoryColor" size="small">
        {{ article.category }}
      </ion-chip>
      <ion-card-title>{{ article.title }}</ion-card-title>
      <ion-card-subtitle>
        {{ article.author }} • {{ formatDate(article.publishedAt) }}
      </ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      {{ article.excerpt }}
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { format } from 'date-fns';
import { id as idLocale } from 'date-fns/locale';
import { Article } from '@/models';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonChip,
} from '@ionic/vue';

interface Props {
  article: Article;
}

const props = defineProps<Props>();
defineEmits<{
  (e: 'click', id: number): void;
}>();

const categoryColor = computed(() => {
  const colors: { [key: string]: string } = {
    'Pengumuman': 'primary',
    'Event': 'secondary',
    'Beasiswa': 'success',
  };
  return colors[props.article.category] || 'medium';
});

const formatDate = (date: Date) => {
  return format(new Date(date), 'dd MMM yyyy', { locale: idLocale });
};
</script>

<style scoped>
img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

ion-card-title {
  font-size: 18px;
  margin-top: 10px;
}
</style>
```

---

## 📱 PRAKTIKUM 5: MEMBUAT HALAMAN APLIKASI

### Halaman Dashboard (Home)

File: `src/views/HomePage.vue`

```vue
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Kampus Kita</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="refreshData">
            <ion-icon :icon="refreshOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      <div class="ion-padding">
        <!-- Welcome Section -->
        <ion-card color="primary">
          <ion-card-content>
            <h2>Halo, {{ userName }}! 👋</h2>
            <p>{{ greeting }}</p>
          </ion-card-content>
        </ion-card>

        <!-- Quick Stats -->
        <h3>Ringkasan Hari Ini</h3>
        <ion-grid>
          <ion-row>
            <ion-col size="6">
              <ion-card color="success">
                <ion-card-content class="stat-card">
                  <ion-icon :icon="checkmarkDoneOutline" style="font-size: 32px;"></ion-icon>
                  <h3>{{ tasksStore.completedTasks }}</h3>
                  <p>Tugas Selesai</p>
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col size="6">
              <ion-card color="warning">
                <ion-card-content class="stat-card">
                  <ion-icon :icon="timeOutline" style="font-size: 32px;"></ion-icon>
                  <h3>{{ tasksStore.pendingTasks }}</h3>
                  <p>Tugas Pending</p>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>

        <!-- Weather Widget -->
        <h3>Cuaca Kampus</h3>
        <ion-card v-if="weather">
          <ion-card-content>
            <ion-grid>
              <ion-row class="ion-align-items-center">
                <ion-col size="4">
                  <ion-icon :icon="getWeatherIcon(weather.icon)" style="font-size: 64px; color: #FFA500;"></ion-icon>
                </ion-col>
                <ion-col>
                  <h2>{{ weather.temperature }}°C</h2>
                  <p>{{ weather.description }}</p>
                  <small>Kelembaban: {{ weather.humidity }}%</small>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>

        <!-- Today's Tasks -->
        <h3>Tugas Hari Ini</h3>
        <div v-if="tasksStore.todayTasks.length > 0">
          <TaskCard
            v-for="task in tasksStore.todayTasks"
            :key="task.id"
            :task="task"
            @toggle="tasksStore.toggleComplete"
            @delete="handleDeleteTask"
          />
        </div>
        <ion-card v-else>
          <ion-card-content class="ion-text-center">
            <p>Tidak ada tugas untuk hari ini</p>
          </ion-card-content>
        </ion-card>

        <!-- Latest News -->
        <h3>Berita Terbaru</h3>
        <NewsCard
          v-for="article in latestNews"
          :key="article.id"
          :article="article"
          @click="viewArticle"
        />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonRefresher,
  IonRefresherContent,
  alertController,
} from '@ionic/vue';
import {
  refreshOutline,
  checkmarkDoneOutline,
  timeOutline,
  sunnyOutline,
  cloudyOutline,
  rainyOutline,
} from 'ionicons/icons';
import { useUserStore } from '@/stores/userStore';
import { useTasksStore } from '@/stores/tasksStore';
import { WeatherService } from '@/services/api/weatherService';
import { NewsService } from '@/services/api/newsService';
import { Weather, Article } from '@/models';
import TaskCard from '@/components/features/TaskCard.vue';
import NewsCard from '@/components/features/NewsCard.vue';

const router = useRouter();
const userStore = useUserStore();
const tasksStore = useTasksStore();

const weather = ref<Weather | null>(null);
const latestNews = ref<Article[]>([]);

const userName = computed(() => userStore.user?.name || 'Mahasiswa');
const greeting = computed(() => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Selamat pagi! Semangat kuliah hari ini!';
  if (hour < 18) return 'Selamat siang! Tetap semangat!';
  return 'Selamat malam! Jangan lupa istirahat ya!';
});

const getWeatherIcon = (icon: string) => {
  const icons: { [key: string]: any } = {
    sunny: sunnyOutline,
    cloudy: cloudyOutline,
    rainy: rainyOutline,
  };
  return icons[icon] || cloudyOutline;
};

const loadData = async () => {
  try {
    // Load weather
    weather.value = await WeatherService.getWeatherByCity('samarinda');

    // Load news
    const articles = await NewsService.getArticles();
    latestNews.value = articles.slice(0, 3);
  } catch (error) {
    console.error('Error loading data:', error);
  }
};

const refreshData = () => {
  loadData();
};

const handleRefresh = async (event: any) => {
  await loadData();
  event.target.complete();
};

const handleDeleteTask = async (id: string) => {
  const alert = await alertController.create({
    header: 'Konfirmasi',
    message: 'Yakin ingin menghapus tugas ini?',
    buttons: [
      { text: 'Batal', role: 'cancel' },
      {
        text: 'Hapus',
        role: 'destructive',
        handler: () => {
          tasksStore.deleteTask(id);
        },
      },
    ],
  });
  await alert.present();
};

const viewArticle = (id: number) => {
  router.push(`/article/${id}`);
};

onMounted(() => {
  loadData();
});
</script>

<style scoped>
h2 {
  margin: 0;
  font-size: 24px;
  color: white;
}

h3 {
  margin: 30px 0 15px 0;
  color: #333;
}

.stat-card {
  text-align: center;
  padding: 15px;
  color: white;
}

.stat-card h3 {
  font-size: 36px;
  margin: 10px 0 5px 0;
  color: white;
}

.stat-card p {
  margin: 0;
  opacity: 0.9;
}
</style>
```

---

## ⚡ PRAKTIKUM 6: OPTIMASI & BEST PRACTICES

### 1. Lazy Loading Components

```typescript
// router/index.ts
const routes = [
  {
    path: '/tasks',
    component: () => import('@/views/TasksPage.vue'), // Lazy load
  },
];
```

### 2. Image Optimization

```vue
<!-- Gunakan loading lazy dan placeholder -->
<img
  :src="imageUrl"
  loading="lazy"
  :alt="alt"
  @error="handleImageError"
/>
```

### 3. Debounce Search

File: `src/utils/debounce.ts`

```typescript
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return function(...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
```

### 4. Error Boundary

File: `src/utils/errorHandler.ts`

```typescript
import { toastController } from '@ionic/vue';

export async function showError(message: string) {
  const toast = await toastController.create({
    message,
    duration: 3000,
    position: 'top',
    color: 'danger',
  });
  await toast.present();
}

export function handleError(error: any) {
  console.error('Error:', error);
  showError(error.message || 'Terjadi kesalahan');
}
```

---

## 🧪 PRAKTIKUM 7: TESTING

### Unit Test dengan Vitest

Install:
```bash
npm install -D vitest @vue/test-utils happy-dom
```

File: `tests/unit/tasksStore.spec.ts`

```typescript
import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useTasksStore } from '@/stores/tasksStore';

describe('Tasks Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should add task', async () => {
    const store = useTasksStore();
    await store.addTask({
      title: 'Test Task',
      description: 'Test Description',
      deadline: new Date(),
      priority: 'high',
      completed: false,
      category: 'tugas',
    });

    expect(store.tasks.length).toBe(1);
    expect(store.tasks[0].title).toBe('Test Task');
  });

  it('should toggle task completion', async () => {
    const store = useTasksStore();
    await store.addTask({
      title: 'Test Task',
      description: 'Test Description',
      deadline: new Date(),
      priority: 'high',
      completed: false,
      category: 'tugas',
    });

    const taskId = store.tasks[0].id;
    await store.toggleComplete(taskId);

    expect(store.tasks[0].completed).toBe(true);
  });
});
```

Run tests:
```bash
npm run test
```

---

## 📦 PRAKTIKUM 8: BUILD & DEPLOYMENT

### Langkah 1: Optimize for Production

File: `vite.config.ts`

```typescript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Kampus Kita',
        short_name: 'KampusKita',
        description: 'Aplikasi Mahasiswa Terpadu',
        theme_color: '#3880ff',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'ionic': ['@ionic/vue'],
          'vue': ['vue', 'vue-router', 'pinia'],
        },
      },
    },
  },
});
```

---

### Langkah 2: Persiapan Release

1. **Update version di package.json**
```json
{
  "version": "1.0.0"
}
```

2. **Update app info di capacitor.config.ts**
```typescript
{
  appId: 'com.kampuskita.app',
  appName: 'Kampus Kita',
  webDir: 'dist',
  bundledWebRuntime: false
}
```

3. **Update AndroidManifest.xml**
```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.kampuskita.app"
    android:versionCode="1"
    android:versionName="1.0.0">

    <application
        android:label="Kampus Kita"
        android:icon="@mipmap/ic_launcher"
        android:roundIcon="@mipmap/ic_launcher_round">
    </application>
</manifest>
```

---

### Langkah 3: Generate Icons & Splash Screen

Install:
```bash
npm install -D @capacitor/assets
```

Siapkan file:
- `resources/icon.png` (1024x1024px)
- `resources/splash.png` (2732x2732px)

Generate:
```bash
npx capacitor-assets generate
```

---

### Langkah 4: Build APK Release

```bash
# Build web assets
npm run build

# Sync to Android
npx cap sync android

# Open Android Studio
npx cap open android
```

Di Android Studio:
1. **Build → Generate Signed Bundle / APK**
2. **APK**
3. Pilih/buat keystore
4. **Release build type**
5. **Build**

APK ada di: `android/app/release/app-release.apk`

---

### Langkah 5: Testing APK

1. **Install di perangkat**
```bash
adb install android/app/release/app-release.apk
```

2. **Test semua fitur:**
   - Login/Register
   - CRUD operations
   - API calls
   - Native features (camera, GPS)
   - Offline mode
   - Performance

---

## 📚 DOKUMENTASI PROJECT

### README.md

Buat file `README.md` di root project:

```markdown
# Kampus Kita - Aplikasi Mahasiswa Terpadu

Aplikasi mobile untuk mahasiswa yang mengintegrasikan manajemen tugas, informasi akademik, cuaca, dan fitur native.

## Fitur

- 📝 Manajemen Tugas dengan reminder
- 📰 Berita & Pengumuman Kampus
- 🌤️ Info Cuaca Real-time
- 📍 Geolocation & Navigasi
- 📷 Upload Foto Profil
- 💾 Offline-first Storage
- 🔔 Notifikasi Lokal

## Teknologi

- **Framework**: Ionic 7 + Vue 3
- **Language**: TypeScript
- **State Management**: Pinia
- **HTTP Client**: Axios
- **Build Tool**: Vite
- **Mobile**: Capacitor

## Instalasi

\`\`\`bash
# Clone repository
git clone https://github.com/username/kampus-kita.git

# Install dependencies
cd kampus-kita
npm install

# Run di browser
ionic serve

# Build untuk Android
npm run build
npx cap sync android
npx cap open android
\`\`\`

## Struktur Project

\`\`\`
src/
├── components/      # Reusable components
├── stores/          # Pinia stores
├── services/        # API & native services
├── views/           # Pages
├── models/          # TypeScript interfaces
└── utils/           # Helper functions
\`\`\`

## API

- Weather: Open-Meteo API
- News: Mock data (dapat diganti dengan API kampus)

## License

MIT License

## Author

Anton Prafanto, S.Kom, M.T.
```

---

## 🎯 CHECKLIST PROJECT COMPLETION

### Functionality ✅
- [ ] User authentication & profile
- [ ] CRUD operations (Tasks, Notes)
- [ ] API integration (Weather, News)
- [ ] Native features (Camera, GPS, Storage)
- [ ] Offline support
- [ ] Notifications
- [ ] Search & filter
- [ ] Data persistence

### UI/UX ✅
- [ ] Responsive design
- [ ] Loading states
- [ ] Error handling
- [ ] Empty states
- [ ] Smooth animations
- [ ] Consistent theme
- [ ] Accessibility

### Performance ✅
- [ ] Lazy loading
- [ ] Image optimization
- [ ] Code splitting
- [ ] Debounced search
- [ ] Minimal re-renders

### Quality ✅
- [ ] TypeScript strict mode
- [ ] ESLint configured
- [ ] Unit tests (>70% coverage)
- [ ] No console errors
- [ ] Proper error handling

### Build & Deploy ✅
- [ ] Production build successful
- [ ] APK generated
- [ ] Tested on real device
- [ ] All features working
- [ ] Performance optimized

### Documentation ✅
- [ ] README.md complete
- [ ] Code comments
- [ ] API documentation
- [ ] User guide

---

## 📝 LAPORAN PROJECT

### Template Laporan

```
LAPORAN PROJECT AKHIR
Mata Kuliah: Pemrograman Berbasis Perangkat Bergerak

IDENTITAS MAHASISWA
Nama        : [Nama Lengkap]
NIM         : [NIM]
Program Studi : Sistem Informasi
Universitas : Universitas Terbuka

INFORMASI APLIKASI
Nama Aplikasi : [Nama Aplikasi]
Deskripsi     : [Deskripsi singkat]
Platform      : Android
Framework     : Ionic + Vue.js

FITUR UTAMA
1. [Fitur 1]
2. [Fitur 2]
3. [Fitur 3]
...

TEKNOLOGI YANG DIGUNAKAN
- Frontend: Vue.js 3, TypeScript
- Framework Mobile: Ionic 7
- State Management: Pinia
- API: Axios
- Native: Capacitor
- Database: Local Storage (Preferences)

SCREENSHOT APLIKASI
[Lampirkan 5-10 screenshot]

LINK REPOSITORY
GitHub: [URL]

LINK APK
Google Drive: [URL]

LINK VIDEO DEMO
YouTube: [URL]

TANTANGAN & SOLUSI
[Jelaskan tantangan yang dihadapi dan bagaimana solusinya]

KESIMPULAN
[Kesimpulan dan pembelajaran yang didapat]
```

---

## 🎓 EVALUASI AKHIR

### Kriteria Penilaian

1. **Functionality (40%)**
   - Kelengkapan fitur
   - Fitur bekerja dengan baik
   - Error handling

2. **Code Quality (25%)**
   - Clean code
   - TypeScript usage
   - Best practices
   - Code organization

3. **UI/UX (20%)**
   - Design menarik
   - User-friendly
   - Responsive
   - Consistent

4. **Documentation (10%)**
   - README lengkap
   - Code comments
   - User guide

5. **Presentation (5%)**
   - Video demo jelas
   - Penjelasan konsep

---

## 📧 PENUTUP

Selamat! Anda telah menyelesaikan seluruh rangkaian praktikum Pemrograman Berbasis Perangkat Bergerak!

### Apa Selanjutnya?

1. **Publish ke Play Store**
   - Buat akun Google Play Developer
   - Siapkan asset (icon, screenshots, deskripsi)
   - Upload APK/AAB
   - Submit untuk review

2. **Tingkatkan Skill**
   - Pelajari animasi advanced
   - Eksplorasi plugins lainnya
   - Implementasi backend sendiri
   - Belajar iOS development

3. **Bangun Portfolio**
   - Deploy web version
   - Buat case study
   - Bagikan di LinkedIn/GitHub
   - Dapatkan feedback

**Terima kasih telah mengikuti pembelajaran ini dengan serius!**
**Semoga sukses dalam berkarya dan mengembangkan aplikasi mobile!**

---

**Disusun oleh:**
Anton Prafanto, S.Kom, M.T.
Dosen Program Studi Informatika
Universitas Mulawarman
Tutor Universitas Terbuka

**Mata Kuliah:** Pemrograman Berbasis Perangkat Bergerak (MSIM4401)
**Tahun:** 2025
