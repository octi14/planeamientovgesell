<template>
  <div class="page main-background">
    <div class="container-fluid">
      <div class="row no-gutters">
        <div class="col-12">
          
          <!-- Hero Section -->
          <div class="hero-section">
            <div class="hero-container">
              <img src="~/assets/css/img/Banner.png" alt="Planeamiento, Hábitat y Vivienda" class="hero-image" loading="eager" fetchpriority="high">
              <div class="hero-text-overlay">
                <h1 class="hero-title">Planeamiento, Obras Particulares y DIEPEP</h1>
              </div>
            </div>
          </div>

          <!-- Call to Action Section -->
          <div class="btn-section">
            <div class="text-center">
              <h3 class="text-green mb-5 mt-5">¿Qué trámite estás buscando?</h3>
              <div class="row justify-content-center">
                <div class="col-12 col-md-3 mb-4 mx-4">
                  <MainButton :isActive="selectedOption === 1" @click="selectOption(1)">
                    PLANEAMIENTO,<br>HÁBITAT Y VIVIENDA
                  </MainButton>
                </div>
                <div class="col-12 col-md-3 mb-4 mx-4">
                  <MainButton :isActive="selectedOption === 2" @click="selectOption(2)">
                    OBRAS PARTICULARES
                  </MainButton>
                </div>
                <div class="col-12 col-md-3 mb-4 mx-4">
                  <MainButton :isActive="selectedOption === 3" @click="selectOption(3)">
                    D. I. E. P. E. P.
                  </MainButton>
                </div>
              </div>
            </div>
          </div>

          <!-- Vista del Botón 1: PLANEAMIENTO, HÁBITAT Y VIVIENDA -->
          <div v-if="selectedOption === 1">
            <!-- NUESTRA LABOR Section -->
            <div class="section">
              <div class="row justify-content-center">
                <div class="col-11 col-lg-10">
                  <h3 class="text-green mb-4 mt-5">NUESTRA LABOR</h3>
                  <p class="text-roboto">La Dirección de Vivienda y Hábitat fue creada en el 2015 con el objetivo de atender la demanda habitacional, mediante la ejecución de obras de urbanización, infraestructura y equipamiento, asegurando el acceso a una vivienda digna en igualdad de oportunidades para los distintos sectores sociales, con el fin de constituir un hábitat digno, dotado de servicios y sin riesgo ambiental que contribuya al desarrollo de nuestro Partido mejorando o transformando así sus condiciones de vida.</p>
                  <p class="text-roboto">Asimismo, se trabaja en forma conjunta con la Escribanía General de Gobierno y la Subsecretaría Social de Tierras, Urbanismo y Vivienda en la regularización dominial de inmuebles.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Vista del Botón 2: OBRAS PARTICULARES -->
          <div v-if="selectedOption === 2" class="section">
            <div class="row justify-content-center">
              <div class="col-11 col-lg-10">
              <h3 class="text-green mb-4 mt-5">NUESTRA LABOR</h3>
              <p class="text-roboto">La Dirección de Obras Particulares (DOP) es el área encargada de otorgar permisos de obras nuevas, remodelaciones o demoliciones que se realicen en el partido de Villa Gesell en cumplimiento con lo dispuesto en el Código de Edificación y el Plan de Ordenamiento Municipal (POM).</p>
              </div>
            </div>

            <div class="cards-section">
              <div class="row justify-content-center">
                <div class="col-11 col-lg-10">
              <!-- ¿Cómo matricularse como profesional? -->
              <b-card class="section-card shadow-card mb-3">
                <template #header>
                  <div class="d-flex justify-content-between align-items-center" @click="toggleCollapse('matricula')" style="cursor: pointer;">
                    <h5 class="text-green mb-0">¿Cómo matricularse como profesional?</h5>
                    <b-icon :icon="collapseStates.matricula ? 'chevron-up' : 'chevron-down'"></b-icon>
                  </div>
                </template>
                <template #default v-if="collapseStates.matricula">
                  <b-collapse :visible="collapseStates.matricula" class="collapse-content">
                    <p class="text-black text-roboto">El trámite se realiza de forma presencial en nuestra oficina. Debe traer:</p>
                    <ul class="text-roboto">
                      <li>Comprobante de Matrícula Provincial al día y</li>
                      <li>Fotocopia de DNI.</li>
                    </ul>
                    <p class="text-black text-roboto">Se le pedirá <b> abonar Inscripción Profesional y Matrícula Municipal Anual. </b> El número de Matrícula Municipal le será otorgado en el momento.<b> Recuerde que para cualquier presentación debe tener la matrícula municipal al día.</b></p>
                  </b-collapse>
                </template>
              </b-card>

              <!-- Solicitud de Copia de Plano -->
              <b-card class="section-card shadow-card mb-3">
                <template #header>
                  <div class="d-flex justify-content-between align-items-center" @click="toggleCollapse('solicitud')" style="cursor: pointer;">
                    <h5 class="text-green mb-0">Solicitud de Copia de Plano</h5>
                    <b-icon :icon="collapseStates.solicitud ? 'chevron-up' : 'chevron-down'"></b-icon>
                  </div>
                </template>
                <template #default v-if="collapseStates.solicitud">
                  <b-collapse :visible="collapseStates.solicitud" class="collapse-content">
                    <ul class="text-roboto">
                    <li>Para solicitar copia de planos aprobados o registrados, el propietario del inmueble
                       deberá requerirlo por mesa de entradas de la Dirección acreditando titularidad por medio de
                        escritura y DNI.</li>
                    <li>La copia del plano tiene un costo que se informará y abonará en el momento por el propietario. Posteriormente se le entregará hasta una semana después.</li>
                    </ul>
                  </b-collapse>
                </template>
              </b-card>

              <!-- Horarios de Trabajo de Obra -->
              <b-card class="section-card shadow-card mb-3">
                <template #header>
                  <div class="d-flex justify-content-between align-items-center" @click="toggleCollapse('horarios')" style="cursor: pointer;">
                    <h5 class="text-green mb-0">Horarios de Trabajo de Obra</h5>
                    <b-icon :icon="collapseStates.horarios ? 'chevron-up' : 'chevron-down'"></b-icon>
                  </div>
                </template>
                <template #default v-if="collapseStates.horarios">
                  <b-collapse :visible="collapseStates.horarios" class="collapse-content">
                    <p class="text-black text-roboto">Los horarios de trabajo de obra están regulados por la
                    <a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&sb=name&sd=1&id=CDFD5F6443FDC16A%21sd9f1f92abc534e9e88d3db0c0b7bb69f&parId=CDFD5F6443FDC16A%21s5903fb2476024c6abf69d18613878d32&o=OneUp" target="_blank"><u>Ordenanza 3494/24</u></a>
                       y varían según la zona y época.</p>
                  </b-collapse>
                </template>
              </b-card>

              <!-- Documentación -->
              <b-card class="section-card shadow-card mb-3 documentacion-card">
                <template #header>
                  <div class="d-flex justify-content-between align-items-center" @click="toggleCollapse('documentacion')" style="cursor: pointer;">
                    <h5 class="text-green mb-0">Documentación</h5>
                    <b-icon :icon="collapseStates.documentacion ? 'chevron-up' : 'chevron-down'"></b-icon>
                  </div>
                </template>
                <template #default v-if="collapseStates.documentacion">
                  <b-collapse :visible="collapseStates.documentacion" class="collapse-content">
                    <h6 class="text-dark font-weight-bold text-roboto">Códigos y ordenanzas</h6>
                    <ul class="text-roboto">
                      <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&sb=name&sd=1&id=CDFD5F6443FDC16A%21s0559b1c958a1437187d2b8c6ee93afc4&parId=CDFD5F6443FDC16A%21sfe2c638f43224981b71bccbc58f0c6dd&o=OneUp" target="_blank" rel="noopener noreferrer">Plan de Ordenamiento Municipal</a></li>
                      <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&id=CDFD5F6443FDC16A%21s845dc44950f04c3c9b14b7c448a0a976&parId=CDFD5F6443FDC16A%21s5903fb2476024c6abf69d18613878d32&o=OneUp" target="_blank" rel="noopener noreferrer">Ordenanza de presentaciones y procedimientos municipales 961/92</a></li>
                      <li>Plano Zonas, Índices y Planilla de Usos</li>
                      <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&sb=name&sd=1&id=CDFD5F6443FDC16A%21scae59ad208ad4aed8afd5348a3db87d6&parId=CDFD5F6443FDC16A%21sfe2c638f43224981b71bccbc58f0c6dd&o=OneUp" target="_blank" rel="noopener noreferrer">Plano Zonas Distritos Comerciales</a></li>
                      <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&sb=name&sd=1&id=CDFD5F6443FDC16A%21s16226b8db5cc454c92c6205dd9950636&parId=CDFD5F6443FDC16A%21sfe2c638f43224981b71bccbc58f0c6dd&o=OneUp" target="_blank" rel="noopener noreferrer">Plano Zonas Tributarias</a></li>
                      <li>Resolución para Alojamientos Turísticos (Res. 23/14)</li>
                      <li>Valores vigentes de Tasa de Visado y Multas</li>
                      <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&id=CDFD5F6443FDC16A%21s7f8ca017b1cd493f852bb85704621bf8&parId=CDFD5F6443FDC16A%21s5903fb2476024c6abf69d18613878d32&o=OneUp" target="_blank" rel="noopener noreferrer">Visado Web y Planilla de Visado (Decreto 662/24)</a></li>
                      <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&id=CDFD5F6443FDC16A%21s2ac93a3892034e12bd747208ebbb1855&parId=CDFD5F6443FDC16A%21s5903fb2476024c6abf69d18613878d32&o=OneUp" target="_blank" rel="noopener noreferrer">Programa MI LOTE y presentación Municipal</a></li>
                    </ul>
                    
                    <h6 class="text-dark font-weight-bold text-roboto">Multas</h6>
                    <ul class="text-roboto">
                      <li>Ordenanzas de multas (Ord. 931/91 – <a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&sb=name&sd=1&id=CDFD5F6443FDC16A%21scbb8e9406658439fbecfbd6dd2457b4f&parId=CDFD5F6443FDC16A%21s3f16db73217249318a969ea2fdbb1bf6&o=OneUp" target="_blank" rel="noopener noreferrer">2283/09</a> – 2243/17 – 2708/17 – <a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&sb=name&sd=1&id=CDFD5F6443FDC16A%21s761e9b92a43242f08077edf5228ebd89&parId=CDFD5F6443FDC16A%21s3f16db73217249318a969ea2fdbb1bf6&o=OneUp" target="_blank" rel="noopener noreferrer">2742/17</a> – <a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&sb=name&sd=1&id=CDFD5F6443FDC16A%21s7347a6b25f004d01980ea5e844ca9c95&parId=CDFD5F6443FDC16A%21s3f16db73217249318a969ea2fdbb1bf6&o=OneUp" target="_blank" rel="noopener noreferrer">3325/22</a>)</li>
                      <li>Planilla de liquidación de multas</li>
                    </ul>
                    
                    <h6 class="text-dark font-weight-bold text-roboto">Permisos y Avisos de obra</h6>
                    <ul class="text-roboto">
                      <li>Planillas y requisitos para presentación</li>
                      <li>Planilla Movimiento de suelos</li>
                      <li>Planilla extracción de arboles</li>
                    </ul>
                  </b-collapse>
                </template>
              </b-card>
                </div>
              </div>
            </div>
          </div>

          <!-- Vista del Botón 3: D.I.E.P.E.P. -->
          <div v-if="selectedOption === 3" class="section">
            <div class="row justify-content-center">
              <div class="col-11 col-lg-10">
                <h3 class="text-green mb-4 mt-5">NUESTRA LABOR</h3>
                <p class="text-roboto">La Dirección de Inspección de Edificios Privados y Espacios Públicos (DIEPEP) es el área encargada de otorgar permisos de obra de mantenimiento edilicio en cumplimiento con lo dispuesto en la ordenanza 1847/02 y sus modificatorias.</p>
              </div>
            </div>
          </div>

          <!-- Información de Contacto (siempre visible) -->
          <div class="contact-section">
            <h3 class="text-green text-center mb-5">Información de Contacto</h3>
            <div class="row justify-content-center mt-5">
              <div class="col-md-10">
                <div class="row">
                  <div class="col-md-3 mb-3">
                    <h6 class="text-black text-roboto">Secretaría de Planeamiento, Obras y <br/> Servicios Públicos</h6>
                    <p class="small text-muted text-roboto">
                      <b-icon icon="geo-alt-fill"/> Avenida 6 N.° 660<br>
                    <b-icon icon="telephone-fill"/> (2255) 46-7923<br>
                    <b-icon icon="clock-fill"/> Lunes a Viernes de 8 a 14<br>
                    <b-icon icon="envelope-fill"/> planeamiento@gesell.gob.ar</p>
                  </div>
                  <div class="col-md-3 mb-3">
                    <h6 class="text-black text-roboto">Dirección Obras Particulares (D.O.P.)</h6>
                    <p class="small text-muted text-roboto">
                      <b-icon icon="geo-alt-fill"/> Avenida 3 N.º 820 1 piso<br>
                    <b-icon icon="telephone-fill"/> (2255) 47-8044<br>
                    <b-icon icon="clock-fill"/> Lunes a Viernes de 8 a 14<br>
                    <b-icon icon="envelope-fill"/> obrasparticulares@gesell.gob.ar</p>
                  </div>
                  <div class="col-md-3 mb-3">
                    <h6 class="text-black text-roboto">Dirección de Inspección de <br/> Edificios Privados y Espacios Públicos (D.I.E.P.E.P.)</h6>
                    <p class="small text-muted text-roboto">
                      <b-icon icon="geo-alt-fill"/> Avenida 6 N°660<br>
                    <b-icon icon="telephone-fill"/> (2255) 45-4483<br>
                    <b-icon icon="clock-fill"/> Lunes a Viernes de 8 a 14<br>
                    <b-icon icon="envelope-fill"/> dirinspyfachadabalcones@gesell.gob.ar</p>
                  </div>
                  <div class="col-md-3 mb-3">
                    <h6 class="text-black text-roboto">Secretaría de Hábitat</h6>
                    <p class="small text-muted text-roboto">
                      <b-icon icon="geo-alt-fill"/> Avenida 5 N°522<br>
                    <b-icon icon="telephone-fill"/> (2255) 47-8240<br>
                    <b-icon icon="clock-fill"/> Lunes a Viernes de 8 a 14<br>
                    <b-icon icon="envelope-fill"/> habitat@gesell.gob.ar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      selectedOption: null,
      collapseStates: {
        matricula: false,
        solicitud: false,
        horarios: false,
        documentacion: false,
      },
    }
  },
  methods: {
    selectOption(option) {
      // Si se hace clic en el mismo botón que ya está seleccionado, deseleccionarlo
      if (this.selectedOption === option) {
        this.selectedOption = null;
      } else {
        this.selectedOption = option;
        
        // Scroll suave hacia la sección correspondiente
        this.$nextTick(() => {
          const targetElement = document.querySelector('.section');
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      }
    },

    toggleCollapse(section) {
      this.collapseStates[section] = !this.collapseStates[section];
    }
  }
}
</script>

<style scoped>
.main-background{
  background-color: #f8f5f5;
}

.section-card{
  margin: 2rem 0;
  padding: 0.5rem 0.5rem;
  border-radius: 8px !important;
  box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.15);
  -webkit-box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.15);
  -moz-box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.15);
  border: none !important;
}

