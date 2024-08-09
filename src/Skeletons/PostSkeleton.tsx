import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

const PostSkeleton = () => {
    return (
        <Card className='w-[340px] flex flex-col gap-6 py-4 my-2 rounded-[14px] shadow-none border-none'>
            <div className='flex items-center justify-between'>
                <div className="flex items-center space-x-4">
                    <Skeleton className='bg-black rounded-full w-10 h-10' />
                    <div>
                        <Skeleton className='h-4 w-32 bg-gray-300' />
                    </div>
                </div>
                <Skeleton className='w-8 h-8' />
            </div>
            <div className='flex justify-between items-center text-[22px] px-1'>
                <div className='flex justify-between items-center gap-3'>
                    <Skeleton className='w-6 h-6' />
                    <Skeleton className='w-6 h-6' />
                    <Skeleton className='w-6 h-6' />
                </div>
                <Skeleton className='w-6 h-6' />
            </div>
            <div className='space-y-1'>
                <Skeleton className='h-4 w-24 bg-gray-300' />
                <Skeleton className='h-4 w-full bg-gray-300' />
            </div>
            <div className='px-0'>
                <Skeleton className='border border-slate-300 rounded-lg h-[100%] w-full' />
            </div>
        </Card>
    )
}

export default PostSkeleton