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
      <div class="auth-box register-box">
        <h1 class="auth-title">Teknosa'ya Hoş Geldiniz</h1>
        
        <div class="tab-buttons">
          <router-link to="/login" class="tab-btn">Üye Girişi</router-link>
          <button class="tab-btn active">Üye Ol</button>
        </div>

        <form class="auth-form" @submit.prevent>
          <div class="form-row">
            <div class="input-wrapper">
              <BaseInput placeholder="Ad" />
            </div>
            <div class="input-wrapper">
              <BaseInput placeholder="Soyad" />
            </div>
          </div>

          <div class="input-group">
            <BaseInput placeholder="E-Posta" type="email" />
          </div>
          <div class="input-group">
            <BaseInput placeholder="(5xx) xxx xx xx" type="tel" />
          </div>
          <div class="input-group">
            <BaseInput placeholder="Şifre" type="password" />
          </div>
          
          <div class="checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox"> Profilleme ve Kişiselleştirme İzni
              </label>
              <label class="checkbox-label">
                <input type="checkbox"> İletişim İzinleri
              </label>
          </div>
          
          <div class="banner-wrapper">
              <img src="/images/campaign-collage.webp" alt="TeknoClub Fırsatları" class="full-banner-img">
          </div>

          <div class="btn-group">
            <BaseButton text="Üye Ol" variant="primary" :fullWidth="true" />
          </div>
          
          <p class="terms-text">
              Üye ol butonuna basarak <a href="#">üyelik sözleşmesini</a> okuduğunuzu ve kabul ettiğinizi onaylıyorsunuz.
          </p>
        </form>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* CSS Kodları */
.login-layout { display: flex; flex-direction: column; min-height: 100vh; background-color: #f7f7f7; font-family: Arial, sans-serif; }
.login-header { background-color: #f76e11; padding: 15px 0; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
.auth-logo { height: 40px; width: auto; }
.auth-page { flex: 1; display: flex; justify-content: center; align-items: center; padding: 40px 20px; }
.auth-box { background-color: white; width: 100%; max-width: 520px; padding: 40px 50px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); text-align: center; }
.auth-title { font-size: 20px; font-weight: 700; color: #2d364e; margin-bottom: 30px; }
.tab-buttons { display: flex; justify-content: center; gap: 20px; margin-bottom: 30px; border-bottom: 1px solid #eee; padding-bottom: 10px; }
.tab-btn { background: none; border: none; font-size: 14px; font-weight: 600; color: #999; cursor: pointer; padding-bottom: 5px; text-decoration: none; }
.tab-btn.active { color: #2d364e; border-bottom: 3px solid #2d364e; }
.form-row { display: flex; gap: 15px; margin-bottom: 20px; }
.input-wrapper { flex: 1; }
.input-group { margin-bottom: 20px; }
.checkbox-group { text-align: left; margin-bottom: 20px; font-size: 12px; color: #666; }
.checkbox-label { display: block; margin-bottom: 8px; cursor: pointer; }
.checkbox-label input { margin-right: 8px; }
.banner-wrapper { margin-bottom: 20px; width: 100%; }
.full-banner-img { width: 100%; height: auto; display: block; border-radius: 4px; }
.terms-text { font-size: 11px; color: #999; text-align: center; margin-top: 20px; line-height: 1.4; }
.terms-text a { color: #f76e11; text-decoration: none; font-weight: bold; }
</style>