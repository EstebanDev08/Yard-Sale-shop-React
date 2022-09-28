import React from 'react'
import shoppingCart from '@icons/icon_shopping_cart.svg';


const ShopingCar = ({ totalProductsCar, toggleMenu }) => {

    const handelToggle = () => {
        toggleMenu(toggle => !toggle)
    }

    return (
        <li onClick={handelToggle} className="navbar-shopping-cart">
            <img src={shoppingCart} alt="shopping cart" />
            <div>{totalProductsCar}</div>
        </li>
    )
}

export { ShopingCar }