import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import cv from "@/views/cv.vue";
import projects from "@/components/projects.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects
    },
    {
      path: '/CV',
      name: 'Lebenslauf',
      component: cv
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
