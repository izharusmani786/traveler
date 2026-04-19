import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layouts/MainLayout";
import SearchResults from "../pages/SearchResults";
import Trips from "../pages/Trips";
import TripDetails from "../pages/TripDetails";
import FavoriteTrips from "../pages/FavoriteTrips";
import RouteWithError from "../components/common/RouteWithError";

const AppRoutes = () => {
  return (
    <Routes>

      <Route element={<MainLayout />}>
        
        <Route 
          path="/" 
          element={
            <RouteWithError>
              <Home />
            </RouteWithError>
          } 
        />

        <Route 
          path="/search" 
          element={
            <ProtectedRoute>
              <RouteWithError>
                <SearchResults />
              </RouteWithError>
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/trips" 
          element={
            <RouteWithError>
              <Trips />
            </RouteWithError>
          } 
        />

        <Route 
          path="/trip/:id" 
          element={
            <RouteWithError>
              <TripDetails />
            </RouteWithError>
          } 
        />

        <Route 
          path="/favorite-trips" 
          element={
            <RouteWithError>
              <FavoriteTrips />
            </RouteWithError>
          } 
        />

      </Route>

      <Route path="/login" element={<Login />} />

    </Routes>
  );
};

export default AppRoutes;