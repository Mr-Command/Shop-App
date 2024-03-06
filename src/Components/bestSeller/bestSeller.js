import React from 'react';
import "./bestSeller.css";
import puffchair from "../../image/puff_chair.jpg";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import bambichair5 from "../../image/bambi_chair_5.webp";
import upholsteredchair from "../../image/upholstered_chair.webp";
import woodchair from "../../image/wood_chair.jpg";



function BestSeller() {
    return (
        <div className='bestSeller-part'>
            <div className='bestSeller'><h1>BEST SELLER</h1></div>
            <div className='excepteur'><h2>EXCEPTEUR SINT OCCAECAT</h2></div>
        <section className='bestSeller-card-container'>
            <div><IoIosArrowDropleftCircle className='arrow-left'/></div>
            <section className='bestSeller-card'>
                <div className="best-price">BEST PRICE!</div>
                <img src={puffchair} alt="Furniture" className='bestSeller-card-img'/>
                <div className="card-details">
                    <h3 className='card-title'>Puff Chair</h3>
                    <section className='card-price'>€287,00</section>
                </div>
            </section>
            <section className='bestSeller-card'>
                <img src={bambichair5} alt="Furniture" className='bestSeller-card-img'/>
                <div className="card-details">
                    <h3 className='card-title'>Bambi Chair</h3>
                    <section className='card-price'>€200,00</section>
                </div>
            </section>
            <section className='bestSeller-card'>
                <div className="discount">15% OFF!</div>
                <img src={upholsteredchair} alt="Furniture" className='bestSeller-card-img'/>
                <div className="card-details">
                    <h3 className='card-title'>Upholstered Chair</h3>
                    <section className='card-price'>€399,00</section>
                </div>
            </section>
            <section className='bestSeller-card'>
                <img src={woodchair} alt="Furniture" className='bestSeller-card-img'/>
                <div className="card-details">
                    <h3 className='card-title'>Wood Chair</h3>
                    <section className='card-price'>€198,00</section>
                </div>
            </section>
            <div><IoIosArrowDroprightCircle className='arrow-rigth'/></div>
        </section>
        </div> 
   
    );
}

export default BestSeller;