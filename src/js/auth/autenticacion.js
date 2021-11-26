import { appFirebase } from '../config/firebaseConfig'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

const auth = getAuth(appFirebase);

const createNewUser = (authRef, correo, contraseña) => {
  createUserWithEmailAndPassword(authRef, correo, contraseña)
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

const loginUser = (authRef, correo, contraseña) => {
  signInWithEmailAndPassword(authRef, correo, contraseña)
    .then((userLogged) => {
      let user = userLogged.user;
      console.log('userLogged', user)
    })
    .catch((error) => {
      console.log('userNotLogged:', error.code, error.message)
    })
}

const changeUserPasswordByEmail = (authRef, correo) => {
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


export { auth, createNewUser, loginUser, changePassword, changeUserPasswordByEmail }


export const Nombre = 'Felipes'