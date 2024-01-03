<template>
  <section id="categories">
    <router-link class="acoustic" to="/electric-guitars">
      <div class="shadow"></div>
      <div class="arrow">
        <IconArrowNarrowRight size="48" />
      </div>
    </router-link>
    <router-link class="electric" to="/acoustic-guitars">
      <div class="shadow"></div>
      <div class="arrow">
        <IconArrowNarrowRight size="48" />
      </div>
    </router-link>
  </section>
</template>

<script setup>
import { IconArrowNarrowRight } from '@tabler/icons-vue'
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  color: white;
}
.electric,
.acoustic {
  position: relative;
  background-position: center;
  background-size: cover;
  height: 100vh;
  cursor: pointer;
}
.shadow {
  position: absolute;
  inset: 0;
  background-color: #000;
  opacity: 0.25;
}

.arrow {
  display: grid;
  place-items: center;
  color: white;
  position: absolute;
  bottom: 0;
  left: 50%;
  border: 2px solid white;
  width: 100px;
  border-radius: 50%;
  aspect-ratio: 1;
  translate: -50% -50%;
}

.electric {
  background-image: url('/src/assets/img/electric.jpeg');
}
.acoustic {
  background-image: url('/src/assets/img/acoustic.jpeg');
}

@media (min-width: 768px) {
  section {
    flex-direction: row;
  }
  .electric {
    width: 50%;
    background-image: url('/src/assets/img/electric.jpeg');
  }
  .acoustic {
    width: 50%;
    background-image: url('/src/assets/img/acoustic.jpeg');
  }
}
</style>
