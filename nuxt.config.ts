// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig:{
    public: {
      BACKEND_URL: "http://localhost:3030/"
    }
  },
  devServer: {     
    port: 3000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  },   // other configs 
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
