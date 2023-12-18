import React from 'react';
import Products from './Products';

const Shopping = () => {
    
    return (
        <div className='p-5 md:w-[70%] mx-auto'>
            <h1 className='font-bold text-xl py-5 data-aos="fade-right"'>Shopping</h1>
            <Products />
        </div>
    );
}

export default Shopping;
