import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1qR_n73lnbDIB96TfK_yMCuERhUDCeuA",
    authDomain: "image-search-6ffc6.firebaseapp.com",
    databaseURL: "https://image-search-6ffc6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "image-search-6ffc6",
    storageBucket: "image-search-6ffc6.appspot.com",
    messagingSenderId: "994814055923",
    appId: "1:994814055923:web:2086f5ea88785c66926e86"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:9099");