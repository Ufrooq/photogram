import { database } from "@/config/firebaseConfig";
import { COLLECTION_NAMES } from "@/context/constants";
import { userCompleteInfo, userCompleteInfoResponse } from "@/context/types";
import { addDoc, collection, doc, getDocs, query, where, updateDoc } from "firebase/firestore";

// functions  :
export const createUserProfile = async (user: userCompleteInfo) => {
    return addDoc(collection(database, COLLECTION_NAMES.USERS), user);
}


export const getUserProfile = async (userId: string) => {
    try {
        const q = query(collection(database, COLLECTION_NAMES.USERS), where("userId", "==", userId))
        const querySnapshot = await getDocs(q);
        let tempData: userCompleteInfoResponse = {}
        if (querySnapshot.size > 0) {
            querySnapshot.forEach((doc) => {
                const data = doc.data() as userCompleteInfo;
                tempData = {
                    id: doc.id,
                    ...data
                }
            })
        }
        else {
            return tempData;
        }

    } catch (error) {

        console.log(error)
    }
}

export const updateUserProfile = (
    id: string,
    userInfo: userCompleteInfo
) => {
    const docRef = doc(database, COLLECTION_NAMES.USERS, id);
    return updateDoc(docRef, {
        ...userInfo
    });
}