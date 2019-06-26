<template>
    <v-btn :dark="false" icon class="theme-btn" @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon :dark="false" class="mdi mdi-invert-colors" />
    </v-btn>
</template> 

<style lang="scss" scoped>
.theme-btn {
    position: absolute;
    left: 50%;
    bottom: 6px;
    /* transform: translate(0, 48px) scale(0.8); */
    transform-origin: center center;
    cursor: pointer;
    z-index: 2;
}
</style>
