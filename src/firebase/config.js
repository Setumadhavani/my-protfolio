import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// You can get this from the Firebase Console -> Project Settings -> General -> Your apps
const firebaseConfig = {
    apiKey: "AIzaSyD8MIIr1OVDhkbdEtgSIU5Jgl_6aKhett0",
    authDomain: "my-protfolio-c87b0.firebaseapp.com",
    projectId: "my-protfolio-c87b0",
    storageBucket: "my-protfolio-c87b0.firebasestorage.app",
    messagingSenderId: "735780088324",
    appId: "1:735780088324:web:67ddbcf3261fed06936351",
    measurementId: "G-FEDF0HR7WB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
