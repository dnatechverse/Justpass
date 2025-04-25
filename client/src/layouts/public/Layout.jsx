import React from 'react'
import { PublicFooter, PublicHeader } from '../../components'
import { Outlet } from 'react-router-dom'
import "./../../index.css"

const Layout = () => {
    return (
        <div className='min-h-screen h-full bg-grey py-4 px-4 space-y-4 '>
            <PublicHeader />
            <div className='bg-white p-4 rounded-4xl  shadow'>
                <Outlet />
            </div>
            <PublicFooter />
        </div>
    )
}

export default Layout