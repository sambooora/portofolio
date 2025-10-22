export default defineNuxtConfig({
  nitro: {
    preset: 'vercel',
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt'],
  plugins: ['@/plugins/aos.client.ts'],
  css: ['~/assets/styles/plugin.css'],
  tailwindcss: {
    config: {
      daisyui: {
        themes: ['night'],
      },
    },
  },
})
