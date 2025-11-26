<template>
  <b-navbar toggleable="sm" type="dark" variant="success" fixed="top">
    <div class="col-xs-1 ml-2">
      <a href="https://gesell.gob.ar/">
        <img src="https://arvige.gob.ar/assets/img/header.png" style="height: 58px; width: 42px" loading="lazy" alt="Logo Villa Gesell">
      </a>
      <!-- <a class="ml-2 separador" > | </a> -->
    </div>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav class="m-2" style="width:90%">
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar-dark.bg-success {
  background-color: #19a02d !important;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
}

.nav-link {
  color: white !important;
  font-weight: 500 !important;
}

.nav-link:hover {
  color: rgba(255,255,255,0.8) !important;
}
</style> 