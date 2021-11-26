import { appFirebase } from '../config/firebaseConfig'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";

const auth = getAuth(appFirebase);

const createNewUser = (correo, contraseña) => {
  createUserWithEmailAndPassword(auth, correo, contraseña)
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

const loginUser = (correo, contraseña) => {
  signInWithEmailAndPassword(auth, correo, contraseña)
    .then((userLogged) => {
      let user = userLogged.user;
      console.log('userLogged', user)
    })
    .catch((error) => {
      console.log('userNotLogged:', error.code, error.message)
    })
}

const changeUserPasswordByEmail = (correo) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
      console.log('email sended')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('userCouldNotChangePassword', errorCode, errorMessage)
      // ..
    });
}


export { createNewUser, loginUser, changeUserPasswordByEmail }


export const Nombre = 'Felipes'