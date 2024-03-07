import React from 'react';
import { FaTwitter } from "react-icons/fa";
import "./twitter.css";



function Twitter() {
    return ( 
        <div className='bottomPart-body'>
            <h1 className='Twitter-title'>Twitter</h1>
            <div className='tweet'> <FaTwitter className='Tweet-logo'/><p className='twitter-paragraph'>Curabitur a ante a odio vehicula dignissim sit amet at augue.
                 Vestibulum lacinia erat scelerisque erat accumsan, </p></div>
            <div className='tweet'> <FaTwitter className='Tweet-logo' size='2x'/><p className='twitter-paragraph'>Curabitur a ante a odio vehicula dignissim sit amet at augue.
            Vestibulum lacinia erat scelerisque erat accumsan,vitae aliquet leo porta. Donec ligula est, hendrerit id imperdiet  </p></div>
        </div>
        
    );
}

export default Twitter;