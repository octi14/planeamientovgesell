# Planeamiento Villa Gesell

Sistema de planeamiento para Villa Gesell desarrollado con Nuxt.js.

## Requisitos

- Node.js 16.x
- npm

## Instalación

```bash
# Instalar dependencias
npm install
```

## Desarrollo

```bash
# Ejecutar en modo desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## Construcción para producción

```bash
# Construir para producción
npm run build

# Iniciar servidor de producción
npm run start
```

## Despliegue en Heroku

El proyecto está configurado para ser desplegado en Heroku. El script `heroku-postbuild` se ejecutará automáticamente durante el despliegue.

### Variables de entorno

Asegúrate de configurar las siguientes variables de entorno en Heroku:

- `NODE_ENV=production`
- `PORT` (Heroku lo configura automáticamente)

## Scripts disponibles

- `npm run dev` - Ejecutar en modo desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Iniciar servidor de producción
- `npm run generate` - Generar sitio estático
- `npm run export` - Exportar sitio estático
- `npm run serve` - Servir archivos estáticos 