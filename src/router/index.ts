import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Page404 from '../components/Page404.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/404',
      component: Page404
    },
    {
      path: '*',
      redirect: '/404'
    },
  ],
});