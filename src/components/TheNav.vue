<template>
  <nav id="navbar">
    <div class="container">
      <router-link :to="{ name: 'home' }" class="logo">
        <IconMilitaryAward size="55" stroke-width="1"></IconMilitaryAward>
      </router-link>
      <ul class="menu" :class="{ menuActive: menuActive }">
        <li>
          <router-link class="nav-link" @click="closeMenu" :to="{ name: 'home' }">
            Home
          </router-link>
        </li>
        <li>
          <router-link
            class="nav-link"
            @click="closeMenu"
            :to="{ name: 'home', hash: '#products' }"
          >
            Products
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" @click="closeMenu" :to="{ name: 'home', hash: '#about' }">
            About
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" @click="closeMenu" :to="{ name: 'home', hash: '#contact' }">
            Contact
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" @click="closeMenu" :to="{ name: 'home', hash: '#artists' }">
            Artist
          </router-link>
        </li>
      </ul>
      <div class="controls">
        <div class="cart-icon" @click="handleCart">
          <IconShoppingCart></IconShoppingCart>
          <div class="cart-size" v-if="productStore.cart.length !== 0">
            {{ cartLength }}
          </div>
        </div>
        <button class="hamburger desktop" :class="{ active: hamburgerActive }" @click="handleMenu">
          <div class="hamburger__inner">
            <div class="hamburger-item"></div>
            <div class="hamburger-item"></div>
            <div class="hamburger-item"></div>
          </div>
        </button>
      </div>
    </div>
  </nav>
  <CartMenu :active="cartActive" @closeBtnClicked="handleCart"></CartMenu>
</template>

<script setup>
import CartMenu from './CartMenu.vue'
import { IconShoppingCart, IconMilitaryAward } from '@tabler/icons-vue'
import { ref, computed } from 'vue'
import { useProductStore } from '/src/store/productsStore.js'
const productStore = useProductStore()
const menuActive = ref(false)
const hamburgerActive = ref(false)

const body = document.querySelector('body')
const handleMenu = () => {
  hamburgerActive.value = !hamburgerActive.value
  menuActive.value = !menuActive.value
  body.classList.toggle('locked')
}

const closeMenu = () => {
  menuActive.value = false
  hamburgerActive.value = false
  body.classList.remove('locked')
}

let prevScrollpos = window.pageYOffset
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset
  if (menuActive.value !== true) {
    if (prevScrollpos > currentScrollPos) {
      document.getElementById('navbar').style.top = '0'
    } else {
      document.getElementById('navbar').style.top = '-130px'
    }
    prevScrollpos = currentScrollPos
  }
}
const cartActive = ref(false)
const handleCart = () => {
  cartActive.value = !cartActive.value
}

const cartLength = computed(() => {
  let length = 0
  productStore.cart.forEach((el) => {
    length += el.amount
  })
  return length
})
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  background-color: black;
  width: 100%;
  top: 0;
  padding: 1em;
  padding-block: 0.4rem;
  transition: top 0.3s ease-in;
  z-index: 10;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1600px;
    margin-inline: auto;
    padding-inline: 1rem;
  }
  .cart-icon {
    position: relative;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 1px solid white;
    aspect-ratio: 1;
    width: 60px;
    color: white;
    .cart-size {
      position: absolute;
      bottom: 0;
      right: -10px;
      aspect-ratio: 1;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      color: black;
      font-weight: 700;
      text-align: center;
      background-color: #fff;
    }
  }
  .controls {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .menu {
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    justify-content: space-around;
    inset: 0;
    padding-block: 3rem;
    background-color: black;
    translate: 120vw;
    transition: translate 0.3s ease-out;
    z-index: 100;
    &.menuActive {
      translate: 0;
    }
    li {
      translate: 120vw 0;
      transition: 0.4s ease-out;
    }
  }
  .menuActive {
    li {
      translate: 0 0;
    }
    @for $i from 1 through 5 {
      $delay: $i * 0.1s;
      li:nth-of-type(#{$i}) {
        transition-delay: $delay;
      }
    }
  }

  .logo {
    color: white;
    cursor: pointer;
  }
}

.hamburger {
  position: relative;
  background-color: transparent;
  padding: 1em;
  width: 40px;
  height: 30px;
  border: none;
  z-index: 1000;
  cursor: pointer;
  &-item {
    position: absolute;
    height: 4px;
    width: 100%;
    background-color: white;
    transition: all 0.2s ease-out;
    &:first-child {
      left: 0;
      top: 0;
    }

    &:last-child {
      left: 0;
      bottom: 0;
    }
    &:nth-child(2) {
      left: 0;
      top: 50%;
      translate: 0% -50%;
    }
  }
  &.active .hamburger-item:first-child,
  &.active .hamburger-item:last-child {
    right: 0;
    width: 60%;
  }

  &.active .hamburger-item:first-child {
    left: 15px;

    position: absolute;
    rotate: -135deg;
    top: 6px;
  }
  &.active .hamburger-item:last-child {
    left: 15px;

    bottom: 6px;
    rotate: 135deg;
  }

  &.active .hamburger-item:nth-child(2) {
    left: -5px;
    width: 90%;
  }
}

.nav-link {
  position: relative;
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  color: white;
  &::before {
    content: '';
    position: absolute;
    bottom: 0px;
    left: -15px;
    height: 100%;
    width: 3px;
    scale: 0;
    background-color: white;
    translate: -50%;
    transition: scale 0.3s;
  }
  &:hover::before {
    scale: 1;
  }
}

.cart-icon {
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
  &:hover {
    background-color: #fff;
    color: black;
  }
}

@media (min-width: 880px) {
  nav {
    .menu {
      position: relative;
      inset: auto;
      height: auto;
      width: auto;
      gap: 3rem;
      padding-block: 0rem;

      translate: 0;
      li {
        translate: 0 0;
      }
    }

    ul,
    .auth,
    .menu {
      flex-direction: row;
    }

    .desktop {
      display: none;
    }
  }

  .nav-link {
    &::before {
      bottom: -6px;
      left: 50%;
      height: 3px;
      width: 100%;
    }
    &:hover::before {
      scale: 1;
    }
  }
}
</style>
