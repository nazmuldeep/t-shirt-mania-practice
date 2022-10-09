import React, { useContext } from 'react';
import { MoneyContex } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setmoney] = useContext(MoneyContex)
    return (
        <div>
            <h2>Uncle</h2>
            <p>Money : {money}</p>
        </div>
    );
};

export default Uncle;