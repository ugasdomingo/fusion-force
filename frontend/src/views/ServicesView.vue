<script setup lang="ts">
import { ref } from 'vue';
//Import Components
import ComparadorFormComponent from '@/components/servicesComponents/ComparadorFormComponent.vue';

const comparadorLuz = ref(true);
</script>

<template>
    <main class="main-services">
        <h3>Comparador Fusión</h3>
        <h5>
            Descubre cómo comparar puede ayudarte a ahorrar en tus facturas de luz y gas en Madrid.
            Nuestro servicio te ofrece acceso exclusivo a las mejores tarifas del mercado,
            garantizándote ahorros significativos. ¡Deja de pagar de más y empieza a disfrutar de
            una energía más económica y eficiente!
        </h5>
        <section class="btn-section">
            <button
                @click="comparadorLuz = true"
                :class="comparadorLuz ? 'normal-btn' : 'light-btn'"
            >
                Comparar Luz
            </button>
            <button
                @click="comparadorLuz = false"
                :class="comparadorLuz ? 'light-btn' : 'normal-btn'"
            >
                Comparar Gas
            </button>
        </section>
        <div class="services-container">
            <ComparadorFormComponent v-if="comparadorLuz" comparador="Comparar Luz" />
            <ComparadorFormComponent v-else comparador="Comparar Gas" />
        </div>
        <img
            src="https://img.freepik.com/free-photo/design-made-up-onion-rings_23-2147927094.jpg?t=st=1717608510~exp=1717612110~hmac=edb3a3e42ac26eae16fa217eddf555c90b8fb384dcdf5815900ca025dc6da1e8&w=740"
            alt="Hero"
            class="service-background"
        />
    </main>
</template>

<style scoped>
.main-services {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 6rem;
}
.main-services h3 {
    margin-bottom: 1rem;
    color: var(--color-primary);
}
.main-services h5 {
    width: 80%;
}
.btn-section {
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin: 2rem 0;
}
.normal-btn {
    padding: 0.6rem 1rem;
    border-radius: 8px;
    border: 0px;
    font-weight: 600;
    font-size: medium;
    background-color: var(--color-secondary);
    color: var(--color-white);
}
.light-btn {
    padding: 0.6rem 1rem;
    border-radius: 8px;
    border: 1px solid var(--color-grey);
    font-weight: 600;
    font-size: medium;
    background-color: var(--color-none);
    color: var(--color-grey);
    opacity: 0.8;
}
.services-container {
    display: flex;
    justify-content: space-between;
    width: 50%;
    padding: 0 4rem;
}

.service-background {
    width: 100%;
    height: fit-content;
    position: absolute;
    object-fit: cover;
    object-position: top;
    top: 0;
    right: 0;
    z-index: -900;
}
@media screen and (max-width: 760px) {
    .main-services {
        width: 100%;
        padding: 4rem 2rem 2rem;
        box-sizing: border-box;
    }
    .btn-section {
        width: 100%;
    }
    .services-container {
        width: 100%;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
}
</style>
