import React from 'react';
import { AiFillStar } from "react-icons/ai";
import foto1 from "../../image/image-1.png";
import { CiStar } from "react-icons/ci";
import "./product.css";



function Product() {
    return ( 
        <section className='card-container'>
            <section className='card'>
                <img src={foto1} alt="Furniture" className='card-img'/>
                <div className="card-details">
                    <h3 className='card-title'>koltuk</h3>
                    <section className='card-review'>
                    <AiFillStar className='rating-star'/>
                    <AiFillStar className='rating-star'/>
                    <AiFillStar className='rating-star'/>
                    <AiFillStar className='rating-star'/>
                    <CiStar />
                    </section>
                    <section className='card-price'>€300</section>
                </div>
            </section>
        </section>
    );
}

export default Product;