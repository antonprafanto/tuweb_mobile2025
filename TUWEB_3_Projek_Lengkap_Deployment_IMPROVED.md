# TUWEB 3: Proyek Lengkap & Deployment Aplikasi Mobile

**Mata Kuliah:** Pemrograman Berbasis Piranti Bergerak (MSIM4401)  
**Dosen:** Anton Prafanto, S.Kom., M.T.  
**Universitas:** Universitas Mulawarman - Universitas Terbuka  
**Durasi:** 120 menit (2 jam)

---

## 🎯 Tujuan Pembelajaran

Setelah mengikuti sesi ini, mahasiswa diharapkan mampu:

### 📋 Level Pemahaman (Bloom's Taxonomy)

#### 🔵 **C1 - Mengingat (Remember)**
- Menyebutkan tahapan deployment aplikasi mobile
- Mengidentifikasi jenis testing yang ada
- Menyebutkan platform deployment yang tersedia

#### 🔵 **C2 - Memahami (Understand)**  
- Menjelaskan alur CI/CD pipeline
- Memahami konsep state management
- Mengartikan build process untuk mobile apps

#### 🔵 **C3 - Menerapkan (Apply)**
- Membuat aplikasi lengkap dengan semua fitur
- Melakukan testing dan debugging
- Deploy aplikasi ke berbagai platform

---

## 🕐 Timeline Sesi

| Waktu | Aktivitas | Metode |
|-------|-----------|--------|
| 00:00-10:00 | **Pendahuluan & Demo Final App** | Live Demo |
| 10:00-25:00 | **Teori Project Architecture** | Visual Diagram |
| 25:00-45:00 | **State Management dengan Pinia** | Hands-on |
| 45:00-65:00 | **Testing Strategies** | Guided Practice |
| 65:00-85:00 | **Build & Optimization** | Hands-on |
| 85:00-105:00 | **Deployment Process** | Step-by-Step |
| 105:00-115:00 | **Final Project Guidelines** | Discussion |
| 115:00-120:00 | **Q&A & Course Wrap-up** | Interactive |

---

## 📚 Materi 1: Project Architecture yang Scalable

### 1.1 Apa itu Scalable Architecture? (Konsep Visual)

#### 🏗️ **Analogi Membangun Rumah**

```
🏠 Rumah Sederhana (Small Project)
├── 1 Kamar tidur
├── 1 Kamar mandi
└── Ruang tamu

🏢 Gedung Bertingkat (Large Application)
├── Lantai 1: Lobby & Reception
├── Lantai 2: Office Spaces
├── Lantai 3: Meeting Rooms
├── Lantai 4: Executive Offices
└── Basement: Storage & Utilities
```

**Aplikasi mobile yang scalable seperti gedung bertingkat:**
- **Setiap lantai = Module/Feature**
- **Elevator = Navigation/Routing**
- **Basement = Services & Utilities**
- **Security = Authentication & Authorization**

#### 📊 **Project Structure yang Baik**

```
mobile-app/
├── 📁 src/
│   ├── 📁 components/          # 🧩 Reusable UI Components
│   │   ├── 📁 common/         # 🔧 Generic components (Button, Input)
│   │   ├── 📁 forms/           # 📝 Form components
│   │   └── 📁 charts/          # 📊 Chart components
│   ├── 📁 views/               # 📱 Page Components
│   │   ├── 📁 auth/            # 🔐 Login, Register, Forgot Password
│   │   ├── 📁 dashboard/       # 📊 Dashboard pages
│   │   ├── 📁 weather/         # 🌤️ Weather pages
│   │   └── 📁 profile/         # 👤 User profile pages
│   ├── 📁 services/            # 🔌 Business Logic & API Calls
│   │   ├── 📁 api/             # 🌐 API services
│   │   ├── 📁 auth/            # 🔐 Authentication services
│   │   └── 📁 storage/         # 💾 Local storage services
│   ├── 📁 stores/              # 🗄️ State Management (Pinia)
│   │   ├── auth.ts             # 🔐 User authentication state
│   │   ├── weather.ts          # 🌤️ Weather data state
│   │   └── settings.ts         # ⚙️ App settings state
│   ├── 📁 composables/         # 🎯 Vue Composables
│   ├── 📁 types/               # 📝 TypeScript Interfaces
│   ├── 📁 utils/               # 🛠️ Utility Functions
│   ├── 📁 constants/           # 📋 App Constants
│   ├── 📁 assets/              # 🖼️ Static Assets
│   └── 📁 theme/               # 🎨 Styling & Themes
├── 📁 public/                  # 🌐 Public Assets
├── 📁 tests/                   # 🧪 Test Files
├── 📁 platforms/               # 📱 Native Platform Files
└── 📁 docs/                    # 📚 Documentation
```

### 1.2 Mengapa Structure Penting?

#### 🎯 **Benefits of Good Structure**

