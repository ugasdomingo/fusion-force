<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';

const images = [
    'img/logo-iberdrola.webp',
    'img/logo-endesa.webp',
    'img/logo-naturgy.webp',
    'img/logo-repsol.webp',
    'img/logo-total.webp',
    'img/logo-acsol.webp'
];

const currentIndex = ref(0);
const timer = ref<number | null>(null);

const currentImage = computed(() => images[currentIndex.value]);

const startTimer = () => {
    timer.value = setInterval(nextImage, 2000);
};

const stopTimer = () => {
    if (timer.value) {
        clearInterval(timer.value);
        timer.value = null;
    }
};

const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
};

onMounted(() => {
    startTimer();
});

onUnmounted(() => {
    stopTimer();
});
</script>

<template>
    <div class="gallery">
        <img :src="currentImage" alt="Gallery Image" />
    </div>
</template>

<style scoped lang="scss">
.gallery {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
img {
    width: 100%;
    max-width: 250px;
    height: auto;
    object-fit: cover;
}
</style>
