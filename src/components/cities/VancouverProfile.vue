<!-- Ova vue datoteka se povezuje sa "ProfilesCity"; ovaj dio se treba prikazat kada se odabere 
     opcija grada u Home.vue (ispod satova) 
 -->

<template>
  <div class="vancouverprofile" style="padding: 30px">
    <div class="col-3 float-left pr-3">
      <img alt="" class="madrid" src="vancouver.jpg" style="border-radius: 10%; height: 300px; width: 300px"> 
      <h3>Vancouver</h3>
      <h6>Country: Canada</h6>
      <br>
      <h6>Location: 49.2827° N, 123.1207° W </h6>
      <br>
      <h6>Time zone: PST</h6>
      <br>
      <h6>UTC time offset: -8</h6>
      <div class="button">
        <router-link to="/">       
          <button type="file" class="btn btn-primary mt-5" style="float: left; margin-right: 15px">Go back to clocks</button>
        </router-link> 
      </div>  
    </div>
    <div class="col-9 float-left pl-2">
      <p style="float: left; padding: 40px font-size: 15px">
        Vancouver is a coastal seaport city in western Canada, located in the Lower Mainland region of British Columbia. 
        As the most populous city in the province, the 2016 census recorded 631,486 people in the city, up from 603,502 in 2011. 
        The Greater Vancouver area had a population of 2,463,431 in 2016, making it the third-largest metropolitan area in Canada.
        Vancouver has the highest population density in Canada, with over 5,400 people per square kilometre, which makes it the fifth-most densely populated city with over 250,000 residents in North America.
        Vancouver is one of the most ethnically and linguistically diverse cities in Canada: 52% of its residents are not native English speakers, 48.9% are native speakers of neither English nor French, and 50.6% of residents belong to visible minority groups.
        Vancouver is consistently named as one of the top five worldwide cities for livability and quality of life, and the Economist Intelligence Unit acknowledged it as the first city ranked among the top ten of the world's most well-living cities for ten consecutive years.
        Vancouver was originally named Gastown and began as a settlement which grew around the site of a makeshift tavern on the western edges of Hastings Mill built on July 1, 1867, and owned by proprietor Gassy Jack.
        The city was renamed "Vancouver" in 1886, through a deal with the Canadian Pacific Railway (CPR).
        The Canadian Pacific transcontinental railway was extended to the city by 1887. 
    </p>
    </div>
  </div>
</template>