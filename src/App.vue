<template lang="pug">
.app
    router-view.app__router
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class App extends Vue {}
</script>

<style lang="scss">
body,
html,
* {
    padding: 0;
    margin: 0;
}

html {
    background-color: aquamarine;
}

.app {
    margin: 24px;
}
</style>
