import { createRouter, createWebHistory } from 'vue-router'
import { useProductStore } from '@/store/productsStore.js'
import { ref } from 'vue'
import HomeView from '../views/HomeView.vue'
const ProductDetailsView = () => import('../views/ProductDetailsView.vue')
const NotFoundView = () => import('../views/NotFoundView.vue')
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _2, savedPosition) {
    if (to.hash) {
      return window.scrollTo({
        top: document.querySelector(to.hash).offsetTop,
        behavior: 'smooth'
      })
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, left: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:itemId',
      props: true,
      component: ProductDetailsView,
      beforeEnter: (to, _, next) => {
        const products = ref([])
        const productStore = useProductStore()
        productStore.products.forEach((el) => products.value.push(el.id))
        if (!products.value.includes(to.params.productId)) {
          next('/page-not-found')
        } else {
          next(true)
        }
      }
    },
    { path: '/page-not-found', component: NotFoundView }
  ]
})

export default router
