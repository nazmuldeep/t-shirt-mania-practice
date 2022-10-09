import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = tshirt => {
        const exixt = cart.find(ts => ts._id === tshirt._id);
        if (exixt) {
            alert('T-shirt already added')
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
            // alert('successfully added')

        }


    }
    const handleRemoveItem = tshirt => {
        const reamaining = cart.filter(ts => ts._id !== tshirt._id)
        setCart(reamaining)
    }
    return (

        < div >
            <div className="home-container">
                <div className="t-shirt-container">
                    {
                        tshirts.map(tshirt => <Tshirt
                            key={tshirt._id}
                            tshirt={tshirt}
                            handleAddToCart={handleAddToCart}
                        ></Tshirt>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}
                        handleRemoveItem={handleRemoveItem}
                    >
                    </Cart>
                </div>
            </div>
        </div >
    );
};

export default Home;