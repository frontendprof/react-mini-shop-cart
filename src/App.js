import React,{useState} from 'react';
import Basket from './components/Basket';
import Header from './components/Header';
import Main from './components/Main';

import data from "./data"



function App() {

  const [cartItems,setCartItems]=useState([]);
  
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

  return (
    <div className="App">


     <Header></Header>

     <div className="row">
       <Main onAdd={onAdd} products={products}></Main>
       <Basket onAdd={onAdd} cartItems={cartItems}/>
     </div>
    </div>
  );
}

export default App;