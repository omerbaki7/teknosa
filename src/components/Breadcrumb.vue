<script setup>
defineProps({
  productName: {
    type: String,
    required: true
  }
});
</script>

<template>
  <nav class="breadcrumb">
    <ul class="breadcrumb-list">
      <li>
        <router-link to="/">Ana Sayfa</router-link>
      </li>
      <li class="separator">›</li>
      <li>
        <a href="#" class="category-link">Teknoloji</a>
      </li>
      <li class="separator">›</li>
      <li class="active">
        {{ productName }}
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.breadcrumb {
  margin-bottom: 1rem;
  font-size: 0.85rem;
  color: #666;
}

.breadcrumb-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.breadcrumb-list li a {
  text-decoration: none;
  color: #666;
  transition: color 0.2s;
}

.breadcrumb-list li a:hover {
  color: #ff6000;
  text-decoration: underline;
}

.separator {
  margin: 0 0.5rem;
  color: #999;
}

.active {
  color: #333;
  font-weight: bold;
  /* Uzun isimlerde taşmayı önle */
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
}
</style>