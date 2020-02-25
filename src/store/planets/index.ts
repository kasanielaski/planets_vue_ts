import { Module } from 'vuex';

import { IRootState, IPlanetsState } from '@/types';

import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

export const initialState = {
    planets: [
        {
            name: 'Mercury',
            image: 'https://thebestcode.ru/media/solarSystem/mercury.jpg',
            tilt: 0.034,
            day: 1407.6,
            year: 88,
            color: '#999'
        }
    ]
};

const state: IPlanetsState = initialState;
const namespaced: boolean = true;

export const planets: Module<IPlanetsState, IRootState> = {
    state,
    actions,
    mutations,
    getters,
    namespaced
};
