<template>
  <div class="kalender">
    <h1>Christmas Calendar</h1>
    <div class="lucka" v-for="day in days" :key="day.days">
      <Lucka :day="day" />
    </div>
  </div>
</template>

<script>
import Lucka from './Lucka.vue';

export default {
  name: 'Julkalender',
  components: {
    Lucka
  },
  computed: {
    days() {
      return this.$store.state.days;
    }
  },
  methods: {
    open: function() {
      this.showLucka = !this.showLucka;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  padding: 2.5px;
  font-size: 36px;
  color: rgb(236, 171, 72);
}
.lucka {
  display: inline-block;
  width: 100px;
  height: 100px;
  font-size: 28px;
  font-weight: 700;
  padding: 1.5%;
  margin: 1%;
  background-color: rgb(236, 171, 72);
  border: 1px dotted black;
  border-left: 1px white solid;
}
.lucka :nth-child(2) {
  background-color: black;
}
a {
  color: #42b983;
}
.kalender {
  background: url('../assets/christmas.jpg');
  background-repeat: no-repeat;
  width: 960px;
  margin: 0 auto;
  height: 795px;
  padding-top: 3%;
  border: 7px groove #060697;
  cursor: pointer;
}
.kalender :nth-child() {
  background-color: black;
}
</style>
