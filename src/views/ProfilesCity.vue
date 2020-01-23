<!-- Template profila grada (izgled kako bi stranica trebala izgledati) -->

<template>
  <div class="profilescity" style="padding: 30px">
    <div class="col-3 float-left pr-3">
      <img alt="" class="moscow" src="moscow.jpg" style="border-radius: 10%; height: 300px; width: 300px">
      <h3>Moscow</h3>
      <h6>Country: Russia</h6>
      <br>
      <h6>Location: 55°45'20.9"N 37°37'02.3"E </h6>
      <br>
      <h6>Time zone: MSK</h6>
      <div class="button">
        <router-link to="/"> <!-- "/" bi trebao vodit u Home.vue -->
          <button type="file" class="btn btn-primary mt-5" style="float: left; margin-right: 15px">Go back to clocks</button>
        </router-link>
      </div>
    </div>
    <div class="col-9 float-left pl-2">
      <p style="float: left; padding: 40px; font-size: 19px">
        Moscow is the capital and most populous city of Russia, with approximately 15.1 million residents within the city limits, 17 million within the urban area and 20 million within the metropolitan area.
        Moscow is one of Russia's federal cities. Moscow is a major political, economic, cultural, and scientific center of Russia and Eastern Europe, as well as the largest city (by area) on the European continent.
        Moscow is the northernmost and coldest megacity on Earth. 
        By its territorial expansion on July 1, 2012 southwest into the Moscow Oblast, the area of the capital more than doubled, going from 1,091 to 2,511 square kilometers (421 to 970 sq mi), resulting in Moscow becoming the largest city on the European continent by area; it also gained an additional population of 233,000 people.
      </p>
    </div>
  </div>
</template>

<style scoped>
  .profilescity{
    background: rgb(78,221,23);
    background: linear-gradient(95deg, rgba(78,221,23,1) 0%, rgba(109,238,50,1) 30%, rgba(215,252,56,1) 91%);
  }
</style>