import React from 'react'
import images from '../../assets/images'
import { Link } from 'react-router-dom'

const CourseCard = ({ Data }) => {

    // const Data = [
    //     {
    //         title: "Web Development",
    //         description: "Learn to build responsive websites and full-stack web applications using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.",
    //         duration: "6 Months",
    //         skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Git & GitHub"],
    //         level: "Advanced",
    //         price: "₹15,000",
    //         img: images.WebDeveloper
    //     },
    // ]

    return (
        Data && Data.length > 0 ? (
            Data.map((course, index) => (
                <div key={index} className='w-full max-w-1/4 relative h-full bg-grey group transition-all duration-500 rounded-4xl shadow-md p-2'>
                    <div className=' w-full h-full rounded-3xl overflow-hidden mb-4' >
                        <img src={course.img} alt={course.title} className='  w-full object-cover  group-hover:scale-105 transition-all duration-500 ' />
                    </div>
                    <div className='flex flex-col justify-center items-start space-y-2 p-2 pt-0'>
                        <h2 className='text-xl font-bold font-authormedium '>{course.title}</h2>
                        <p className='text-gray-600 font-generalregular text-sm line-clamp-2'>{course.description}</p>
                        <div className="flex justify-end w-full mt-2 font-generalregular " > 
                            <Link className='bg-black px-4 py-2 rounded-full text-sm text-white ' >Explore</Link>
                        </div>
                    </div>
                    <div className='font-generalregular absolute right-4 top-4 text-black px-3 py-1 text-sm rounded-full bg-white  '>{course.level}</div>
                </div>
            ))
        ) : (
            <div>No Data</div>
        )
    )
}

export default CourseCard