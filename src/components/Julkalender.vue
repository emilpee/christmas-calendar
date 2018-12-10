<template>
<div class="kalender">
  <h1>Julkalender</h1>
  <ul>
    <li v-for="date in days"
        class="lucka"
        @click="open($event)"
        :id="date.id"
        v-show="!showLucka"
        :key="date.id"> 
        {{ date.date }} 
    </li> <!-- Gör dem på olika nivåer! -->
  </ul>
  <ul>
    <li class="lucka"  
        @click="open($event)" 
        v-show="showLucka" 
        :id="contains.id"
        v-for="contains in days">
       {{ contains.contains }} 
    </li> 
  </ul>
</div>
</template>

<script>
import Lucka from './Lucka.vue';

export default {
  name: 'Julkalender',
  data() {
    return {
      showLucka: false
    }
  },
  computed: {
    days() {
      return this.$store.state.days;
    }
  },
  methods: {
    open: function(e) {
      if (e.target.id) {
        console.log(e.target.id);
        this.showLucka = !this.showLucka;
        // date.id?
      }
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
ul {
  list-style-type: none;
  padding: 0;
}
.lucka {
  display: inline-block;
  width: 50px;
  height: 50px;
  font-size: 15px;
  padding: 2%;
  margin: 0.5%;
  background-color: rgb(143, 138, 138);
  border: 2px solid black;
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
