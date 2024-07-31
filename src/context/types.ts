import { auth } from "@/config/firebaseConfig";
import { OutputFileEntry } from "@uploadcare/react-uploader";
import { useAuthState } from "react-firebase-hooks/auth";
const [user] = useAuthState(auth);
import { User } from 'firebase/auth';


export type UserInfo = {
    email: string,
    password: string,
    confirmPassword?: string
}

export interface FileEntry {
    files: OutputFileEntry[];
}

export interface post {
    caption: string;
    photos: photoMeta[];
    likes: number;
    userLinks: [];
    userId: string | null;
    date: Date;
    username?: string;
    photoURL?: string;
}
export interface photoMeta {
    cdnUrl: string;
    uuid: string;

}

export interface responseDocument {
    id: string;
    caption: string;
    photos: photoMeta[];
    likes: number;
    userLinks: [];
    userId: string | null;
    date: Date;
    username?: string;
    photoURL?: string;


}

export interface userDefaultInfo {
    user?: User;
    displayName?: string | null,
    photoURL?: string | null
}

export interface userCompleteInfo {
    userId?: string;
    displayName?: string;
    photoURL?: string;
    userBio?: string;
    faceBookLink?: string;
    twitterLink?: string;
    linkedInLink?: string;
}

export interface userCompleteInfoResponse {
    id?: string,
    userId?: string;
    displayName?: string;
    photoURL?: string;
    userBio?: string;
    faceBookLink?: string;
    twitterLink?: string;
    linkedInLink?: string;
}

