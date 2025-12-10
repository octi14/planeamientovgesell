<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-success fixed-top">
    <div class="col-xs-1 ms-2">
      <a href="https://gesell.gob.ar/">
        <img src="https://arvige.gob.ar/assets/img/header.png" style="height: 58px; width: 42px" loading="lazy" alt="Logo Villa Gesell">
      </a>
    </div>
    <div class="collapse navbar-collapse m-2" id="nav-collapse" style="width:90%">
    </div>
  </nav>
</template>

<script setup>
// Navbar component - Bootstrap 5 native
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