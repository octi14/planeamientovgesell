export default {
  target: 'static',
  
  // Configuración del servidor para Heroku (mantenida por compatibilidad)
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  },
  
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Planeamiento Villa Gesell',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sistema de Planeamiento, Hábitat y Vivienda - Villa Gesell' }
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
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/style.scss',
    'bootstrap-icons/font/bootstrap-icons.css'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt'
  ],

  // BootstrapVue module configuration https://bootstrap-vue.org/docs#nuxtjs-module
  bootstrapVue: {
    bootstrapCSS: false,
    icons: true,
    bootstrapVueCSS: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true
  }
} 