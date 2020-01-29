<template>
  <div class="londonprofile" style="padding: 30px">
    <div class="col-3 float-left pr-3">
      <img alt="" class="london" src="london.jpg" style="border-radius: 10%; height: 300px; width: 300px">
      <h3>London</h3>
      <h6>Country: England</h6>
      <br>
      <h6>Location: 31.7683° N, 35.2137° E </h6>
      <br>
      <h6>Time zone: GTM</h6>
      <br>
      <h6>UTC time offset: 0</h6>
      <div class="button">
        <router-link to="/"> 
          <button type="file" class="btn btn-primary mt-5" style="float: left; margin-right: 15px">Go back to clocks</button>
        </router-link>
        <router-link to="/londonsearch">       
          <button type="file" class="btn btn-primary mt-5" style="float: left; margin-right: 15px">Search for Users</button>
        </router-link> 
      </div>
    </div>
    <div class="col-9 float-left pl-2">
      <p style="float: left; padding: 40px; font-size: 19px">
        London is the capital and largest city of England and of the United Kingdom.
        It is considered to be one of the world's most important global cities and has been termed the world's most powerful, most desirable, most influential, most visited, most expensive, innovative, sustainable, most investment friendly, and most popular for work city.
        London has a diverse range of people and cultures, and more than 300 languages are spoken in the region.
        Its estimated mid-2018 municipal population (corresponding to Greater London) was 8,908,081, the third most populous of any city in Europe and accounts for 13.4% of the UK population.
        London's urban area is the third most populous in Europe, after Paris and Istanbul, with 9,787,426 inhabitants at the 2011 census.
        London contains four World Heritage Sites: the Tower of London; Kew Gardens; the site comprising the Palace of Westminster, Westminster Abbey, and St Margaret's Church; and the historic settlement in Greenwich where the Royal Observatory, Greenwich defines the Prime Meridian (0° longitude) and Greenwich Mean Time.
        Other landmarks include Buckingham Palace, the London Eye, Piccadilly Circus, St Paul's Cathedral, Tower Bridge, Trafalgar Square and The Shard.
      </p>
    </div>
  </div>
</template>