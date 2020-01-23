<template>
    <div class="searchfriends">
        <h2>xd</h2>
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
-> google: addSnapshotListener()
-> https://firebase.google.com/docs/firestore/query-data/listen  (onSnapshot)
-> https://firebase.google.com/docs/auth/admin/manage-users#list_all_users (list all users)
-> google: firebase sort by city
-> https://stackoverflow.com/questions/44286535/how-to-get-all-users-data-from-firebase-database-in-custom-listview-in-android (to je za android, ali forsi pomore)

<script>
export default {
    
    
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