import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const API_URL = import.meta.env.VITE_API_URL
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNo: '',
        collegeName: '',
        collegeAddress: '',
        degree: '',
        department: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)
        console.log(API_URL)
        try {
            const res = await fetch(`${API_URL}/api/public/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const data = await res.json()

            if (res.ok) {
                localStorage.setItem('token', data.token)  // Save token to localStorage
                setFormData({
                    name: '',
                    email: '',
                    phoneNo: '',
                    collegeName: '',
                    collegeAddress: '',
                    degree: '',
                    department: '',
                    password: ''
                })
                alert('Registration successful!')
                navigate('/')  // Redirect to sign-in page
                // Optionally navigate to dashboard or login
            } else {
                alert(data.message || 'Registration failed')
            }
        } catch (error) {
            console.error('Registration Error:', error)
            alert('An error occurred. Please try again later.')
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-3xl">
                <h2 className="text-4xl font-unboundedbold mb-6 text-center">Register</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 font-generalregular " onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Full Name" required className={inputStyle} onChange={handleChange} value={formData.name} />
                    <input type="email" name="email" placeholder="Email" required className={inputStyle} onChange={handleChange} value={formData.email} />
                    <input type="text" name="phoneNo" placeholder="Phone Number" required className={inputStyle} onChange={handleChange} value={formData.phoneNo} />
                    <input type="text" name="collegeName" placeholder="College Name" required className={inputStyle} onChange={handleChange} value={formData.collegeName} />
                    <input type="text" name="collegeAddress" placeholder="College Address" required className={inputStyle} onChange={handleChange} value={formData.collegeAddress} />
                    <input type="text" name="degree" placeholder="Degree" required className={inputStyle} onChange={handleChange} value={formData.degree} />
                    <input type="text" name="department" placeholder="Department" required className={inputStyle} onChange={handleChange} value={formData.department} />
                    <input type="password" name="password" placeholder="Password" required className={inputStyle} onChange={handleChange} value={formData.password} />

                    <button type="submit" className="col-span-full bg-black text-white py-3 rounded-lg hover:bg-black transition duration-200">
                        Register
                    </button>
                </form>
                <p className=" text-end font-generalregular  text-gray-600 mt-4">
                    Already have an account? <Link to="/signin" className="text-black hover:underline">Sign in</Link>
                </p>
            </div>
        </div>
    )
}

export default Register

// Tailwind utility class
const inputStyle = "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
