# TUWEB 2: Integrasi Ionic Framework dengan API Eksternal

**Mata Kuliah:** Pemrograman Berbasis Piranti Bergerak (MSIM4401)  
**Dosen:** Anton Prafanto, S.Kom., M.T.  
**Universitas:** Universitas Mulawarman - Universitas Terbuka  
**Durasi:** 120 menit (2 jam)

---

## 🎯 Tujuan Pembelajaran

Setelah mengikuti sesi ini, mahasiswa diharapkan mampu:

### 📋 Level Pemahaman (Bloom's Taxonomy)

#### 🔵 **C1 - Mengingat (Remember)**
- Menyebutkan komponen utama Ionic Framework
- Mengidentifikasi HTTP methods untuk API
- Menjelaskan konsep async/await

#### 🔵 **C2 - Memahami (Understand)**  
- Menjelaskan arsitektur Ionic untuk hybrid apps
- Memahami flow RESTful API communication
- Mengartikan JSON data structure

#### 🔵 **C3 - Menerapkan (Apply)**
- Membuat project Ionic dengan Vue.js
- Mengintegrasikan external API ke aplikasi
- Membuat responsive mobile UI dengan Ionic components

---

## 🕐 Timeline Sesi

| Waktu | Aktivitas | Metode |
|-------|-----------|--------|
| 00:00-10:00 | **Pendahuluan & Demo App** | Live Demo |
| 10:00-25:00 | **Teori Ionic Framework** | Ceramah + Visual |
| 25:00-45:00 | **Setup Project Ionic** | Hands-on |
| 45:00-60:00 | **Teori RESTful API** | Ceramah + Diagram |
| 60:00-85:00 | **Praktikum API Integration** | Guided Practice |
| 85:00-105:00 | **Build Weather App** | Hands-on |
| 105:00-115:00 | **Testing & Debugging** | Practice |
| 115:00-120:00 | **Q&A & Next Steps** | Diskusi |

---

## 📚 Materi 1: Pengenalan Ionic Framework

### 1.1 Apa itu Ionic Framework? (Visual Understanding)

#### 🎯 **Konsep Visual**
Ionic adalah **framework untuk membuat aplikasi mobile hybrid**. Bayangkan:

```
📱 Aplikasi Native          🌐 Aplikasi Web              📱 Aplikasi Ionic
├── iOS Native Code        ├── HTML/CSS/JS              ├── HTML/CSS/JS
├── Android Native Code    ├── Browser Engine          ├── WebView Wrapper
├── Device APIs            ├── Limited Device Access   ├── Native Bridge
└── Platform Specific     └── Cross Platform          └── Cross Platform
```

#### 📊 **Perbandingan Platform Development**

| Aspek | Native iOS | Native Android | Ionic Hybrid |
|-------|------------|---------------|--------------|
| **Language** | Swift/Objective-C | Kotlin/Java | TypeScript/JS |
| **Code Base** | Terpisah | Terpisah | Satu codebase |
| **Development Cost** | Tinggi | Tinggi | Sedang |
| **Performance** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Development Speed** | Lambat | Lambat | Cepat |
| **UI Consistency** | Perfect | Perfect | Very Good |

#### 🏗️ **Arsitektur Ionic Framework**

```
┌─────────────────────────────────────────────────────────────┐
│                    📱 Aplikasi Anda                        │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              Vue.js Components                       │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │   │
│  │  │   Weather   │  │    Profile  │  │   Settings  │ │   │
│  │  │  Component  │  │ Component   │  │ Component   │ │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘ │   │
│  └─────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│                 🎨 Ionic UI Components                    │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │
│  │ IonHeader   │  │ IonCard     │  │ IonButton   │       │
│  │ IonToolbar  │  │ IonList     │  │ IonInput    │       │
│  │ IonContent  │  │ IonItem     │  │ IonIcon     │       │
│  └─────────────┘  └─────────────┘  └─────────────┘       │
├─────────────────────────────────────────────────────────────┤
│                🔌 Capacitor/Cordova Bridge                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │
│  │   Camera    │  │  GPS/Location│  │  Push Notif │       │
│  │   Storage   │  │  Bluetooth   │  │  Biometrics │       │
│  │   Network   │  │   File Sys   │  │   Sensors   │       │
│  └─────────────┘  └─────────────┘  └─────────────┘       │
├─────────────────────────────────────────────────────────────┤
│                📱 Native Platform                          │
│  ┌─────────────────┐              ┌─────────────────┐     │
│  │   iOS Device    │              │ Android Device  │     │
│  │   (Swift/ObjC)  │              │ (Java/Kotlin)   │     │
│  └─────────────────┘              └─────────────────┘     │
└─────────────────────────────────────────────────────────────┘
```

### 1.2 Keunggulan Ionic Framework

#### 🚀 **Development Advantages**

1. **🔄 Single Codebase**
   ```
   Tulis sekali → Jalankan di mana saja
   ├── iOS App
   ├── Android App  
   └── Web App (PWA)
   ```

2. **🎨 Rich UI Components**
   - 100+ pre-built components
   - Native look & feel
   - Customizable themes

3. **⚡ Modern Development**
   - TypeScript support
   - Hot reload development
   - Rich debugging tools

4. **🔌 Native Access**
   - Camera, GPS, Storage
   - Push notifications
   - Biometric authentication

#### 💼 **Business Benefits**

| Benefit | Explanation | Impact |
|---------|-------------|--------|
| **Cost Reduction** | One team, multiple platforms | 💰 50-70% cost saving |
| **Faster Time-to-Market** | Rapid development cycle | ⚡ 2-3x faster |
| **Easier Maintenance** | Single codebase | 🔧 Simplified updates |
| **Wider Reach** | iOS + Android + Web | 🌍 More users |

### 1.3 Setup Environment Ionic (Step-by-Step Visual)

#### 🛠️ **Prerequisites Checklist**

```
✅ Node.js (v18+)
✅ npm atau yarn
✅ Git untuk version control
✅ Code Editor (VS Code recommended)
✅ Smartphone/Emulator untuk testing
```

#### 📱 **Step 1: Install Ionic CLI**

