import React from 'react'
import { UserFooter, UserHeader, UserNavigation } from '../../components'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <div className="w-full bg-grey min-h-screen ">
                <UserHeader />
                <div className="flex space-x-4 px-2 md:px-4 py-2 h-full">
                    {/* <UserNavigation /> */}
                    <div className=" bg-white shadow-sm w-full min-h-96 p-3 md:p-6 rounded-3xl">
                        <Outlet />
                    </div>
                </div>
                {/* <UserFooter /> */}
            </div>
        </div>
    )
}

export default Layout