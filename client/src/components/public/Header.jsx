import React, { useContext } from 'react'
import { BrandName } from '../../utils'
import { PublicHeaderNavigation } from '../../datasets'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts'

const Header = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <div className=' flex justify-between  font-generalregular ' >
                <Link to="/" className='flex  items-center gap-1.5' >
                    <div className='bg-white w-8 h-8 rounded-full ' ></div>
                    <div>{BrandName}</div>
                </Link>
                <div>
                    <div className='flex gap-6 text-base '>
                        {
                            PublicHeaderNavigation.map((Data, index) => (
                                <div key={index}>
                                    <Link to={Data.link}>
                                        <div>{Data.name}</div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    {
                        user ? (
                            <div>
                                <Link to="/dashboard" className='px-5 py-3 rounded-full bg-black text-white text-sm ' >{user?.name}</Link>
                            </div>
                        ) : (
                            <div className='flex gap-4 items-center' >
                                <Link to="/signin"   >Sign in</Link>
                                <Link to="/register" className='px-4 py-2 rounded-full bg-black text-white text-sm ' >Register</Link>
                            </div>
                        )
                    }
                </div>
            </div >
        </div >
    )
}

export default Header