import { App } from 'vue';
// import { Button, message, Tree, Card, Form, Input, Space } from 'ant-design-vue';
import { Card } from 'ant-design-vue';

const setupAntd = (app: App) => {
  //   app.use(Button).use(Tree).use(Card).use(Form).use(Input).use(Space);
  //   app.config.globalProperties.$message = message;
  app.use(Card);
};

export default setupAntd;