| Benefit | Explanation | Impact |
|---------|-------------|--------|
| **🔍 Easy to Find** | File organization yang jelas | ⚡ Faster development |
| **🧹 Clean Code** | Separation of concerns | 🔧 Easier maintenance |
| **👥 Team Work** | Clear boundaries for team members | 👨‍💻 Better collaboration |
| **📈 Scalability** | Easy to add new features | 🚀 Faster growth |
| **🐛 Debugging** | Isolate problems easily | 🔍 Quicker fixes |

#### 🚫 **Common Mistakes to Avoid**

```
❌ BAD STRUCTURE
src/
├── components.vue
├── anotherComponent.vue
├── utils.js
├── api.js
├── styles.css
└── main.js

✅ GOOD STRUCTURE
src/
├── components/
│   ├── common/
│   └── features/
├── services/
├── stores/
├── utils/
└── styles/
```

---

## 📚 Materi 2: State Management dengan Pinia (Simplified)

### 2.1 Apa itu State Management? (Analogi Mudah)

#### 🧠 **Analogi Otak Manusia**

```
🧠 Otak Manusia = State Management
├── 📚 Memori Jangka Pendek (Component State)
│   └── Data untuk 1 component saja
├── 📚 Memori Jangka Panjang (Global State)
│   └── Data yang dibagi oleh semua components
└── 🧠 Refleks (Computed Properties)
    └── Data yang otomatis berubah
```

#### 📊 **Component State vs Global State**

```
🏠 Component State (Local)
┌─────────────────┐
│  Weather Card   │
│  ┌───────────┐  │
│  │ Temp: 28°C │  │ ← Data ini hanya untuk card ini
│  │ Humidity:  │  │
│  │ 75%        │  │
│  └───────────┘  │
└─────────────────┘

🌐 Global State (Shared)
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│   Weather Page  │  │   Settings Page │  │   Profile Page  │
│                 │  │                 │  │                 │
│ 🌡️ Temp: 28°C   │  │ 🌡️ Temp: 28°C   │  │ 🌡️ Temp: 28°C   │ ← Data sama
│ 💧 Humidity: 75%│  │ 💧 Humidity: 75%│  │ 💧 Humidity: 75%│ untuk semua
│ 📍 Jakarta      │  │ 📍 Jakarta      │  │ 📍 Jakarta      │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

### 2.2 Setup Pinia (Step-by-Step)

#### 🛠️ **Step 1: Install Pinia**

```bash
# Install Pinia
npm install pinia

# Install types untuk TypeScript
npm install @pinia/plugin-persistedstate
```

#### 🛠️ **Step 2: Setup Pinia di Main App**

```typescript
// src/main.ts

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { IonicVue } from '@ionic/vue';
import router from './router';

import App from './App.vue';

// Create Pinia instance
const pinia = createPinia();

// Create Vue app
const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(pinia);

// Mount app
router.isReady().then(() => {
  app.mount('#app');
});
```

#### 🛠️ **Step 3: Buat Authentication Store**

```typescript
// src/stores/auth.ts

import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

// Interface untuk User
interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'admin';
}

