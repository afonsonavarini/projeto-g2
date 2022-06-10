import firebase from "firebase"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBogGV700N4kK-krFYCx6IGKRVHmMQowjk",
    authDomain: "projeto-g2-6da45.firebaseapp.com",
    projectId: "projeto-g2-6da45",
    storageBucket: "projeto-g2-6da45.appspot.com",
    messagingSenderId: "980107284909",
    appId: "1:980107284909:web:afb0064320019c8725d124"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const database = firebase.firestore()
export default database

