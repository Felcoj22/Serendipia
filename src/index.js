import { testingModules } from "./utils";
import { productCard } from "./js/components/productCard"
import { Nombre, auth, createNewUser, } from './js/auth/autenticacion'
import { getEarings, getEarings2, dbFirebase } from './js/data/dataSamples'

console.log(`Hola ${Nombre}`)
const exampleMail = 'U56ASDASD@unimitar.edu.co'
const examplePassword = '1234567dsfds'
const ourAuth = auth

const executeExample = () => {
    createNewUser(ourAuth, exampleMail, examplePassword)
    loginUser(ourAuth, exampleMail, examplePassword)
}

//executeExample()

getEarings(dbFirebase)
getEarings2(dbFirebase)

// testingModules()
