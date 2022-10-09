import React from 'react';
import './Tshirts.css'

const Tshirt = ({ tshirt, handleAddToCart }) => {
    const { picture, name, price } = tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} />
            <h2>{name}</h2>
            <h4>price: {price}</h4>
            <button onClick={() => handleAddToCart(tshirt)}>Buy This</button>
        </div>
    );
};

export default Tshirt;