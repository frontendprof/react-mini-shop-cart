import React from 'react';



const Basket = ({cartItems,onAdd,onRemove}) => {
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
        </aside>
    )
}

export default Basket