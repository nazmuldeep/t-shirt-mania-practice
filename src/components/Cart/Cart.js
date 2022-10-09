import React from 'react';

const Cart = ({ cart, handleRemoveItem }) => {
    return (
        <div>
            <h2>Order summery</h2>
            <h5>Order quantity:{cart.length}</h5>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;