```bash
# Buka terminal/command prompt
# Install Ionic CLI globally
npm install -g @ionic/cli

# Verifikasi instalasi
ionic --version

# Expected output: Ionic CLI v7.x.x
```

**💡 Pro Tip:** Jika error, coba run as administrator (Windows) atau gunakan sudo (Mac/Linux).

#### 🏗️ **Step 2: Create New Ionic Project**

```bash
# Buat folder untuk project
mkdir ionic-weather-app
cd ionic-weather-app

# Create new project dengan Vue.js
ionic start . tabs --type=vue

# Pilihan yang akan muncul:
# ? Framework: Vue
# ? Starter template: Tabs (recommended for beginners)
```

**📊 Project Structure yang akan dibuat:**

```
ionic-weather-app/
├── src/
│   ├── components/          # Reusable components
│   ├── views/              # Page components
│   │   ├── Tab1Page.vue   # Home tab
│   │   ├── Tab2Page.vue   # Weather tab  
│   │   └── Tab3Page.vue   # Settings tab
│   ├── router/             # Vue Router configuration
│   ├── theme/              # Styling dan themes
│   └── App.vue             # Main app component
├── public/                 # Static assets
├── capacitor.config.ts     # Native platform config
├── ionic.config.json      # Ionic configuration
└── package.json           # Dependencies
```

#### 🚀 **Step 3: Run Development Server**

```bash
# Install dependencies
npm install

# Run development server
ionic serve

# Atau
npm run dev
```

**🌐 What happens next:**
1. Browser akan otomatis membuka `http://localhost:8100`
2. Anda akan melihat aplikasi Ionic dengan 3 tabs
3. Hot reload aktif - perubahan akan langsung terlihat

#### 📱 **Step 4: Test on Mobile Device**

```bash
# Install Ionic DevApp (optional)
npm install -g @ionic/cli

# Run on device/emulator
ionic cap run android    # Untuk Android
ionic cap run ios        # Untuk iOS (Mac only)
```

---

## 📚 Materi 2: RESTful API Fundamentals

### 2.1 Apa itu RESTful API? (Konsep Visual)

#### 🌐 **API Communication Flow**

```
📱 Mobile App                    🌐 Server
├── Request → ──────────────────→ │
│   HTTP Method                  │
│   GET /weather                 │
│   Headers: {                  │
│     "Content-Type": "application/json" │
│   }                           │
│                                │
├── ← ────────────────── Response │
│   Status Code: 200 OK         │
│   Body: {                     │
│     "temperature": 28,         │
│     "humidity": 75            │
│   }                           │
└────────────────────────────────┘
```

#### 📋 **HTTP Methods Cheat Sheet**

| Method | Purpose | Example | Status Code |
|--------|---------|---------|-------------|
| **GET** | Retrieve data | `GET /weather` | 200 OK |
| **POST** | Create data | `POST /users` | 201 Created |
| **PUT** | Update entire data | `PUT /users/1` | 200 OK |
| **PATCH** | Update partial data | `PATCH /users/1` | 200 OK |
| **DELETE** | Delete data | `DELETE /users/1` | 204 No Content |

#### 📊 **HTTP Status Codes**

```
✅ 2xx Success
   200 OK - Request successful
   201 Created - Resource created
   204 No Content - Success but no content

⚠️ 4xx Client Error  
   400 Bad Request - Invalid request
   401 Unauthorized - Authentication required
   403 Forbidden - No permission
   404 Not Found - Resource not found

❌ 5xx Server Error
   500 Internal Server Error - Server problem
   502 Bad Gateway - Gateway issue
   503 Service Unavailable - Server down
```

### 2.2 JSON Data Structure (Visual Examples)

#### 📋 **Basic JSON Structure**

```json
{
  "status": "success",
  "data": {
    "location": {
      "name": "Jakarta",
      "country": "Indonesia",
      "coordinates": {
        "latitude": -6.2088,
        "longitude": 106.8456
      }
    },
    "current_weather": {
      "temperature": 28.5,
      "humidity": 75,
      "wind_speed": 15.2,
      "description": "Partly cloudy",
      "icon": "partly-cloudy"
    },
    "forecast": [
      {
        "date": "2024-01-15",
        "max_temp": 32,
        "min_temp": 24,
        "condition": "sunny"
      },
      {
        "date": "2024-01-16", 
        "max_temp": 30,
        "min_temp": 23,
        "condition": "rainy"
      }
    ]
  },
  "timestamp": "2024-01-15T10:30:00Z"
}
```

#### 🔍 **JSON Parsing di TypeScript**

```typescript
// Interface untuk type safety
interface WeatherData {
  status: string;
  data: {
    location: {
      name: string;
      country: string;
      coordinates: {
        latitude: number;
        longitude: number;
      };
    };
    current_weather: {
      temperature: number;
      humidity: number;
      wind_speed: number;
      description: string;
      icon: string;
    };
    forecast: Array<{
      date: string;
      max_temp: number;
      min_temp: number;
      condition: string;
    }>;
  };
  timestamp: string;
}

// Parsing JSON response
async function parseWeatherResponse(responseText: string): Promise<WeatherData> {
  try {
    const data: WeatherData = JSON.parse(responseText);
    return data;
  } catch (error) {
    throw new Error('Invalid JSON format');
  }
}
```

### 2.3 Async/Await Pattern (Step-by-Step)

#### ⚡ **Synchronous vs Asynchronous**

```
🔄 Synchronous (Blocking)
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ Step 1      │ │ Step 2      │ │ Step 3      │
│ (2 seconds) │ │ (3 seconds) │ │ (1 second)  │
└─────────────┘ └─────────────┘ └─────────────┘
Total: 6 seconds (blocking)

⚡ Asynchronous (Non-blocking)  
┌─────────────┐
│ Step 1      │
│ (2 seconds) │
└─────────────┘
┌─────────────┐
│ Step 2      │
│ (3 seconds) │
└─────────────┘
┌─────────────┐
│ Step 3      │
│ (1 second)  │
└─────────────┘
Total: ~3 seconds (parallel)
```

#### 🧩 **Async/Await Syntax**

