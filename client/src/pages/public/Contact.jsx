import React from 'react'

const Contact = () => {
    return (
        <div className="w-full flex flex-col items-center p-6">
            <h1 className="font-unboundedbold text-5xl mb-4">Contact Us</h1>
            <p className="font-authormedium text-xl text-center max-w-2xl mb-6">
                Have questions, need guidance, or want to learn more about our courses? We're here to help!
                Reach out to us anytime, and our team will get back to you as soon as possible.
            </p>

            {/* Contact Information */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow-lg w-full max-w-2xl mb-8">
                <h2 className="text-3xl font-authormedium font-bold  mb-2">Get in Touch</h2>
                <p className="text-lg font-generalregular ">📞 Phone: +91 12345 67890</p>
                <p className="text-lg font-generalregular ">📧 Email: support@yourdomain.com</p>
                <p className="text-lg font-generalregular ">📍 Address: 123, Learning Street, Knowledge City, India</p>
            </div>

            {/* Contact Form */}
            <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-3xl mb-4 font-authormedium font-bold ">Send Us a Message</h2>
                <form className="flex flex-col space-y-4 font-generalregular">
                    <div>
                        <label className="block text-lg mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:black"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-lg mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="your.email@example.com"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:black"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-lg mb-1">Message</label>
                        <textarea
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
