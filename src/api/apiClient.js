import axios from "axios";
import { toast } from "react-toastify";

export const createApiClient = (baseURL, options = {}) => {
  const client = axios.create({
    baseURL,
    timeout: 8000,
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  // 1. Request Interceptor: Attach Auth context
  client.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token"); // Or from your AuthContext state
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // 2. Response Interceptor: Global Error Logic
  client.interceptors.response.use(
    (response) => response.data, // Automatically unwraps data
    (error) => {
      //const originalRequest = error.config;
      const status = error.response?.status;
      const errorMessage = error.response?.data?.message || "Something went wrong";

      // Handle specific status codes
      switch (status) {
        case 401:
          // Unauthorized: Clear session and redirect to login
          console.warn("Unauthorized access - logging out...");
          localStorage.removeItem("isLoggedIn");
          // window.location.href = "/login"; 
          break;

        case 403:
          toast.error("You don't have permission to perform this action.");
          break;

        case 429:
          toast.error("Too many requests. Please slow down.");
          break;

        case 500:
          toast.error("Server error. We're working on it!");
          break;

        default:
          if (!error.response) {
            toast.error("Network error. Please check your connection.");
          } else {
            toast.error(errorMessage);
          }
      }

      return Promise.reject(error);
    }
  );

  return client;
};