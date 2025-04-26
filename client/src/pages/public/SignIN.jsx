import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignIN = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const API_URL = import.meta.env.VITE_API_URL


    const handleSubmit = async (e) => {
        e.preventDefault()

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
                localStorage.setItem('token', data.token)
                alert('Sign in successful!')
                setEmail('')
                setPassword('')
                // Navigate to dashboard if needed
            } else {
                alert(data.message || 'Invalid credentials')
                // console.log(password)
            }
        } catch (error) {
            console.error('Signin Error:', error)
            // console.log(password)
            alert('An error occurred. Please try again later.')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
                <h2 className="text-4xl font-unboundedbold mb-6 text-center">Sign In</h2>
                <form className="flex flex-col space-y-5 font-generalregular" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-lg mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-lg mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Your password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 rounded-lg hover:bg-black transition duration-200"
                    >
                        Sign In
                    </button>
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
