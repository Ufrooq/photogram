import FileUploader from '@/components/FileUploader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useGlobalContext } from '@/context/Context';
import { FileEntry } from '@/context/types';
import { Label } from '@radix-ui/react-label';


const CreatePost = () => {

    const { currentUser } = useGlobalContext();
    const [fileEntery, setfileEntery] = useState<FileEntry>({
        files: []
    })
    return (
        <div>
            <div>
                <h1 className='page_heading'>Create Post</h1>
                <p className='page_sub_heading'>
                    Express your thoughts by creating your own posts with a title and description
                </p>
                <div
                    style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
                    className='page_content_container'
                >
                    <form className='flex flex-col gap-10'>
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
                        <div className="flex w-full items-center p-4 text-lg">
                            <Label className='text-md w-[16%] font-medium text-slate-700'>Upload a Picture : </Label>
                            <FileUploader />
                        </div>
                        <div className='w-full p-4 flex justify-end text-xl'>
                            <Button type='submit' variant={"custom"} className='px-6 py-2 gap-3 text-lg'>
                                Create Post
                                <i className="fa-solid fa-plus"></i>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default CreatePost;  