export const useAuthStore = defineStore('auth', () => {
  // 🔧 State (Data)
  const user = ref<User | null>(null);
  const token = ref<string | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // 🎯 Getters (Computed Properties)
  const isAuthenticated = computed(() => !!token.value);
  const userDisplayName = computed(() => 
    user.value?.name || user.value?.email || 'Guest'
  );
  const isAdmin = computed(() => 
    user.value?.role === 'admin'
  );

  // 🚀 Actions (Methods)
  const login = async (email: string, password: string) => {
    loading.value = true;
    error.value = null;

    try {
      // Simulasi API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock response
      if (email === 'admin@ut.ac.id' && password === 'admin123') {
        const mockUser: User = {
          id: '1',
          name: 'Admin UT',
          email: 'admin@ut.ac.id',
          avatar: 'https://via.placeholder.com/100',
          role: 'admin'
        };
        
        const mockToken = 'mock-jwt-token-12345';
        
        // Update state
        user.value = mockUser;
        token.value = mockToken;
        
        // Save to localStorage
        localStorage.setItem('auth_token', mockToken);
        localStorage.setItem('user_data', JSON.stringify(mockUser));
        
        return { success: true, user: mockUser };
      } else {
        throw new Error('Email atau password salah');
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Login failed';
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const logout = async () => {
    try {
      // Simulasi API call untuk logout
      await new Promise(resolve => setTimeout(resolve, 500));
    } finally {
      // Clear state
      user.value = null;
      token.value = null;
      error.value = null;
      
      // Clear localStorage
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user_data');
    }
  };

  const initializeAuth = () => {
    const savedToken = localStorage.getItem('auth_token');
    const savedUser = localStorage.getItem('user_data');
    
    if (savedToken && savedUser) {
      try {
        token.value = savedToken;
        user.value = JSON.parse(savedUser);
      } catch (error) {
        console.error('Failed to parse saved user data:', error);
        logout();
      }
    }
  };

  const updateProfile = async (updates: Partial<User>) => {
    if (!user.value) return;

    loading.value = true;
    error.value = null;

    try {
      // Simulasi API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update user data
      user.value = { ...user.value, ...updates };
      
      // Save to localStorage
      localStorage.setItem('user_data', JSON.stringify(user.value));
      
      return { success: true };
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Update failed';
      throw err;
    } finally {
      loading.value = false;
    }
  };

  return {
    // State
    user,
    token,
    loading,
    error,
    
    // Getters
    isAuthenticated,
    userDisplayName,
    isAdmin,
    
    // Actions
    login,
    logout,
    initializeAuth,
    updateProfile
  };
});
```

#### 🛠️ **Step 4: Buat Weather Store**

```typescript
// src/stores/weather.ts

import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { weatherService } from '@/services/weatherService';
import { WeatherData } from '@/types/weather';

export const useWeatherStore = defineStore('weather', () => {
  // 🔧 State
  const weatherData = ref<WeatherData | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const lastUpdated = ref<Date | null>(null);
  const favoriteCities = ref<string[]>([]);

  // 🎯 Getters
  const currentTemperature = computed(() => 
    weatherData.value?.current.temperature || 0
  );
  const locationName = computed(() => 
    weatherData.value?.location.name || ''
  );
  const weatherDescription = computed(() => 
    weatherData.value?.current.description || ''
  );
  const hasWeatherData = computed(() => weatherData.value !== null);
  const isDataFresh = computed(() => {
    if (!lastUpdated.value) return false;
    const now = new Date();
    const diff = now.getTime() - lastUpdated.value.getTime();
    const minutes = diff / (1000 * 60);
    return minutes < 30; // Data considered fresh for 30 minutes
  });

  // 🚀 Actions
  const fetchWeather = async (latitude?: number, longitude?: number) => {
    loading.value = true;
    error.value = null;

    try {
      const data = await weatherService.getWeatherByCoordinates(
        latitude || -6.2088, // Default: Jakarta
        longitude || 106.8456
      );
      
      weatherData.value = data;
      lastUpdated.value = new Date();
      
      // Save to cache
      localStorage.setItem('weather_cache', JSON.stringify({
        data,
        timestamp: lastUpdated.value.toISOString()
      }));
      
      return { success: true, data };
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch weather';
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const fetchWeatherByCity = async (cityName: string) => {
    loading.value = true;
    error.value = null;

    try {
      const data = await weatherService.getWeatherByCity(cityName);
      
      weatherData.value = data;
      lastUpdated.value = new Date();
      
      // Add to favorites if not already there
      if (!favoriteCities.value.includes(cityName)) {
        favoriteCities.value.push(cityName);
        saveFavorites();
      }
      
      // Save to cache
      localStorage.setItem('weather_cache', JSON.stringify({
        data,
        timestamp: lastUpdated.value.toISOString()
      }));
      
      return { success: true, data };
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch weather';
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const refreshWeather = async () => {
    if (weatherData.value) {
      await fetchWeather(
        weatherData.value.location.latitude,
        weatherData.value.location.longitude
      );
    } else {
      await fetchWeather();
    }
  };

  const loadCachedData = () => {
    try {
      const cached = localStorage.getItem('weather_cache');
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        const cacheTime = new Date(timestamp);
        const now = new Date();
        const diff = now.getTime() - cacheTime.getTime();
        const minutes = diff / (1000 * 60);
        
        if (minutes < 30) { // Use cache if less than 30 minutes old
          weatherData.value = data;
          lastUpdated.value = cacheTime;
          return true;
        }
      }
    } catch (error) {
      console.error('Failed to load cached weather data:', error);
    }
    return false;
  };

  const addToFavorites = (cityName: string) => {
    if (!favoriteCities.value.includes(cityName)) {
      favoriteCities.value.push(cityName);
      saveFavorites();
    }
  };

  const removeFromFavorites = (cityName: string) => {
    const index = favoriteCities.value.indexOf(cityName);
    if (index > -1) {
      favoriteCities.value.splice(index, 1);
      saveFavorites();
    }
  };

  const saveFavorites = () => {
    localStorage.setItem('favorite_cities', JSON.stringify(favoriteCities.value));
  };

  const loadFavorites = () => {
    try {
      const saved = localStorage.getItem('favorite_cities');
      if (saved) {
        favoriteCities.value = JSON.parse(saved);
      }
    } catch (error) {
      console.error('Failed to load favorite cities:', error);
    }
  };

  // Initialize
  loadFavorites();

  return {
    // State
    weatherData,
    loading,
    error,
    lastUpdated,
    favoriteCities,
    
    // Getters
    currentTemperature,
    locationName,
    weatherDescription,
    hasWeatherData,
    isDataFresh,
    
    // Actions
    fetchWeather,
    fetchWeatherByCity,
    refreshWeather,
    loadCachedData,
    addToFavorites,
    removeFromFavorites
  };
});
```

---

## 📚 Materi 3: Testing Strategies (Simplified)

### 3.1 Apa itu Testing? (Analogi Mudah)

#### 🔍 **Analogi Membeli Mobil**

```
🚗 Testing = Test Drive Sebelum Beli Mobil

🧪 Unit Testing = Test Mesin Mobil
├── Cek apakah mesin menyala
├── Cek apakah semua gear berfungsi
└── Cek apakah klakson berfungsi

🔧 Integration Testing = Test Komponen Mobil
├── Cek apakah mesin + roda berfungsi bersama
├── Cek apakah rem + pedal berfungsi bersama
└── Cek apakah AC + kipas berfungsi bersama

🛣️ E2E Testing = Test Mobil di Jalan Raya
├── Cek apakah mobil bisa jalan dari A ke B
├── Cek apakah mobil bisa naik tanjakan
└── Cek apakah mobil bisa berhenti di lampu merah
```

### 3.2 Jenis-Jenis Testing

#### 📊 **Testing Pyramid**

```
        🔺 E2E Tests (Few)
       / \
      /   \
     🔺 Integration Tests (Some)
    /       \
   /         \
🔺 Unit Tests (Many)
```

| Jenis Testing | Jumlah | Speed | Cost | Confidence |
|---------------|--------|-------|------|------------|
| **Unit Tests** | Banyak | ⚡ Cepat | 💰 Murah | 🔵 Medium |
| **Integration** | Sedang | 🐢 Sedang | 💰💰 Sedang | 🟢 High |
| **E2E Tests** | Sedikit | 🐌 Lambat | 💰💰💰 Mahal | 🔴 Very High |

### 3.3 Unit Testing dengan Vitest (Step-by-Step)

#### 🛠️ **Step 1: Setup Vitest**

```bash
# Install Vitest
npm install -D vitest @vitest/ui jsdom

# Install Vue Test Utils
npm install -D @vue/test-utils

# Update package.json scripts
"scripts": {
  "test": "vitest",
  "test:ui": "vitest --ui",
  "test:coverage": "vitest --coverage"
}
```

#### 🛠️ **Step 2: Konfigurasi Vitest**

```typescript
// vitest.config.ts

import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.ts']
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});
```

#### 🛠️ **Step 3: Buat Test Setup**

```typescript
// tests/setup.ts

import { config } from '@vue/test-utils';
import { IonicVue } from '@ionic/vue';

// Global setup untuk Vue Test Utils
config.global.plugins = [IonicVue];

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
```

#### 🛠️ **Step 4: Buat Unit Test untuk Component**

```typescript
// tests/unit/components/WeatherCard.test.ts

import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import WeatherCard from '@/components/WeatherCard.vue';
import { WeatherData } from '@/types/weather';

// Mock weather data
const mockWeatherData: WeatherData = {
  location: {
    name: 'Jakarta',
    country: 'Indonesia',
    latitude: -6.2088,
    longitude: 106.8456
  },
  current: {
    temperature: 28,
    humidity: 75,
    windSpeed: 15,
    pressure: 1013,
    visibility: 10,
    uvIndex: 5,
    description: 'Partly cloudy',
    icon: 'partly-sunny'
  },
  hourly: [],
  daily: [],
  lastUpdated: '2024-01-15T10:30:00Z'
};

describe('WeatherCard', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(WeatherCard, {
      props: {
        weatherData: mockWeatherData
      }
    });
  });

  it('renders weather data correctly', () => {
    expect(wrapper.text()).toContain('Jakarta');
    expect(wrapper.text()).toContain('28°C');
    expect(wrapper.text()).toContain('Partly cloudy');
    expect(wrapper.text()).toContain('75%');
    expect(wrapper.text()).toContain('15 km/j');
  });

  it('displays location name and country', () => {
    const locationTitle = wrapper.find('.location-title');
    expect(locationTitle.exists()).toBe(true);
    expect(locationTitle.text()).toContain('Jakarta');
  });

  it('shows temperature prominently', () => {
    const temperature = wrapper.find('.temperature-text h1');
    expect(temperature.exists()).toBe(true);
    expect(temperature.text()).toBe('28°C');
  });

  it('displays weather details grid', () => {
    const detailsGrid = wrapper.find('.weather-details');
    expect(detailsGrid.exists()).toBe(true);
    
    const detailItems = wrapper.findAll('.detail-item');
    expect(detailItems).toHaveLength(3); // humidity, wind, pressure
  });

  it('shows last updated time', () => {
    const lastUpdated = wrapper.find('.last-updated');
    expect(lastUpdated.exists()).toBe(true);
    expect(lastUpdated.text()).toContain('Update:');
  });

  it('does not render when weatherData is null', () => {
    const emptyWrapper = mount(WeatherCard, {
      props: {
        weatherData: null
      }
    });
    
    expect(emptyWrapper.find('.weather-card').exists()).toBe(false);
  });

  it('formats last updated time correctly', async () => {
    const wrapper = mount(WeatherCard, {
      props: {
        weatherData: mockWeatherData
      }
    });

    const lastUpdated = wrapper.find('.last-updated small');
    expect(lastUpdated.exists()).toBe(true);
    expect(lastUpdated.text()).toMatch(/Update:/);
  });
});
```

#### 🛠️ **Step 5: Buat Unit Test untuk Store**

```typescript
// tests/unit/stores/auth.test.ts

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useAuthStore } from '@/stores/auth';

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('Auth Store', () => {
  let authStore: any;

  beforeEach(() => {
    setActivePinia(createPinia());
    authStore = useAuthStore();
    vi.clearAllMocks();
  });

  it('initializes with empty state', () => {
    expect(authStore.user).toBeNull();
    expect(authStore.token).toBeNull();
    expect(authStore.isAuthenticated).toBe(false);
  });

  it('logs in successfully with correct credentials', async () => {
    await authStore.login('admin@ut.ac.id', 'admin123');

    expect(authStore.user).toEqual({
      id: '1',
      name: 'Admin UT',
      email: 'admin@ut.ac.id',
      avatar: 'https://via.placeholder.com/100',
      role: 'admin'
    });
    expect(authStore.token).toBe('mock-jwt-token-12345');
    expect(authStore.isAuthenticated).toBe(true);
    expect(authStore.isAdmin).toBe(true);
  });

  it('fails login with incorrect credentials', async () => {
    await expect(authStore.login('wrong@email.com', 'wrongpass')).rejects.toThrow('Email atau password salah');
    
    expect(authStore.user).toBeNull();
    expect(authStore.token).toBeNull();
    expect(authStore.isAuthenticated).toBe(false);
    expect(authStore.error).toBe('Email atau password salah');
  });

  it('logs out successfully', async () => {
    // First login
    await authStore.login('admin@ut.ac.id', 'admin123');
    expect(authStore.isAuthenticated).toBe(true);

    // Then logout
    await authStore.logout();
    
    expect(authStore.user).toBeNull();
    expect(authStore.token).toBeNull();
    expect(authStore.isAuthenticated).toBe(false);
  });

  it('saves to localStorage on login', async () => {
    await authStore.login('admin@ut.ac.id', 'admin123');

    expect(localStorageMock.setItem).toHaveBeenCalledWith('auth_token', 'mock-jwt-token-12345');
    expect(localStorageMock.setItem).toHaveBeenCalledWith('user_data', JSON.stringify({
      id: '1',
      name: 'Admin UT',
      email: 'admin@ut.ac.id',
      avatar: 'https://via.placeholder.com/100',
      role: 'admin'
    }));
  });

  it('clears localStorage on logout', async () => {
    await authStore.login('admin@ut.ac.id', 'admin123');
    await authStore.logout();

    expect(localStorageMock.removeItem).toHaveBeenCalledWith('auth_token');
    expect(localStorageMock.removeItem).toHaveBeenCalledWith('user_data');
  });

  it('initializes auth from localStorage', () => {
    localStorageMock.getItem.mockImplementation((key) => {
      if (key === 'auth_token') return 'mock-token';
      if (key === 'user_data') return JSON.stringify({
        id: '1',
        name: 'Test User',
        email: 'test@example.com',
        role: 'user'
      });
      return null;
    });

    authStore.initializeAuth();

    expect(authStore.token).toBe('mock-token');
    expect(authStore.user).toEqual({
      id: '1',
      name: 'Test User',
      email: 'test@example.com',
      role: 'user'
    });
  });
});
```

---

## 📚 Materi 4: Build & Deployment (Simplified)

### 4.1 Apa itu Deployment? (Analogi Mudah)

#### 🚀 **Analogi Menerbitkan Buku**

```
📚 Deployment = Menerbitkan Buku

