import { testingModules } from "./utils";
import { getRings, getRings2, dbFirebase } from "../public/js/config/firebaseConfig"

testingModules()

getRings(dbFirebase)
getRings2(dbFirebase)