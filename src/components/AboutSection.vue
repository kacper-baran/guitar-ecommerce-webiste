<template>
  <section id="about">
    <div class="wrapper">
      <div class="image"></div>
      <div class="content">
        <div class="title">
          <div class="sub-title">Discover our Guitar collection</div>
          <h2>
            <span class="accent">Guitars</span> <span>- That Shine</span>
            <span class="accent">Over Time</span>
          </h2>
        </div>
        <div class="card-container">
          <div class="card"><span>Best</span> <span>Material</span></div>
          <div class="card">
            <Icon24Hours size="45" stroke-width="1" color="white"></Icon24Hours>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti.</p>
          </div>
          <div class="card">
            <IconTrophy size="45" stroke-width="1" color="white"></IconTrophy>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti.</p>
          </div>
          <div class="card">
            <IconTruckDelivery size="45" stroke-width="1" color="white"></IconTruckDelivery>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti.</p>
          </div>
          <div class="card"><img src="/src/assets/img/angus-young-guitar.jpeg" alt="" /></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon24Hours, IconTrophy, IconTruckDelivery } from '@tabler/icons-vue'
</script>

<style lang="scss" scoped>
section {
  min-height: 100vh;
  width: 100vw;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: 1rem;
  padding-block: clamp(3rem, 10vw, 5rem);
}
h2 {
  display: flex;
  flex-direction: column;
  font-size: clamp(3rem, 8vw, 5rem);
  padding-block: 1rem;
  .accent {
    width: 100%;
  }
}

.sub-title {
  font-weight: 700;
  text-transform: uppercase;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: 1rem;
  .image {
    display: none;
    background-size: cover;
    background-position: center;
    height: 100%;
    background-image: url('/src/assets/img/angus-young.jpeg');
    border-radius: 20px;
  }
  .content {
    display: flex;
    flex-direction: column;
    // align-items: center;
    margin-inline: auto;
    gap: 1rem;
    height: 100%;
    width: 80%;
  }
}

.card-container {
  display: grid;
  gap: 1em;

  width: fit-content;
  .card {
    width: 100%;
    // height: 100%;
    min-height: 200px;
    overflow: hidden;

    padding: 0.5rem;
    border-radius: 8px;
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
      object-position: center;
    }
  }
  .card:nth-of-type(5) {
    padding: 0;
    background-color: #fff;
  }
  .card:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;
    span {
      text-transform: uppercase;
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 1.2;
    }
    border: 1px solid white;
  }
  .card:nth-of-type(2),
  .card:nth-of-type(3),
  .card:nth-of-type(4) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-transform: uppercase;
    p {
      font-weight: 700;
    }
  }
}

@media (min-width: 1000px) {
  .wrapper {
    gap: 8rem;
    .image {
      display: block;
      width: 60%;
      height: 100vh;
    }
  }

  .title {
    height: 50%;
  }
  .card-container {
    width: 100%;
  }
}
@media (min-width: 768px) {
  .content {
    width: 100%;
    align-items: start;
  }

  .title {
    height: 50%;
  }

  .card-container {
    gird-template-columns: repeat(3, 1fr);
    gird-template-rows: 1fr 1fr;
    height: 30.5%;
    width: 100%;
    .card {
      height: 200px;
    }
    .card:nth-of-type(1) {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      justify-content: end;
      align-items: start;
    }
    .card:nth-of-type(2) {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }

    .card:nth-of-type(3) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
    .card:nth-of-type(4) {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }

    .card:nth-of-type(5) {
      grid-column: 3 / 4;
      grid-row: 1 / 3;
      height: 100%;
      aspect-ratio: 1 / 2;
    }
    .card:nth-of-type(2),
    .card:nth-of-type(3),
    .card:nth-of-type(4) {
      justify-content: space-between;
    }
  }
}
</style>
