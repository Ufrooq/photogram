import { useEffect, useState } from 'react'
import { Card } from './ui/card'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Separator } from './ui/separator'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/config/firebaseConfig'
import { updateLikes } from '@/services/post.service'
import CommentDialogue from './CommentDialogue'



interface postProps {
    postId: string,
    authorId: string,
    caption: string
    image: string
    author?: string
    date?: string
    userLinks: string[]
    username?: string;
    userPhotoUrl?: string;
}

const Post = ({ username, userPhotoUrl, postId, caption, image, userLinks }: postProps) => {

    const { user, isLoading } = useAuth();
    const userId: string | any = user?.uid
    const [postLikes, setpostLikes] = useState<string[]>(userLinks);


    const handleAddLikes = (userId: string) => {
        const updatedLikes = postLikes.filter((like: any) => like !== userId);
        setpostLikes(updatedLikes);
    }

    const handleRemoveLikes = (userId: string) => {
        setpostLikes([...postLikes, userId]);
    }

    useEffect(() => {
        const handleUpdateLinks = async () => {
            try {
                await updateLikes(postId, postLikes, postLikes.length);
            } catch (error) {
                console.log(error);
            }
        };

        handleUpdateLinks();
    }, [postLikes, postId]);

    return (
        <Card className='max-w-[400px] flex flex-col gap-4 py-4 my-2 rounded-[14px] shadow-none border-none'>
            <div className='flex items-center'>
                <div className="flex items-center space-x-4">
                    <Avatar className='bg-black rounded-full w-10 h-10 overflow-hidden'>
                        <AvatarImage className='h-full' src={userPhotoUrl} />
                    </Avatar>
                    <div>
                        <p className="text-sm font-medium leading-none">{username}</p>
                        {/* <p className="text-sm text-muted-foreground">{user?.email}</p> */}
                    </div>
                </div>
                <button className='ms-auto'>
                    <i className="fa-solid fa-ellipsis-vertical text-lg px-2"></i>
                </button>
            </div>
            <div className='px-0'>
                <img className='border border-slate-300 rounded-lg h-[100%]' src={image} alt="" />
            </div>
            <div className='flex justify-between items-center text-[22px] px-1'>
                <div className='flex justify-between items-center gap-3'>
                    {postLikes.includes(userId) ?
                        <button onClick={() => handleAddLikes(userId)}>
                            <i className="fa-solid fa-heart text-red-600"></i>
                        </button>
                        :
                        <button onClick={() => handleRemoveLikes(userId)}>
                            <i className="fa-regular fa-heart"></i>
                        </button>
                    }
                    {/* <button> */}
                    <CommentDialogue postId={postId} />
                    {/* </button> */}
                    <button>
                        <i className="fa-regular fa-paper-plane"></i>
                    </button>

                </div>
                <div>
                    <button>
                        <i className="fa-regular fa-bookmark"></i>
                    </button>

                </div>
            </div>
            <div className='space-y-1'>
                <p>{postLikes.length} likes</p>
                <p className='font-semibold text-sm'>
                    {caption}
                    ✌️
                </p>
            </div>
            <Separator />
        </Card >
    )
}

export default Post