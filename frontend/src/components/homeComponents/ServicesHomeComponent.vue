<script setup lang="ts">
import { useLeadStore } from '@/stores/lead-store';

const leadStore = useLeadStore();
//Import Components
import DisplayServicesComponent from '@/common/DisplayServicesComponent.vue';
</script>

<template>
    <section id="services" class="services-container">
        <h3>¿Cómo te podemos ayudemos a ahorrar hoy?</h3>

        <DisplayServicesComponent />
    </section>
</template>

<style scoped>
.services-container {
    width: 100%;
    padding: 4rem 0;
    position: relative;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    background-color: var(--color-secondary);
}
.services-container h3 {
    text-align: center;
    margin: 0 auto;
    color: var(--color-white);
}
.business-btn {
    width: 50%;
    margin: 0 auto;
    color: var(--color-white);
    border: 1px solid var(--color-white);
}

@media screen and (max-width: 760px) {
    .services-container {
        width: auto;
        padding: 3rem 0.5rem;
    }
    .business-btn {
        width: auto;
    }
}
</style>
