<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'primary' // primary (turuncu), secondary (siyah), outline (çerçeveli)
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <button :class="['base-btn', variant, { 'full-width': fullWidth }]">
    {{ text }}
  </button>
</template>

<style scoped>
.base-btn {
  border: none;
  border-radius: 4px; /* Teknosa genelde 4px radius kullanır */
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Turuncu Buton (Sepete Ekle, Üye Ol vb.) */
.primary {
  background-color: #f76e11; /* Orijinal Teknosa Turuncusu */
  color: white;
}
.primary:hover {
  background-color: #d95c00;
}

/* Siyah Buton (Tüm Ürünler vb.) */
.secondary {
  background-color: #333;
  color: white;
}

/* Şeffaf/Çerçeveli Buton */
.outline {
  background-color: transparent;
  border: 1px solid #ccc;
  color: #333;
}

.full-width {
  width: 100%;
}
</style>