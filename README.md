✈️ Traveler: Professional Travel Planning Dashboard
Traveler is a full-featured travel management system built to demonstrate modern React patterns, robust state management, and complex API orchestrations.

🔗 [Live Demo Link] | 🛠️ GitHub Repo
🏗️ Architecture & Development Roadmap
This project was developed over a 3-Day Intensive Sprint focusing on scalability and performance.

Day 1: The Foundation
Modular Folder Structure: Organized by features, components, services, and hooks.

Dynamic Routing: Implemented react-router-dom for seamless transitions between Dashboard, Search, and Trip Details.

API Orchestration: Integrated OpenWeatherMap and REST Countries API.

Day 2: State & Persistence
State Management: Utilized Redux Toolkit for centralized data flow (trips, weather, and attractions).

Data Persistence: Integrated LocalStorage to ensure user trips are saved across browser sessions.

Custom Logic: Developed useDebounce for optimized city searching and useFetch for reusable API logic.

Day 3: Production Readiness
Theme Engine: Built-in Dark/Light mode support with Tailwind CSS.

Security: Mock Authentication flow with Protected Routes to guard user data.

Stability: Added Error Boundaries and an API abstraction layer to handle failures gracefully.

🛠️ Tech Stack
Core: React 18 (Functional Components + Hooks)

State: Redux Toolkit (Slices & Async Thunks)

Styling: Tailwind CSS (Responsive Design + Dark Mode)

Networking: Axios with custom interceptors

Icons: Lucide React

✨ Features implemented
✅ Search & Discovery
Real-time city autocomplete using GeoDB Cities API.

Instant weather updates and country data (Currency, Language, Flag) upon selection.

✅ Trip Management
Ongoing Trip Widget: Automatically detects and highlights active trips based on current date.

Auto-Sorting: Smart logic that places upcoming trips at the top of the queue.

Trip Storage: Save, delete, and favorite trips with persistent state.

✅ UI/UX & Performance
Optimized Rendering: Used useMemo for heavy sorting operations and useCallback for event handlers.

Loading States: Shimmer/Skeleton screens for attraction lists and weather cards.

API Interceptors: Centralized error handling for all outbound requests.

🚀 Installation & Local Setup
1. Clone the repo:
git clone https://github.com/izharusmani786/traveler.git

2. Install Dependencies:
npm install

3. Configure Environment:
Create a .env file and add your API keys:

VITE_CITY_API_BASE_URL=https://wft-geo-db.p.rapidapi.com/v1/geo
VITE_X_RAPIDAPI_HOST=wft-geo-db.p.rapidapi.com
VITE_RAPIDAPI_KEY=YOUR_API_KEY
VITE_WEATHER_API_KEY=YOUR_API_KEY
VITE_FSQ_API_KEY=YOUR_API_KEY
VITE_IPINFO_TOKEN=YOUR_API_KEY

4. Start Development:
npm run dev