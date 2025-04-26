import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { EnrollmentForm, PublicAbout, PublicBlog, PublicContact, PublicHome, PublicPolicy, PublicServices, PublicTerms, Register, SignIN } from '../../pages'
import { PublicLayout } from '../../layouts'

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<PublicHome />} />
                <Route path="about" element={<PublicAbout />} />
                <Route path="blog" element={<PublicBlog />} />
                <Route path="contact" element={<PublicContact />} />
                <Route path="services" element={<PublicServices />} />
                <Route path="terms" element={<PublicTerms />} />
                <Route path="policy" element={<PublicPolicy />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Route>
            <Route path="/signin" element={<SignIN />} />
            <Route path="/register" element={<Register />} />
            <Route path="/enrollment-form" element={<EnrollmentForm />} />
        </Routes>
    )
}

export default PublicRoutes