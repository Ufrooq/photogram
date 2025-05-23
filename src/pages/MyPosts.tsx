import { post, responseDocument } from '@/context/types';
import useAuth from '@/hooks/useAuthHook';
import { getPostsById } from '@/services/post.service';
import { useEffect, useState } from 'react'


const MyPosts = () => {
    const { user } = useAuth();
    const [data, setdata] = useState<responseDocument[]>([])
    const [noPostsBanner, setnoPostsBanner] = useState<boolean>(false)

    const fetchUserPosts = async () => {
        try {
            const querySnapshot = await getPostsById(user?.uid);
            const tempArr: responseDocument[] = [];
            if (querySnapshot.size > 0) {
                querySnapshot.forEach((doc) => {
                    const data = doc.data() as post;
                    const responseObj: responseDocument = {
                        id: doc.id,
                        ...data
                    }
                    tempArr.push(responseObj);
                })
                setdata(tempArr)
            } else {
                setnoPostsBanner(true)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchUserPosts()
    }, [])
    return (
        <div>
            <div>
                <h1 className='page_heading'>My Posts</h1>
                <p className='page_sub_heading'>
                    See all your posts and other activity you have done in the past.
                </p>
            </div>
            <div
                style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
                className='page_content_container h-[70vh]'
            >
                {data.length > 0 && <div className="parent h-[70vh]">
                    {data.map((post, key) => (
                        <div className={`div${key + 1} post`}>
                            <img
                                className='max-w-full'
                                src={post.photos[0].cdnUrl} alt="" />
                        </div>
                    ))}
                </div>}
                {noPostsBanner &&
                    <h1 className='font-2xl text-center font-semibold'>No posts created yet !!</h1>
                }
            </div>

        </div>
    )
}

export default MyPosts