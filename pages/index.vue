<template>
  <div class="page main-background">
    <div class="container-fluid">
      <div class="row g-0">
        <div class="col-12">
          
          <!-- Hero Section -->
          <div class="hero-section">
            <div class="hero-container">
              <img src="/assets/css/img/Banner.png" alt="Planeamiento, Hábitat y Vivienda" class="hero-image" loading="eager" fetchpriority="high">
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
                <div class="col-12 col-md-6 col-lg-3 mb-3 d-flex">
                  <MainButton class="w-100" :isActive="selectedOption === 1" @click="selectOption(1)">
                    PLANEAMIENTO
                  </MainButton>
                </div>

                <div class="col-12 col-md-6 col-lg-3 mb-3 d-flex">
                  <MainButton class="w-100" :isActive="selectedOption === 2" @click="selectOption(2)">
                    HÁBITAT Y VIVIENDA
                  </MainButton>
                </div>

                <div class="col-12 col-md-6 col-lg-3 mb-3 d-flex">
                  <MainButton class="w-100" :isActive="selectedOption === 3" @click="selectOption(3)">
                    DIRECCIÓN DE <br />OBRAS PARTICULARES
                  </MainButton>
                </div>

                <div class="col-12 col-md-6 col-lg-3 mb-3 d-flex">
                  <MainButton class="w-100" :isActive="selectedOption === 4" @click="selectOption(4)">
                    D. I. E. P. E. P.
                  </MainButton>
                </div>
              </div>
            </div>
          </div>

          <!-- Vista del Botón 1: PLANEAMIENTO -->
          <div v-if="selectedOption === 1">
            <!-- NUESTRA LABOR Section -->
            <div class="section">
              <div class="row justify-content-center">
                <div class="col-11 col-lg-10">
                  <h3 class="text-green mb-4 mt-5">NUESTRA LABOR</h3>
                  <p class="text-roboto">La Secretaría de Planeamiento, es el área encargada de la planificación estratégica, urbana y territorial, diseñando políticas, proyectos y obras para el desarrollo ordenado de una ciudad o región, coordinando con Obras Públicas, y gestionando el uso del suelo, infraestructura y servicios, buscando el crecimiento sostenible y la mejora de la calidad de vida en un todo de acuerdo con el Plan de Ordenamiento Municipal (POM). De ella dependen, entre otras, la Dirección de Obras Particulares, la Dirección de Hábitat y la Dirección de Inspección de Edificios Privados y Espacios Públicos.</p>
                </div>
              </div>
              
              <div class="cards-section">
                <div class="row justify-content-center">
                  <div class="col-11 col-lg-10">
                    <!-- PLAN PARTICULARIZADO -->
                    <div class="card section-card shadow-card mb-3">
                      <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center" @click="toggleCollapse('planeamientoPlanParticularizado')" style="cursor: pointer;" data-bs-toggle="collapse" :data-bs-target="'#collapse-planeamientoPlanParticularizado'" aria-expanded="false" :aria-controls="'collapse-planeamientoPlanParticularizado'">
                          <h5 class="text-green mb-0">Proyecto particularizado</h5>
                          <i :class="collapseStates.planeamientoPlanParticularizado ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
                        </div>
                      </div>
                      <div v-if="collapseStates.planeamientoPlanParticularizado" class="collapse-content collapse" :class="{ show: collapseStates.planeamientoPlanParticularizado }" id="collapse-planeamientoPlanParticularizado">
                        <div class="card-body">
                          <p class="text-black text-roboto">Es el proceso destinado a la ampliación del ejido urbano a través de la subdivisión en manzanas de grandes fracciones de tierra, el proceso debe tener de un profesional con incumbencia en urbanismo.</p>
                          <p class="text-black text-roboto"><b>Requisitos:</b></p>
                          <ul class="text-roboto">
                            <li>Acreditar titularidad.</li>
                            <li>Relevamiento altimétrico y certificación de deslindes con demarcación de línea emitida por la Autoridad Del Agua de ribera (si correspondiese).</li>
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
                        </div>
                      </div>
                    </div>
                    <!-- CERTIFICADO URBANISTICO -->
                    <div class="card section-card shadow-card mb-3">
                      <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center" @click="toggleCollapse('planeamientoCertificadoUrbanistico')" style="cursor: pointer;" data-bs-toggle="collapse" :data-bs-target="'#collapse-planeamientoCertificadoUrbanistico'" aria-expanded="false" :aria-controls="'collapse-planeamientoCertificadoUrbanistico'">
                          <h5 class="text-green mb-0">Certificado urbanístico</h5>
                          <i :class="collapseStates.planeamientoCertificadoUrbanistico ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
                        </div>
                      </div>
                      <div v-if="collapseStates.planeamientoCertificadoUrbanistico" class="collapse-content collapse" :class="{ show: collapseStates.planeamientoCertificadoUrbanistico }" id="collapse-planeamientoCertificadoUrbanistico">
                        <div class="card-body">
                          <p class="text-black text-roboto">Planilla emitida por la Secretaría que informa las características, indicadores y usos permitidos a un lote específico, el periodo de validez del mismo es de 1 año a partir de su emisión.</p>
                          <p class="text-black text-roboto"><b>Requisitos:</b></p>
                          <ul class="text-roboto">
                            <li>Acreditar titularidad.</li>
                            <li><a href="https://drive.google.com/file/d/1bi5aTktUwQHnqB5HTODNtdzhW3pTU17w/view" target="_blank" rel="noopener noreferrer">Presentar nota de solicitud.</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!-- PERMISO DE APERTURA DE CALLES -->
                    <div class="card section-card shadow-card mb-3">
                      <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center" @click="toggleCollapse('planeamientoAperturaCalles')" style="cursor: pointer;" data-bs-toggle="collapse" :data-bs-target="'#collapse-planeamientoAperturaCalles'" aria-expanded="false" :aria-controls="'collapse-planeamientoAperturaCalles'">
                          <h5 class="text-green mb-0">Permiso de apertura de calles</h5>
                          <i :class="collapseStates.planeamientoAperturaCalles ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
                        </div>
                      </div>
                      <div v-if="collapseStates.planeamientoAperturaCalles" class="collapse-content collapse" :class="{ show: collapseStates.planeamientoAperturaCalles }" id="collapse-planeamientoAperturaCalles">
                        <div class="card-body">
                          <p class="text-black text-roboto">Trámite destinado a la autorización del particular interesado en realizar la apertura de calles anteriormente cedidas.</p>
                          <p class="text-black text-roboto"><b>Requisitos:</b></p>
                          <ul class="text-roboto">
                            <li>Acreditar titularidad relativa a la apertura (la calle que desee abrir debe estar conectada al lote del particular interesado)</li>
                            <li><a href="https://drive.google.com/file/d/1Gxak0zFjPBOunzQXr4Zaq2Peb_DjjXzA/view" target="_blank" rel="noopener noreferrer">Presentar nota de solicitud.</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!-- Evaluaciones de impacto ambiental -->
                    <div class="card section-card shadow-card mb-3">
                      <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center" @click="toggleCollapse('planeamientoEvaluacionesImpactoAmbiental')" style="cursor: pointer;" data-bs-toggle="collapse" :data-bs-target="'#collapse-planeamientoEvaluacionesImpactoAmbiental'" aria-expanded="false" :aria-controls="'collapse-planeamientoEvaluacionesImpactoAmbiental'">
                          <h5 class="text-green mb-0">Evaluaciones de Impacto Ambiental</h5>
                          <i :class="collapseStates.planeamientoEvaluacionesImpactoAmbiental ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
                        </div>
                      </div>
                      <div v-if="collapseStates.planeamientoEvaluacionesImpactoAmbiental" class="collapse-content collapse" :class="{ show: collapseStates.planeamientoEvaluacionesImpactoAmbiental }" id="collapse-planeamientoEvaluacionesImpactoAmbiental">
                        <div class="card-body">
                          <ul class="text-roboto">
                            <li>Las evaluaciones y declaratorias de impacto ambiental pueden ser consultadas haciendo click <a href="https://www.gesell.gob.ar/novedad/49918/estudios-y-declaratorias-de-impacto-ambiental.html" target="_blank" rel="noopener noreferrer">aquí</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!-- Documentación -->
                    <div class="card section-card shadow-card mb-3">
                      <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center" @click="toggleCollapse('planeamientoDocumentacion')" style="cursor: pointer;" data-bs-toggle="collapse" :data-bs-target="'#collapse-planeamientoDocumentacion'" aria-expanded="false" :aria-controls="'collapse-planeamientoDocumentacion'">
                          <h5 class="text-green mb-0">Documentación</h5>
                          <i :class="collapseStates.planeamientoDocumentacion ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
                        </div>
                      </div>
                      <div v-if="collapseStates.planeamientoDocumentacion" class="collapse-content collapse" :class="{ show: collapseStates.planeamientoDocumentacion }" id="collapse-planeamientoDocumentacion">
                        <div class="card-body">
                          <ul class="text-roboto">
                            <li><a href="https://drive.google.com/file/d/1C98Z-sC4UhKp43op5zBFl3ndqSZNa8Rk/view" target="_blank" rel="noopener noreferrer">Plan de Ordenamiento Municipal</a></li>
                            <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&id=CDFD5F6443FDC16A%21s0559b1c958a1437187d2b8c6ee93afc4&parId=CDFD5F6443FDC16A%21sfe2c638f43224981b71bccbc58f0c6dd&o=OneUp" target="_blank" rel="noopener noreferrer">Plano de zonas</a></li>
                            <li><a href="https://hcdvillagesell.com.ar/wp-content/uploads/2023/07/3228-3360-PLANES-DE-PAGO-LOTES-CON-SERVICIO.pdf" target="_blank" rel="noopener noreferrer">Programa de Adjudicación de Lotes con Servicios Ord. 3360/23</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Vista del Botón 2: HABITAT -->
          <div v-if="selectedOption === 2" class="section">
            <div class="row justify-content-center">
              <div class="col-11 col-lg-10">
              <h3 class="text-green mb-4 mt-5">NUESTRA LABOR</h3>
              <p class="text-roboto">La Dirección de Vivienda y Hábitat fue creada en el 2015 con el objetivo de atender la demanda habitacional, mediante la ejecución de obras de urbanización, infraestructura y equipamiento, asegurando el acceso a una vivienda digna en igualdad de oportunidades para los distintos sectores sociales, con el fin de constituir un hábitat digno, dotado de servicios y sin riesgo ambiental que contribuya al desarrollo de nuestro Partido mejorando o transformando así sus condiciones de vida.</p>
              <p class="text-roboto">Asimismo, se trabaja en forma conjunta con la Escribanía General de Gobierno y la Subsecretaría Social de Tierras, Urbanismo y Vivienda en la regularización dominial de inmuebles.</p>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-11 col-lg-10">
                <div class="importante-card">
                  <div class="row" style="width:100%">
                    <div class="col-md-2">
                      <i class="bi bi-exclamation-circle"></i>
                    </div>
                    <div class="col-md-10">
                      <p class="subtitle"><b>IMPORTANTE</b></p>
                      <p>Si considerás construir, consultá previamente a un profesional matriculado (arquitecto, ingeniero o maestro mayor de obras), ya que ellos son los únicos capacitados para interpretar y aplicar el Código de Edificación y Planificación Urbana.
