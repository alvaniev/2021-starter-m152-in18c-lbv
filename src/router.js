import Vue from 'vue';
import Router from 'vue-router';

import HelloWorld from '@/components/HelloWorld.vue';
import A3 from '@/components/A3.vue';
import A2 from '@/components/A2.vue';
import A5 from '@/components/A5.vue';
import A7 from '@/components/A7.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld,
    },
    {
      path: '/a3',
      name: 'a3',
      component: A3,
    },
    {
      path: '/a2',
      name: 'a2',
      component: A2,
    },
    {
      path: '/a5',
      name: 'a5',
      component: A5,
    },
    {
      path: '/a7',
      name: 'a7',
      component: A7,
    }
  ], 
});