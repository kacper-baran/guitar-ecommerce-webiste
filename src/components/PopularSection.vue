<template>
  <section id="products">
    <div class="heading">
      <div class="sub-heading">
        <div class="sub-title">We combine traditional craftsmanship with modern design</div>
        <div class="logo">
          <IconMilitaryAward size="75" stroke-width="1" color="white"></IconMilitaryAward>
        </div>
      </div>
      <h2>Our most <span class="accent"> popular </span> offers</h2>
    </div>
    <div class="arrows">
      <div class="arrow-left" @click="handleProducts(false)">
        <IconArrowNarrowLeft size="50" color="white" stroke-width="1"></IconArrowNarrowLeft>
      </div>
      <div class="arrow-right" @click="handleProducts(true)">
        <IconArrowNarrowRight size="50" color="white" stroke-width="1"></IconArrowNarrowRight>
      </div>
    </div>
    <div class="card-container">
      <div class="card" v-for="guitar in productStore.products" :key="guitar.id">
        <router-link :to="'/' + guitar.id" class="link"></router-link>
        <div class="img-container">
          <img :src="guitar.img" :alt="guitar.title" />
        </div>
        <div class="text">
          <span>{{ guitar.title }}</span>
          <span>{{ guitar.price }}$</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { IconArrowNarrowRight, IconArrowNarrowLeft, IconMilitaryAward } from '@tabler/icons-vue'
import { useProductStore } from '/src/store/productsStore.js'

const productStore = useProductStore()

const handleProducts = (next) => {
  const cardsContainer = document.querySelector('.card-container')
  if (next) cardsContainer.scrollBy(323, 0)
  else cardsContainer.scrollBy(-323, 0)
}



</script>

<style lang="scss" scoped>
section {
  min-height: 100vh;
  max-width: 1200px;
  padding-block: clamp(3rem, 10vw, 6rem);
  margin-inline: auto;
}
h2 {
  text-align: center;
  font-size: clamp(3rem, 10vw, 5.5rem);
  margin-inline: auto;
}

.card-container {
  display: flex;
  max-width: 1400px;
  overflow-x: auto;
  scroll-behavior: smooth;
}

.arrows {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.arrow-right,
.arrow-left {
  display: grid;
  place-items: center;
  aspect-ratio: 1;
  width: 60px;
  cursor: pointer;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 340px;
  max-height: 550px;
  padding: 0.4rem;
  cursor: pointer;
  .link {
    position: absolute;
    inset: 0;
  }
  &:nth-child(even) {
    max-height: 480px;
  }

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }

  .text {
    display: flex;
    width: 100%;
    justify-content: space-between;
    span {
      font-weight: 700;
      text-transform: uppercase;
      text-wrap: balance;
    }
    span:last-of-type {
      font-size: 1.6rem;
    }
    span:first-of-type {
      font-size: 1.3rem;
    }
  }
}

.heading {
  padding: 1rem;
  width: 100%;
  .sub-heading {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    .logo {
      width: fit-content;
      right: 0;
    }
    .sub-title {
      font-weight: 700;
      left: 0;
      text-transform: uppercase;
      width: 23ch;
    }
  }
}

@media (min-width: 768px) {
  h2 {
    width: 80%;
    text-wrap: balance;
    margin-inline: auto;
  }
  .card {
    width: 50%;
  }
  .heading {
    justify-content: space-between;
    flex-direction: row;
  }
}
</style>
