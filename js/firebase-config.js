// Firebase initialize
const firebaseConfig = {
  apiKey: "AIzaSyBSxbXJdfVhXMyWZnKX8_-z8Z0Ghvm1bpk",
  authDomain: "ghostsoftwarex.firebaseapp.com",
  projectId: "ghostsoftwarex",
  storageBucket: "ghostsoftwarex.firebasestorage.app",
  messagingSenderId: "143714891017",
  appId: "1:143714891017:web:9798d66f2aa30b6f7ecfd8",
  measurementId: "G-9Q98HCLT09"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
