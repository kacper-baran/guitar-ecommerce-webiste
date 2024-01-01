<template>
  <section id="popular">
    <h2>Our most <span class="accent"> popular </span> offers</h2>
    <div class="container">
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
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
section {
  min-height: 100vh;
  max-width: 1200px;
  margin-inline: auto;
}
h2 {
  text-align: center;
  font-size: clamp(3rem, 10vw, 5.5rem);
  padding-block: clamp(3rem, 10vw, 6rem);
  margin-inline: auto;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  display: grid;
  place-items: center;
  width: 100%;
  aspect-ratio: 1;
  min-height: 550px;
  padding: 1em;

  .img-container {
    display: grid;
    place-items: center;
    background-color: #fff;
    height: 100%;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
  }

  img {
    max-width: 100%;
    height: 400px;
  }
  .text {
    display: flex;
    width: 100%;
    font-size: 1.2rem;
    padding-block: 1rem;
    justify-content: space-between;
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