Evitá multas, recargos, clausuras, paralización, demolición y/o suspensión de obras.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="cards-section">
              <div class="row justify-content-center">
                <div class="col-11 col-lg-10">
                  <!-- Inscripción al Programa de Lotes con Servicios -->
                  <div class="card section-card shadow-card mb-3">
                    <div class="card-header">
                      <div class="d-flex justify-content-between align-items-center" @click="toggleCollapse('insctipcionLotesServicios')" style="cursor: pointer;" data-bs-toggle="collapse" :data-bs-target="'#collapse-insctipcionLotesServicios'" aria-expanded="false" :aria-controls="'collapse-insctipcionLotesServicios'">
                        <h5 class="text-green mb-0">Inscripción al Programa de Lotes con Servicios</h5>
                        <i :class="collapseStates.insctipcionLotesServicios ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
                      </div>
                    </div>
                    <div v-if="collapseStates.insctipcionLotesServicios" class="collapse-content collapse" :class="{ show: collapseStates.insctipcionLotesServicios }" id="collapse-insctipcionLotesServicios">
                      <div class="card-body">
                        <p class="text-black text-roboto">La inscripción al Programa de Lotes con Servicios se hace en la Dirección de Hábitat o donde ésta informe oportunamente.</p>
                        <p class="text-black text-roboto">Para más información realizá tu consulta por teléfono (2255) 47-8240, enviando un correo electrónico a habitat@gesell.gob.ar o acercándote personalmente a la oficina correspondiente.</p>
                      </div>
                    </div>
                  </div>

                  <!-- Documentación -->
                  <div class="card section-card shadow-card mb-3">
                    <div class="card-header">
                      <div class="d-flex justify-content-between align-items-center" @click="toggleCollapse('documentación')" style="cursor: pointer;" data-bs-toggle="collapse" :data-bs-target="'#collapse-documentación'" aria-expanded="false" :aria-controls="'collapse-documentación'">
                        <h5 class="text-green mb-0">Documentación</h5>
                        <i :class="collapseStates.documentación ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
                      </div>
                    </div>
                    <div v-if="collapseStates.documentación" class="collapse-content collapse" :class="{ show: collapseStates.documentación }" id="collapse-documentación">
                      <div class="card-body">
                        <ul class="text-roboto">
                          <li>Programa de Adjudicación de Lotes con Servicios <a href="https://hcdvillagesell.com.ar/wp-content/uploads/2023/07/3228-3360-PLANES-DE-PAGO-LOTES-CON-SERVICIO.pdf" target="_blank">Ord. 3360/23</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
          <!-- Vista del Botón 3: OBRAS PARTICULARES -->
          <div v-if="selectedOption === 3" class="section">
            <div class="row justify-content-center">
              <div class="col-11 col-lg-10">
              <h3 class="text-green mb-4 mt-5">NUESTRA LABOR</h3>
              <p class="text-roboto">La Dirección de Obras Particulares (DOP) es el área encargada de otorgar permisos de obras nuevas, remodelaciones o demoliciones que se realicen en el partido de Villa Gesell en cumplimiento con lo dispuesto en el Código de Edificación y el Plan de Ordenamiento Municipal (POM).</p>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-11 col-lg-10">
                <div class="importante-card">
                  <div class="row" style="width:100%">
                    <div class="col-md-2">
                      <i class="bi bi-exclamation-circle"></i>
                    </div>
                    <div class="col-md-10">
                      <p class="subtitle"><b>IMPORTANTE</b></p>
                      <p>Si considerás construir, consultá previamente a un profesional matriculado (arquitecto, ingeniero o maestro mayor de obras), ya que ellos son los únicos capacitados para interpretar y aplicar el Código de Edificación y Planificación Urbana.
