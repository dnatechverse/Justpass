import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoadingButton, Toast } from '../../components';

const Register = () => {
    const [loading, setLoading] = useState(false);
    const [toastData, setToastData] = useState({
        type: '', // 'success' or 'error'
        messageTitle: '',
        messageDesc: ''
    });


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
        setLoading(true);
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
                setToastData({
                    type: 'success',
                    messageTitle: 'Registration Successful',
                    messageDesc: 'Your account has been created.'
                });
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

                setTimeout(() => {
                    navigate('/');
                    window.location.reload()  // Reload the page to reflect the new state
                }, 3000);

                //alert('Registration successful!')
                // navigate('/')  // Redirect to sign-in page
                // Optionally navigate to dashboard or login
            } else {
                setToastData({
                    type: 'error',
                    messageTitle: 'Registration Failed',
                    messageDesc: data.message || 'Please try again.'
                });
            }
        } catch (error) {
            setToastData({
                type: 'error',
                messageTitle: 'Error',
                messageDesc: 'An error occurred. Please try again later.'
            });
        } finally {
            setLoading(false); // Stop loading after everything
        }
    }

    useEffect(() => {
        if (toastData.type) {
            const timeout = setTimeout(() => {
                setToastData({
                    type: '',
                    messageTitle: '',
                    messageDesc: ''
                });
            }, 3000); // 3 seconds

            return () => clearTimeout(timeout);
        }
    }, [toastData]);

    return (
        <div className="min-h-full flex  justify-center w-full">
            {toastData.type && (
                <Toast
                    type={toastData.type}
                    messageTitle={toastData.messageTitle}
                    messageDesc={toastData.messageDesc}
                />
            )}

            <div className="md:bg-white md:w-3/5 md:p-8 rounded-2xl md:shadow-xl w-full mt-4 md:mt-0 ">
                <h2 className="text-4xl font-unboundedbold mb-6 text-center">Register</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-6 font-generalregular " onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Full Name" required className={inputStyle} onChange={handleChange} value={formData.name} />
                    <input type="email" name="email" placeholder="Email" required className={inputStyle} onChange={handleChange} value={formData.email} />
                    <input type="text" name="phoneNo" placeholder="Phone Number" required className={inputStyle} onChange={handleChange} value={formData.phoneNo} />
                    <input type="text" name="collegeName" placeholder="College Name" required className={inputStyle} onChange={handleChange} value={formData.collegeName} />
                    <input type="text" name="collegeAddress" placeholder="College Address" required className={inputStyle} onChange={handleChange} value={formData.collegeAddress} />
                    <input type="text" name="degree" placeholder="Degree" required className={inputStyle} onChange={handleChange} value={formData.degree} />
                    <input type="text" name="department" placeholder="Department" required className={inputStyle} onChange={handleChange} value={formData.department} />
                    <input type="password" name="password" placeholder="Password" required className={inputStyle} onChange={handleChange} value={formData.password} />

                    <LoadingButton
                        loading={loading}
                        className="col-span-full bg-black text-white py-3 rounded-lg hover:bg-black transition duration-200 flex space-x-4 items-center justify-center font-generalregular cursor-pointer"
                        text="Register"
                    />

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
