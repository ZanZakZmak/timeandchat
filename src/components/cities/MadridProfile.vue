<!-- Ova vue datoteka se povezuje sa "ProfilesCity"; ovaj dio se treba prikazat kada se odabere 
     opcija grada u Home.vue (ispod satova) 
 -->

<template>
  <div class="madridrofile" style="padding: 30px">
    <div class="col-3 float-left pr-3">
      <img alt="" class="madrid" src="madrid.jpg" style="border-radius: 10%; height: 300px; width: 300px"> 
      <h3>Madrid</h3>
      <h6>Country: Spain</h6>
      <br>
      <h6>Location: 40.4168° N, 3.7038° W </h6>
      <br>
      <h6>Time zone: CET</h6>
      <br>
      <h6>UTC time offset: +1</h6>
      <div class="button">
        <router-link to="/">        
          <button type="file" class="btn btn-primary mt-5" style="float: left; margin-right: 15px">Go back to clocks</button>
        </router-link> 
      </div>  
    </div>
    <div class="col-9 float-left pl-2">
      <p style="float: left; padding: 40px font-size: 15px">
        Madrid is the capital and most populous city of Spain. 
        The city has almost 3.3 million inhabitants and a metropolitan area population of approximately 6.5 million. 
        It is the third-largest city in the European Union (EU), surpassed only by London and Berlin.
        Madrid lies on the River Manzanares in the centre of both the country and the Community of Madrid (which comprises the city of Madrid, its conurbation and extended suburbs and villages); this community is bordered by the autonomous communities of Castile and León and Castile-La Mancha. 
        As the capital city of Spain, seat of government, and residence of the Spanish monarch, Madrid is also the political, economic and cultural centre of the country.
        The Madrid urban agglomeration has the third-largest GDP in the European Union and its influence in politics, education, entertainment, environment, media, fashion, science, culture, and the arts all contribute to its status as one of the world's major global cities.
        Madrid is home to two world-famous football clubs, Real Madrid and Atlético Madrid.
        While Madrid possesses modern infrastructure, it has preserved the look and feel of many of its historic neighbourhoods and streets. 
        Its landmarks include the Plaza Mayor, the Royal Palace of Madrid; the Royal Theatre with its restored 1850 Opera House; the Buen Retiro Park, founded in 1631; the 19th-century National Library building (founded in 1712) containing some of Spain's historical archives; many national museums, and the Golden Triangle of Art, located along the Paseo del Prado and comprising three art museums: Prado Museum, the Reina Sofía Museum, a museum of modern art, and the Thyssen-Bornemisza Museum, which complements the holdings of the other two museums.
    </p>
    </div>
  </div>
</template>