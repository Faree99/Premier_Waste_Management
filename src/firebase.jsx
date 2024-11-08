// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyC1nCyFyntrb3Lz24SrldBJU5eSprTvIKo",
  authDomain: "waste-management-418b3.firebaseapp.com",
  projectId: "waste-management-418b3",
  storageBucket: "waste-management-418b3.firebasestorage.app",
  messagingSenderId: "331182836679",
  appId: "1:331182836679:web:b3ba137ef0890bafca67e2",
  measurementId: "G-D9PC7C19L1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // Ensure app is initialized first

// Initialize Firestore, Auth, and Analytics after initializing app
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Example of adding data to a collection
const addData = async (data) => {
  await addDoc(collection(db, "your-collection-name"), data);
};

// Example of fetching data from a collection
const fetchData = async () => {
  const querySnapshot = await getDocs(collection(db, "your-collection-name"));
  return querySnapshot.docs.map(doc => doc.data());
};

export { auth, db, addData, fetchData }; // Export auth, db, and methods to use in other files
