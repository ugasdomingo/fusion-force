<script setup lang="ts">
import { type Iservices } from '@/interfaces/Iservices';

defineProps({
    services: {
        type: Array as () => Iservices[],
        required: true
    }
});
</script>

<template>
    <div class="card-services" v-for="item in services" :key="item.id">
        <div class="img-card-section">
            <RouterLink :to="item.to">
                <img :src="item.url" :alt="item.title" />
            </RouterLink>
        </div>
        <div class="card-section">
            <RouterLink :to="item.to" class="link">
                {{ item.action }}
                <mdicon :name="item.mid" width="24" class="icon-small" />
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.card-services {
    width: 350px;
    height: 250px;
    box-sizing: border-box;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}
.img-card-section {
    height: 80%;
    position: relative;
    background-color: var(--color-secondary);
    border-radius: 1rem 1rem 0 0;
}
img {
    width: 100%;
    height: 100%;
    border-radius: 1rem 1rem 0 0;
    object-fit: cover;
    object-position: top;
    opacity: 0.9;
    z-index: -1;
}

.card-section {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    border-radius: 0 0 1rem 1rem;
    background-color: var(--color-accent);
}
.link {
    text-decoration: none;
    font-weight: 700;
    padding: 0 0 0 0.5rem;
    margin: auto 0;
    color: var(--color-primary);
}
</style>
