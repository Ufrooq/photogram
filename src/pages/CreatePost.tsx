import FileUploader from "@/components/FileUploader";
import { Button } from "@/components/ui/button";
import { auth } from "@/config/firebaseConfig";
import { photoMeta, post } from "@/context/types";
import { createPost } from "@/services/post.service";
import { OutputFileEntry } from "@uploadcare/react-uploader";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CreatePost = () => {
    const [user] = useAuthState(auth);
    const [fileEntry, setFileEntry] = useState<OutputFileEntry[]>([]);
    const navigate = useNavigate();
    const [post, setpost] = useState<post>({
        caption: "",
        photos: [],
        likes: 0,
        userLinks: [],
        userId: "",
        date: new Date(),
    });

    async function handleSubmit(e: React.MouseEvent<HTMLFormElement>) {
        e.preventDefault();
        const photosArray: photoMeta[] = fileEntry.map((file: any) => ({
            cdnUrl: file.cdnUrl,
            uuid: file.uuid,
        }));
        if (user) {
            const newPost: post = {
                ...post,
                photos: photosArray,
                userId: user.uid,
            };
            console.log("New Post : ", newPost);
            try {
                await createPost(newPost);
                toast.success("Post Created Successfully !");
                navigate("/home");
            } catch (error) {
                toast.error("User is not logged In !");
                navigate("/home");
            }
        } else {
            toast.error("User is not logged In !");
            navigate("/home");
        }
    }

    return (
        <div>
            <div>
                <h1 className="page_heading">Create Post</h1>
                <p className="page_sub_heading">
                    Express your thoughts by creating your own posts with a tit`le and
                    description
                </p>
                <div
                    style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
                    className="page_content_container"
                >
                    <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
                        <div className="border-b border-slate-300">
                            <textarea
                                name="desc"
                                cols={120}
                                rows={8}
                                id=""
                                className="resize-none p-4 text-lg outline-none"
                                placeholder="Enter a suitable caption for your post "
                                value={post.caption}
                                onChange={(e) => setpost({ ...post, caption: e.target.value })}
                            ></textarea>
                        </div>
                        <div className="w-full">
                            <FileUploader previewUploadedImages={true} files={fileEntry} onChange={setFileEntry} />
                        </div>
                        <div className="flex w-full justify-end p-4 text-xl">
                            <Button
                                type="submit"
                                variant={"custom"}
                                className="gap-3 px-6 py-2 text-lg"
                            >
                                Create Post
                                <i className="fa-solid fa-plus"></i>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
