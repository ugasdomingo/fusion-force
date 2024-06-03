<script lang="ts" setup>
//Import tools
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import { useBlogsStore } from '@/stores/blog-store';

//Import components
import BlogGalleryComponent from '@/components/blogComponents/BlogGalleryComponent.vue';

//Activate tootls
const route = useRoute();
const blogsStore = useBlogsStore();

//Get Single Blog data
const getSingleBlog = async (id: any) => {
    await blogsStore.getBlogByID(id);
};

getSingleBlog(route.params.id);
blogsStore.getAllBlogs(3);

watch(
    () => route.params.id,
    (newID) => {
        getSingleBlog(newID);
    }
);
</script>

<template>
    <main class="main-single-blog">
        <div class="info-container">
            <img
                :src="
                    'https://res.cloudinary.com/djxptmtna/image/upload/v1684157531/' +
                    blogsStore.oneBlog?.img?.public_id
                "
                alt="BlogPortada"
                class="portada-img"
            />
            <div class="title">
                <h3 class="q-my-none">{{ blogsStore.oneBlog?.title }}</h3>
                <h5 class="q-my-none">Author: {{ blogsStore.oneBlog?.author }}</h5>
            </div>
        </div>
        <div class="body-container">
            <!-- <q-video
                v-if="blogsStore.oneBlog?.urlVideo"
                :src="blogsStore.oneBlog?.urlVideo"
                frameborder="0"
                allowfullscreen
            /> -->
            <p v-html="blogsStore.oneBlog?.body"></p>
        </div>
        <section>
            <RouterLink to="comparador" class="action-btn"
                >Comparar tu factura y ahorrar hasta un 40%</RouterLink
            >
            <h2>Más contenido a tu alcance:</h2>
            <BlogGalleryComponent :posts="blogsStore.allBlogs" />
        </section>
    </main>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
}
h3 {
    font-size: 52px;
    margin-bottom: 0;
}
h2 {
    text-align: center;
}
.main-single-blog {
    width: 100%;
    box-sizing: border-box;
    padding: 2rem 6rem;
}
.info-container {
    width: 100%;
    display: flex;
    padding: 2em 1em;
}
.title {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 0 1em;
}
.body-container {
    width: 100%;
    padding: 2em 1em;
}
.body-container p {
    font-size: 1.3rem;
}
.portada-img {
    max-width: 350px;
    object-fit: cover;
}
.action-btn {
    padding: 0.6rem;
    border-radius: 8px;
    border: 0px;
    font-weight: 600;
    font-size: medium;
    background-color: var(--color-primary);
    color: var(--color-white);
}

@media screen and (max-width: 760px) {
    .main-single-blog {
        padding: 2rem 0.5rem;
    }
    .info-container {
        flex-direction: column;
    }
    .title h3 {
        display: none;
    }
    .title h6 {
        font-size: 1.5rem;
        padding: 4px 0;
    }
    .body-container {
        padding: 0 1em;
    }
}
</style>
