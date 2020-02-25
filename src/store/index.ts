import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { IRootState } from '@/types';

import { planets } from './planets';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
    state: {},
    modules: {
        planets
    }
};

export default new Vuex.Store<IRootState>(store);
