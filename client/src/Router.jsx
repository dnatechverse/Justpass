import React from 'react'
import { PublicRoutes, UserRoutes } from './routes'

const Router = () => {
    return (
        <div>
            <PublicRoutes />
            <UserRoutes />
        </div>
    )
}

export default Router