<template>
  <section class="estadisticas-card">
    <div class="estadisticas-layout">
      <!-- Bloque que se puede desplazar en desktop: gráfico + separador + texto (el fondo gris queda en .estadisticas-layout) -->
      <div class="estadisticas-inner">
        <div class="chart-column">
          <div class="chart-area">
            <div class="donut-wrapper">
              <canvas
                ref="chartCanvas"
                class="donut-chart"
                aria-label="Distribucion de m² por tipo de tramite en 2025"
              ></canvas>
            </div>

            <div
              v-for="(item, index) in datos"
              :key="item.nombre"
              :class="['donut-label', `label-${index + 1}`]"
            >
              {{ item.porcentaje }}%
            </div>
          </div>
        </div>

        <hr class="separador" />

        <div class="info-column">
          <span class="anio-pill">Año 2025</span>
          <h3 class="estadisticas-titulo">
            <span class="titulo-icono"></span>
            Tipos de trámite (en m²)
          </h3>

          <ul class="legend-list">
            <li v-for="item in datos" :key="item.nombre">
              <span class="legend-color" :style="{ backgroundColor: item.color }"></span>
              <span class="legend-texto">
                <strong>{{ item.nombre }}</strong> - {{ item.valorTabla }} m²
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js'

Chart.register(DoughnutController, ArcElement, Tooltip, Legend)

const datos = [
  {
    nombre: 'Permisos de obra',
    valor: 27707.51,
    valorTabla: '27707,51',
    porcentaje: 50,
    color: '#1fa22e',
  },
  {
    nombre: 'Aprobaciones de obra',
    valor: 15997.54,
    valorTabla: '15997,54',
    porcentaje: 29,
    color: '#ff7a00',
  },
  {
    nombre: 'Regularizaciones',
    valor: 11829.49,
    valorTabla: '11829,49',
    porcentaje: 21,
    color: '#e3bf1b',
  },
]

const chartCanvas = ref(null)
let pieChart = null

onMounted(() => {
  if (!chartCanvas.value) return

  pieChart = new Chart(chartCanvas.value, {
    type: 'doughnut',
    data: {
      labels: datos.map((item) => item.nombre),
      datasets: [
        {
          data: datos.map((item) => item.valor),
          backgroundColor: datos.map((item) => item.color),
          borderColor: '#ffffff',
          borderWidth: 2,
          cutout: '63%',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    },
  })
})

onBeforeUnmount(() => {
  if (pieChart) {
    pieChart.destroy()
    pieChart = null
  }
})
</script>

<style scoped>
/* ===== Base (mobile first): estilos generales del grafico ===== */
.estadisticas-card {
  font-family: 'Roboto', sans-serif;
  margin: 0;
}

.estadisticas-layout {
  background: #F5F5F5;
  border-radius: 8px;
  padding: 3rem 1.2rem 1.35rem;
}

.estadisticas-inner {
  width: 100%;
}

.chart-area {
  position: relative;
  min-height: 230px;
  max-width: 260px;
}

.donut-wrapper {
  width: 164px;
  height: 164px;
  margin: 0 auto;
}

.donut-chart {
  width: 100%;
  height: 100%;
}

.donut-label {
  position: absolute;
  color: #5a5a5a;
  font-size: 1.45rem;
  line-height: 1;
  font-weight: 700;
  pointer-events: none;
}

.label-1 {
  top: 31%;
  right: -2%;
}

.label-2 {
  left: 9%;
  bottom: 29%;
}

.label-3 {
  top: 5%;
  left: 6%;
}

.separador {
  border: none;
  border-top: 1px solid #c8c8c8;
  margin: 0.5rem 0 0.75rem;
  width: 100%;
}

.anio-pill {
  display: inline-block;
  padding: 0.1rem 0.45rem;
  border-radius: 4px;
  background: #dddddd;
  color: #777;
  font-size: 0.85rem;
  line-height: 1.2;
  margin-bottom: 0.35rem;
}

.estadisticas-titulo {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin: 0 0 1rem;
  font-size: 1.3rem;
  color: #222;
  font-weight: 500;
  line-height: 1.15;
  margin-bottom: 2rem;
}

.titulo-icono {
  display: none;
}

.legend-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.legend-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.45rem;
}

.legend-color {
  width: 0.95rem;
  height: 0.95rem;
  flex: 0 0 auto;
}

.legend-texto {
  color: #333333;
  font-size: 0.9rem;
  line-height: 1.35;
}

/* ===== Tablet y resoluciones intermedias (>= 768px) ===== */
@media (min-width: 768px) {
  .estadisticas-layout {
    padding: 1rem 1rem 1.15rem;
  }

  .chart-area {
    min-height: 250px;
    max-width: 300px;
  }

  .donut-wrapper {
    width: 182px;
    height: 182px;
  }

  .donut-label {
    font-size: 1.6rem;
  }

  .legend-texto {
    font-size: 1rem;
  }
}

/* ===== Desktop grande (>= 1200px) ===== */
@media (min-width: 1200px) {
  .estadisticas-layout {
    padding: 1.2rem 1.1rem 1.25rem;
  }

  .estadisticas-inner {
    display: grid;
    grid-template-columns: 360px 1fr;
    /* Hueco amplio para el separador (la línea va en el centro del gap) */
    --estadisticas-col-gap: 2.75rem;
    column-gap: var(--estadisticas-col-gap);
    align-items: center;
    position: relative;
    /* Desplaza solo gráfico + línea + columna de texto; el rectángulo gris no se corre */
    margin-left: 4rem;
    margin-right: 0;
  }

  .estadisticas-card{
    padding: 0 1.25rem;
  }

  .chart-column {
    grid-column: 1;
    /* Aire entre el borde derecho del gráfico / “50%” y el separador */
    padding-right: 1rem;
  }
  
  .chart-area {
    min-height: 320px;
    max-width: 380px;
    margin-inline: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .donut-wrapper {
    width: 220px;
    height: 220px;
  }

  .donut-label {
    font-size: 1.9rem;
  }

  .label-1 {
    top: 50%;
    transform: translateY(-50%);
  }

  .label-2 {
    left: 9%;
    bottom: 18%;
  }

  .label-3 {
    top: 21%;
    left: 8%;
  }

  .separador {
    display: none;
  }

  .info-column {
    grid-column: 2;
    /* Aire entre el separador y pill / título / leyenda */
    padding-left: 1.5rem;
  }

  /* Separador vertical respecto al bloque interno (sin incluir padding del fondo gris) */
  .estadisticas-inner::after {
    content: '';
    position: absolute;
    top: 2.75rem;
    bottom: 2.75rem;
    /* Centro del hueco entre las dos columnas (columna fija 360px + mitad del gap) */
    left: calc(360px + var(--estadisticas-col-gap) / 2);
    width: 1px;
    background: #b8b8b8;
  }

  .anio-pill {
    margin-bottom: 0.4rem;
  }

  .estadisticas-titulo {
    margin-bottom: 3rem;
    margin-top: 0.5rem;
    font-size: 1.8rem;
  }

  .titulo-icono {
    display: none;
  }

  .legend-texto {
    font-size: 1.2rem;
  }

  .legend-color {
    width: 1.4rem;
    height: 1.2rem;
    margin-right: 0.5rem;
  }

  .legend-list li {
    margin-block: 1rem;
  }
}
</style>
