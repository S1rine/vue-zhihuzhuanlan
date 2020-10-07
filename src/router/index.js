import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '@/views';

const routes = [
  {
    path: '/',
    name: 'indexPage',
    component: IndexPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
