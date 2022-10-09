import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h2>Order summery</h2>
            <h5>Order quantity:{cart.length}</h5>
        </div>
    );
};

export default Cart;