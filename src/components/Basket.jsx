import React from 'react';



const Basket = ({cartItems,onAdd,onRemove,itemsPrice,taxPrice,shippingPrice,totalPrice}) => {
    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            <div>
                {cartItems.length===0&&<div>Cart is Empty</div>}
            </div>
            {cartItems.map(item=>(
                <div className="row" key={item.id}>
                    <div className="col-2">{item.name}</div>

                    <div className="col-2">
                        <button onClick={()=>onAdd(item)} className="add">+</button>
                        <button onClick={()=>onRemove(item)} className="remove">-</button>
        
                    </div>

                    <div className="col-2 text-right">{item.qty} &times; ${item.price.toFixed(2)}</div>
                </div>

                
            ))}

            {cartItems.length!==0 && (
                <>
                    <hr/>

                    <div className="row">
                        <div className="col-2">Items Price</div>
                        <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                    </div>

                    <div className="row">
                        <div className="col-2">Tax</div>
                        <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                    </div>

                    <div className="row">
                        <div className="col-2">Shipping</div>
                        <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
                    </div>

                    <div className="row ">
                        <div className="col-2"><strong>Total</strong></div>
                        <div className="col-1 text-right"><strong>${totalPrice.toFixed(2)}</strong></div>
                    </div>

                    <hr/>
                    <div className="row">
                        <button onClick={()=>alert("Implement Checkout")}>Checkout</button>
                    </div>
                </>
            )}
        </aside>
    )
}

export default Basket