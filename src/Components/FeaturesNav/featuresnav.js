import React from 'react';
import "./featuresnav.css";


function FeaturesNav() {
    return ( 
    <div className='feature-nav'>
        <ul>
            <li className='featured-class'><a href="/featured">FEATURED</a></li>
            <span> | </span>
            <li><a href="/latest">LATEST</a></li>
            <span> | </span>
            <li><a href="/best-seller">BEST SELLER</a></li>
        </ul>
    </div>
    );
}

export default FeaturesNav;