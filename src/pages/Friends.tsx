import People from '@/components/People'
import React from 'react'

const Friends = () => {
    return (
        <div>
            <div>
                <h1 className='page_heading'>Friends</h1>
                <p className='page_sub_heading'>
                    Interact with your friends, also you can modify your friends list.
                </p>
                <div
                    style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
                    className='page_content_container'
                >
                    <People />
                </div>
            </div>
        </div>
    )
}

export default Friends