.cards-section {
  width: 100%;
  padding: 2rem 0;
}

.text-green {
  color: #0c681a !important;
}

.section-card {
  background-color: white !important;
}

.section-card .card-header {
  background-color: white !important;
  border-bottom: none !important;
  padding: 1rem 1.5rem !important;
  border-radius: 12px !important;
}

.section-card .card-body {
  padding: 0 0 1.5rem 0 !important;
}

.section-card .card-body ul {
  padding-left: 1.3rem !important;
}

.section-card .card-body:empty {
  display: none !important;
  padding: 0 !important;
  margin: 0 !important;
  height: 0 !important;
  min-height: 0 !important;
  overflow: hidden !important;
}

.collapse-content {
  margin: 0 0.2rem !important;
  padding: 0 !important;
}

.collapse-content.collapse:not(.show) {
  display: none !important;
  height: 0 !important;
  overflow: hidden !important;
}

.collapse-content .text-black {
  color: #505050 !important;
}

/* Estilos para viñetas de la lista principal */
ul.text-roboto {
  list-style: none;
  padding-left: 0;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

ul.text-roboto li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

ul.text-roboto li::before {
  content: "•";
  position: absolute;
  left: 0;
  top: 0;
  color: #505050;
  font-size: 1.2rem;
  font-weight: bold;
}

/* Estilos para viñetas dentro de las cards */
.section-card ul.text-roboto li {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #505050;
  line-height: 1.37;
  font-weight: normal;
}

.section-card ul.text-roboto li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.2rem;
  width: 1rem;
  height: 1rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23ff6b00' viewBox='0 0 16 16'%3E%3Cpath d='m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: contain;
}

