<template>
  <section id="products">
    <h2>Our most <span class="accent"> popular </span> offers</h2>
    <div class="arrows">
      <div class="arrow-left" @click="handleProducts(false)">
        <IconArrowNarrowLeft size="50" color="white" stroke-width="1"></IconArrowNarrowLeft>
      </div>
      <div class="arrow-right" @click="handleProducts(true)">
        <IconArrowNarrowRight size="50" color="white" stroke-width="1"></IconArrowNarrowRight>
      </div>
    </div>
    <div class="card-container">
      <div class="card">
        <div class="img-container">
          <img src="/src/assets/img/ibanez.jpeg" alt="" />
        </div>
        <div class="text"><span>guitar</span><span>4000$</span></div>
      </div>
      <div class="card">
        <div class="img-container">
          <img src="/src/assets/img/martin.jpeg" alt="" />
        </div>

        <div class="text"><span>guitar</span><span>4000$</span></div>
      </div>
      <div class="card">
        <div class="img-container">
          <img src="/src/assets/img/adversary.png" alt="" />
        </div>
        <div class="text"><span>guitar</span><span>4000$</span></div>
      </div>
      <div class="card">
        <div class="img-container">
          <img src="/src/assets/img/esp.png" alt="" />
        </div>
        <div class="text"><span>guitar</span><span>4000$</span></div>
      </div>
      <div class="card">
        <div class="img-container">
          <img src="/src/assets/img/esp.png" alt="" />
        </div>
        <div class="text"><span>guitar</span><span>4000$</span></div>
      </div>
      <div class="card">
        <div class="img-container">
          <img src="/src/assets/img/esp.png" alt="" />
        </div>
        <div class="text"><span>guitar</span><span>4000$</span></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { IconArrowNarrowRight, IconArrowNarrowLeft } from '@tabler/icons-vue'

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
  max-width: 40%;
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
  display: flex;
  flex-direction: column;
  min-width: 340px;
  flex: 2 1 auto;

  max-height: 550px;
  padding: 0.4rem;

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
    span:last-of-type {
      font-size: 1.6rem;
      font-weight: 700;
    }
    span:first-of-type {
      font-size: 1.3rem;
      font-weight: 700;

      text-transform: uppercase;
    }
  }
}

@media (min-width: 768px) {
  h2 {
    width: 70%;
    margin-inline: auto;
  }
  .card {
    width: 50%;
  }
}
</style>
