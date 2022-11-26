import { defineStore } from 'pinia'

type Seo = {
  title?: string
  description?: string
  image?: string
}

type State = {
  cartVisible: boolean
  shopMenuVisible: boolean
  subcribtionVisible: boolean
  savedScrollPositions: { [key: string]: { x: number; y: number; height: number } }
  seo?: Seo
  pathWithBaseBg: string[]
  products: Product[]
}

export const useMainStore = defineStore('app', {
  state: (): State => ({
    cartVisible: false,
    shopMenuVisible: false,
    subcribtionVisible: true,
    savedScrollPositions: {},
    seo: undefined,
    pathWithBaseBg: ['/', '/cart', '/products'],
    products: [
      {
        id: '1',
        name: 'Picasso Dashboard',
        img: '/images/tmp/products/product-1.png',
        variants: [
          {
            name: 'ERP',
            price: 100
          },
          {
            name: '3x 20 ml 0.68 Fl Oz',
            price: 200
          }
        ],
        description: `
    <p>This project is a redesign and redevelop of ERP Application of Grand Picasso Hotel. Grand Picasso Hotel is a Hotel 3 stars in Jakarta, Indonesia. In this project, My Role is Front End Developer and Designer. This project is a website to manage hotel back office such as reservation, campaign management and accounting I develope this Project with Stack :</p>
    <ul>
      <li>Boostrap</li>
      <li>Nuxt JS</li>
      <li>Axios for Connection with APi</li>
    </ul>
    `
      },
      {
        id: '2',
        name: 'Pablo Restaurant',
        img: '/images/tmp/products/product-2.png',
        variants: [
          {
            name: '50 ml 1.69 Fl Oz',
            price: 100
          }
        ],
        description: `
    <p>This project is a develop from scratch of Landing Page and Order Food App of Pablo Restaurant. Pablo Resto is a Resto under management of Grand Picasso Hotel in Jakarta, Indonesia. In this project, My Role is Front End Developer and also Designer. I develope this Project with Stack :</p>
    <ul>
      <li>Tailwind CSS</li>
      <li>Nuxt JS</li>
      <li>Axios for Connection with APi</li>
    </ul>
    `
      }
    //   {
    //     id: '3',
    //     name: 'Picasso Landing',
    //     img: '/images/tmp/products/product-3.png',
    //     variants: [
    //       {
    //         name: '10 ml 0.34 Fl Oz',
    //         price: 100
    //       }
    //     ],
    //     description: `
    // <p>Moisturized, soothed and ultimately refreshed skin. With Natural Cellulose, Pure Water, Disodium EDTA, Xanthan Gum and Sorbitol. Proskin face mask is made from a natural cellulose that is fabricated via a biofabrication process, known for its advanced healing and repair properties. Perfect for rejuvenating skin whenever you need some TLC.</p>
    // <ul>
    //   <li>Promotes skin healing and younger looking skin</li>
    //   <li>Fragrance and alcohol free</li>
    //   <li>Easy-to-use</li>
    //   <li>Naturally sourced and cruelty-free</li>
    // </ul>
    // `
    //   }
    ]
  }),

  actions: {
    toggleCartVisibility() {
      this.cartVisible = !this.cartVisible
    }
  }
})
