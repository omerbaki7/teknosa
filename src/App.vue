<script setup>
import { RouterView } from 'vue-router'
// Yeni oluşturduğumuz Header bileşenini import ediyoruz
import Header from './components/Header.vue' 
</script>

<template>
  <Header /> 
  
  <RouterView />
</template>

<style>
/* App.vue içindeki stil global olarak uygulanır. */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  color: #333;
}
</style>