import React from 'react'
import shoppingCart from '@icons/icon_shopping_cart.svg';


const ShopingCar = ({ totalProductsCar }) => {
    return (
        <li className="navbar-shopping-cart">
            <img src={shoppingCart} alt="shopping cart" />
            <div>{totalProductsCar}</div>
        </li>
    )
}

export { ShopingCar }