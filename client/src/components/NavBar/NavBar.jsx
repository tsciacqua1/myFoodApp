import React from 'react'
import './NavBar.scss'

const NavBar = () => {

    return (
        <div>
            {/* <div className='navigation'>
                <hr className='line' />
                    <div class="container">
                        <nav class="menu">
                            <ul class="main-menu">
                                <li class="active"><i class="fa fa-home"></i><a href="/home/!">Home</a></li>
                                <li><i class="fa fa-user"></i><a href="/newrecipe">CreateRecipe</a></li>
                            </ul>
                        </nav>
                    </div>
            </div> */}
            <div id="wrapper">
                <div id="top"></div>
                <div id="middle"></div>
                <div id="bottom"></div>
            </div>
            <div className="container">
                <nav className='navbar'>
                    <a href="/home/!">Home</a>
                    <a href="/newrecipe">Create Recipe</a>
                    <div class="animation start-home"></div>
                </nav>
            </div>
            <hr class="accessory"></hr>
        </div>
    )
}

export default NavBar
