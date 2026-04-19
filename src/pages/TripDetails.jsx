import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import WeatherCard from "../components/WeatherCard";
import CountryInfoCard from "../components/CountryInfoCard";
import LocationCard from "../components/LocationCard";
import Hero from "../components/Hero";
import TripNotFound from "../components/TripNotFound";
import { getAttractions } from "../api/attractionsApi";
import { useEffect, useState } from "react";
import Attractions from "../components/Attractions";

const TripDetails = () => {
  const [attractions, setAttractions] = useState(null);
  const { id } = useParams();
  const trips = useSelector((state) => state.trips.trips);

  const trip = trips.find((t) => t.id === id);
  const cityPlace = trip?.city;

  useEffect(() => {
    if (!trip || !cityPlace) return;

    const getPlaces = async () => {
      const res = await getAttractions(trip.lat, trip.lon);
      setAttractions(res?.results || []);
    };
    getPlaces();
  }, [trip, cityPlace]);

  if (!trip) {
    return (
      <TripNotFound/>
    );
  }

  return (
    <div className="p-6 space-y-8">

      {/* 🌄 HERO SECTION */}
      <Hero city={trip.city} country={trip.country} createdAt={trip.createdAt} startDate={trip.startDate} endDate={trip.endDate} isFavorite={trip.isFavorite} />

      {/* 📊 MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">

          {/* 🌦 WEATHER CARD */}
          <WeatherCard weather={trip.weather} />

          {/* 🏛 ATTRACTIONS SECTION (future ready) */}
          <Attractions attractions={attractions} />

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* 🌍 COUNTRY INFO */}
          <div className="country_info_detail">
            <CountryInfoCard countryInfo={trip.countryInfo} />
          </div>

          {/* 📍 LOCATION CARD */}
          <LocationCard lat={trip.lat} lon={trip.lon} />

        </div>
      </div>

    </div>
  );
};

export default TripDetails;