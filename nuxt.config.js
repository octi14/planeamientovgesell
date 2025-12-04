// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // Static site generation
  
  // Configuración del servidor para Heroku (mantenida por compatibilidad)
  devServer: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  },

  // Global page headers
  app: {
    head: {
      title: 'Planeamiento Villa Gesell',
      htmlAttrs: {
        lang: 'es'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Sistema de Planeamiento, Hábitat y Vivienda - Villa Gesell' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap', as: 'style' },
        { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap', as: 'style' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap' }
      ]
    }
  },

  // Global CSS
  css: [
    '~/assets/css/style.scss',
    'bootstrap-icons/font/bootstrap-icons.css'
  ],

  // Auto import components
  components: true,

  // Build Configuration
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "sass:math";'
        }
      }
    }
  },

  // Nitro configuration for static generation
  nitro: {
    prerender: {
      routes: ['/']
    }
  }
})
