export interface StopAndSearch {
    ageRange:    string;
    ethnicity:   string;
    gender:      string;
    legislation: string;
    location:    Location;
    datetime:    Date;
    type:        string;
}

export interface Location {
    latitude:  number;
    longitude: number;
}