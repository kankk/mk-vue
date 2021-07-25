import { createApp } from 'vue';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import router from './router';

import App from './App.vue';

const app = createApp(App);

// 注册 vue-router
app.use(router);

// 注册 ant-design-vue
app.use(Antd);

app.mount('#app');
