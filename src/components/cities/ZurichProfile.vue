<template>
  <div class="zurichprofile" style="padding: 30px">
    <div class="col-3 float-left pr-3">
      <img alt="" class="zurich" src="zurich.jpg" style="border-radius: 10%; height: 300px; width: 300px"> 
      <h3>Zürich</h3>
      <h6>Country: Switzerland</h6>
      <br>
      <h6>Location: 46.8182° N, 8.2275° E </h6>
      <br>
      <h6>Time zone: CET</h6>
      <br>
      <h6>UTC time offset: +1</h6>
      <div class="button">
        <router-link to="/">       
          <button type="file" class="btn btn-primary mt-5" style="float: left; margin-right: 15px">Go back to clocks</button>
        </router-link> 
        <router-link to="/zurichsearch">       
          <button type="file" class="btn btn-primary mt-5" style="float: left; margin-right: 15px">Search for Users</button>
        </router-link> 
      </div>  
    </div>
    <div class="col-9 float-left pl-2">
      <p style="float: left; padding: 40px font-size: 15px">
        Zürich is the largest city in Switzerland and the capital of the canton of Zürich. 
        It is located in north-central Switzerland at the northwestern tip of Lake Zürich. 
        The municipality has approximately 430,000 inhabitants, the urban area (agglomeration) 1.315 million and the Zürich metropolitan area 1.83 million.
        Zürich is a hub for railways, roads, and air traffic. Both Zurich Airport and railway station are the largest and busiest in the country.
        During the Middle Ages, Zürich gained the independent and privileged status of imperial immediacy and, in 1519, became a primary centre of the Protestant Reformation in Europe under the leadership of Huldrych Zwingli.
        The official language of Zürich is German, but the main spoken language is the local variant of the Alemannic Swiss German dialect, Zürich German.
        Zürich is a leading global city and among the world's largest financial centres despite having a relatively small population.
        The city is home to many financial institutions and banking companies. 
        Many of Switzerland's research and development centres are concentrated in the Greater Zürich area and the low tax rates and canton funding subsidies attract overseas companies to set up their headquarters or finance treasury services in the city.
    </p>
    </div>
  </div>
</template>