✍️ Menulis Buku = Development
├── Menulis konten (coding)
├── Edit dan proofread (testing)
└── Desain cover (UI/UX)

🖨️ Cetak Buku = Build Process
├── Convert ke PDF (compile)
├── Optimize gambar (minify)
└── Quality check (linting)

📚 Distribusi Buku = Deployment
├── Kirim ke toko buku (App Store)
├── Jual online (Web)
└── Distribusi digital (Play Store)
```

### 4.2 Build Process (Step-by-Step)

#### 🏗️ **Step 1: Production Build**

```bash
# Build untuk web
npm run build

# Build untuk mobile
npm run build
npx cap sync android
npx cap sync ios
```

#### 🏗️ **Step 2: Optimize Build**

```typescript
// vite.config.ts

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Disable di production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Hapus console.log
        drop_debugger: true // Hapus debugger
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', '@ionic/vue'],
          ionic: ['@ionic/vue', '@ionic/core'],
          utils: ['axios', 'pinia']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version)
  }
});
```

### 4.3 Deployment ke Berbagai Platform

#### 📱 **Android Deployment**

```bash
# Step 1: Build web assets
npm run build

# Step 2: Sync dengan Capacitor
npx cap sync android

# Step 3: Buka Android Studio
npx cap open android

# Step 4: Di Android Studio
# 1. Pilih build variant (release/debug)
# 2. Build > Build Bundle(s) / APK(s) > Build APK(s)
# 3. Sign dengan keystore

