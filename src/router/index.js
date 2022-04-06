import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const routes = [
  {
    path: '/informations',
    name: 'PageInformations',
    component: () => import('../views/PageInformations.vue'),
  },
  {
    path: '/',
    name: 'PageAccueil',
    component: () => import('../views/PageAccueil.vue'),
  },
  {
    path: '/contact',
    name: 'PageContact',
    component: () => import('../views/PageContact.vue'),
  },
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
export default router;
