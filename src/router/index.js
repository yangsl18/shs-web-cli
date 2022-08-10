import { createRouter, createWebHistory } from 'vue-router';
import { initRoutes } from './routes';


export const router = createRouter({
  history: createWebHistory(),
  routes: initRoutes()
});


export const useRoute = () => {
  return {
    router
  };
};


