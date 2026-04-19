import React from 'react'

function EmptyCard() {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center text-gray-500">
            <div className="text-5xl mb-4">🌍</div>
            <h2 className="text-xl font-semibold text-gray-700">
                Start your travel search
            </h2>
            <p className="mt-2 text-sm text-gray-500 max-w-md">
                Search for a city like <b>Delhi</b>, <b>London</b>, or <b>Tokyo</b> to view weather, country details, and plan your trip.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl opacity-40">
                <div className="h-40 bg-gray-200 rounded-2xl"></div>
                <div className="h-40 bg-gray-200 rounded-2xl"></div>
            </div>
        </div>
    )
}

export default EmptyCard