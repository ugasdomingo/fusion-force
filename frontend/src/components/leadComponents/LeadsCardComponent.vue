<script setup lang="ts">
import { type Ilead } from '@/interfaces/Ileads';

defineProps({
    leads: {
        type: Array as () => Ilead[],
        required: true
    }
});
</script>

<template>
    <div class="card" v-for="item in leads" :key="item._id">
        <h5>{{ item?.leadsName }}</h5>
        <p>{{ item?.leadsEmail }}, {{ item?.leadsPhone }}</p>
        <p>{{ new Date(item?.date).toLocaleString() }}</p>
    </div>
</template>
