
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAr7RcLWaVTrMwsOkD8p1SKiSqG6Y18Um8",
      authDomain: "class-93-56d3d.firebaseapp.com",
      databaseURL: "https://class-93-56d3d-default-rtdb.firebaseio.com",
      projectId: "class-93-56d3d",
      storageBucket: "class-93-56d3d.appspot.com",
      messagingSenderId: "986654638096",
      appId: "1:986654638096:web:5f57ca9f669fe8aececa95"
    };
firebase.initializeApp(firebaseConfig)    
user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="welcome"+user_name+"!"
function addRoom(){
      room_name=document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
           purpose:"adding roomname" 
      })
      localStorage.setItem("room_name",room_name)
      window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name"+Room_names)
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>"
      document.getElementById("output").innerHTML+=row

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("room_name".name)
      window.location="kwitter_page.html"

}

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location.replace("index.html")
}