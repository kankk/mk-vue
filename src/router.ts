import * as VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import Tools from './pages/Tools.vue';
import MittDemo from './pages/Demo/Mitt.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/tools',
    component: Tools,
  },
  {
    path: '/demo/mitt',
    component: MittDemo,
  },
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
