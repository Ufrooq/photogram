import { createContext, useContext } from "react"
import { userDefaultInfo, UserInfo } from "./types";
import { OutputFileEntry } from "@uploadcare/react-uploader";



export interface AuthContext_type {
    isLoggedIn: boolean
    setisLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
    registerUser: (data: UserInfo) => Promise<any>;
    loginUser: (data: UserInfo) => Promise<any>;
    continueWithGithub: () => Promise<any>;
    continueWithGoogle: () => Promise<any>;
    currentUser: any;
    files: OutputFileEntry[] | undefined;
    setFiles: React.Dispatch<React.SetStateAction<OutputFileEntry[] | undefined>>;
    updateProfile: (info: userDefaultInfo) => Promise<any> | undefined;
    // setcurrentUser: React.Dispatch<any>;
}

export const Globalcontext = createContext<AuthContext_type | null>(null);

export const useGlobalContext = () => {
    const context = useContext(Globalcontext);
    if (!context) {
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
}

