<script setup>
import { RouterLink } from 'vue-router';
import BaseInput from '@/components/atoms/BaseInput.vue';
import BaseButton from '@/components/atoms/BaseButton.vue';
</script>

<template>
  <div class="login-layout">
    <header class="login-header">
      <router-link to="/">
        <img src="/images/teknosa-logo.svg" alt="Teknosa" class="auth-logo">
      </router-link>
    </header>

    <main class="auth-page">
      <div class="auth-box">
        <h1 class="auth-title">Teknosa'ya Hoş Geldiniz</h1>
        <div class="tab-buttons">
          <button class="tab-btn active">Üye Girişi</button>
          <router-link to="/register" class="tab-btn">Üye Ol</router-link>
        </div>
        <form class="auth-form" @submit.prevent>
          <div class="input-group"><BaseInput placeholder="E-Posta / Cep Telefonu" /></div>
          <div class="btn-group"><BaseButton text="Devam Et" variant="primary" :fullWidth="true" /></div>
        </form>
        <div class="or-divider">veya</div>
        <div class="social-login">
          <div class="social-item"><button class="social-circle google">G</button><span>Google ile Bağlan</span></div>
          <div class="social-item"><button class="social-circle facebook">f</button><span>Facebook ile Bağlan</span></div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.login-layout { display: flex; flex-direction: column; min-height: 100vh; background-color: #f7f7f7; font-family: Arial, sans-serif; }
.login-header { background-color: #f76e11; padding: 15px 0; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
.auth-logo { height: 80px; width: auto; display: inline-block; }
.auth-page { flex: 1; display: flex; justify-content: center; align-items: center; padding: 40px 20px; }
.auth-box { background-color: white; width: 100%; max-width: 480px; padding: 40px 50px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); text-align: center; }
.auth-title { font-size: 20px; font-weight: 700; color: #2d364e; margin-bottom: 30px; }
.tab-buttons { display: flex; justify-content: center; gap: 20px; margin-bottom: 30px; border-bottom: 1px solid #eee; padding-bottom: 10px; }
.tab-btn { background: none; border: none; font-size: 14px; font-weight: 600; color: #999; cursor: pointer; padding-bottom: 5px; text-decoration: none; }
.tab-btn.active { color: #2d364e; border-bottom: 3px solid #2d364e; }
.input-group { margin-bottom: 20px; }
.btn-group { margin-top: 10px; }
.or-divider { margin: 30px 0; font-size: 12px; color: #999; position: relative; }
.or-divider::before, .or-divider::after { content: ""; position: absolute; top: 50%; width: 40%; height: 1px; background-color: #eee; }
.or-divider::before { left: 0; } .or-divider::after { right: 0; }
.social-login { display: flex; justify-content: center; gap: 40px; }
.social-item { display: flex; flex-direction: column; align-items: center; font-size: 11px; color: #666; gap: 8px; }
.social-circle { width: 50px; height: 50px; border-radius: 50%; border: 1px solid #e0e0e0; background: white; font-size: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; }
.social-circle:hover { box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
.google { color: #DB4437; } .facebook { color: #4267B2; }
</style>