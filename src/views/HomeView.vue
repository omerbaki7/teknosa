<script setup>
import { ref } from 'vue';
import productsData from '@/data/products.json'; 
import ProductCard from '@/components/ProductCard.vue';
// 1. HeroSection bileşenini import ediyoruz
import HeroSection from '@/components/HeroSection.vue';

const products = ref(productsData);
</script>

<template>
  <main class="home-page">
    <HeroSection />

    <div class="home-container">
      <h1 class="page-title">Öne Çıkan Ürünler</h1>
      
      <div class="product-grid">
        <ProductCard 
          v-for="product in products" 
          :key="product.id" 
          :product="product" 
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 20px;
}

.page-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #383e5c;
  font-weight: bold;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}
</style>