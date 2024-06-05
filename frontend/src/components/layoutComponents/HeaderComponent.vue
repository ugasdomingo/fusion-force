<script setup lang="ts">
import { useUtilsStore } from '@/stores/utils-store';
import { useRoute, RouterLink } from 'vue-router';
import { watch } from 'vue';

import NavbarComponent from '@/components/layoutComponents/NavbarComponent.vue';

const utilsStore = useUtilsStore();
const route = useRoute();

watch(
    () => route.path,
    () => {
        utilsStore.isResponsiveMenuOpen = false;
        window.scrollTo(0, 0);
    }
);

const toggleMenu = () => {
    utilsStore.isResponsiveMenuOpen = !utilsStore.isResponsiveMenuOpen;
};
</script>

<template>
    <header>
        <RouterLink to="/" class="logo-container">
            <img alt="logo" class="header-logo" src="/img/logo-fusion-nobg.png" />
        </RouterLink>

        <NavbarComponent :menu-type="'normal'" class="normal-menu" />

        <!-- Responsive Menu -->
        <div @click="toggleMenu" class="content-menu">
            <mdicon name="menu" size="50" class="menu" />
        </div>
        <NavbarComponent
            v-if="utilsStore.isResponsiveMenuOpen"
            :menu-type="'mobile'"
            class="responsive-menu"
        />
    </header>
</template>

<style scoped>
header {
    width: 100%;
    height: 5rem;
    box-sizing: border-box;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
}

.logo-container {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    text-decoration: none;
    color: var(--color-secondary);
}
.logo-container h2 {
    font-size: 2rem;
}
.header-logo {
    height: 7rem;
    object-fit: cover;
    text-shadow: 0px 0px 8px var(--color-white);
}
.content-menu {
    display: none;
    position: relative;
    z-index: 900;
}

@media screen and (max-width: 760px) {
    header {
        padding: 0 0.5rem;
        max-height: 5rem;
    }
    .logo-container {
        color: var(--color-primary);
    }
    .logo-container h2 {
        font-size: 1.5rem;
    }
    .header-logo {
        max-height: 5rem;
    }
    .normal-menu {
        display: none;
    }
    .content-menu {
        display: inline-block;
        top: 0;
    }
    .menu {
        display: inline-block;
        color: var(--color-accent);
    }
}
</style>
