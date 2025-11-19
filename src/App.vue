<script setup>
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import Header from './components/Header.vue' 
import Footer from './components/Footer.vue'

const route = useRoute();

// Header'ın hangi sayfalarda görünüp görünmeyeceğini kontrol eden mantık
const showMainHeader = computed(() => {
  // Login ve Register sayfalarında Header GİZLENSİN
  if (route.name === 'Login' || route.name === 'Register') {
    return false;
  }
  // Diğer tüm sayfalarda GÖRÜNSÜN
  return true;
});
</script>

<template>
  <Header v-if="showMainHeader" /> 
  
  <RouterView />

  <Footer v-if="showMainHeader" />
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