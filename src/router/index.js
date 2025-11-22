import { createRouter, createWebHistory } from 'vue-router'

// Sayfaları import ediyoruz
import HomeView from '../views/HomeView.vue'
// Login ve Register sayfalarını "lazy load" (istendiğinde yükle) yerine direkt import edelim, daha garanti olsun.
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import CartView from '../views/CartView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/product/:id',
      name: 'product-detail',
      component: ProductDetailView
    }
  ]
})

export default router