<script setup lang="ts">
import { useLeadStore } from '@/stores/lead-store';
import CompanyLogosComponent from './CompanyLogosComponent.vue';
//Import components

const leadStore = useLeadStore();
</script>

<template>
    <section class="hero-container">
        <!-- Hero content  -->
        <h2>Comparamos tu factura con toda la red<br />y te encontramos el mejor precio</h2>
        <a class="business-btn" href="#services">
            Descubre las formas de ahorrar en tu factura
            <mdicon name="arrow-down-bold-outline" width="24" class="icon-small" />
        </a>

        <!-- Hero Background Image  -->
        <img src="/img/hero-bumb.webp" alt="Hero" class="hero-background" />
    </section>
</template>

<style scoped>
.hero-container {
    width: 100%;
    min-height: 500px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2rem;
    position: relative;
}
h2 {
    width: 60%;
    color: var(--color-white);
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 2rem;
}
a {
    width: 40%;
    color: var(--color-white);
    border: 1px solid var(--color-white);
    font-weight: 400;
}
.hero-background {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    object-position: top;
    top: 0;
    right: 0;
    z-index: -900;
}

@media screen and (max-width: 760px) {
    .hero-container {
        min-height: 80vh;
        height: auto;
        padding: 1rem 1rem;
    }
    h2 {
        width: 85%;
        font-size: 1.7rem;
        text-align: left;
    }
    a {
        width: auto;
    }
    .hero-background {
        object-position: bottom;
    }
}
</style>
