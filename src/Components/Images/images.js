import React from 'react';
import './images.css';
import foto1 from "../../image/Ligthning_pendant_lamps.png"
import foto2 from "../../image/my_small_writing.png"
import foto3 from "../../image/modular_longue.png"
import foto4 from "../../image/modular_technical.png"
import foto5 from "../../image/image-1.png"

function Images() {
    return ( 
        <div>
            <div>
                <img className="big-Image" src={foto1} alt="Büyük Resim" />
            </div>
            <div className='small-Images'>
            <img
                src={foto2}
                alt="Küçük Resim"
                className="small-Image-Left"
            />
             <div className="small-images-column">
                    <img
                        src={foto3}
                        alt="Küçük Resim 2"
                        className="small-Image"
                    />
                    <img
                        src={foto4}
                        alt="Küçük Resim 3"
                        className="small-Image"
                    />
                </div>
                <img
                src={foto5}
                alt="Küçük Resim"
                className="small-Image-Rigth"
            />
        </div>
        </div>
    );
}

export default Images;