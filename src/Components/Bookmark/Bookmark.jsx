import React from 'react';
import PropTypes from 'prop-types'

const Bookmark = ({ bookmark }) => {
    console.log(bookmark)
    const { title } = bookmark;
    return (
        <div className='bg-slate-200 p-4 rounded-lg m-4'>
            <h3 className='text-3xl'> {title}</h3>
        </div>
    );
};

export default Bookmark;