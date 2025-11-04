import { createRouter, createWebHistory } from 'vue-router'
// Sadece var olan HomeView.vue dosyasını import ediyoruz
import HomeView from '../views/HomeView.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // Ana sayfa (/) istendiğinde
      path: '/',
      name: 'home',
      // HomeView bileşenini yükle
      component: HomeView 
    }
    // DİĞER ROTALARI (Login, Register)
    // BU DOSYALARI OLUŞTURDUKTAN SONRA EKLEYECEĞİZ.
  ]
})

export default router