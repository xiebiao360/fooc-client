import { App } from 'vue';
import setupAntd from './ant-design-vue';
import setupComponents from './components';

const init = (app: App) => {
  setupAntd(app);
  setupComponents(app);
};

export default init;
