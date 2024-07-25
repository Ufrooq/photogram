import { database } from "@/config/firebaseConfig";
import { COLLECTION_NAMES } from "@/context/constants";
import { post } from "@/context/types";
import { addDoc, collection, doc, getDoc, getDocs, orderBy, query, where } from "firebase/firestore";

// functions  :
export const createPost = (post: post) => {
    return addDoc(collection(database, COLLECTION_NAMES.POSTS), post);
}

export const getposts = () => {
    const q = query(collection(database, COLLECTION_NAMES.POSTS), orderBy("date", "desc"));
    return getDocs(q);
}

export const getPostsById = (id: string) => {
    const q = query(collection(database, COLLECTION_NAMES.POSTS), where("userId", "==", id));
    return getDocs(q);
}

export const getPostById = (id: string) => {
    const docRef = doc(database, COLLECTION_NAMES.POSTS, id);
    return getDoc(docRef);
}


export const deletePost = (id: string) => {
    return getDoc(doc(database, COLLECTION_NAMES.POSTS, id));
}
