<script setup lang="ts">
//Import Tools
import { useBlogsStore } from '@/stores/blog-store';

//Import Components
import HeroComponent from '@/components/homeComponents/HeroComponent.vue';
import LuzComponent from '@/components/homeComponents/LuzComponent.vue';
import ServicesHomeComponent from '@/components/homeComponents/ServicesHomeComponent.vue';
import AboutComponent from '@/components/homeComponents/AboutComponent.vue';
import SolarPanelComponent from '@/components/homeComponents/SolarPanelComponent.vue';
import ContactComponent from '@/components/homeComponents/ContactComponent.vue';
import BlogGalleryComponent from '@/components/blogComponents/BlogGalleryComponent.vue';

//Activate tools
const blogStore = useBlogsStore();
blogStore.getAllBlogs(3);
</script>

<template>
    <main class="main-home">
        <HeroComponent />
        <LuzComponent />
        <ServicesHomeComponent />
        <AboutComponent />
        <SolarPanelComponent />
        <ContactComponent />
        <BlogGalleryComponent :posts="blogStore.allBlogs" :route="'blog'" />
    </main>
</template>

<style scoped>
.main-home {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
}
</style>
