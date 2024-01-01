<template>
  <header class="container">
    <h1>
      <span class="accent">luxury</span>
      guitars at
      <span class="icon-container">
        <IconArrowNarrowRight class="icon" size="88" />
        your
      </span>
      fingertips
    </h1>
    <div class="white-space"></div>
    <div class="hero-img">
      <div class="hero-shadow"></div>
    </div>
    <div class="text">
      <div class="text-container">
        <h2>about</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fuga a eius, iure quisquam
          praesentium. Assumenda inventore eum totam quisquam! Illo quam soluta debitis sit eaque
          voluptas? Aut quibusdam.
        </p>
      </div>
    </div>
  </header>
</template>

<script setup>
import { IconArrowNarrowRight } from '@tabler/icons-vue'
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1600px;
  margin-inline: auto;
  width: 100%;
  margin-top: 10vh;
}
.hero-img {
  position: relative;
  min-height: 90vh;
  width: 100%;
  background-image: url('/src/assets/img/guitar-2.jpeg');
  background-position: center;
  background-size: cover;
}

.icon-container {
  display: flex;
  align-items: center;
}
.icon {
  width: clamp(3rem, 10vw, 6rem);
}
.hero-shadow {
  position: absolute;
  inset: 0;
  background-color: black;
  opacity: 0.25;
}

h1 {
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 1rem;
  top: 50%;
  translate: 0 -100%;
  letter-spacing: 2px;
  font-size: clamp(3rem, 10vw, 6rem);
  z-index: 2;
}

.text-container {
  padding: 1em;
}

h2 {
  padding-bottom: 1rem;
}

p {
  font-size: 1.1rem;
  text-wrap: pretty;
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
  h1 {
    position: absolute;
    left: 50px;
    top: 0;
    padding-top: 3rem;
    translate: 0 0;
    width: 60%;
  }
  .text-container {
    position: absolute;
    bottom: 0;
    width: 33%;
    right: 50px;
    padding: 1em;
    padding-bottom: 3rem;
    z-index: 2;
  }
  .white-space {
    width: 15%;
  }
  .text {
    width: 33%;
  }
  .hero-img {
    width: 60%;
  }
}
</style>
