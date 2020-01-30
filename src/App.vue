<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/userprofile">User Profile </router-link> 
      <router-link to="/yourprofile">Your Profile</router-link> 
      <router-link to="/signup">Signup</router-link> 
      
      <div style="float: right; color: white">
        <router-link v-if="!authenticated" to="/login">Login</router-link>
        <span v-if="authenticated">
          {{ userEmail }}
          <a @click.prevent="logout" href="#">| Logout</a>
        </span>
      </div>
    </div>
    <router-view/>
  </div>
</template>





<script type="text/javascript">
import store from '@/store.js'
export default {
  data () {
    return store;
  },
  methods: {
    logout() {
      firebase.auth().signOut()
    }
  },
  mounted () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("User is logged in with email " + user.email)
        this.authenticated = true
        this.userEmail = user.email
        db.collection("users")
          .doc(this.userEmail)
          .get()
          .then(doc => {
            if (doc.exists) {
              console.log("Document data:", doc.data());
              this.displayName = doc.data().displayName;
              this.newBio = doc.data().newBio;
              this.newLocation = doc.data().newLocation;
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          });

        if (this.$route.name !== 'home'){
          this.$router.push({name: 'home'}).catch(err => console.log(err))
        }
      }
      else {
        console.log("User is not logged in")
        this.authenticated = false
        if (this.$route.name !== 'login')
          this.$router.push({name: 'login'}).catch(err => console.log(err))
      } 
    })
    /*db.collection(profilebio).orderBy("posted_at").limit(10)
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          const data = change.doc.data()
          if (change.type !== "added") {
            return
          }
          const newBio = {
            id: change.doc.id, 
            url: data.url, 
            email: data.email, 
            bio: data.bio,
            title: 'Some title', 
            posted_at: data.posted_at, 
            //comments: data.comments
          };
          this.cards.unshift(newBio)
        });
    });*/
  }
}
</script>





<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // testirat sa color: black;
  color: black;
}

// TREBA MALO #NAV SREDIT: HOVER, ACTIVE, BJELA POZADINA, CRNI FONT, ITD...

#nav {
  padding: 10px;
  background-color: #2c3e50;
  font-size: 15px;
  /*color: white;*/

  a {
    padding: 13px;
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      //padding: 13px;
      background-color: rgb(255, 255, 255);
      color: #000000;
    }
  }
}
</style>
