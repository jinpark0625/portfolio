import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseDatabase = firebaseApp.database();
