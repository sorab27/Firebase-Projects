firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
      // User is signed in.
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";

      var user = firebase.auth().currentUser;

      if(user != null){

        var email = user.email;
        document.getElementById("user_para").innerHTML = "Welcome User : " + email;
    }
  } else {
      // No user is signed in.
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
  }
});

function login() {
    var userEmail = document.getElementById("email").value;
    var userPass = document.getElementById("pwd").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("ERROR: " + errorMessage + " \nError Code: " + errorCode);
    });
}

function add() {
  var userEmail = document.getElementById("email").value;
  var userPass = document.getElementById("pwd").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("ERROR: " + errorMessage + " \nError Code: " + errorCode);
    });
}

function logout() {
    firebase.auth().signOut();
}