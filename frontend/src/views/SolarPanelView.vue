<template>
    <main class="main-solar-panels">
        <SolarPanelsViewComponent />
    </main>
</template>

<script setup lang="ts">
import SolarPanelsViewComponent from '@/components/solarPanelComponents/SolarPanelsViewComponent.vue';
</script>

<style scoped>
.main-solar-panels {
    padding: 2rem 6rem;
}

@media screen and (max-width: 760px) {
    .main-solar-panels {
        padding: 2rem 0.5rem;
    }
}
</style>
