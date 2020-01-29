<template>
  <div class="seoulprofile" style="padding: 30px">
    <div class="col-3 float-left pr-3">
      <img alt="" class="seoul" src="seoul.jpg" style="border-radius: 10%; height: 300px; width: 300px">
      <h3>Seoul</h3>
      <h6>Country: South Korea</h6>
      <br>
      <h6>Location: 37.5665° N, 126.9780° E</h6>
      <br>
      <h6>Time zone: KST</h6>
      <br>
      <h6>UTC time offset: +7</h6>
      <div class="button">
        <router-link to="/"> 
          <button type="file" class="btn btn-primary mt-5" style="float: left; margin-right: 15px">Go back to clocks</button>
        </router-link>
        <router-link to="seoulsearch">       
          <button type="file" class="btn btn-primary mt-5" style="float: left; margin-right: 15px">Search for Users</button>
        </router-link> 
      </div>
    </div>
    <div class="col-9 float-left pl-2">
      <p style="float: left; padding: 40px; font-size: 19px">
        Seoul is the capital and largest metropolis of South Korea.
        Seoul forms the heart of the Seoul Capital Area. 
        Ranked as an alpha world city, Seoul was the world's 4th largest metropolitan economy with a GDP of US$635 billion in 2014 after Tokyo, New York City and Los Angeles. 
        With major technology hubs centered in Gangnam and Digital Media City, the Seoul Capital Area is home to the headquarters of 15 Fortune Global 500 companies, including Samsung, LG, and Hyundai.
        Ranked seventh in the Global Power City Index and Global Financial Centres Index, the metropolis exerts a major influence in global affairs as one of the five leading hosts of global conferences.
        Seoul has hosted the 1986 Asian Games, 1988 Summer Olympics, 2002 FIFA World Cup, and more recently the 2010 G-20 Seoul summit.
        Seoul was the capital of various Korean kingdoms, including Baekje, Joseon, and the Korean Empire and served as the secondary capital of Goryeo. 
        Strategically located along the Han River, Seoul's history could stretch back over two thousand years, when it was founded in 18 BCE by the people of Baekje, one of the Three Kingdoms of Korea. 
      </p>
    </div>
  </div>
</template>