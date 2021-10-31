import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDeuiXHndRdCnctGap8UFLSQNQz0j_Vqb4",
  authDomain: "serendipia-14b1b.firebaseapp.com",
  projectId: "serendipia-14b1b",
  storageBucket: "serendipia-14b1b.appspot.com",
  messagingSenderId: "719997928089",
  appId: "1:719997928089:web:85eb7d5ceb98db94c6ee08"
};

const appFirebase = initializeApp(firebaseConfig);
const dbFirebase = getFirestore(appFirebase);

const getRings = async (db) => {
  const ringsDocs = await getDocs(collection(db, 'anillos'));
  ringsDocs.forEach(element => {
    console.log(element.data())
  });
}

async function getRings2(db) {
  const ringsCol = collection(db, 'anillos');
  const ringSnapshot = await getDocs(ringsCol);
  const ringsList = ringSnapshot.docs.map(doc => doc.data());
  console.log(ringsList)
  return ringsList;
}

// getRings(dbFirebase)
// getRings2(dbFirebase)

export { appFirebase, dbFirebase, getRings, getRings2 }