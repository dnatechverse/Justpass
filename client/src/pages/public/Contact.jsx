import React, { useState } from 'react'
import axios from 'axios'

const Contact = () => {
    const API_URL = import.meta.env.VITE_API_URL

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${API_URL}/api/public/contact`, formData)
            if (response.status === 201) {
                alert('Thank you for your message! We will get back to you soon.')
                setFormData({ name: '', email: '', message: '' })
            }
        } catch (err) {
            console.error(err)
            alert('An error occurred while sending your message. Please try again later.')
        }
    }

    return (
        <div className="w-full flex flex-col items-center p-0 md:p-6">
            <h1 className="font-unboundedbold text-2xl md:text-5xl mb-2 md:mb-4">Contact Us</h1>
            <p className="font-authormedium text-lg md:text-xl text-center max-w-2xl mb-6">
                Have questions, need guidance, or want to learn more about our courses? We're here to help!
                Reach out to us anytime, and our team will get back to you as soon as possible.
            </p>

            {/* Contact Information */}
            <div className="bg-gray-100 p-3 md:p-6 rounded-2xl shadow-lg w-full md:max-w-2xl mb-8">
                <h2 className="text-xl md:text-3xl font-authormedium font-bold mb-2">Get in Touch</h2>
                <p className="text-base md:text-lg font-generalregular">📞 Phone: +91 12345 67890</p>
                <p className="text-base md:text-lg font-generalregular">📧 Email: support@yourdomain.com</p>
                <p className="text-base md:text-lg font-generalregular">📍 Address: 123, Learning Street, Knowledge City, India</p>
            </div>

            {/* Contact Form */}
            <div className="w-full md:max-w-2xl md:bg-white md:p-6 rounded-2xl md:shadow-lg">
                <h2 className="text-2xl text-center  md:text-3xl mb-4 font-authormedium font-bold">Send Us a Message</h2>
                <form className="flex flex-col text-base md:text-lg space-y-4 font-generalregular" onSubmit={handleSubmit}>
                    <div>
                        <label className="block   mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:black"
                            required
                        />
                    </div>
                    <div>
                        <label className="block  mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:black"
                            required
                        />
                    </div>
                    <div>
                        <label className="block  mb-1">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message..."
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:black"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-black text-white py-3 rounded-lg hover:bg-black transition duration-200"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact
