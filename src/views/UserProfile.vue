<!-- Template izgled user profila -->

<template>
  <div class="pozadinica">
    <div class="userprofile" style="padding: 30px">
      <div style="float: left">
        <div class="pic1">
          <img alt="" height="230" width="230" class="slika" src="slika.jpg" style="border-radius: 15%">
          <h1 style="black; font-size: 20px; padding: 10px">Marko Marić</h1>
          <h2 style="font-size: 20px">Location: /</h2>
          <p style="font-size: 15px">E-mail: somethingsomething@gmail.com</p>
        </div>
        <div class="button">
          <router-link to="/friends(nepostojeći link)">
            <button type="file" class="btn btn-primary mt-5" style="float: left; margin-right: 15px">Add Friend</button>
          </router-link>
          <router-link to="/request(nepostojeći link)">
            <button type="file" class="btn btn-primary mt-5">Send call request</button>
          </router-link>
        </div>
      </div>
      <div>
        <h4 style="float: left; padding: 40px">Bio: </h4>
        <div class="bio">
          <p style="font-size: 15px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<!--
<script>
export default {
  
}

</script>
-->

<style>
  .pozadinica{
    background: rgb(138,135,185);
    background: linear-gradient(95deg, rgba(138,135,185,1) 0%, rgba(189,189,219,1) 35%, rgba(236,92,216,1) 91%);
  }
  .userprofile{
  padding-right: 16px;
  }
  .pic1{
    float: left;
    /*border-style: solid;*/
    border-color: rgb(223, 220, 220);
    border-radius: 10%;
  }
  .bio{
    margin-left: 70px; 
    float: left; 
    width: 70%; 
    height: 50%; 
    /*border-width: 2px; 
    border-color: rgb(243, 237, 237); 
    border-style: solid;
    border-radius: 2px;*/
  }

</style>
<!--

izvučeno sa github-a od tankovića

<script>
import { mapGetters } from "vuex";
import {
  FETCH_PROFILE,
  FETCH_PROFILE_FOLLOW,
  FETCH_PROFILE_UNFOLLOW
} from "@/store/actions.type";
export default {
  name: "RwvProfile",
  mounted() {
    this.$store.dispatch(FETCH_PROFILE, this.$route.params);
  },
  computed: {
    ...mapGetters(["currentUser", "profile", "isAuthenticated"])
  },
  methods: {
    isCurrentUser() {
      if (this.currentUser.username && this.profile.username) {
        return this.currentUser.username === this.profile.username;
      }
      return false;
    },
    follow() {
      if (!this.isAuthenticated) return;
      this.$store.dispatch(FETCH_PROFILE_FOLLOW, this.$route.params);
    },
    unfollow() {
      this.$store.dispatch(FETCH_PROFILE_UNFOLLOW, this.$route.params);
    }
  },
  watch: {
    $route(to) {
      this.$store.dispatch(FETCH_PROFILE, to.params);
    }
  }
};
</script> -->