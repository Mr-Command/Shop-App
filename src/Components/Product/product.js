import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { IoIosStarHalf } from "react-icons/io";
import puffchair from "../../image/puff_chair.jpg";
import bambichair from "../../image/bambi_chair.jpg";
import bambichair2 from "../../image/bambi_chair_2.jpg";
import bambichair3 from "../../image/bambi_chair_3.jpg";
import bambichair4 from "../../image/bambi_chair_4.webp";
import officechair from "../../image/office_chair.jpg";
import trestlebasechair from "../../image/trestle_base_chair.jpg";
import upholsteredchair from "../../image/upholstered_chair.webp";
import bambichair5 from "../../image/bambi_chair_5.webp";
import woodchair from "../../image/wood_chair.jpg";
import { CiStar } from "react-icons/ci";
import "./product.css";



function Product() {
    return ( 
        <section className='card-container'>
            <section className='card'>
                <div className="new">NEW!</div>
                <img src={puffchair} alt="Furniture" className='card-img'/>
                <div className="card-details">
                    <h3 className='card-title'>Puff Chair</h3>
                    <section className='card-review'>
                    <AiFillStar className='rating-star'/>
                    <AiFillStar className='rating-star'/>
                    <AiFillStar className='rating-star'/>
                    <CiStar className='rating-star'/>
                    </section>
                    <section className='card-price'>€287,00</section>
                </div>
            </section>
            <section className='card'>
                <img src={bambichair} alt="Furniture" className='card-img'/>
                <div className="card-details">
                    <h3 className='card-title'>Bambi Chair</h3>
                    <section className='card-review'>
                    <AiFillStar className='rating-star'/>
                    <AiFillStar className='rating-star'/>
                    <IoIosStarHalf className='rating-star'/>
                    <CiStar className='rating-star'/>
                    </section>
                    <section className='card-price'>€399,00</section>
                </div>
            </section>
            <section className='card'>
                <img src={woodchair} alt="Furniture" className='card-img'/>
                <div className="card-details">
                    <h3 className='card-title'>Wood Chair</h3>
                    <section className='card-review'>
                    <AiFillStar className='rating-star'/>
                    <AiFillStar className='rating-star'/>
                    <AiFillStar className='rating-star'/>
                    <IoIosStarHalf className='rating-star'/>
                    </section>
                    <section className='card-price'>€198,00</section>
                </div>
            </section>
            <section className='card'>
            <div className="new">NEW!</div>
            <div className="discount">15% OFF!</div>
                <img src={bambichair2} alt="Furniture" className='card-img'/>
                <div className="card-details">
                    <h3 className='card-title'>Bambi Chair</h3>
                    <section className='card-review'>
                    <AiFillStar className='rating-star'/>
                    <AiFillStar className='rating-star'/>
                    <AiFillStar className='rating-star'/>
                    <IoIosStarHalf className='rating-star'/>
                    </section>
                    <section className='card-price'>€200,00</section>
                </div>
            </section>
            <section className='card'>
                <img src={bambichair3} alt="Furniture" className='card-img'/>
                <div className="card-details">
                    <h3 className='card-title'>Bambi Chair</h3>
                    <section className='card-review'>
                    <AiFillStar className='rating-star'/>
                    <AiFillStar className='rating-star'/>
                    <AiFillStar className='rating-star'/>
                    <CiStar className='rating-star'/>
                    </section>
                    <section className='card-price'>€200,00</section>
                </div>
            </section>
            <section className='card'>
                <img src={officechair} alt="Furniture" className='card-img'/>
                <div className="card-details">
                    <h3 className='card-title'>Office Chair</h3>
                    <section className='card-review'>
                    <AiFillStar className='rating-star'/>
                    <AiFillStar className='rating-star'/>
                    <AiFillStar className='rating-star'/>
                    <CiStar className='rating-star'/>
                    </section>
                    <section className='card-price'>€287,00</section>
                </div>
            </section>
            <section className='card'>
            <div className="discount">15% OFF!</div>
                <img src={upholsteredchair} alt="Furniture" className='card-img'/>
                <div className="card-details">
                    <h3 className='card-title'>Upholstered Chair</h3>
                    <section className='card-review'>
                    <AiFillStar className='rating-star'/>
                    <AiFillStar className='rating-star'/>
                    <IoIosStarHalf className='rating-star'/>
                    <CiStar className='rating-star'/>
                    </section>
                    <section className='card-price'>€399,00</section>
                </div>
            </section>
            <section className='card'>
                <img src={trestlebasechair} alt="Furniture" className='card-img'/>
                <div className="card-details">
                    <h3 className='card-title'>Trestle-base Chair</h3>
                    <section className='card-review'>
                    <AiFillStar className='rating-star'/>
                    <AiFillStar className='rating-star'/>
                    <AiFillStar className='rating-star'/>
                    <CiStar className='rating-star'/>
                    </section>
                    <section className='card-price'>€300</section>
                </div>
            </section>
            <section className='card'>
                <img src={bambichair4} alt="Furniture" className='card-img'/>
                <div className="card-details">
                    <h3 className='card-title'>Bambi Chair</h3>
                    <section className='card-review'>
                    <AiFillStar className='rating-star'/>
                    <AiFillStar className='rating-star'/>
                    <AiFillStar className='rating-star'/>
                    <IoIosStarHalf className='rating-star'/>
                    </section>
                    <section className='card-price'>€200,00</section>
                </div>
            </section>
            <section className='card'>
                <img src={bambichair5} alt="Furniture" className='card-img'/>
                <div className="card-details">
                    <h3 className='card-title'>Bambi Chair</h3>
                    <section className='card-review'>
                    <AiFillStar className='rating-star'/>
                    <AiFillStar className='rating-star'/>
                    <AiFillStar className='rating-star'/>
                    <CiStar className='rating-star'/>
                    </section>
                    <section className='card-price'>€200,00</section>
                </div>
            </section>
        </section>
        
    );
}

export default Product;