```typescript
// ❌ Callback Hell (Old way)
function getData(callback: (data: any) => void) {
  fetch('/api/weather')
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.error(error));
}

// ✅ Async/Await (Modern way)
async function getWeatherData(): Promise<any> {
  try {
    const response = await fetch('/api/weather');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
}

// 🎯 Using the async function
async function main() {
  try {
    const weather = await getWeatherData();
    console.log('Weather data:', weather);
  } catch (error) {
    console.error('Failed to get weather:', error);
  }
}
```

---

## 🛠️ Praktikum 1: Setup Ionic Weather Project

### 🎯 **Tujuan Praktikum**
Membuat project Ionic Vue.js untuk aplikasi cuaca dengan integrasi API.

### 📋 **Project Requirements**
- ✅ Ionic Framework dengan Vue.js
- ✅ TypeScript untuk type safety
- ✅ Open-Meteo Weather API integration
- ✅ Responsive mobile UI
- ✅ Error handling dan loading states

### 🏗️ **Step 1: Create Project**

```bash
# Create new project
ionic start weather-app tabs --type=vue

# Navigate to project
cd weather-app

# Install additional dependencies
npm install axios

# Install Ionic icons
npm install ionicons
```

### 📁 **Step 2: Project Structure Setup**

```
weather-app/
├── src/
│   ├── components/          # Reusable components
│   │   ├── WeatherCard.vue
│   │   ├── LoadingSpinner.vue
│   │   └── ErrorMessage.vue
│   ├── services/           # API services
│   │   └── weatherService.ts
│   ├── types/              # TypeScript interfaces
│   │   └── weather.ts
│   ├── views/              # Page components
│   │   ├── Tab1Page.vue    # → WeatherPage.vue
│   │   ├── Tab2Page.vue    # → ForecastPage.vue
│   │   └── Tab3Page.vue    # → SettingsPage.vue
│   └── composables/        # Vue composables
│       └── useWeather.ts
```

### 📝 **Step 3: Create TypeScript Interfaces**

```typescript
// src/types/weather.ts

export interface WeatherLocation {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface CurrentWeather {
  temperature: number;
  humidity: number;
  windSpeed: number;
  pressure: number;
  visibility: number;
  uvIndex: number;
  description: string;
  icon: string;
}

export interface HourlyForecast {
  time: string;
  temperature: number;
  humidity: number;
  precipitation: number;
  windSpeed: number;
  condition: string;
}

export interface DailyForecast {
  date: string;
  maxTemp: number;
  minTemp: number;
  condition: string;
  precipitationChance: number;
  sunrise: string;
  sunset: string;
}

export interface WeatherData {
  location: WeatherLocation;
  current: CurrentWeather;
  hourly: HourlyForecast[];
  daily: DailyForecast[];
  lastUpdated: string;
}

export interface WeatherError {
  code: number;
  message: string;
  details?: string;
}
```

### 🔧 **Step 4: Create Weather Service**

