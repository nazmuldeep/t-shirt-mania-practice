import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = ({ house, ring }) => {
    return (
        <div>
            <h2>Father</h2>
            <p><small>House:{house}</small></p>
            <section className='flex'>
                <Brother house={house}></Brother>
                <Myself house={house} ring={ring}></Myself>
                <Sister house={house}></Sister>
            </section>
        </div>
    );
};

export default Father;