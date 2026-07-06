import { defineStore } from 'pinia'

type State = {
  savedScrollPositions: {
    [key: string]: { x: number; y: number; height: number }
  }
  products: Product[]
}

export const useMainStore = defineStore('app', {
  state: (): State => ({
    savedScrollPositions: {},
    products: [
      {
        id: '1',
        name: 'Picasso Dashboard',
        img: '/images/tmp/products/product-1.png',
        description: `
          <p>This project is a redesign and redevelop of ERP Application of Grand Picasso Hotel. Grand Picasso Hotel is a Hotel 3 stars in Jakarta, Indonesia. In this project, My Role is Front End Developer and Designer. This project
            is a website to manage hotel back office such as reservation,
            campaign management and accounting
          I develope this Project with Stack :</p>
          <ul>
            <li>Boostrap</li>
            <li>Nuxt JS</li>
            <li>Axios for Connection with APi</li>
          </ul>
        `,
      },
      {
        id: '2',
        name: 'Pablo Restaurant',
        img: '/images/tmp/products/product-2.png',
        description: `
          <p>This project is a develop from scratch of Landing Page and Order Food App of Pablo Restaurant. Pablo Resto is a Resto under management of Grand Picasso Hotel in Jakarta, Indonesia. In this project, My Role is Front End Developer and also Designer.
            Is a website that aims to be a hotel landing page and promotion
            center
          I develope this Project with Stack :</p>
          <ul>
            <li>Tailwind CSS</li>
            <li>Nuxt JS</li>
            <li>Axios for Connection with APi</li>
          </ul>
        `,
      },
    ],
  }),
})
