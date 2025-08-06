<template>
  <button 
    :class="{ 'main-button--active': isActive }"
    @click="$emit('click')"
    class="main-button"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MainButton',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click']
}
</script>

<style scoped>
.main-button {
  border: 1px solid #ff6b00 !important;
  border-radius: 8px !important;
  font-weight: bold !important;
  text-transform: uppercase !important;
  letter-spacing: 0.5px !important;
  padding: 15px 20px !important;
  height: 80px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-size: 1.1rem !important;
  width: 100% !important;
  cursor: pointer !important;
  color: #ff6b00 !important;
  background-color: #ffffff !important;
}

.main-button:hover {
  transform: translateY(-1px) !important;
  box-shadow: 0 2px 4px rgba(255, 107, 0, 0.3) !important;
  background-color: #ffdab5 !important;
  border-color: #e65a00 !important;
  color: #e65a00 !important;
}

.main-button--active {
  background-color: #ff6b00 !important;
  color: #ffffff !important;
}

.main-button--active:hover {
  background-color: #e65a00 !important;
  color: #ffffff !important;
  transform: translateY(-1px) !important;
  box-shadow: 0 2px 4px rgba(255, 107, 0, 0.4) !important;
}
</style> 