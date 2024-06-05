<script setup lang="ts">
//Import Tools
import { RouterView } from 'vue-router';

//Import Components
import HeaderComponent from '@/components/layoutComponents/HeaderComponent.vue';
import FooterComponent from '@/components/layoutComponents/FooterComponent.vue';
</script>

<template>
    <HeaderComponent />

    <RouterView class="body-app" />

    <FooterComponent />
</template>

<style scoped>
.body-app {
    min-height: 100vh;
    height: fit-content;
}
</style>
