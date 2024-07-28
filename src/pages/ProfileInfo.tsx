import { Button } from "@/components/ui/button";
import { auth } from "@/config/firebaseConfig";
import { userCompleteInfoResponse } from "@/context/types";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

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
                    <div className="flex items-center justify-between w-[80%]">
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
            <div className="space-y-2 max-w-[100%] text-center">
                <p className="leading-6 text-md">
                    <span className="font-bold text-lg">Bio : </span>
                    {userInfo.userBio}
                </p>
            </div>

        </div>
    )
}

export default ProfileInfo; 