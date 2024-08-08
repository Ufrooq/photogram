import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { getAuth } from 'firebase/auth'
import { useAuthState } from "react-firebase-hooks/auth"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const isAuthenticated = (): boolean => {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  return user ? true : false;
}