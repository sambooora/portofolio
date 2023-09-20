import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt', '~/modules/stores.ts'],
    plugins: ['@/plugins/aos.client.ts'],
    css: ['~/assets/styles/plugin.css'],
  })