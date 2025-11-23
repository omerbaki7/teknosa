<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const isDropdownOpen = ref(false);

const toggleDropdown = (state) => {
  isDropdownOpen.value = state;
};
</script>

<template>
  <header class="teknosa-header">
    
    <div class="header-top-bar">
      <div class="container nav-container">
        <nav class="top-nav">
          <a href="#">Sipariş Takibi</a>
          <a href="#">Alışveriş Kredisi</a>
          <a href="#">Mağazalarımız</a>
          <a href="#">Yardım Merkezi</a>
          <a href="#">Kurumsal Satış</a>
          <a href="#">Teknosa Blog</a>
        </nav>
      </div>
    </div>

    <div class="header-main-bar">
      <div class="container main-container">
        
        <router-link to="/" class="logo-wrapper">
          <img src="/images/teknosa-logo.svg" alt="Teknosa" class="teknosa-logo">
        </router-link>

        <div class="search-container">
          <input type="text" placeholder="Ürün, kategori veya marka ara" class="search-input" />
          <button class="search-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
        </div>

        <div class="user-actions">
          <div class="brand-icons">
             <img src="/images/teknoclub-logo.svg" alt="TeknoClub" class="club-img">
          </div>

          <router-link to="/login" class="action-item">
            <img src="/images/user-icon.svg" class="action-icon" alt="Giriş">
            <div class="text-col">
                <span class="sub-text">Giriş Yap</span>
                <span class="main-text">Üye Ol</span>
            </div>
          </router-link>

          <router-link to="/cart" class="action-item">
            <img src="/images/cart-icon.svg" class="action-icon" alt="Sepet">
            <div class="text-col">
                <span class="sub-text">Sepetim</span>
            </div>
            <span class="cart-badge">1</span>
          </router-link>
        </div>

      </div>
    </div>

    <div class="header-category-bar">
      <div class="container category-container">
        
        <div class="left-part">
            <button class="all-products-btn">
            <span class="hamburger">☰</span> Tüm Ürünler
            </button>
            
            <nav class="main-categories">
            <a href="#">Telefon & Aksesuar</a>
            <a href="#">Bilgisayar & Tablet</a>
            <a href="#">TV, Ses ve Görüntü</a>
            <a href="#">Beyaz Eşya</a>
            <a href="#">Elektrikli Ev Aletleri</a>
            </nav>
        </div>

        <div class="vertical-divider"></div>

        <div class="right-part">
          <a href="#" class="promo-link color-black-friday">Black Friday</a>
          <a href="#" class="promo-link color-renewed">Yenilenmiş Ürünler</a>
          <a href="#" class="promo-link color-campaign">Kampanyalar</a>
          <a href="#" class="promo-link color-standard">Outlet</a>
          <a href="#" class="promo-link color-standard">Krediler</a>
          
          <a href="#" class="preo-img-link">
            <img src="/images/preo-logo.svg" alt="Preo Teknosa Markasıdır" class="preo-img">
          </a>

          <div class="tekno-hizmet-wrapper" @mouseenter="toggleDropdown(true)" @mouseleave="toggleDropdown(false)">
             <div class="hizmet-btn-img">
                <img src="/images/tekno-hizmet-logo.svg" alt="Tekno Hizmet" class="hizmet-img">
                <span class="arrow-icon-for-img">▼</span>
             </div>
             <div class="dropdown-menu" v-show="isDropdownOpen">
                <a href="#">İptal</a>
                <a href="#">İade</a>
                <a href="#">Arıza ve Onarım Hizmetleri ›</a>
                <a href="#">Kurulum Hizmetleri ›</a>
                <a href="#">Teknoloji Destek Paketleri ›</a>
                <a href="#">Hizmet Üyelik Paketleri ›</a>
                <a href="#">Ek Garanti ve Koruma ›</a>
                <a href="#">Eskisini Getir Yenisini Götür ›</a>
             </div>
          </div>
        </div>

      </div>
    </div>

  </header>
</template>

<style scoped>
* { box-sizing: border-box; }
a { text-decoration: none; color: inherit; }

.container {
  width: 100%;
  max-width: 1400px; 
  margin: 0 auto;
  padding: 0 15px;
}

/* --- 1. ÜST BAR --- */
.header-top-bar {
  background-color: #1f222f; 
  height: 32px;
  display: flex;
  align-items: center;
  font-family: 'Arial', sans-serif;
}
.nav-container {
  display: flex;
  justify-content: flex-end; 
}
.top-nav {
  display: flex;
  gap: 25px;
}

