import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { appFirebase } from '../config/firebaseConfig'

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
