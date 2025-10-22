export default defineNuxtConfig({
  nitro: {
    preset: 'vercel',
    externals: {
      inline: ['vue-bundle-renderer'],
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt'],
  plugins: ['@/plugins/aos.client.ts'],
  css: ['~/assets/styles/plugin.css'],
  tailwindcss: {
    config: {
      content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue',
      ],
      daisyui: {
        themes: ['night'],
      },
    },
  },
})
