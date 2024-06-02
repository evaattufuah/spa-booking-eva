import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const Map = () => {
    return (
        <div>
            <h1 className='text-white font-bold text-xl'>
                EvaRichy <span className='text-green-500'>Spa 🌸</span>
            </h1>
            <div className="z-0">
                <MapContainer
                    className="w-full h-[523px]"
                    center={[9.0820, 8.6753]} // Coordinates for Nigeria
                    zoom={10}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
            </div>
        </div>
    );
}

export default Map;
