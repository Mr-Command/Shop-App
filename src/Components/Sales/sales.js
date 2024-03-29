import React from 'react';
import "./sales.css"
import { AiFillStar } from "react-icons/ai";
import { IoIosStarHalf } from "react-icons/io";
//import { CiStar } from "react-icons/ci";
import bambichair5 from "../../image/bambi_chair_5.webp";
import oyocantilleverchair from "../../image/Oyo Cantillever Chair.jpg";
import curvechair from "../../image/curvechair.jpg";




function Sales() {
    return ( 
        <div>
            <div className='title'>
                <h1>Hot Sale</h1>
            </div>
            <div className='sales-card'>
                <img src={bambichair5} alt="" className='sales-card-img'/>
                <div className='sales-card-row'>
                    <h1 className='sales-card-title'>Bambi Chair</h1>
                    <section className='sales-card-review'>
                    <AiFillStar className='rating-star'/>
                    <AiFillStar className='rating-star'/>
                    <AiFillStar className='rating-star'/>
                    <IoIosStarHalf className='rating-star'/>
                    </section>
                    <div className='cost'>
                    <h3 className='old-cost'>$75,00</h3>
                    <h3 className='new-cost'>$55,00</h3>
                    </div>
                </div>
            </div>
            <div className='sales-card'>
                <img src={oyocantilleverchair} alt="" className='sales-card-img'/>
                <div className='sales-card-row'>
                    <h1 className='sales-card-title'>Oyo Cantillever Chair</h1>
                    <section className='sales-card-review'>
                    <AiFillStar className='rating-star'/>
                    <AiFillStar className='rating-star'/>
                    <AiFillStar className='rating-star'/>
                    <IoIosStarHalf className='rating-star'/>
                    </section>
                    <div className='cost'>
                    <h3 className='new-cost'>$55,00</h3>
                    </div>
                </div>
            </div>
            <div className='sales-card'>
                <img src={curvechair} alt="" className='sales-card-img'/>
                <div className='sales-card-row'>
                    <h1 className='sales-card-title'>Curve Chair</h1>
                    <section className='sales-card-review'>
                    <AiFillStar className='rating-star'/>
                    <AiFillStar className='rating-star'/>
                    <AiFillStar className='rating-star'/>
                    <IoIosStarHalf className='rating-star'/>
                    </section>
                    <div className='cost'>
                    <h3 className='old-cost'>$75,00</h3>
                    <h3 className='new-cost'>$55,00</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sales;