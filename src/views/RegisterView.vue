<template>
  <div class="login-layout"> <header class="login-header">
      <RouterLink to="/">
        <img src="/images/teknosa-logo.jpg" alt="Teknosa Logo" class="auth-logo">
      </RouterLink>
    </header>

    <main class="auth-page">
      <div class="auth-box">
        <h1 class="auth-title">Teknosa'ya Hoş Geldiniz</h1>
        
        <div class="tab-buttons">
          <RouterLink to="/login" class="tab-button">Üye Girişi</RouterLink>
          <button class="tab-button active">Üye Ol</button>
        </div>

        <form class="auth-form" @submit.prevent>
          <div class="name-fields">
            <input type="text" placeholder="Ad" class="form-input">
            <input type="text" placeholder="Soyad" class="form-input">
          </div>
          <input type="email" placeholder="E-Posta" class="form-input">
          <input type="tel" placeholder="(5xx) xxx xx xx" class="form-input">
          <input type="password" placeholder="Şifre" class="form-input">
          
          <div class="checkbox-group">
              <input type="checkbox" id="profile-izni">
              <label for="profile-izni">Profilleme ve Kişiselleştirme İzni</label>
          </div>
          <div class="checkbox-group">
              <input type="checkbox" id="iletisim-izni">
              <label for="iletisim-izni">İletişim İzinleri</label>
          </div>
          
          <div class="tekno-club-banner">
              <img src="https://i.teknosa.com/teknosa/tpl/assets/img/tekno-club-logo.svg" alt="TeknoClub">
              TeknoClub üyeliği ile kazanmak çok kolay!
          </div>

          <button class="devam-et-btn">Üye Ol</button>
          
          <p class="terms-text">
              Üye ol butonuna basarak <a href="#">üyelik sözleşmesini</a> okuduğunuzu ve kabul ettiğinizi onaylıyorsunuz.
          </p>
        </form>
      </div>
    </main>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
// Bu sayfa şimdilik sadece görüntüden ibaret
</script>

<style scoped>
/* LoginView ile BİREBİR AYNI stilleri kullanıyoruz */
.login-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f7f7f7;
}
.login-header {
  background-color: #ff6000;
  padding: 1.5rem 0;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.auth-logo {
  height: 40px;
  width: auto;
}
.auth-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 4rem 1rem;
}
.auth-box {
  background-color: white;
  padding: 2rem 3rem 3rem 3rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 450px;
  text-align: center;
}
.auth-title {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #333;
  font-weight: 600;
}
.tab-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}
.tab-button {
  padding: 0.6rem 1.5rem;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  color: #888;
  font-weight: 600;
  border-radius: 20px;
  transition: all 0.3s ease;
}
.tab-button.active {
  color: white;
  background-color: #383e5c;
}
.auth-form {
  text-align: left;
}
.form-input {
  width: 100%;
  padding: 0.9rem 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}
.devam-et-btn {
  width: 100%;
  padding: 1rem;
  background-color: #ff6000;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

/* KAYIT SAYFASINA ÖZEL EKLENEN STİLLER */
.name-fields {
  display: flex;
  gap: 1rem;
}
.name-fields .form-input {
  width: 50%; /* Ad ve Soyad yan yana %50 yer kaplasın */
}
.checkbox-group {
    text-align: left;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    color: #666;
}
.checkbox-group label {
    margin-left: 0.5rem;
}
.tekno-club-banner {
    background-color: #f0f8ff;
    border: 1px solid #e0eaf3;
    padding: 1rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    text-align: center;
    color: #333;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}
.tekno-club-banner img {
    height: 20px;
}
.terms-text {
    font-size: 0.8rem;
    color: #999;
    text-align: center;
    margin-top: 1.5rem;
}
.terms-text a {
    color: #ff6000;
    text-decoration: none;
}
</style>