import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeTrip } from "../features/trips/tripsSlice";
import TripList from "../components/TripList";
import { useMemo, useState } from "react";

const Trips = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const trips = useSelector((state) => state.trips.trips);
  const [sortBy, setSortBy] = useState("date-asc");

  const sortedTrips = useMemo(()=>{
    const sorted = [...trips]

    switch (sortBy) {
      case "date-asc":
        return sorted.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

      case "date-desc":
        return sorted.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

      case "city-asc":
        return sorted.sort((a, b) => a.city.localeCompare(b.city));

      case "city-desc":
        return sorted.sort((a, b) => b.city.localeCompare(a.city));

      case "temp-asc":
        return sorted.sort(
          (a, b) => (a.weather?.main?.temp || 0) - (b.weather?.main?.temp || 0)
        );

      case "temp-desc":
        return sorted.sort(
          (a, b) => (b.weather?.main?.temp || 0) - (a.weather?.main?.temp || 0)
        );

      default:
        return sorted;
    }
  }, [trips, sortBy])

  const handleOpenTrip = (trip) => {
    navigate(`/trip/${trip.id}`);
  };

  const handleRemoveTrip = (id) => {
    dispatch(removeTrip(id));
  };

  return <TripList trips={sortedTrips} sortBy={setSortBy} setSortBy={setSortBy} title="Saved Trips" handleOpenTrip={handleOpenTrip} handleRemoveTrip={handleRemoveTrip} />;

};

export default Trips;