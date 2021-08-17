import firebase from 'firebase/app';
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCXpSWAw5BsNQthtsDo0AU_p3eoN99Iud4",
  authDomain: "glassrep-dev.firebaseapp.com",
  projectId: "glassrep-dev",
  storageBucket: "glassrep-dev.appspot.com",
  messagingSenderId: "707670007523",
  appId: "1:707670007523:web:b41f0455e2c505da706fd6"
});
export const auth = app.auth();
export default app;
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,