Evitá multas, recargos, clausuras, paralización, demolición y/o suspensión de obras.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="cards-section">
              <div class="row justify-content-center">
                <div class="col-11 col-lg-10">
              <!-- ¿Cómo matricularse como profesional? -->
              <div class="card section-card shadow-card mb-3">
                <div class="card-header">
                  <div class="d-flex justify-content-between align-items-center" @click="toggleCollapse('matricula')" style="cursor: pointer;" data-bs-toggle="collapse" :data-bs-target="'#collapse-matricula'" aria-expanded="false" :aria-controls="'collapse-matricula'">
                    <h5 class="text-green mb-0">¿Cómo matricularse como profesional?</h5>
                    <i :class="collapseStates.matricula ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
                  </div>
                </div>
                <div v-if="collapseStates.matricula" class="collapse-content collapse" :class="{ show: collapseStates.matricula }" id="collapse-matricula">
                  <div class="card-body">
                    <p class="text-black text-roboto">El trámite se realiza de forma presencial en nuestra oficina. Debe traer:</p>
                    <ul class="text-roboto">
                      <li>Comprobante de Matrícula Provincial al día y</li>
                      <li>Fotocopia de DNI.</li>
                    </ul>
                    <p class="text-black text-roboto">Se le pedirá <b> abonar Inscripción Profesional y Matrícula Municipal Anual. </b> El número de Matrícula Municipal le será otorgado en el momento.<b> Recuerde que para cualquier presentación debe tener la matrícula municipal al día.</b></p>
                  </div>
                </div>
              </div>

              <!-- Solicitud de Copia de Plano -->
              <div class="card section-card shadow-card mb-3">
                <div class="card-header">
                  <div class="d-flex justify-content-between align-items-center" @click="toggleCollapse('solicitud')" style="cursor: pointer;" data-bs-toggle="collapse" :data-bs-target="'#collapse-solicitud'" aria-expanded="false" :aria-controls="'collapse-solicitud'">
                    <h5 class="text-green mb-0">Solicitud de Copia de Plano</h5>
                    <i :class="collapseStates.solicitud ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
                  </div>
                </div>
                <div v-if="collapseStates.solicitud" class="collapse-content collapse" :class="{ show: collapseStates.solicitud }" id="collapse-solicitud">
                  <div class="card-body">
                    <ul class="text-roboto">
                    <li>Para solicitar copia de planos aprobados o registrados, el propietario del inmueble
                       deberá requerirlo por mesa de entradas de la Dirección acreditando titularidad por medio de
                        escritura y DNI.</li>
                    <li>La copia del plano tiene un costo que se informará y abonará en el momento por el propietario. Posteriormente se le entregará hasta una semana después.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Horarios de Trabajo de Obra -->
              <div class="card section-card shadow-card mb-3">
                <div class="card-header">
                  <div class="d-flex justify-content-between align-items-center" @click="toggleCollapse('horarios')" style="cursor: pointer;" data-bs-toggle="collapse" :data-bs-target="'#collapse-horarios'" aria-expanded="false" :aria-controls="'collapse-horarios'">
                    <h5 class="text-green mb-0">Horarios de Trabajo de Obra</h5>
                    <i :class="collapseStates.horarios ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
                  </div>
                </div>
                <div v-if="collapseStates.horarios" class="collapse-content collapse" :class="{ show: collapseStates.horarios }" id="collapse-horarios">
                  <div class="card-body">
                    <p class="text-black text-roboto">Los horarios de trabajo de obra están regulados por la
                    <a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&sb=name&sd=1&id=CDFD5F6443FDC16A%21sd9f1f92abc534e9e88d3db0c0b7bb69f&parId=CDFD5F6443FDC16A%21s5903fb2476024c6abf69d18613878d32&o=OneUp" target="_blank"><u>Ordenanza 3494/24</u></a>
                       y varían según la zona y época.</p>
                  </div>
                </div>
              </div>

              <!-- Documentación -->
              <div class="card section-card shadow-card mb-3 documentacion-card">
                <div class="card-header">
                  <div class="d-flex justify-content-between align-items-center" @click="toggleCollapse('documentacion')" style="cursor: pointer;" data-bs-toggle="collapse" :data-bs-target="'#collapse-documentacion'" aria-expanded="false" :aria-controls="'collapse-documentacion'">
                    <h5 class="text-green mb-0">Documentación</h5>
                    <i :class="collapseStates.documentacion ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
                  </div>
                </div>
                <div v-if="collapseStates.documentacion" class="collapse-content collapse" :class="{ show: collapseStates.documentacion }" id="collapse-documentacion">
                  <div class="card-body">
                    <h6 class="text-dark fw-bold text-roboto">Códigos y ordenanzas</h6>
                    <ul class="text-roboto">
                      <li><a href="https://drive.google.com/file/d/1C98Z-sC4UhKp43op5zBFl3ndqSZNa8Rk/view" target="_blank" rel="noopener noreferrer">Plan de Ordenamiento Municipal</a></li>
                      <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&id=CDFD5F6443FDC16A%21s845dc44950f04c3c9b14b7c448a0a976&parId=CDFD5F6443FDC16A%21s5903fb2476024c6abf69d18613878d32&o=OneUp" target="_blank" rel="noopener noreferrer">Ordenanza de presentaciones y procedimientos municipales 961/92</a></li>
                      <li>Plano Zonas, Índices y Planilla de Usos</li>
                      <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&sb=name&sd=1&id=CDFD5F6443FDC16A%21scae59ad208ad4aed8afd5348a3db87d6&parId=CDFD5F6443FDC16A%21sfe2c638f43224981b71bccbc58f0c6dd&o=OneUp" target="_blank" rel="noopener noreferrer">Plano Zonas Distritos Comerciales</a></li>
                      <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&sb=name&sd=1&id=CDFD5F6443FDC16A%21s16226b8db5cc454c92c6205dd9950636&parId=CDFD5F6443FDC16A%21sfe2c638f43224981b71bccbc58f0c6dd&o=OneUp" target="_blank" rel="noopener noreferrer">Plano Zonas Tributarias</a></li>
                      <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy9DREZENUY2NDQzRkRDMTZBL0ViaVRBX1E0eHg5TG0xOUw3WERScWt3QkVJVkhOSko4TThmRmlXX2VIdW1ScWc&cid=CDFD5F6443FDC16A&id=CDFD5F6443FDC16A%21sf40393b8c7384b1f9b5f4bed70d1aa4c&parId=CDFD5F6443FDC16A%21s5903fb2476024c6abf69d18613878d32&o=OneUp" target="_blank" rel="noopener noreferrer">Resolución para Alojamientos Turísticos (Res. 23/14)</a></li>
                      <li>Valores vigentes de Tasa de Visado y Multas</li>
                      <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&id=CDFD5F6443FDC16A%21s7f8ca017b1cd493f852bb85704621bf8&parId=CDFD5F6443FDC16A%21s5903fb2476024c6abf69d18613878d32&o=OneUp" target="_blank" rel="noopener noreferrer">Visado Web y Planilla de Visado (Decreto 662/24)</a></li>
                      <li><a href="https://hcdvillagesell.com.ar/wp-content/uploads/2023/07/3228-3360-PLANES-DE-PAGO-LOTES-CON-SERVICIO.pdf" target="_blank" rel="noopener noreferrer">Programa de Adjudicación de Lotes con Servicios Ord. 3360/23</a></li>
                      <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VzXzVTcUw0SEJCQmo5dE9VSGlUMWFVQlliTGpHTHNOM3lDN1NhWkVybWNDU1E&id=CDFD5F6443FDC16A%21s3ffb686bc57d488fb432faef73827619&cid=CDFD5F6443FDC16A&sb=name&sd=1&v=validatepermission" target="_blank" rel="noopener noreferrer">Ordenanzas Patrimonio</a></li>
                      <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VzXzVTcUw0SEJCQmo5dE9VSGlUMWFVQlliTGpHTHNOM3lDN1NhWkVybWNDU1E&id=CDFD5F6443FDC16A%21s5e622e63d09b4cd786d34a5f3ef3e15e&cid=CDFD5F6443FDC16A&sb=name&sd=1&v=validatepermission" target="_blank" rel="noopener noreferrer">Ordenanzas Veredas</a></li>
                    </ul>
                    
                    <h6 class="text-dark fw-bold text-roboto">Multas</h6>
                    <ul class="text-roboto">
                      <li>Ordenanzas de multas (Ord. 931/91 – <a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&sb=name&sd=1&id=CDFD5F6443FDC16A%21scbb8e9406658439fbecfbd6dd2457b4f&parId=CDFD5F6443FDC16A%21s3f16db73217249318a969ea2fdbb1bf6&o=OneUp" target="_blank" rel="noopener noreferrer">2283/09</a> – 2243/17 – 2708/17 – <a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&sb=name&sd=1&id=CDFD5F6443FDC16A%21s761e9b92a43242f08077edf5228ebd89&parId=CDFD5F6443FDC16A%21s3f16db73217249318a969ea2fdbb1bf6&o=OneUp" target="_blank" rel="noopener noreferrer">2742/17</a> – <a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VyTUVQZUNiMUZ0TnVBRHlwQ2dkVUNBQnBIM1hvZ1VwcHQ3eldid3JBbFFDeUE&cid=CDFD5F6443FDC16A&sb=name&sd=1&id=CDFD5F6443FDC16A%21s7347a6b25f004d01980ea5e844ca9c95&parId=CDFD5F6443FDC16A%21s3f16db73217249318a969ea2fdbb1bf6&o=OneUp" target="_blank" rel="noopener noreferrer">3325/22</a>)</li>
                      <!-- <li>Planilla de liquidación de multas</li> -->
                    </ul>
                    
                    <h6 class="text-dark fw-bold text-roboto">Permisos y Avisos de obra</h6>
                    <ul class="text-roboto">
                      <li>Planillas y requisitos para presentación</li>
                      <li>Planilla Movimiento de suelos</li>
                      <li>Planilla extracción de arboles</li>
                    </ul>
                  </div>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Vista del Botón 3: D.I.E.P.E.P. -->
          <div v-if="selectedOption === 4" class="section">
            <div class="row justify-content-center">
              <div class="col-11 col-lg-10">
                <h3 class="text-green mb-4 mt-5">NUESTRA LABOR</h3>
                <p class="text-roboto">La Dirección de Inspección de Edificios Privados y Espacios Públicos (DIEPEP) es el área encargada de otorgar permisos de obra de mantenimiento de fachadas de edificios y del control de la aplicación de las ordenanza de inspección, conservación y mantenimiento de marquesinas, carteles, ascensores y montacargas.</p>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-11 col-lg-10">
                <div class="importante-card">
                  <div class="row" style="width:100%">
                    <div class="col-md-2">
                      <i class="bi bi-exclamation-circle"></i>
                    </div>
                    <div class="col-md-10">
                      <p class="subtitle"><b>IMPORTANTE</b></p>
                      <p>Si considerás construir, consultá previamente a un profesional matriculado (arquitecto, ingeniero o maestro mayor de obras), ya que ellos son los únicos capacitados para interpretar y aplicar el Código de Edificación y Planificación Urbana.
Evitá multas, recargos, clausuras, paralización, demolición y/o suspensión de obras.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cards-section">
              <div class="row justify-content-center">
                <div class="col-11 col-lg-10">
                  <!-- Documentación -->
                  <div class="card section-card shadow-card mb-3">
                    <div class="card-header">
                      <div class="d-flex justify-content-between align-items-center" @click="toggleCollapse('diepepDocumentacion')" style="cursor: pointer;" data-bs-toggle="collapse" :data-bs-target="'#collapse-diepepDocumentacion'" aria-expanded="false" :aria-controls="'collapse-diepepDocumentacion'">
                        <h5 class="text-green mb-0">Documentación</h5>
                        <i :class="collapseStates.diepepDocumentacion ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
                      </div>
                    </div>
                    <div v-if="collapseStates.diepepDocumentacion" class="collapse-content collapse" :class="{ show: collapseStates.diepepDocumentacion }" id="collapse-diepepDocumentacion">
                      <div class="card-body">
                        <ul class="text-roboto">
                          <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VwdGFwc2Y2YU54T3BTd3V5VENqSndjQkhIb2dMeHdyUWl3SFhUd3dyeGFRX3c&cid=CDFD5F6443FDC16A&id=CDFD5F6443FDC16A%21s2fd36b6e8f9e4e309febce56b2cd99fa&parId=CDFD5F6443FDC16A%21sc7a65a9b68fa4edca52c2ec930a32707&o=OneUp" target="_blank" rel="noopener noreferrer">Ord. 1847/02</a></li>
                          <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VwdGFwc2Y2YU54T3BTd3V5VENqSndjQkhIb2dMeHdyUWl3SFhUd3dyeGFRX3c&cid=CDFD5F6443FDC16A&id=CDFD5F6443FDC16A%21s2253d9787dc848969727fb40b9302cdd&parId=CDFD5F6443FDC16A%21sc7a65a9b68fa4edca52c2ec930a32707&o=OneUp" target="_blank" rel="noopener noreferrer">Ord. 3264/22</a></li>
                          <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9DREZENUY2NDQzRkRDMTZBL0VwdGFwc2Y2YU54T3BTd3V5VENqSndjQkhIb2dMeHdyUWl3SFhUd3dyeGFRX3c&cid=CDFD5F6443FDC16A&id=CDFD5F6443FDC16A%21s725488758bf54454a961723e94c89c05&parId=CDFD5F6443FDC16A%21sc7a65a9b68fa4edca52c2ec930a32707&o=OneUp" target="_blank" rel="noopener noreferrer">Decreto Reglamentario 142/20</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
                      <i class="bi bi-geo-alt-fill"></i> Avenida 6 N.° 660<br>
                    <i class="bi bi-telephone-fill"></i> (2255) 46-7923<br>
                    <i class="bi bi-clock-fill"></i> Lunes a Viernes de 8 a 14<br>
                    <i class="bi bi-envelope-fill"></i> planeamiento@gesell.gob.ar</p>
                  </div>
                  <div class="col-md-3 mb-3">
                    <h6 class="text-black text-roboto">Dirección Obras Particulares (D.O.P.)</h6>
                    <p class="small text-muted text-roboto">
                      <i class="bi bi-geo-alt-fill"></i> Avenida 3 N.º 820 1 piso<br>
                    <i class="bi bi-telephone-fill"></i> (2255) 47-8044<br>
                    <i class="bi bi-clock-fill"></i> Lunes a Viernes de 8 a 14<br>
                    <i class="bi bi-envelope-fill"></i> obrasparticulares@gesell.gob.ar</p>
                  </div>
                  <div class="col-md-3 mb-3">
                    <h6 class="text-black text-roboto">Dirección de Inspección de <br/> Edificios Privados y Espacios Públicos (D.I.E.P.E.P.)</h6>
                    <p class="small text-muted text-roboto">
                      <i class="bi bi-geo-alt-fill"></i> Avenida 6 N°660<br>
                    <i class="bi bi-telephone-fill"></i> (2255) 45-4483<br>
                    <i class="bi bi-clock-fill"></i> Lunes a Viernes de 8 a 14<br>
                    <i class="bi bi-envelope-fill"></i> dirinspyfachadabalcones@gesell.gob.ar</p>
                  </div>
                  <div class="col-md-3 mb-3">
                    <h6 class="text-black text-roboto">Dirección de Hábitat y Vivienda</h6>
                    <p class="small text-muted text-roboto">
                      <i class="bi bi-geo-alt-fill"></i> Avenida 5 N°522<br>
                    <i class="bi bi-telephone-fill"></i> (2255) 47-8240<br>
                    <i class="bi bi-clock-fill"></i> Lunes a Viernes de 8 a 14<br>
                    <i class="bi bi-envelope-fill"></i> habitat@gesell.gob.ar</p>
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

<script setup>
import { ref, nextTick } from 'vue'

const selectedOption = ref(null)
const collapseStates = ref({
  planeamientoPlanParticularizado: false,
  planeamientoCertificadoUrbanistico: false,
  planeamientoAperturaCalles: false,
  planeamientoDocumentacion: false,
  matricula: false,
  solicitud: false,
  horarios: false,
  documentacion: false,
  diepepDocumentacion: false,
})

const selectOption = (option) => {
  // Si se hace clic en el mismo botón que ya está seleccionado, deseleccionarlo
  if (selectedOption.value === option) {
    selectedOption.value = null
  } else {
    selectedOption.value = option
    
    // Scroll suave hacia la sección correspondiente
    nextTick(() => {
      const targetElement = document.querySelector('.section')
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  }
}

const toggleCollapse = (section) => {
  collapseStates.value[section] = !collapseStates.value[section]
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

.contact-section .small i {
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

.importante-card {
  min-width: 80% !important;
  background-color: #FACD8A;
  padding: 1.5rem;
  border-radius: 1rem;
  padding-bottom: 2rem;
  margin: 1rem auto 0;
}

.importante-card .subtitle {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.importante-card .subtitle a {
  color: #353535;
  text-decoration: underline;
}

.importante-card p {
  font-size: 1.1rem;
  color: #353535;
}

/* Estilos para desktop - ícono y espaciado */
.importante-card .col-md-2 {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 1.5rem !important;
}

.importante-card .col-md-10 {
  padding-left: 0 !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.importante-card .bi-exclamation-circle {
  font-size: 3.5rem;
  color: #353535;
  flex-shrink: 0;
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

@media (max-width: 1200px) {
  .importante-card .subtitle {
    font-size: 28px !important;
  }
  .importante-card p {
    font-size: 18px !important;
  }
}

@media (max-width: 768px) {
  .importante-card {
    padding: 1rem;
  }
  
  .importante-card p {
    font-size: 18px !important;
    text-align: center;
  }
  
  .importante-card .row {
    text-align: center !important;
    margin: 0 auto !important;
  }
  
  .importante-card .col-md-2 {
    padding-right: 0 !important;
    padding-left: 0 !important;
    justify-content: center !important;
    margin-bottom: 1rem;
  }
  
  .importante-card .col-md-10 {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  
  .importante-card .bi-exclamation-circle {
    font-size: 3rem !important;
    margin-top: 0 !important;
  }
}
</style>
