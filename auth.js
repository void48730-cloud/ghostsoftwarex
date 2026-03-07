import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { firebaseConfig, app } from "./firebaseConfig.js";

const auth = getAuth(app);
const db = getFirestore(app);

// Kullanıcı Kayıt
export async function registerUser(email, password, username){
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await setDoc(doc(db, "users", user.uid), {username: username, email: email});
    alert("Kayıt başarılı!");
  } catch(e) {
    alert("Hata: " + e.message);
  }
}

// Kullanıcı Giriş
export async function loginUser(email, password){
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch(e) {
    alert("Hata: " + e.message);
  }
}
