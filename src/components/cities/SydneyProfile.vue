<template>
  <div class="sydneyprofile" style="padding: 30px">
    <div class="col-3 float-left pr-3">
      <img alt="" class="sydney" src="sydney.jpg" style="border-radius: 10%; height: 300px; width: 300px">
      <h3>Sydney</h3>
      <h6>Country: Australia</h6>
      <br>
      <h6>Location: 33.8688° S, 151.2093° E</h6>
      <br>
      <h6>Time zone: AEDT</h6>
      <br>
      <h6>UTC time offset: +10</h6>
      <div class="button">
        <router-link to="/"> 
          <button type="file" class="btn btn-primary mt-5" style="float: left; margin-right: 15px">Go back to clocks</button>
        </router-link>
        <router-link to="/sydneysearch">       
          <button type="file" class="btn btn-primary mt-5" style="float: left; margin-right: 15px">Search for Users</button>
        </router-link> 
      </div>
    </div>
    <div class="col-9 float-left pl-2">
      <p style="float: left; padding: 40px; font-size: 19px">
        Sydney is the state capital of New South Wales and the most populous city in Australia and Oceania.
        Located on Australia's east coast, the metropolis surrounds Port Jackson and extends about 70 km (43.5 mi) on its periphery towards the Blue Mountains to the west, Hawkesbury to the north, the Royal National Park to the south and Macarthur to the south-west.
        Sydney is made up of 658 suburbs, 40 local government areas and 15 contiguous regions. 
        Residents of the city are known as "Sydneysiders".
        As of June 2017, Sydney's estimated metropolitan population was 5,230,330 and is home to approximately 65% of the state's population.
        During his first Pacific voyage in 1770, Lieutenant James Cook and his crew became the first Europeans to chart the eastern coast of Australia, making landfall at Botany Bay and inspiring British interest in the area. 
        In 1788, the First Fleet of convicts, led by Arthur Phillip, founded Sydney as a British penal colony, the first European settlement in Australia. Phillip named the city Sydney in recognition of Thomas Townshend, 1st Viscount Sydney.
        Penal transportation to New South Wales ended soon after Sydney was incorporated as a city in 1842. 
        A gold rush occurred in the colony in 1851, and over the next century, Sydney transformed from a colonial outpost into a major global cultural and economic centre. 
        After World War II, it experienced mass migration and became one of the most multicultural cities in the world.
        At the time of the 2011 census, more than 250 different languages were spoken in Sydney.
        In the 2016 Census, about 35.8% of residents spoke a language other than English at home.
        Furthermore, 45.4% of the population reported having been born overseas, and the city has the third largest foreign born population of any city in the world after London and New York City, respectively.
        Despite being one of the most expensive cities in the world, Sydney frequently ranks in the top ten of lists of the most livable cities in the world.
        Ranked eleventh in the world for economic opportunity, Sydney has an advanced market economy with strengths in finance, manufacturing and tourism.
      </p>
    </div>
  </div>
</template>