# Step 5: Generate signed APK
```

#### 🍎 **iOS Deployment**

```bash
# Step 1: Build web assets
npm run build

# Step 2: Sync dengan Capacitor
npx cap sync ios

# Step 3: Buka Xcode
npx cap open ios

# Step 4: Di Xcode
# 1. Pilih target device
# 2. Product > Archive
# 3. Distribute App > App Store Connect
# 4. Follow signing steps

# Step 5: Upload ke App Store Connect
```

#### 🌐 **Web Deployment (PWA)**

```bash
# Step 1: Build untuk production
npm run build

# Step 2: Deploy ke hosting
# Options:
# - Netlify: drag & drop dist folder
# - Vercel: connect GitHub repo
# - GitHub Pages: use gh-pages
# - Firebase Hosting: firebase deploy

# Step 3: Configure PWA
# Add manifest.json dan service worker
```

---

## 🛠️ Praktikum 1: Complete App Integration

### 🎯 **Tujuan Praktikum**
Mengintegrasikan semua materi yang telah dipelajari menjadi aplikasi lengkap.

### 📋 **Requirements Final App**

#### ✅ **Core Features**
1. **🔐 Authentication System**
   - Login/logout functionality
   - User profile management
   - Remember me feature

2. **🌤️ Weather Application**
   - Current weather display
   - Hourly forecast
   - Daily forecast
   - Search by city
   - Favorite cities

3. **⚙️ Settings & Preferences**
   - Temperature unit (Celsius/Fahrenheit)
   - Theme (light/dark)
   - Language settings
   - Notification preferences

4. **📱 Mobile Features**
   - Offline support
   - Push notifications
   - Location services
   - Responsive design

### 🏗️ **Step 1: Complete App Structure**

```
weather-app-complete/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── AppHeader.vue
│   │   │   ├── AppFooter.vue
│   │   │   ├── LoadingSpinner.vue
│   │   │   └── ErrorMessage.vue
│   │   ├── auth/
│   │   │   ├── LoginForm.vue
│   │   │   ├── RegisterForm.vue
│   │   │   └── ProfileCard.vue
│   │   └── weather/
│   │       ├── WeatherCard.vue
│   │       ├── HourlyForecast.vue
│   │       ├── DailyForecast.vue
│   │       └── CitySearch.vue
│   ├── views/
│   │   ├── auth/
│   │   │   ├── LoginPage.vue
│   │   │   ├── RegisterPage.vue
│   │   │   └── ProfilePage.vue
│   │   ├── weather/
│   │   │   ├── WeatherPage.vue
│   │   │   ├── ForecastPage.vue
│   │   │   └── SearchPage.vue
│   │   └── settings/
│   │       ├── SettingsPage.vue
│   │       └── PreferencesPage.vue
│   ├── stores/
│   │   ├── auth.ts
│   │   ├── weather.ts
│   │   └── settings.ts
│   ├── services/
│   │   ├── authService.ts
│   │   ├── weatherService.ts
│   │   └── notificationService.ts
│   └── utils/
│       ├── storage.ts
│       ├── validation.ts
│       └── helpers.ts
```

### 🏗️ **Step 2: Main App Component**

```vue
<!-- src/App.vue -->
<template>
  <ion-app>
    <!-- Router untuk navigation -->
    <ion-router-outlet />
    
    <!-- Global Loading -->
    <ion-loading
      :is-open="globalLoading"
      message="Memuat..."
      :duration="5000"
    />
    
    <!-- Global Toast -->
    <ion-toast
      :is-open="showToast"
      :message="toastMessage"
      :duration="3000"
      :color="toastColor"
      @didDismiss="showToast = false"
    />
  </ion-app>
