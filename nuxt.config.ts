export default defineNuxtConfig({
  nitro: {
    preset: 'vercel'
  },
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt', '~/modules/stores.ts'],
    plugins: ['@/plugins/aos.client.ts'],
    css: ['~/assets/styles/plugin.css'],
  })