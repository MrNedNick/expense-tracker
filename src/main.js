import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css'; // Для иконок
import { createPinia } from 'pinia';
import router from './router';

const vuetify = createVuetify();
const pinia = createPinia();

createApp(App)
  .use(vuetify)
  .use(router)
  .use(pinia)
  .mount('#app');
