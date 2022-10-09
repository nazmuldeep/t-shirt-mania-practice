import React, { useContext } from 'react';
import { RingContex } from '../Grandpa/Grandpa';

const Friend = () => {
    const [house, setHouse] = useContext(RingContex)
    return (
        <div>
            <h3>Friend</h3>
            <p><small>Gift:{house}</small></p>
            <button onClick={() => setHouse(house - 1)}>Decrease</button>
        </div>
    );
};

export default Friend;