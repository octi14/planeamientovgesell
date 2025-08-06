<template>
  <div id="app-layout">
    <div id="app-navbar">
      <Navbar />
    </div>
    <div id="app-content" class="mt-5">
      <Nuxt keep-alive />
    </div>
    <Foot />
  </div>
</template>

<script>
export default {
  name: 'Default',
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  },
}
</script> 