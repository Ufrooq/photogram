import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from '../config/firebaseConfig';
function useAuth() {
    const navigate = useNavigate();
    const [isUser, setIsUser] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
            if (user) {
                setIsUser(true);
                setUser(user);
                setIsLoading(false);
            }
            else {
                setIsUser(false);
                setIsLoading(false);
                navigate('/login');
            }
        });
        return () => {
            unsubscribe();
        }

    }, [navigate])

    return { isUser, isLoading, user };

}
export default useAuth;
