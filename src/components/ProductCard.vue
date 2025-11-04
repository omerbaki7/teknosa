<script setup>
// Bu bileşen, dışarıdan 'product' adında bir prop (veri) alacak.
defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="product-card">
    <a href="#" class="product-link">
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
    </a>
    <button class="add-to-cart-btn">Sepete Ekle</button>
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
}

.product-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.product-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Butonun altta kalmasını sağlar */
}

.product-image-container {
  padding: 1rem;
  aspect-ratio: 1 / 1; /* Resimlerin kare olmasını sağlar */
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
  /* İki satırdan sonrasını kes (opsiyonel ama şık) */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  min-height: 40px; /* 2 satırlık yer ayır */
}

.product-price {
  font-size: 1.25rem;
  font-weight: bold;
  color: #383e5c; /* Teknosa Koyu Lacivert */
  margin: 0.5rem 0;
}

.discount-badge {
  display: inline-block;
  background-color: #ff6000;
  color: white;
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
  border-radius: 4px;
}

.add-to-cart-btn {
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  color: #333;
  padding: 0.75rem 1rem;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
}

.add-to-cart-btn:hover {
  background-color: #e0e0e0;
}
</style>