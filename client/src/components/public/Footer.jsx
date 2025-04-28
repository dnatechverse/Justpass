import React from 'react'
import { Link } from 'react-router-dom'
import { BrandName } from '../../utils'

const Footer = () => {
    return (
        <div className='fixed bottom-0 w-screen z-0'>
            <div className='w-full bg-black text-white font-generalregular md:h-60 px-6 py-4'>
                <div className='flex flex-col justify-between h-full'>
                    <div className='  grid grid-cols-2 md:grid-cols-4 justify-between h-full gap-y-4 '>
                        <div className='h-full  flex flex-col justify-center col-span-2 ' >
                            <h2 className=' font-bold font-authormedium text-7xl  '>{BrandName}</h2>
                            <p className='text-sm mt-1 md:mt-3 max-w-xs font-generalregular '>
                                Your gateway to passing exams with confidence. Practice. Learn. Succeed.
                            </p>
                        </div>
                        <div>
                            <h3 className='text-sm font-semibold mb-2'>Quick Links</h3>
                            <ul className='text-sm space-y-1'>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/about'>Why choose Us</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                                {/* <li><Link to='/terms'>Terms & Conditions</Link></li>
                                <li><Link to='/policy'>Privacy Policy</Link></li> */}
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-sm font-semibold mb-2'>Connect</h3>
                            <ul className='text-sm space-y-1'>
                                <li><a href='mailto:support@justpass.com'>Mail</a></li>
                                <li><a href='https://linkedin.com/company/justpass'>LinkedIn</a></li>
                                <li><a href='https://instagram.com/justpass'>Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='border-t border-gray-700 mt-4 pt-2 space-y-2 md:space-y-0 flex flex-col md:flex-row  justify-between items-center text-xs'>
                        <span>© {new Date().getFullYear()} {BrandName}. All rights reserved.</span>
                        <span>Built with ❤️ by the DnA Techverse</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
