import { createApp } from 'vue';
import App from './App.vue';

import ElementPlus from 'element-plus';
import router from './router';
import * as ElementPlusIcons from '@element-plus/icons-vue';

import './assets/main.css';
import 'element-plus/dist/index.css';

const app = createApp(App);
// element plus
app.use(ElementPlus);
// router
app.use(router);
// icon
for(const [key, component] of Object.entries(ElementPlusIcons)){
  app.component(key, component);
}
// app
app.mount('#app');

