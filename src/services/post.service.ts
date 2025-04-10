import { database } from "@/config/firebaseConfig";
import { COLLECTION_NAMES } from "@/context/constants";
import { post, responseDocument, userDefaultInfo } from "@/context/types";
import { addDoc, collection, doc, getDoc, getDocs, orderBy, query, where, updateDoc } from "firebase/firestore";

// functions  :
export const createPost = async (post: post) => {
    // return addDoc(collection(database, COLLECTION_NAMES.POSTS), post);
    const docRef = await addDoc(collection(database, COLLECTION_NAMES.POSTS), post);
    console.log("Document written with ID: ", docRef.id);
}

export const getposts = async () => {
    const q = query(collection(database, COLLECTION_NAMES.POSTS), orderBy("date", "desc"));
    try {
        const querySnapshot = await getDocs(q);
        const tempArr: responseDocument[] = [];
        if (querySnapshot.size > 0) {
            querySnapshot.forEach((doc) => {
                const data = doc.data() as post;
                const responseObj: responseDocument = {
                    id: doc.id,
                    ...data
                }
                tempArr.push(responseObj);
            })
            return tempArr
        } else {
            return tempArr
        }
    } catch (error) {
        console.log(error)
    }
}

export const getPostsById = (id: string | undefined) => {
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


export const updateLikes = (
    id: string,
    userLinks: string[],
    likes: number
) => {
    const docRef = doc(database, COLLECTION_NAMES.POSTS, id);
    return updateDoc(docRef, {
        userLinks: userLinks,
        likes: likes
    });
}
export const updateUserInfoONPost = async (profileInfo: userDefaultInfo) => {
    try {
        const q = query(collection(database, COLLECTION_NAMES.POSTS), where("userId", "==", profileInfo.user?.uid))
        const querySnapshot = await getDocs(q)
        if (querySnapshot.size > 0) {
            querySnapshot.forEach((post) => {
                const docRef = doc(database, COLLECTION_NAMES.POSTS, post.id);
                updateDoc(docRef, {
                    username: profileInfo.displayName,
                    photoURL: profileInfo.photoURL
                })


            })
        }
    } catch (error) {
        console.log(error)
    }
}