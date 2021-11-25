import { testingModules } from "./utils";
import { productCard } from "./js/components/productCard"
import { Nombre, auth, createNewUser } from './js/auth/autenticacion'

console.log(`Hola ${Nombre}`)
const exampleMail = 'U56ASDASD@unimitar.edu.co'
const examplePassword = '1234567dsfds'
const ourAuth = auth

createNewUser(ourAuth, exampleMail, examplePassword)

// testingModules()

//getRings(dbFirebase)
//getRings2(dbFirebase)