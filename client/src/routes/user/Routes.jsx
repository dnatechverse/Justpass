import React from 'react'
import { Route, Routes } from "react-router-dom"
import { UserLayout } from '../../layouts'
import { UserCourses, UserHome, UserProfile } from '../../pages'

const UserRoutes = () => {
    return (
        <Routes>
            <Route element={<UserLayout />} path="/user/dashboard/"> 
                <Route path="" index element={<UserHome />} />
                <Route path="profile" element={<UserProfile />} />
                <Route path="enrolled-course" element={<UserCourses />} />
            </Route>
        </Routes>
    )
}

export default UserRoutes