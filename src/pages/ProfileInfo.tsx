import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { userCompleteInfoResponse } from "@/context/types";
import useAuth from "@/hooks/useAuthHook";
import { getUserProfile } from "@/services/user.service";
import ProfileSkeleton from "@/Skeletons/ProfileSkeleton";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ProfileInfo = () => {

    const { user, isLoading } = useAuth()

    const initialUserInfo: userCompleteInfoResponse = {
        id: "",
        userId: user?.uid,
        displayName: user?.displayName ? user?.displayName : user?.email?.split('@')[0],
        photoURL: user?.photoURL ? user?.photoURL : "",
        userBio: "Please add your bio",
        faceBookLink: "http://facebook.com/sdasjdn",
        twitterLink: "http://LinkedIn.com/392e83m2e8",
        linkedInLink: "http://LinkedIn.com/xm392xe93m"
    }
    const [userInfo, setuserInfo] = useState<userCompleteInfoResponse>(initialUserInfo)
    const navigate = useNavigate()


    const fetchUser = async (userId: string) => {
        try {
            const data: userCompleteInfoResponse | any = await getUserProfile(userId);
            if (data) {
                setuserInfo(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleCopyUrl = async (url: string) => {
        navigator.clipboard.writeText(url)
        toast.info("Link copied !")
    }
    useEffect(() => {
        if (user) {
            fetchUser(userInfo.userId || "")
        }
    }, [])




    return (
        <React.Fragment>

            {!isLoading ? <div
                style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
                className='page_content_container space-y-10'
            >

                <div className="flex gap-10 items-center">
                    {userInfo && userInfo.photoURL ?
                        <div className="max-w-[140px] h-[140px] rounded-full overflow-hidden shadow-xl">
                            <img src={userInfo.photoURL} alt="profile" className='w-[100%] h-[100%]' />
                        </div>
                        :
                        <i className="fa-solid fa-circle-user text-[140px] text-purple-700"></i>

                    }
                    <div className="w-full space-y-4">
                        <div className="flex items-center justify-between w-[100%]">
                            <div>
                                <h1 className="font-bold text-3xl">{userInfo.displayName}</h1>
                                <p className="italic text-sm text-slate-700">{user?.email}</p>
                            </div>
                            <Button
                                variant={"custom"}
                                className="text-md"
                                onClick={() => navigate("/profile/update-profile", { state: userInfo })}
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
                        <Input value={userInfo.faceBookLink} readOnly />
                        <Button onClick={() => handleCopyUrl(userInfo.faceBookLink!)} variant="secondary" className="shrink-0 text-blue-500">
                            Copy <i className="fa-brands fa-facebook mx-2"></i> Link
                        </Button>
                    </div>
                    <div className="flex space-x-2">
                        <Input value={userInfo.linkedInLink} readOnly />
                        <Button onClick={() => handleCopyUrl(userInfo.linkedInLink!)} variant="secondary" className="shrink-0 text-blue-700">
                            Copy <i className="fa-brands fa-linkedin mx-2"></i> Link
                        </Button>
                    </div>
                    <div className="flex space-x-2">
                        <Input value={userInfo.twitterLink} readOnly />
                        <Button onClick={() => handleCopyUrl(userInfo.twitterLink!)} variant="secondary" className="shrink-0 text-blue-900">
                            Copy <i className="fa-brands fa-twitter mx-2 "></i> Link
                        </Button>
                    </div>
                </div>

            </div >
                :
                <ProfileSkeleton />
            }

        </React.Fragment >

    )
}

export default ProfileInfo; 