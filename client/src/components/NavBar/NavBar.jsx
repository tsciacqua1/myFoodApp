import React from 'react'
import { Link } from 'react-router-dom';
import Filters from '../Filters/Filters';
import './NavBar.css'

const NavBar = () => {

    return (
        <div>
            <nav className="menu">
                    <div className='navbar'>
                        <Link to='/home' id='home'>Home</Link>
                        <Link to='/newrecipe' id='newrecipe'>Create Recipe</Link>
                    </div>
                    <div><Filters/></div>
                    {/* <div className='searchbar'><SearchBar/></div> */}
            </nav>
        </div>
        
    )
}

export default NavBar
