import FileUploader from '@/components/FileUploader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useGlobalContext } from '@/context/Context';
import { FileEntry, post } from '@/context/types';
import { Label } from '@radix-ui/react-label';
import { OutputFileEntry } from '@uploadcare/react-uploader';
import { useState } from 'react';


const CreatePost = () => {

    const { currentUser } = useGlobalContext();
    const [fileEntry, setFileEntry] = useState<OutputFileEntry[]>([]);

    const [post, setpost] = useState<post>({
        caption: "",
        photos: [],
        likes: 0,
        userLinks: [],
        userId: "",
        date: new Date()
    })


    function handleSubmit(e: React.MouseEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("File entry is : ", fileEntry);
        console.log("New created post is : ", post);

    }

    return (
        <div>
            <div>
                <h1 className='page_heading'>Create Post</h1>
                <p className='page_sub_heading'>
                    Express your thoughts by creating your own posts with a tit`le and description
                </p>
                <div
                    style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
                    className='page_content_container'
                >
                    <form
                        className='flex flex-col gap-10'
                        onSubmit={handleSubmit}
                    >
                        <div className='border-b border-slate-300'>
                            <textarea
                                name="desc"
                                cols={120}
                                rows={8}
                                id=""
                                className='outline-none p-4 resize-none text-lg'
                                placeholder='Enter a suitable description for your post '
                                value={post.caption}
                                onChange={(e) => setpost({ ...post, caption: e.target.value })}
                            ></textarea>
                        </div>
                        <div className="flex w-full items-center p-4 text-lg">
                            <Label className='text-md w-[16%] font-medium text-slate-700'>Upload a Picture : </Label>
                            <FileUploader files={fileEntry} onChange={setFileEntry} />
                        </div>
                        <div className='w-full p-4 flex justify-end text-xl'>
                            <Button type='submit' variant={"custom"} className='px-6 py-2 gap-3 text-lg'>
                                Create Post
                                <i className="fa-solid fa-plus"></i>
                            </Button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default CreatePost;  