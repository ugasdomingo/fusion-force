<script setup lang="ts">
//Import tools
import { useBlogsStore } from '@/stores/blog-store';

//Activate tools
const blogStore = useBlogsStore();
blogStore.getAllBlogs(0);

//Import Components
import BlogGalleryComponents from '@/components/blogComponents/BlogGalleryComponent.vue';
</script>

<template>
    <main class="main-blog">
        <h1>Blog Fenintegral</h1>
        <h5>Novedades, Hacks y Tutoriales para ahorrar en Luz y Gas</h5>
        <BlogGalleryComponents :posts="blogStore.allBlogs" />
    </main>
</template>

<style scoped>
.main-blog h1,
h5 {
    margin: 0 0 1rem;
}
.main-blog {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 6rem;
}

@media screen and (max-width: 760px) {
    .main-blog {
        width: auto;
        padding: 2rem 0.5rem;
    }
}
</style>
