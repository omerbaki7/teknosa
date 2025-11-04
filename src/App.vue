<script setup>
// RouterLink'e ek olarak useRoute ve computed'ı import ediyoruz
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import Header from './components/Header.vue' 

// useRoute() fonksiyonu bize o an hangi sayfada olduğumuz bilgisini verir
const route = useRoute();

// Bu, o anki rotaya göre Header'ın gösterilip gösterilmeyeceğine karar veren
// reaktif bir değişkendir.
const showMainHeader = computed(() => {
  // Eğer sayfanın adı 'Login' ise veya 'Register' ise,
  // Header'ı gösterme (false döndür).
  if (route.name === 'Login' || route.name === 'Register') {
    return false;
  }
  // Diğer tüm sayfalarda (home vb.) Header'ı göster (true döndür).
  return true;
});
</script>

<template>
  <Header v-if="showMainHeader" /> 
  
  <RouterView />
</template>

<style>
/* Global stiller aynı kalabilir */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  color: #333;
}
</style>