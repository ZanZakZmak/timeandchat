<!-- OVDJE DODAT LINK ZA INSPIRACIJU -->


<template>
  <div class="home" style="margin: 0 auto">
    <h1 style="padding: 20px; font-family: Racing Sans One; color: #2c3e50">WELCOME TO TIME AND CHAT</h1>
    <div class="theclocks">
      <DigitalClock :tz="checked1"/>

      <div class="option">
        <select class="dateselect" v-model="checked1" style="background-color: rgb(88, 88, 92); border-width: 0px; color: white;  width: 150px; font-size: 20px">
          <option selected="checked1" value="Choose">Choose</option>
          <option v-bind:key="date" v-for="date in dates" :value="date">     
            {{ date.city }}
          </option>
        </select> 
      </div>

      <div class="option2">
        <div>
          <router-link style="color: white" to="/SearchFriends">Search for friends/users from this city</router-link>
        </div>
      </div>

      <div class="option3">
        <div>
          <router-link style="color: white" to="/profilescity">More about the city</router-link>
        </div>
      </div>
    </div>

    <div class="theclocks">
      <DigitalClock /> <!-- dodat unutra -> :tz="checked2" -->

      <div class="option">
      <select class="dateselect" v-model="checked2" style="background-color: rgb(88, 88, 92); border-width: 0px; color: white;  width: 150px; font-size: 20px">
        <option selected="checked2" value="Choose">Choose</option>
        <option v-bind:key="date" v-for="date in dates" :value="date">     
          {{ date.city }}
        </option>
        </select> 
      </div>

      <div class="option2">
        <div>
          <router-link style="color: white" to="/SearchFriends">Search for friends/users from this city</router-link>
        </div>
      </div>

      <div class="option3">
        <div>
          <router-link style="color: white" to="/profilescity">More about the city</router-link>
        </div>
      </div>

    </div>

    <div class="theclocks">
      <DigitalClock />  <!-- dodat unutra -> :tz="checked3" -->
      <div class="option">
      <select class="dateselect" v-model="checked3" style="background-color: rgb(88, 88, 92); border-width: 0px; color: white;  width: 150px; font-size: 20px">
        <option selected="checked3" value="Choose">Choose</option>
        <option v-bind:key="date" v-for="date in dates" :value="date">     
          {{ date.city }}
        </option>
        </select> 
      </div>
      
      <div class="option2">
        <div>
          <router-link style="color: white" to="/searchfriends">Search for friends/users from this city</router-link>
        </div>
      </div>
    </div>
    <div class="optioncityprofiles">
        <div>
          <!--


            https://stackoverflow.com/questions/51424286/difference-between-v-onclick-and-using-onclick-in-vue-js

           doSomethingCool treba promjenit u nešto drugo


          -->
            <p style="color: black"> Choose city to discover more! </p>
          <!-- <div v-bind:key="date" v-for="date in dates" :value="date"> -->
            <router-link style="color: black" v-on:click.native="doSomethingCool" to="newyorkprofile">New York</router-link> <!--  style="color: white" v-on:click.native="doSomethingCool" to="profilescity" -->
            <br>
            <router-link style="color: black" v-on:click.native="doSomethingCool" to="berlinprofile">Berlin</router-link> 
            <br>
            <router-link style="color: black" v-on:click.native="doSomethingCool" to="losangelesprofile">Los Angeles</router-link>
            <br>
            <router-link style="color: black" v-on:click.native="doSomethingCool" to="madridprofile">Madrid</router-link>
            <br>
            <router-link style="color: black" v-on:click.native="doSomethingCool" to="vancouverprofile">Vancouver</router-link>
            <br>
            <router-link style="color: black" v-on:click.native="doSomethingCool" to="phoenixprofile">Phoenix</router-link>
            <!--
            <br>
            <router-link style="color: black" v-on:click.native="doSomethingCool" to="denverprofile">Denver</router-link>
            <br>
            <router-link style="color: black" v-on:click.native="doSomethingCool" to="costaricaprofile">Costa Rica</router-link>
            <br>
            <router-link style="color: black" v-on:click.native="doSomethingCool" to="chicagoprofile">Chicago</router-link>
            -->
            <br>
            <router-link style="color: black" v-on:click.native="doSomethingCool" to="moscowprofile">Moscow</router-link>
            <!--
            <br>
            <router-link style="color: black" v-on:click.native="doSomethingCool" to="jamaicaprofile">Jamaica</router-link>
            -->
          <!-- </div> -->
        </div>
      </div>
  </div>
