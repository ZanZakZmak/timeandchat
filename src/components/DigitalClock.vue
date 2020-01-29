<template>
<div>
    <!-- {{tz}} --> 
    <!-- {{now}}  -->
  <div class="clock">
    <div class="clock-hours">
     <!-- <span class="clock-hourtime" v-text="hourtime"></span> -->
      <span v-text="hours"></span>
    </div>
    <div class="clock-minutes" v-text="minutes"></div>
    <div class="clock-seconds" v-text="seconds"></div>
    <br>
    <div class="clock-zone" v-text="zone"></div>  <!-- IZBRISAT PO POTREBI -->
  </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'

export default {


  // PROBAT NAĆ NAČIN ZA POVEZAT tz SA OSTALIM VREMENSKIM ZONAMA

  /* VEZANO ZA PROPS:
  -> google: export default props vue
  -> google: javascript props
  -> https://flaviocopes.com/vue-props/
  -> https://vuejs.org/v2/guide/components-props.html
  -> https://vueschool.io/lessons/reusable-components-with-props?friend=vuejs

  -> https://www.w3schools.com/jsref/jsref_obj_date.asp (VEZANO ZA DATE FUNKCIJU)
  */


  props: ["tz"],
  data () {
    return {
     // timezone: '',
      now: "",
      hours: 0,
      minutes: 0,
      seconds: 0,
      //hourtime: ''
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
      //if (this.tz != 'Choose'){
        this.now = moment(new Date()).tz(this.tz.region)
        this.hours = this.now.format("HH")
        this.minutes = this.now.format("mm")
        this.seconds = this.now.format("ss")
        this.zone = this.now.format("zz") // IZBRISAT PO POTREBI
       
       /*this.hourtime = getHourTime(this.hours)
       
       this.hours = this.hours % 12 || 12*/
      //}
    },
    
    /* 
    LINKOVI VEZANI ZA SAT:


    -> https://momentjs.com/timezone/docs/#/data-loading/adding-a-zone/
    -> https://stackoverflow.com/questions/46182198/using-moment-timezone-in-javascript-analog-clock -> JAKO VAŽAN LINK
    -> https://stackoverflow.com/questions/18793520/how-to-use-moment-js-for-a-certain-timezone-and-display-it-in-real-time
    -> https://stackoverflow.com/questions/29877791/how-to-load-time-zone-data-into-moment-timezone-js
    -> https://stackoverflow.com/questions/27956436/add-new-timezone-to-moment-js-timezone 
    -> https://stackoverflow.com/questions/15347589/format-date-in-a-specific-timezone


    */
  
  },  
  /*
  computed: {

  }
  
  */
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
  /*border-right: .15rem solid #fff;*/
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
