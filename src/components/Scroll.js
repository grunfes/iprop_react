import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
    
    return (
        <div className='list-box'>
            {props.children}
        </div>
    );
};


 export default Scroll;