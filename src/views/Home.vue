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
    </div>

    <div class="theclocks">
      <DigitalClock :tz="checked2"/> <!-- dodat unutra -> :tz="checked2" -->

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
    </div>

    <div class="theclocks">
      <DigitalClock :tz="checked3"/>  
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
        <ul>
          <!--
            https://stackoverflow.com/questions/51424286/difference-between-v-onclick-and-using-onclick-in-vue-js
          -->
            <p style="color: black"> Choose city to discover more! </p>
          <!-- <div v-bind:key="date" v-for="date in dates" :value="date"> -->
            <li>
              <strong>Europe:</strong>
              <br>
              <router-link v-on:click.native="neštonešto" to="berlinprofile">Berlin</router-link>
              <br>
              <router-link v-on:click.native="neštonešto" to="madridprofile">Madrid</router-link>
              <br>
              <router-link v-on:click.native="neštonešto" to="londonprofile">London</router-link>
              <br>
              <router-link v-on:click.native="neštonešto" to="moscowprofile">Moscow</router-link>
              <br>
              <router-link v-on:click.native="neštonešto" to="zagrebprofile">Zagreb</router-link>
              <br>
              <router-link v-on:click.native="neštonešto" to="amsterdamprofile">Amsterdam</router-link>
              <br>
              <router-link v-on:click.native="neštonešto" to="zurichprofile">Zurich</router-link>
            </li>
            
          
            
            <li>
              <strong>North America:</strong>
              <br>
              <router-link v-on:click.native="neštonešto" to="newyorkprofile">New York</router-link>
              <br>
              <router-link v-on:click.native="neštonešto" to="losangelesprofile">Los Angeles</router-link>
              <br>
              <router-link v-on:click.native="neštonešto" to="vancouverprofile">Vancouver</router-link>
              <br>
              <router-link v-on:click.native="neštonešto" to="phoenixprofile">Phoenix</router-link>
              <br>
              <router-link v-on:click.native="neštonešto" to="denverprofile">Denver</router-link>
              <br>
              <router-link v-on:click.native="neštonešto" to="chicagoprofile">Chicago</router-link>
              <br>
              <router-link v-on:click.native="neštonešto" to="sanjoseprofile">San José</router-link>
            </li>
            
           

            <li>
              <strong>Asia:</strong>
              <br>
              <router-link v-on:click.native="neštonešto" to="seoulprofile">Seoul</router-link>
              <br>
              <router-link v-on:click.native="neštonešto" to="tokyoprofile">Tokyo</router-link>
            </li>

            

            <li>
              <strong>Africa:</strong>
              <br>
              <router-link v-on:click.native="neštonešto" to="lagosprofile">Lagos</router-link>
              <br>
              <router-link v-on:click.native="neštonešto" to="cairoprofile">Cairo</router-link>
              <br>
              <router-link v-on:click.native="neštonešto" to="nairobiprofile">Nairobi</router-link>
            </li>

           

            <li>
              <strong>Australia:</strong>
              <br>
              <router-link v-on:click.native="neštonešto" to="sydneyprofile">Sydney</router-link>
              <br>
              <router-link v-on:click.native="neštonešto" to="melbournehprofile">Melbourne</router-link>
            </li>
        </ul>
      </div>
  </div>
</template>

<script>
import DigitalClock from '@/components/DigitalClock.vue'

export default {
  name: 'home',
  components: {
    DigitalClock,
  },
  data() {
    return {
      checked1: 'Choose',
      checked2: 'Choose',
      checked3: 'Choose',
      dates: [
        { city: 'Local', region: '/'},
        { city: 'New York', region: 'America/New_York'}, 
        { city: 'Berlin', region: 'Europe/Berlin'},
        { city: 'Los Angeles', region: 'America/Los_Angeles'},
        { city: 'Madrid', region: 'Europe/Madrid'},
        { city: 'Vancouver', region: 'America/Vancouver'},
        { city: 'Phoenix', region: 'America/Phoenix'},
        { city: 'Denver', region: 'America/Denver'},
        { city: 'London', region: 'Europe/London'},
        { city: 'San José', region: 'America/Costa_Rica'},
        { city: 'Chicago', region: 'America/Chicago'},
        { city: 'Moscow', region: 'Europe/Moscow'},
        { city: 'Zagreb', region: 'Europe/Zagreb'},
        { city: 'Cairo', region: 'Africa/Cairo'},
        { city: 'Lagos', region: 'Africa/Lagos'},
        { city: 'Seoul', region: 'Asia/Seoul'},
        { city: 'Sydney', region: 'Australia/Sydney'},
        { city: 'Amsterdam', region: 'Europe/Amsterdam'},
        { city: 'Tokyo', region: 'Asia/Tokyo'},
        { city: 'Nairobi', region: 'Africa/Nairobi'},
        { city: 'Zurich', region: 'Europe/Zurich'},
        { city: 'Melbourne', region: 'Australia/Melbourne'},
      ],
    };
  },
  // vidit ča s tin computed
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
  .optioncityprofiles {
    float: left;
    /*margin: 45px;*/
    margin-left: 15%;
    margin-top: 50px;
    padding: 30px;
    border-style: inset;
    border-width: 3px;
    border-color: rgb(3, 3, 3);
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
  a {
    color: #000000;
  }
  ul {
    float: left; 
    list-style-type: none;
  }
  li {
    float: left; 
    padding: 50px;
  }
</style>


