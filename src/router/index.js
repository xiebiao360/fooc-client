import routes from './routes';
import { createRouter, createWebHashHistory } from 'vue-router';
import { getToken } from '../utils/auth';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

NProgress.configure({ showSpinner: false });
const whiteList = ['/login'];

router.beforeEach((to, from, next) => {
  NProgress.start();
  getToken()
    .then((token) => {
      if (token) {
        next();
      } else {
        if (whiteList.indexOf(to.path) !== -1) {
          next();
        } else {
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      }
    })
    .catch((err) => console.log(err));
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});

export default router;
