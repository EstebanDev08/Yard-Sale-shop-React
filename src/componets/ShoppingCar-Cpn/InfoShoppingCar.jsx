import React from 'react'
import './ShoppingCar-Cpn.scss'

const InfoShoppingCar = ({ total }) => {
    return (

        <div className="order">
            <p>
                <span>Total</span>
            </p>
            <p>${total}</p>
        </div>
    )
}

export { InfoShoppingCar }