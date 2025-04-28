import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts'
import { LoadingButton } from '../'

const Header = () => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)


    const handleLogout = () => {
        setLoading(true)
        try {
            localStorage.removeItem('token')
            // alert('Logout successful!')
            navigate('/')
            window.location.reload()
        } catch (error) {
            console.error('Logout Error:', error)
            alert('An error occurred. Please try again later.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='p-4 pt-6' >
            <div>
                <div>
                    <div className='flex justify-between items-center ' >
                        <div><Link to="/" className='bg-black text-white rounded-2xl  px-4 py-3 font-generalregular ' >Back to Home</Link></div>
                        <h1 className="text-2xl font-authormedium  flex space-x-2 ">
                            <div>Welcome,</div>
                            <div className="font-bold ">{user?.name}</div>
                        </h1>
                        <LoadingButton
                            loading={loading}
                            className="bg-black cursor-pointer text-white rounded-2xl  px-4 py-3 font-generalregular "
                            text="Logout"
                            onClick={handleLogout}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header