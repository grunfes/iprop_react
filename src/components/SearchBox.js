import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='search pa2'>
            <input 
                className='pa3 ba b--green c--lightgrey'
                type='search' 
                placeholder='start typing ...' 
                onChange = {searchChange}
            />
        </div>
    );
}

export default SearchBox;