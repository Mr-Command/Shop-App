import React from 'react';
import './navbar.css';
import marka from "../../image/marka.png";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";


function Navbar() {
    return ( //Burada ANasayfanın NAvbarını oluşturuyoruz
    //daha sonrasında nav açıp css de değişmek için className belirliyoruz
    //sonrasında div ile site ismini yazıyoruz ve bu site ismi tıklanılabilir oluyor.
    // en sonra parametreler için li oluşturup içine parametreleri yazıyoruz.
        <nav className='nav'>  
            <div className="marka">
                <a href="/">
                    <img src={marka} alt="Schön" className="logo" />
                </a>
            </div>
            <div className="parameters">
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/collections">Collections</a></li>
                <li><a href="/pages">Pages</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            </div>
            <div className='profile-container'>
                <a href="/"><CiSearch className='nav-icons'/></a>
                <a href="/"><CiHeart className='nav-icons'/></a>
                <a href="/"><CiShoppingCart className='nav-icons'/></a>
                <a href="/"><CgProfile className='nav-icons'/></a>
            </div>
        </nav>
    );
}

export default Navbar;