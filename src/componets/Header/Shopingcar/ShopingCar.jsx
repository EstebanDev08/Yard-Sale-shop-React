import React from 'react'

const ShopingCar = ({ totalProductsCar }) => {
    return (
        <li className="navbar-shopping-cart">
            <img src="./icons/icon_shopping_cart.svg" alt="shopping cart" />
            <div>{totalProductsCar}</div>
        </li>
    )
}

export { ShopingCar }