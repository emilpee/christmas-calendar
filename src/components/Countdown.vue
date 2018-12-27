<template>
  <div id="timer">
      <section> 
        <p>Days left until next Christmas Eve: 
            <strong><span>{{ calc() }}</span></strong> 
        </p>
      </section>
  </div>
</template>

<script>
export default {
    name: 'Countdown',
    data() {
        return {
          currentDay: new Date().getTime(),
          christmas: new Date("12-24-2019").getTime()
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
    border: 5px solid #030375;
    width: 964px;
    margin: 0 auto;
}
section {
    padding: 1%;
}
</style>

