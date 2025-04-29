import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts';
import { useNavigate, useParams } from 'react-router-dom';
import { PublicCourseData } from '../../datasets';
import axios from 'axios';
import { EnrollmentPopup, LoadingButton, Toast } from '../../components';

const EnrollmentForm = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { _id } = useParams(); // get the ID from URL
    const API_URL = import.meta.env.VITE_API_URL; // get the API URL from environment variables
    const [showPopup, setShowPopup] = useState(false);
    const [loading, setLoading] = useState(false);
    const [toastData, setToastData] = useState({
        type: '', // 'success' or 'error'
        messageTitle: '',
        messageDesc: ''
    });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
    });

    if (!user) {
        navigate('/signin');
    }

    useEffect(() => {
        if (user) {
            const checkEnrollment = async () => {
                try {
                    const res = await axios.get(`${API_URL}/api/users/enrollment/one/${user.email}`);
                    if (res.data && res.data.length > 0) {
                        // Email exists in database
                        setShowPopup(true);
                        // alert('You are already enrolled in a course!');
                    }
                } catch (error) {
                    console.error('Error checking enrollment:', error);
                }
            };
            checkEnrollment();
        } else {
            // navigate('/signin');
        }
    }, [user]);

    // find the course by _id if available
    const selectedCourse = _id ? PublicCourseData.find(c => c._id === _id) : null;

    useEffect(() => {
        if (selectedCourse) {
            setFormData(prev => ({ ...prev, course: selectedCourse.title }));
        }
    }, [selectedCourse]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`${API_URL}/api/users/enrollment`, formData);
            //alert(response.data.message);
            setFormData({
                name: '',
                email: '',
                phone: '',
                course: '',
            });
            if (response.data) {
                setToastData({
                    type: 'success',
                    messageTitle: 'Enrollment Successful',
                    messageDesc: response.data.message,
                });

                setTimeout(() => {
                    navigate('/');
                    window.location.reload()  // Reload the page to reflect the new state
                }, 3000);
            } else {
                setToastData({
                    type: 'error',
                    messageTitle: 'Enrollment Failed',
                    messageDesc: response.data.message || 'Please try again.',
                });
            }
            // navigate('/'); // Redirect to home page after successful enrollment
            // window.location.reload(); // Reload the page to reflect changes
            // navigate('/success'); // Navigate after success (you can change the route)
        } catch (error) {
            setToastData({
                type: 'error',
                messageTitle: 'Enrollment Error',
                messageDesc: error.response?.data?.message || 'Something went wrong!',
            });
            // console.error('Enrollment error:', error);
            // alert(error.response?.data?.message || 'Something went wrong!');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (showPopup) {
            document.body.style.overflow = 'hidden'; // Disable scroll
        } else {
            document.body.style.overflow = 'auto';   // Enable scroll
        }

        // Clean up when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showPopup]);

    useEffect(() => {
        if (toastData.type) {
            const timeout = setTimeout(() => {
                setToastData({
                    type: '',
                    messageTitle: '',
                    messageDesc: ''
                });
            }, 3000); // 3 seconds

            return () => clearTimeout(timeout);
        }
    }, [toastData]);

    return (
        <div className="md:max-w-2/5 mx-auto mt-6 md:mt-0 md:p-8 md:px-12 md:bg-white md:shadow-md rounded-4xl  w-full">
            {toastData.type && (
                <Toast
                    type={toastData.type}
                    messageTitle={toastData.messageTitle}
                    messageDesc={toastData.messageDesc}
                />
            )}
            {showPopup && <EnrollmentPopup />}
            <h2 className="text-4xl font-unboundedbold font-bold mb-6 text-center">Enrollment Form</h2>
            <form onSubmit={handleSubmit} className="space-y-5 text-sm md:text-lg font-generalregular">
                {/* Full Name */}
                <div>
                    <label className="block mb-1" htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block mb-1" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                {/* Phone Number */}
                <div>
                    <label className="block mb-1" htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                {/* Course Selection */}
                <div>
                    <label className="block mb-1" htmlFor="course">Select Course</label>
                    {
                        selectedCourse ? (
                            // If selectedCourse exists from _id
                            <select
                                id="course"
                                name="course"
                                value={selectedCourse.title}
                                // disabled
                                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 "
                            >
                                <option value={selectedCourse.title}>
                                    {selectedCourse.title}
                                </option>
                            </select>
                        ) : (
                            // If no selectedCourse, allow user to choose
                            <select
                                id="course"
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            >
                                <option value="" disabled>Select your course</option>
                                {
                                    PublicCourseData.map((course, index) => (
                                        <option key={index} value={course.title}>
                                            {course.title}
                                        </option>
                                    ))
                                }
                            </select>
                        )
                    }
                </div>


                {/* Submit Button */}
                <div>
                    <LoadingButton
                        loading={loading}
                        className="w-full  bg-black cursor-pointer text-white py-3 rounded-lg  transition-colors"
                        text="Submit"
                    />
                </div>
            </form>
        </div>
    );
}

export default EnrollmentForm;
