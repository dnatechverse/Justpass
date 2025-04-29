import React, { useEffect, useState } from 'react'
import images from '../../assets/images'

const Toast = ({ type, messageTitle, messageDesc }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (type) {
            setVisible(true);

            const timer = setTimeout(() => {
                setVisible(false);
            }, 3000); // Hide after 3 seconds

            return () => clearTimeout(timer);
        }
    }, [type]);

    if (!type) return null;

    const image = type === 'success' ? images.SuccessToast : images.ErrorToast;

    return (
        <div
            className={`
                fixed top-0 left-0 right-0 flex justify-center z-50 
                transition-transform duration-700 ease-in-out 
                ${visible ? 'top-6 ' : '-top-28 '}
            `}
        >
            <div className='bg-white shadow-md p-2 md:p-4 rounded-2xl md:rounded-3xl max-w-md flex space-x-2 md:space-x-4 items-center'>
                <img src={image} className=' w-12 h-12 md:w-20 md:h-20 object-cover rounded-xl md:rounded-3xl' alt="Toast Icon" />
                <div>
                    <h2 className='font-authormedium text-base md:text-xl font-bold'>{messageTitle}</h2>
                    <p className='font-generalregular text-xs md:text-sm text-gray-500 md:mt-1'>{messageDesc}</p>
                </div>
            </div>
        </div>
    )
}

export default Toast
