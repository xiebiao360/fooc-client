import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import setupAntd from './setup/ant-design-vue';
import setupComponents from './setup/components';

const app = createApp(App);
app.config.productionTip = false;

app.use(router);
app.use(store);
setupAntd(app);
setupComponents(app);

router.isReady().then(() => {
  app.mount('#app');
});

require('./mock');
