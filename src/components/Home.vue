<template>
  <div id="app" class="wrapper">
    <div class="content-wrapper">
      <Header />
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './Footer.vue'
import Header from './Header.vue'

export default {
  name: 'Home',
  components: {
    Footer,
    Header
  }
}

</script>

<style scoped>
</style>