/* Estilos específicos para la card de Documentación */
.documentacion-card .text-dark{
  padding-left: 1.3rem !important;
}

.section-card.documentacion-card ul.text-roboto li {
  font-size: 1rem;
  margin-bottom: 0.3rem;
  color: #0c681a;
  line-height: 1.4;
}

.section-card.documentacion-card ul.text-roboto li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.1rem;
  width: 1rem;
  height: 1rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23ff6b00' viewBox='0 0 16 16'%3E%3Cpath d='m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: contain;
}

a{
  color: #0c681a;
}
/* Estilos para enlaces en la lista de documentación */
.section-card.documentacion-card ul.text-roboto li a {
  color: #0c681a;
  text-decoration: none;
  transition: color 0.3s ease;
}

.section-card.documentacion-card ul.text-roboto li a:hover {
  color: #ff6b00;
  text-decoration: underline;
}

.section-card.documentacion-card ul.text-roboto li a:visited {
  color: #0c681a;
}

.section-card .card-body p {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1rem;
  line-height: 1.6;
  font-size: 1.1rem;
  color: #343434bc;
  font-weight: normal;
}

.section-card .card-body p b {
  font-weight: 500;
}

/* Asegurar que text-muted tenga peso de fuente normal */
.text-muted {
  font-weight: normal !important;
}

