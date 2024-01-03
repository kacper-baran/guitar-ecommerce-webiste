<template>
  <div class="wrapper">
    <div><fenderIcon></fenderIcon></div>
    <div><ernieballIcon></ernieballIcon></div>
    <div><gibsonIcon></gibsonIcon></div>
    <div><fenderIcon></fenderIcon></div>
    <div><ernieballIcon></ernieballIcon></div>
  </div>
</template>

<script setup>
import ernieballIcon from './icons/ernieballIcon.vue'
import fenderIcon from './icons/fenderIcon.vue'
import gibsonIcon from './icons/gibsonIcon.vue'
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-inline: auto;
  gap: 4rem;
  padding-block: clamp(3rem, 10vw, 5rem);
  padding-inline: 2rem;
  border-radius: 26px;
  max-width: 1400px;
  background-color: #121212;
  div {
    height: 70px;
    & > * {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
