export interface IRootState {}

export type PlanetT = {
    name: string;
    tilt: number;
    year: number;
    day: number;
    color: string;
};

export interface IPlanetsState {
    planets: PlanetT[];
}
