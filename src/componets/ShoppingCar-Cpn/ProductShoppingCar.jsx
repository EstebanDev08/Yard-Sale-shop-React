import React from 'react'
import './ShoppingCar-Cpn.scss'

const ProductShoppinCar = ({ name, price, image }) => {
    return (

        <div className="shopping-cart hover">
            <figure>
                <img src={image} alt={name} />
            </figure>
            <p>{name}</p>
            <p>${price}</p>
            <img src="./icons/icon_close.png" alt="close" />
        </div>
    )
}

export { ProductShoppinCar }