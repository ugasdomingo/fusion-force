<script setup lang="ts">
//Import tools
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { usePriceStore } from '@/stores/price-store';

//Activate tools
const priceStore = usePriceStore();
const stylePrice = ref('price-medium');
const start = async () => {
    await priceStore.initialFunction();

    switch (priceStore.classPrice) {
        case 'high':
            stylePrice.value = 'price-high';
            break;
        case 'medium':
            stylePrice.value = 'price-medium';
            console.log('medium');
            break;
        default:
            stylePrice.value = 'price-low';
            break;
    }
};
start();
</script>

<template>
    <section id="price-section" class="price-content">
        <h1>Precio de Luz Ahora</h1>
        <h3>
            {{ priceStore.nowHour }} :
            <span :class="stylePrice">{{ priceStore.nowPrice }} </span>
            <span style="font-size: 16px"> €/kWh</span>
        </h3>

        <h4>Horas más baratas hoy:</h4>
        <div class="baratas-container">
            <p>
                {{ priceStore.lowHourOne }} : <span>{{ priceStore.lowPriceOne }}</span>
            </p>
            <p>
                {{ priceStore.lowHourTwo }} : <span>{{ priceStore.lowPriceTwo }}</span>
            </p>
            <p>
                {{ priceStore.lowHourThree }} : <span>{{ priceStore.lowPriceThree }}</span>
            </p>
        </div>
        <RouterLink to="blog" class="acction-btn">Ver trucos para ahorrar</RouterLink>
    </section>
</template>

<style scoped>
.price-content {
    padding: 2rem;
    text-align: center;
    background-image: linear-gradient(to right, var(--color-primary), var(--color-secondary));
}
h1 {
    font-size: 52px;
    color: var(--color-white);
    margin: 0;
}
h3 {
    color: var(--color-white);
}
h4 {
    color: var(--color-positive);
    margin: 2rem 0 0;
}
.baratas-container {
    display: flex;
    gap: 1rem;
    justify-content: center;
    color: var(--color-positive);
}
.baratas-container p {
    margin: 0 0 2rem;
}
.baratas-container span {
    text-decoration: underline;
}
.acction-btn {
    text-decoration: none;
    padding: 0.6rem;
    border-radius: 8px;
    border: 0px;
    font-weight: 600;
    font-size: medium;
    background-color: var(--color-accent);
    color: var(--color-primary);
}
.price-high {
    color: white;
    background-color: red;
    padding: 4px;
    border-radius: 8px;
}
.price-medium {
    color: white;
    background-color: orange;
    padding: 4px;
    border-radius: 8px;
}
.price-low {
    color: white;
    background-color: green;
    padding: 4px;
    border-radius: 8px;
}

@media screen and (max-width: 760px) {
    .price-content {
        width: 100%;

        padding: 1rem 0;
        align-items: center;
        margin: 0;
    }
    h1 {
        color: var(--color-white);
        font-size: xx-large;
    }
    h3 {
        color: var(--color-white);
    }
    h4 {
        font-size: 24px;
    }
    h6 {
        margin: 4px 0 16px;
    }
    .baratas-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
    }
    .baratas-container p {
        font-size: x-large;
        margin: 0;
    }
    .acction-btn {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
    }
}
</style>
