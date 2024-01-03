<template>
  <section id="custom">
    <div class="wrapper">
      <div class="text">
        <h2>
          <div>
            <div class="small">
              <div>Our</div>
              <div>Exclusive</div>
              <div>Guitars</div>
            </div>
            <span>Quality </span>
          </div>
          <span>Custom </span>
          <span>Guitars - </span>
          <div class="last">
            <div>For</div>
            <div>You</div>
          </div>
        </h2>
        <p>
          We combine traditional craftsmanship with modern design to create truly special guitras,
          each guitar is a unique work
        </p>
        <a href="">Read more <IconArrowNarrowRight size="30"></IconArrowNarrowRight></a>
      </div>
      <div class="images">
        <img src="/src/assets/img/guitar-2.jpeg" alt="" />
        <div><p>get started</p></div>
        <img src="/src/assets/img/guitar-3.jpeg" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { IconArrowNarrowRight } from '@tabler/icons-vue'
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  max-width: 1400px;
  width: 100%;
}
section {
  display: flex;
  border-radius: 26px 26px 0 0;
  background-color: #121212;
  padding: 1rem;
  padding-block: clamp(3rem, 10vw, 6rem);
  min-height: 100vh;
  .images {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    img {
      border-radius: 8px;

      max-width: 100%;
      min-height: 500px;
      object-fit: cover;
    }
    div {
      display: grid;
      place-items: center;
      position: absolute;
      background-color: #fff;
      width: 140px;
      aspect-ratio: 1;
      color: #222;
      border-radius: 50%;
      p {
        text-transform: uppercase;
        font-weight: 700;
      }
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 2rem;
    h2 {
      font-size: clamp(2rem, 10vw, 6rem);
      div:first-of-type {
        span {
          margin-inline: auto;
        }
      }
      .last {
        display: flex;
        gap: 1rem;
        font-style: italic;
      }
      .small {
        display: flex;
        flex-direction: column;
        text-transform: uppercase;
        font-size: 15px;
        margin-top: 0.7rem;
        div {
          font-weight: 700;
        }
      }
    }
    p {
      text-transform: uppercase;
      font-weight: 700;
      font-size: clamp(0.8rem, 10vw, 1.2rem);
      margin-top: 1rem;
    }
    a {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      margin-top: 1rem;
      color: white;
      text-decoration: none;
      font-size: clamp(0.8rem, 10vw, 1.2rem);
    }
  }
}

@media (min-width: 1000px) {
  .wrapper {
    flex-direction: row;
    .images {
      width: 50%;

    }
    .text {
      width: 50%;
    }
  }
}

@media (min-width: 768px) {
  section {
    padding-inline: 3rem;
    .images {
      flex-direction: row;
      padding-left: 2rem;

      img {
        max-width: 50%;
      }
    }
  }
  .wrapper {
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
  h2 {
    display: flex;
    flex-direction: column;
    font-size: clamp(3rem, 10vw, 6rem);
    div:first-of-type {
      display: flex;
      span {
        margin-inline: auto;
      }
    }
    .last {
      display: flex;
      gap: 1rem;
      margin-left: 50px;
      font-style: italic;
    }
    .small {
      display: flex;
      flex-direction: column;
      text-transform: uppercase;
      font-size: 15px;
      margin-top: 0.7rem;
      div {
        font-weight: 700;
      }
    }
    span:nth-of-type(2) {
      margin-inline: auto;
    }
  }
}
</style>
