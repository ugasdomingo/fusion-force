<script setup lang="ts">
import { useLeadStore } from '@/stores/lead-store';
import CompanyLogosComponent from './CompanyLogosComponent.vue';
//Import components

const leadStore = useLeadStore();
</script>

<template>
    <section class="hero-container">
        <!-- Hero content  -->
        <h2>Comparadora de Luz y Gas<br />Más de 10 años de experiencia</h2>
        <a class="business-btn" href="#services">
            Descubre cómo ahorrar en tu factura
            <mdicon name="arrow-down-bold-outline" width="24" class="icon-small" />
        </a>

        <!-- Hero Background Image  -->
        <img
            src="https://img.freepik.com/free-photo/design-made-up-onion-rings_23-2147927094.jpg?t=st=1717608510~exp=1717612110~hmac=edb3a3e42ac26eae16fa217eddf555c90b8fb384dcdf5815900ca025dc6da1e8&w=740"
            alt="Hero"
            class="hero-background"
        />
    </section>
</template>

<style scoped>
.hero-container {
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    position: relative;
}
h2 {
    text-align: center;
    color: var(--color-primary);
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 2rem;
}
a {
    width: 40%;
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
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
