import React from 'react'
import { BrandName } from '../../utils'
import { PublicHeaderNavigation } from '../../datasets'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className=' flex justify-between  font-generalregular ' >
                <div className='flex items-center gap-1.5' >
                    <div className='bg-white w-8 h-8 rounded-full ' ></div>
                    <div>{BrandName}</div>
                </div>
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
                <div className='flex gap-4 items-center' >
                    <Link to="/signin"   >Sign in</Link>
                    <Link to="/register" className='px-4 py-2 rounded-full bg-black text-white text-sm ' >Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Header