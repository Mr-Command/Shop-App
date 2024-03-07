import React from 'react';
import "./productTag.css";

function ProductTag() {
    return ( 
        <div className='bottomPart-body'>
            <div className='producttag-body'>
            <h1 className='producttag-title'>Product Tags</h1>
            <div className='tags'>
                <a href="/" className='tag'>Sofas</a>
                <a href="/" className='tag'>ArmChair</a>
                <a href="/" className='tag'>Living</a>
                <a href="/" className='tag'>Bedroom</a>
                <a href="/" className='tag'>Ligthning</a>
                <a href="/" className='tag'>Tables</a>
                <a href="/" className='tag'>Pouf</a>
                <a href="/" className='tag'>Wood</a>
                <a href="/" className='tag'>Office</a>
                <a href="/" className='tag' >Outdoor</a>
                <a href="/" className='tag'>Kitchen</a>
                <a href="/" className='tag'>Staols</a>
                <a href="/" className='tag'>Foodstaols</a>
            </div>
            </div>
        </div>
        
    );
}

export default ProductTag;