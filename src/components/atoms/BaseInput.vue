<script setup>
defineProps({
  placeholder: String,
  type: {
    type: String,
    default: 'text'
  },
  modelValue: String // v-model desteği için
});

defineEmits(['update:modelValue']);
</script>

<template>
  <input 
    :type="type" 
    :placeholder="placeholder" 
    class="base-input"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped>
.base-input {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #dcdcdc; /* Teknosa gri */
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;
}

.base-input:focus {
  border-color: #f76e11; /* Odaklanınca turuncu olsun */
}
</style>