import { getDatabase } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBDYJg0BPatHnC04bn4UHkFa5EKkT1Fv2E",
    authDomain: "firecontact-2d8b7.firebaseapp.com",
    databaseURL: "https://firecontact-2d8b7-default-rtdb.firebaseio.com",
    projectId: "firecontact-2d8b7",
    storageBucket: "firecontact-2d8b7.appspot.com",
    messagingSenderId: "287141219350",
    appId: "1:287141219350:web:8e6a3a40f098886a56b937",
    measurementId: "G-8ZFCL26GPW"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const auth = getAuth(app);

export { database, auth, app}