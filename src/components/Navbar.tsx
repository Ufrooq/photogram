import { useState } from "react"
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/config/firebaseConfig";

const Navbar = () => {
    const navigate = useNavigate()

    const [showDialogue, setshowDialogue] = useState<boolean>(false);
    const [user] = useAuthState(auth);
    console.log(user)


    return (
        <nav className="w-full h-[80px] px-6 flex items-center relative shadow-sm">
            <button
                className="flex items-center gap-4 shadow-md ms-auto p-1 pe-4 rounded-[30px] bg-slate-100 cursor-pointer"
                onClick={() => setshowDialogue(!showDialogue)}
            >
                <i className="fa-solid fa-circle-user text-[44px] text-purple-700"></i>
                <i className="fa-solid fa-chevron-down text-purple-700 text-lg"></i>

            </button>

            {showDialogue &&
                <div className="z-20 bg-white text-lg flex flex-col gap-5 items-start absolute top-20 right-6 p-6 rounded-2xl shadow-lg">
                    <div className="flex gap-2 items-center">
                        <i className="fa-solid fa-circle-user text-[50px] text-purple-700"></i>
                        <div>
                            <p className="font-bold text-sm">Hi {user?.email?.split('@')[0]} !</p>
                            <p className="italic text-sm text-slate-700">{user?.email}</p>
                        </div>
                    </div>
                    <div
                        onClick={() => navigate("/profile")}
                        className="ms-1 text-slate-700 w-full pb-2 flex items-center gap-2 border-b border-slate-300 cursor-pointer"
                    >
                        <i className="fa-regular fa-user text-2xl"></i>
                        <span className="text-xl">My Account</span>
                    </div>
                    <Button className="w-full text-md flex items-center gap-2">
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        Logout
                    </Button>
                </div>
            }
        </nav>
    )
}

export default Navbar