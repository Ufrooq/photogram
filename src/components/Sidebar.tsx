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

    ]
    return (
        <div className='py-8 px-4 bg-slate-300 w-[300px]'>
            <div>
                <h1 className='font-semibold'>Photogram</h1>
            </div>
            <div className='h-full'>
                {sideBarItems.map((item) => (
                    <div className='flex items-center gap-4 py-2 px-4 hover:bg-slate-200'>
                        <i className={`fa-regular ${item.icon} text-[18px]`}></i>
                        <p className='text-[20px] font-medium'>{item.name}</p>
                    </div>
                ))}
            </div>
            <div>

            </div>

        </div >
    )
}

export default Sidebar;