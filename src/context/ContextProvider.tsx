import { ReactNode, useState } from 'react'
import { AuthContext_type, Globalcontext } from './Context';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/config/firebaseConfig';
import { UserInfo } from './types';



const ContextProvider = ({ children }: { children: ReactNode }) => {


    const [isLoggedIn, setisLoggedIn] = useState(false);

    const registerUser = async (data: UserInfo) => {
        try {

            console.log(data.email, data.password)

        } catch (error) {
            console.log(error);
        }
    }

    const contextValues: AuthContext_type = {
        // states ------->
        isLoggedIn,
        setisLoggedIn,

        // functions ---------->
        registerUser
    }
    return (
        <Globalcontext.Provider value={contextValues}>
            {children}
        </Globalcontext.Provider>
    )
}

export default ContextProvider;