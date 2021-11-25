import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDeuiXHndRdCnctGap8UFLSQNQz0j_Vqb4",
  authDomain: "serendipia-14b1b.firebaseapp.com",
  projectId: "serendipia-14b1b",
  storageBucket: "serendipia-14b1b.appspot.com",
  messagingSenderId: "719997928089",
  appId: "1:719997928089:web:85eb7d5ceb98db94c6ee08"
};

const appFirebase = initializeApp(firebaseConfig);


export { appFirebase }