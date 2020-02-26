<template lang="pug">
.app
    router-view.app__router
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class App extends Vue {}
</script>

<style lang="scss">
@import url('vars.css');

body,
html,
* {
    padding: 0;
    margin: 0;
}
html {
    background-color: #000;
    color: #fff;
}
</style>
