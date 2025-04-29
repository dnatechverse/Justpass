import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoadingButton, Toast } from '../../components'

const SignIN = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [toastData, setToastData] = useState({
        type: '', // 'success' or 'error'
        messageTitle: '',
        messageDesc: ''
    });

    const API_URL = import.meta.env.VITE_API_URL


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await fetch(`${API_URL}/api/public/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })

            const data = await res.json()

            if (res.ok) {
                setToastData({
                    type: 'success',
                    messageTitle: 'Signin Successful',
                    messageDesc: 'Your account has been found.',
                });
                localStorage.setItem('token', data.token)
                //alert('Sign in successful!')
                setEmail('')
                setPassword('')
                // Navigate to dashboard if needed
                setTimeout(() => {
                    navigate('/');
                    window.location.reload()  // Reload the page to reflect the new state
                }, 3000);
            } else {
                // alert(data.message || 'Invalid credentials')
                setToastData({
                    type: 'error',
                    messageTitle: 'Invalid Credentials',
                    messageDesc: data.message || 'Please try again.'
                });
                // console.log(password)
            }
        } catch (error) {
            setToastData({
                type: 'error',
                messageTitle: 'Something went wrong',
                messageDesc: data.message || 'An error occurred. Please try again later.'
            });
            // console.error('Signin Error:', error)
            // // console.log(password)
            // alert('An error occurred. Please try again later.')
        } finally {
            setLoading(false)
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
        <div className=" flex items-center justify-center  w-full h-full">
            {toastData.type && (
                <Toast
                    type={toastData.type}
                    messageTitle={toastData.messageTitle}
                    messageDesc={toastData.messageDesc}
                />
            )}
            <div className="md:bg-white md:p-8 rounded-2xl md:shadow-xl w-full mt-4 md:mt-0  md:w-2/5 ">
                <h2 className="text-4xl font-unboundedbold mb-6 text-center">Sign In</h2>
                <form className="flex flex-col space-y-5 font-generalregular" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm md:text-lg md:mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full p-3 border border-gray-300 text-sm md:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm md:text-lg md:mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Your password"
                            className="w-full p-3 border border-gray-300 text-sm md:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>

                    <LoadingButton
                        loading={loading}
                        className="w-full bg-black text-white py-3 rounded-lg hover:bg-black transition duration-200 cursor-pointer"
                        text="Sign In"
                    />
                </form>

                <div className="text-center mt-4 font-generalregular">
                    <p className="text-sm text-gray-600 mt-1">
                        Don’t have an account? <Link to="/register" className="text-black hover:underline">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignIN
