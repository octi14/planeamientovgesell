// Plugin para inicializar Bootstrap JavaScript en el cliente
export default defineNuxtPlugin(async () => {
  if (import.meta.client) {
    await import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }
})

