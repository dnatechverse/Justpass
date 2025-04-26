import React from 'react'
import './index.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts'

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Router />
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App