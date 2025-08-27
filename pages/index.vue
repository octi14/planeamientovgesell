<template>
  <div class="page main-background">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          
          <!-- Hero Section -->
          <div class="hero-section">
            <img src="~/assets/css/img/heroimg.png" alt="Planeamiento, Hábitat y Vivienda" class="hero-image">
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
                <div class="col-8">
                  <h3 class="text-green mb-3">NUESTRA LABOR</h3>
                  <p class="text-roboto">La Dirección de Vivienda y Hábitat fue creada en el 2015 con el objetivo de atender la demanda habitacional, mediante la ejecución de obras de urbanización, infraestructura y equipamiento, asegurando el acceso a una vivienda digna en igualdad de oportunidades para los distintos sectores sociales, con el fin de constituir un hábitat digno, dotado de servicios y sin riesgo ambiental que contribuya al desarrollo de nuestro Partido mejorando o transformando así sus condiciones de vida.</p>
                  <p class="text-roboto">Asimismo, se trabaja en forma conjunta con la Escribanía General de Gobierno y la Subsecretaría Social de Tierras, Urbanismo y Vivienda en la regularización dominial de inmuebles.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Vista del Botón 2: OBRAS PARTICULARES -->
          <div v-if="selectedOption === 2" class="obras-section">
            <h3 class="text-green text-center mb-4 mt-5">NUESTRA LABOR</h3>
            <ul class="col-8 my-4 mb-5 mx-auto text-roboto">
              <li>Disponer e informar en lo relativo a la aplicación del Plan de Ordenamiento Municipal, las normativas constructivas y de aquellas normas que lo complementen.</li>
              <li>Administrar el registro de construcciones de obras civiles que se proyectan y ejecutan en el ámbito del Partido de Villa Gesell.</li>
              <li>Ofrecer una respuesta integral, confiable, en tiempo y forma de las solicitudes de trámites que realizan los administrados, respecto del registro para las obras civiles y privadas, nuevas o remodeladas, así como todas las instalaciones.</li>
              <li>Mejorar la calidad de nuestros procesos, potenciando la profesionalidad de nuestros agentes; siendo una organización eficaz, eficiente y transparente.</li>
            </ul>

            <div class="cards-wrapper">
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
                    <p class="text-roboto">El trámite se realiza de forma presencial en nuestra oficina. Debe traer:</p>
                    <ul class="text-roboto">
                      <li>Comprobante de Matrícula Provincial al día y</li>
                      <li>Fotocopia de DNI.</li>
                    </ul>
                    <p class="text-roboto">Se le pedirá <b> abonar Inscripción Profesional y Matrícula Municipal Anual. </b> El número de Matrícula Municipal le será otorgado en el momento.<b> Recuerde que para cualquier presentación debe tener la matrícula municipal al día.</b></p>
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
                    <p class="text-roboto">Contenido de solicitud de copia de plano...</p>
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
                    <p class="text-roboto">Según lo determinado por la <strong>Ordenanza 3494/24</strong>:</p>
                    <ul class="text-roboto">
                      <li>Desde 16/03 al 14/12 (art. 10): Lunes a viernes de 08:00 a 19:00 hs.</li>
                      <li>Desde 15/12 al 15/03 (art. 2): Lunes a viernes de 10:00 a 14:00 hs. y de 16:00 a 20:00 hs.</li>
                    </ul>
                    <p class="text-roboto">Ver disposiciones particulares</p>
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
                      <li>Plan de Ordenamiento Municipal</li>
                      <li>Ordenanza de presentaciones y procedimientos municipales 961/92</li>
                      <li>Plano Zonas, Índices y Planilla de Usos</li>
                      <li>Plano Zonas Distritos Comerciales</li>
                      <li>Plano Zonas Tributarias</li>
                      <li>Resolución para Alojamientos Turísticos (Res. 23/14)</li>
                      <li>Valores vigentes de Tasa de Visado y Multas</li>
                      <li>Visado Web y Planilla de Visado (Decreto 662/24)</li>
                      <li>Programa MI LOTE y presentación Municipal</li>
                    </ul>
                    
                    <h6 class="text-dark font-weight-bold text-roboto">Multas</h6>
                    <ul class="text-roboto">
                      <li>Ordenanzas de multas (Ord. 931/91 – 2283/09 – 2243/17 – 2708/17 – 2742/17 – 3325/22)</li>
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

          <!-- Información de Contacto (siempre visible) -->
          <div class="contact-section">
            <h3 class="text-green text-center mb-5">Información de Contacto</h3>
            <div class="row justify-content-center mt-5">
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-3 mb-3">
                    <h6 class="text-black text-roboto">Secretaría de Planeamiento, Obras y <br/> Servicios Públicos</h6>
                    <p class="small text-muted text-roboto">Avenida 6 N.°<br>
                    Tel.: <br>
                    Horario: <br>
                    Mail: </p>
                  </div>
                  <div class="col-md-3 mb-3">
                    <h6 class="text-black text-roboto">Dirección Obras Particulares (D.O.P.)</h6>
                    <p class="small text-muted text-roboto">Avenida 3 N.º 820 1 piso<br>
                    Tel: 02255 478044<br>
                    Horario: lunes a viernes de 8h a 14h<br>
                    Mail: obrasparticulares@gesell.gob.ar</p>
                  </div>
                  <div class="col-md-3 mb-3">
                    <h6 class="text-black text-roboto">Dirección de Inspección de <br/> Edificios Privados y Espacios Públicos (D.I.E.P.E.P.)</h6>
                    <p class="small text-muted text-roboto">Avenida 6 N°660<br>
                    Tel.: 02255 454483<br>
                    Horario: lunes a viernes de 8h a 14h<br>
                    Mail: dirinspyfachadabalcones@gesell.gob.ar</p>
                  </div>
                  <div class="col-md-3 mb-3">
                    <h6 class="text-black text-roboto">Dirección de Hábitat</h6>
                    <p class="small text-muted text-roboto">Avenida 5 N°522<br>
                    Horario: Lunes a Viernes de 8 a 14hs</p>
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
      expandedCards: [],
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
      // No hacer nada si es la opción 3 (DIEPEP) porque no hay contenido
      if (option === 3) {
        console.log('Opción DIEPEP seleccionada - sin contenido disponible');
        return;
      }
      
      // Si se hace clic en el mismo botón que ya está seleccionado, deseleccionarlo
      if (this.selectedOption === option) {
        this.selectedOption = null;
        console.log('Botón deseleccionado - volviendo al estado inicial');
      } else {
        this.selectedOption = option;
        console.log(`Opción seleccionada: ${option}`);
      }
    },
    
    toggleCard(cardIndex) {
      if (this.expandedCards.includes(cardIndex)) {
        this.expandedCards = this.expandedCards.filter((index) => index !== cardIndex);
      } else {
        this.expandedCards.push(cardIndex);
      }
    },
    
    isCardExpanded(cardIndex) {
      return this.expandedCards.includes(cardIndex);
    },

    toggleCollapse(section) {
      this.collapseStates[section] = !this.collapseStates[section];
    }
  }
}
</script>

