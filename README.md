# ✈️ Traveler: Professional Travel Planning Dashboard

**Traveler** is a full-featured travel management system built to demonstrate modern React patterns, robust state management, and complex API orchestrations.

---

## 🔗 Links
[🚀 Live Demo Link](https://travelercity.netlify.app/) | [🛠️ GitHub Repository](https://github.com/izharusmani786/traveler)

---

## 🏗️ Architecture & Development Roadmap
This project was developed over a **3-Day Intensive Sprint** focusing on scalability and performance.

### 📅 Day 1: The Foundation
* **Modular Folder Structure:** Organized by features, components, services, and hooks.
* **Dynamic Routing:** Implemented `react-router-dom` for seamless transitions.
* **API Orchestration:** Integrated OpenWeatherMap and REST Countries API.

### 📅 Day 2: State & Persistence
* **State Management:** Utilized **Redux Toolkit** for centralized data flow.
* **Data Persistence:** Integrated **LocalStorage** for cross-session storage.
* **Custom Logic:** Developed `useDebounce` and `useFetch` for reusable logic.

### 📅 Day 3: Production Readiness
* **Theme Engine:** Built-in Dark/Light mode support with Tailwind CSS.
* **Security:** Mock Authentication flow with **Protected Routes**.
* **Stability:** Added Error Boundaries and an API abstraction layer.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Core** | React 18 (Hooks + Functional Components) |
| **State** | Redux Toolkit (Slices & Async Thunks) |
| **Styling** | Tailwind CSS (Dark Mode + Responsive) |
| **Networking** | Axios with custom interceptors |
| **Icons** | Lucide React |

---

## ✨ Features Implemented

### 🔍 Search & Discovery
* **Real-time Autocomplete:** City searching via GeoDB Cities API.
* **Instant Data:** Fetching weather, currency, and flags upon selection.

### 📍 Trip Management
* **Ongoing Trip Widget:** Auto-highlights active trips based on current date.
* **Smart Sorting:** Automatically places upcoming trips at the top.
* **CRUD Operations:** Save, favorite, and delete trips with persistent state.

### ⚡ Performance & UX
* **Optimized Rendering:** Used `useMemo` and `useCallback` to prevent unnecessary re-renders.
* **Visual Feedback:** Shimmer/Skeleton screens for loading states.
* **Global Error Handling:** API Interceptors for centralized error management.

---

## 🚀 Installation & Local Setup

### 1. Clone the repo
* git clone https://github.com/izharusmani786/traveler.git
* cd traveler

### 2. Install Dependencies
npm install

### 3. Configure Environment
* Create a `.env` file in the root and add your keys:
* VITE_CITY_API_BASE_URL=https://wft-geo-db.p.rapidapi.com/v1/geo
* VITE_X_RAPIDAPI_HOST=wft-geo-db.p.rapidapi.com  -- For Country API
* VITE_RAPIDAPI_KEY=YOUR_API_KEY -- For Country API
* VITE_WEATHER_API_KEY=YOUR_API_KEY -- For Weather API
* VITE_FSQ_API_KEY=YOUR_API_KEY -- For Attracions API
* VITE_IPINFO_TOKEN=YOUR_API_KEY -- For IPINFO

### 4. Start Development
npm run dev

---