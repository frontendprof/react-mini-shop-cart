
import React from 'react'

const Header = ({countCartItems}) => {
    return (
        <header className="row block center">

            <div>
                <a href="#">
                    <h1>Mini Shop Cart</h1>
                </a>
            </div>

            <div>
                <a href="#/cart">Cart {" "}
                    {countCartItems?(<button className="badge">{countCartItems}</button>):(" ")}
                </a>
                <a href="#/signin">Signin</a>
            </div>
            
        </header>
    )
}

export default Header