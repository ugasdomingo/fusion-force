<script setup lang="ts">
//Import Tools
import { useBlogsStore } from '@/stores/blog-store';

//Import Components
import { textSolarPanels } from '@/static/textSolarPanels';
import SolarFormComponent from './SolarFormComponent.vue';

//Activate tools
const blogStore = useBlogsStore();
blogStore.getAllBlogs(3);
</script>

<template>
    <main class="panels-container">
        <div class="info-container">
            <h2 class="q-mb-md">Paneles Solares</h2>

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
        <img
            src="https://img.freepik.com/free-photo/design-made-up-onion-rings_23-2147927094.jpg?t=st=1717608510~exp=1717612110~hmac=edb3a3e42ac26eae16fa217eddf555c90b8fb384dcdf5815900ca025dc6da1e8&w=740"
            alt="Hero"
            class="panels-background"
        />
    </main>
</template>

<style scoped>
.panels-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    margin-top: 4rem;
}

.info-container {
    width: 50%;
}

.cotizar-btn {
    background-color: #f7b733;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin-bottom: 20px;
}

.form-container {
    width: 40%;
}
.panels-background {
    width: 100%;
    height: fit-content;
    position: absolute;
    object-fit: cover;
    object-position: top;
    top: 0;
    right: 0;
    z-index: -900;
}

@media (max-width: 768px) {
    .panels-container {
        flex-direction: column;
        padding: 0 5%;
    }

    .info-container {
        width: 100%;
    }

    .form-container {
        width: 100%;
    }
}
</style>
