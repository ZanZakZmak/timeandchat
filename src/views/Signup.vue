<template>
  <div class="signup" style="padding: 20px">
    <h1>Signup</h1>
    <div class="container">
      <div class="row mt-5">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form @submit.prevent="signup">
            <div class="form-group">
              <label for="emailField">Email address</label>
              <input v-model="email" type="email" class="form-control" id="emailField" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            
          
           <div class="form-group">
              <label for="usernameField">Username</label>
              <input v-model="chooseName" type="text" class="form-control" id="usernameField" aria-describedby="usernameHelp" placeholder="Enter Username">
            </div> 
          


            <div class="form-group">
              <label for="passwordField">Password</label>
              <input v-model="password" type="password" class="form-control" id="passwordField" placeholder="Password">
            </div>
            <div class="form-group">
              <label for="confirmPasswordField">Confirm Password</label>
              <input v-model="passwordConfirmation" type="password" class="form-control" id="confirmPasswordField" placeholder="Confirm password">
            </div>

            <div class="form-group">
            <label for="newLocation">Location</label>
            <select
              v-model="choosenLocation"
              id="newLocation"
              class="form-control form-control-lg">
              <option v-bind:key="k" v-for="k in newLocation">{{k}}</option>
              </select>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template> 



<script>
export default {
  data () {
    return {
      email: "",
      displayName: "",
      password: "",
      passwordConfirmation: "" ,
      newLocation: ["New York", "Honolulu", "Los Angeles", "San Francisco", "Vancouver", "Phoenix", "Denver", "Costa Rica", "Chicago", "Moscow", "Jamaica"]
    }
  },
  methods: {
    signup () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
        let id = this.email;
        db.collection("users")
            .doc(id)
            .set({
              displayName: this.chooseName,
              newLocation: this.choosenLocation
            })
            .then(function() {
              console.log("Document successfully written!");
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
            });
        })
        .catch(error  => {
          console.error(error);
          this.errorMessage = error.message;
        });
    }
  }
  /*
 {
    signup () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
        console.log(error);
      });
    }
  }*/
}
</script>

