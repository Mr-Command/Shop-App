import React from 'react';
import './images.css';
import foto1 from "../../image/image.jpg"

function Images() {
    return ( 
        <div>
            <div>
                <img className="big-Image" src={foto1} alt="" />
            </div>
            <div className='small-Images'>
            <img
                src={foto1}
                alt="Küçük Resim"
                className="small-Image-Left"
            />
             <div className="small-images-column">
                    <img
                        src={foto1}
                        alt="Küçük Resim 2"
                        className="small-Image"
                    />
                    <img
                        src={foto1}
                        alt="Küçük Resim 3"
                        className="small-Image"
                    />
                </div>
                <img
                src={foto1}
                alt="Küçük Resim"
                className="small-Image-Rigth"
            />
        </div>
        </div>
    );
}

export default Images;