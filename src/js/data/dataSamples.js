import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { appFirebase } from '../config/firebaseConfig'

const dbFirebase = getFirestore(appFirebase);

const getEarings = async (db) => {
    const earingsDocs = await getDocs(collection(db, 'aretes'));
    earingsDocs.forEach(element => {
        console.log(element.data())
    });
}

async function getEarings2(db) {
    const earingsCol = collection(db, 'aretes');
    const earingsnapshot = await getDocs(earingsCol);
    const earingsList = ringSnapshot.docs.map(doc => doc.data());
    console.log(ringsList)
    return ringsList;
}

export { getEarings, getEarings2, dbFirebase }