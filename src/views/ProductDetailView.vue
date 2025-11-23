<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import productsData from '@/data/products.json'; 
import Breadcrumb from '@/components/Breadcrumb.vue';

const route = useRoute();
const product = ref(null);

onMounted(() => {
  // 1. Adres çubuğundaki ID'yi alıyoruz (örneğin: tel123)
  const productId = route.params.id;
  
  // 2. Bu ID'ye sahip ürünü products.json içinden buluyoruz
  const foundProduct = productsData.find(p => p.id === productId);
  
  // 3. Bulduysak ekrana basmak için değişkene atıyoruz
  if (foundProduct) {
    product.value = foundProduct;
  }
});
</script>

<template>
  <div class="page-wrapper" v-if="product">
    
    <div class="breadcrumb-container">
      <Breadcrumb :productName="product.name" />
    </div>

    <div class="product-detail-container">
      <div class="detail-left">
        <div class="img-wrapper">
          <img :src="product.imageUrl" :alt="product.name" />
        </div>
      </div>

      <div class="detail-right">
        <h1 class="product-title">{{ product.name }}</h1>
        <p class="brand">Marka: <strong>{{ product.brand }}</strong></p>
        
        <div class="price-box">
          <span class="price">{{ product.price }} TL</span>
          <span v-if="product.discount" class="discount-tag">%{{ product.discount }} İndirim</span>
        </div>

        <div class="actions">
          <button class="add-to-cart-btn-large">Sepete Ekle</button>
        </div>

        <div class="delivery-info">
          <p>🚚 <strong>Ücretsiz Kargo</strong> (Yarın Kapında)</p>
          <p>🛡️ <strong>Teknosa Güvencesi</strong> ile</p>
        </div>

        <div class="description-box">
          <h3>Ürün Özellikleri</h3>
          <p>
            {{ product.name }}, yüksek performansı ve şık tasarımıyla teknoloji tutkunları için harika bir seçimdir.
            Detaylı teknik özellikler için mağazalarımızı ziyaret edebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  </div>
  
  <div v-else class="not-found">
    <h2>Ürün bulunamadı!</h2>
    <p>Aradığınız ürün sistemde mevcut değil.</p>
  </div>
</template>

<style scoped>
.page-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  min-height: 60vh;
}

.breadcrumb-container {
  margin-bottom: 1rem;
}

.product-detail-container {
  display: flex;
  gap: 2rem;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  flex-wrap: wrap; 
}

.detail-left {
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
}

.detail-left img {
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
}

.detail-right {
  flex: 1;
  min-width: 300px;
}

.product-title {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.brand {
  color: #666;
  margin-bottom: 1.5rem;
}

.price-box {
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.price {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}

.discount-tag {
  background-color: #ff6000;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: bold;
}

.add-to-cart-btn-large {
  background-color: #ff6000;
  color: white;
  border: none;
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.add-to-cart-btn-large:hover {
  background-color: #e65600;
}

.delivery-info {
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #555;
}

.description-box {
  margin-top: 2rem;
}

.description-box h3 {
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.not-found {
  text-align: center;
  padding: 5rem;
}
</style>