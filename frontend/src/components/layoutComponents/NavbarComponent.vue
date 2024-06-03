<script setup lang="ts">
//Import Tools
import { useUserStore } from '@/stores/user-store';
import { RouterLink } from 'vue-router';

//Activate tools
const userStore = useUserStore();

defineProps<{
    menuType: string;
}>();
</script>

<template>
    <nav :class="menuType">
        <RouterLink class="nav-btn" to="/comparador">
            Comparador Energía <mdicon name="chevron-double-down" width="24" class="icon-small" />
        </RouterLink>
        <RouterLink class="nav-btn" to="/paneles-solares">
            Paneles Solares <mdicon name="chevron-double-down" width="24" class="icon-small" />
        </RouterLink>
        <RouterLink class="nav-btn" to="/blog">
            Blog <mdicon name="chevron-double-down" width="24" class="icon-small" />
        </RouterLink>
        <button v-if="userStore.token" @click="userStore.logout" class="logout-btn">
            Cerrar sesión
        </button>
    </nav>
</template>

<style scoped>
/* Menu type Styles */
.normal {
    z-index: 900;
}
.mobile {
    z-index: 900;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    position: absolute;
    top: 10vh;
    right: 0;
    background-color: var(--color-primary);
}

.nav-btn {
    padding: 0.6rem;
    margin: 0 4px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 400;
    font-size: 1.2rem;
    color: var(--color-secondary);
}
.logout-btn {
    padding: 0.6rem;
    border-radius: 8px;
    border: 0px;
    font-weight: 600;
    font-size: x-large;
    background-color: var(--color-primary);
    color: var(--color-white);
}

@media screen and (max-width: 760px) {
    .nav-btn {
        font-size: medium;
        color: var(--color-white);
    }
}
</style>
