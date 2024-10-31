import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapComponent.css';

const MapComponent = () => {
    const mapRef = useRef(null); // Holds the map instance

    useEffect(() => {
        try {
            // Initialize the map only if it hasn't been initialized
            if (!mapRef.current) {
                mapRef.current = L.map('map').setView([9.082, 8.6753], 6); // Center on Nigeria

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                }).addTo(mapRef.current);

                // Add a marker for demonstration
                L.marker([9.082, 8.6753]).addTo(mapRef.current)
                    .bindPopup('A marker in Nigeria!')
                    .openPopup();
            }

            // Cleanup function
            return () => {
                if (mapRef.current) {
                    mapRef.current.remove(); // Properly remove the map instance
                    mapRef.current = null;
                }
            };
        } catch (error) {
            console.error("Error initializing the map:", error);
        }
    }, []);

    return (
        <div id="map" className="map-container" style={{ height: '200px' }}></div> // Set a height
    );
};

export default MapComponent;
