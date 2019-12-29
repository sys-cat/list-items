<template>
  <div id="app">
    <div>
      <!-- As a link -->
      <b-navbar variant="dark" type="dark">
        <b-navbar-brand href="#">List</b-navbar-brand>
      </b-navbar>
    </div>

      <GetItem />
  </div>
</template>

<script>
import GetItem from './components/GetItem.vue'

export default {
  name: 'app',
  components: {
    GetItem
  }
}
</script>