<style scoped>
.illustration-placeholder {
  text-align: center;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 10px;
}

/* Estilos del proyecto de redeterminación */
.main-background{
  background-color: #f8f5f5;
}

.shadow-card{
  /* Sombra eliminada para evitar conflictos */
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

.section-title {
  color: #0c681a !important;
  cursor: pointer;
  width: 100%;
  display: inline-block;
  margin-bottom:0px;
  font-weight: bold;
}

.bi-chevron-compact-up, .bi-chevron-compact-down{
  position: absolute;
  right: 20px;
}

.icon-orange{
  color: #E27910;
}

.li-icon, .li-title{
  font-weight: 600;
  color: #0c681a;
}

.li-icon, .li-content{
  display: inline-block;
}

.li-title{
  margin-bottom: 0.3rem;
}

.li-icon{
  margin-right: 1%;
  vertical-align: top;
}

.li-row{
  display: flex;
  width: 100%;
}

.first-li{
  margin-top: 1rem;
}

.first-p{
  margin-bottom: 1rem;
}

/* Estilos para Animaciones de Expansión/Contracción  */
.expanded {
  max-height: 3000px; /* Altura máxima cuando está expandido */
}

.expand-enter-active,
.expand-leave-active {
  transition: max-height 2s ease-out; /* Duración de la animación */
}

.expand-enter,
.expand-leave-to {
  max-height: 0; /* Altura inicial y final de la animación */
  overflow: hidden;
}

@media (max-width: 1200px) {
  .col-8{
    max-width: 80%;
  }
}

@media (max-width: 720px){
  .col-8{
    max-width: 90%;
  }
}

.obras-section {
  background-color: #f0f0f0;
  padding: 1rem 2rem;
}

.cards-wrapper {
  max-width: 70%;
  margin: 0 auto;
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
  padding: 1.5rem !important;
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
  margin: 0.5rem 1rem !important;
  padding: 0 !important;
}

.collapse-content.collapse:not(.show) {
  display: none !important;
  height: 0 !important;
  overflow: hidden !important;
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
  color: #000000;
  font-size: 1.2rem;
  font-weight: bold;
}

/* Estilos para viñetas dentro de las cards */
.section-card ul.text-roboto li {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #000000;
  line-height: 1.6;
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

.section-card .card-body p {
  margin-bottom: 1rem;
  padding: 0 1rem;
  line-height: 1.6;
  font-size: 1.1rem;
  color: #343434bc;
  font-weight: normal;
}

.section-card .card-body p b {
  font-weight: 500;
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
</style> 