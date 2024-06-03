import './assets/main.css';
import mdiVue from 'mdi-vue/v3';
import * as mdijs from '@mdi/js';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import CKEditor from '@ckeditor/ckeditor5-vue';

import App from '@/App.vue';
import router from '@/router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(CKEditor);
app.use(mdiVue, {
    icons: mdijs
});

app.mount('#app');
