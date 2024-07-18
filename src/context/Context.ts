import { createContext, useContext } from "react"
import { UserInfo } from "./types";



export interface AuthContext_type {
    isLoggedIn: boolean
    setisLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
    registerUser: (data: UserInfo) => Promise<any>;
}

export const Globalcontext = createContext<AuthContext_type | null>(null);

export const useGlobalContext = () => {
    const context = useContext(Globalcontext);
    if (!context) {
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
}

