<script setup>
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const route = useRoute();

// Header ve Footer'ın hangi sayfalarda GİZLENECEĞİNİ belirleyen mantık
const showLayout = computed(() => {
  // Mevcut sayfanın yolu (path) veya adı (name)
  const path = route.path;
  const name = route.name;

  // Eğer login veya register sayfasındaysak FALSE döndür (Gizle)
  if (path === '/login' || path === '/register' || name === 'login' || name === 'register') {
    return false;
  }
  
  // Diğer tüm sayfalarda TRUE döndür (Göster)
  return true;
});
</script>

<template>
  <Header v-if="showLayout" /> 
  
  <RouterView />

  <Footer v-if="showLayout" />
</template>

<style>
/* Global stiller */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  color: #333;
}
</style>