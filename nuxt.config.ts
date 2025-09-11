import tailwindcss from "@tailwindcss/vite";


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  css: ['~/assets/css/main.css'],
  modules: ['nuxt-auth-utils'],
  app:{
    head:{
      title: 'Veriflix Video Club',
      meta:[
        { name: 'description', content: 'A video club app built with Nuxt 3 and Tailwind CSS' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Fernando Cruz' },
        { name: 'keywords', content: 'Nuxt3, TailwindCSS, Video Club, Verifarma, Challenge' },
      ],
      link:[
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})