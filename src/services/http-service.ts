import { AgeEthnicityStat } from "../models/statistics/age-ethnicity-stat";
import { StopAndSearch } from "../models/stop-and-search";

const baseAddress = 'https://localhost:7062/api/'

async function fetchMapData(lat: number, lng: number, date: string): Promise<Dictionary<StopAndSearch[]>> {
    const response = await fetch(`${baseAddress}StopAndSearches/LocationGroups?date=${date}&lat=${lat}&lng=${lng}`);
    const data = await response.json();
    return data;
}

async function fetchStatisticsData(lat: number, lng: number, date: string): Promise<AgeEthnicityStat[]> {
    const response = await fetch(`${baseAddress}StopAndSearches/Statistics?date=${date}&lat=${lat}&lng=${lng}`);
    const data = await response.json();
    return data;
}

const HttpService = {
    fetchMapData,
    fetchStatisticsData
};

export default HttpService;