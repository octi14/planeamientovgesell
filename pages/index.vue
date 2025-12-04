<template>
  <div class="page main-background">
    <div class="container-fluid">
      <div class="row no-gutters">
        <div class="col-12">
          
          <!-- Hero Section -->
          <div class="hero-section">
            <div class="hero-container">
              <img src="~/assets/css/img/Banner.png" alt="Planeamiento, Hábitat y Vivienda" class="hero-image">
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
              
              <div class="cards-section">
              <div class="row justify-content-center">
                <div class="col-11 col-lg-10">
                  <!-- PLAN PARTICULARIZADO -->
                  <b-card class="section-card shadow-card mb-3">
                    <template #header>
                      <div class="d-flex justify-content-between align-items-center" @click="toggleCollapse('planeamientoPlanParticularizado')" style="cursor: pointer;">
                        <h5 class="text-green mb-0">Plan particularizado</h5>
                        <b-icon :icon="collapseStates.planeamientoPlanParticularizado ? 'chevron-up' : 'chevron-down'"></b-icon>
                      </div>
                    </template>
                    <template #default v-if="collapseStates.planeamientoPlanParticularizado">
                      <b-collapse :visible="collapseStates.planeamientoPlanParticularizado" class="collapse-content">
                        <p class="text-black text-roboto">Es el proceso destinado a la ampliación del ejido urbano a través de la subdivisión en manzanas de grandes fracciones de tierra, el proceso debe tener de un profesional con incumbencia en urbanismo.</p>
                        <p class="text-black text-roboto"><b>Requisitos:</b></p>
                        <ul class="text-roboto">
                          <li>Acreditar titularidad.</li>
                          <li>Relevamiento altimétrico y certificación de deslindes con demarcación de línea emitida por la Autoridad Del Agua  de ribera (si correspondiese).</li>
                          <li>Solicitar permiso de fijación de dunas (si correspondiese).</li>
                          <li>Presentar proyecto urbanístico colegiado en observancia de la Ley 8.912, el Decreto 3.202 y el Plan de Ordenamiento Municipal vigente. En caso de corresponder el proyecto de presentar la incorporación con la red vial provincial.</li>
                          <li>Presentar proyecto de subdivisión realizado por agrimensor y colegiado.</li>
                          <li>Presentar Factibilidad de suministro de Agua emitido por Obras Sanitarias, cualitativo y cuantitativo.</li>
                          <li>Presentar Factibilidad de adecuada potencia eléctrica emitido por CEVIGE LTDA.</li>
                          <li>Presentar Factibilidad de servicio de cloacas emitido por ABSA, en caso de no contar con servicio al cual conectarse deberá presentar la Prefactibilidad de consumo, tratamiento y vuelco hídrico emitido por la Autoridad Del Agua.</li>
                          <li>Presentar proyectos ejecutivos de redes de infraestructura.</li>
                          <li>Presentar Evaluación de Impacto Ambiental emitida por profesional competente en la materia.</li>
                          <li>Participación en la audiencia pública correspondiente.</li>
                          <li>Pago de tasa de visado para proyecto particularizado.</li>
                          <li>Cumplimento de la participación municipal en la plusvalía.</li>
                        </ul>
                      </b-collapse>
                    </template>
                  </b-card>
                  <!-- CERTIFICADO URBANISTICO -->
                  <b-card class="section-card shadow-card mb-3">
                    <template #header>
                      <div class="d-flex justify-content-between align-items-center" @click="toggleCollapse('planeamientoCertificadoUrbanistico')" style="cursor: pointer;">
                        <h5 class="text-green mb-0">Certificado urbanístico</h5>
                        <b-icon :icon="collapseStates.planeamientoCertificadoUrbanistico ? 'chevron-up' : 'chevron-down'"></b-icon>
                      </div>
                    </template>
                    <template #default v-if="collapseStates.planeamientoCertificadoUrbanistico">
                      <b-collapse :visible="collapseStates.planeamientoCertificadoUrbanistico" class="collapse-content">
                        <p class="text-black text-roboto">Planilla emitida por la Secretaría que informa las características, indicadores y usos permitidos a un lote espécifico, el periodo de validez del mismo es de 1 año a partir de su emisión.</p>
                        <p class="text-black text-roboto"><b>Requisitos:</b></p>
                        <ul class="text-roboto">
                          <li>Acreditar titularidad.</li>
                          <li><a href="https://drive.google.com/file/d/1bi5aTktUwQHnqB5HTODNtdzhW3pTU17w/view" target="_blank" rel="noopener noreferrer">Presentar nota de solicitud.</a></li>
                        </ul>
                      </b-collapse>
                    </template>
                  </b-card>
                  <!-- PERMISO DE APERTURA DE CALLES -->
                  <b-card class="section-card shadow-card mb-3">
                    <template #header>
                      <div class="d-flex justify-content-between align-items-center" @click="toggleCollapse('planeamientoAperturaCalles')" style="cursor: pointer;">
                        <h5 class="text-green mb-0">Permiso de apertura de calles</h5>
                        <b-icon :icon="collapseStates.planeamientoAperturaCalles ? 'chevron-up' : 'chevron-down'"></b-icon>
                      </div>
                    </template>
                    <template #default v-if="collapseStates.planeamientoAperturaCalles">
                      <b-collapse :visible="collapseStates.planeamientoAperturaCalles" class="collapse-content">
                        <p class="text-black text-roboto">Trámite destinado a la autorización del particular interesado en realizar la apertura de calles anteriormente cedidas.</p>
                        <p class="text-black text-roboto"><b>Requisitos:</b></p>
                        <ul class="text-roboto">
                          <li>Acreditar titularidad relativa a la apertura (la calle que desee abrir debe estár conectada al lote del particular interesado)</li>
                          <li><a href="https://drive.google.com/file/d/1Gxak0zFjPBOunzQXr4Zaq2Peb_DjjXzA/view" target="_blank" rel="noopener noreferrer">Presentar nota de solicitud.</a></li>
                        </ul>
                      </b-collapse>
                    </template>
                  </b-card>
                  <!-- Evaluaciones de impacto ambiental -->
                  <b-card class="section-card shadow-card mb-3">
                    <template #header>
                      <div class="d-flex justify-content-between align-items-center" style="cursor: pointer;">
                        <h5 class="text-green mb-0"><a href="https://www.gesell.gob.ar/novedad/49918/estudios-y-declaratorias-de-impacto-ambiental.html" target="_blank">Evaluaciones de impacto ambiental</a></h5>
                      </div>
                    </template>
                  </b-card>
                  <!-- Documentación  -->
                  <b-card class="section-card shadow-card mb-3">
                    <template #header>
                      <div class="d-flex justify-content-between align-items-center" @click="toggleCollapse('planeamientoDocumentacion')" style="cursor: pointer;">
                        <h5 class="text-green mb-0">Documentación</h5>
                        <b-icon :icon="collapseStates.planeamientoDocumentacion ? 'chevron-up' : 'chevron-down'"></b-icon>
                      </div>
                    </template>
                    <template #default v-if="collapseStates.planeamientoDocumentacion">
                      <b-collapse :visible="collapseStates.planeamientoDocumentacion" class="collapse-content">
                        <ul class="text-roboto">
                          <li><a href="https://drive.google.com/file/d/1C98Z-sC4UhKp43op5zBFl3ndqSZNa8Rk/view" target="_blank" rel="noopener noreferrer">Plan de Ordenamiento Municipal</a></li>
                          <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&id=CDFD5F6443FDC16A%21s0559b1c958a1437187d2b8c6ee93afc4&parId=CDFD5F6443FDC16A%21sfe2c638f43224981b71bccbc58f0c6dd&o=OneUp" target="_blank" rel="noopener noreferrer">Plano de zonas</a></li>
                          <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&id=CDFD5F6443FDC16A%21s2ac93a3892034e12bd747208ebbb1855&parId=CDFD5F6443FDC16A%21s5903fb2476024c6abf69d18613878d32&o=OneUp" target="_blank" rel="noopener noreferrer">Programa Mí Lote</a></li>
                        </ul>
                      </b-collapse>
                    </template>
                  </b-card>
                </div>
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
            <div class="li-row importante-card col-11 col-lg-10">
                  <b-row style="width:100%">
                      <b-col md="2" style="padding-right: 0;">
                          <b-icon-exclamation-circle variant="dark" font-scale="5"></b-icon-exclamation-circle>
                      </b-col>
                      <b-col md="10" style="padding-left: 0;">
                          <p class="subtitle"><b>IMPORTANTE!</b></p>
                          <p>Si considerás construir, consultá previamente a un profesional matriculado (arquitecto, ingeniero o maestro mayor de obras), ya que ellos son los únicos capacitados para interpretar y aplicar el Código de Edificación y Planificación Urbana.
