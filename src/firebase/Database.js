import { getFirestore,collection, addDoc,doc, getDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "./init";
import { async } from "@firebase/util";

const db = getFirestore(firebase)
export const storage = getStorage(firebase);

export const addCourse=(data)=>{
   return addDoc(collection(db, "courses"), data)
}
export const getCourse=async(id)=>{
    const DocSnap = await getDoc(doc(db, "courses", id))
    return DocSnap.data()
}
console.log(storage)