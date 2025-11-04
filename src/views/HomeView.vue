<script setup>
import { ref } from 'vue';
// 1. Yeni oluşturduğumuz JSON dosyasını import ediyoruz
import productsData from '@/data/products.json'; 
// 2. Yeni ProductCard bileşenini import ediyoruz
import ProductCard from '@/components/ProductCard.vue';

// 3. JSON'dan gelen veriyi reaktif bir 'ref' içine alıyoruz
const products = ref(productsData);
</script>

<template>
  <main class="home-container">
    <h1 class="page-title">Öne Çıkan Ürünler</h1>
    
    <div class="product-grid">
      <ProductCard 
        v-for="product in products" 
        :key="product.id" 
        :product="product" 
      />
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
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #383e5c;
}

.product-grid {
  display: grid;
  /* Ekrana sığdığı kadar kartı (min 250px) otomatik yerleştirir */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}
</style>