.header-top-bar a {
  color: #ffffff !important; 
  font-size: 11px;
  font-weight: bold;
  text-decoration: none;
  opacity: 1 !important;
}
.header-top-bar a:visited {
  color: #ffffff !important;
}
.header-top-bar a:hover {
  text-decoration: underline;
  color: #ffffff !important;
}

/* --- 2. ORTA BAR --- */
.header-main-bar {
  padding: 15px 0;
  background-color: #ffffff;
}
.main-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-wrapper { 
  margin-right: 40px; 
  display: flex; 
  align-items: center;
  padding-left: 0; 
}
.teknosa-logo { height: 55px; width: auto; }

.search-container {
  flex: 1;
  max-width: 900px;
  position: relative;
  display: flex;
  margin: 0 20px;
}
.search-input {
  width: 100%;
  height: 44px;
  border: 2px solid #f76e11;
  border-radius: 22px;
  padding: 0 50px 0 20px;
  font-size: 14px;
  color: #333;
  outline: none;
  background-color: #fff;
}
.search-btn {
  position: absolute;
  right: -2px;
  top: 0;
  height: 44px;
  width: 55px;
  background-color: #f76e11;
  border: 2px solid #f76e11;
  border-radius: 0 22px 22px 0;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-actions {
  display: flex;
  align-items: center;
  gap: 25px;
  margin-left: 10px;
}

.brand-icons { display: none; } 
@media (min-width: 1200px) { 
    .brand-icons { display: flex; align-items: center; } 
}
.club-img { height: 28px; width: auto; object-fit: contain; }

.action-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: #333;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
}

.action-icon {
  height: 38px;
  width: auto;
  margin-bottom: 4px;
  display: block;
}

.text-col { display: flex; flex-direction: column; line-height: 1.2; }
.sub-text { font-weight: 400; }
.main-text { font-weight: 700; }

.cart-badge {
  position: absolute;
  top: -2px;
  right: 0px;
  background-color: #f76e11;
  color: white;
  font-size: 11px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 10px;
}

/* --- 3. ALT BAR --- */
.header-category-bar {
  background-color: #f4f4f4;
  border-bottom: 1px solid #e5e5e5;
  height: 50px;
}
.category-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left-part { display: flex; align-items: center; height: 100%; }

.all-products-btn {
  background-color: #000;
  color: white;
  height: 34px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: bold;
  border: none;
  border-radius: 2px;
  margin-right: 20px;
  cursor: pointer;
}

.main-categories { display: flex; gap: 20px; }
.main-categories a {
    font-size: 13px;
    font-weight: 600;
    color: #333;
    white-space: nowrap;
    font-family: Arial, sans-serif;
}
.main-categories a:hover { color: #f76e11; }

.vertical-divider {
    width: 1px;
    height: 25px;
    background-color: #ccc;
    margin: 0 20px;
}

.right-part { display: flex; align-items: center; gap: 15px; flex: 1; justify-content: flex-end; }

.promo-link { font-size: 12px; font-weight: 700; white-space: nowrap; font-family: Arial, sans-serif; }
.color-black-friday { color: #9b59b6; }
.color-renewed { color: #e67e22; }
.color-campaign { color: #3498db; }
.color-standard { color: #333; }

.preo-img-link { margin-left: 10px; display: flex; align-items: center; }
.preo-img { height: 28px; width: auto; object-fit: contain; }

.tekno-hizmet-wrapper { position: relative; margin-left: 15px; cursor: pointer; }
.hizmet-btn-img { display: flex; align-items: center; gap: 5px; }
.hizmet-img { height: 28px; width: auto; object-fit: contain; }
.arrow-icon-for-img { font-size: 8px; color: white; background: #0033a0; border-radius: 50%; padding: 2px; display: flex; align-items: center; justify-content: center; width: 14px; height: 14px; }

.dropdown-menu {
    position: absolute; top: 35px; right: 0;
    background: white; border: 1px solid #ddd; width: 220px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.1); z-index: 999;
    display: flex; flex-direction: column;
    border-top: 3px solid #f76e11;
}
.dropdown-menu a { padding: 10px 15px; font-size: 12px; color: #333; border-bottom: 1px solid #eee; }
.dropdown-menu a:hover { background: #f5f5f5; color: #f76e11; }
</style>