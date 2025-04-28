import React from 'react'
import { UserNavigation } from '../../datasets'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className='min-w-40 bg-white h-fit shadow-sm p-6 rounded-3xl'>
            <div>
                {
                    UserNavigation.map((item, index) => (
                        <div key={index} className='py-2'>
                            <div className='text-sm font-generalregular text-gray-500 hover:text-black cursor-pointer'>
                                <Link to={`/${item.link}`}>{item.name}</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Navigation
