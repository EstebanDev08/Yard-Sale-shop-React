import React from 'react'
import closeIcon from '@icons/icon_close.png'

import './ShoppingCar-Cpn.scss'

const ProductShoppinCar = ({ name, price, image }) => {
    return (

        <div className="shopping-cart hover">
            <figure>
                <img src={image} alt={name} />
            </figure>
            <p>{name}</p>
            <p>${price}</p>
            <img src={closeIcon} alt="close" />
        </div>
    )
}

export { ProductShoppinCar }