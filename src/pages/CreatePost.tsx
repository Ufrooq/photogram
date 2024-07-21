import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import React from 'react'

const CreatePost = () => {
    return (
        <div>
            <div>
                <h1 className='page_heading'>Create Post</h1>
                <p className='page_sub_heading'>
                    Express your thoughts by creating your own posts with a title and description
                </p>
                <div
                    style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
                    className='page_content_container flex flex-col gap-10'
                >
                    <div className='border-b border-slate-300'>
                        <textarea
                            name="desc"
                            cols={120}
                            rows={8}
                            id=""
                            className='outline-none p-4 resize-none text-lg'
                            placeholder='Enter a suitable description for your post '
                        ></textarea>
                    </div>
                    <div className="flex w-full items-center p-4">
                        <Label htmlFor="picture" className='text-md w-[16%] font-medium'>Upload a Picture : </Label>
                        <Input id="picture" type="file" />
                    </div>
                    <div className='w-full p-4 flex justify-end text-xl'>
                        <Button variant={"custom"} className='px-6 py-2 gap-3 text-lg'>
                            Create Post
                            <i className="fa-solid fa-plus"></i>
                        </Button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CreatePost;  