import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js'
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyDeuiXHndRdCnctGap8UFLSQNQz0j_Vqb4",
  authDomain: "serendipia-14b1b.firebaseapp.com",
  projectId: "serendipia-14b1b",
  storageBucket: "serendipia-14b1b.appspot.com",
  messagingSenderId: "719997928089",
  appId: "1:719997928089:web:85eb7d5ceb98db94c6ee08"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getRings(db) {
  const anillosProductos = collection(db, 'anillos');
  console.log('soy la coleccion de anillos', anillosProductos)
  const ringSnapshot = await getDocs(anillosProductos);
  const gettingRing = ringSnapshot.docs.map(doc => console.log('este es un doc:', doc));
}

getRings(db)