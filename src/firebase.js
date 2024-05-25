import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTdKjIkF944O3LyAJxqgVk_noXSfl_ayg",
  authDomain: "gaitguru-aa584.firebaseapp.com",
  projectId: "gaitguru-aa584",
  storageBucket: "gaitguru-aa584.appspot.com",
  messagingSenderId: "507716371847",
  appId: "1:507716371847:web:cb899e2be4ba901b9dff22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;