import React from 'react';


const Product = ({product,onAdd}) => {
    return (
        <div>
            <img src={product.image} alt={product.name} className="small"/>
            <h3>{product.name}</h3>
            <div>{product.price}</div>

            <div>
                <button onClick={onAdd}>Add to Cart</button>
                </div>
        </div>
    )
}

export default Product
