import { database } from "@/config/firebaseConfig";
import { COLLECTION_NAMES } from "@/context/constants";
import { commentI, commentResponseI } from "@/context/types";
import { addDoc, collection, getDocs, orderBy, query, where } from "firebase/firestore";



export const addComment = async (comment: commentI) => {
    try {
        await addDoc(collection(database, COLLECTION_NAMES.COMMENTS), comment);
    } catch (error) {
        console.log(error)
    }
}



export const getComments = async (postId: string) => {
    const tempArr: commentResponseI[] = [];
    try {
        const q = query(collection(database, COLLECTION_NAMES.COMMENTS), where("postId", "==", postId))
        const querySnapshot = await getDocs(q)

        if (querySnapshot.size > 0) {
            querySnapshot.forEach((doc) => {
                const data = doc.data() as commentI;
                const responseObj: commentResponseI = {
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
        return tempArr;
    }
}