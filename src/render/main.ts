import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from './router';
import init from './setup';

const app = createApp(App);
init(app);
app.use(router);
app.mount('#app');
