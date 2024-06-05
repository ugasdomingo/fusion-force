<script setup lang="ts">
import PrivacyTextComponent from '@/components/privacyComponents/PrivacyTextComponent.vue';
</script>

<template>
    <main class="politic-container">
        <PrivacyTextComponent />
    </main>
</template>

<style scoped>
.politic-container {
    padding: 4rem 6rem;
}
@media screen and (max-width: 760px) {
    .politic-container {
        padding: 2rem 0.5rem;
    }
}
</style>
