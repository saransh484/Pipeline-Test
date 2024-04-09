import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyDYYzivC6Z9SkwrxJOkwvICL_b95QPTYiA",
    authDomain: "messaging-23a49.firebaseapp.com",
    projectId: "messaging-23a49",
    storageBucket: "messaging-23a49.appspot.com",
    messagingSenderId: "2145390561",
    appId: "1:2145390561:web:4388a00247e7fb29fccca0"
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

