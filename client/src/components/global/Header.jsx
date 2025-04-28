import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='mt-2' >
            <div><Link to="/" className='bg-black text-white rounded-2xl  px-4 py-3 font-generalregular ' >Back to Home</Link></div>
        </div>
    )
}

export default Header