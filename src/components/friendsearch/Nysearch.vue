<template>
    <div class="searchfriends">
      <h2>Users: </h2>
        <ul id="search-friends-list"></ul>
      </div>
        <!--
        <div>
            <p>{{ displayName }} {{ newLocation }} {{ userEmail }}</p>  (za displayName dodat router-link)
        </div> -->
</template>


<script>
export default {
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
    db.collection('users').where('newLocation', '==', 'New York').get().then(snapshot => {
      snapshot.docs.forEach(doc => {
        renderUsers(doc);
      });
    });
  }
}
</script>

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
  border-radius: .5rem .5rem .5rem .5rem;
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