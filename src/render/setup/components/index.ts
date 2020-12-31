import { App, Component } from 'vue';
import DropPanel from './drop-panel/drop-panel.vue';

const components: Component[] = [DropPanel];

const setupComponents = (app: App) => {
  components.forEach((e) => {
    app.component(e.name as string, e);
  });
};

export default setupComponents;
