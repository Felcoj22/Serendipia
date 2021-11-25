import { appFirebase } from '../config/firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(appFirebase);

const createNewUser = (authRef, correo, contrasena) => {
  createUserWithEmailAndPassword(authRef, correo, contrasena)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('userCreated:', user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('userNotCreated:', errorCode, '-->', errorMessage)
      // ..
    });
}



export { createNewUser, auth }


export const Nombre = 'Andres'