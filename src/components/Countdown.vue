<template>
  <div id="timer">
      <section> 
        Days left until Christmas Eve: <strong><span>{{ calc() }}</span></strong>
      </section>
  </div>
</template>

<script>
export default {
    name: 'Countdown',
    data() {
        return {
          currentDay: new Date().getTime(),
          christmas: new Date("12-24-2018").getTime()
        }
    },
    methods: {
        calc: function() {
            return Math.ceil((this.christmas - this.currentDay) / (1000 * 60 * 60 * 24))
        },
    }
}
</script>

<style scoped>
#timer {
    background-color: rgb(22, 22, 22);
    border: 7px ridge rgb(236, 65, 65);
    width: 960px;
    margin: 0 auto;
}
section {
    padding: 1%;
}
</style>