</template>

<script setup lang="ts">
import {
  IonApp,
  IonRouterOutlet,
  IonLoading,
  IonToast
} from '@ionic/vue';
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useWeatherStore } from '@/stores/weather';

// Stores
const authStore = useAuthStore();
const weatherStore = useWeatherStore();

// Global state
const globalLoading = ref(false);
const showToast = ref(false);
const toastMessage = ref('');
const toastColor = ref('primary');

// Initialize app
onMounted(async () => {
  try {
    // Initialize authentication
    authStore.initializeAuth();
    
    // Load cached weather data
    weatherStore.loadCachedData();
    
    console.log('🚀 App initialized successfully');
  } catch (error) {
    console.error('❌ App initialization failed:', error);
    showToast.value = true;
    toastMessage.value = 'Gagal menginisialisasi aplikasi';
    toastColor.value = 'danger';
  }
});

// Global error handler
window.addEventListener('unhandledrejection', (event) => {
  console.error('💥 Unhandled promise rejection:', event.reason);
  showToast.value = true;
  toastMessage.value = 'Terjadi kesalahan yang tidak terduga';
  toastColor.value = 'danger';
});

// Global toast helper
const showGlobalToast = (message: string, color: string = 'primary') => {
  toastMessage.value = message;
  toastColor.value = color;
  showToast.value = true;
};

// Export untuk global access
window.showGlobalToast = showGlobalToast;
</script>

