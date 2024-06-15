<script setup lang="ts">
//Import text
import { benefitsEnums } from '@/static/textBenefits';
</script>

<template>
    <section class="about-container">
        <h3>¿Quienes somos?</h3>
        <h5>
            Somos una empresa dedicada a ofrecerte asesoría energética integral, para que no solo
            ahorres dinero, sino también optimices el uso eficiente de la energía.
        </h5>

        <div class="benefits-container">
            <div v-for="item in benefitsEnums" :key="item.title" class="icon">
                <mdicon :name="item.icon" />
                <p>{{ item.title }}</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 2rem 4rem;
    position: relative;
    color: var(--color-white);
    background-color: var(--color-secondary);
}

.about-container h5 {
    width: 70%;
    text-align: center;
    margin: 0.5rem 0;
}

.benefits-container {
    margin-top: 3rem;
    display: flex;
    gap: 2rem;
}

.icon {
    display: flex;
    align-items: center;
    gap: 1rem;
}

@media screen and (max-width: 760px) {
    .about-container {
        width: 100%;
        flex-direction: column;
        padding: 1rem 1rem;
        box-sizing: border-box;
    }
    .benefits-container {
        flex-direction: column;
        gap: 1rem;
    }
}
</style>
