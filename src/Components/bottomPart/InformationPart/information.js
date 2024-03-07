import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import "./information.css"

function Information() {
    return ( 
        <div className='bottomPart-body'>
            <div className='information-body'>
            <h1 className='information-title'>Information</h1>
            <div className='informations'>
                <div className='adress'>
                    <p className='info-adress'>Surte 168, 348 Concaugth Road Central</p>
                    <div className='location-info'>
                        <FaLocationDot className='location-icon'/>
                        <p className='country'>ABD / New York</p>
                    </div>
                </div>
                <div className='phone'>
                    <p className='number'>+1 (555) 313 33 11</p>
                    <FaPhoneAlt className='phone-icon'/>
                </div>
                <div className='mail-information'>
                    <p className='mail'>info@schön.com</p>
                    <CiMail className='mail-icon'/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Information;