/* Mejorar legibilidad de textos pequeños con mayor espaciado entre letras */
.small {
  letter-spacing: 0.25px;
}

/* Estilos para iconos en datos de contacto */

.contact-section .text-roboto {
  color: #505050;
}

.contact-section .small .b-icon {
  color: #bbbbbb;
  margin-right: 0.5rem;
  font-size: 1rem;
}

/* Estilos específicos para párrafos en la card de Documentación */
.section-card.documentacion-card .card-body p {
  color: #0c681a;
}

.section-card .card-body p:last-child {
  margin-bottom: 0;
}

.section-card .card-header h5 {
  font-size: 1.5rem;
  color: #15571f;
  font-weight: bold;
}

/* Estilos para el texto superpuesto en la imagen hero */
.hero-container {
  position: relative;
  width: 100%;
  margin-top: 1.6rem;
  padding: 0;
}

.hero-text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
  width: 90%;
  max-width: 800px;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 2rem 3rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
}

.hero-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 3.5rem;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
  line-height: 1.2;
  letter-spacing: 1px;
}

/* Responsive para el texto hero */
@media (max-width: 1200px) {
  .hero-title {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
    line-height: 1.1;
  }
  
  .hero-text-overlay {
    width: 95%;
    padding: 1.5rem 2rem;
    border-radius: 15px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.8rem;
    line-height: 1.1;
  }
  
  .hero-text-overlay {
    padding: 1rem 1.5rem;
    border-radius: 12px;
  }
}
</style> 