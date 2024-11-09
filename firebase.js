import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration object using environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
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
