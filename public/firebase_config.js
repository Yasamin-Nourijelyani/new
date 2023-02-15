import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';


const firebaseApp = initializeApp({
    apiKey: "AIzaSyAeyuRFehSKfK-fY_Cd_auzCHIq6uVcVEo",
    authDomain: "disoveryapp-6e148.firebaseapp.com",
    projectId: "disoveryapp-6e148",
    storageBucket: "disoveryapp-6e148.appspot.com",
    messagingSenderId: "408140914826",
    appId: "1:408140914826:web:1f2152aa8be73cdb00cd73"
});

const db = getFirestore(firebaseApp);
export {db}

