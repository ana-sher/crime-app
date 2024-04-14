export interface AgeEthnicityStat {
    ageRange:    string;
    ethnicityStats:   EthnicityStat[];
}

export interface EthnicityStat {
    ethnicityTitle:    string;
    count:   number;
}