import React from 'react'
import images from '../../assets/images'
import { LuArrowUpRight } from "react-icons/lu";
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className='flex ' >
                <div className='w-1/2 p-4 pr-8 ' >
                    <h1 className='font-unboundedbold text-6xl ' >Every setback is a setup for a stronger comeback.</h1>
                    <p className='font-authormedium text-lg mt-6 w-3/4' >We provide focused coaching to help students clear arrears and confidently move forward in their academic journey.</p>
                    <div className='flex space-x-4 mt-6 ' >
                        <div className='w-full h-full  ' >
                            <div className='bg-grey p-4 min-h-36 rounded-3xl flex flex-col justify-between  font-generalregular  ' >
                                <div className='text-lg ' >
                                    Only Few Slots Avialable
                                </div>
                                <div className='flex justify-end' >
                                    <Link to="/login" className='bg-black text-white font-authormedium  py-3 px-6 rounded-3xl shadow-md hover:shadow-lg transition-all  duration-300 ease-in-out w-fit ' >Get Started</Link>
                                </div>
                            </div>
                        </div>
                        {/* <div className="bg-linear-to-r from-rose-500 via-pink-500 to-red-500 min-h-32 rounded-3xl h-full w-full "></div> */}
                        <div className="bg-linear-to-r from-pink-500 via-pink-600 to-red-500 min-h-36 rounded-3xl h-full w-full flex justify-center flex-col items-center space-y-3">
                            <div className="bg-white p-2  rounded-full w-fit text-xl " >
                                <LuArrowUpRight />
                            </div>
                            <p className='font-generalregular text-white ' >Enroll an Application</p>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 min-h-full  ' >
                    <img src={images.GradientGirl} alt="" className='rounded-4xl min-h-full object-cover w-full' srcset="" />
                </div>
            </div>
        </div>
    )
}

export default Home