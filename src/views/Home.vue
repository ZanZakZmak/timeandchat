<template>
  <div class="home" style="margin: 0 auto">
    <h1 style="padding: 20px; font-family: Racing Sans One; color: #2c3e50">WELCOME TO TIME AND CHAT</h1>
    <div class="theclocks" sytle="width: 200px">
      <DigitalClock :tz="checked1"/>

      <div class="option">
        <select class="dateselect" v-model="checked1" style="background-color: rgb(88, 88, 92); border-width: 0px; color: white;  width: 220px; font-size: 20px">
          <option selected="checked1" value="Choose">Choose city</option>
          <option v-bind:key="date" v-for="date in dates" :value="date">     
            {{ date.city }}
          </option>
        </select> 
      </div>
    </div>

    <div class="theclocks">
      <DigitalClock :tz="checked2"/> 

      <div class="option">
      <select class="dateselect" v-model="checked2" style="background-color: rgb(88, 88, 92); border-width: 0px; color: white;  width: 220px; font-size: 20px">
        <option selected="checked2" value="Choose">Choose city</option>
        <option v-bind:key="date" v-for="date in dates" :value="date">     
          {{ date.city }}
        </option>
        </select> 
      </div>
      
    </div>

    <div class="theclocks">
      <DigitalClock :tz="checked3"/>  
      <div class="option">
      <select class="dateselect" v-model="checked3" style="background-color: rgb(88, 88, 92); border-width: 0px; color: white;  width: 220px; font-size: 20px">
        <option selected="checked3" value="Choose">Choose city</option>
        <option v-bind:key="date" v-for="date in dates" :value="date">     
          {{ date.city }}
        </option>
        </select> 
      </div>
    </div>
    <div class="optioncityprofiles">
        <ul>
            <p style="color: black"> Choose city to discover more! </p>
            <li>
              <strong>Europe:</strong>
              <br>
              <router-link v-on:click.native="cityProfile" to="berlinprofile">Berlin</router-link>
              <br>
              <router-link v-on:click.native="cityProfile" to="madridprofile">Madrid</router-link>
              <br>
              <router-link v-on:click.native="cityProfile" to="londonprofile">London</router-link>
              <br>
              <router-link v-on:click.native="cityProfile" to="moscowprofile">Moscow</router-link>
              <br>
              <router-link v-on:click.native="cityProfile" to="zagrebprofile">Zagreb</router-link>
              <br>
              <router-link v-on:click.native="cityProfile" to="amsterdamprofile">Amsterdam</router-link>
              <br>
              <router-link v-on:click.native="cityProfile" to="zurichprofile">Zurich</router-link>
            </li>
            
            <li>
              <strong>North America:</strong>
              <br>
              <router-link v-on:click.native="cityProfile" to="newyorkprofile">New York</router-link>
              <br>
              <router-link v-on:click.native="cityProfile" to="losangelesprofile">Los Angeles</router-link>
              <br>
              <router-link v-on:click.native="cityProfile" to="vancouverprofile">Vancouver</router-link>
              <br>
              <router-link v-on:click.native="cityProfile" to="phoenixprofile">Phoenix</router-link>
              <br>
              <router-link v-on:click.native="cityProfile" to="denverprofile">Denver</router-link>
              <br>
              <router-link v-on:click.native="cityProfile" to="chicagoprofile">Chicago</router-link>
            </li>
            
            <li>
              <strong>Asia:</strong>
              <br>
              <router-link v-on:click.native="cityProfile" to="seoulprofile">Seoul</router-link>
              <br>
              <router-link v-on:click.native="cityProfile" to="tokyoprofile">Tokyo</router-link>
            </li>

            <li>
              <strong>Africa:</strong>
              <br>
              <router-link v-on:click.native="cityProfile" to="lagosprofile">Lagos</router-link>
              <br>
              <router-link v-on:click.native="cityProfile" to="cairoprofile">Cairo</router-link>
              <br>
              <router-link v-on:click.native="cityProfile" to="nairobiprofile">Nairobi</router-link>
            </li>

            <li>
              <strong>Australia:</strong>
              <br>
              <router-link v-on:click.native="cityProfile" to="sydneyprofile">Sydney</router-link>
              <br>
              <router-link v-on:click.native="cityProfile" to="melbourneprofile">Melbourne</router-link>
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
}
</script>

<style scoped>
  .theclocks {
    float: left;
    margin: 45px;
    padding: 40px;
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
  .optioncityprofiles {
    float: left;
    margin-left: 15%;
    margin-top: 50px;
    padding: 30px;
  }
  
  .option-select {
    background-color: rgb(88, 88, 92);
    font-family: Arial; 
    width: 10px; 
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
    font-size: 15px;
    float: left; 
    padding: 50px;
  }
</style>


