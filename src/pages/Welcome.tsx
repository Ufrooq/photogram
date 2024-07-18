import { Button } from '@/components/ui/button'
import React from 'react'

const Welcome = () => {
    return (
        <div className='p-6'>
            <div>
                <h3 className='font-base text-xl leading-normal'>
                    Capture, edit, and share your moments effortlessly with Photogram.
                </h3>
                <i className="fa-brands fa-product-hunt text-5xl"></i>
                <h1 className='font-bold text-5xl'>Welcome to Photogram</h1>

            </div>
            <div>
                <p className='mt-10'>
                    Join Photogram and experience the joy of capturing and sharing life's beautiful moments. Unleash your creativity with our intuitive tools and vibrant community. Discover a platform designed to inspire and connect photographers of all skill levels. With powerful editing features and seamless sharing options, your photos will always look their best. Start your journey with Photogram today and turn every snapshot into a masterpiece.
                </p>
                <Button variant="custom">Explore More</Button>
            </div>
        </div>
    )
}

export default Welcome