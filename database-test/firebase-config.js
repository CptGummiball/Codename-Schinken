// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getDatabase, ref, get, update } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDPHiz4afwH5rUOr5AFcAsAkEFDcDdYiAw",
    authDomain: "codename-schinken-database.firebaseapp.com",
    databaseURL: "https://codename-schinken-database-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "codename-schinken-database",
    storageBucket: "codename-schinken-database.appspot.com",
    messagingSenderId: "616956346619",
    appId: "1:616956346619:web:0a736705bdaf9dde41705e",
    measurementId: "G-PE162WR6G8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function getCounterValue() {
    const counterRef = ref(database, 'counter');
    return get(counterRef).then((snapshot) => {
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            return 0;
        }
    });
}

function incrementCounter() {
    const counterRef = ref(database, 'counter');
    return getCounterValue().then((count) => {
        return update(counterRef, {
            counter: (count || 0) + 1
        });
    });
}

// Stelle die Funktionen global bereit
window.firebaseDatabase = {
    getCounterValue,
    incrementCounter
};