<style>
/* Global styles */
:root {
  --ion-color-primary: #3880ff;
  --ion-color-primary-rgb: 56, 128, 255;
  --ion-color-primary-contrast: #ffffff;
  --ion-color-primary-contrast-rgb: 255, 255, 255;
  --ion-color-primary-shade: #3171e0;
  --ion-color-primary-tint: #4c8dff;

  --ion-color-secondary: #3dc2ff;
  --ion-color-secondary-rgb: 61, 194, 255;
  --ion-color-secondary-contrast: #ffffff;
  --ion-color-secondary-contrast-rgb: 255, 255, 255;
  --ion-color-secondary-shade: #36abe0;
  --ion-color-secondary-tint: #50c8ff;

  --ion-color-tertiary: #5260ff;
  --ion-color-tertiary-rgb: 82, 96, 255;
  --ion-color-tertiary-contrast: #ffffff;
  --ion-color-tertiary-contrast-rgb: 255, 255, 255;
  --ion-color-tertiary-shade: #4854e0;
  --ion-color-tertiary-tint: #6370ff;
}

/* Dark theme */
@media (prefers-color-scheme: dark) {
  :root {
    --ion-background-color: #121212;
    --ion-background-color-rgb: 18, 18, 18;
    --ion-text-color: #ffffff;
    --ion-text-color-rgb: 255, 255, 255;
  }
}

/* Custom utility classes */
.text-center {
  text-align: center;
}

.mt-2 {
  margin-top: 1rem;
}

.mb-2 {
  margin-bottom: 1rem;
}

.p-2 {
  padding: 1rem;
}

