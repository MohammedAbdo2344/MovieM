import React from 'react';

const FilteredData = () => {
    return (
        <section className='FilteredData'>
            <button className='btnFilter'>Newest First</button>
            <button className='btnFilter' >Oldest First</button>
            <select className='options' >
                <option>All Categories</option>
                <option>Category 1</option>
                <option>Category 2</option>
            </select>
        </section>
    );
}

export default FilteredData;
