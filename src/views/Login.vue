<template>
  <div class="login" style="padding: 20px">
    <h1>Login</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
          <div class="col-sm">
            <form @submit.prevent="login">
              <div class="form-group">
                <label for="exampleInputEmail1">Enter your email address</label>
                <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
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
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
        console.log(error)
      });
    }
  }
}
</script>

