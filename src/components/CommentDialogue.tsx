import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Label } from '@radix-ui/react-label'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'

const CommentDialogue = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <i className="fa-regular fa-comment"></i>
            </DialogTrigger>
            <DialogContent>
                <div className='space-y-4 max-h-[400px] overflow-y-scroll'>
                    <div className='space-y-4'>
                        <div className="flex items-center space-x-2">
                            <Avatar className='bg-black rounded-full w-8 h-8 overflow-hidden'>
                                <AvatarImage className='h-full' src="https://cdn.pixabay.com/photo/2023/08/19/13/42/flowers-8200510_1280.jpg" />
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium leading-none">umar_cpp : </p>
                            </div>
                        </div>
                        <div>
                            <p className='text-sm ms-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, vitae.</p>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div className="flex items-center space-x-2">
                            <Avatar className='bg-black rounded-full w-8 h-8 overflow-hidden'>
                                <AvatarImage className='h-full' src="https://cdn.pixabay.com/photo/2023/08/19/13/42/flowers-8200510_1280.jpg" />
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium leading-none">umar_cpp : </p>
                            </div>
                        </div>
                        <div>
                            <p className='text-sm ms-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, vitae.</p>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div className="flex items-center space-x-2">
                            <Avatar className='bg-black rounded-full w-8 h-8 overflow-hidden'>
                                <AvatarImage className='h-full' src="https://cdn.pixabay.com/photo/2023/08/19/13/42/flowers-8200510_1280.jpg" />
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium leading-none">umar_cpp : </p>
                            </div>
                        </div>
                        <div>
                            <p className='text-sm ms-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, vitae.</p>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div className="flex items-center space-x-2">
                            <Avatar className='bg-black rounded-full w-8 h-8 overflow-hidden'>
                                <AvatarImage className='h-full' src="https://cdn.pixabay.com/photo/2023/08/19/13/42/flowers-8200510_1280.jpg" />
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium leading-none">umar_cpp : </p>
                            </div>
                        </div>
                        <div>
                            <p className='text-sm ms-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, vitae.</p>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div className="flex items-center space-x-2">
                            <Avatar className='bg-black rounded-full w-8 h-8 overflow-hidden'>
                                <AvatarImage className='h-full' src="https://cdn.pixabay.com/photo/2023/08/19/13/42/flowers-8200510_1280.jpg" />
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium leading-none">umar_cpp : </p>
                            </div>
                        </div>
                        <div>
                            <p className='text-sm ms-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, vitae.</p>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div className="flex items-center space-x-2">
                            <Avatar className='bg-black rounded-full w-8 h-8 overflow-hidden'>
                                <AvatarImage className='h-full' src="https://cdn.pixabay.com/photo/2023/08/19/13/42/flowers-8200510_1280.jpg" />
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium leading-none">umar_cpp : </p>
                            </div>
                        </div>
                        <div>
                            <p className='text-sm ms-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, vitae.</p>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div className="flex items-center space-x-2">
                            <Avatar className='bg-black rounded-full w-8 h-8 overflow-hidden'>
                                <AvatarImage className='h-full' src="https://cdn.pixabay.com/photo/2023/08/19/13/42/flowers-8200510_1280.jpg" />
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium leading-none">umar_cpp : </p>
                            </div>
                        </div>
                        <div>
                            <p className='text-sm ms-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, vitae.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Label>Add your comment below : </Label>
                    <div className='mb-4 mt-2'>
                        <Textarea placeholder='Enter your thoughts..' />
                    </div>
                    <Button variant={"custom"} className='ms-auto'>Submit</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default CommentDialogue