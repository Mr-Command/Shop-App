import React from 'react';
import "./sales.css"
import foto1 from "../../image/image.jpg"
import { AiFillStar } from "react-icons/ai";
import { IoIosStarHalf } from "react-icons/io";
//import { CiStar } from "react-icons/ci";


function Sales() {
    return ( 
        <div>
            <div className='title'>
                <h1>Hot Sales</h1>
            </div>
            <div className='sales-card'>
                <img src={foto1} alt="" className='sales-card-img'/>
                <div className='sales-card-row'>
                    <h1 className='sales-card-title'>Title Of Product</h1>
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
                <img src={foto1} alt="" className='sales-card-img'/>
                <div className='sales-card-row'>
                    <h1 className='sales-card-title'>Title Of Product</h1>
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
                <img src={foto1} alt="" className='sales-card-img'/>
                <div className='sales-card-row'>
                    <h1 className='sales-card-title'>Title Of Product</h1>
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