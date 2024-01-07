<template>
  <div class="container">
    <div>
      <h3>Page not found...</h3>
      <button>
        <router-link :to="{ name: 'home' }">Go to home</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  place-items: center;
  height: 100vh;
  div {
    text-align: center;
  }
}
h3 {
  font-size: clamp(2rem, 10vw, 5rem);
  margin-bottom: 1rem;
}

a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}
button:hover a {
  color: black;
}
</style>
