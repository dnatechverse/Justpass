import React from 'react'
import { AuthHeader } from '../../components'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='p-4 space-y-4 w-full' >
            <AuthHeader />
            <div className='flex justify-center w-full  h-full ' >
                <Outlet />
            </div>
        </div>
    )
}

export default Layout