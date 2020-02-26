import { Module } from 'vuex';

import { IRootState, IPlanetsState } from '@/types';

import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

export const initialState = {
    planets: [
        {
            name: 'sun',
            image: 'https://thebestcode.ru/media/solarSystem/sun.jpg',
            tilt: 0,
            day: 600,
            year: 0,
            color: '#cc9f4c'
        },
        {
            name: 'mercury',
            image: 'https://thebestcode.ru/media/solarSystem/mercury.jpg',
            tilt: 0.034,
            day: 1407.6,
            year: 88,
            color: '#999'
        },
        {
            name: 'venus',
            image: 'https://thebestcode.ru/media/solarSystem/venus.jpg',
            tilt: 177.3,
            day: 5832.5,
            year: 224.7,
            color: '#e8cda2'
        },
        {
            name: 'earth',
            image: 'https://thebestcode.ru/media/solarSystem/earth.jpg',
            tilt: 23.26,
            day: 23.9,
            year: 365.2,
            color: '#b3caff'
        },
        {
            name: 'mars',
            image: 'https://thebestcode.ru/media/solarSystem/mars.jpg',
            tilt: 25.2,
            day: 24.6,
            year: 687,
            color: '#c07158'
        },
        {
            name: 'jupiter',
            image: 'https://thebestcode.ru/media/solarSystem/jupiter.jpg',
            tilt: 3.1,
            day: 9.9,
            year: 4331,
            color: '#c9b5a4'
        },
        {
            name: 'saturn',
            image: 'https://thebestcode.ru/media/solarSystem/saturn.jpg',
            tilt: 26.7,
            day: 10.7,
            year: 10747,
            color: '#f0e2c4'
        },
        {
            name: 'uranus',
            image: 'https://thebestcode.ru/media/solarSystem/uranus.jpg',
            tilt: 97.8,
            day: 17.2,
            year: 30589,
            color: '#b8d8e1'
        },
        {
            name: 'neptune',
            image: 'https://thebestcode.ru/media/solarSystem/neptune.jpg',
            tilt: 28.3,
            day: 16.1,
            year: 59800,
            color: '#5e73bb'
        },
        {
            name: 'pluto',
            image: 'https://thebestcode.ru/media/solarSystem/pluto.jpg',
            tilt: 122.5,
            day: 153.3,
            year: 90560,
            color: '#c3b6aa'
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
