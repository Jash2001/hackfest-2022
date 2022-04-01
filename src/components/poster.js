import React from  'react';
import './posterstyle.css';
import logo from '../Assets/images/poster.png';

function Poster(){
    return (
        <div className='poster-logo'>
            <img src={logo} className='poster-logo'></img>
        </div>
    )
}

export default Poster;
