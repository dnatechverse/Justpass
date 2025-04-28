import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { EnrollmentForm, PublicAbout, PublicBlog, PublicContact, PublicCourses, PublicHome, PublicPolicy, PublicServices, PublicTerms, Register, SignIN } from '../../pages'
import { AuthLayout, PublicLayout } from '../../layouts'

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<PublicHome />} />
                <Route path="about" element={<PublicAbout />} />
                <Route path="blog" element={<PublicBlog />} />
                <Route path="contact" element={<PublicContact />} />
                <Route path="course/:_id" element={<PublicCourses />} />
                <Route path="services" element={<PublicServices />} />
                <Route path="terms" element={<PublicTerms />} />
                <Route path="policy" element={<PublicPolicy />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Route>
            <Route path="/" element={<AuthLayout />}>
                <Route path="signin" element={<SignIN />} />
                <Route path="register" element={<Register />} />
                <Route path="enrollment-form" element={<EnrollmentForm />} />
                <Route path="enrollment-form/:_id" element={<EnrollmentForm />} />
            </Route>
        </Routes>
    )
}

export default PublicRoutes