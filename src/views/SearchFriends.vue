<template>
    <div class="searchfriends">
      <h2>xd</h2>
      <div class="option">
        <select class="dateselect" v-model="checked1" style="background-color: rgb(88, 88, 92); border-width: 0px; color: white;  width: 150px; font-size: 20px">
          <option selected="checked1" value="None">None</option>
          <option v-bind:key="date" v-for="date in dates" :value="date">     
            {{ date.newLocation }}
          </option>
        </select> 
      </div>
      <div>
        <!-- <form id="add-cafe-form"></form> -->
   
        <ul id="search-friends-list"></ul>
      </div>
        <!--
        <div>
            <p>{{ displayName }} {{ newLocation }} {{ userEmail }}</p>  (za displayName dodat router-link)
        </div> -->
    </div>
</template>


<!-- 

za sortiranje korisnika bit će potreban addSnapshotListener() ili orderBy()

-> https://github.com/firebase/snippets-web/blob/cec7d56a58076a5fb6a1fb1de2d65f617d617113/firestore/test.firestore.js#L848-L848   -> CTRL + F + ORDERBY
-> https://firebase.google.com/docs/firestore/query-data/order-limit-data
-> https://firebase.google.com/docs/firestore/query-data/listen
-> google: addSnapshotListener()
-> google: orderby javascript
-> https://firebase.google.com/docs/firestore/query-data/listen  (onSnapshot)
-> https://firebase.google.com/docs/auth/admin/manage-users#list_all_users (list all users)
-> google: firebase sort by city
-> https://stackoverflow.com/questions/44286535/how-to-get-all-users-data-from-firebase-database-in-custom-listview-in-android (to je za android, ali forsi pomore)
-> https://www.w3schools.com/jsref/jsref_sort.asp
-> google: firebase sort by date
-> google: Firebase javascript Location Query
-> https://firebase.google.com/docs/reference/js/firebase.database.Query.html#orderbykey
-> https://firebase.google.com/docs/database/web/lists-of-data#listen_for_child_events
-> pogledat VUE_5
->



-> https://www.youtube.com/watch?v=mYyPbfpoZeM Firebase Firestore Tutorial #6 - Making Queries VAŽAN VIDEO
-> https://www.youtube.com/watch?v=cb8H_hp10rc Firebase Firestore Tutorial #7 - Ordering Data VAŽAN VIDEO
-> https://stackoverflow.com/questions/56790610/calling-a-method-from-a-click-event-in-a-router-link-inside-a-component-vue-js
-> google: router link inside function vue
-> https://stackoverflow.com/questions/51254923/how-to-call-vue-router-from-inside-custom-function
-> google: firebase router vue
-> google: children route vue

--> 





<script>
export default {
  data() {
    return {
      checked1: '',
      //checked2: 'Choose',
      //checked3: 'Choose',
      dates: [
        //{ city: 'Choose', regi}
        { newLocation: 'Local', region: '/'},
        { newLocation: 'New York', region: 'America/New_York'}, 
        { newLocation: 'Berlin', region: 'Europe/Berlin'},
        //{ city: 'Teheran', region: 'Asia/Tehran'},
        { newLocation: 'Los Angeles', region: 'America/Los_Angeles'},
        { cinewLocationty: 'Madrid', region: 'Europe/Madrid'},
        //{ city: 'Sao Paulo', region: 'America/Sao_Paulo'},     //PIŠE UTM UMISTO VREMENSKE ZONE
        { newLocation: 'Vancouver', region: 'America/Vancouver'},
        { newLocation: 'Phoenix', region: 'America/Phoenix'},
       // { city: 'Jerusalem', region: 'Asia/Jerusalem'},
        { newLocation: 'Denver', region: 'America/Denver'},
        { newLocation: 'London', region: 'Europe/London'},
        { newLocation: 'San José', region: 'America/Costa_Rica'},
        { newLocation: 'Chicago', region: 'America/Chicago'},
        { newLocation: 'Moscow', region: 'Europe/Moscow'},
        //{ city: 'Guam', region: 'Pacific/Guam'},
        { newLocation: 'Zagreb', region: 'Europe/Zagreb'},
        //{ city: 'Jamaica', region: 'America/Jamaica'},
        //{ city: 'Singapore', region: 'Asia/Singapore'},        //PIŠE UTM UMISTO VREMENSKE ZONE
        { newLocation: 'Cairo', region: 'Africa/Cairo'},
        //{ city: 'Buenos Aires', region: 'America/Argentina/Buenos_Aires'},     //PIŠE UTM UMISTO VREMENSKE ZONE
        { newLocation: 'Lagos', region: 'Africa/Lagos'},
        //{ city: 'Dubai', region: 'Asia/Dubai'},     //PIŠE UTM UMISTO VREMENSKE ZONE
        { newLocation: 'Seoul', region: 'Asia/Seoul'},
        { newLocation: 'Sydney', region: 'Australia/Sydney'},
        { newLocation: 'Amsterdam', region: 'Europe/Amsterdam'},
        { newLocation: 'Tokyo', region: 'Asia/Tokyo'},
        { newLocation: 'Nairobi', region: 'Africa/Nairobi'},
        //{ city: 'Santiago', region: 'America/Santiago'},   //PIŠE UTM UMISTO VREMENSKE ZONE
        { newLocation: 'Zurich', region: 'Europe/Zurich'},
        { newLocation: 'Melbourne', region: 'Australia/Melbourne'},
      ],
    };
  },
  mounted (){
    const searchFreindsList = document.querySelector('#search-friends-list');

    // create element & render users
    function renderUsers(doc){
      let li = document.createElement('li');
      let displayName = document.createElement('span');
      let newLocation = document.createElement('span');

      li.setAttribute('data-id', doc.id);
      displayName.textContent = doc.data().displayName;
      newLocation.textContent = doc.data().newLocation;

      /*<router-link to="/yourprofile">*/li.appendChild(displayName)/*</router-link>*/;
      li.appendChild(newLocation);

      searchFreindsList.appendChild(li);
    }

    // getting data
    db.collection('users')/*.where('newLocation', '==', 'Vancouver')*/.get().then(snapshot => {
      snapshot.docs.forEach(doc => {
        renderUsers(doc);
      });
    });
  }
}
</script>




<!-- POPRAVIT -->
<style>
ul{
  list-style-type: none;
}
li{
  padding: 20px;
  font-size: 20px;
  background: #f6f6f6;
  color: #020202;
  border-bottom: 1px solid #e6e6e6;
  height: 46px;
}
li span:nth-child(1){
  float: left;
}
li span:nth-child(2){
  float: right;
  font-size: 20px;
  height: 46px;  /*padding: 10px;*/
  color: #020202;
}
/*
li div{
    position: absolute;
    top: 0;
    right: 0px;
    background: rgba(255,255,255,0.6);
    width: 40px;
    text-align: center;
    padding: 10px 0;
    font-weight:  bold;
    cursor:  pointer;
}*/
</style>

<!--
<script>
import store from '@/store.js'
export default {
  data () {
    return store;
  },
    
    
    mounted () { 

    var user = firebase.auth().currentUser; -> ovdje trebaju doć ostali korisnici (pogledat firebase kod ispod)
    var email, bio, location, username;      //newImageUrl, uid, emailVerified;

    if (user != null) {
      username = user.displayName;
      email = user.userEmail;
      bio = user.newBio;
      location = user.newLocation;
}


firestoreDB.collection("users") .whereEqualTo("newLocation", /* getTodaysDate() */) .addSnapshotListener( .....)
</script>


-->