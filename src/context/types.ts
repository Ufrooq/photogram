import { auth } from "@/config/firebaseConfig";
import { OutputFileEntry } from "@uploadcare/react-uploader";
import { useAuthState } from "react-firebase-hooks/auth";
const [user] = useAuthState(auth);

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

}

export interface userDefaultInfo {
    user?: typeof user;
    displayName?: string,
    photoURL?: string
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

