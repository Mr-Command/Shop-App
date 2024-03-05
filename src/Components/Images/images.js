import React from 'react';
import './images.css';
import foto1 from "../../image/image.jpg"

function Images() {
    return ( 
        <div>
            <div>
                <img className="big-Image" src={foto1} alt="" />
            </div>
            <div className="small-images">
                <img className="small-Image-1" src={foto1} alt="" />
                <div>
                    <img className="small-Image-2" src={foto1} alt="" />
                    <img className="small-Image-3" src={foto1} alt="" />
                </div>
                <img className="small-Image-4" src={foto1} alt="" />
            </div>

        </div>
    );
}

export default Images;