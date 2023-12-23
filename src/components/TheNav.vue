<template>
  <nav>
    <div class="cart-icon">
      <IconShoppingCart></IconShoppingCart>
    </div>
  </nav>
</template>

<script setup>
import { IconShoppingCart } from '@tabler/icons-vue'
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  color: white;
  width: 100%;
  padding: 1rem;
  max-width: 1600px;
  margin-inline: auto;
  z-index: 3;
}
.cart-icon {
  position: absolute;
  display: grid;
  place-items: center;
  padding: 1rem;
  right: 15px;
  width: 60px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 1px solid white;
  z-index: 3;
}
</style>
