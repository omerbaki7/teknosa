<script setup>
import { useRouter } from 'vue-router';
// Atomu import ediyoruz
import BaseButton from '@/components/atoms/BaseButton.vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const router = useRouter();

const goToDetail = () => {
  router.push(`/product/${props.product.id}`);
};
</script>

<template>
  <div class="product-card" @click="goToDetail">
    <div class="product-image-container">
      <img :src="product.imageUrl" :alt="product.name" class="product-image" />
    </div>
    
    <div class="product-info">
      <p v-if="product.brand" class="product-brand">{{ product.brand }}</p>
      <h3 class="product-name">{{ product.name }}</h3>
      
      <p class="product-price">{{ product.price }} TL</p>
      
      <div v-if="product.discount > 0" class="discount-badge">
        %{{ product.discount }} İndirim
      </div>
    </div>

    <div class="card-action">
        <BaseButton text="Sepete Ekle" variant="secondary" :fullWidth="true" @click.stop="console.log('Sepete eklendi')" />
    </div>
  </div>
</template>

<style scoped>
.product-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: white;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
.product-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: #f76e11;
}
.product-image-container {
  padding: 1rem;
  aspect-ratio: 1 / 1; 
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-image {
  max-width: 100%;
  max-height: 200px;
  object-fit: contain;
}
.product-info {
  padding: 1rem;
  border-top: 1px solid #f0f0f0;
  flex-grow: 1;
}
.product-brand {
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 0.25rem 0;
  font-weight: bold;
}
.product-name {
  font-size: 1rem;
  font-weight: 500;
  margin: 0 0 0.5rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  min-height: 40px; 
}
.product-price {
  font-size: 1.25rem;
  font-weight: bold;
  color: #383e5c;
  margin: 0.5rem 0;
}
.discount-badge {
  display: inline-block;
  background-color: #f76e11;
  color: white;
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
  border-radius: 4px;
}
.card-action {
    padding: 10px;
}
</style>