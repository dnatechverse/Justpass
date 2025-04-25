import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PublicAbout, PublicContact, PublicHome, Register, SignIN } from '../../pages'
import { PublicLayout } from '../../layouts'

const PublicRoutes = () => {
    return (
        <Routes>
            <Route index element={<PublicHome />} />
            <Route path="/" element={<PublicLayout />}>
                <Route path="about" element={<PublicAbout />} />
                <Route path="contact" element={<PublicContact />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Route>
            <Route path="/signin" element={<SignIN />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default PublicRoutes