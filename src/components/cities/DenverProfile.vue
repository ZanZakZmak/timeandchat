<template>
  <div class="denverprofile" style="padding: 30px">
    <div class="col-3 float-left pr-3">
      <img alt="" class="denver" src="denver.jpg" style="border-radius: 10%; height: 300px; width: 300px"> 
      <h3>Denver</h3>
      <h6>Country: United States of America</h6>
      <br>
      <h6>Location: 39.7392° N, 104.9903° W </h6>
      <br>
      <h6>Time zone: MST</h6>
      <br>
      <h6>UTC time offset: -7</h6>
      <div class="button">
        <router-link to="/">       
          <button type="file" class="btn btn-primary mt-5" style="float: left; margin-right: 15px">Go back to clocks</button>
        </router-link> 
        <router-link to="/denversearch">       
          <button type="file" class="btn btn-primary mt-5" style="float: left; margin-right: 15px">Search for Users</button>
        </router-link> 
      </div>  
    </div>
    <div class="col-9 float-left pl-2">
      <p style="float: left; padding: 40px font-size: 15px">
        Denver, officially the City and County of Denver, is the capital and most populous municipality of the U.S. state of Colorado. 
        Denver is located in the South Platte River Valley on the western edge of the High Plains just east of the Front Range of the Rocky Mountains. 
        With an estimated population of 716,492 in 2018, Denver is the 19th-most populous U.S. city, and with a 19.38% increase since the 2010 United States Census, it has been one of the fastest-growing major cities in the United States.
        It is ranked as a Beta world city by the Globalization and World Cities Research Network. 
        The 10-county Denver-Aurora-Lakewood, CO Metropolitan Statistical Area had an estimated 2018 population of 2,932,415 and is the 19th most populous U.S. metropolitan statistical area.
        Denver is the most populous city within a 500-mile (800 km) radius and the second-most populous city in the Mountain West after Phoenix, Arizona. 
        In 2016, Denver was named the best place to live in the United States by U.S. News & World Report.
      </p>
    </div>
  </div>
</template>