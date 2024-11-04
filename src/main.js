// src/main.js
import { createApp } from 'vue';
import App from '@/App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import TransportComponent from '@/components/TransportComponent.vue';
import InfoComponent from '@/components/InfoComponent.vue';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});



const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/info' },
    { path: '/transportComponent', name: 'TransportComponent', component: TransportComponent },
    { path: '/info', name: 'Info', component: InfoComponent },
  ],
});



  const app = createApp(App)

  app.use(router);
  app.use(vuetify);
  app.mount('#app');
