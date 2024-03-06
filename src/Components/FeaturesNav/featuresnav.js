import React from 'react';
import "./featuresnav.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";



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
        <div className='arrows'>
        <FaArrowCircleLeft className='arrow-left1'/>
        <FaArrowCircleRight className='arrow-rigth1'/>
        </div>
    </div>
    );
}

export default FeaturesNav;