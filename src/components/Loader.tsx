
const Loader = ({ size }: { size: string }) => {
    return (

        <div className="flex flex-row gap-2">
            <div className={`w-${size} h-${size} rounded-full bg-white animate-bounce`}></div>
            <div
                className={`w-${size} h-${size} rounded-full bg-white animate-bounce [animation-delay:-.2s]`}
            ></div>
            <div
                className={`w-${size} h-${size} rounded-full bg-white animate-bounce [animation-delay:-.4s]`}
            ></div>
        </div>

    )
}

export default Loader;