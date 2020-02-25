import { GetterTree } from 'vuex';

import { IRootState, IPlanetsState, PlanetT } from '@/types';

export const getters: GetterTree<IPlanetsState, IRootState> = {
    getPlanets({ planets }): PlanetT[] {
        return planets;
    }
};