```typescript
// src/services/weatherService.ts

import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { WeatherData, WeatherLocation, CurrentWeather, HourlyForecast, DailyForecast, WeatherError } from '@/types/weather';

class WeatherService {
  private api: AxiosInstance;
  private readonly BASE_URL = 'https://api.open-meteo.com/v1/forecast';

  constructor() {
    this.api = axios.create({
      baseURL: this.BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Request interceptor
    this.api.interceptors.request.use(
      (config) => {
        console.log('🚀 API Request:', config.url);
        return config;
      },
      (error) => {
        console.error('❌ Request Error:', error);
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.api.interceptors.response.use(
      (response) => {
        console.log('✅ API Response:', response.status);
        return response;
      },
      (error) => {
        console.error('❌ Response Error:', error.response?.status);
        return Promise.reject(this.handleError(error));
      }
    );
  }

  // Get weather data by coordinates
  async getWeatherByCoordinates(
    latitude: number,
    longitude: number
  ): Promise<WeatherData> {
    try {
      const response: AxiosResponse = await this.api.get('', {
        params: {
          latitude,
          longitude,
          current_weather: true,
          hourly: [
            'temperature_2m',
            'relativehumidity_2m',
            'precipitation_probability',
            'windspeed_10m',
            'weathercode'
          ],
          daily: [
            'temperature_2m_max',
            'temperature_2m_min',
            'precipitation_probability_max',
            'sunrise',
            'sunset',
            'weathercode'
          ],
          timezone: 'auto',
          forecast_days: 7
        },
      });

      return this.transformWeatherData(response.data, latitude, longitude);
    } catch (error) {
      throw error;
    }
  }

  // Get weather data by city name
  async getWeatherByCity(cityName: string): Promise<WeatherData> {
    try {
      // First, get coordinates for the city
      const coordinates = await this.getCityCoordinates(cityName);
      
      // Then get weather data using coordinates
      return this.getWeatherByCoordinates(coordinates.lat, coordinates.lon);
    } catch (error) {
      throw new Error(`City "${cityName}" not found`);
    }
  }

  // Get city coordinates (using Nominatim API)
  private async getCityCoordinates(cityName: string): Promise<{ lat: number; lon: number }> {
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
        params: {
          q: cityName,
          format: 'json',
          limit: 1
        }
      });

      if (response.data.length === 0) {
        throw new Error('City not found');
      }

      const city = response.data[0];
      return {
        lat: parseFloat(city.lat),
        lon: parseFloat(city.lon)
      };
    } catch (error) {
      throw new Error('Failed to get city coordinates');
    }
  }

  // Transform API response to our WeatherData interface
  private transformWeatherData(apiData: any, latitude: number, longitude: number): WeatherData {
    const current = apiData.current_weather;
    const hourly = apiData.hourly;
    const daily = apiData.daily;

    // Get current hour index
    const currentHourIndex = hourly.time.findIndex((time: string) => {
      const hour = new Date(time).getHours();
      const currentHour = new Date().getHours();
      return hour === currentHour;
    });

    return {
      location: {
        name: this.getLocationName(latitude, longitude),
        country: 'Indonesia', // Default, could be enhanced
        latitude,
        longitude
      },
      current: {
        temperature: Math.round(current.temperature),
        humidity: hourly.relativehumidity_2m[currentHourIndex] || 0,
        windSpeed: Math.round(current.windspeed),
        pressure: 1013, // Default, not provided by Open-Meteo free tier
        visibility: 10, // Default, not provided by Open-Meteo free tier
        uvIndex: 5, // Default, not provided by Open-Meteo free tier
        description: this.getWeatherDescription(current.weathercode),
        icon: this.getWeatherIcon(current.weathercode)
      },
      hourly: hourly.time.slice(0, 24).map((time: string, index: number) => ({
        time: this.formatTime(time),
        temperature: Math.round(hourly.temperature_2m[index]),
        humidity: hourly.relativehumidity_2m[index],
        precipitation: hourly.precipitation_probability[index],
        windSpeed: Math.round(hourly.windspeed_10m[index]),
        condition: this.getWeatherDescription(hourly.weathercode[index])
      })),
      daily: daily.time.map((date: string, index: number) => ({
        date: this.formatDate(date),
        maxTemp: Math.round(daily.temperature_2m_max[index]),
        minTemp: Math.round(daily.temperature_2m_min[index]),
        condition: this.getWeatherDescription(daily.weathercode[index]),
        precipitationChance: daily.precipitation_probability_max[index],
        sunrise: this.formatTime(daily.sunrise[index]),
        sunset: this.formatTime(daily.sunset[index])
      })),
      lastUpdated: new Date().toISOString()
    };
  }

  // Helper methods
  private getLocationName(lat: number, lon: number): string {
    // Simple location name based on coordinates
    // In production, you'd use reverse geocoding API
    if (Math.abs(lat - (-6.2088)) < 0.1 && Math.abs(lon - 106.8456) < 0.1) {
      return "Jakarta";
    } else if (Math.abs(lat - (-7.2575)) < 0.1 && Math.abs(lon - 112.7521) < 0.1) {
      return "Surabaya";
    } else if (Math.abs(lat - (-6.9175)) < 0.1 && Math.abs(lon - 107.6191) < 0.1) {
      return "Bandung";
    }
    return `Lat: ${lat.toFixed(2)}, Lon: ${lon.toFixed(2)}`;
  }

  private getWeatherDescription(weatherCode: number): string {
    const codes: { [key: number]: string } = {
      0: 'Clear sky',
      1: 'Mainly clear',
      2: 'Partly cloudy',
      3: 'Overcast',
      45: 'Fog',
      48: 'Depositing rime fog',
      51: 'Light drizzle',
      53: 'Moderate drizzle',
      55: 'Dense drizzle',
      56: 'Light freezing drizzle',
      57: 'Dense freezing drizzle',
      61: 'Slight rain',
      63: 'Moderate rain',
      65: 'Heavy rain',
      66: 'Light freezing rain',
      67: 'Heavy freezing rain',
      71: 'Slight snow fall',
      73: 'Moderate snow fall',
      75: 'Heavy snow fall',
      77: 'Snow grains',
      80: 'Slight rain showers',
      81: 'Moderate rain showers',
      82: 'Violent rain showers',
      85: 'Slight snow showers',
      86: 'Heavy snow showers',
      95: 'Thunderstorm',
      96: 'Thunderstorm with slight hail',
      99: 'Thunderstorm with heavy hail'
    };
    return codes[weatherCode] || 'Unknown';
  }

  private getWeatherIcon(weatherCode: number): string {
    if (weatherCode === 0) return 'sunny';
    if (weatherCode <= 3) return 'partly-sunny';
    if (weatherCode <= 48) return 'cloudy';
    if (weatherCode <= 67) return 'rainy';
    if (weatherCode <= 77) return 'snowy';
    if (weatherCode <= 82) return 'rainy';
    return 'thunderstorm';
  }

  private formatTime(timeString: string): string {
    return new Date(timeString).toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  private formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  private handleError(error: any): WeatherError {
    if (error.response) {
      // Server responded with error status
      return {
        code: error.response.status,
        message: error.response.data?.message || 'Server error occurred',
        details: error.response.data?.details
      };
    } else if (error.request) {
      // Network error
      return {
        code: 0,
        message: 'Network error. Please check your internet connection.',
        details: 'No response received from server'
      };
    } else {
      // Other error
      return {
        code: -1,
        message: error.message || 'An unexpected error occurred',
        details: error.toString()
      };
    }
  }
}

// Export singleton instance
export const weatherService = new WeatherService();
```

---

## 🛠️ Praktikum 2: Build Weather UI Components

### 🎨 **Step 1: Weather Card Component**

