import React from 'react';
import "./schön.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";



function Schön() {
    return ( 
        <div className='bottomPart-body'>
            <h1 className='schön-title'>schön.</h1>
            <p className='schön-paragraph'>Curabitur a ante a odio vehicula dignissim sit amet at augue.
                 Vestibulum lacinia erat scelerisque erat accumsan, 
                vitae aliquet leo porta. Donec ligula est, hendrerit id imperdiet 
                in, gravida eget mi. Vestibulum nec vulputate mi. </p>
                <div className='links'>
                    <a href="/"><FaTwitter className='Twitter'/></a>
                    <a href="/" ><FaFacebookF className='Facebook'/></a>
                    <a href="/" ><FaGooglePlusG className='Google'/></a>
                    <a href="/" ><FaYoutube className='Youtube'/></a>
                    <a href="/" ><FaLinkedinIn className='Linkedin'/></a>
                    <a href="/" ><FaWhatsapp className='Whatsapp'/></a>
                </div>
        </div>
        
    );
}

export default Schön;