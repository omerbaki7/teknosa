<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// 1. SLIDER VERİLERİ (En Üst)
const slides = ref([
  { id: 1, image: '/images/slider1.webp', alt: 'Ana Manşet 1' },
  { id: 2, image: '/images/slider2.webp', alt: 'Ana Manşet 2' },
  { id: 3, image: '/images/slider3.webp', alt: 'Ana Manşet 3' },
  { id: 3, image: '/images/slider4.webp', alt: 'Ana Manşet 4' },
  { id: 3, image: '/images/slider5.webp', alt: 'Ana Manşet 5' }
]);

// 2. KAMPANYA KUTULARI (Orta - 4'lü)
const banners = ref([
 { id: 1, image: '/images/banner1.jpeg', alt: 'Kampanya 1' },
  { id: 2, image: '/images/banner2.png', alt: 'Kampanya 2' },
  { id: 3, image: '/images/banner3.jpeg', alt: 'Kampanya 3' },
  { id: 4, image: '/images/banner4.jpeg', alt: 'Kampanya 4' }
]);

// 3. GENİŞ BANNERLAR (En Alt - 2'li - YENİ)
const wideBanners = ref([
  { id: 1, image: '/images/wide1.webp', alt: 'Apple Fırsatları' },
  { id: 2, image: '/images/wide2.webp', alt: 'Dyson Fırsatları' }
]);

// --- SLIDER MANTIĞI ---
const currentSlide = ref(0);
let autoPlayInterval = null;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};
const goToSlide = (index) => {
  currentSlide.value = index;
};
const startAutoPlay = () => {
  autoPlayInterval = setInterval(nextSlide, 5000);
};
const stopAutoPlay = () => {
  clearInterval(autoPlayInterval);
};
onMounted(() => { startAutoPlay(); });
onUnmounted(() => { stopAutoPlay(); });
</script>

<template>
  <section class="hero-section">
    <div class="container">
      
      <div class="main-slider" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
        <div class="slider-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div v-for="slide in slides" :key="slide.id" class="slide-item">
            <img :src="slide.image" :alt="slide.alt" />
          </div>
        </div>
        <button class="nav-btn prev" @click="prevSlide">❮</button>
        <button class="nav-btn next" @click="nextSlide">❯</button>
        <div class="dots">
          <span v-for="(slide, index) in slides" :key="index" class="dot" :class="{ active: index === currentSlide }" @click="goToSlide(index)"></span>
        </div>
      </div>

      <div class="campaign-grid">
         <div v-for="banner in banners" :key="banner.id" class="campaign-item">
            <a href="#">
              <img :src="banner.image" :alt="banner.alt" class="banner-img" />
            </a>
         </div>
      </div>

      <div class="wide-banners-grid">
         <div v-for="wide in wideBanners" :key="wide.id" class="wide-item">
            <a href="#">
              <img :src="wide.image" :alt="wide.alt" class="wide-img" />
            </a>
         </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding: 20px 0;
  background-color: #f4f4f4;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* --- SLIDER STİLLERİ --- */
.main-slider {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  background-color: #ddd;
}
.slider-track { display: flex; transition: transform 0.5s ease-in-out; }
.slide-item { min-width: 100%; }
.slide-item img { width: 100%; height: auto; display: block; object-fit: cover; }
.nav-btn {
  position: absolute; top: 50%; transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.7); border: none;
  width: 40px; height: 40px; border-radius: 50%; font-size: 1.2rem;
  cursor: pointer; color: #333; z-index: 10; transition: all 0.3s;
}
.nav-btn:hover { background-color: white; color: #ff6000; }
.prev { left: 15px; } .next { right: 15px; }
.dots {
  position: absolute; bottom: 15px; left: 50%; transform: translateX(-50%);
  display: flex; gap: 8px;
}
.dot { width: 10px; height: 10px; background-color: rgba(255, 255, 255, 0.5); border-radius: 50%; cursor: pointer; }
.dot.active { background-color: #ff6000; transform: scale(1.2); }

/* --- 4'LÜ KAMPANYA GRID STİLLERİ --- */
.campaign-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Tablette 2 yan yana */
  gap: 20px;
  margin-top: 20px;
}

/* Bilgisayarda 4 yan yana */
@media (min-width: 1024px) {
  .campaign-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.campaign-item {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}
.campaign-item:hover { transform: translateY(-5px); }
.banner-img { width: 100%; height: 100%; object-fit: cover; display: block; }

/* GENİŞ BANNERLAR (2'Lİ) --- */
.wide-banners-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 20px;
}
@media (min-width: 768px) {
  .wide-banners-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.wide-item {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}
.wide-item:hover { transform: translateY(-5px); }
.wide-img { width: 100%; height: auto; object-fit: cover; display: block; }
</style>