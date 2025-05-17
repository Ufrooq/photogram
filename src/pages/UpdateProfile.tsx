import FileUploader from '@/components/FileUploader'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useGlobalContext } from '@/context/Context'
import { userCompleteInfo, userDefaultInfo } from '@/context/types'
import useAuth from '@/hooks/useAuthHook'
import { updateUserInfoONPost } from '@/services/post.service'
import { createUserProfile, updateUserProfile } from '@/services/user.service'
import { Label } from '@radix-ui/react-label'
import { OutputFileEntry } from '@uploadcare/react-uploader'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const UpdateProfile = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const { updateProfile } = useGlobalContext()

    const { userId, displayName, photoURL, userBio, faceBookLink, twitterLink, linkedInLink, email } = location.state

    const initialUserInfo: userCompleteInfo = {
        userId,
        displayName,
        email,
        photoURL,
        userBio,
        faceBookLink,
        twitterLink,
        linkedInLink,
    };
    const [data, setdata] = useState<userCompleteInfo>(initialUserInfo);
    const [fileEntry, setFileEntry] = useState<OutputFileEntry[]>([]);

    const handleOnChange = (e: any) => {
        setdata({ ...data, [e.target.id]: e.target.value })
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            // await updateUserProfile(id, data);
            if (user.uid) {
                console.log(user.uid)
                await updateUserProfile({ ...data, userId: user.uid });
                toast.success("Profile Updated successfully !")
                navigate("/profile")
            } else {
                await createUserProfile(data);
                toast.success("Profile Updated s successfully !")
                navigate("/profile")
            }

            const profileInfo_for_firebaseUser: userDefaultInfo = {
                user: user!,
                displayName: data.displayName,
                photoURL: data.photoURL,

            }
            updateProfile(profileInfo_for_firebaseUser);
            updateUserInfoONPost(profileInfo_for_firebaseUser)
        } catch (error) {
            console.log(error)
            toast.error("Error occured while updating Profile !")
        }
    }
    // console.log(fileEntry)

    useEffect(() => {
        if (fileEntry.length > 0) {
            setdata({ ...data, photoURL: fileEntry[0].cdnUrl || "" })
        }

    }, [fileEntry])


    return (
        <div
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
            className='page_content_container'
        >
            <Card className='border-none'>
                <CardContent className="grid gap-4">
                    <form className="grid gap-4" onSubmit={handleSubmit} >
                        <div className="relative my-4">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-lg uppercase">
                                <span className="bg-background px-2 text-black font-bold">
                                    General Details
                                </span>
                            </div>
                        </div>
                        <div className='w-full flex justify-between items-end gap-6'>
                            <div className='flex flex-col gap-4 items-center'>

                                {photoURL && fileEntry.length < 1 ?
                                    <img src={photoURL} alt="profile" className='rounded-[10px] w-[120px]' />
                                    :
                                    fileEntry.length > 0 ?
                                        <img src={fileEntry[0].cdnUrl || ""} alt="profile" className='rounded-[10px] w-[120px]' />
                                        :
                                        <div className='rounded-xl bg-black flex items-center justify-center w-[180px] h-[170px]'>
                                            <i className="fa-regular fa-user text-white text-[120px]"></i>
                                        </div>
                                }
                                <div>
                                    <FileUploader previewUploadedImages={false} files={fileEntry} onChange={setFileEntry} />
                                </div>

                            </div>
                            <div className='flex-1 flex flex-col gap-4'>
                                <div className="grid gap-2 w-[40%]">
                                    <Label htmlFor="name">Name : </Label>
                                    <Input
                                        id="displayName"
                                        type="text"
                                        placeholder="Enter your name here"
                                        onChange={handleOnChange}
                                        value={data.displayName}
                                    />
                                </div>
                                <div className="grid gap-2 w-[40%]">
                                    <Label htmlFor="email">Name : </Label>
                                    <Input
                                        id="email"
                                        type="text"
                                        placeholder="Enter your email here"
                                        onChange={handleOnChange}
                                        value={data.email}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="userBio">Bio</Label>
                                    <textarea
                                        id="userBio"
                                        className='border border-slate-400 px-4 py-3 rounded-lg h-[80px]'
                                        rows={4}
                                        placeholder="Enter a biography for your profofile"
                                        onChange={handleOnChange}
                                        value={data.userBio}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="relative my-4">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-lg uppercase">
                                <span className="bg-background px-2 text-black font-bold">
                                    Other Social Account Links
                                </span>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="faceBookLink">Instagram Link</Label>
                            <Input
                                id="faceBookLink"
                                type="text"
                                placeholder="facebook.com/umar_cpp"
                                onChange={handleOnChange}
                                value={data.faceBookLink}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="linkedInLink">Facebook Link</Label>
                            <Input
                                id="linkedInLink"
                                type="text"
                                placeholder="linkedIn.com/umar"
                                onChange={handleOnChange}
                                value={data.linkedInLink}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="twitterLink">Twitter Link</Label>
                            <Input
                                id="twitterLink"
                                type="text"
                                placeholder="twitter.com/umar"
                                onChange={handleOnChange}
                                value={data.twitterLink}
                            />
                        </div>
                        <div className='flex gap-4 mt-10'>
                            <Button
                                className="w-full"
                                type="submit"
                                variant="custom_outline"
                                onClick={() => navigate("/profile")}
                            >
                                Cancel
                            </Button>
                            <Button
                                className="w-full"
                                type="submit"
                                variant="custom"
                            >
                                Update Profile
                            </Button>
                        </div>
                    </form >
                </CardContent >
            </Card >
        </div >
    )
}

export default UpdateProfile