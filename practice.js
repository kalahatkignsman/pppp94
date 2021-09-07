//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyBjbrs0v4mT0djOsV1_XTUS32dE0uKtMNs",
  authDomain: "projectp9.firebaseapp.com",
  projectId: "projectp9",
  storageBucket: "projectp9.appspot.com",
  messagingSenderId: "1009688876789",
  appId: "1:1009688876789:web:7b3c7f79f225610f2017bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  function addUser()
  {
    user_name = document.getElementbyId("user_name").value;
    firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
    });
  }