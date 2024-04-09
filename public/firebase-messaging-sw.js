// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// eslint-disable-next-line no-undef
firebase.initializeApp({
    apiKey: "AIzaSyDYYzivC6Z9SkwrxJOkwvICL_b95QPTYiA",
    authDomain: "messaging-23a49.firebaseapp.com",
    projectId: "messaging-23a49",
    storageBucket: "messaging-23a49.appspot.com",
    messagingSenderId: "2145390561",
    appId: "1:2145390561:web:4388a00247e7fb29fccca0"
});
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();


messaging.onBackgroundMessage()