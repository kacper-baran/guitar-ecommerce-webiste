<template>
  <section id="artist">
    <h2><span class="accent">Artists </span> We Work With</h2>
    <div class="shadow"></div>
    <button class="arrow one" @click="carouselHandler(false)">
      <IconArrowNarrowLeft size="35"></IconArrowNarrowLeft>
    </button>
    <button class="arrow two" @click="carouselHandler(true)">
      <IconArrowNarrowRight size="35"></IconArrowNarrowRight>
    </button>
    <div class="wrapper">
      <div class="artist-card" data-card="0">
        <img src="/src/assets/img/metallica.webp" alt="" />
        <div class="artist-card__text">
          <p>James Hetfield</p>
          <a href="#">read more</a>
        </div>
      </div>
      <div class="artist-card" data-card="1">
        <img src="/src/assets/img/sleep-token.jpeg" alt="" />
        <div class="artist-card__text">
          <p>IV aka Rhys Griffiths</p>
          <a href="#">read more</a>
        </div>
      </div>
      <div class="artist-card" data-card="2">
        <img src="/src/assets/img/dimitry.jpg" alt="" />
        <div class="artist-card__text">
          <p>Dimitry</p>
          <a href="#">read more</a>
        </div>
      </div>
      <div class="artist-card" data-card="3">
        <img src="/src/assets/img/tim-henson.jpeg" alt="" />
        <div class="artist-card__text">
          <p>Time Henson</p>
          <a href="#">read more</a>
        </div>
      </div>
      <div class="artist-card" data-card="4">
        <img src="/src/assets/img/mike-stringer.jpeg" alt="" />
        <div class="artist-card__text">
          <p>Mike Stringer</p>
          <a href="#">read more</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { IconArrowNarrowRight, IconArrowNarrowLeft } from '@tabler/icons-vue'

const carouselHandler = (next) => {
  const cards = document.querySelectorAll('.artist-card')
  cards.forEach((el) => {
    const buttons = document.querySelectorAll('.arrow')
    buttons.forEach((el) => {
      el.disabled = true
    })
    el.style.transition = ' top .5s ease-in-out,left .5s ease-in-out,transform .5s ease-in-out'
    if (next === true) {
      if (el.dataset.card == cards.length - 1) {
        el.style.transition = 'none'
        const buttons = document.querySelectorAll('.arrow')
        buttons.forEach((el) => {
          el.disabled = true
        })
        setTimeout(() => {
          el.style.transition =
            ' top .5s ease-in-out,left .5s ease-in-out,transform .5s ease-in-out'
          buttons.forEach((el) => {
            el.disabled = false
          })
        }, 500)
        el.dataset.card = '0'
      } else el.dataset.card++
    } else {
      if (el.dataset.card === '0') {
        el.style.transition = 'none'
        setTimeout(() => {
          el.style.transition =
            ' top .5s ease-in-out,left .5s ease-in-out,transform .5s ease-in-out'
          buttons.forEach((el) => {
            el.disabled = false
          })
        }, 500)
        el.dataset.card = cards.length - 1
      } else el.dataset.card--
    }
    console.log(el.dataset.card)
  })
}
</script>

<style lang="scss" scoped>
section {
  position: relative;
  background-color: #121212;
  .shadow {
    position: absolute;
    inset: 0;
    background-color: #0000001f;
    z-index: -2;
  }
  .wrapper {
    display: flex;
    align-items: flex-end;
    position: relative;
    background-image: url('/src/assets/img/bands-bg.jpeg');
    min-height: 750px;
    max-width: 100vw;
    border-radius: 26px;
    background-position: center;
    background-size: cover;
    perspective: 1500px;
    padding-block: clamp(3rem, 10vw, 6rem);
    overflow: hidden;
  }
  h2 {
    position: absolute;
    top: clamp(3rem, 10vw, 6rem);
    left: 50%;
    text-align: center;
    width: 100%;
    z-index: 20;
    translate: -50% 0;
    font-size: clamp(2rem, 10vw, 5.5rem);
    color: white;
    z-index: 5;
  }
  .artist-card {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 400px;
    overflow: hidden;
    background-color: transparent;
    border-radius: 10px;
    translate: -50%;
    transition:
      top 0.5s ease-in-out,
      left 0.5s ease-in-out,
      transform 0.5s ease-in-out,
      background-color 0.5s ease-in-out;
          -ms-transform-style: preserve-3d;


    img {
      width: 100%;
      height: 90%;
      object-fit: cover;
      object-position: center;
      border-radius: 10px;
    }
    &__text {
      opacity: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-inline: 1rem;
      padding-block: 0.3rem;

      p,
      a {
        font-weight: 700;
        color: white;
        font-size: 1.2rem;
        text-transform: uppercase;

        font-weight: 700;
        text-decoration: none;
      }
      a {
        font-size: 1rem;
      }
    }

    &[data-card='0'] {
      top: 40%;
      left: -100%;
      transform: rotate3d(1, -1, -1, -17deg);
      transition: none;
    }

    &[data-card='1'] {
      left: -100%;
      top: 42%;
      transform: rotate3d(1, -1, 1, -10deg);
      transition: opacity 0.5s;
    }
    &[data-card='2'] {
      left: 50%;
      top: 27%;
      background-color: #0000003f;
      transform: rotate3d(1, 0, 0, 14deg);
      .artist-card__text {
        opacity: 1;
      }
    }
    &[data-card='3'] {
      left: 200%;
      top: 42%;
      transform: rotate3d(1, 1, -1, -10deg);
      transition: opacity 0.5s;
    }

    &:where(:not([data-card='0'], [data-card='1'], [data-card='2'], [data-card='3'])) {
      top: 50%;
      left: 150%;
      transform: rotate3d(1, 1, 1, -17deg);
    }
  }

  .arrow {
    position: absolute;
    display: grid;
    place-items: center;
    background-color: #0000007f;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    z-index: 5;
    border: none;
    translate: 0 -50%;
  }
  .one,
  .two {
    color: white;
    cursor: pointer;
  }
  .one {
    left: 23%;
    top: 90%;
  }
  .two {
    right: 23%;
    top: 90%;
  }
}

@media (min-width: 600px) {
  section {
    .artist-card {
      &[data-card='2'] {
        left: 50%;
        top: 30%;
        background-color: #0000003f;
        .artist-card__text {
          opacity: 1;
        }
      }
    }
  }
}

@media (min-width: 768px) {
  section {
    .artist-card {
      width: 33%;
      &[data-card='0'] {
        top: 50%;
        left: -100%;
      }

      &[data-card='1'] {
        left: 0;
        top: 42%;
      }
      &[data-card='2'] {
        left: 50%;
        top: 35%;
      }
      &[data-card='3'] {
        left: 100%;
        top: 42%;
      }

      &:where(:not([data-card='0'], [data-card='1'], [data-card='2'], [data-card='3'])) {
        top: 50%;
        left: 150%;
      }
    }

    .one {
      top: 63%;
    }
    .two {
      top: 63%;
    }
  }
}
</style>
