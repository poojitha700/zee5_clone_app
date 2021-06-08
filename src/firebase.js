import firebase from "firebase";
//?Authentication//auth
import "firebase/auth";
//?realtime database=>just like mongodb
import "firebase/database";
//?storage//u can store files images videos pdf on remote storage
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCZHQdITGT6urFh2RtUzvTrd-F95BJqfkw",
  authDomain: "zee5-460e1.firebaseapp.com",
  projectId: "zee5-460e1",
  storageBucket: "zee5-460e1.appspot.com",
  messagingSenderId: "562983141492",
  appId: "1:562983141492:web:e331afd5c0890f09b21121",
};
//!intialise firebase app and communicate with react app
firebase.initializeApp(firebaseConfig);
export default firebase;