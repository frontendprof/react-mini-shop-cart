import React,{useState} from 'react';
import Basket from './components/Basket';
import Header from './components/Header';
import Main from './components/Main';

import data from "./data"



function App() {

  const [cartItems,setCartItems]=useState([]);

  const itemsPrice=cartItems.reduce((a,c)=>a+c.price*c.qty,0);
  const taxPrice=itemsPrice*0.14;
  const shippingPrice=itemsPrice>2000?0:50;
  const totalPrice=itemsPrice+taxPrice+shippingPrice;
  
  const {products}=data;

  const onAdd=product=>{
    const exist=cartItems.find(x=>x.id===product.id);

    if(exist){
      setCartItems(cartItems.map(x=>
        x.id===product.id?{...exist,qty:exist.qty+1}:x
        ))
    }else{
      setCartItems([...cartItems,{...product, qty:1}])
    }
  }

  const onRemove=product=>{
    const exist=cartItems.find(x=>x.id===product.id);

    if(exist.qty===1){
      setCartItems(cartItems.filter(x=>x.id!==product.id))
    }else{
      setCartItems(cartItems.map(x=>
        x.id===product.id?{...exist,qty:exist.qty-1}:x
        ))
    }
  }

  return (
    <div className="App">


     <Header countCartItems={cartItems.length}></Header>

     <div className="row">
       <Main onAdd={onAdd} products={products}></Main>
       <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} 
          itemsPrice={itemsPrice} taxPrice={taxPrice} shippingPrice={shippingPrice} totalPrice={totalPrice}
       />
     </div>
    </div>
  );
}

export default App;