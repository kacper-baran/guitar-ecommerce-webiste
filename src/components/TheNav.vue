<template>
  <nav id="navbar">
    <div class="container">
      <div class="logo">
        <IconMilitaryAward size="55" stroke-width="1"></IconMilitaryAward>
      </div>
      <ul class="menu" :class="{ menuActive: menuActive }">
        <li>
          <router-link class="nav-link" @click="closeMenu" :to="{ name: 'home' }">
            Home
          </router-link>
        </li>
        <li>
          <a class="nav-link" @click="closeMenu" href="#products"> Products </a>
        </li>
        <li>
          <a class="nav-link" @click="closeMenu" href="#about"> About </a>
        </li>
        <li>
          <a class="nav-link" @click="closeMenu" href="#contact"> Contact </a>
        </li>
        <li>
          <a class="nav-link" @click="closeMenu" href="#artist"> Artist </a>
        </li>
      </ul>
      <div class="controls">
        <div class="cart-icon">
          <IconShoppingCart></IconShoppingCart>
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
</template>

<script setup>
import { IconShoppingCart, IconMilitaryAward } from '@tabler/icons-vue'
import { ref } from 'vue'
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
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 1px solid white;
    aspect-ratio: 1;
    width: 60px;
    color: white;
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
    justify-content: center;
    gap: 3rem;
    inset: 0;
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
    @for $i from 1 through 4 {
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
    transition: all 0.3s ease-out;
    &:first-child {
      top: 0;
    }

    &:last-child {
      bottom: 0;
    }
    &:nth-child(2) {
      left: 33.3%;
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
    position: absolute;
    rotate: -135deg;
    top: 6px;
  }
  &.active .hamburger-item:last-child {
    bottom: 6px;
    rotate: 135deg;
  }

  &.active .hamburger-item:nth-child(2) {
    left: 0;
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

@media (min-width: 880px) {
  nav {
    .menu {
      position: relative;
      inset: auto;
      height: auto;
      width: auto;
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
}
</style>
