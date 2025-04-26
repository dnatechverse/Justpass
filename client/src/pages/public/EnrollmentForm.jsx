import React, { useContext } from 'react'
import { AuthContext } from '../../contexts'
import { useNavigate } from 'react-router-dom'

const EnrollmentForm = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    if (!user) {
        navigate('/signin')
    }

    return (
        <div>EnrollmentForm</div>
    )
}

export default EnrollmentForm