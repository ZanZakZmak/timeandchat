<template>
  <div class="clock" v-if="hourtime != ''">
    {{tz}} 
    <div class="clock-hours">
      <span class="clock-hourtime" v-text="hourtime"><!-- {{tz}} --></span>
      <span v-text="hours">{{tz}}</span>
    </div>
    <div class="clock-minutes" v-text="minutes"><!-- {{tz}} --></div>
    <div class="clock-seconds" v-text="seconds"><!-- {{tz}} --></div>
  </div>
</template>

<script>
import { getHourTime, getZeroPad } from './Filters'
import moment from 'moment-timezone'

//import moment from 'moment'
//import { dates } from '@/views/Home.vue'

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
      hours: 0,
      minutes: 0,
      seconds: 0,
      hourtime: ''
    }
  },

  mounted () {
  
    //this.$options.interval = setInterval(this.newYorkTimeDisplay, 1000, -6);
    /*this.$options.interval = setInterval( _ => {
      this.dates = moment().tz.(this.timezone);
    });*/
  


    this.$options.interval = setInterval(this.updateDateTime, 1000);
    // this.$options.interval = setInterval(this.newyorkDateTime, 1000); -> OVO RADI, SAD TREBA POVEZAT SA HOME-OM!!!
  },

  beforeDestroy () {
    clearInterval(this.$options.interval);
  },

  methods: {
    // LOKALNO VRIJEME (VRIJEME NA LAPTOPU)
    updateDateTime (/*zone*/) {
      this.now = new Date()
      this.hours = this.now.getHours()
      this.minutes = getZeroPad(this.now.getMinutes())
      this.seconds = getZeroPad(this.now.getSeconds())
      this.hourtime = getHourTime(this.hours)
      this.hours = this.hours % 12 || 12
      //this.timezone = zone;
    },
    /* NEW YORK SAT
    newYorkTimeDisplay (offset){
    let ny = new Date();  
    this.hours = ny.getHours()+offset;
    this.minutes = getZeroPad(ny.getMinutes())
    this.seconds = getZeroPad(ny.getSeconds())
    this.hourtime = getHourTime(this.hours)
    this.hours = this.hours % 12 || 12 
    }*/


    
    /* 
    LINKOVI VEZANI ZA SAT:


    -> https://momentjs.com/timezone/docs/#/data-loading/adding-a-zone/
    -> https://stackoverflow.com/questions/46182198/using-moment-timezone-in-javascript-analog-clock -> JAKO VAŽAN LINK
    -> https://stackoverflow.com/questions/18793520/how-to-use-moment-js-for-a-certain-timezone-and-display-it-in-real-time
    -> https://stackoverflow.com/questions/29877791/how-to-load-time-zone-data-into-moment-timezone-js
    -> https://stackoverflow.com/questions/27956436/add-new-timezone-to-moment-js-timezone 
    -> https://stackoverflow.com/questions/15347589/format-date-in-a-specific-timezone
    -> http://www.javascriptkit.com/script/script2/dropworldclock.shtml MOGUĆE DA ĆE MI JAKO TREBAT!!!
    -> probat googlat: js clock with dropdown option
    -> google: moment timezone javascript multiple clocks
    -> google: moment timezone javascript clock


    */
    newyorkDateTime (){
    this.la = new Date(); 
    this.la = moment.tz("America/New_York") 
    this.hours = this.la.hours();
    this.minutes = getZeroPad(this.la.minutes())
    this.seconds = getZeroPad(this.la.seconds())
    this.hourtime = getHourTime(this.hours)
    this.hours = this.hours % 12 || 12 
    }
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
.clock-seconds {
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
.clock-hourtime {
  font-size: 16px;
  position: absolute;
  top: 2px;
  left: 8px;
}
</style>
