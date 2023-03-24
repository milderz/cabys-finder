// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGI8YVqfV-ZhWSyX93QPdzpASFttLvxYk",
  authDomain: "cabys-search-tool.firebaseapp.com",
  projectId: "cabys-search-tool",
  storageBucket: "cabys-search-tool.appspot.com",
  messagingSenderId: "719430111933",
  appId: "1:719430111933:web:a86a3ed7583d6675b15dd4",
  measurementId: "G-18BLQ507XX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app);

// const addDocument = async () => {
//   try {
//     const docRef = await addDoc(collection(db, "codes"), {
//       code: "new code",
//       descrption: "code description",
//       userId: "milderz",
//     });
//     console.log(console.log("Document written with ID: ", docRef.id));
//   } catch (error) {
//     console.error("Error adding document: ", error);
//   }
// };

// addDocument();

const setDococument = async () => {
  const data = {
    name: "Tokyo",
    country: "Japan",
  };

  try {
    await setDoc(doc(db, "cities", "1234"), data);
  } catch (error) {
    console.log(error);
  }
};

// setDococument();
