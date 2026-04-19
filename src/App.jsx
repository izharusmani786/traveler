import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import './App.css'
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import AppInitializer from "./AppInitializer";


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <BrowserRouter>
            <AppInitializer />
            <ToastContainer />
            <AppRoutes />
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
