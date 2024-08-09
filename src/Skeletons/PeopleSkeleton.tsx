import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@radix-ui/react-separator"

const PeopleSkeleton = () => {
    return (
        <Card className='shadow-none outline-none border-none'>
            <CardHeader>
                <Skeleton className='h-6 w-32 bg-gray-300' />
                <Skeleton className='h-4 w-48 bg-gray-300 mt-1' />
            </CardHeader>
            <CardContent>
                <div className="flex space-x-2">
                    <Skeleton className='h-10 w-full bg-gray-300' />
                    <Skeleton className='h-10 w-24 bg-gray-300' />
                </div>
                <Separator className="my-4" />
                <div className="space-y-4">
                    <Skeleton className='h-4 w-40 bg-gray-300' />
                    <div className="grid gap-6 overflow-y-scroll max-h-[360px]">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div key={index} className="flex items-center justify-between space-x-4">
                                <div className="flex items-center space-x-4">
                                    <Skeleton className='w-10 h-10 bg-gray-300 rounded-full' />
                                    <div>
                                        <Skeleton className='h-4 w-32 bg-gray-300' />
                                        <Skeleton className='h-3 w-24 bg-gray-300 mt-1' />
                                    </div>
                                </div>
                                <Skeleton className='h-10 w-24 bg-gray-300' />
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default PeopleSkeleton