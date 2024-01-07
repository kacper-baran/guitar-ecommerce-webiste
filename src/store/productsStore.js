import { defineStore } from 'pinia'
export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      {
        id: 'martin-d18',
        title: 'Martin D18 Satin',
        type: 'acoustic',
        img: '/src/assets/img/martin.jpeg',
        price: 2500,
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium repellat labore neque cum aut placeat, eligendi accusamus obcaecati accusantium iste ipsum dolorem similique ipsa molestiae officia assumenda delectus magnam ratione! Maxime ipsam possimus, quia quae quos impedit. Ut quam excepturi aliquid voluptas, repellendus in, ducimus mollitia, tenetur vel cumque exercitationem.'
      },
      {
        id: 'gibson-flying-v',
        title: 'Gibson flying V',
        type: 'electric',
        img: '/src/assets/img/gibson-flying-v.jpeg',
        price: 4000,
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium repellat labore neque cum aut placeat, eligendi accusamus obcaecati accusantium iste ipsum dolorem similique ipsa molestiae officia assumenda delectus magnam ratione! Maxime ipsam possimus, quia quae quos impedit. Ut quam excepturi aliquid voluptas, repellendus in, ducimus mollitia, tenetur vel cumque exercitationem.'
      },
      {
        id: 'gibson-sg',
        title: 'Gibson SG',
        type: 'electric',
        img: '/src/assets/img/gibson-sg.jpeg',
        price: 3000,
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium repellat labore neque cum aut placeat, eligendi accusamus obcaecati accusantium iste ipsum dolorem similique ipsa molestiae officia assumenda delectus magnam ratione! Maxime ipsam possimus, quia quae quos impedit. Ut quam excepturi aliquid voluptas, repellendus in, ducimus mollitia, tenetur vel cumque exercitationem.'
      },
      {
        id: 'gibson-les-paul',
        title: 'Gibson les paul',
        type: 'electric',
        img: '/src/assets/img/gibson-les-paul.jpeg ',
        price: 6000,
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium repellat labore neque cum aut placeat, eligendi accusamus obcaecati accusantium iste ipsum dolorem similique ipsa molestiae officia assumenda delectus magnam ratione! Maxime ipsam possimus, quia quae quos impedit. Ut quam excepturi aliquid voluptas, repellendus in, ducimus mollitia, tenetur vel cumque exercitationem.'
      },
      {
        id: '8-string',
        title: '8 string guitar',
        type: 'electric',
        img: '/src/assets/img/adversary.png',
        price: 4000,
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium repellat labore neque cum aut placeat, eligendi accusamus obcaecati accusantium iste ipsum dolorem similique ipsa molestiae officia assumenda delectus magnam ratione! Maxime ipsam possimus, quia quae quos impedit. Ut quam excepturi aliquid voluptas, repellendus in, ducimus mollitia, tenetur vel cumque exercitationem.'
      },
      {
        id: 'snakebyte',
        title: 'ESL LTD snakebyte',
        type: 'electric',
        img: '/src/assets/img/esp.png',
        price: 2000,
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium repellat labore neque cum aut placeat, eligendi accusamus obcaecati accusantium iste ipsum dolorem similique ipsa molestiae officia assumenda delectus magnam ratione! Maxime ipsam possimus, quia quae quos impedit. Ut quam excepturi aliquid voluptas, repellendus in, ducimus mollitia, tenetur vel cumque exercitationem.'
      },
      {
        id: 'ibanez',
        title: 'Ibanez Tim Henson',
        type: 'electro-acoustic',
        img: '/src/assets/img/ibanez.jpeg',
        price: 5599,
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium repellat labore neque cum aut placeat, eligendi accusamus obcaecati accusantium iste ipsum dolorem similique ipsa molestiae officia assumenda delectus magnam ratione! Maxime ipsam possimus, quia quae quos impedit. Ut quam excepturi aliquid voluptas, repellendus in, ducimus mollitia, tenetur vel cumque exercitationem.'
      }
    ],
    cart: []
  }),
  actions: {
    addToCart(data) {
      const itemOnList = this.cart.find((el) => el.id === data.id)
      if (itemOnList) {
        itemOnList.amount++
      } else this.cart.push(data)
      console.log(this.cartLength)
    },
    removeFromCart(id) {
      console.log(id)
      const newCart = this.cart.filter((el) => el.id !== id)
      this.cart = newCart
    }
  }
})
