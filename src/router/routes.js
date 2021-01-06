import mainLayout from '@/layout/index.vue';
import login from '@/views/system/login';
const baseRoutes = [
  {
    path: '/',
    component: mainLayout,
    redirect: { name: 'home' },
  },
  {
    path: '/login',
    component: login,
  },
];
const customRoutes = [
  {
    path: '/home',
    name: 'home',
    component: mainLayout,
    redirect: { name: 'home_index' },
    children: [
      {
        path: 'index',
        name: 'home_index',
        component: () => import('@/views/home/index'),
      },
    ],
  },
  {
    path: '/list',
    name: 'list',
    component: mainLayout,
    redirect: { name: 'list_index' },
    children: [
      {
        path: 'index',
        name: 'list_index',
        component: () => import('@/views/list/index'),
      },
    ],
  },
  {
    path: '/note',
    name: 'note',
    component: mainLayout,
    redirect: { name: 'note_index' },
    children: [
      {
        path: 'index',
        name: 'note_index',
        component: () => import('@/views/note/index'),
      },
    ],
  },
];
const errorRoutes = [
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/system/404'),
  },
];

export default [...baseRoutes, ...customRoutes, ...errorRoutes];
