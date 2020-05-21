import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '@/views/Main.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    name: 'Main',
    component: Main,
  },
];

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
