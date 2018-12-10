<template>
  <div id="app">
    <Julkalender>
    </Julkalender>
  </div>
</template>

<script>
import Julkalender from './components/Julkalender.vue'

export default {
  name: 'app',
  components: {
    Julkalender
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(255, 255, 255);
  margin-top: 60px;
}
</style>

