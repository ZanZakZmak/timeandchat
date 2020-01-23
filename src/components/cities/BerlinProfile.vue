<!-- Ova vue datoteka se povezuje sa "ProfilesCity"; ovaj dio se treba prikazat kada se odabere 
     opcija grada u Home.vue (ispod satova) 
 -->

<template>
  <div class="berlinprofile" style="padding: 30px">
    <div class="col-3 float-left pr-3">
      <!-- <img alt="" class="berlin" src="..." style="border-radius: 10%; height: 300px; width: 300px"> -->
      <h3>Berlin</h3>
      <h6>Country: Germany</h6>
      <br>
      <h6>Location: 52.5200° N, 13.4050° E </h6>
      <br>
      <h6>Time zone: CET</h6>
      <div class="button">
        <router-link to="/">       
          <button type="file" class="btn btn-primary mt-5" style="float: left; margin-right: 15px">Go back to clocks</button>
        </router-link> 
      </div>  
    </div>
    <div class="col-9 float-left pl-2">
      <p style="float: left; padding: 40px font-size: 15px">
        Berlin is the capital and largest city of Germany by both area and population. Its 3,748,148 (2018) inhabitants make it the second most populous city proper of the European Union after London.
        Due to its location in the European Plain, Berlin is influenced by a temperate seasonal climate. About one-third of the city's area is composed of forests, parks, gardens, rivers, canals and lakes. 
        The city lies in the Central German dialect area, the Berlin dialect being a variant of the Lusatian-New Marchian dialects. 
        Berlin became the capital of the Margraviate of Brandenburg (1417–1701), the Kingdom of Prussia (1701–1918), the German Empire (1871–1918), the Weimar Republic (1919–1933), and the Third Reich (1933–1945).
        Berlin is a world city of culture, politics, media and science. Its economy is based on high-tech firms and the service sector, encompassing a diverse range of creative industries, research facilities, media corporations and convention venues.
    </p>
    </div>
  </div>
</template>