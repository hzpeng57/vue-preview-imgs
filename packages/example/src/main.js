import { createApp } from 'vue';
import App from './App.vue';
import preview from 'vue-preview-imgs';

const app = createApp(App);
app.use(preview);
app.mount('#app');
