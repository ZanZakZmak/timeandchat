<template>
    <div class="searchfriends">
      <h2>xd</h2>
      <div>   
        <ul id="search-friends-list">
          <router-link v-on:click.native="sdgdf" to="yourprofile">Profiles</router-link>
        </ul>
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
  mounted (){

      
    var user = firebase.auth().user;
    var email, bio, location, username;      //newImageUrl, uid, emailVerified;

    if (user != null) {
      username = user.displayName;
      email = user.userEmail;
      bio = user.newBio;
      location = user.newLocation;
      // username = user.userName;
      /*newImageUrl = user.newImageUrl;
      emailVerified = user.emailVerified;
      uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.*/
    }
    const searchFreindsList = document.querySelector('#search-friends-list');

    // create element & render users
    function renderUsers(doc){
      let list = document.createElement('li');
      let displayName = document.createElement('span');
      // let link = document.createElement('link');
      let newLocation = document.createElement('span');

      list.setAttribute('data-id', doc.id);
      displayName.textContent = doc.data().displayName;
      /*
      link.appendChild(document.createTextNode("Link"));
      link.href = '#';
      link.onclick = router.push("yourprofile");*/
      newLocation.textContent = doc.data().newLocation;

      /*<router-link to="/yourprofile">*/list.appendChild(displayName)/*</router-link>*/;
      //li.appendChild(link);
      <router-link style="color: black" to="yourprofile">Profiles</router-link>
      list.appendChild(document.createTextNode("Profile")) //--> Radi ali je samo tekst
      list.appendChild(newLocation);

      searchFreindsList.appendChild(list);
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