Evitá multas, recargos, clausuras, paralización, demolición y/o suspensión de obras.</p>
                      </b-col>
                  </b-row>
              </div>
            <div class="cards-section">
              <div class="row justify-content-center">
                <div class="col-11 col-lg-10">
              <!-- ¿Cómo matricularse como profesional? -->
              <b-card class="section-card shadow-card mb-3">
                <template #header>
                  <div class="d-flex justify-content-between align-items-center" @click="toggleCollapse('obrasParticularesMatricula')" style="cursor: pointer;">
                    <h5 class="text-green mb-0">¿Cómo matricularse como profesional?</h5>
                    <b-icon :icon="collapseStates.obrasParticularesMatricula ? 'chevron-up' : 'chevron-down'"></b-icon>
                  </div>
                </template>
                <template #default v-if="collapseStates.obrasParticularesMatricula">
                  <b-collapse :visible="collapseStates.obrasParticularesMatricula" class="collapse-content">
                    <p class="text-black text-roboto">El trámite se realiza de forma presencial en nuestra oficina. Debe traer:</p>
                    <ul class="text-roboto">
                      <li>Comprobante de Matrícula Provincial al día</li>
                      <li>Fotocopia de DNI.</li>
                    </ul>
                    <p class="text-black text-roboto">Se le pedirá <b> abonar Inscripción Profesional y Matrícula Municipal Anual. </b> El número de Matrícula Municipal le será otorgado en el momento.<b> Recuerde que para cualquier presentación debe tener la matrícula municipal al día.</b></p>
                  </b-collapse>
                </template>
              </b-card>

              <!-- Solicitud de Copia de Plano -->
              <b-card class="section-card shadow-card mb-3">
                <template #header>
                  <div class="d-flex justify-content-between align-items-center" @click="toggleCollapse('obrasParticularesSolicitud')" style="cursor: pointer;">
                    <h5 class="text-green mb-0">Solicitud de Copia de Plano</h5>
                    <b-icon :icon="collapseStates.obrasParticularesSolicitud ? 'chevron-up' : 'chevron-down'"></b-icon>
                  </div>
                </template>
                <template #default v-if="collapseStates.obrasParticularesSolicitud">
                  <b-collapse :visible="collapseStates.obrasParticularesSolicitud" class="collapse-content">
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
                  <div class="d-flex justify-content-between align-items-center" @click="toggleCollapse('obrasParticularesHorarios')" style="cursor: pointer;">
                    <h5 class="text-green mb-0">Horarios de Trabajo de Obra</h5>
                    <b-icon :icon="collapseStates.obrasParticularesHorarios ? 'chevron-up' : 'chevron-down'"></b-icon>
                  </div>
                </template>
                <template #default v-if="collapseStates.obrasParticularesHorarios">
                  <b-collapse :visible="collapseStates.obrasParticularesHorarios" class="collapse-content">
                    <p class="text-black text-roboto">Los horarios de trabajo de obra están regulados por la
                    <a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&sb=name&sd=1&id=CDFD5F6443FDC16A%21sd9f1f92abc534e9e88d3db0c0b7bb69f&parId=CDFD5F6443FDC16A%21s5903fb2476024c6abf69d18613878d32&o=OneUp" target="_blank"><u>Ordenanza 3494/24</u></a>
                       y varían según la zona y época.</p>
                  </b-collapse>
                </template>
              </b-card>

              <!-- Documentación -->
              <b-card class="section-card shadow-card mb-3 documentacion-card">
                <template #header>
                  <div class="d-flex justify-content-between align-items-center" @click="toggleCollapse('obrasParticularesDocumentacion')" style="cursor: pointer;">
                    <h5 class="text-green mb-0">Documentación</h5>
                    <b-icon :icon="collapseStates.obrasParticularesDocumentacion ? 'chevron-up' : 'chevron-down'"></b-icon>
                  </div>
                </template>
                <template #default v-if="collapseStates.obrasParticularesDocumentacion">
                  <b-collapse :visible="collapseStates.obrasParticularesDocumentacion" class="collapse-content">
                    <h6 class="text-dark font-weight-bold text-roboto">Códigos y ordenanzas</h6>
                    <ul class="text-roboto">
                      <li><a href="https://drive.google.com/file/d/1C98Z-sC4UhKp43op5zBFl3ndqSZNa8Rk/view" target="_blank" rel="noopener noreferrer">Plan de Ordenamiento Municipal</a></li>
                      <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&id=CDFD5F6443FDC16A%21s845dc44950f04c3c9b14b7c448a0a976&parId=CDFD5F6443FDC16A%21s5903fb2476024c6abf69d18613878d32&o=OneUp" target="_blank" rel="noopener noreferrer">Ordenanza de presentaciones y procedimientos municipales 961/92</a></li>
                      <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&id=CDFD5F6443FDC16A%21s0559b1c958a1437187d2b8c6ee93afc4&parId=CDFD5F6443FDC16A%21sfe2c638f43224981b71bccbc58f0c6dd&o=OneUp" target="_blank" rel="noopener noreferrer">Plano Zonas, Índices y Planilla de Usos</a></li>
                      <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&sb=name&sd=1&id=CDFD5F6443FDC16A%21scae59ad208ad4aed8afd5348a3db87d6&parId=CDFD5F6443FDC16A%21sfe2c638f43224981b71bccbc58f0c6dd&o=OneUp" target="_blank" rel="noopener noreferrer">Plano Zonas Distritos Comerciales</a></li>
                      <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&sb=name&sd=1&id=CDFD5F6443FDC16A%21s16226b8db5cc454c92c6205dd9950636&parId=CDFD5F6443FDC16A%21sfe2c638f43224981b71bccbc58f0c6dd&o=OneUp" target="_blank" rel="noopener noreferrer">Plano Zonas Tributarias</a></li>
                      <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy9DREZENUY2NDQzRkRDMTZBL0ViaVRBX1E0eHg5TG0xOUw3WERScWt3QkVJVkhOSko4TThmRmlXX2VIdW1ScWc&cid=CDFD5F6443FDC16A&id=CDFD5F6443FDC16A%21sf40393b8c7384b1f9b5f4bed70d1aa4c&parId=CDFD5F6443FDC16A%21s5903fb2476024c6abf69d18613878d32&o=OneUp" target="_blank" rel="noopener noreferrer">Resolución para Alojamientos Turísticos (Res. 23/14)</a></li>
                      <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&id=CDFD5F6443FDC16A%21s7f8ca017b1cd493f852bb85704621bf8&parId=CDFD5F6443FDC16A%21s5903fb2476024c6abf69d18613878d32&o=OneUp" target="_blank" rel="noopener noreferrer">Visado Web y Planilla de Visado (Decreto 662/24)</a></li>
                      <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&id=CDFD5F6443FDC16A%21s2ac93a3892034e12bd747208ebbb1855&parId=CDFD5F6443FDC16A%21s5903fb2476024c6abf69d18613878d32&o=OneUp" target="_blank" rel="noopener noreferrer">Programa MI LOTE y presentación Municipal</a></li>
                      <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VzXzVTcUw0SEJCQmo5dE9VSGlUMWFVQlliTGpHTHNOM3lDN1NhWkVybWNDU1E&id=CDFD5F6443FDC16A%21s3ffb686bc57d488fb432faef73827619&cid=CDFD5F6443FDC16A&sb=name&sd=1&v=validatepermission" target="_blank" rel="noopener noreferrer">Ordenanzas Patrimonios</a></li>
                      <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VzXzVTcUw0SEJCQmo5dE9VSGlUMWFVQlliTGpHTHNOM3lDN1NhWkVybWNDU1E&id=CDFD5F6443FDC16A%21s5e622e63d09b4cd786d34a5f3ef3e15e&cid=CDFD5F6443FDC16A&sb=name&sd=1&v=validatepermission" target="_blank" rel="noopener noreferrer">Ordenanzas Veredas</a></li>
                    </ul>
                    
                    <h6 class="text-dark font-weight-bold text-roboto">Multas</h6>
                    <ul class="text-roboto">
                      <li>Ordenanzas de multas (Ord. 931/91 – <a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&sb=name&sd=1&id=CDFD5F6443FDC16A%21scbb8e9406658439fbecfbd6dd2457b4f&parId=CDFD5F6443FDC16A%21s3f16db73217249318a969ea2fdbb1bf6&o=OneUp" target="_blank" rel="noopener noreferrer">2283/09</a> – 2243/17 – 2708/17 – <a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&sb=name&sd=1&id=CDFD5F6443FDC16A%21s761e9b92a43242f08077edf5228ebd89&parId=CDFD5F6443FDC16A%21s3f16db73217249318a969ea2fdbb1bf6&o=OneUp" target="_blank" rel="noopener noreferrer">2742/17</a> – <a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&sb=name&sd=1&id=CDFD5F6443FDC16A%21s7347a6b25f004d01980ea5e844ca9c95&parId=CDFD5F6443FDC16A%21s3f16db73217249318a969ea2fdbb1bf6&o=OneUp" target="_blank" rel="noopener noreferrer">3325/22</a>)</li>
                      <!-- <li>Planilla de liquidación de multas</li> -->
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
                <p class="text-roboto">La Dirección de Inspección de Edificios Privados y Espacios Públicos (DIEPEP) es el área encargada de otorgar permisos de obra de mantenimiento de fachadas de edificios y del control de la aplicación de las ordenanza de inspección, conservación y mantenimiento de marquesinas, carteles, ascensores y montacargas.</p>
              </div>
            </div>
            <div class="cards-section">
              <div class="row justify-content-center">
                <div class="col-11 col-lg-10">
                  <!-- Documentación  -->
                  <b-card class="section-card shadow-card mb-3">
                    <template #header>
                      <div class="d-flex justify-content-between align-items-center" @click="toggleCollapse('diepepDocumentacion')" style="cursor: pointer;">
                        <h5 class="text-green mb-0">Documentación</h5>
                        <b-icon :icon="collapseStates.diepepDocumentacion ? 'chevron-up' : 'chevron-down'"></b-icon>
                      </div>
                    </template>
                    <template #default v-if="collapseStates.diepepDocumentacion">
                      <b-collapse :visible="collapseStates.diepepDocumentacion" class="collapse-content">
                        <ul class="text-roboto">
                          <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VwdGFwc2Y2YU54T3BTd3V5VENqSndjQkhIb2dMeHdyUWl3SFhUd3dyeGFRX3c&cid=CDFD5F6443FDC16A&id=CDFD5F6443FDC16A%21s2fd36b6e8f9e4e309febce56b2cd99fa&parId=CDFD5F6443FDC16A%21sc7a65a9b68fa4edca52c2ec930a32707&o=OneUp" target="_blank" rel="noopener noreferrer">Ord. 1847/02</a></li>
                          <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VwdGFwc2Y2YU54T3BTd3V5VENqSndjQkhIb2dMeHdyUWl3SFhUd3dyeGFRX3c&cid=CDFD5F6443FDC16A&id=CDFD5F6443FDC16A%21s2253d9787dc848969727fb40b9302cdd&parId=CDFD5F6443FDC16A%21sc7a65a9b68fa4edca52c2ec930a32707&o=OneUp" target="_blank" rel="noopener noreferrer">Ord. 3264/22 </a></li>
                          <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VwdGFwc2Y2YU54T3BTd3V5VENqSndjQkhIb2dMeHdyUWl3SFhUd3dyeGFRX3c&cid=CDFD5F6443FDC16A&id=CDFD5F6443FDC16A%21s725488758bf54454a961723e94c89c05&parId=CDFD5F6443FDC16A%21sc7a65a9b68fa4edca52c2ec930a32707&o=OneUp" target="_blank" rel="noopener noreferrer">Decreto Reglamentario 142/20</a></li>
                        </ul>
                      </b-collapse>
                    </template>
                  </b-card>
                </div>
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
      expandedCards: [],
      collapseStates: {
        planeamientoPlanParticularizado: false,
        planeamientoCertificadoUrbanistico: false,
        planeamientoAperturaCalles: false,
        planeamientoDocumentacion: false,
        obrasParticularesMatricula:false,
        obrasParticularesSolicitud: false,
        obrasParticularesHorarios: false,
        obrasParticularesDocumentacion: false,
        diepepDocumentacion:false,
      },
    }
  },
  methods: {
    selectOption(option) {
      // Si se hace clic en el mismo botón que ya está seleccionado, deseleccionarlo
      if (this.selectedOption === option) {
        this.selectedOption = null;
        console.log('Botón deseleccionado - volviendo al estado inicial');
      } else {
        this.selectedOption = option;
        console.log(`Opción seleccionada: ${option}`);
        
        // Scroll suave hacia la sección correspondiente
        this.$nextTick(() => {
          const sectionMap = {
            1: '.section', // Para PLANEAMIENTO, HÁBITAT Y VIVIENDA
            2: '.obras-section', // Para OBRAS PARTICULARES
            3: '.section' // Para D.I.E.P.E.P.
          };
          
          const targetSelector = sectionMap[option];
          if (targetSelector) {
            const targetElement = document.querySelector(targetSelector);
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }
        });
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


.obras-section {
  background-color: #f0f0f0;
  padding: 1rem 2rem;
}

.cards-wrapper {
  margin: 0 auto;
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

.importante-card{
  min-width: 80% !important;
  background-color: #FACD8A;
  padding: 1rem;
  border-radius: 1rem;
  padding-bottom: 2rem;
  margin: 1rem auto 0;
}
.importante-card .subtitle{
  font-size: 1.8rem;
  margin-bottom: 1rem;
}
.importante-card .subtitle a{
  color: #353535;
  text-decoration: underline;
}
.importante-card p{
  font-size: 1.1rem;
  color: #353535;
}
.importante-card .bi-exclamation-circle{
  margin-left: 20%;
  margin-top: 10%;
  text-align: center;
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
    padding: 0;
    border-radius: 15px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.8rem;
    line-height: 1.1;
  }
  
  .hero-text-overlay {
    padding: 0;
    border-radius: 12px;
  }
}
@media (max-width: 1200px) {
  .col-8{
    max-width: 80%;
  }
  .importante-card .subtitle{
      font-size: 28px !important;
  }
  .importante-card p{
    font-size: 18px !important;
  }
  .importante-card .bi-exclamation-circle{
    margin-left: 20%;
    margin-top: 10%;
    text-align: center;
  }
}

@media (max-width: 720px){
  .col-8{
    max-width: 90%;
  }
  .importante-card p{
      font-size: 18px !important;
      text-align: center;
  }
  .importante-card .row{
    text-align: center !important;
    margin: 0 auto !important;
  }
  .importante-card .col-md-2, .importante-card .col-md-10{
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .importante-card .bi-exclamation-circle{
    margin-left: 0;
    margin-top: 10%;
    text-align: center;
  }
}

</style> 