<!-- 
    Clock visual design ispired by:  https://www.vuescript.com/minimal-digital-clock-vue-js/
-->

<template>
  <div>
    <div class="clock">
      <div class="clock-hours">
        <span v-text="hours"></span>
      </div>
      <div class="clock-minutes" v-text="minutes"></div>
      <div class="clock-seconds" v-text="seconds"></div>
      <br>
      <div class="clock-zone" v-text="zone"></div>  
    </div>
</div>
</template>

<script>
import moment from 'moment-timezone'
export default {
  props: ["tz"],
  data () {
    return {
      now: "",
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  },

  mounted () {
    this.$options.interval = setInterval(this.updateDateTime, 1000);
  },

  beforeDestroy () {
    clearInterval(this.$options.interval);
  },

  methods: {
    updateDateTime () {
        this.now = moment(new Date()).tz(this.tz.region)
        this.hours = this.now.format("HH")
        this.minutes = this.now.format("mm")
        this.seconds = this.now.format("ss")
        this.zone = this.now.format("zz") 
    },
  },  
}
</script>

<style scoped>
.clock {
  border: 5px solid #f1f1f1;
  border-radius: .5rem;
  display: inline-block;
  margin-bottom: 1em;
}
.clock-hours,
.clock-minutes,
.clock-seconds,
.clock-zone {
  background: linear-gradient(to bottom, #26303b 50%, #2c3540 50%);
  display: inline-block;
  color: #fff;
  font-size: 48px;
  font-weight: 300;
  padding: .5rem 1rem;
  text-align: center;
  position: relative;
}
.clock-hours {
  border-radius: .5rem 0 0 .5rem;
}

.clock-seconds {
  border-radius: 0 .5rem .5rem 0;
}

.clock-zone {
  background: linear-gradient(to bottom, rgba(44,53,64,1) 50%, #353f41 50%);
  border-radius: .10rem .10rem .5rem .5rem;
}
</style>
