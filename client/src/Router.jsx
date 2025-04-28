import React from 'react'
import { PublicRoutes, UserRoutes } from './routes'
import { ScrollToTop } from './components'

const Router = () => {
    return (
        <div>
            <ScrollToTop />
            <PublicRoutes />
            <UserRoutes />
        </div>
    )
}

export default Router