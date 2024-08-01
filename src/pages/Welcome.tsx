import { Button } from '@/components/ui/button'
import mesh_img from "../assets/undraw_landing_page_re_6xev.svg"
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
    const navigate = useNavigate()
    return (
        <div className='flex h-[96vh] items-center justify-around p-4'>
            <div className='p-4 w-[40%] flex flex-col gap-4'>
                <div className='flex flex-col gap-4'>
                    <i className="fa-brands fa-product-hunt text-8xl"></i>
                    <h1 className='font-bold text-5xl'>Welcome to Photogram</h1>
                    <p className='leading-6 text-justify'>
                        Join Photogram and experience the joy of capturing and sharing life's beautiful moments. Unleash your creativity with our intuitive tools and vibrant community. Discover a platform designed to inspire and connect photographers of all skill levels. With powerful editing features and seamless sharing options, your photos will always look their best. Start your journey with Photogram today and turn every snapshot into a masterpiece.
                    </p>
                    <Button onClick={() => navigate("/home")} variant="custom" className='self-start px-6 text-md font-semibold'>Explore More</Button>
                </div>
            </div>
            <div className='w-[40%]'>
                <img src={mesh_img} className="object-fill" alt="" />
            </div>
        </div>
    )
}

export default Welcome