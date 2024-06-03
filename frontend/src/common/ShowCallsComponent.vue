<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface IresultsClick {
    fecha: string;
    clicks: string;
}

defineProps({
    clicks: {
        type: Array as () => IresultsClick[],
        required: true
    }
});
</script>

<template>
    <div class="clicks-card" v-for="item in clicks" :key="item?.fecha">
        <p>Fecha: {{ item.fecha }}, Clicks: {{ item.clicks }}</p>
    </div>
</template>
