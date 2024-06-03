<script setup lang="ts">
import { textServices } from '@/static/textServices';
import CardServicesComponet from '@/components/servicesComponents/CardServicesComponet.vue';
</script>

<template>
    <div class="services-card-container">
        <CardServicesComponet :services="textServices" />
    </div>
</template>

<style scoped>
.services-card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-evenly;
}
</style>
