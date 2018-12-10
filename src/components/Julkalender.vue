<template>
  <div class="kalender">
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
  margin: 40px 0 0;
  margin-left: 245px;
  padding: 2.5px;
  background-color: red;
  width: 250px;
}
.lucka {
  display: inline-block;
  width: 50px;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
  padding: 2%;
  margin: 0.5%;
  background-color: rgb(236, 171, 72);
  border: 1px dotted black;
  border-left: 1px white solid;
}
a {
  color: #42b983;
}
.kalender {
  background: url('https://upload.wikimedia.org/wikipedia/commons/f/f3/Santa_Claus_icon.png');
  background-repeat: no-repeat;
  width: 500px;
  margin: 0 auto;
  height: 430px;
  border: 10px groove #0d0dbe;
  cursor: pointer;
}
</style>
