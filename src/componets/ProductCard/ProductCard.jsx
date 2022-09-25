import React from 'react'
import './ProductCard.scss'

const ProductCard = ({ precio, name }) => {
    return (

        <div class="product-card">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <div class="product-info">
                <div>
                    <p>${precio}</p>
                    <p>{name}</p>
                </div>
                <figure>
                    <img src="./icons/bt_add_to_cart.svg" alt="" />
                </figure>
            </div>
        </div>
    )
}

export { ProductCard }