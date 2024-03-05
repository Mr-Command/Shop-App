import React from 'react';
import "./features.css";


function Features() {
    return ( 
    <div className='feature-nav'>
        <ul>
            <li><a href="">FEATURED</a></li>
            <span> | </span>
            <li><a href="">LATEST</a></li>
            <span> | </span>
            <li><a href="">BEST SELLER</a></li>
        </ul>
    </div>
    );
}

export default Features;