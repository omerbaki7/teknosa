<script setup>
import { RouterView, useRoute } from 'vue-router';
import { computed } from 'vue';
import Header from './components/organisms/Header.vue';
import Footer from './components/organisms/Footer.vue';

const route = useRoute();

const showLayout = computed(() => {
  const path = route.path;
  const name = route.name;
  if (path === '/login' || path === '/register' || name === 'login' || name === 'register') {
    return false;
  }
  return true;
});
</script>

<template>
  <Header v-if="showLayout" /> 
  <RouterView />
  <Footer v-if="showLayout" />
</template>

<style>
body { margin: 0; padding: 0; font-family: Arial, sans-serif; color: #333; }
</style>