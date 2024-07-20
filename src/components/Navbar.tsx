import { useState } from "react"
import { Button } from "./ui/button";

const Navbar = () => {

    const [showDialogue, setshowDialogue] = useState<boolean>(false);
    return (
        <nav className="w-full h-[80px] shadow-sm px-10 flex items-center relative">
            <button
                className="ms-auto w-10 h-4 rounded-[20px] bg-slate-200 cursor-pointer"
                onClick={() => setshowDialogue(!showDialogue)}
            >
                CLick
            </button>

            {showDialogue &&
                <div className="text-lg flex flex-col gap-4 items-start absolute top-24 right-6 p-6 rounded-2xl shadow-lg">
                    <div className="flex gap-2 items-center">
                        <i className="fa-brands fa-product-hunt text-5xl rotate-180"></i>
                        <div>
                            <p className="font-bold text-sm">Hi Umar !</p>
                            <p className="italic text-sm text-slate-600">umarf9834@gmail.com</p>
                        </div>
                    </div>
                    <div className="w-full pb-2 flex items-center gap-2 border-b border-slate-300">
                        <i className="fa-brands fa-product-hunt text-3xl"></i>
                        My Account
                    </div>
                    <Button className="w-full text-md flex items-center gap-2">
                        {/* <i className="fa-brands fa-product-hunt text-3xl"></i> */}
                        Logout
                    </Button>
                </div>
            }
        </nav>
    )
}

export default Navbar