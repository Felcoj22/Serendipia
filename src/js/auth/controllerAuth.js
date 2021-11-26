import { createNewUser, loginUser, changeUserPasswordByEmail } from './autenticacion'


// REGISTER FORM
let registerEmail = document.getElementById('mailInputRegister')
let registerPassword = document.getElementById('passwordInputRegister')
let registerButton = document.getElementById('registerButton')

registerButton.addEventListener("click", () => {
    createNewUser(registerEmail, registerPassword)
    console.log('hubo un click')
})
/// LOGIN FORM

let loginEmail = document.getElementById('loginMail')
let loginPassword = document.getElementById('loginPassword')
let loginButton = document.getElementById('loginButton')

loginButton.addEventListener("click", loginUser(loginEmail, loginPassword))


// CHANGE PASSWORD FORM

let ressetEmail = document.getElementById('mailInputRess')
let ressetButton = document.getElementById('ressButton')

ressetButton.addEventListener("click", changeUserPasswordByEmail(registerEmail, registerPassword))
