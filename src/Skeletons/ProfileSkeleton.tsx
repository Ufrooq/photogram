import { Skeleton } from "@/components/ui/skeleton";

const ProfileSkeleton = () => {
    return (
        <div
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
            className="page_content_container space-y-10"
        >
            <div className="flex gap-10 items-center">
                <Skeleton className="
                    w-[140px] h-[140px] rounded-full" />
                <div className="w-full space-y-4">
                    <div className="flex items-center justify-between w-[100%]">
                        <div>
                            <Skeleton className="h-6 w-40" />
                            <Skeleton className="h-4 w-64 mt-2" />
                        </div>
                        <Skeleton className="h-10 w-32" />
                    </div>
                    <div className="space-x-4 flex">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-20" />
                    </div>
                </div>
            </div>
            <div className="space-y-2 max-w-[100%]">
                <Skeleton className="h-6 w-24 ms-2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[80%]" />
            </div>
            <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center uppercase">
                    <Skeleton className="h-6 w-32" />
                </div>
            </div>
            <div className="space-y-6">
                <div className="flex space-x-2">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-20" />
                </div>
                <div className="flex space-x-2">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-20" />
                </div>
                <div className="flex space-x-2">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-20" />
                </div>
            </div>
        </div>
    );
};

export default ProfileSkeleton;
