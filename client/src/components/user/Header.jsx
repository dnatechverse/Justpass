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
        <div className='md:p-4 md:pt-6 p-3' >
            <div>
                <div>
                    <div className='md:flex justify-between items-center ' >
                        <div  className='flex items-center justify-between w-full text-sm  md:hidden ' > 
                            <div><Link to="/" className='bg-black text-white rounded-2xl md:hidden px-4 py-3 font-generalregular ' >Home</Link></div>
                            <LoadingButton
                                loading={loading}
                                className="bg-black cursor-pointer text-white rounded-4xl  px-4 py-3 font-generalregular md:hidden  w-fit "
                                text="Logout"
                                onClick={handleLogout}
                            />
                        </div>
                        <div><Link to="/" className='bg-black text-white hidden md:block rounded-2xl  px-4 py-3 font-generalregular ' >Back to Home</Link></div>
                        <h1 className="text-2xl font-authormedium  space-x-2 hidden md:flex items-center justify-center ">
                            <div>Welcome,</div>
                            <div className="font-bold ">{user?.name}</div>
                        </h1>
                        <h1 className=" font-authormedium text-3xl   flex md:hidden items-center flex-col  ">
                            <div className='text-xl ' >Welcome,</div>
                            <div className="font-bold ">{user?.name}</div>
                        </h1>
                        <LoadingButton
                            loading={loading}
                            className="bg-black cursor-pointer hidden md:block text-white rounded-2xl  px-4 py-3 font-generalregular "
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