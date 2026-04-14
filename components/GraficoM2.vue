<template>
  <section class="grafico-card">
    <div class="grafico-header">
      <h2 class="anio">2025</h2>
    </div>

    <div class="grafico-layout">
      <div class="chart-area">
        <div class="pie-wrapper">
          <canvas
            ref="chartCanvas"
            class="pie-chart"
            aria-label="Distribucion de m2 por categoria en 2025"
          ></canvas>
        </div>

        <div
          v-for="(item, index) in datos"
          :key="item.nombre"
          :class="['pie-label', `label-${index + 1}`]"
        >
          <span class="valor">{{ item.valorGrafico }}</span>
          <span class="porcentaje">{{ item.porcentaje }}%</span>
        </div>
      </div>

      <div class="legend-table">
        <ul class="legend-list">
          <li v-for="item in datos" :key="item.nombre">
            <span class="legend-color" :style="{ backgroundColor: item.color }"></span>
            <span>{{ item.nombre }}</span>
          </li>
        </ul>

        <table>
          <thead>
            <tr>
              <th></th>
              <th class="m2-header">m2</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in datos" :key="`fila-${item.nombre}`">
              <td>{{ item.nombre }}</td>
              <td>{{ item.valorTabla }}</td>
            </tr>
            <tr class="total-row">
              <td>Total</td>
              <td>{{ totalTabla }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Chart, PieController, ArcElement, Tooltip, Legend } from 'chart.js'

Chart.register(PieController, ArcElement, Tooltip, Legend)

const datos = [
  {
    nombre: 'Permisos de obra',
    valor: 27707.51,
    valorGrafico: '27707.5',
    valorTabla: '27707,51',
    porcentaje: 50,
    color: '#4472c4',
  },
  {
    nombre: 'Aprobacion de obras',
    valor: 15997.54,
    valorGrafico: '15997.5',
    valorTabla: '15997,54',
    porcentaje: 29,
    color: '#ed7d31',
  },
  {
    nombre: 'Regularizaciones',
    valor: 11829.49,
    valorGrafico: '11829.4',
    valorTabla: '11829,49',
    porcentaje: 21,
    color: '#a5a5a5',
  },
]

const totalTabla = '55534,54'

const chartCanvas = ref(null)
let pieChart = null

onMounted(() => {
  if (!chartCanvas.value) return

  pieChart = new Chart(chartCanvas.value, {
    type: 'pie',
    data: {
      labels: datos.map((item) => item.nombre),
      datasets: [
        {
          data: datos.map((item) => item.valor),
          backgroundColor: datos.map((item) => item.color),
          borderColor: '#f4f4f4',
          borderWidth: 3,
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
          callbacks: {
            label: (ctx) => {
              const item = datos[ctx.dataIndex]
              return `${item.nombre}: ${item.valorTabla} m2 (${item.porcentaje}%)`
            },
          },
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
.grafico-card {
  background: #f2f2f2;
  border: 1px solid #dddddd;
  border-radius: 6px;
  padding: 1.5rem 1.25rem 1.8rem;
  max-width: 800px;
  margin: 0 auto;
}

.grafico-header {
  text-align: center;
  margin-bottom: 1rem;
}

.anio {
  margin: 0;
  font-size: 2.5rem;
  color: #5f5f5f;
  font-weight: 500;
  letter-spacing: 0.4px;
}

.grafico-layout {
  display: grid;
  grid-template-columns: minmax(460px, 1fr) minmax(260px, 300px);
  gap: 2rem;
  align-items: center;
}

.chart-area {
  position: relative;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pie-wrapper {
  width: 300px;
  height: 300px;
}

.pie-chart {
  width: 100%;
  height: 100%;
}

.pie-label {
  position: absolute;
  color: #4f4f4f;
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  font-size: 0.95rem;
  pointer-events: none;
  text-align: center;
}

.label-1 {
  top: 54%;
  left: 60%;
  transform: translate(-50%, -50%);
}

.label-2 {
  top: 69%;
  left: 36%;
  transform: translate(-50%, -50%);
}

.label-3 {
  top: 31%;
  left: 36%;
  transform: translate(-50%, -50%);
}

.valor {
  font-weight: 500;
}

.porcentaje {
  font-weight: 600;
}

.legend-table {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  align-self: center;
  width: 100%;
  max-width: 300px;
  overflow: hidden;
}

.legend-list {
  list-style: none;
  padding: 0;
  margin: 0;
  color: #585858;
  font-size: 1.02rem;
}

.legend-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}

.legend-color {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 2px;
  flex: 0 0 auto;
}

table {
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
  background: #fff;
  font-size: 1rem;
  color: #444;
}

th,
td {
  border: 1px solid #777;
  padding: 0.1rem 0.35rem;
  line-height: 1.05;
}

th {
  font-weight: 500;
  text-align: center;
  font-size: 1.8rem;
}

.m2-header {
  font-size: 1.1rem;
}

td:first-child {
  text-align: left;
  width: 74%;
  white-space: normal;
  word-break: break-word;
}

td:last-child {
  text-align: right;
  width: 26%;
  white-space: nowrap;
}

.total-row td {
  font-weight: 500;
}

@media (max-width: 992px) {
  .grafico-layout {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .legend-table {
    margin-inline: auto;
    width: min(100%, 360px);
  }

  .pie-wrapper {
    width: 260px;
    height: 260px;
  }

  .chart-area {
    min-height: 280px;
  }

  .pie-label {
    font-size: 0.82rem;
  }

  .label-1 {
    top: 54%;
    left: 60%;
  }

  .label-2 {
    top: 69%;
    left: 36%;
  }

  .label-3 {
    top: 31%;
    left: 36%;
  }

  table {
    font-size: 0.95rem;
  }

  th {
    font-size: 1.2rem;
  }

  .m2-header {
    font-size: 0.95rem;
  }
}
</style>
