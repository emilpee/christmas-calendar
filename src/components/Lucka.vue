<template>
    <div @click="open">
      <p v-show="!showLucka"> {{ day.date }} </p>
      <p v-show="showLucka"> {{ day.contains }} </p>
    </div>
</template>

<script>

export default {
  name: 'Lucka',
  props: ['day'],
  data() {
    return {
      showLucka: false
    }
  },
  methods: {
    open: function() {
      this.showLucka = !this.showLucka;
      if (!this.showLucka) { // If opened, it can't be closed
        this.showLucka = !this.showLucka;
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
  margin-left: 245px;
  padding: 2.5px;
  background-color: red;
  width: 250px;
}
a {
  color: #42b983;
}
</style>
