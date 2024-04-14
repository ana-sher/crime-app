import { LatLng, LeafletMouseEvent } from "leaflet";
import React from "react";
import { Marker, useMapEvents, Popup } from "react-leaflet";
import { LatLngStopAndSearch } from "../models/latlng-stop-and-search";

const GeoMarker: React.FC<{markers: LatLngStopAndSearch[], changePosition: (arg: LatLng) => Promise<any> }> = ({ markers, changePosition }) => {
    const map = useMapEvents({
        async click(e: LeafletMouseEvent) {
            await changePosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })

  return (
    markers.map((marker) =>
        <Marker position={marker.latlng} key={marker.data[0].location.latitude.toString() + marker.data[0].location.longitude.toString()}>
            <Popup>
                {marker.data.length}:
                <p>
                {marker.data.map(el=>el.legislation + ', ' + el.type)}
                </p>
            </Popup>
        </Marker>
    )
  );
}

export default GeoMarker; 