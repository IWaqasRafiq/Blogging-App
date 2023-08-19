
const firebaseApp = firebase.initializeApp(
  {
    apiKey: "AIzaSyA090Hch3XP48rv34LqV0KYCY5mcCFUAO0",
    authDomain: "blogging-app-web.firebaseapp.com",
    projectId: "blogging-app-web",
    storageBucket: "blogging-app-web.appspot.com",
    messagingSenderId: "186623517250",
    appId: "1:186623517250:web:2a31e1ad5773fc456c43db",
    measurementId: "G-4NNYBWV6Z1"
  });

// Initialize Firebase
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

console.log();


//////   log in page ////////

const logIn = document.getElementById("login-form-btn");

logIn.addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.querySelector(".login-email-input").value;
  const password = document.querySelector(".login-password-input").value;

firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => {
    // Signed in 
    // alert("Your successfully log In")
    window.location.href = "./Blogging/index.html";
    // ...
  })
  .catch((error) => {
    alert("error try again")
    console.log(error.code);
    console.log(error.message);
  });
});