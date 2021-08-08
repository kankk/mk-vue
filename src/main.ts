import { createApp } from 'vue';

import 'dayjs/locale/zh-cn';

import router from './router';

import App from './App.vue';

const app = createApp(App);

// 注册 vue-router
app.use(router);

app.mount('#app');
