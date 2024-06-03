<script setup lang="ts">
//Import Components
import SuccessCaseComponent from '@/common/SuccessCaseComponent.vue';
import PriceComponent from '@/common/PriceComponent.vue';
</script>

<template>
    <section class="price-section-hero">
        <PriceComponent />
        <SuccessCaseComponent />
    </section>
</template>

<style scoped>
.price-section-hero {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>
