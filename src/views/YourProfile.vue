<template>

  <!-- 

  https://vuex.vuejs.org/guide/actions.html
  https://vuex.vuejs.org/guide/getters.html
  istražit o vuex-u i o gettersima


  https://router.vuejs.org/guide/essentials/dynamic-matching.html#catch-all-404-not-found-route
  istražit o this.$route.params

  bezveze linkovi: vidit po potrebi da li će mi trebat:
  https://stackoverflow.com/questions/56070330/get-current-user-login-user-information-in-profile-page-firebase-and-vuejs
  https://stackoverflow.com/questions/54212080/how-to-get-currentuser-on-first-load-in-firebase-auth-without-requesting
  istražit o firebase v-if current user

  -->

  <div class="yourprofile" style="padding: 30px">
    <div class="profil-podaci" style="float: left">  <!-- col-3 float-left pr-3 -->
      <div class="pic" style="float: left">
        <!-- <img :src="newImageUrl" class="user-img" /> -->
        <img alt="" height="230" width="230" src="slika.jpg" style="border-radius: 15%">
        <h1 style="font-size: 20px; padding: 10px">Name: {{ displayName }}</h1> 
        <h2 style="font-size: 20px">Location: {{ newLocation }}</h2> 
        <p style="font-size: 15px">E-mail: {{ userEmail }}</p> 
      </div>
      <div class="button">
        <!-- 
          <div v-if="user = firebase.auth().currentUser">
            <router-link class="btn btn-primary mt-5" :to="{ name: 'edit' }">
              Edit Profile
            </router-link>
            <button type="file" class="btn btn-primary mt-5">Friend List</button>
          </div>
          <div v-else>
            <router-link to="/friends(nepostojeći link)">
              <button type="file" class="btn btn-primary mt-5" style="float: left; margin-right: 15px">Add Friend</button>
            </router-link>
            <router-link to="/request(nepostojeći link)">
              <button type="file" class="btn btn-primary mt-5">Send call request</button>
            </router-link>
          </div>
        -->
        <router-link to="/edit">
          <button type="file" class="btn btn-primary mt-5" style="float: left; margin-right: 15px">Edit Profile</button>
        </router-link>
      
        <button type="file" class="btn btn-primary mt-5">Friend List</button>
      </div>
    </div>
    <div>
      <h4 style="float: left; padding: 40px">Bio: </h4>
      <div class="bio">
         <p style="font-size: 15px">{{ newBio }}</p> 
        <!-- <p style="font-size: 15px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p> -->
      </div>
    </div>
  </div>
</template>



<script type="text/javascript">
import store from '@/store.js'
export default {
  data () {
    return store;
  },
  

  mounted () { 
      
    var user = firebase.auth().currentUser;
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
  }
}
</script>






<style scoped>
  .yourprofile{
    background: rgb(130,253,255);
    background: linear-gradient(302deg, rgba(130,253,255,1) 0%, rgba(148,28,110,1) 50%, rgba(255,0,44,1) 100%);
  }
  .pic{
    float: left;
  }
  
  .tablica{
    float: left;
    width: 1000px;
  }
  .podaci{
    padding: 10px;
    margin: 30px;
    border-style: solid;
    border-color: rgb(199, 199, 199);
    border-width: 2px;
    border-radius: 10px;
  }
  .bio{
    margin-left: 70px; 
    float: left; 
    width: 70%; 
    height: 50%; 
    /*background: rgb(255,252,252);
    background: linear-gradient(153deg, rgba(255,252,252,1) 0%, rgba(234,236,220,1) 50%, rgba(215,201,201,1) 100%);*/


    /* text" style="float: left; padding: 50px */
  }
</style>
