import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Components that should load immediately (Static)
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import RouteWithError from "../components/common/RouteWithError";
import HomeSkeleton from "../components/skeletons/DashboardSkeleton";
import SearchResultsSkeleton from "../components/skeletons/SearchResultsSkeleton";
import TripsSkeleton from "../components/skeletons/TripListSkeleton";
import TripDetailsSkeleton from "../components/skeletons/TripDetailsSkeleton";


// Lazy Loaded Pages
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const SearchResults = lazy(() => import("../pages/SearchResults"));
const Trips = lazy(() => import("../pages/Trips"));
const TripDetails = lazy(() => import("../pages/TripDetails"));
const FavoriteTrips = lazy(() => import("../pages/FavoriteTrips"));

const AppRoutes = () => {
  return (
      <Routes>
        <Route element={<MainLayout />}>
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <RouteWithError>
                  <Suspense fallback={<HomeSkeleton/>}>
                  <Home />
                  </Suspense>
                </RouteWithError>
              </ProtectedRoute>
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
              <ProtectedRoute>
                <RouteWithError>
                  <Suspense fallback={<TripsSkeleton/>}>
                    <Trips />
                  </Suspense>
                </RouteWithError>
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/trip/:id" 
            element={
              <ProtectedRoute>
                <RouteWithError>
                  <Suspense fallback={<TripDetailsSkeleton/>}>
                    <TripDetails />
                  </Suspense>
                </RouteWithError>
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/favorite-trips" 
            element={
              <ProtectedRoute>
                <RouteWithError>
                  <Suspense fallback={<TripsSkeleton/>}>
                    <FavoriteTrips />
                  </Suspense>
                </RouteWithError>
              </ProtectedRoute>
            } 
          />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
  );
};

export default AppRoutes;