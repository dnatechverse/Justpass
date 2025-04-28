import React from 'react'
import images from '../../assets/images'

const About = () => {
    return (
        <div className='h-full' >
            <div className='h-full' >
                <div className='md:flex space-x-4' >
                    <div className='md:w-1/2' >
                        <img src={images.AboutTeam} className='rounded-3xl ' alt="" srcset="" />
                    </div>
                    <div className='md:w-1/2   ' >
                        <h1 className='font-unboundedbold text-2xl md:text-5xl text-center md:text-start p-4 py-6 ' >Why choose US</h1>
                        <p className='font-authormedium text-base md:text-2xl md:px-3 text-justify ' >At our core, we believe that every student deserves not just a second chance, but the right guidance to make that chance count. Academic setbacks like arrears are not the end of the road — they’re simply a pause, a moment to reflect, relearn, and rise. That’s where we come in. We are committed to supporting students who have faced academic hurdles by offering personalized, syllabus-aligned coaching that targets the specific challenges of each subject. Our courses are carefully crafted to follow university exam patterns, ensuring that students gain not only conceptual clarity but also the confidence to face their exams head-on. With a team of experienced faculty who are both mentors and motivators, we create an environment that is positive, student-friendly, and result-driven.</p>
                        {/* <p className='font-authormedium text-2xl px-3 '></p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About