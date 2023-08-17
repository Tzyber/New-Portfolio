import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import summary from "@/components/summary.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: summary
    }
  ]
})

// Hinzugefügter Navigation Guard
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    // Wenn keine Route übereinstimmt, leite auf die HomeView um
    next({ name: 'home' });
  } else {
    next(); // Erlaube die Navigation
  }
});

export default router
