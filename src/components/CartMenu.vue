<template>
  <div class="wrapper">
    <div class="container" :class="{ active: props.active }">
      <div class="close-btn" @click="closeCart"><IconX size="35"></IconX></div>
      <div>
        <h3>Cart</h3>
        <ul v-if="productStore.cart.length > 0">
          <li v-for="item in productStore.cart" :key="item.id">
            <div class="img">
              <img :src="item.img" alt="picture of item" />
            </div>
            <div class="text">
              <div class="title">{{ item.title }}</div>
              <div class="price">{{ item.price }}$</div>
              <div class="amount">
                <span @click="handleAmount(false, item.id)">-</span>
                <span>{{ item.amount }}</span>
                <span @click="handleAmount(true, item.id)">+</span>
              </div>
              <router-link :to="'/' + item.id" @click="closeCart">Go to offer</router-link>
              <div class="remove-btn" @click="productStore.removeFromCart(item.id)">
                <IconX size="30"></IconX>
              </div>
            </div>
          </li>
        </ul>
        <div class="empty" v-else>Your cart is empty</div>
      </div>
      <div class="checkout">
        <div class="total">Total: {{ totalPrice }}$</div>
        <button>Go to checkout</button>
      </div>
    </div>
    <div class="white-space" @click="closeCart" :class="{ active: props.active }"></div>
  </div>
</template>

<script setup>
import { IconX } from '@tabler/icons-vue'
import { useProductStore } from '/src/store/productsStore.js'
import { computed } from 'vue'
const productStore = useProductStore()
const props = defineProps(['active'])
const emit = defineEmits(['closeBtnClicked'])
const closeCart = () => {
  emit('closeBtnClicked')
}

const handleAmount = (add, id) => {
  const item = productStore.cart.find((item) => item.id === id)
  if (add) {
    item.amount++
  } else {
    if (item.amount === 1) {
      productStore.removeFromCart(id)
    } else {
      item.amount--
    }
  }
}

const totalPrice = computed(() => {
  let total = 0
  productStore.cart.forEach((el) => {
    total += el.price * el.amount
  })
  return total
})
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
}
.white-space {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 20;
  translate: 100vw;
  &.active {
    translate: 0;
  }
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  max-height: 100vh;
  height: 100%;
  translate: 100vw;
  background-color: #000;
  z-index: 100;
  padding: 1rem;
  padding-inline-start: 2rem;
  transition: translate 0.3s;

  .close-btn,
  .remove-btn {
    position: absolute;
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
  button {
    margin-inline-end: 1rem;
  }
  &.active {
    translate: 0;
  }
}

.checkout {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .total {
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
  }
}
.empty {
  text-align: center;
}

h3 {
  font-size: clamp(2rem, 9vw, 4rem);
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 0;
  overflow: auto;
  margin-bottom: 2rem;
  padding-inline-end: 1rem;

  li {
    position: relative;
    display: flex;
    max-height: 230px;
    gap: 1rem;
    border-radius: 13px;
    padding: 0.5rem;
    border: 1px solid #ddd;
    .text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-block: 1rem;
      .price,
      .title {
        font-weight: 700;
      }
      .title {
        font-size: clamp(1.5rem, 10vw, 2rem);
      }
      .price {
        font-size: clamp(1.2rem, 10vw, 1.5rem);
      }

      .amount {
        display: flex;
        gap: 0.2rem;
        align-items: center;
        span:nth-child(1),
        span:nth-child(2),
        span:nth-child(3) {
          border: 1px solid white;
          padding-inline: 0.7rem;
          padding-block: 0.5rem;
          border-radius: 6px;
          cursor: default;
        }
        span:nth-child(1),
        span:nth-child(3) {
          border: none;
          cursor: pointer;
        }
      }

      .remove-btn {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        cursor: pointer;
        &:hover {
          color: white;
        }
      }
    }
  }
}
.img {
  display: flex;
  justify-content: center;
  background-color: #fff;
  width: 33%;
  border-radius: 8px;
}
img {
  max-height: 100%;
  width: fit-content;
}

@media (min-width: 768px) {
  .container {
    width: 60vw;
  }
}
</style>
