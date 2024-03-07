import React from 'react';
import "../Sales/sales.css"
//import { CiStar } from "react-icons/ci";
import bambichair3 from "../../image/bambi_chair_3.jpg";
import oyocantilleverchair2 from "../../image/Oyo Cantillever Chair 2.jpg";
import puffchair2 from "../../image/puff_chair2.jpg";




function FeaturedProduct() {
    return ( 
        <div>
            <div className='title'>
                <h1>Featured Product</h1>
            </div>
            <div className='sales-card'>
                <img src={bambichair3} alt="" className='sales-card-img'/>
                <div className='sales-card-row'>
                    <h1 className='sales-card-title'>Bambi Chair</h1>
                    <section className='sales-card-review'>
                    </section>
                    <div className='cost'>
                    <h3 className='old-cost'>$75,00</h3>
                    <h3 className='new-cost'>$33,00</h3>
                    </div>
                </div>
            </div>
            <div className='sales-card'>
                <img src={oyocantilleverchair2} alt="" className='sales-card-img'/>
                <div className='sales-card-row'>
                    <h1 className='sales-card-title'>Oyo Cantillever Chair</h1>
                    <section className='sales-card-review'>
                    </section>
                    <div className='cost'>
                    <h3 className='new-cost'>$55,00</h3>
                    </div>
                </div>
            </div>
            <div className='sales-card'>
                <img src={puffchair2} alt="" className='sales-card-img'/>
                <div className='sales-card-row'>
                    <h1 className='sales-card-title'>Puff Chair</h1>
                    <section className='sales-card-review'>
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

export default FeaturedProduct;