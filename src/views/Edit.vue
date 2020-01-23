<template> 
  <div class="edit" style="padding: 30px">
    <div class="container bootstrap snippets">
      <div class="row">
        <div v-if="authenticated" class="col-xs-12 col-sm-9"> 
          <form @submit.prevent="saveChanges">

            <div class="panel panel-default"></div>
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">User info</h4>
              </div>
              <div>
                <div class="form-group">
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
                </div>
                
                <form @submit.prevent="postNewName" class="form-inline mb-5">
                  <div class="form-group">
                    <label for="bio" style="float: left">Change name:</label>
                    <div class="col-sm-10">
                      <input v-model="displayName" type="text" class="form-control" id="bio" placeholder="Enter the bio">
                    </div>
                  </div>
                </form>

                <form @submit.prevent="postNewBio" class="form-inline mb-5">
                  <div class="form-group">
                    <label for="bio" style="float: left">Change bio:</label>
                    <div class="col-sm-10">
                      <input v-model="newBio" type="text" class="form-control" id="bio" placeholder="Enter the bio">
                    </div>
                  </div>
                </form>




                <form @submit.prevent="postNewImage" class="form-inline mb-5">
                  <div class="form-group">
                    <croppa :width="230" :height="230" v-model="imageData"></croppa>
                    <!-- <input v-model="newImageUrl" type="text" class="form-control ml-2" id="imageUrl" placeholder="Enter the image URL"> -->
                  <button type="submit" class="btn btn-primary ml-2">Post image</button>
                  </div>
                </form>
              </div>
            </div>





           <!--
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title">Contact info</h4>
              </div>
            <div class="panel-body">
          <div class="form-group">
            <label style="float: left">Change E-mail address:</label>
            <div class="col-sm-10">
              <input type="email" class="form-control">
            </div>
          </div>
        </div>
      </div>

      <div class="panel panel-default">
        <div class="panel-heading">
        <h4 class="panel-title">Security</h4>
        </div>
        <div class="panel-body">
          <div class="form-group">
            <label style="float: left">Current password:</label>
            <div class="col-sm-10">
              <input type="password" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label style="float: left">New password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control">
            </div>
          </div>
          
          <div class="form-group">
            <div class="col-sm-10 col-sm-offset-2">
              <button type="submit" class="btn btn-primary" style="float: left; margin-right: 15px">Submit</button>
              <button type="reset" class="btn btn-default" style="float: left">Cancel</button>
            </div>
          </div>
        </div>
      </div>
      -->
              <div class="form-group">
                <div class="col-sm-10 col-sm-offset-2">  <!-- v-bind:key="date" v-for="date in dates" :value="date" -->
                  <router-link to="/yourprofile">
                    <button type="submit" class="btn btn-primary" style="float: left; margin-right: 15px">Submit</button>
                  </router-link>
                  <button type="reset" class="btn btn-default" style="float: left">Cancel</button>
                </div>
              </div>
            </form>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
//import YourProfile from 'views/YourProfile.vue'
import store from '@/store.js'
export default {
  data () {
    return store;
  },
  methods: {
    saveChanges () { 
      var user = firebase.auth().currentUser;

      user.updateProfile({
        displayName: "",
        //newImageUrl: "https://example.com/jane-q-user/profile.jpg"
        newBio: ""
      }).then(function() {
        console.log("User updated");
        displayName = user.displayName;
        newBio = user.newBio
      }).catch(function(error) {
        console.log(error);
      });
    },
    












    postImage() {
      this.imageData.generateBlob(data => {
        if (data != null) {
          let imageName = this.userEmail + "/slika.png";
          storage.ref(imageName).put(data).then(() => {
            db.collection("posts-real")
              .add({
                postedBy: this.userEmail,
                time: Date.now(),
                url: this.postImageUrl
              })
              .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                this.imageData = null;
              })
              .catch(function(error) {
                console.error("Error adding document: ", error);
              });
          })
        }
      })
      this.postImageUrl = "";
    }
  },

  /*

    /*postNewImage() {
      console.log("Dodajem novu sliku:", this.newImageUrl);
      // ovdje će ići Firebase kod
      db.collection("profileimage").add({
        url: this.newImageUrl,
        email: this.userEmail,
        posted_at: Date.now()
      })
    },

    postNewBio() {
      console.log("Dodajem novu opis:", this.newBio);
      db.collection("profilebio").add({
        bio:  this.newBio,
        email: this.userEmail,
        posted_at: Date.now()
      })
    }


  },*/
  
 /* methods: { 
    post () {
      db.collection("postNewBio").add({ url: this.newUrl, email: this.userEmail})
      this.newUrl = ''
    },
    /*postNewBio (){
      var user = firebase.auth().currentUser;
      user.updateProfile({
        //displayName: "Jane Q. User",
        //newImageUrl: "https://example.com/jane-q-user/profile.jpg"
        newBio: ""
      }).then(function() {
        console.log("User updated");
      }).catch(function(error) {
        console.log(error);
      });
    }*/
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
/*
.form-horizontal .form-group {
  margin-left: -15px;
  margin-right: -15px;
}*/
/*
@media (min-width: 768px) {
  .form-horizontal .control-label {
    text-align: right;
    margin-bottom: 0;
    padding-top: 7px;
  }
}*/


</style>