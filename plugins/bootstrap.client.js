// Plugin para inicializar Bootstrap JavaScript en el cliente
export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    // Importar Bootstrap JavaScript dinámicamente solo en el cliente
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }
})

