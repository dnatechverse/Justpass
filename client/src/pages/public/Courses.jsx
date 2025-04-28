import React, { useState } from 'react'
import { PublicCourseData } from '../../datasets';
import { Link, useParams } from 'react-router-dom'
import { PiClock, PiClockBold, PiHandshakeBold, PiHandshakeFill, PiHandshakeLight, PiHandshakeThin } from "react-icons/pi";

const Courses = () => {

    const { _id } = useParams(); // 👈 get the ID from URL

    const course = PublicCourseData.find(c => c._id === _id); // 👈 find the course matching the ID

    if (!course) {
        return <div>Course Not Found</div>;
    }

    return (
        <div className='h-full p-4'>
            <div>
                <div className='flex space-x-4'>
                    <div className='w-1/2' >
                        <div>
                            <img src={course.img} className=' rounded-4xl  ' alt="" srcset="" />
                        </div>
                    </div>
                    <div className='w-1/2 p-6 space-y-6' >
                        <div className='space-y-4 ' >
                            <h1 className='font-unboundedbold text-4xl  ' >{course.title}</h1>
                            <p className='text-lg font-generalregular  text-gray-600 ' >{course.description}</p>
                            <div className='flex space-x-4 font-generalregular ' >
                                <div className='flex space-x-1 items-center bg-black text-white px-4 py-2 rounded-2xl  ' >
                                    <div><PiHandshakeFill /></div>
                                    <div>{course.level}</div>
                                </div>
                                <div className='flex space-x-1 items-center bg-black text-white px-4 py-2 rounded-2xl  ' >
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
                        <div className='w-full ' >
                            <div className='flex justify-end w-full items-center ' >
                                <Link to={`/enrollment-form/${_id}`} className='bg-linear-to-r from-pink-500 via-pink-600 to-red-500 hover:from-red-500 hover:via-pink-600 hover:to-pink-500 transition-colors duration-500 font-authormedium  text-white px-8 py-3 rounded-2xl text-xl ' >Enroll Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        // <div className='w-full max-w-xl mx-auto p-4'>
        //     <h1 className='text-3xl font-bold'>{course.title}</h1>
        //     <img src={course.img} alt={course.title} className='w-full rounded-lg my-4' />
        //     <p className='text-gray-600'>{course.description}</p>
        //     <p className='text-gray-800 mt-2'>Duration: {course.duration}</p>
        //     <p className='text-gray-800 mt-2'>Level: {course.level}</p>
        //     <p className='text-gray-800 mt-2'>Price: {course.price}</p>

        //     <div className='mt-4'>
        //         <h2 className='text-2xl font-semibold'>Skills You Will Learn:</h2>
        //         <ul className='list-disc ml-6 mt-2'>
        //             {course.skills.map((skill, index) => (
        //                 <li key={index}>{skill}</li>
        //             ))}
        //         </ul>
        //     </div>
        // </div>
    )
}

export default Courses