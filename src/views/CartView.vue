<template>
  <div class="cart-page">
    <div class="container">
      <h1 class="page-title">Sepetim (1 Ürün)</h1>

      <div class="cart-layout">
        <div class="cart-items">
          
          <div class="cart-item-card">
            <div class="seller-info">
              Satıcı: <strong>TEKNOSA</strong>
            </div>
            
            <div class="item-content">
              <div class="item-image">
                <img src="/images/xiaomi-13t.webp" alt="Xiaomi Telefon" onerror="this.src='https://via.placeholder.com/100'">
              </div>
              
              <div class="item-details">
                <h3 class="product-name">Xiaomi 13T 12 + 256GB Alpine Blue Akıllı Telefon</h3>
                <p class="delivery-note">🚚 Tahmini Kargoya Teslim: <strong>1-2 iş günü</strong></p>
              </div>

              <div class="item-actions">
                <div class="quantity-control">
                  <button class="qty-btn">-</button>
                  <input type="text" value="1" readonly class="qty-input">
                  <button class="qty-btn">+</button>
                </div>
                <div class="price-area">
                   <span class="price">36.999 TL</span>
                </div>
                <button class="delete-btn">🗑️</button>
              </div>
            </div>

            <div class="warranty-option">
              <span class="shield-icon">🛡️</span>
              <span><strong>Garanti Hizmetini Seç!</strong></span>
              <a href="#" class="select-link">Paket Seç</a>
            </div>
          </div>

          <div class="continue-shopping">
            <router-link to="/">‹ Alışverişe Devam Et</router-link>
          </div>

        </div>

        <div class="cart-summary">
          <h2>Sipariş Özeti</h2>
          
          <div class="summary-row">
            <span>1 Ürün</span>
            <span>36.999 TL</span>
          </div>
          
          <div class="summary-total">
            <span>Toplam</span>
            <span class="total-price">36.999 TL</span>
          </div>

          <button class="checkout-btn">Alışverişi Tamamla</button>

          <div class="coupon-area">
            <span>+ İndirim kodum var</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
// Şimdilik script boş, sadece görüntü yapıyoruz
</script>

<style scoped>
.cart-page {
  background-color: #f4f4f4;
  min-height: 80vh;
  padding: 2rem 0;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.cart-layout {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

/* Mobilde alt alta geçmesi için */
@media (max-width: 900px) {
  .cart-layout {
    flex-direction: column;
  }
}

/* --- SOL TARAF --- */
.cart-items {
  flex: 2; /* Geniş alan */
  width: 100%;
}

.cart-item-card {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  margin-bottom: 1rem;
}

.seller-info {
  font-size: 0.9rem;
  color: #666;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.item-content {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.item-image img {
  width: 80px;
  height: auto;
  object-fit: contain;
}

.item-details {
  flex: 1;
}

.product-name {
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
}

.delivery-note {
  font-size: 0.8rem;
  color: #27ae60; /* Yeşil */
}

.item-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
}

.price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
}

.quantity-control {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.qty-btn {
  background: none;
  border: none;
  width: 30px;
  height: 30px;
  font-size: 1.2rem;
  cursor: pointer;
  color: #ff6000;
}

.qty-input {
  width: 30px;
  text-align: center;
  border: none;
  font-weight: bold;
}

.delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  opacity: 0.5;
}

.warranty-option {
  background-color: #eefbf6; /* Açık yeşil */
  padding: 1rem;
  margin-top: 1.5rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.select-link {
  margin-left: auto;
  color: #333;
  text-decoration: underline;
  font-weight: bold;
}

.continue-shopping a {
  color: #333;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9rem;
}

/* --- SAĞ TARAF (ÖZET) --- */
.cart-summary {
  flex: 1; /* Dar alan */
  width: 100%;
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.cart-summary h2 {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: #666;
  font-size: 0.95rem;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
}

.checkout-btn {
  width: 100%;
  background-color: #ff6000;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1.5rem;
  cursor: pointer;
  transition: background 0.3s;
}

.checkout-btn:hover {
  background-color: #e65600;
}

.coupon-area {
  margin-top: 1.5rem;
  text-align: center;
  border-top: 1px solid #eee;
  padding-top: 1rem;
  color: #333;
  cursor: pointer;
  font-weight: 500;
}
</style>