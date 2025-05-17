import { ReactNode, useEffect, useState } from 'react'
import { AuthContext_type, Globalcontext } from './Context';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    onAuthStateChanged,
    sendEmailVerification,
    User,
    updateProfile as firebaseUpdateProfile
} from 'firebase/auth';
import { auth, githubProvider, googleProvider } from '@/config/firebaseConfig';
import { userCompleteInfoResponse, userDefaultInfo, UserInfo } from './types';
import { OutputFileEntry } from '@uploadcare/react-uploader';
import { getUserProfile } from '@/services/user.service';
import LoadingState from '@/components/LoadingState';





const ContextProvider = ({ children }: { children: ReactNode }) => {


    const [isLoggedIn, setisLoggedIn] = useState<boolean | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [files, setFiles] = useState<OutputFileEntry[]>();
    const [currentUserInfo, setCurrentUserInfo] = useState<userCompleteInfoResponse>();
    const [isSendingVerificationEmail, setIsSendingVerificationEmail] =
        useState<boolean>(false);


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
            return {
                status: 400,
                response: response
            }
        } catch (error: any) {
            return {
                status: 400,
                message: error.message
            };
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

    const sendVerificationEmail = async () => {
        setIsSendingVerificationEmail(true);
        const res = await sendEmailVerification(auth.currentUser as User);
        console.log("res : ", res)
        setIsSendingVerificationEmail(false);
    };

    const fetchUser = async (userId: string) => {
        try {
            const data: userCompleteInfoResponse | any = await getUserProfile(userId);
            if (data) {
                setCurrentUserInfo(data)
                setisLoggedIn(true);
            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user && !isSendingVerificationEmail) {
                setisLoggedIn(true);
                fetchUser(user.uid);
            } else {
                setisLoggedIn(false);
            }
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);


    const contextValues: AuthContext_type = {
        // states ------->
        isLoggedIn,
        setisLoggedIn,
        files,
        setFiles,
        currentUserInfo,
        isSendingVerificationEmail,
        setIsSendingVerificationEmail,

        // functions ---------->
        registerUser,
        loginUser,
        continueWithGithub,
        continueWithGoogle,
        updateProfile,
        sendVerificationEmail
    }


    return (
        <Globalcontext.Provider value={contextValues}>
            {isLoading ? <LoadingState /> : children}
        </Globalcontext.Provider>
    )
}

export default ContextProvider;