```vue
<!-- src/components/WeatherCard.vue -->
<template>
  <ion-card class="weather-card" v-if="weatherData">
    <ion-card-header>
      <ion-card-title class="location-title">
        <ion-icon :icon="locationOutline" />
        {{ weatherData.location.name }}
      </ion-card-title>
      <ion-card-subtitle class="location-subtitle">
        {{ weatherData.location.country }}
      </ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      <!-- Current Weather Display -->
      <div class="current-weather">
        <div class="weather-main">
          <div class="temperature-display">
            <ion-icon 
              :icon="getWeatherIcon(weatherData.current.icon)"
              class="weather-icon"
            />
            <div class="temperature-text">
              <h1>{{ weatherData.current.temperature }}°C</h1>
              <p>{{ weatherData.current.description }}</p>
            </div>
          </div>
        </div>

        <!-- Weather Details Grid -->
        <ion-grid class="weather-details">
          <ion-row>
            <ion-col size="4">
              <div class="detail-item">
                <ion-icon :icon="waterOutline" />
                <span>{{ weatherData.current.humidity }}%</span>
                <small>Kelembaban</small>
              </div>
            </ion-col>
            <ion-col size="4">
              <div class="detail-item">
                <ion-icon :icon="windOutline" />
                <span>{{ weatherData.current.windSpeed }} km/j</span>
                <small>Angin</small>
              </div>
            </ion-col>
            <ion-col size="4">
              <div class="detail-item">
                <ion-icon :icon="thermometerOutline" />
                <span>{{ weatherData.current.pressure }} hPa</span>
                <small>Tekanan</small>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>

      <!-- Last Updated -->
      <div class="last-updated">
        <small>
          <ion-icon :icon="timeOutline" />
          Update: {{ formatLastUpdated(weatherData.lastUpdated) }}
        </small>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon
} from '@ionic/vue';
import {
  locationOutline,
  waterOutline,
  windOutline,
  thermometerOutline,
  timeOutline,
  sunny,
  partlySunny,
  cloudy,
  rainy,
  snowy,
  thunderstorm
} from 'ionicons/icons';
import { WeatherData } from '@/types/weather';

defineProps<{
  weatherData?: WeatherData | null;
}>();

const getWeatherIcon = (iconName: string) => {
  const iconMap: { [key: string]: any } = {
    'sunny': sunny,
    'partly-sunny': partlySunny,
    'cloudy': cloudy,
    'rainy': rainy,
    'snowy': snowy,
    'thunderstorm': thunderstorm
  };
  return iconMap[iconName] || sunny;
};

const formatLastUpdated = (timestamp: string): string => {
  const date = new Date(timestamp);
  return date.toLocaleString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    day: 'numeric',
    month: 'short'
  });
};
</script>

<style scoped>
.weather-card {
  margin: 16px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.location-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.2rem;
  color: #2c3e50;
}

.location-subtitle {
  color: #7f8c8d;
  margin-top: 4px;
}

.current-weather {
  text-align: center;
}

.weather-main {
  margin-bottom: 24px;
}

.temperature-display {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 16px;
}

.weather-icon {
  font-size: 64px;
  color: #f39c12;
}

.temperature-text h1 {
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  color: #2c3e50;
}

.temperature-text p {
  font-size: 1.1rem;
  color: #7f8c8d;
  margin: 4px 0 0 0;
  text-transform: capitalize;
}

.weather-details {
  margin-top: 20px;
}

.detail-item {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 12px;
  transition: transform 0.2s;
}

.detail-item:hover {
  transform: translateY(-2px);
}

.detail-item ion-icon {
  font-size: 24px;
  color: #3498db;
  margin-bottom: 4px;
}

.detail-item span {
  font-weight: bold;
  font-size: 1rem;
  color: #2c3e50;
}

.detail-item small {
  color: #7f8c8d;
  font-size: 0.75rem;
  margin-top: 2px;
}

.last-updated {
  text-align: center;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #ecf0f1;
  color: #95a5a6;
}

.last-updated small {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .temperature-display {
    flex-direction: column;
    gap: 12px;
  }
  
  .weather-icon {
    font-size: 48px;
  }
  
  .temperature-text h1 {
    font-size: 2.5rem;
  }
  
  .detail-item {
    padding: 8px;
  }
}
</style>
```

### 🎨 **Step 2: Hourly Forecast Component**

```vue
<!-- src/components/HourlyForecast.vue -->
<template>
  <ion-card v-if="hourlyData.length > 0" class="hourly-forecast">
    <ion-card-header>
      <ion-card-title>
        <ion-icon :icon="timeOutline" />
        Prakiraan Per Jam
      </ion-card-title>
    </ion-card-header>
    
    <ion-card-content>
      <div class="hourly-scroll">
        <div 
          v-for="(hour, index) in hourlyData" 
          :key="index"
          class="hour-item"
          :class="{ 'current-hour': isCurrentHour(hour.time) }"
        >
          <div class="hour-time">{{ hour.time }}</div>
          <div class="hour-icon">
            <ion-icon :icon="getWeatherIcon(hour.condition)" />
          </div>
          <div class="hour-temp">{{ hour.temperature }}°</div>
          <div class="hour-details">
            <div class="hour-humidity">
              <ion-icon :icon="waterOutline" />
              {{ hour.humidity }}%
            </div>
            <div class="hour-precipitation" v-if="hour.precipitation > 0">
              <ion-icon :icon="rainyOutline" />
              {{ hour.precipitation }}%
            </div>
          </div>
        </div>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon
} from '@ionic/vue';
import {
  timeOutline,
  waterOutline,
  rainyOutline,
  sunny,
  partlySunny,
  cloudy,
  rainy,
  snowy,
  thunderstorm
} from 'ionicons/icons';
import { HourlyForecast } from '@/types/weather';

defineProps<{
  hourlyData: HourlyForecast[];
}>();

const isCurrentHour = (timeString: string): boolean => {
  const hour = parseInt(timeString.split(':')[0]);
  const currentHour = new Date().getHours();
  return hour === currentHour;
};

const getWeatherIcon = (condition: string) => {
  const iconMap: { [key: string]: any } = {
    'clear sky': sunny,
    'mainly clear': sunny,
    'partly cloudy': partlySunny,
    'overcast': cloudy,
    'fog': cloudy,
    'light drizzle': rainy,
    'moderate drizzle': rainy,
    'dense drizzle': rainy,
    'slight rain': rainy,
    'moderate rain': rainy,
    'heavy rain': rainy,
    'slight snow fall': snowy,
    'moderate snow fall': snowy,
    'heavy snow fall': snowy,
    'thunderstorm': thunderstorm
  };
  return iconMap[condition.toLowerCase()] || partlySunny;
};
</script>

<style scoped>
.hourly-forecast {
  margin: 16px;
}

.hourly-scroll {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 8px 0;
  scroll-behavior: smooth;
}

.hour-item {
  min-width: 100px;
  text-align: center;
  padding: 16px 12px;
  background: #f8f9fa;
  border-radius: 16px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
}

.hour-item:hover {
  background: #e9ecef;
  transform: translateY(-2px);
}

.hour-item.current-hour {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: #667eea;
}

.hour-item.current-hour .hour-time,
.hour-item.current-hour .hour-temp {
  color: white;
}

.hour-time {
  font-size: 0.875rem;
  color: #6c757d;
  margin-bottom: 8px;
  font-weight: 600;
}

.hour-icon {
  margin-bottom: 8px;
}

.hour-icon ion-icon {
  font-size: 24px;
  color: #f39c12;
}

.hour-item.current-hour .hour-icon ion-icon {
  color: white;
}

.hour-temp {
  font-size: 1.25rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 8px;
}

.hour-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.hour-humidity,
.hour-precipitation {
  font-size: 0.75rem;
  color: #6c757d;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
}

.hour-item.current-hour .hour-humidity,
.hour-item.current-hour .hour-precipitation {
  color: rgba(255, 255, 255, 0.9);
}

.hour-humidity ion-icon,
.hour-precipitation ion-icon {
  font-size: 12px;
}

/* Custom scrollbar */
.hourly-scroll::-webkit-scrollbar {
  height: 6px;
}

.hourly-scroll::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.hourly-scroll::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.hourly-scroll::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Responsive Design */
@media (max-width: 480px) {
  .hour-item {
    min-width: 80px;
    padding: 12px 8px;
  }
  
  .hour-temp {
    font-size: 1.1rem;
  }
  
  .hour-icon ion-icon {
    font-size: 20px;
  }
}
</style>
```

