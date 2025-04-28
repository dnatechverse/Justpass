import React, { useContext } from 'react'
import { AuthContext } from '../../contexts'

const Profile = () => {

    const { user } = useContext(AuthContext)
    console.log(user)

    return (
        <div>
            <div>
                <div>
                    <div>
                        <div>{user?.name}</div>
                        <div>{user?.email}</div>
                        <div>{user?.phoneNo}</div>
                        <div>{user?.collegeName}</div>
                        <div>{user?.collegeAddress}</div>
                        <div>{user?.degree}</div>
                        <div>{user?.department}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile