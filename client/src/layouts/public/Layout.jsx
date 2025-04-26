import React from 'react'
import { PublicFooter, PublicHeader } from '../../components'
import { Outlet } from 'react-router-dom'
import "./../../index.css"

const Layout = () => {
    return (
        <div className=' '>
            <div className='min-h-screen h-full shadow-2xl shadow-black bg-grey py-4 px-4 space-y-4 relative z-10' >
                <PublicHeader />
                <div className='bg-white p-4 rounded-4xl  shadow'>
                    <Outlet />
                </div>
            </div>
            <div className='h-60' ></div>
            <PublicFooter />
        </div>
    )
}

export default Layout