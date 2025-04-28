import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts'
import axios from 'axios'
import { PublicCourseData } from '../../datasets'
import { PiClockBold, PiHandshakeFill } from 'react-icons/pi'
import images from '../../assets/images'
import { Link } from 'react-router-dom'

const Courses = () => {
    const { user } = useContext(AuthContext)
    const API_URL = import.meta.env.VITE_API_URL;
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    useEffect(() => {
        if (user) {
            const fetchEnrolledCourses = async () => {
                try {
                    const res = await axios.get(`${API_URL}/api/users/enrollment/one/${user.email}`);
                    if (res.data && res.data.length > 0) {
                        setEnrolledCourses(res.data);
                    } else {
                        setEnrolledCourses([]);
                    }
                } catch (error) {
                    console.error('Error fetching enrolled courses:', error);
                }
            };
            fetchEnrolledCourses();
        }
    }, [user])

    // Find detailed course data by matching title
    const matchedCourses = enrolledCourses.map((enrolled) => {
        return PublicCourseData.find((course) => course.title === enrolled.course);
    }).filter(course => course); // remove undefined if no match found

    return (
        <div className=' ' >
            <div>
                <div className='flex justify-between items-center ' >
                    <h1 className="text-2xl text-center md:text-start md:text-4xl font-unboundedbold md:mb-6">{matchedCourses.length > 0 ? " Enrolled Course" : "No Courses Enrolled Yet"}</h1>

                </div>
                <div>
                    <div>
                        {
                            matchedCourses.length > 0 ? (
                                <div className="w-full ">
                                    {matchedCourses.map((course) => (
                                        <div key={course._id} className=" w-full flex space-x-4">
                                            <div className='w-1/2' >
                                                <img src={course.img} alt={course.title} className="w-full object-cover mb-4 max-h-96 rounded-3xl" />
                                            </div>
                                            <div className="w-1/2 py-6 px-4 mb-4">
                                                <div className='space-y-4 ' >
                                                    <h1 className='font-unboundedbold text-4xl  ' >{course.title}</h1>
                                                    <p className='text-lg font-generalregular  text-gray-600 ' >{course.description}</p>
                                                    <div className='flex space-x-4 font-generalregular ' >
                                                        <div className='flex space-x-1 items-center bg-black text-white px-4 py-2 rounded-2xl  ' >
                                                            <div><PiHandshakeFill /></div>
                                                            <div>{course.level}</div>
                                                        </div>
                                                        <div className='flex space-x-1 items-center bg-linear-to-r from-pink-500 via-pink-600 to-red-500 hover:from-red-500 hover:via-pink-600 hover:to-pink-500 transition-colors duration-500 text-white px-4 py-2 rounded-2xl  ' >
                                                            <div><PiClockBold /></div>
                                                            <div>{course.duration}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-full'>
                                                    <div className='w-full space-y-4 mt-8' >
                                                        <h3 className='font-authormedium text-2xl font-semibold  ' >Skills you're going to learn</h3>
                                                        <div className=' flex flex-wrap w-full space-x-4 space-y-3 font-generalregular '>
                                                            {course.skills.map((skill, index) => (
                                                                <div className='bg-grey border-[1px] border-black  px-4 py-1.5 h-fit min-w-24 text-center rounded-2xl  ' key={index}>{skill}</div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-4 flex flex-col items-center  md:max-h-[460px] rounded-3xl  md:overflow-hidden ">
                                    <img src={images.EmptyEnrollment} className='  md:w-3/5 rounded-4xl ' alt="" srcset="" />
                                    <div className='relative md:-mt-40 md:overflow-hidden   w-full h-full md:min-h-80 ' >
                                        <div className="absolute w-full hidden md:block  h-full bg-white pointed-ellipse left-0 z-0  "></div>
                                        <div className='relative font-authormedium  w-full flex items-center flex-col   ' >
                                            <div className="text-lg mt-3 md:mt-12  text-black md:absolute z-10 md:max-w-2/5  mx-auto space-y-6">
                                                <div>It looks like you haven't enrolled in any courses yet.
                                                Explore our available courses and start your learning journey today!</div>
                                                <Link to="/" className="bg-black text-white px-6 py-4 rounded-2xl  transition duration-300 text-sm md:text-xl  hover:scale-105   ">Explore Courses</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses
