<template>
  <div id="app">
    <Countdown/>
    <Julkalender/>
  </div>
</template>

<script>
import Julkalender from './components/Julkalender.vue'
import Countdown from '@/components/Countdown.vue'

export default {
  name: 'app',
  components: {
    Julkalender,
    Countdown
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

