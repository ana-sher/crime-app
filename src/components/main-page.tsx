import { LatLng } from "leaflet";
import React, { useState } from "react";
import BarChartComponent from "./bar-chart";
import GeoMapComponent from "./geo-map";

const MainPage: React.FC = () => {
    const [position, setPosition] = useState<LatLng>(new LatLng(52.629729, -1.131592));

    return (
      <div>
        <h1>Map of car being stoped and searches made by police</h1>
        <p>Click on any area of the map to request data for those area within 1 mile.
        Click on any marker to se how many searches there was made and reasons</p>
        <GeoMapComponent position={position} changePosition={setPosition}/> 
        <p>Statistics for the areas (what age groups were stopped with what etnicity)</p>
        <BarChartComponent position={position} />
      </div>
    );
  };

export default MainPage;