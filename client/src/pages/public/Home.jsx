import React, { useContext } from 'react'
import images from '../../assets/images'
import { LuArrowUpRight } from "react-icons/lu";
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts';
import { CourseCard } from '../../components';
import CourseData from '../../datasets/public/CourseDetails';

const Home = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    // if (!user) {
    //     navigate('/signin')
    // }

    return (
        <div>
            <div>
                <div>
                    <div>
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
                                                    <Link to="/signin" className='bg-black text-white font-authormedium  py-3 px-6 rounded-3xl shadow-md hover:shadow-lg transition-all  duration-300 ease-in-out w-fit ' >Get Started</Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="bg-linear-to-r from-rose-500 via-pink-500 to-red-500 min-h-32 rounded-3xl h-full w-full "></div> */}
                                        <Link to={user ? "/enrollment-form" : "/signin"} className="bg-linear-to-r from-pink-500 via-pink-600 to-red-500 hover:from-red-500 hover:via-pink-600 hover:to-pink-500 transition-colors duration-500 min-h-36 rounded-3xl h-full w-full flex justify-center flex-col items-center space-y-3 group">
                                            <div className="bg-white p-2 transition-all duration-300  rounded-full w-fit group-hover:scale-110 group-hover:mb-6 text-xl " >
                                                <LuArrowUpRight />
                                            </div>
                                            <p className='font-generalregular text-white group-hover:scale-110 transition-all duration-300' >Enroll an Application</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className='w-1/2 min-h-full  ' >
                                    <img src={images.GradientGirl} alt="" className='rounded-4xl min-h-full object-cover w-full' srcset="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-center my-12 mb-8">
                            <h1 className="text-4xl md:text-5xl font-bold font-unboundedbold text-black mb-4">
                                Special Launch Offer – Limited Seats Available!
                            </h1>
                            <p className="text-gray-600 text-lg md:text-xl font-generalregular">
                                Grab our top courses at exclusive launch discounts. Learn from the best and start your journey today!
                            </p>
                        </div>

                        <div>
                            <div className="flex justify-center items-start gap-6">
                                <CourseCard Data={CourseData} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home