<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useLeadStore } from '@/stores/lead-store';

const counter = ref(43);

onMounted(async () => {
    const leadStore = useLeadStore();

    await leadStore.getTotalClick();
    const targetNumber = leadStore.counterClicks;

    const intervalId = setInterval(() => {
        if (counter.value < targetNumber) {
            counter.value++;
        } else {
            clearInterval(intervalId);
        }
    }, 5000);
});
</script>

<template>
    <div class="counter">
        <h1 class="text">Hoy: {{ counter }}<br />Llamadas</h1>
    </div>
</template>

<style scoped>
.counter {
    box-sizing: border-box;
    position: fixed;
    bottom: 90px;
    right: 4px;
    border-radius: 0.5rem;
    font-size: x-small;
    text-align: center;
    color: var(--color-primary);
    background-color: var(--color-accent);
}
.text {
    margin: 0;
    padding: 0.5rem;
}
</style>
