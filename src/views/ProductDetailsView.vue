<template>
  <div class="wrapper">
    <div class="img-container">
      <img :src="useImage(item.img)" alt="" />
    </div>
    <div class="text-container">
      <h3>{{ item.title }}</h3>
      <span class="price">{{ item.price }}$</span>
      <button @click="productStore.addToCart({ ...item, amount: 1 })">Add to cart</button>
      <p class="desc">
        {{ item.desc }}
      </p>
    </div>
  </div>
  <ContactSection></ContactSection>
</template>

<script setup>
import ContactSection from '/src/components/ContactSection.vue'
import { useProductStore } from '/src/store/productsStore.js'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
const productStore = useProductStore()

const props = defineProps(['itemId'])
const route = useRoute()
const item = ref({})
const getItem = () => {
  item.value = productStore.products.find((item) => props.itemId === item.id)
}
getItem()
watch(route, () => {
  getItem()
})
function useImage(url) {
  return new URL(`/guitar-ecommerce-webiste/src/assets/img/${url}`, import.meta.url).href
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  margin-top: 11vh;
  max-width: 1400px;
  padding: 2rem;

  width: 100%;
  margin-inline: auto;
}

.img-container,
.text-container {
  width: 100%;
  height: 100vh;
  img {
    max-height: 100%;
  }
}

h3 {
  font-size: clamp(2rem, 10vw, 5rem);
  text-wrap: balance;
  line-height: 1;
  color: white;
  font-weight: 700;
}
.text-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .price {
    font-size: 2rem;
    font-weight: 700;
  }
  .desc {
    font-size: 1.2rem;
  }
}

.img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 15px;
  padding: 1rem;
}

@media (min-width: 768px) {
  .wrapper {
    flex-direction: row;
  }

  .img-container,
  .text-container {
    width: 50%;
  }
}
</style>
