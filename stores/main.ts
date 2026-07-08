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
        name: 'HabitFuel',
        img: '/images/tmp/products/habitfuel-1.png',
        description: `
          <p>This project a develop from scratch of Habit Tracker App. HabitFuel is a habit tracker app that helps users to track their habits and achieve their goals. In this project, My Role is Front End Developer and also Designer.
          I develope this Project with Stack :</p>
          <ul>
            <li>React Native</li>
            <li>Async Storage</li>
            <li>TamaGUI</li>
          </ul>
        `,
      },
      {
        id: '2',
        name: 'Pablo Restaurant',
        img: '/images/tmp/products/pablo-1.png',
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
      {
        id: '3',
        name: 'Sam Wedding',
        img: '/images/tmp/products/samwedding-1.png',
        description: `
         <p>This project is a develop from scratch of Landing Page of Sam Wedding. Sam Wedding is a wedding invitation website. In this project, My Role is Front End Developer and also Designer.
         I develope this Project with Stack :</p>
         <ul>
           <li>Tailwind CSS</li>
           <li>Shadcn UI</li>
           <li>Nuxt JS</li>
           <li>Axios for Connection with APi</li>
         </ul>
       `,
      },
    ],
  }),
})
