import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9ZS4CBM62cLxjX48uqvyKJPSdHT4I_X4",
  authDomain: "inventory-project-2f568.firebaseapp.com",
  projectId: "inventory-project-2f568",
  storageBucket: "inventory-project-2f568.appspot.com",
  messagingSenderId: "308497720055",
  appId: "1:308497720055:web:2e2a97ed3d12fb746ea9f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
