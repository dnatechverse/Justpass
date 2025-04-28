import React, { useContext, useState, useEffect } from 'react'
import { BrandName } from '../../utils'
import { PublicHeaderNavigation } from '../../datasets'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts'

const Header = () => {

    const { user } = useContext(AuthContext);
    const [openMenu, setOpenMenu] = useState(false);

    function toggleMenu() {
        setOpenMenu(!openMenu);
    }

    useEffect(() => {
        if (openMenu) {
            document.body.style.overflow = 'hidden'; // Disable scroll
        } else {
            document.body.style.overflow = 'auto';   // Enable scroll
        }

        // Clean up when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [openMenu]);

    return (
        <div>
            <div className=' flex justify-between  font-generalregular items-center ' >
                <Link to="/" className='flex  items-center gap-1.5' >
                    <div className='bg-white w-8 h-8 rounded-full ' ></div>
                    <div>{BrandName}</div>
                </Link>
                <div className='w-full flex justify-end md:hidden' >
                    <div
                        className={`icon ${openMenu ? "close" : "menu"} cursor-pointer  w-fit p-1 py-2 items-end flex flex-col  relative z-20  `}
                        onClick={toggleMenu}
                    >
                        <div className="w-6 h-[1px] bg-black mb-2 transition-transform duration-500 ease-in-out"></div>
                        <div className="w-6 h-[1px] bg-black  transition-transform duration-500 ease-in-out"></div>
                    </div>
                </div>
                <div className={`absolute z-10 bg-[#00000010] md:hidden backdrop-blur-md w-screen transition-all duration-500 h-screen ${openMenu ? "left-0" : "-left-[100%]"}  top-0 `} >
                    <div className='flex flex-col items-center text-xl justify-center h-full gap-10 ' >
                        <div className='flex flex-col gap-10 text-center' >
                            {
                                PublicHeaderNavigation.map((Data, index) => (
                                    <div key={index} onClick={toggleMenu} >
                                        <Link to={Data.link}>
                                            <div>{Data.name}</div>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                        <div>

                            {
                                user ? (
                                    <div className=' ' >
                                        <Link to="/user/dashboard/enrolled-course" className='px-5 py-3 rounded-full bg-black text-white text-sm ' >{user?.name}</Link>
                                    </div>
                                ) : (
                                    <div className=' ' >
                                        <Link to="/signin" className='px-5 py-3 rounded-full bg-black text-white text-sm ' >Register</Link>

                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <div className='md:flex gap-6 text-base hidden '>
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
                <div className="hidden md:block" >
                    {
                        user ? (
                            <div>
                                <Link to="/user/dashboard/enrolled-course" className='px-5 py-3 rounded-full bg-black text-white text-sm ' >{user?.name}</Link>
                            </div>
                        ) : (
                            <div className='flex gap-4 items-center' >
                                <Link to="/signin"   >Sign in</Link>
                                <Link to="/register" className='px-4 py-2 rounded-full bg-black text-white text-sm ' >Register</Link>
                            </div>
                        )
                    }
                </div>
            </div >
        </div >
    )
}

export default Header