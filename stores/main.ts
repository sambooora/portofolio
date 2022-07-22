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
        name: 'Regenertaive Serum',
        img: '/images/tmp/products/product-1.png',
        variants: [
          {
            name: '3x 10 ml 0.34 Fl Oz',
            price: 100
          },
          {
            name: '3x 20 ml 0.68 Fl Oz',
            price: 200
          }
        ],
        description: `
    <p>Healthy skin starts here. With Collagen, Hyaluronic Acid, Soy Lecithin, Honeysuckle Flower and Rosa Damascena. Hydrate and revitalise your skin from the inside out with Aquifers advanced collagen serum. Achieve younger and healthier glowing skin and see visible results of reduced fine lines and wrinkles.</p>
    <ul>
      <li>Promotes fundamental skin health</li>
      <li>Tightens skin and reduces fine lines and wrinkles</li>
      <li>Slows down degradation of collagen</li>
      <li>Fast absorption with a silky smooth finish</li>
      <li>Naturally sourced and cruelty-free</li>
    </ul>
    `
      },
      {
        id: '2',
        name: 'Hydrating Cream',
        img: '/images/tmp/products/product-2.png',
        variants: [
          {
            name: '50 ml 1.69 Fl Oz',
            price: 100
          }
        ],
        description: `
    <p>A boost of norishing hydration. With Water, Glycerin, Propanediol, Cyclopentasiloxane, Dimethicone, Olea Europaea Oil and Betaine. Compat the appearance of fine lines and wrinkles and pamper your skin with long-lasting hydration. The ultimate defence to prevent premature signs of skin ageing and prevent future degeneration.</p>
    <ul>
      <li>Advanced sun protective formula</li>
      <li>Supports the skins natural repair mechanisms</li>
      <li>Long-lasting moisture, easing the appearance of fine lines and wrinkles</li>
      <li>Naturally sourced and cruelty-free</li>
    </ul>
    `
      },
      {
        id: '3',
        name: 'Restoritive Face Mask',
        img: '/images/tmp/products/product-3.png',
        variants: [
          {
            name: '10 ml 0.34 Fl Oz',
            price: 100
          }
        ],
        description: `
    <p>Moisturized, soothed and ultimately refreshed skin. With Natural Cellulose, Pure Water, Disodium EDTA, Xanthan Gum and Sorbitol. Proskin face mask is made from a natural cellulose that is fabricated via a biofabrication process, known for its advanced healing and repair properties. Perfect for rejuvenating skin whenever you need some TLC.</p>
    <ul>
      <li>Promotes skin healing and younger looking skin</li>
      <li>Fragrance and alcohol free</li>
      <li>Easy-to-use</li>
      <li>Naturally sourced and cruelty-free</li>
    </ul>
    `
      }
    ]
  }),

  actions: {
    toggleCartVisibility() {
      this.cartVisible = !this.cartVisible
    }
  }
})
