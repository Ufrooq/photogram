import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { auth } from "@/config/firebaseConfig";
import { userCompleteInfoResponse } from "@/context/types";
import { Label } from "@radix-ui/react-label";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ProfileInfo = () => {

    const [user] = useAuthState(auth);
    const initialUserInfo: userCompleteInfoResponse = {
        id: "",
        userId: user?.uid,
        displayName: user?.displayName ? user?.displayName : user?.email?.split('@')[0],
        photoURL: user?.photoURL ? user?.photoURL : "",
        userBio: "Please add your bio"
    }
    const [userInfo, setuserInfo] = useState<userCompleteInfoResponse>(initialUserInfo)
    const navigate = useNavigate()

    useEffect(() => {

    }, [])

    return (
        <div
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
            className='page_content_container space-y-10'
        >

            <div className="flex gap-10 items-center">
                <i className="fa-solid fa-circle-user text-[140px] text-purple-700"></i>
                <div className="w-full space-y-4">
                    <div className="flex items-center justify-between w-[100%]">
                        <div>
                            <h1 className="font-bold text-3xl">{userInfo.displayName}</h1>
                            <p className="italic text-sm text-slate-700">{user?.email}</p>
                        </div>
                        <Button
                            variant={"custom"}
                            className="text-md"
                            onClick={() => navigate("/profile/update-profile")}
                        >
                            Edit Profile
                        </Button>
                    </div>
                    <div className="space-x-4 text-lg text-gray-600 font-medium">
                        <span>
                            20 Posts
                        </span>
                        <span>
                            120 Followers
                        </span>
                        <span>
                            10 Following
                        </span>
                    </div>
                </div>
            </div>
            <div className="space-y-2 max-w-[100%]">
                <p className="leading-6 text-md ms-2">
                    <span className="font-bold text-lg">Bio : </span>
                    {userInfo.userBio}
                </p>
            </div>
            <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center uppercase">
                    <span className="bg-background px-2">
                        Other Social Links
                    </span>
                </div>
            </div>
            <div className="space-y-6">
                <div className="flex space-x-2">
                    <Input value="http://facebook.com/link/to/document" readOnly />
                    <Button onClick={() => toast.success("Link Coped !")} variant="secondary" className="shrink-0 text-blue-500">
                        Copy <i className="fa-brands fa-facebook mx-2"></i> Link
                    </Button>
                </div>
                <div className="flex space-x-2">
                    <Input value="http://LinkedIn.com/link/to/document" readOnly />
                    <Button onClick={() => toast.success("Link Coped !")} variant="secondary" className="shrink-0 text-blue-700">
                        Copy <i className="fa-brands fa-linkedin mx-2"></i> Link
                    </Button>
                </div>
                <div className="flex space-x-2">
                    <Input value="http://LinkedIn.com/link/to/document" readOnly />
                    <Button onClick={() => toast.success("Link Coped !")} variant="secondary" className="shrink-0 text-blue-900">
                        Copy <i className="fa-brands fa-twitter mx-2 "></i> Link
                    </Button>
                </div>
            </div>

        </div >
    )
}

export default ProfileInfo; 