import * as VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import Tools from './pages/Tools.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/tools',
    component: Tools,
  },
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
