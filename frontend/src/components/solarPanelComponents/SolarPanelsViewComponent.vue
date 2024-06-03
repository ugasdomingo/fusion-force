<script setup lang="ts">
//Import Tools
import { useBlogsStore } from '@/stores/blog-store';

//Import Components
import { textSolarPanels } from '@/static/textSolarPanels';
import BlogGalleryComponent from '@/components/blogComponents/BlogGalleryComponent.vue';
import SolarFormComponent from './SolarFormComponent.vue';

//Activate tools
const blogStore = useBlogsStore();
blogStore.getAllBlogs(3);
</script>

<template>
    <main class="panels-container">
        <div class="info-container">
            <h2 class="q-mb-md">Paneles Solares</h2>
            <button href="#cotizar" class="cotizar-btn">Cotizar sin compromisos</button>

            <p v-html="textSolarPanels[0].p1"></p>
            <p v-html="textSolarPanels[0].p2"></p>
            <p v-html="textSolarPanels[0].p3"></p>
            <p v-html="textSolarPanels[0].p4"></p>
            <p v-html="textSolarPanels[0].p5"></p>
            <p v-html="textSolarPanels[0].p6"></p>
        </div>
        <aside id="cotizar" class="form-container">
            <SolarFormComponent :size="'width: auto'" />
        </aside>
        <section>
            <BlogGalleryComponent :posts="blogStore.allBlogs" />
        </section>
    </main>
</template>

<style scoped>
.panels-container {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
}
.cotizar-btn {
    display: none;
}
.info-container {
    width: 50%;
    padding: 0 2rem;
    text-align: justify;
}
.info-container p {
    font-size: medium;
}
.form-container {
    width: 40%;
    position: absolute;
    top: 5vh;
    right: 2rem;
}
@media screen and (max-width: 760px) {
    .panels-container {
        width: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .cotizar-btn {
        display: inline-block;
        margin: 0 0 8px;
        background-color: var(--color-primary);
        color: whitesmoke;
    }
    .info-container {
        width: auto;
    }
    .form-container {
        width: auto;
        height: auto;
        box-sizing: border-box;
        position: inherit;
        top: 2rem;
        right: 0;
    }
}
</style>
