<template>
  <ul>
    <li class="lucka"  
        @click="open" 
        v-show="showLucka" 
        v-for="contains in days" 
        v-bind:key="contains.id">
       {{ contains.contains }} 
    </li>
  </ul>
</template>

<script>

export default {
  name: 'Lucka',
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
      if(e.target) {
        console.log(e.target);
        this.showLucka = !this.showLucka;
      }
    },
    test: function(date) {
      this.$store.commit('test', date);
  }
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
  cursor:pointer;
}
</style>