### 🎨 **Step 3: Loading and Error Components**

```vue
<!-- src/components/LoadingSpinner.vue -->
<template>
  <div class="loading-container" v-if="loading">
    <div class="loading-content">
      <ion-spinner name="dots" />
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IonSpinner } from '@ionic/vue';

defineProps<{
  loading: boolean;
  message?: string;
}>();
</script>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  padding: 20px;
}

.loading-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.loading-content p {
  color: #6c757d;
  font-size: 1rem;
  margin: 0;
}

ion-spinner {
  --color: #3498db;
  width: 48px;
  height: 48px;
}
</style>
```

```vue
<!-- src/components/ErrorMessage.vue -->
<template>
  <ion-card class="error-card" v-if="error">
    <ion-card-content>
      <div class="error-content">
        <ion-icon :icon="alertCircleOutline" color="danger" />
        <h3>{{ errorTitle }}</h3>
        <p>{{ errorMessage }}</p>
        <ion-button fill="clear" @click="$emit('retry')" v-if="showRetry">
          <ion-icon :icon="refreshOutline" slot="start" />
          Coba Lagi
        </ion-button>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardContent,
  IonIcon,
  IonButton
} from '@ionic/vue';
import {
  alertCircleOutline,
  refreshOutline
} from 'ionicons/icons';

defineProps<{
  error: string;
  showRetry?: boolean;
}>();

defineEmits<{
  retry: [];
}>();

const errorTitle = 'Terjadi Kesalahan';
const errorMessage = 'Gagal mengambil data cuaca. Periksa koneksi internet Anda dan coba lagi.';
</script>

<style scoped>
.error-card {
  margin: 16px;
  border-left: 4px solid #dc3545;
}

.error-content {
  text-align: center;
  padding: 20px;
}

.error-content ion-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.error-content h3 {
  color: #dc3545;
  margin-bottom: 8px;
}

.error-content p {
  color: #6c757d;
  margin-bottom: 16px;
  line-height: 1.5;
}
</style>
```

---

## 🛠️ Praktikum 3: Main Weather Page Integration

### 🏗️ **Step 1: Create Weather Composable**

```typescript
// src/composables/useWeather.ts

import { ref, computed, onMounted } from 'vue';
import { weatherService } from '@/services/weatherService';
import { WeatherData, WeatherError } from '@/types/weather';

export function useWeather() {
  // State
  const weatherData = ref<WeatherData | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // Computed properties
  const hasWeatherData = computed(() => weatherData.value !== null);
  const currentTemperature = computed(() => weatherData.value?.current.temperature || 0);
  const locationName = computed(() => weatherData.value?.location.name || '');
  const lastUpdated = computed(() => weatherData.value?.lastUpdated || '');

  // Methods
  const fetchWeather = async (latitude?: number, longitude?: number) => {
    loading.value = true;
    error.value = null;

    try {
      const data = await weatherService.getWeatherByCoordinates(
        latitude || -6.2088, // Default: Jakarta
        longitude || 106.8456
      );
      weatherData.value = data;
      
      // Save to localStorage for offline access
      localStorage.setItem('weatherData', JSON.stringify(data));
      localStorage.setItem('lastWeatherUpdate', new Date().toISOString());
    } catch (err) {
      const weatherError = err as WeatherError;
      error.value = weatherError.message;
      console.error('Weather fetch error:', weatherError);
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
      
      // Save to localStorage
      localStorage.setItem('weatherData', JSON.stringify(data));
      localStorage.setItem('lastWeatherUpdate', new Date().toISOString());
    } catch (err) {
      const weatherError = err as WeatherError;
      error.value = weatherError.message;
      console.error('Weather fetch error:', weatherError);
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

  const loadCachedWeather = () => {
    try {
      const cachedData = localStorage.getItem('weatherData');
      const lastUpdate = localStorage.getItem('lastWeatherUpdate');
      
      if (cachedData && lastUpdate) {
        const updateDate = new Date(lastUpdate);
        const now = new Date();
        const hoursDiff = (now.getTime() - updateDate.getTime()) / (1000 * 60 * 60);
        
        // Use cached data if less than 1 hour old
        if (hoursDiff < 1) {
          weatherData.value = JSON.parse(cachedData);
          return true;
        }
      }
    } catch (error) {
      console.error('Error loading cached weather:', error);
    }
    return false;
  };

  const clearCache = () => {
    localStorage.removeItem('weatherData');
    localStorage.removeItem('lastWeatherUpdate');
    weatherData.value = null;
  };

  // Initialize on mount
  onMounted(async () => {
    // Try to load cached data first
    const hasCachedData = loadCachedWeather();
    
    // If no cached data or data is old, fetch fresh data
    if (!hasCachedData) {
      await fetchWeather();
    }
  });

  return {
    // State
    weatherData,
    loading,
    error,
    
    // Computed
    hasWeatherData,
    currentTemperature,
    locationName,
    lastUpdated,
    
    // Methods
    fetchWeather,
    fetchWeatherByCity,
    refreshWeather,
    loadCachedWeather,
    clearCache
  };
}
```

### 🏗️ **Step 2: Update Main Weather Page**

