import React from 'react'

const Sidebar = () => {


    // <i class="fa-regular fa-house"></i>
    // <i class="fa-regular fa-circle-plus"></i>
    // <i class="fa-regular fa-images"></i>
    // <i class="fa-regular fa-bell"></i>
    // <i class="fa-regular fa-inbox"></i>
    // <i class="fa-regular fa-gear"></i>
    // <i class="fa-regular fa-right-from-bracket"></i>


    interface sideBarItemModal {
        name: string,
        link?: string,
        icon?: string
    }

    const sideBarItems: sideBarItemModal[] = [
        {
            name: "Home",
            link: "/home",
            icon: "fa-house"
        },
        {
            name: "Add Photo",
            link: "/create-post",
            icon: "fa-circle-plus"
        },
        {
            name: "My Photos",
            link: "/posts",
            icon: "fa-images"
        },
        {
            name: "Notifications",
            link: "/",
            icon: "fa-bell"
        },
        {
            name: "Direct",
            link: "/",
            icon: "fa-inbox"
        },
        {
            name: "Settings",
            link: "/",
            icon: "fa-gear"
        },
        {
            name: "Help",
            link: "/",
            icon: "fa-circle-info"
        },

    ]
    return (
        <aside className='py-8 px-4 bg-slate-300 w-[280px] h-screen'>
            <div className='h-[100vh] flex flex-col gap-4'>
                <div className='py-2 px-4 flex items-center gap-2 text-purple-900'>
                    <i className="fa-brands fa-product-hunt text-5xl rotate-45"></i>
                    <h1 className='font-bold text-2xl'>
                        Photogram
                    </h1>
                </div>
                {sideBarItems.map((item) => (
                    <div className='text-[20px] flex items-center gap-6 py-2 px-4 hover:bg-slate-200 cursor-pointer rounded-lg'>
                        <i className={`fa-solid ${item.icon} w-[20px]`}></i>
                        <p className='font-medium'>{item.name}</p>
                    </div>
                ))}
            </div>
            <div>

            </div>
        </aside >
    )
}

export default Sidebar;