<template>
  <section id="contact">
    <div class="wrapper">
      <h2>
        <div class="first"><span class="accent">Ready to</span> elevate your performence?</div>
        <div class="second">Let's work <span class="accent">Together</span></div>
      </h2>
      <div class="text">
        <h3>Contact Us</h3>
        <div>
          <p class="email">guitarcenter@gmail.com</p>
          <p class="website">guitar-center.com</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4rem;
  padding-inline: 1rem;
  padding-block: clamp(3rem, 10vw, 6rem);
  max-width: 1400px;
  margin-inline: auto;
  background-image: url('/src/assets/img/guitar-1.jpeg');
  min-height: 70vh;
  background-position: center;
  background-size: cover;
  perspective: 80px;
  width: 100vw;
}

h2 {
  font-size: clamp(2.7rem, 10vw, 5rem);
}

h3 {
  font-size: clamp(1.5rem, 10vw, 2rem);
  text-transform: uppercase;
  color: #ddd;
  font-weight: 700;
}

.text {
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    font-size: clamp(1.5rem, 8vw, 3rem);
    .email {
      color: white;
    }
    .website {
      font-size: clamp(1rem, 10vw, 2rem);
    }
  }
}
@media (min-width: 920px) {
  .text {
    div {
      flex-direction: row;
      align-items: center;
    }
  }
}

@media (min-width: 768px) {
  .wrapper {
    padding-inline: 4rem;
  }
  h2 {
    .first {
      width: 70%;
    }
  }
}
</style>