```vue
<!-- src/views/Tab1Page.vue → WeatherPage.vue -->
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Aplikasi Cuaca</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="refreshWeather" :disabled="loading">
            <ion-icon :icon="refreshOutline" />
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Cuaca</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- Search Section -->
      <div class="search-section">
        <ion-searchbar
          v-model="searchQuery"
          placeholder="Cari kota..."
          @ionInput="onSearchInput"
          @ionClear="onSearchClear"
          :animated="true"
        />
      </div>

      <!-- Loading State -->
      <LoadingSpinner :loading="loading" message="Mengambil data cuaca..." />

      <!-- Error State -->
      <ErrorMessage 
        :error="error || ''" 
        :show-retry="true"
        @retry="refreshWeather"
      />

      <!-- Weather Content -->
      <template v-if="hasWeatherData && !loading && !error">
        <!-- Current Weather Card -->
        <WeatherCard :weather-data="weatherData" />

        <!-- Hourly Forecast -->
        <HourlyForecast :hourly-data="weatherData?.hourly || []" />

        <!-- Daily Forecast -->
        <DailyForecast :daily-data="weatherData?.daily || []" />

        <!-- Additional Info -->
        <ion-card>
          <ion-card-header>
            <ion-card-title>
              <ion-icon :icon="informationCircleOutline" />
              Informasi Tambahan
            </ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-item>
              <ion-label>UV Index</ion-label>
              <ion-note slot="end">{{ weatherData?.current.uvIndex }}</ion-note>
            </ion-item>
            <ion-item>
              <ion-label>Visibility</ion-label>
              <ion-note slot="end">{{ weatherData?.current.visibility }} km</ion-note>
            </ion-item>
            <ion-item>
              <ion-label>Sunrise</ion-label>
              <ion-note slot="end">{{ weatherData?.daily[0]?.sunrise }}</ion-note>
            </ion-item>
            <ion-item>
              <ion-label>Sunset</ion-label>
              <ion-note slot="end">{{ weatherData?.daily[0]?.sunset }}</ion-note>
            </ion-item>
          </ion-card-content>
        </ion-card>
      </template>

      <!-- Location Settings -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>
            <ion-icon :icon="locationOutline" />
            Pengaturan Lokasi
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-label position="stacked">Latitude</ion-label>
            <ion-input
              v-model="latitude"
              type="number"
              placeholder="-6.2088"
              :step="0.0001"
            />
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Longitude</ion-label>
            <ion-input
              v-model="longitude"
              type="number"
              placeholder="106.8456"
              :step="0.0001"
            />
          </ion-item>
          <ion-button 
            expand="block" 
            @click="updateLocation"
            :disabled="!latitude || !longitude"
            fill="outline"
          >
            <ion-icon :icon="locationOutline" slot="start" />
            Update Lokasi
          </ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonSearchbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonNote
} from '@ionic/vue';
import {
  refreshOutline,
  informationCircleOutline,
  locationOutline
} from 'ionicons/icons';
import { ref, watch } from 'vue';
import { useWeather } from '@/composables/useWeather';
import WeatherCard from '@/components/WeatherCard.vue';
import HourlyForecast from '@/components/HourlyForecast.vue';
import DailyForecast from '@/components/DailyForecast.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import ErrorMessage from '@/components/ErrorMessage.vue';

// Use weather composable
const {
  weatherData,
  loading,
  error,
  hasWeatherData,
  fetchWeather,
  fetchWeatherByCity,
  refreshWeather
} = useWeather();

// Local state
const searchQuery = ref('');
const latitude = ref('-6.2088');
const longitude = ref('106.8456');

// Debounced search
let searchTimeout: NodeJS.Timeout;
const onSearchInput = (event: CustomEvent) => {
  const query = event.detail.value;
  
  // Clear previous timeout
  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }
  
  // Set new timeout for debounced search
  searchTimeout = setTimeout(async () => {
    if (query && query.length > 2) {
      await fetchWeatherByCity(query);
    }
  }, 500);
};

const onSearchClear = () => {
  searchQuery.value = '';
  refreshWeather();
};

const updateLocation = async () => {
  const lat = parseFloat(latitude.value);
  const lon = parseFloat(longitude.value);
  
  if (!isNaN(lat) && !isNaN(lon)) {
    await fetchWeather(lat, lon);
  }
};

// Watch for weather data changes to update location inputs
watch(weatherData, (newData) => {
  if (newData) {
    latitude.value = newData.location.latitude.toString();
    longitude.value = newData.location.longitude.toString();
  }
});
</script>

<style scoped>
.search-section {
  padding: 16px;
  padding-bottom: 8px;
}

ion-card {
  margin: 16px;
}

ion-card-title {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
```

---

## 🎯 Latihan Mandiri (Progressive Difficulty)

### 📈 **Level 1: Basic Enhancement**

#### **Latihan 1.1: Add Search History**
Implementasikan fitur search history:
1. **Save searched cities** ke localStorage
2. **Display recent searches** dalam dropdown
3. **Quick access** untuk kota-kota favorit

#### **Latihan 1.2: Weather Animations**
Tambahkan animasi untuk weather conditions:
1. **Animated icons** untuk cuaca berbeda
2. **Background gradients** berdasarkan kondisi
3. **Transition effects** saat data berubah

### 📈 **Level 2: Intermediate Features**

#### **Latihan 2.1: Multiple Locations**
Buat sistem multi-location:
1. **Add multiple cities** ke dashboard
2. **Swipe between locations**
3. **Compare weather** antar kota

#### **Latihan 2.2: Advanced Weather Data**
Integrasikan additional weather data:
1. **Air quality index**
2. **Pollen count**
3. **Weather alerts dan warnings**

### 📈 **Level 3: Advanced Integration**

#### **Latihan 3.1: Offline Mode**
Implementasikan offline functionality:
1. **Cache weather data** untuk offline access
2. **Sync when online** kembali
3. **Offline indicators** di UI

#### **Latihan 3.2: Push Notifications**
Setup weather notifications:
1. **Daily weather summary**
2. **Severe weather alerts**
3. **Custom notification preferences**

---

## 📝 Evaluasi & Assessment

### 🎯 **Quick Quiz (10 menit)**

#### **Soal Pilihan Ganda**

1. **Apa keunggulan utama Ionic Framework?**
   - A) Native performance only
   - B) Cross-platform development dengan web technologies
   - C) Machine learning integration
   - D) Blockchain support

2. **HTTP method yang tepat untuk mengambil data cuaca:**
   - A) POST
   - B) PUT
   - C) GET
   - D) DELETE

