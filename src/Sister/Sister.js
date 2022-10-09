import React, { useContext } from 'react';
import { MoneyContex } from '../Grandpa/Grandpa';

const Sister = ({ house }) => {
    const [money, setMoney] = useContext(MoneyContex)
    return (
        <div>
            <h4>Sister</h4>
            <small>House:{house}</small> <br />
            <p><small>Money:{money}</small></p>
            <button onClick={() => setMoney(money + 1000)}>Add 1000</button>
        </div>
    );
};

export default Sister;