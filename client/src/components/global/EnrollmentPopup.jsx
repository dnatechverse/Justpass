import React from 'react'
import images from '../../assets/images'
import { Link } from 'react-router-dom'
import { HiArrowSmallLeft } from "react-icons/hi2";

const EnrollmentPopup = () => {
    return (
        <div className="absolute bg-[#00000020] h-full w-full left-0 top-0 backdrop-blur-xs flex justify-center items-center overflow-x-hidden">
            <div className="bg-white md:w-fit relative rounded-3xl shadow-lg h-fit overflow-hidden w-5/6 md:max-w-3/5">
                <div className='flex justify-center h-40 md:h-72 w-full  ' >
                    <img src={images.EnrollmentUser} alt="" className='w-full object-cover  ' srcset="" />
                </div>
                <div className="absolute top-3 left-3  flex items-center   z-10 ">
                    <Link to="/" className='bg-white p-1 hover:scale-105 transition-all duration-300 text-2xl rounded-full  ' ><HiArrowSmallLeft  /></Link> 
                    {/* <div className='bg-black text-white p-1 ' >back to Home</div>    */}
                </div> 
                <div className=' p-3 md:p-6 md:px-12 relative z-0 font-authormedium  ' >
                    <div className="absolute w-full -top-1/2 h-full bg-white pointed-ellipse left-0 hidden md:block "></div>
                    <div className='relative z-10 md:-mt-18 md:pb-4   flex flex-col items-center'  >
                        <h3 className="text-xl md:text-3xl font-unboundedbold mb-2 md:mb-4">You are already enrolled!</h3>
                        <div className="text-base md:text-xl mb-4 ">
                            It looks like you are already enrolled in this course. You cannot enroll again.
                        </div>
                        <Link to="/user/dashboard/enrolled-course" className="bg-black text-white text-sm  px-6 py-2 rounded-2xl  transition duration-300 md:text-xl mb-2 md:mb-6 hover:scale-105 ">dashboard</Link>
                        <div className="text-base font-generalregular hidden md:block  text-gray-500 w-3/4 text-center">
                            If you have any questions or concerns, please feel free to reach out to our <Link className='text-black hover:underline ' to="/contact" >support team</Link>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnrollmentPopup
