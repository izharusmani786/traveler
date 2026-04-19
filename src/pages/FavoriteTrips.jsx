import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeTrip } from "../features/trips/tripsSlice";
import TripList from "../components/TripList";

function FavoriteTrips() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const trips = useSelector((state) => state.trips.trips)
    const favoriteTrips = trips.filter((trip) => trip.isFavorite);
    
    const handleOpenTrip = (trip) => {
        navigate(`/trip/${trip.id}`);
    };

    const handleRemoveTrip = (id) => {
        dispatch(removeTrip(id));
    };

    return <TripList trips={favoriteTrips} title="Favorite Trips" handleOpenTrip={handleOpenTrip} handleRemoveTrip={handleRemoveTrip} />;

}

export default FavoriteTrips