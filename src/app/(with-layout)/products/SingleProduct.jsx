import React from 'react';

const SingleProduct = ({ product }) => {

const { id, title, price } = product ;

    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default SingleProduct;