</template>

<script>
import DigitalClock from '@/components/DigitalClock.vue'
//import moment from 'moment-timezone';

export default {
  name: 'home',
  components: {
    DigitalClock,
    //moment
  },
  data() {
    return {
      checked1: 'Choose',
      checked2: 'Choose',
      checked3: 'Choose',
      dates: [
        { city: 'New York', region: 'America/New_York'}, 
        { city: 'Berlin', region: 'Europe/Berlin'},
        { city: 'Los Angeles', region: 'America/Los_Angeles'},
        { city: 'Madrid', region: 'Europe/Madrid'},
        { city: 'Vancouver', region: 'America/Vancouver'},
        { city: 'Phoenix', region: 'America/Phoenix'},
        { city: 'Denver', region: 'America/Denver'},
        { city: 'Costa Rica', region: 'America/Costa_Rica'},
        { city: 'Chicago', region: 'America/Chicago'},
        { city: 'Moscow', region: 'Europe/Moscow'},
        { city: 'Jamaica', region: 'America/Jamaica'},
      ],
    };
  },
  computed: {
    timeVal() {
      return this.updateDateTime(this.checked1.region);
      // probat na if petlju => ako je checked1 = new york, onda je return moment.tz ili nešto...
    }
  }
  /*
  computed: {
     
    getTimezoneNewYork: function () {
        timezone = moment.tz.add("America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6");
        return timezone.dates;
    }*/
    
    /*
    hour1: function (){ 
        
        return 0//this.hours + (this.moment.tz.add('Europe/Zagreb') + this.checked1);
      }
    }
    /*
    hour2min2sec2(){
      checked2: function (){

      }

    }

    hour3min3sec3(){
      checked2: function (){

      }

    }

    funkcijaMinsec () {
      var seconds = moment.tz(updateDateTime, "Europe/Zagreb").format('Z');
      var minutes = moment.tz(updateDateTime, "Europe/Zagreb").format('Z');
      
      
      /*return this.dates...



    }*/
}
</script>

<style scoped>
  .theclocks {
    float: left;
    margin: 45px;
    padding: 30px;
    border-style: inset;
    border-width: 3px;
    border-color: rgb(80, 77, 39);
    border-radius: 5px;
    background-color: #f1f1f1;
  } 
  .option { 
    margin-top: 10px;
    padding: 10px;
    border-style: solid;
    border-width: 2px;
    border-color: rgb(88, 88, 92);
    border-radius: 5px;
    background-color: rgb(88, 88, 92);
  }
  .option2 { 
    margin-top: 10px;
    padding: 10px;
    border-style: solid;
    border-width: 2px;
    border-color: rgb(88, 88, 92);
    border-radius: 5px;
    background-color: rgb(88, 88, 92);
  }
  .option3 { 
    margin-top: 10px;
    padding: 10px;
    border-style: solid;
    border-width: 2px;
    border-color: rgb(88, 88, 92);
    border-radius: 5px;
    background-color: rgb(88, 88, 92);
  }
  .optioncityprofiles {
    float: left;
    margin: 45px;
    padding: 30px;
    border-style: inset;
    border-width: 3px;
    border-color: rgb(80, 77, 39);
    border-radius: 5px;
    background-color: #f1f1f1;
  }
  
  .option-select {
    background-color: rgb(88, 88, 92);
    font-family: Arial;  
  }
  .option-select select {
    background-color: black;
    color: #f1f1f1;
  }
  .select-selected {
    background-color: DodgerBlue;
  }
  /* Style the arrow inside the select element: */
  .select-selected:after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #fff transparent transparent transparent;
  }
  /* Point the arrow upwards when the select box is open (active): */
  .select-selected.select-arrow-active:after {
    border-color: transparent transparent #fff transparent;
    top: 7px;
  }

  /* style the items (options), including the selected item: */
  .select-items div,.select-selected {
    color: #ffffff;
    padding: 8px 16px;
    border: 1px solid transparent;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
    cursor: pointer;
  }
  /* Style items (options): */
  .select-items {
    position: absolute;
    background-color: DodgerBlue;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 99;
  }
  /* Hide the items when the select box is closed: */
  .select-hide {
    display: none;
  }
  .select-items div:hover, .same-as-selected {
    background-color: rgba(0, 0, 0, 0.1);
  }
</style>


