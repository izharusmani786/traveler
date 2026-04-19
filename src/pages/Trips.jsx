import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeTrip } from "../features/trips/tripsSlice";
import TripList from "../components/TripList";
import { useMemo } from "react";

const Trips = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const trips = useSelector((state) => state.trips.trips);
  
  const sortedTrips = useMemo(() => {
    return [...trips].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  }, [trips]);

  const handleOpenTrip = (trip) => {
    navigate(`/trip/${trip.id}`);
  };

  const handleRemoveTrip = (id) => {
    dispatch(removeTrip(id));
  };

  return <TripList trips={sortedTrips} title="Saved Trips" handleOpenTrip={handleOpenTrip} handleRemoveTrip={handleRemoveTrip} />;

};

export default Trips;