import React from 'react';
import './navbarstyle.css';

function Navbar(){
    return(
        <div className='home'>
            <div className='navbar'>
                <ul className='navbar-list'>
                    <li className='hackname'> HACKFEST'22 </li> 
                    <li className='problems'> <a href='#'> Problem Statements </a> </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;