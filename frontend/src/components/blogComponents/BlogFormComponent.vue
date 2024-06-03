<script setup lang="ts">
//Import Tootls
import { ref } from 'vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useBlogsStore } from '@/stores/blog-store';
import LoadingComponent from '@/common/LoadingComponent.vue';

//Activate tools
const blogStore = useBlogsStore();

//Loading
const loadding = ref(false);

//Catch data
const title = ref('');
const category = ref('');
const body = ref('');
const urlVideo = ref('');
const img = ref();
const selectedOption = ref('');

const handleImageUpload = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    img.value = file;
};

const options = [
    { value: 'pymes', label: 'Pymes' },
    { value: 'hacks', label: 'Trucos y Hacks' },
    { value: 'tutorial', label: 'Tutoriales' },
    { value: 'home', label: 'Hogar' }
];

const handleSubmit = async () => {
    try {
        loadding.value = !loadding.value;

        let formData = new FormData();

        //Push info to formData
        formData.append('title', title.value);
        formData.append('category', category.value);
        formData.append('body', body.value);
        formData.append('urlVideo', urlVideo.value);
        formData.append('img', img.value);

        await blogStore.createBlog(formData);

        title.value = '';
        category.value = '';
        body.value = '';
        urlVideo.value = '';

        loadding.value = !loadding.value;

        /* notify('Post subido'); */
    } catch (error: any) {
        console.log('error', error);
    }
};
</script>

<template>
    <main class="form-post-container">
        <h5>Subir un nuevo Post</h5>

        <LoadingComponent :color="'secondary'" v-if="loadding" />
        <form v-else @submit.prevent="handleSubmit" class="form">
            <input
                class="input"
                v-model="title"
                type="text"
                required
                placeholder="Título del Post"
            />

            <div>
                <label for="editor">Contenido:</label>
                <ckeditor :editor="ClassicEditor" v-model="body" required class="editor"></ckeditor>
            </div>

            <input class="input" v-model="urlVideo" type="text" placeholder="Vídeo del Post" />

            <label>Selecciona una o varias opciones:</label>
            <div v-for="option in options" :key="option.value" style="text-align: start">
                <input
                    type="checkbox"
                    :id="option.value"
                    :value="option.value"
                    v-model="category"
                />
                <label :for="option.value">{{ option.label }}</label>
            </div>

            <input @change="handleImageUpload" type="file" placeholder="Vídeo del Post" />

            <button type="submit" class="form-btn">Subir Post</button>
        </form>
    </main>
</template>

<style scoped>
.form-post-container {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 50%;
    margin: 0 auto;
    padding: 0 2rem;
}
.form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.form-btn {
    width: 50%;
}
.editor {
    min-height: 600px;
}
.luz-container {
    border: 8px solid var(--color-primary);
    padding: 1rem;
    border-radius: 16px;
}
.gas-container {
    border: 8px solid var(--color-accent);
    padding: 1rem;
    border-radius: 16px;
}

@media screen and (max-width: 760px) {
    .form-post-container {
        width: 100%;
    }
}
</style>
