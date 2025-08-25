const { Nuxt, Builder } = require('nuxt')

const isDev = process.env.NODE_ENV !== 'production'

// Crear una nueva instancia de Nuxt
const config = require('./nuxt.config.js')
const nuxt = new Nuxt(config)

// Construir solo en modo desarrollo
if (isDev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Renderizar cada ruta con Nuxt
module.exports = (req, res) => {
  nuxt.render(req, res)
}
