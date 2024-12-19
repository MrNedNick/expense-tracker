import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/expenses',
      name: 'expenses',
      component: () => import('../components/ExpenseList.vue'),
    },
    {
      path: '/add-expense',
      name: 'add-expense',
      component: () => import('../components/ExpenseForm.vue'),
    },
    {
      path: '/charts',
      name: 'charts',
      component: () => import('../components/ExpenseChart.vue'),
    },
  ],
});

export default router;
