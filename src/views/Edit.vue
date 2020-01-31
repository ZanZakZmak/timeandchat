<template> 
  <div class="edit" style="padding: 30px">
    <div class="container bootstrap snippets">
      <div class="row">
        <div v-if="authenticated" class="col-xs-12 col-sm-9"> 
          <form @submit.prevent="saveChanges()"> 
            <div class="panel panel-default"></div>
            <div class="panel-heading">
              <h4 class="panel-title">User info</h4>
            </div>
            <div>
              <!-- <div class="form-group">
                <label style="float: left">Changle Location:</label>
                <div class="col-sm-10">
                  <select class="form-control">
                    <option selected="">Select location</option>
                    <option>New York</option>
                    <option>Honolulu</option>
                    <option>Los Angeles</option>
                    <option>San Francisco</option>
                    <option>Vancouver</option>
                    <option>Phoenix</option>
                    <option>Denver</option>
                    <option>Costa Rica</option>
                    <option>Chicago</option>
                    <option>Moscow</option>
                    <option>Jamaica</option>
                  </select>
                </div>
              </div> -->
                
              <div class="form-inline mb-5">
                <div class="form-group">
                  <label for="bio" style="float: left">Change name:</label>
                  <div class="col-sm-10">
                    <input v-model="displayName" type="text" class="form-control" id="bio" placeholder="Enter the bio">
                  </div>
                </div>
              </div>

              <form class="form-inline mb-5">  <!-- @submit.prevent="postNewBio" -->
                <div class="form-group">
                  <label for="bio" style="float: left">Change bio:</label>
                  <div class="col-sm-10">
                    <input v-model="newBio" type="text" class="form-control" id="bio" placeholder="Enter the bio">
                  </div>
                </div>
              </form>
                

            
            <div>
                <form @submit.prevent="postImage" class="form-inline mb-5">  <!-- <form @submit.prevent="postNewImage" class="form-inline mb-5"> -->
                  <div class="form-group">
                    <croppa :width="230" :height="230" v-model="imageData"></croppa>                
                  </div>
                </form>
              </div>
            </div>    
              <div class="form-group">
                <div class="col-sm-10 col-sm-offset-2">   <!-- v-bind:key="date" v-for="date in dates" :value="date" -->
                  <router-link to="/yourprofile">
                    <button type="submit" class="btn btn-primary" style="float: left; margin-right: 15px">Submit</button>
                  </router-link>
                  <router-link to="/yourprofile">
                    <button type="reset" class="btn btn-default" style="float: left">Cancel</button>
                  </router-link>
                </div>
              </div>
              </form>
            </div>
         
        </div>
      </div>
    </div>
  
</template>



<script>
import store from '@/store.js'
export default {
  data () {
    return store;
  },
  firestore(){
      var user = firebase.auth().currentUser;
      return {
        store: db.collection('users').doc(user.id),
    }
  },
  methods: {
    saveChanges () { 
      var user = firebase.auth().currentUser;

      user.updateProfile({
        displayName: "",
        imageData: "",
        newBio: "",
        //newLocation: ""
      }).then(function() {
        console.log("User updated");
        var displayName = user.displayName;
        var imageData = user.imageData;
        var newBio = user.newBio;
        //var newLocation = user.newLocation;
      }).catch(function(error) {
        console.log(error);
      });

      /*
      user.updateProfile({imageData: null}).then(function() {

        var displayName = user.displayName;
        // Now, this is null.
        var photoURL = user.photoURL;
      }, function(error) {
      // An error happened.
      });*/
    },

  },
}

</script>




<style scoped>
   body{
    margin-top:20px;
    background:#f5f5f5;
}

.panel {
  box-shadow: none;
}
.panel-heading {
  border-bottom: 0;
}
.panel-title {
  font-size: 17px;
}
.panel-title > small {
  font-size: .75em;
  color: #999999;
}
.panel-body *:first-child {
  margin-top: 0;
}
.panel-footer {
  border-top: 0;
}

.panel-default > .panel-heading {
    color: #333333;
    background-color: transparent;
    border-color: rgba(0, 0, 0, 0.07);
}

form label {
    color: #999999;
    font-weight: 400;
}

</style>