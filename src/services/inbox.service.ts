import { database } from "@/config/firebaseConfig";
import { COLLECTION_NAMES } from "@/context/constants";
import { collection, getDocs, query } from "@firebase/firestore";



export interface Message {
    id: string;
    content: string
    timestamp: Date;
    status?: 'sent' | 'delivered' | 'read';
    incoming: boolean

}

export interface ChatRoom {
    id: string;
    participants: string[];
    messages: Message[];
    createdAt: Date;
    lastMessage?: {
        senderId: string;
        message: string;
        timestamp: Date;
    };
}
export const fetchAllChats = async () => {
    const chats: any[] = [];

    try {
        const q = query(collection(database, COLLECTION_NAMES.USERS));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.size > 0) {
            querySnapshot.forEach((doc) => {
                const data = doc.data() as any;
                const responseObj: any = {
                    id: doc.id,
                    ...data
                }
                chats.push(responseObj);
            })
            return chats
        } else {
            return chats
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}
