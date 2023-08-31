import { getFirestore, collection, getDocs, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "./init";

const db = getFirestore(firebase)
export const storage = getStorage(firebase);

export const addCourse = (data) => {
    return addDoc(collection(db, "courses"), data)
}
export const addEvent = (data) => {
    return addDoc(collection(db, "events"), data)
}
export const getCourse = async (id) => {
    const DocSnap = await getDoc(doc(db, "courses", id))
    return DocSnap.data()
}
export const setLesson = async (id, data) => {
    await updateDoc(doc(db, "courses", `${id}`), data)
}
export const getAllEvents = async() => {
    const querySnapshot = await getDocs(collection(db, "events"));
    let list = []
    querySnapshot.forEach((doc) => {
        let data={
            _id:doc.id,
          ...doc.data()
        }
        list.push(data);
    });
    return list
}
export const getAllCourses = async() => {
    const querySnapshot = await getDocs(collection(db, "courses"));
    let list = []
    querySnapshot.forEach((doc) => {
        let data={
            _id:doc.id,
          ...doc.data()
        }
        list.push(data);
    });
    return list
}
console.log(storage)