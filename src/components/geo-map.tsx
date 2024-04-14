import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import L, { LatLng, LatLngExpression } from 'leaflet';
import 'leaflet-defaulticon-compatibility';

import HttpService from "../services/http-service";
import GeoMarker from "./geo-marker";
import { LatLngStopAndSearch } from "../models/latlng-stop-and-search";

const GeoMap: React.FC<{ position: LatLng, onPositionChange: Function }> = ({ position, onPositionChange }) => {
    const [markers, setMarkers] = useState<LatLngStopAndSearch[]>([]);
    const [error, setError] = useState<string | null>(null);

    async function fetchData(): Promise<void> {
        try {
            const data = await HttpService.fetchMapData(position.lat, position.lng, '2024-02');
            let mappedData = Object.keys(data).map(el => {
                return {
                    latlng: el.split(',').map(n => Number.parseFloat(n)) as LatLngExpression,
                    data: data[el]
                };
            });
            setMarkers(mappedData);
        } catch (error: any) {
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, [position]);

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div>
            <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GeoMarker markers={markers} onPositionChange={onPositionChange} />
            </MapContainer>
        </div>
    );
}

export default GeoMap; 