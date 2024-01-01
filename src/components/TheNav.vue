<template>
  <nav>
    <div class="logo">
      <div class="icon">
        <IconMilitaryAward size="55" stroke-width="1"></IconMilitaryAward>
      </div>
    </div>
    <ul class="menu">
      <li><a href="">Home</a></li>
      <li><a href="">Products</a></li>
      <li><a href="">Service</a></li>
      <li><a href="">Contact</a></li>
    </ul>
    <div class="cart-icon">
      <IconShoppingCart size="25" stroke-width="1"></IconShoppingCart>
    </div>
  </nav>
</template>

<script setup>
import { IconShoppingCart, IconMilitaryAward } from '@tabler/icons-vue'


</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 100%;
  padding-inline: 1rem;
  padding-block: .4rem;
  max-width: 1600px;
  margin-inline: auto;
  z-index: 10;
}
.cart-icon {
  display: grid;
  place-items: center;
  padding: 1rem;
  width: fit-content;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 1px solid white;
  z-index: 3;
}

.menu {
  display: flex;
  gap: 2rem;
  list-style: none;
  a {
    color: white;
  }
}

</style>
