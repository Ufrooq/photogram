import { OutputFileEntry } from "@uploadcare/react-uploader";

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

