<template lang="pug">
.main
    Planet.main__planet(
        v-for="(planet, index) in planets"
        :key="index"
        :planet="planet"
    )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, namespace } from 'vuex-class';
import { PlanetT } from '../types';

import Planet from '@/components/Planet.vue';

const planets = namespace('planets');

@Component({
    components: {
        Planet
    }
})
export default class Main extends Vue {
    @planets.Getter('getPlanets') planets!: PlanetT[];
}
</script>

<style lang="scss" scoped>
.main {
    display: flex;
}
</style>
