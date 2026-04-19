import React, { useState } from 'react'
import { Calendar, X, PlaneTakeoff, PlaneLanding, Clock } from 'lucide-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import { addTrip } from '../features/trips/tripsSlice';

function AddTripPopUp({ city, country, countryInfo, lat, lon, weather, onClose }) {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const dispatch = useDispatch();

    const handleSaveTripWithDates = () => {
        if (!startDate || !endDate) {
            toast.error("Please select Start Date & End Date");
            return;
        }

        if (startDate && endDate && endDate < startDate) {
            toast.error("End date cannot be before start date");
            return false;
        }

        const tripData = {
            id: `${city}-${Date.now()}`,
            city,
            country,
            lat,
            lon,
            weather,
            countryInfo,
            createdAt: new Date().toISOString(),
            startDate: new Date(startDate).toISOString(),
            endDate: new Date(endDate).toISOString(),
            isFavorite: false
        };

        dispatch(addTrip(tripData));
        toast.success("Trip planned successfully");
        return true;
    };

    return (
        <div className="popuptst fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
            <div className="bg-white dark:bg-slate-900 rounded-[32px] w-full max-w-md overflow-hidden shadow-2xl border border-white dark:border-slate-800 animate-in zoom-in-95 duration-300">
            
            {/* Header Section */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white relative">
                <div className="flex items-center gap-4 relative z-10">
                    <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md border border-white/30">
                        <Calendar size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black tracking-tight">{city}</h2>
                        <p className="text-blue-100/80 text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                            <Clock size={12} /> Set your timeline
                        </p>
                    </div>
                </div>
                
                <button 
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onClose();
                    }}
                    className="absolute top-10 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all z-50 pointer-events-auto cursor-pointer"
                    aria-label="Close modal"
                >
                    <X size={20} className="text-white" />
                </button>

                {/* Decorative background shape */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            </div>

            <div className="p-8 space-y-6">
                {/* Arrival Date */}
                <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                        <PlaneTakeoff size={14} className="text-blue-500" /> Arrival Date
                    </label>
                    <div className="relative">
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            placeholderText="Pick a date"
                            className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 p-4 rounded-2xl font-bold text-slate-700 dark:text-slate-100 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600"
                        />
                    </div>
                </div>

                {/* Departure Date */}
                <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                        <PlaneLanding size={14} className="text-indigo-500" /> Departure Date
                    </label>
                    <div className="relative">
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            placeholderText="Pick a date"
                            className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 p-4 rounded-2xl font-bold text-slate-700 dark:text-slate-100 focus:border-indigo-500 dark:focus:border-indigo-500 focus:outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600"
                        />
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button 
                        onClick={onClose}
                        className="flex-1 py-4 font-bold text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl transition-all order-2 sm:order-1"
                    >
                        Maybe Later
                    </button>
                    <button 
                        onClick={() => {
                            const success = handleSaveTripWithDates();
                            if (success) onClose();
                        }}
                        className="flex-[2] py-4 bg-blue-600 dark:bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-200 dark:shadow-none hover:bg-blue-700 hover:-translate-y-0.5 transition-all active:scale-95 order-1 sm:order-2"
                    >
                        Confirm Journey
                    </button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AddTripPopUp;