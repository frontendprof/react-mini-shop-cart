import React from 'react';


const Product = ({product}) => {
    return (
        <div>
            <img src={product.image} alt={product.name} className="small"/>
            <h3>{product.name}</h3>
            <div>{product.price}</div>

            <div><button>Add to Cart</button></div>
        </div>
    )
}

export default Product
