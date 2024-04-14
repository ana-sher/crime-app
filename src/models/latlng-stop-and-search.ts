import { LatLngExpression } from "leaflet";
import { StopAndSearch } from "./stop-and-search";

export interface LatLngStopAndSearch {
    latlng:  LatLngExpression;
    data: StopAndSearch[];
}