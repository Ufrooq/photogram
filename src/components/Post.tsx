import React from 'react'
import { Card, CardContent, CardFooter } from './ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Separator } from './ui/separator'



interface postProps {
    caption: string
    image: string
    author?: string
    date?: string
}
const Post = ({ caption, image }: postProps) => {
    return (
        <Card className='max-w-[400px] flex flex-col gap-4 py-4 my-2 rounded-[14px] shadow-none border-none'>
            <div className='flex items-center'>
                <div className="flex items-center space-x-4">
                    <Avatar className='bg-black rounded-full w-10 h-10 overflow-hidden'>
                        <AvatarImage className='h-full' src="https://cdn.pixabay.com/photo/2023/03/08/15/23/lake-7838004_960_720.jpg" />
                    </Avatar>
                    <div>
                        <p className="text-sm font-medium leading-none">Sofia Davi</p>
                        <p className="text-sm text-muted-foreground">m@example.com</p>
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
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-regular fa-comment"></i>
                    <i className="fa-regular fa-paper-plane"></i>
                </div>
                <div>
                    <i className="fa-regular fa-bookmark"></i>
                </div>
            </div>
            <div className='space-y-1'>
                <p>671,135 likes</p>
                <p className='font-semibold text-sm'>
                    {caption}
                    ✌️
                </p>
            </div>
            <Separator />
        </Card>
    )
}

export default Post