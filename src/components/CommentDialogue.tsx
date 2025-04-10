import { Dialog, DialogTrigger, DialogContent } from './ui/dialog'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Label } from '@radix-ui/react-label'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { useEffect, useRef, useState } from 'react'
import { commentI, commentResponseI } from '@/context/types'
import { useGlobalContext } from '@/context/Context'
import { toast } from 'sonner'
import { addComment, getComments } from '@/services/comments.service'
import { ScrollArea } from './ui/scroll-area'
import useAuth from '@/hooks/useAuthHook'

const CommentDialogue = ({ postId }: { postId: string }) => {
    const [comment, setComment] = useState<string>("");
    const { user } = useAuth();
    const { currentUserInfo } = useGlobalContext();
    const [otherComments, setOtherComments] = useState<commentResponseI[]>([])
    const commentsEndRef = useRef<HTMLDivElement>(null);
    const [commenting, setCommenting] = useState(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (comment == "") {
            toast.error("Please enter your comment !")

        } else {
            setCommenting(true);
            try {
                const comment_to_add: commentI = {
                    authorId: user?.uid!,
                    authorPhotoURL: currentUserInfo?.photoURL || "",
                    authorUsername: currentUserInfo?.displayName || "",
                    postId: postId,
                    commentText: comment
                }

                await addComment(comment_to_add);
                setOtherComments([...otherComments, comment_to_add])
                setComment("");
                // fetchOtherComments(postId)
                toast.success("Comment added successfully !")
            } catch (error) {
                console.log(error)
                toast.error("An error occured while adding your comment !")
            } finally {
                setCommenting(false);
            }

        }

    }

    useEffect(() => {
        if (commentsEndRef.current) {
            commentsEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [otherComments]);

    const fetchOtherComments = async (postId: string) => {
        try {
            const response = await getComments(postId) as commentResponseI[];
            if (response.length > 0) {
                setOtherComments(response)
            }
            else {
                // setnoPostsBanner(true)
            }
        } catch (error) {
            console.log(error)
        }
    };


    useEffect(() => {
        fetchOtherComments(postId!)
    }, [postId])



    return (
        <Dialog>
            <DialogTrigger>
                <i className="fa-regular fa-comment"></i>
            </DialogTrigger>
            <DialogContent>
                {otherComments.length > 0 ?
                    <ScrollArea className='max-h-[320px] py-6'>
                        <div className='space-y-6'>
                            {otherComments.map((comment) => (
                                <div className='space-y-1'>
                                    <div className="flex items-center space-x-2">
                                        <Avatar className='bg-black rounded-full w-8 h-8 overflow-hidden'>
                                            <AvatarImage className='h-full' src={comment.authorPhotoURL} />
                                        </Avatar>
                                        <div>
                                            <p className="text-sm font-medium leading-none">{comment.authorUsername}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-sm ms-4'>{comment.commentText}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div ref={commentsEndRef}></div>
                    </ScrollArea>
                    :
                    <h1 className='font-bold text-xl'>No Comments Found !</h1>
                }
                <form onSubmit={handleSubmit}>
                    <Label>Add your comment below : </Label>
                    <div className='mb-4 mt-3'>
                        <Textarea
                            value={comment}
                            onChange={(e: any) => setComment(e.target.value)}
                            placeholder={otherComments.length > 0 ? "Enter your thoughts.." : "Be the First to comment"}
                        />
                    </div>
                    <Button type="submit" variant={"custom"} className='ms-auto'>
                        {commenting ? "Commenting..." : "Comment"}
                    </Button>
                </form>
            </DialogContent >
        </Dialog >
    )
}

export default CommentDialogue