.full-width {
  width: 100%;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Animation classes */
.fade-in {
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.slide-up {
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
```

---

## 🎯 Final Project Guidelines

### 🏆 **Project Requirements**

#### 📋 **Mandatory Features (100 Points)**

1. **🔐 Authentication System (20 points)**
   - [ ] Login/logout functionality
   - [ ] User registration
   - [ ] Profile management
   - [ ] Session persistence

2. **🌤️ Weather Application (30 points)**
   - [ ] Current weather display
   - [ ] 24-hour forecast
   - [ ] 7-day forecast
   - [ ] City search functionality
   - [ ] Favorite cities management

3. **📱 Mobile UI/UX (20 points)**
   - [ ] Responsive design
   - [ ] Ionic components usage
   - [ ] Navigation between pages
   - [ ] Loading and error states

4. **⚙️ Advanced Features (20 points)**
   - [ ] Offline support
   - [ ] Settings/preferences
   - [ ] Data persistence
   - [ ] Error handling

5. **🧪 Testing & Documentation (10 points)**
   - [ ] Unit tests for core functionality
   - [ ] Code documentation
   - [ ] README file
   - [ ] Deployment instructions

#### 🌟 **Bonus Features (Extra 20 points)**

1. **🔔 Push Notifications (5 points)**
2. **🌍 Multi-language Support (5 points)**
3. **🎨 Theme Customization (5 points)**
5. **📊 Weather Analytics (5 points)**

### 📊 **Grading Rubric**

| Category | Excellent (A) | Good (B) | Satisfactory (C) | Needs Improvement (D) |
|----------|---------------|----------|-------------------|----------------------|
| **Functionality (40%)** | All features work perfectly | Most features work | Some features work | Many features broken |
| **Code Quality (25%)** | Clean, documented, follows best practices | Well-structured | Basic structure | Poor organization |
| **UI/UX (20%)** | Beautiful, intuitive, responsive | Good design | Basic UI | Poor UX |
| **Testing (15%)** | Comprehensive test coverage | Good coverage | Basic tests | No tests |
| **Documentation (Bonus)** | Complete docs, README, deployment guide | Good documentation | Basic docs | No documentation |

---

## 📝 Evaluasi Akhir

### 🎯 **Final Exam (30 menit)**

#### **Part 1: Multiple Choice (15 points)**
1. Apa tujuan utama dari state management?
2. Manakah jenis testing yang paling cepat dieksekusi?
3. Apa keuntungan menggunakan Pinia dibanding manual state management?
4. Tool yang digunakan untuk E2E testing di Vue.js?
5. Apa itu CI/CD pipeline?

#### **Part 2: Short Answer (15 points)**
1. Jelaskan perbedaan unit, integration, dan E2E testing
2. Apa saja tahapan deployment aplikasi mobile?
3. Mengapa error handling penting dalam aplikasi production?

#### **Part 3: Practical (40 points)**
1. Debug kode yang diberikan
2. Implementasikan fitur baru
3. Optimize performance kode

#### **Part 4: Project Defense (15 points)**
- Presentasi final project
- Demo aplikasi
- Q&A session

---

## 🔗 Resources Tambahan

### 📚 **Documentation**

#### **Deployment Guides**
- [Ionic Deployment Guide](https://ionicframework.com/docs/deployment)
- [Capacitor Documentation](https://capacitorjs.com/docs)
- [App Store Submission Guide](https://developer.apple.com/app-store/)
- [Google Play Console](https://play.google.com/console/about/)

#### **Testing Resources**
- [Vitest Documentation](https://vitest.dev/)
- [Vue Test Utils](https://test-utils.vuejs.org/)
- [Cypress E2E Testing](https://www.cypress.io/)

### 🛠️ **Tools & Services**

#### **CI/CD Platforms**
- [GitHub Actions](https://github.com/features/actions)
- [GitLab CI/CD](https://docs.gitlab.com/ee/ci/)
- [CircleCI](https://circleci.com/)

#### **Deployment Services**
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)

---

## 💡 Tips & Best Practices

### 🎯 **Before Deployment Checklist**

#### **Code Quality**
- [ ] Code review completed
- [ ] All tests passing
- [ ] No console.log statements
- [ ] Error handling implemented
- [ ] Performance optimized

#### **Security**
- [ ] No hardcoded secrets
- [ ] Input validation implemented
- [ ] Authentication properly configured
- [ ] HTTPS enforced
- [ ] API rate limiting

#### **User Experience**
- [ ] Loading states implemented
- [ ] Error messages user-friendly
- [ ] Offline functionality tested
- [ ] Responsive design verified
- [ ] Accessibility compliance

### 🚀 **Common Deployment Issues**

#### **Build Errors**
- Missing dependencies
- TypeScript compilation errors
- Asset optimization issues
- Platform-specific problems

#### **Runtime Errors**
- API endpoint changes
- Environment variables missing
- CORS issues
- Memory leaks

#### **Performance Issues**
- Large bundle size
- Slow API calls
- Memory usage
- Battery drain

---

## 🎉 Penutup Kursus

### 🏆 **Congratulations!**

Anda telah menyelesaikan seluruh materi Pemrograman Berbasis Piranti Bergerak:

#### **✅ What You've Accomplished**

1. **📚 TUWEB 1: Fundamental TypeScript & Vue.js**
   - Master dasar programming dengan TypeScript
   - Bangun reactive UI dengan Vue.js
   - Implementasikan studi kasus NIM

2. **📱 TUWEB 2: Ionic Framework & API Integration**
   - Kembangkan aplikasi mobile hybrid
   - Integrasikan RESTful API
   - Buat weather app yang fungsional

3. **🚀 TUWEB 3: Advanced Features & Deployment**
   - Implementasikan state management
   - Lakukan comprehensive testing
   - Deploy ke production

#### **🎯 Skills You've Gained**

- **Technical Skills:** TypeScript, Vue.js, Ionic, API Integration
- **Soft Skills:** Problem-solving, Project Management, Documentation
- **Professional Skills:** Testing, Deployment, Best Practices

#### **🌟 Your Achievement**

**🏅 Level: Mobile Developer Junior**
- 📱 3 Complete Applications
- 🧪 Comprehensive Testing Knowledge
- 🚀 Production Deployment Experience
- 📚 Solid Foundation in Modern Web Development

### 🚀 **Next Steps in Your Journey**

#### **Immediate Actions (1-2 weeks)**
1. **Complete final project** dengan semua requirements
2. **Create portfolio** di GitHub
3. **Write technical blog** tentang learning journey
4. **Join developer communities** (Ionic, Vue.js, Indonesia)

#### **Short-term Goals (1-3 months)**
1. **Learn advanced topics** (Native Modules, Performance Optimization)
2. **Contribute to open source** projects
3. **Build more complex applications**
4. **Prepare for job interviews**

#### **Long-term Vision (3-12 months)**
1. **Become Senior Mobile Developer**
2. **Lead development teams**
3. **Start own tech startup**
4. **Mentor other developers**

### 💭 **Final Words**

> "The journey of a thousand miles begins with a single step." - Lao Tzu

Anda telah mengambil langkah pertama yang penting dalam dunia mobile development. Teruslah belajar, teruslah berkarya, dan jangan pernah berhenti untuk berinovasi.

**Remember:**
- 🌱 **Every expert was once a beginner**
- 🚀 **Consistency beats intensity**
- 💡 **Curiosity drives innovation**
- 🤝 **Community accelerates growth**

### 📞 **Stay Connected**

**For Future Support:**
- **Email:** anton.prafanto@mulawarman.ac.id
- **LinkedIn:** [Connect for professional networking]
- **GitHub:** [Follow for open source contributions]
- **WhatsApp Alumni:** [Join our community]

---

## 🎓 Graduation Message

**Dear Students,**

Selamat atas pencapaian luar biasa Anda! Anda tidak hanya belajar tentang coding, tetapi juga tentang problem-solving, creativity, dan perseverance.

**Your journey has just begun. The mobile development world is waiting for your contributions.**

**Go forth and build amazing things! 🚀**

---

**With pride and anticipation,**

**Anton Prafanto, S.Kom., M.T.**  
*Universitas Mulawarman - Program Studi Informatika*  
*Universitas Terbuka - Pusat Belajar Jarak Jauh*  
*29 Oktober 2025*

---

**🎓 Class of 2024 - Mobile Developers**  
**🌟 The Future is Mobile**  
**🚀 Build Tomorrow, Today!**
