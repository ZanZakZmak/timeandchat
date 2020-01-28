<!-- Ova vue datoteka se povezuje sa "ProfilesCity"; ovaj dio se treba prikazat kada se odabere 
     opcija grada u Home.vue (ispod satova) 
 -->

<template>
  <div class="newyorkprofile" style="padding: 30px">
    <div class="col-3 float-left pr-3">
      <img alt="" class="newyork" src="newyork.jpg" style="border-radius: 10%; height: 300px; width: 300px">
      <h3>New York</h3>
      <h6>Country: United States of America</h6>
      <br>
      <h6>Location: 40.7128° N, 74.0060° W </h6>
      <br>
      <h6>Time zone: EST</h6>
      <br>
      <h6>UTC time offset: -5</h6>
      <div class="button">
        <router-link to="/"> <!-- "/" bi trebao vodit u Home.vue -->
          <button type="file" class="btn btn-primary mt-5" style="float: left; margin-right: 15px">Go back to clocks</button>
        </router-link>
      </div>
      <div class="button">
        <router-link to="/nysearch">       
          <button type="file" class="btn btn-primary mt-5" style="float: left; margin-right: 15px">fwends</button>
        </router-link> 
      </div>  
    </div>
    <div class="col-9 float-left pl-2">
      <p style="float: left; padding: 40px font-size: 15px">
        New York City (NYC), also known as the City of New York or simply New York (NY), is the most populous city in the United States. With an estimated 2018 population of 8,398,748 distributed over a land area of about 302.6 square miles (784 km2), New York is also the most densely populated major city in the United States.
        New York City consists of five boroughs, each of which is a separate county of the State of New York. The five boroughs – Brooklyn, Queens, Manhattan, The Bronx, and Staten Island – were consolidated into a single city in 1898.        Moscow is the northernmost and coldest megacity on Earth. 
        Many districts and landmarks in New York City are well known, including three of the world's ten most visited tourist attractions in 2013; a record 62.8 million tourists visited in 2017.      
        Several sources have ranked New York the most photographed city in the world. Times Square, iconic as the world's "heart" and "crossroads", is the brightly illuminated hub of the Broadway Theater District, one of the world's busiest pedestrian intersections, and a major center of the world's entertainment industry. The names of many of the city's landmarks, skyscrapers, and parks are known internationally. Manhattan's real estate market is among the most expensive in the world.
    </p>
    </div>
  </div>
</template>

<style scoped>
  .profilescity{
    background: rgb(78,221,23);
    background: linear-gradient(95deg, rgba(78,221,23,1) 0%, rgba(109,238,50,1) 30%, rgba(215,252,56,1) 91%);
  }
</style>