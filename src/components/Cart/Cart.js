import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveItem }) => {
    let message;
    if (cart.length === 0) {
        message = <p> At least pursures one iteam</p>
    }
    else {
        message = <div>
            <h2>Amr jonno ekta neo</h2>
            <p>tmr jonno r ekta neo</p>
            <p><small>Amr jonno aro ekta neo please</small></p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 2 ? `orange` : 'blue'}>Order summery</h2>
            <h5 className={`bold ${cart.length === 2 ? 'purple' : 'yellow'}`}>Order quantity:{cart.length}</h5>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {
                cart.length === 3 ? <p> Three person gift is ready</p> : <p> purchases koro </p>
            }
            <p>And operator</p>
            {
                cart.length === 2 && <h2>Double iteam purchased done</h2>
            }
            {
                cart.length === 4 || <p> Four iteam purchased <small> koro nai</small></p>
            }
        </div>
    );
};

export default Cart;


// 1. use element in variable , and use if else condition
// 2. ternary operator for ? True : false
// 3. && operator for true case
// 4. || operator for false case