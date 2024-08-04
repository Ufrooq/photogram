import { ReactNode, useEffect, useState } from 'react'
import { AuthContext_type, Globalcontext } from './Context';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    onAuthStateChanged,
    updateProfile as firebaseUpdateProfile
} from 'firebase/auth';
import { auth, githubProvider, googleProvider } from '@/config/firebaseConfig';
import { userCompleteInfoResponse, userDefaultInfo, UserInfo } from './types';
import { OutputFileEntry } from '@uploadcare/react-uploader';
import { getUserProfile } from '@/services/user.service';
import { useAuthState } from 'react-firebase-hooks/auth';




const ContextProvider = ({ children }: { children: ReactNode }) => {


    const [isLoggedIn, setisLoggedIn] = useState<boolean>(false)
    const [files, setFiles] = useState<OutputFileEntry[]>();
    const [user] = useAuthState(auth);
    const [currentUserInfo, setCurrentUserInfo] = useState<userCompleteInfoResponse>();


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
    const fetchUser = async (userId: string) => {
        try {
            const data: userCompleteInfoResponse | any = await getUserProfile(userId);
            console.log(data)
            if (data) {
                setCurrentUserInfo(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUser(user?.uid!);
    }, [user])



    const contextValues: AuthContext_type = {
        // states ------->
        isLoggedIn,
        setisLoggedIn,
        files,
        setFiles,
        currentUserInfo,

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