import React from 'react';

const Option = ({text}) => {
    return (
        <div className='flex justify-between'>
            <h1>{text}</h1>
            <h1>+</h1>
        </div>
    );
};

export default Option;