3. **Apa fungsi utama dari async/await?**
   - A) Membuat kode synchronous
   - B) Handle asynchronous operations lebih readable
   - C) Optimize memory usage
   - D) Improve network speed

4. **Component Ionic untuk menampilkan list:**
   - A) IonGrid
   - B) IonList
   - C) IonCard
   - D) IonButton

5. **Status code untuk successful API request:**
   - A) 404
   - B) 500
   - C) 200
   - D) 301

#### **Jawaban:**
1. B, 2. C, 3. B, 4. B, 5. C

### 📊 **Rubrik Penilaian Praktikum**

| Kriteria | Sangat Baik (4) | Baik (3) | Cukup (2) | Kurang (1) |
|----------|-----------------|----------|-----------|------------|
| **API Integration** | ✅ Error handling complete | ✅ Basic integration | ⚠️ Limited functionality | ❌ Not working |
| **UI Components** | ✅ Rich & interactive | ✅ Good design | ⚠️ Basic UI | ❌ Poor UX |
| **Code Quality** | ✅ Clean & modular | ✅ Well structured | ⚠️ Needs refactoring | ❌ Messy code |
| **Features** | ✅ Extra features | ✅ All requirements | ⚠️ Missing some | ❌ Incomplete |
| **Responsive Design** | ✅ Perfect on all sizes | ✅ Good responsive | ⚠️ Some issues | ❌ Not responsive |

---

## 🔗 Resources Tambahan

### 📚 **Documentation & Learning**

#### **Official Documentation**
- [Ionic Documentation](https://ionicframework.com/docs) - Panduan lengkap Ionic
- [Capacitor Documentation](https://capacitorjs.com/docs) - Native bridge
- [Vue.js Documentation](https://vuejs.org/guide/) - Vue.js guide
- [REST API Design Guide](https://restfulapi.net/) - API design principles

#### **API Documentation**
- [Open-Meteo API](https://open-meteo.com/) - Free weather API
- [Nominatim API](https://nominatim.org/) - Geocoding service
- [Axios Documentation](https://axios-http.com/) - HTTP client library

### 🛠️ **Development Tools**

#### **Browser DevTools**
- **Vue DevTools** - Debug Vue applications
- **Network Tab** - Monitor API requests
- **Console** - Debug JavaScript errors
- **Application Tab** - Inspect localStorage

#### **Mobile Testing**
- **Ionic DevApp** - Test on real device
- **BrowserStack** - Cross-browser testing
- **Android Studio Emulator** - Android testing
- **Xcode Simulator** - iOS testing (Mac only)

### 🎮 **Practice Platforms**

#### **API Practice**
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - Fake API for testing
- [Reqres.in](https://reqres.in/) - API for testing
- [Public APIs](https://github.com/public-apis/public-apis) - Collection of free APIs

#### **Ionic Examples**
- [Ionic Examples](https://ionicframework.com/examples/) - Official examples
- [CodePen Ionic](https://codepen.io/tag/ionic/) - Community examples
- [GitHub Ionic Projects](https://github.com/topics/ionic) - Open source projects

---

## 💡 Tips & Best Practices

### 🎯 **Untuk Mahasiswa Pemula**

#### **Learning Strategy**
1. **Start with UI** - Build interface first
2. **Add data later** - Integrate API after UI works
3. **Test frequently** - Run app after each change
4. **Use console.log** - Debug with logging
5. **Read documentation** - Check official docs first

#### **Common Mistakes to Avoid**
1. **Ignoring CORS issues** - API calls might fail
2. **Not handling errors** - Always catch API errors
3. **Blocking main thread** - Use async/await properly
4. **Forgetting responsive design** - Test on different screen sizes
5. **Not using TypeScript** - Lose type safety benefits

### 🚀 **Ionic Development Tips**

#### **Performance Optimization**
1. **Lazy load components** - Reduce initial bundle size
2. **Use virtual scrolling** - For long lists
3. **Optimize images** - Compress and resize
4. **Cache API responses** - Reduce network calls
5. **Use web workers** - For heavy computations

#### **UI/UX Best Practices**
1. **Follow platform guidelines** - iOS HIG, Android Material
2. **Use consistent spacing** - Follow Ionic design tokens
3. **Add loading states** - Improve perceived performance
4. **Handle edge cases** - No network, empty states
5. **Test on real devices** - Emulators aren't enough

---

## 🎉 Penutup Sesi

### 🏆 **Achievement Unlocked!**

Selamat! Anda telah menyelesaikan TUWEB 2 dan telah berhasil:

- ✅ **Membuat aplikasi Ionic** dengan Vue.js dan TypeScript
- ✅ **Mengintegrasikan RESTful API** untuk data cuaca real-time
- ✅ **Membangun responsive mobile UI** dengan Ionic components
- ✅ **Implementasikan best practices** untuk error handling dan loading states

### 🎯 **Key Takeaways**

1. **Ionic = Cross-Platform Power** - Satu kode untuk multiple platform
2. **API Integration = Real Data** - Connect apps to real-world services
3. **Async/Await = Modern JavaScript** - Handle async operations elegantly
4. **Component-Based = Modular Development** - Build reusable UI pieces

### 🚀 **Next Steps**

1. **Complete latihan mandiri** untuk reinforcement
2. **Explore additional Ionic components** (maps, charts, etc.)
3. **Prepare for TUWEB 3** - Advanced features dan deployment
4. **Start thinking about final project** yang menggabungkan semua materi
5. **Join Ionic communities** untuk support dan inspiration

### 📞 **Support & Contact**

**Jika ada pertanyaan:**
- **Email:** anton.prafanto@mulawarman.ac.id
- **WhatsApp Group:** [Link akan dibagikan]
- **Office Hours:** [Jadwal konsultasi]

**Remember:** "The best way to learn is by building. Keep creating, keep learning! 🚀"

---

**See you in TUWEB 3: Advanced Features & Deployment! 🌟**

---

*Dicetak oleh: Anton Prafanto, S.Kom., M.T.*  
*Universitas Mulawarman - Program Studi Informatika*  
*Universitas Terbuka - Pusat Belajar Jarak Jauh*  
*Tanggal: 29 Oktober 2025*
