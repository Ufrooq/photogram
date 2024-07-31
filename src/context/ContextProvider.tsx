import { ReactNode, useState } from 'react'
import { AuthContext_type, Globalcontext } from './Context';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    onAuthStateChanged,
    updateProfile as firebaseUpdateProfile
} from 'firebase/auth';
import { auth, githubProvider, googleProvider } from '@/config/firebaseConfig';
import { photoMeta, userDefaultInfo, UserInfo } from './types';
import { OutputFileEntry } from '@uploadcare/react-uploader';




const ContextProvider = ({ children }: { children: ReactNode }) => {


    const [isLoggedIn, setisLoggedIn] = useState<boolean>(false)
    const [currentUser, setcurrentUser] = useState<any>()
    const [files, setFiles] = useState<OutputFileEntry[]>();


    const continueWithGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, googleProvider);
            return response;
            // setisLoggedIn(true)
        } catch (error) {
            console.log(error)
        }
    }
    const continueWithGithub = async () => {
        try {
            await githubProvider;
            setisLoggedIn(true)
        } catch (error) {
            console.log(error)
        }
    }
    const loginUser = async (data: UserInfo) => {
        try {
            const response = await signInWithEmailAndPassword(auth, data.email, data.password)
            return response;

        } catch (error) {
            console.log(error);
        }
    }
    const registerUser = async (data: UserInfo) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, data.email, data.password);
            return response
        } catch (error) {
            console.log(error);
        }
    }


    onAuthStateChanged(auth, (user) => {
        if (user) {
            setcurrentUser(user);
        } else {
            console.log("user not found !")
        }
    })

    const updateProfile = (info: userDefaultInfo) => {
        try {
            return firebaseUpdateProfile(info.user!, {
                displayName: info.displayName,
                photoURL: info.photoURL
            })
        } catch (error) {
            console.log(error)
        }
    }


    const contextValues: AuthContext_type = {
        // states ------->
        isLoggedIn,
        setisLoggedIn,
        currentUser,
        files,
        setFiles,

        // functions ---------->
        registerUser,
        loginUser,
        continueWithGithub,
        continueWithGoogle,
        updateProfile
    }


    return (
        <Globalcontext.Provider value={contextValues}>
            {children}
        </Globalcontext.Provider>
    )
}

export default ContextProvider;