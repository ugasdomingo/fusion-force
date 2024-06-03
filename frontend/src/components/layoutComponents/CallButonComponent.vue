<script setup lang="ts">
import { useLeadStore } from '@/stores/lead-store';

const leadStore = useLeadStore();
</script>

<template>
    <a href="tel:674395026" class="fixed-call-btn" @click="leadStore.registerClick">
        <mdicon name="phone" size="32" />
    </a>
</template>

<style scoped>
.fixed-call-btn {
    box-sizing: border-box;
    position: fixed;
    bottom: 18px;
    right: 18px;
    color: var(--color-accent);
    background-color: var(--color-secondary);
    padding: 1rem;
    border-radius: 50%;
    cursor: pointer;
}
</style>
