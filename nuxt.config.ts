// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode:'in-out'},
    layoutTransition: {name: 'layout', mode:'in-out'}
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  pages: true,
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
