import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

const LandingPage = () => {
    return (
        
            <div>
                <h1>LandingPage</h1>
                <Link to="/home"><button>Home</button></Link>
            </div>
        
    )
}

export default LandingPage
