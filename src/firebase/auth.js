import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {auth} from "./firebase";
import { GoogleAuthProvider } from "firebase/auth";
export const doCreateUserWithEmailAndPassword = async (email , password)=>{
    return createUserWithEmailAndPassword(auth , email , password);
};
export const doSignInWithEmailAndPassword= async(email , password)=>{
    return signInWithEmailAndPassword(auth , email , password);
};
export const dosignInwithgoogle = async()=>{
const provider = new GoogleAuthProvider();
const result = await signInWithPopup(auth , provider);
return result;
}
export const dosignOut =()=>{
return auth.signOut();
}