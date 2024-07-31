import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React, { useEffect, useState } from 'react'
import Post from '@/components/Post'
import People from '@/components/People'
import { Separator } from '@/components/ui/separator'
import { post, responseDocument } from '@/context/types'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/config/firebaseConfig'
import { getposts } from '@/services/post.service'

const Home: React.FC = () => {
    const [user] = useAuthState(auth);
    const [data, setdata] = useState<responseDocument[]>([])
    const [noPostsBanner, setnoPostsBanner] = useState<boolean>(false)

    const storyImageLinks = [
        "https://cdn.pixabay.com/photo/2023/08/19/13/42/flowers-8200510_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/06/04/09/23/sea-8808190_960_720.jpg",
        "https://cdn.pixabay.com/photo/2024/06/17/23/30/trees-8836655_960_720.jpg",
        "https://cdn.pixabay.com/photo/2023/03/08/15/23/lake-7838004_960_720.jpg",
        "https://cdn.pixabay.com/photo/2024/06/23/06/27/lake-8847415_960_720.jpg",
        "https://cdn.pixabay.com/photo/2024/03/04/14/30/plant-8612513_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/08/19/13/42/f       lowers-8200510_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/06/04/09/23/sea-8808190_960_720.jpg",
        "https://cdn.pixabay.com/photo/2024/06/17/23/30/trees-8836655_960_720.jpg",
        "https://cdn.pixabay.com/photo/2023/03/08/15/23/lake-7838004_960_720.jpg",
        "https://cdn.pixabay.com/photo/2024/06/23/06/27/lake-8847415_960_720.jpg",
        "https://cdn.pixabay.com/photo/2024/03/04/14/30/plant-8612513_1280.jpg"

    ]


    const fetchAllPosts = async () => {
        try {
            const querySnapshot = await getposts();
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
        fetchAllPosts();
    }, [])
    return (
        <div className='flex gap-12'>
            <div className='px-10 py-4'>
                <Carousel>
                    <CarouselContent className='gap-4'>
                        {storyImageLinks.map((item) => (
                            <CarouselItem className="basis-1/1">
                                <img
                                    className='w-16 h-16 rounded-[50%]'
                                    src={item}
                                    alt=""
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <div className='p-2 mt-6 flex flex-col justify-center items-center'>
                    {data &&
                        data.map((post: responseDocument) => {
                            return (
                                <Post
                                    key={post.id}
                                    username={post.username}
                                    userPhotoUrl={post.photoURL}
                                    postId={post.id}
                                    authorId={post.userId!}
                                    caption={post.caption}
                                    image={post.photos[0].cdnUrl}
                                    userLinks={post.userLinks}
                                />
                            )
                        })}
                </div>
            </div>

            <div
                style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
                className='rounded-xl h-[600px]'
            >
                <People />
            </div>
        </div>
    )
}

export default Home