import React from 'react';
import './navbar.css';

function Navbar() {
    return ( //Burada ANasayfanın NAvbarını oluşturuyoruz
    //daha sonrasında nav açıp css de değişmek için className belirliyoruz
    //sonrasında div ile site ismini yazıyoruz ve bu site ismi tıklanılabilir oluyor.
    // en sonra parametreler için li oluşturup içine parametreleri yazıyoruz.
        <nav className='nav'>  
            <div className="marka">
            <a href="/" className='siteTitle'>Schön</a>      
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
        </nav>
    );
}

export default Navbar;