import {
  Button,
  message,
  Tree,
  Card,
  Form,
  Input,
  Space,
} from 'ant-design-vue';
const setupAntd = (app) => {
  app.use(Button);
  app.use(Tree);
  app.use(Card);
  app.use(Form);
  app.use(Input);
  app.use(Space);

  app.config.globalProperties.$message = message;
};
export default setupAntd;
