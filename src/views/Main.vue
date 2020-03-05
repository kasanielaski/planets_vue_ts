<template lang="pug">
.main
    Card.main__card(
        v-for="(planet, index) in planets"
        :key="index"
        :planet="planet"
    )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, namespace } from 'vuex-class';
import { PlanetT } from '../types';

import Card from '@/components/Card.vue';

const planets = namespace('planets');

@Component({
    components: {
        Card
    }
})
export default class Main extends Vue {
    @planets.Getter('getPlanets') planets!: PlanetT[];
}
</script>

<style lang="scss" scoped>
.main {
    height: 100%;
    width: 100vw;
    margin: 10px 0 40px;
    display: grid;
    grid-template-columns: repeat(5, 190px);
    grid-template-rows: repeat(auto-fill, 400px);
    grid-gap: 40px;
    align-items: center;
    justify-items: center;
    justify-content: center;
    overflow-x: hidden;
    text-transform: uppercase;
    font-family: 'Roboto';
}

@media screen and (max-width: 1200px) {
    .main {
        grid-template-columns: repeat(3, 190px);
    }
}

@media screen and (max-width: 960px) {
    .main {
        grid-template-columns: repeat(2, 190px);
    }
}

@media screen and (max-width: 480px) {
    .main {
        grid-template-columns: repeat(1, 190px);
    }
}
</style>
