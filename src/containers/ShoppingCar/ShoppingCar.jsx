import React from 'react'
import { InfoShoppingCar } from '../../componets/ShoppingCar-Cpn/InfoShoppingCar'
import { ProductShoppinCar } from '../../componets/ShoppingCar-Cpn/ProductShoppingCar'
import flechaIcon from '@icons/flechita.svg'

import "./ShoppingCar.scss"


const ShoppingCar = () => {
    return (
        <aside className="shoping-car-products menu-despegable">
            <div className="title-container">
                <img src={flechaIcon} alt="arrow" />
                <p className="title">My order</p>
            </div>
            <div className="my-order-content">

                <div className="container-orders">

                    <ProductShoppinCar name={"bike"} price={500} image={"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />

                </div>

                <InfoShoppingCar total={500} />

                <button className="primary-button">
                    Checkout
                </button>
            </div>

        </aside>
    )
}

export { ShoppingCar }