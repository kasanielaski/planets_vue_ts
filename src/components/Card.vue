<template lang="pug">
.card(
    :class="planet.name"
)
    .planet
        .atmosphere(:style="atmosphereStyle")
            .surface(:style="sufraceStyle")

    .info
        h2.title {{ planet.name }}

        .form
            .item
                label.label Tilt: {{ planet.tilt }}

            .item
                label.label Day: {{ planet.day }}

            .item
                label.label Year: {{ planet.year }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { PlanetT } from '../types';

@Component
export default class Planet extends Vue {
    @Prop({
        type: Object,
        required: true
    })
    planet!: PlanetT;

    get atmosphereStyle(): Object {
        return {
            'box-shadow': `inset 10px 0px 12px -2px rgba(255, 255, 255, 0.2),
                inset -70px 0px 50px 0px black, -5px 0px 10px -4px ${this.planet.color}`
        };
    }

    get sufraceStyle(): Object {
        return {
            'background-image': `url(/planets/${this.planet.name}.jpg)`,
            animation: `planetRotate calc(${this.planet.day} * 0.1s) linear infinite`,
            transform: `rotate(${this.planet.tilt}deg) scale(1.2)`
        };
    }
}
</script>

<style lang="scss">
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.planet::before {
    content: '';
    position: absolute;
    height: 190px;
    z-index: -2;
    left: 50%;
    top: 0%;
    border-left: 1px dashed rgba(255, 255, 255, 0.25);
}

.atmosphere {
    height: 190px;
    width: 190px;
    position: relative;
    background: radial-gradient(
        circle at 30% 50%,
        rgba(255, 255, 255, 0.3) 0%,
        rgba(255, 255, 255, 0) 65%
    );
    border-radius: 100px;
    overflow: hidden;
}

.surface {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-size: cover;
}

.info {
    width: 100%;
}

.title {
    text-align: center;
    font-size: 28px;
}

.form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.item {
    display: flex;
    align-items: flex-end;
    margin-bottom: 5px;
    font-size: 14px;
}

.label {
    font-size: 11px;
}

.line {
    flex: 1;
    margin: 0 5px;
    border-bottom: 1px solid dashed rgba(255, 255, 255, 0.3);
}

@keyframes planetRotate {
    0% {
        background-position: 0% center;
    }

    100% {
        background-position: -200% center;
    }
}
</style>
