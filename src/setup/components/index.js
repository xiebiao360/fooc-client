import DropPanel from './drop-panel/drop-panel.vue';

const components = [DropPanel];

const setupComponents = (app) => {
  components.forEach((e) => {
    app.component(e.name, e);
  });
};

export default setupComponents;
