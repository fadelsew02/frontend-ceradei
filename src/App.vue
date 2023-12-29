<script setup>
  import { RouterView } from 'vue-router'
  import FooterVue from './components/footer.vue'
  import NavVue from './components/nav.vue'
</script>

<template>
  <NavVue />
  <RouterView />
  <FooterVue />
</template>

<style scoped>

</style>
