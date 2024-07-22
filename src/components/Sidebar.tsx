import React from 'react'
import { NavLink } from 'react-router-dom'


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
            name: "Friends",
            link: "/friends",
            icon: "fa-user-group"
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
        <aside className='py-8 px-4 h-full w-[320px] rounded-md border fixed z-20 bg-white'>
            <div className='h-[100vh] flex flex-col gap-4'>
                <div className='py-4 px-4 flex items-center gap-2 text-purple-800'>
                    <i className="fa-brands fa-product-hunt text-5xl rotate-180"></i>
                    <h1 className='font-extrabold text-2xl'>
                        Photogram
                    </h1>
                </div>
                {sideBarItems.map((item) => {
                    return (
                        <NavLink
                            to={item.link || "/"}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[20px] flex items-center gap-5 py-2 px-4 hover:bg-slate-200 cursor-pointer rounded-lg transition bg-slate-200"
                                    : "text-[20px] flex items-center gap-5 py-2 px-4 hover:bg-slate-200 cursor-pointer rounded-lg transition"
                            }
                        >
                            <i className={`fa-solid ${item.icon} w-[20px] text-xl`}></i>
                            <p className='font-medium'>{item.name}</p>
                            {(item.name == "Notifications" || item.name == "Settings")
                                &&
                                <span className='w-2 h-2 bg-purple-600 ms-auto rounded-[50%]'></span>
                            }
                        </NavLink>
                    )
                })}
            </div>
        </aside >
    )
}

export default Sidebar;