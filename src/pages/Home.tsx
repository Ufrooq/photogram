import React from 'react'

const Home: React.FC = () => {
    return (
        <div>
            <div>
                <h1 className='page_heading'>Home</h1>
                <p className='page_sub_heading'>
                    See what everyone has posted, latest trends and pictures.
                </p>
            </div>
            <div
                style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
                className='page_content_container'
            >
            </div>
        </div >
    )
}

export default Home