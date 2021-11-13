import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const InitialFirebase = () => {
    initializeApp(firebaseConfig);
}
export default InitialFirebase;