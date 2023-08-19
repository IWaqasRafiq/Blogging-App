
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

const signup = document.getElementById("signup-form-btn");

signup.addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.querySelector(".signup-email-input").value;
  const password = document.querySelector(".signup-password-input").value;
  const firstName = document.querySelector(".first-name").value;
  const lastName = document.querySelector(".last-name").value;

  firebase
    .auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      // alert("user created")
      const user = userCredential.user;
      window.location.href = "../Blogging/index.html";

      // ...
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      alert(errorMessage)
      // ..
    });;
  document.querySelector(".signup-email-input").value = "";
  document.querySelector(".signup-password-input").value = "";
  document.querySelector(".first-name").value = "";
  document.querySelector(".last-name").value = "";
});