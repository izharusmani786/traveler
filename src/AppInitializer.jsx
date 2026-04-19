// AppInitializer.jsx
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initAppData } from "./services/initAppData";

const AppInitializer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        initAppData(dispatch);
    }, [dispatch]);

    return null; // no UI
};

export default AppInitializer;