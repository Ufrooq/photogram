import { auth } from '@/config/firebaseConfig';
import { post, responseDocument } from '@/context/types';
import { getPostsById } from '@/services/post.service';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';


const MyPosts = () => {
    const [user] = useAuthState(auth);
    const [data, setdata] = useState<responseDocument[]>([])
    const [noPostsBanner, setnoPostsBanner] = useState<boolean>(false)
    const imgLinks = [
        "https://cdn.pixabay.com/photo/2023/08/19/13/42/flowers-8200510_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/06/04/09/23/sea-8808190_960_720.jpg",
        "https://cdn.pixabay.com/photo/2024/06/17/23/30/trees-8836655_960_720.jpg",
        "https://cdn.pixabay.com/photo/2023/03/08/15/23/lake-7838004_960_720.jpg",
        "https://cdn.pixabay.com/photo/2024/06/23/06/27/lake-8847415_960_720.jpg",
        "https://cdn.pixabay.com/photo/2024/03/04/14/30/plant-8612513_1280.jpg"

    ]


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
                className='page_content_container'
            >
                <div className="parent h-[70vh]">
                    {data.map((post, key) => (
                        <div className={`div${key + 1} post`}>
                            <img
                                className='max-w-full'
                                src={post.photos[0].cdnUrl} alt="" />
                        </div>
                    ))}
                </div>
                {noPostsBanner &&
                    <h1 className='font-2xl text-center font-semibold'>No posts created yet !!</h1>
                }
            </div>

        </div>
    )
}

export default MyPosts