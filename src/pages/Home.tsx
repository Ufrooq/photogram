import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'
import Community from './Community'
import Post from '@/components/Post'

const Home: React.FC = () => {

    const storyImageLinks = [
        "https://cdn.pixabay.com/photo/2023/08/19/13/42/flowers-8200510_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/06/04/09/23/sea-8808190_960_720.jpg",
        "https://cdn.pixabay.com/photo/2024/06/17/23/30/trees-8836655_960_720.jpg",
        "https://cdn.pixabay.com/photo/2023/03/08/15/23/lake-7838004_960_720.jpg",
        "https://cdn.pixabay.com/photo/2024/06/23/06/27/lake-8847415_960_720.jpg",
        "https://cdn.pixabay.com/photo/2024/03/04/14/30/plant-8612513_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/08/19/13/42/flowers-8200510_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/06/04/09/23/sea-8808190_960_720.jpg",
        "https://cdn.pixabay.com/photo/2024/06/17/23/30/trees-8836655_960_720.jpg",
        "https://cdn.pixabay.com/photo/2023/03/08/15/23/lake-7838004_960_720.jpg",
        "https://cdn.pixabay.com/photo/2024/06/23/06/27/lake-8847415_960_720.jpg",
        "https://cdn.pixabay.com/photo/2024/03/04/14/30/plant-8612513_1280.jpg"

    ]
    return (
        <div className='flex gap-12'>
            <div className='p-10'>
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
                <div className='p-2 mt-4 flex justify-center'>
                    <Post />
                </div>
            </div>

            <div>
                <Community />
            </div>
        </div>
    )
}

export default Home