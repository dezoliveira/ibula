import { initializeApp } from "firebase/app"
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCNd4sVGMYE1YL74qqqiXZ-0o5CO4-tWDY",
  authDomain: "ibula-2d5f3.firebaseapp.com",
  databaseURL: "https://ibula-2d5f3-default-rtdb.firebaseio.com",
  projectId: "ibula-2d5f3",
  storageBucket: "ibula-2d5f3.appspot.com",
  messagingSenderId: "79130430132",
  appId: "1:79130430132:web:e17ce34b4f01e3dceb65e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app)