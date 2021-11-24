import { testingModules } from "./utils";
import { getRings, getRings2, dbFirebase } from "../src/js/config/firebaseConfig"
import { productCard } from "./js/components/productCard"
import "./js/auth/autenticacion"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { appFirebase } from '../config/firebaseConfig'


console.log('hola mama')

// testingModules()

// getRings(dbFirebase)
// getRings2(dbFirebase)