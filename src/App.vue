<script setup>
import TheNav from '/src/components/TheNav.vue'
import TheFooter from '/src/components/TheFooter.vue'
</script>

<template>
  <TheNav></TheNav>
  <RouterView />
  <TheFooter></TheFooter>
</template>

<style scoped></style>
