import { ReactNode, useState } from 'react'
import { AuthContext_type, Globalcontext } from './Context';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, githubProvider, googleProvider } from '@/config/firebaseConfig';
import { UserInfo } from './types';




const ContextProvider = ({ children }: { children: ReactNode }) => {


    const [isLoggedIn, setisLoggedIn] = useState<boolean>(false)


    const continueWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            setisLoggedIn(true)
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

    const contextValues: AuthContext_type = {
        // states ------->
        isLoggedIn,
        setisLoggedIn,

        // functions ---------->
        registerUser,
        loginUser,
        continueWithGithub,
        continueWithGoogle
    }
    return (
        <Globalcontext.Provider value={contextValues}>
            {children}
        </Globalcontext.Provider>
    )
}

export default ContextProvider;