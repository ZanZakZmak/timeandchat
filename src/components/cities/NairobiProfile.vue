<template>
  <div class="nairobiprofile" style="padding: 30px">
    <div class="col-3 float-left pr-3">
      <img alt="" class="nairobi" src="nairobi.jpg" style="border-radius: 10%; height: 300px; width: 300px">
      <h3>Nairobi</h3>
      <h6>Country: Kenya</h6>
      <br>
      <h6>Location: 1.2921° S, 36.8219° E</h6>
      <br>
      <h6>Time zone: EAT</h6>
      <br>
      <h6>UTC time offset: +2</h6>
      <div class="button">
        <router-link to="/"> 
          <button type="file" class="btn btn-primary mt-5" style="float: left; margin-right: 15px">Go back to clocks</button>
        </router-link>
        <router-link to="/nairobisearch">       
          <button type="file" class="btn btn-primary mt-5" style="float: left; margin-right: 15px">Search for Users</button>
        </router-link> 
      </div>
    </div>
    <div class="col-9 float-left pl-2">
      <p style="float: left; padding: 40px; font-size: 19px">
        Nairobi is the capital and the largest city of Kenya. 
        The name comes from the Maasai phrase Enkare Nairobi, which translates to "cool water", a reference to the Nairobi River which flows through the city. 
        The city proper had a population of 4,397,073 in the 2019 census, while the metropolitan area has a population of 9,354,580. 
        The city is popularly referred to as the Green City in the Sun.
        Nairobi was founded in 1899 by the colonial authorities in British East Africa, as a rail depot on the Uganda Railway. 
        The town quickly grew to replace Mombasa as the capital of Kenya in 1907. 
        After independence in 1963, Nairobi became the capital of the Republic of Kenya.
        During Kenya's colonial period, the city became a centre for the colony's coffee, tea and sisal industry.
        According to the 2019 census, in the administrative area of Nairobi, 4,397,073 inhabitants lived within 696 km2 (269 sq mi).
        Home to thousands of Kenyan businesses and over 100 major international companies and organizations, including the United Nations Environment Programme (UN Environment) and the United Nations Office at Nairobi (UNON), Nairobi is an established hub for business and culture. 
        The Nairobi Securities Exchange (NSE) is one of the largest in Africa and the second-oldest exchange on the continent. 
        It is Africa's fourth-largest exchange in terms of trading volume, capable of making 10 million trades a day.
      </p>
    </div>
  </div>
</template>