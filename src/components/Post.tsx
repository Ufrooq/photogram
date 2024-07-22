import React from 'react'
import { Card, CardContent } from './ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

const Post = () => {
    return (
        <Card className='w-[380px] p-4 rounded-[14px]'>
            <div>
                <div className="flex items-center space-x-4">
                    <Avatar className='bg-black rounded-full w-10 h-10 overflow-hidden'>
                        <AvatarImage className='h-full' src="https://cdn.pixabay.com/photo/2023/03/08/15/23/lake-7838004_960_720.jpg" />
                    </Avatar>
                    <div>
                        <p className="text-sm font-medium leading-none">Sofia Davi</p>
                        <p className="text-sm text-muted-foreground">m@example.com</p>
                    </div>
                    <p></p>
                </div>
                <CardContent>

                </CardContent>
            </div>
        </Card>
    )
}

export default Post