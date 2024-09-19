
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-HVSryckNhSErRibOSc3YINWw0yl1Yxg",
  authDomain: "ecommerceonreact-61ba8.firebaseapp.com",
  projectId: "ecommerceonreact-61ba8",
  storageBucket: "ecommerceonreact-61ba8.appspot.com",
  messagingSenderId: "685793902880",
  appId: "1:685793902880:web:594fa589dc9383596cd745",
  measurementId: "G-KE63WMMDGX"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);






export {auth, db, storage }