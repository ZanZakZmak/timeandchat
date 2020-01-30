<template>
  <div class="cairoprofile" style="padding: 30px">
    <div class="col-3 float-left pr-3">
      <img alt="" class="cairo" src="cairo.jpg" style="border-radius: 10%; height: 300px; width: 300px">
      <h3>Cairo</h3>
      <h6>Country: Egypt</h6>
      <br>
      <h6>Location: 30.0444° N, 31.2357° E </h6>
      <br>
      <h6>Time zone: EET</h6>
      <br>
      <h6>UTC time offset: +2</h6>
      <div class="button">
        <router-link to="/"> 
          <button type="file" class="btn btn-primary mt-5" style="float: left; margin-right: 15px">Go back to clocks</button>
        </router-link>
        <router-link to="/cairosearch">       
          <button type="file" class="btn btn-primary mt-5" style="float: left; margin-right: 15px">Search for Users</button>
        </router-link> 
      </div>
    </div>
    <div class="col-9 float-left pl-2">
      <p style="float: left; padding: 40px; font-size: 19px">
        Cairo is the capital of Egypt and the largest city in the Arab world. 
        Its metropolitan area, with a population of over 20 million, is the largest in Africa, the Arab world, and the Middle East, and the 15th-largest in the world. 
        Cairo is associated with ancient Egypt, as the famous Giza pyramid complex and the ancient city of Memphis are located in its geographical area. 
        Located near the Nile Delta, modern Cairo was founded in 969 AD by the Fatimid dynasty, but the land composing the present-day city was the site of ancient national capitals whose remnants remain visible in parts of Old Cairo. 
        Cairo has long been a centre of the region's political and cultural life, and is titled "the city of a thousand minarets" for its preponderance of Islamic architecture.
        Cairo has the oldest and largest film and music industries in the Arab world, as well as the world's second-oldest institution of higher learning, Al-Azhar University. 
        Many international media, businesses, and organizations have regional headquarters in the city; the Arab League has had its headquarters in Cairo for most of its existence.
        With a population of over 9 million spread over 3,085 square kilometers (1,191 sq mi), Cairo is by far the largest city in Egypt. 
        An additional 9.5 million inhabitants live in close proximity to the city. Cairo, like many other megacities, suffers from high levels of pollution and traffic. 
        Cairo's metro, one of two in Africa (the other being in Algiers, Algeria), ranks among the fifteen busiest in the world, with over 1 billion annual passenger rides. 
      </p>
    </div>
  </div>
</template>