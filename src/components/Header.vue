<template>
  <header class="teknosa-header">
    
    <div class="header-top-bar">
      <nav class="top-nav">
        <a href="#" class="top-link">Sipariş Takibi</a>
        <a href="#" class="top-link">Alışveriş Kredisi</a>
        <a href="#" class="top-link">Mağazalarımız</a>
        <a href="#" class="top-link">Yardım Merkezi</a>
        <a href="#" class="top-link">Kurumsal Satış</a>
      </nav>
    </div>

    <div class="header-main-bar">
      <div class="container">
        <a href="/" class="logo-wrapper">
          <img src="/images/teknosa-logo.jpg" alt="Teknosa 25. Yıl" class="teknosa-logo">
        </a>

        <div class="search-box">
          <input type="text" placeholder="Ürün, kategori veya marka ara" />
          <button class="search-btn">
            🔍
          </button>
        </div>

        <div class="user-actions">
          <div class="action-item">
            <span class="icon">👤</span>
            <span class="label">Giriş Yap <br> Üye Ol</span>
          </div>
          <div class="action-item">
            <span class="icon">🛒</span>
            <span class="label">Sepetim</span>
            <span class="cart-count">0</span>
          </div>
        </div>
      </div>
    </div>

    <div class="header-category-bar">
      <div class="container">
        <button class="all-products-btn">
          <span class="icon">☰</span> Tüm Ürünler
        </button>
        <nav class="category-nav">
          <a href="#" class="category-link">Telefon & Aksesuar</a>
          <a href="#" class="category-link">Bilgisayar & Tablet</a>
          <a href="#" class="category-link">TV, Ses ve Görüntü</a>
          <a href="#" class="category-link">Beyaz Eşya</a>
          <a href="#" class="category-link">Küçük Ev Aletleri</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
// Script setup şimdilik boş kalacak
</script>

<style scoped>
/* Genel Stil Sıfırlamaları */
.teknosa-header * {
  box-sizing: border-box;
}
.teknosa-header a {
    text-decoration: none;
}

/* KATMANDAN 1 STİLLERİ */
.header-top-bar {
  background-color: #383e5c; 
  padding: 0.5rem 0;
  color: #fff;
}

.top-nav {
  max-width: 1200px;
  margin: 0 auto;
  text-align: right;
  padding: 0 20px;
}

.top-link {
  color: #ccc;
  text-decoration: none;
  font-size: 0.8rem;
  margin-left: 1.5rem;
}

/* KATMANDAN 2 STİLLERİ */
.header-main-bar {
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
}

.header-main-bar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* LOGO STİLLERİ */
.logo-wrapper {
  display: flex; 
  align-items: center;
  margin-right: 20px;
}

.teknosa-logo {
    height: 40px; 
    width: auto;
    display: block;
}

.search-box {
  display: flex;
  flex-grow: 1; 
  max-width: 600px;
  margin: 0 2rem;
  border: 2px solid #ff6000;
  border-radius: 8px;
  overflow: hidden; 
}

.search-box input {
  flex-grow: 1;
  border: none;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  outline: none;
}

.search-btn {
  background-color: #ff6000;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 1rem;
}

.user-actions {
  display: flex;
  gap: 1.5rem;
}

.action-item {
  text-align: center;
  cursor: pointer;
  position: relative;
  color: #333;
}

.action-item .icon {
  font-size: 1.5rem;
  display: block;
  margin-bottom: 3px;
}

.action-item .label {
  font-size: 0.8rem;
  line-height: 1.1;
  color: #333;
}

.action-item .cart-count {
  position: absolute;
  top: 5px;
  right: -5px;
  background-color: #ff6000;
  color: white;
  border-radius: 50%;
  padding: 0.1rem 0.4rem;
  font-size: 0.7rem;
  font-weight: bold;
}

/* KATMANDAN 3 STİLLERİ */
.header-category-bar {
  background-color: #f7f7f7;
  padding: 0.75rem 0;
}

.header-category-bar .container {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.all-products-btn {
  background-color: #000; 
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  cursor: pointer;
  margin-right: 2rem;
  white-space: nowrap; 
}

.category-nav {
  display: flex;
  gap: 1.5rem;
  flex-grow: 1;
}

.category-link {
  text-decoration: none;
  color: #333;
  font-size: 0.9rem;
  padding: 0.5rem 0;
  white-space: nowrap;
}
</style>