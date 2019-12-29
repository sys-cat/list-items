<template>
  <div id="app">
    <div>
      <!-- As a link -->
      <b-navbar variant="dark" type="dark">
        <b-navbar-brand href="#">List</b-navbar-brand>
      </b-navbar>
    </div>
    <div class="container">
      <Hello />
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
