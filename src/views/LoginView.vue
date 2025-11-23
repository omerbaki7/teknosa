<template>
  <div class="login-layout">
    <header class="login-header">
      <RouterLink to="/">
        <img src="/images/teknosa-logo.svg" alt="Teknosa Logo" class="auth-logo">
      </RouterLink>
    </header>

    <main class="auth-page">
      <div class="auth-box">
        <h1 class="auth-title">Teknosa'ya Hoş Geldiniz</h1>
        
        <div class="tab-buttons">
          <button class="tab-button active">Üye Girişi</button>
          <RouterLink to="/register" class="tab-button">Üye Ol</RouterLink>
        </div>

        <form class="auth-form" @submit.prevent>
          <input type="text" placeholder="E-Posta / Cep Telefonu" class="form-input">
          <button class="devam-et-btn">Devam Et</button>
        </form>

        <div class="or-divider">veya</div>
        
        <div class="social-login">
          <div class="social-option">
            <button class="social-btn google-btn">G</button>
            <span class="social-label">Google ile Bağlan</span>
          </div>
          <div class="social-option">
            <button class="social-btn facebook-btn">f</button>
            <span class="social-label">Facebook ile Bağlan</span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.login-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f7f7f7;
}

.login-header {
  background-color: #ff6000;
  padding: 1rem 0;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.auth-logo {
  height: 80px;
  width: auto;
  display: inline-block;
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

.auth-form { text-align: left; }

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
.devam-et-btn:hover { background-color: #e65600; }

.or-divider {
  margin: 2rem 0;
  color: #888;
  font-size: 0.9rem;
}

.social-login {
  display: flex;
  justify-content: center;
  gap: 3rem;
}
.social-option { text-align: center; }

.social-btn {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 1px solid #ddd;
  background-color: white;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  transition: all 0.3s ease;
}
.social-btn:hover {
    border-color: #aaa;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.google-btn { color: #DB4437; }
.facebook-btn { color: #4267B2; }

.social-label {
  display: block;
  margin-top: 0.75rem;
  font-size: 0.8rem;
  color: #555;
}
</style>